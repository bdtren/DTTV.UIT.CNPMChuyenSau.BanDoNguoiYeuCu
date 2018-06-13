var selected = -1;
var work = localStorage.getItem("work");
if (!work) {
  work = 0;
  localStorage.setItem("work", work);
}

/***********************************************************/
/***************CÁC MODEL + XỬ LÝ TRÊN TRANG QUẢNG CÁO*****/
/*********************************************************/
//Mở model chi tiết thẻ cào
function openModelTheCao(position) {
  selected = position;
  $("#addition-result").hide();

  document.getElementById("lbName").innerHTML =
    '<a href="../../all-post.php?MAKH=' +
    arrTable[position]["MAKH"] +
    '">' +
    arrTable[position]["HOTEN"] +
    "</a>";
  document.getElementById("lbCompany").innerHTML =
    arrTable[position]["COMPANY"];
  document.getElementById("lbSerial").innerHTML = arrTable[position]["SERIAL"];
  document.getElementById("lbTime").innerHTML = formatDate(
    new Date(arrTable[position]["NGAYTHU"])
  );
  document.getElementById("lbCardID").innerHTML =
    arrTable[position]["MATHECAO"];
  document.getElementById("lbCardPrice").value = arrTable[position]["DOANHTHU"];
}

//Xử ly nhấn các phím trong modal
function moneyFail() {
  var price = document.getElementById("lbCardPrice").value;
  updateDoanhThu("that-bai", selected, price);
}

function moneySuccess() {
  var price = document.getElementById("lbCardPrice").value;
  updateDoanhThu("thanh-cong", selected, price);
}

//Thêm số tiền vào bảng doanhthu và bảng khachhang
function updateDoanhThu(result, position, price) {
  selected = position;
  if (price < 10000) {
    document.getElementById("addition-result").className = "alert alert-danger";
    document.getElementById("addition-result").innerHTML =
      "<strong>Nhập thất bại!</strong> giá tiền phải từ 10,000VND và là bội số của 10,000";
    return;
  }

  var dat = [];
  dat[0] = arrTable[position]["MADT"];
  dat[1] = arrTable[position]["MAKH"];
  dat[2] = result == "thanh-cong" ? price : 0;
  var deposit = dat[2] - arrTable[selected]["DOANHTHU"];
  dat[3] = result == "thanh-cong" ? deposit : 0;

  //alert(JSON.stringify(dat));
  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "nhapThemTien", data: dat },
    type: "post",
    success: function(output) {
      if (output == "1.successfully2.successfully") {
        arrTable[selected]["DOANHTHU"] = price;
        document.getElementById("addition-result").className =
          "alert alert-success";
        document.getElementById("addition-result").innerHTML =
          "<strong>Thành công!</strong> Số tiền đã được lưu lại";
      } else {
        document.getElementById("addition-result").className =
          "alert alert-danger";
        document.getElementById("addition-result").innerHTML =
          "<strong>Thất bại!</strong> Không thể lưu kết quả, mã lỗi:" + output;
      }
      $("#addition-result").show();
      arrTable[selected]["TRALOI"] = document.getElementById("taAnswer").value;
    }
  });
}

/************************************************************/
/***************CÁC MODEL + XỬ LÝ TRÊN TRANG KIỂM DUYỆT*****/
/**********************************************************/
//Mở một modal tin cơ bản
function openBasicModal(position) {
  //$("#addition-result").hide();
  selected = position;

  document.getElementById("lbTitle").innerHTML =
    '<a href="../../product-detail.php?MATD=' +
    arrTable[position]["MATD"] +
    '">' +
    arrTable[position]["TIEUDE"] +
    "</a>";
  document.getElementById("lbName").innerHTML =
    '<a href="../../all-post.php?MAKH=' +
    arrTable[position]["MAKH"] +
    '">' +
    arrTable[position]["HOTEN"] +
    "</a>";
  document.getElementById("lbDate").innerHTML = formatDate(
    new Date(arrTable[position]["NGAYDANG"])
  );
  var postType = "";
  switch (arrTable[position]["LOAITIN"]) {
    case "ribbon-new":
      postType = "Tin mới";
      break;
    case "ribbon-hot":
      postType = "Tin hot";
      break;
    case "ribbon-discount":
      postType = "Tin giảm giá";
      break;
    default:
      postType = "Tin thường";
      break;
  }
  document.getElementById("lbPostType").innerHTML = postType;

  var dat = arrTable[position]["MATD"];
  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "layDanhMucTin", data: dat },
    type: "post",
    success: function(output) {
      document.getElementById("lbCategory").innerHTML = "";
    }
  });
  var cost = numberWithCommas(parseInt(arrTable[position]["GIABAN"]), "VND");
  document.getElementById("lbPrice").innerHTML = cost;

  document.getElementById("lbState").innerHTML =
    arrTable[position]["TINHTRANGMH"];
  var imgs = arrTable[position]["HINHANH"].split(";");
  var imglink = "";
  for (var i = 0; i < imgs.length; i++) {
    imglink +=
      '<a href="../../' +
      imgs[i] +
      '" ><img src="../../' +
      imgs[i] +
      '" alt="hinhanh" style="width: 100px; height: 100px; border: 1px solid #767575;"></a>';
  }
  document.getElementById("lbImage").innerHTML = imglink;
  document.getElementById("taDetail").innerHTML = arrTable[position]["TAMSU"];
  document.getElementById("lbDeal").innerHTML = arrTable[position]["PTGD"];
}
//Mở model duyệt tin đặc biệt
function openModelDuyetTinDB(position) {
  //$("#addition-result").hide();

  var title = "";
  openBasicModal(position);
  switch (arrTable[position]["TINHTRANGTIN"]) {
    case "duyet moi":
      title = "Tin mới";
      break;
    case "duyet hot":
      title = "Tin hot";
      break;
    case "duyet gg":
      title = "Tin giảm giá";
      break;
    default:
      break;
  }
  document.getElementById("htitle").innerHTML = title;

  document.getElementById("lbPayResult").innerHTML = title;

  var postType;
  switch (arrTable[position]["LOAITIN"]) {
    case "ribbon-new":
      postType = "Tin mới";
      break;
    case "ribbon-hot":
      postType = "Tin hot";
      break;
    case "ribbon-discount":
      postType = "Tin giảm giá";
      break;
    default:
      postType = "Tin thường";
      break;
  }
  document.getElementById("lbPostType").innerHTML = postType;
}
//Mở model duyệt tin đăng mới
function openModelDuyetTinDang(position) {
  openBasicModal(position);
}

//Mở model duyệt tin đăng vi phạm
function openModelDuyetTinViPham(position) {
  var i;
  for (i = 0; i < arrBC.length; i++) {
    if (arrBC[i]["MAKH"] == arrTable[position]["KHBC"]) {
      document.getElementById("lbNgBC").innerHTML =
        '<a href="../../all-post.php?MAKH=' +
        arrBC[i]["MAKH"] +
        '">' +
        arrBC[i]["HOTEN"] +
        "</a>";
      document.getElementById("taReport").innerHTML = arrTable[i]["CHITIET"];
      break;
    }
  }
  openBasicModal(position);
}

//Chuyển tin đăng từ đang chờ sang đang đăng

/*********************************************************************/
/***************CÁC MODEL + XỬ LÝ TRÊN TRANG CHĂM SÓC KHÁCH HÀNG*****/
/*******************************************************************/
//Mở model câu hỏi
function openModelCauHoi(position) {
  $("#addition-result").hide();
  selected = position;
  document.getElementById("lbName").innerHTML =
    '<a href="../../all-post.php?MAKH=' +
    arrTable[position]["MAKH"] +
    '">' +
    arrTable[position]["HOTEN"] +
    "</a>";
  //Đối với bảng câu hỏi
  //document.getElementById("lbTime").innerHTML = formatDate(new Date(arrTable[position]["NGAYGUI"]));
  document.getElementById("lbType").innerHTML = arrTable[position]["LOAIHOTRO"];
  document.getElementById("taIssue").innerHTML =
    arrTable[position]["VANDEGIAIDAP"];
  document.getElementById("taDetail").innerHTML = arrTable[position]["CHITIET"];
  document.getElementById("taAnswer").value = arrTable[position]["TRALOI"];
}

//Mở model phản hồi
function openModelPhanHoi(position) {
  $("#addition-result").hide();
  selected = position;
  document.getElementById("lbName").innerHTML =
    '<a href="../../all-post.php?MAKH=' +
    arrTable[position]["MAKH"] +
    '">' +
    arrTable[position]["HOTEN"] +
    "</a>";
  //Đối với bảng phản hồi
  document.getElementById("lbTime").innerHTML = formatDate(
    new Date(arrTable[position]["NGAYPH"])
  );
  document.getElementById("lbSatisfy").innerHTML = addStar(
    arrTable[position]["MUCDO"]
  );
  document.getElementById("lbIntroduce").innerHTML = addStar(
    arrTable[position]["KNGT"]
  );
  document.getElementById("taResponse").innerHTML =
    arrTable[position]["PHANHOI"];
}

//Thêm câu trả lời
function addTraLoi() {
  work++;
  var dat = [];
  dat[0] = arrTable[selected]["MATM"];
  dat[1] = document.getElementById("taAnswer").value;
  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "themCauTraLoi", data: dat },
    type: "post",
    success: function(output) {
      if (output == "successfully") {
        document.getElementById("addition-result").className =
          "alert alert-success";
        document.getElementById("addition-result").innerHTML =
          "<strong>Thành công!</strong> Câu trả lời đã được lưu lại";
      } else {
        document.getElementById("addition-result").className =
          "alert alert-danger";
        document.getElementById("addition-result").innerHTML =
          "<strong>Thất bại!</strong> Không thể lưu câu trả lời, mã lỗi:" +
          output;
      }
      $("#addition-result").show();
      arrTable[selected]["TRALOI"] = document.getElementById("taAnswer").value;
    }
  });
}

/***************************************/
/************Các hàm xử lý phụ*********/
/*************************************/
//Chỉnh lại format ngày tháng năm
function formatDate(date) {
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
}

//thêm sao vàng
function addStar(activeStar) {
  var result = "";
  var check = "";
  for (var i = 0; i < 5; i++) {
    if (activeStar > 0) {
      activeStar--;
      check = "checked";
    } else {
      check = "";
    }

    result += '<span class="fa fa-star ' + check + '"></span>';
  }

  return result;
}

//Tạo số có dấu
function numberWithCommas(x, unit) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".") + " " + unit;
}

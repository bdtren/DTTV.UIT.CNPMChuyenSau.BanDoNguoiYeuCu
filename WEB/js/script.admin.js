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
    arrTable[position]["NHAMANG"];
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

//Mở modal chi tiết quảng cáo
function openModelChiTietQC(position) {
  selected = position;
  $("#see h5").html(arrTable[position]["TIEUDE"]);
  document.getElementById("lbName").innerHTML = arrTable[position]["HOTEN"];
  document.getElementById("lbTime").innerHTML =
    formatDate(new Date(arrTable[position]["NGAYBD"])).toString() +
    " đến " +
    formatDate(new Date(arrTable[position]["NGAYKT"])).toString();

  var imgs = arrTable[position]["DDANH"].split(";");
  var imglink = "";
  for (var i = 0; i < imgs.length; i++) {
    if(imgs[i]=="") continue;
    imglink +=
      '<a href="../../' +
      imgs[i] +
      '" ><img src="../../' +
      imgs[i] +
      '" alt="hinhanh" style="width: 100px; height: 100px; border: 1px solid #767575;"></a>';
  }
  document.getElementById("lbImage").innerHTML = imglink;

  document.getElementById("taContent").innerHTML =
    arrTable[position]["CHITIET"];
}

//-------------Model thêm tin khuyến mãi
//Lấy ra những hình ảnh được thêm
function showUploadedItem(source) {
  var list = document.getElementById("uploaded-image");

  var img = document.createElement("img");
  //img.style.width="100%";
  img.setAttribute("width", "100px");
  img.setAttribute("height", "auto");
  img.src = source;
  list.appendChild(img);
}
//Bắt sự kiện khi thêm ảnh mới
var imageLocal = [];
function themAnhQc(th){
    var i, img, reader, file;
    var localLen = th.files.length;
    if(localLen>5){
      alert("Bạn đã tải lên quá nhiều ảnh!\nHệ thống chỉ ghi nhận TỐI ĐA 5 ảnh đầu tiên!");
      localLen = 5;
    }
    //document.getElementById("uploaded-image").innerHTML = "...";
    for (i = 0; i < localLen; i++) {
      file = th.files[i];
      if (!file.type.match(/image.*/)) {
        alert(
          "Sai định dạng, định đạng hình ảnh cho phép: jpg, jpeg, png, bmp, gif, svg"
        );
        continue;
      }
      reader = new FileReader();
      reader.onloadend = function(e) {
        showUploadedItem(e.target.result);
      };
      reader.readAsDataURL(file);
      imageLocal.push(file);

    }
}
//Thêm khuyến mãi mới
function addKhuyenMai() {
  var dat = [];
  var error = false;
  var errorList = [];

  dat[0] = nv[0]["MANV"];
  dat[1] = document.getElementById("ipTitle").value;
  dat[2] = document.getElementById("ipStartday").value;
  dat[3] = document.getElementById("ipEndday").value;
  dat[5] = document.getElementById("ipContent").value;

  if (dat[1] == "") {
    error = true;
    errorList.push("Tiêu đề");
  }
  if (new Date(dat[2]) > new Date(dat[3])) {
    error = true;
    errorList.push("(Ngày bắt đầu lớn hơn ngày kết thúc)");
  } else {
    if (dat[2] == "") {
      error = true;
      errorList.push("Ngày bắt đầu");
    }
    if (dat[3] == "") {
      error = true;
      errorList.push("Ngày kết thúc");
    }
  }
  if (imageLocal.length==0) {
    error = true;
    errorList.push("Ảnh minh họa");
  }
  if (dat[5] == "") {
    error = true;
    errorList.push("Nội dung khuyến mãi");
  }
  if (error) {
    document.getElementById("addition-result").className = "alert alert-danger";
    document.getElementById("addition-result").innerHTML =
      '<a class="close" onclick="$(this).parent().hide()">&times;</a>\n<strong>Thất bại!</strong> vui lòng điền thông tin <i>' +
      errorList.join(", ") +
      "</i>";

    $("#addition-result").show();
    return;
  }

    //Up load hình ảnh
    var imageNames = "";
    var promises=[];

    for(var i = 0;i<imageLocal.length;i++){
      file = imageLocal[i];
      var dat2 = [];
        dat2[0] = nv[0]["MANV"];
        dat2[1] = document.getElementById("ipTitle").value;
        dat2[2] = document.getElementById("ipStartday").value.replace(/\-/g, "");
        dat2[3] = document.getElementById("ipEndday").value.replace(/\-/g, "");
        //alert(JSON.stringify(dat));
        
        var formDat = new FormData();
        formDat.append("anhQuangCao", file);
        dat2 = JSON.stringify(dat2);
        formDat.append("data", dat2);
        var request = $.ajax({
          url: "../../xulyphp/xulyAnh.php",
          data: formDat,
          type: "post",
          processData: false,
          contentType: false,
          cache: false,
          success: function(output) {
            imageNames += (i == 0) ? "" : ";";
            imageNames += output;
            //showUploadedItem(output);
            //alert(imageNames);
          }
        });
        promises.push(request);
    }
    $.when.apply(null, promises).done(function(){
      //alert(imageNames);
      dat[4] = imageNames.substring(1,imageNames.length);
      $.ajax({
        url: "../../xulyphp/xulyAdmin.php",
        data: { callFunction: "themKhuyenMai", data: dat },
        type: "post",
        success: function(output) {
          if (output == "successfully") {
            document.getElementById("addition-result").className =
              "alert alert-success";
            document.getElementById("addition-result").innerHTML =
              "<strong>Thành công!</strong> Khuyến mãi đã được khởi tạo.";
          } else {
            document.getElementById("addition-result").className =
              "alert alert-danger";
            document.getElementById("addition-result").innerHTML =
              "<strong>Thất bại!</strong> Không thể lưu kết quả, mã lỗi:" + output;
          }
          $("#addition-result").show();
        }
      });
   })
    
  
  //alert(JSON.stringify(dat));
  
}

//Xóa quảng cáo
function deleteQuangCao(position) {
  selected = position;
  var dat = [];
  dat[0] = arrTable[position]["MAKM"];

  //alert(JSON.stringify(dat));
  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "xoaKhuyenMai", data: dat },
    type: "post",
    success: function(output) {
      if (output == "successfully") {
        alert("Thành công, đã xóa khuyến mãi: " + arrTable[position]["TIEUDE"]);
        location.reload();
      } else {
        alert("Xóa không thành công, mã lỗi " + output);
      }
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
//Mở model duyệt tin đặc biệt
var needMoney = 0;
var newSpecialName="";
function openModelDuyetTinDB(position) {
  //$("#addition-result").hide();

  var title = "";
  openBasicModal(position);
  switch (arrTable[position]["TINHTRANGTIN"]) {
    case "duyet moi":
      title = "Tin mới";
      for(var i=0;i<arrPrice.length;i++){
        if(arrPrice[i]["LOAITIN"]=="ribbon-new"){
          needMoney = arrPrice[i]["GIA"]; break;
        }
      }
      newSpecialName="ribbon-new";
      break;
    case "duyet hot":
      title = "Tin hot";
      title = "Tin mới";
      for(var i=0;i<arrPrice.length;i++){
        if(arrPrice[i]["LOAITIN"]=="ribbon-new"){
          needMoney = arrPrice[i]["GIA"]; break;
        }
      }
      newSpecialName="ribbon-hot";
      break;
    case "duyet gg":
      title = "Tin giảm giá";
      title = "Tin mới";
      for(var i=0;i<arrPrice.length;i++){
        if(arrPrice[i]["LOAITIN"]=="ribbon-new"){
          needMoney = arrPrice[i]["GIA"]; break;
        }
      }
      newSpecialName="ribbon-discount";
      break;
    default:
      needMoney = 0;
      break;
  }
  document.getElementById("htitle").innerHTML = title;
  //alert(arrTable[position]["SODU"]+"|||"+needMoney);
  if(parseFloat(arrTable[position]["SODU"])>=parseFloat(needMoney)){
    document.getElementById("lbPayResult").style.color = "green";
    document.getElementById("lbPayResult").innerHTML = "Đủ tiền thanh toán";
    document.getElementById("btnSuccess").disabled = false;
    
  } else{
    document.getElementById("lbPayResult").style.color = "red";
    document.getElementById("lbPayResult").innerHTML = "Không thể thanh toán";
    document.getElementById("btnSuccess").disabled = true;

  }

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
//Xử ly nhấn các phím trong modal
function specialFail() {
  updateDacBiet("that-bai", selected, "ribbon-normal", 0);
}

function specialSuccess() {
  updateDacBiet("thanh-cong", selected, newSpecialName, needMoney);
}

//Thêm thay đổi tin đặc biệt vào bảng tindang và bảng khachhang
function updateDacBiet(result, position, newSName, price) {
  selected = position;
  if (newSName==""||needMoney<0) {
    document.getElementById("addition-result").className = "alert alert-danger";
    document.getElementById("addition-result").innerHTML =
      "<strong>Nhập thất bại!</strong> Dữ liệu đầu vào trống rỗng";
    return;
  }

  var dat = [];
  dat[0] = arrTable[position]["MATD"];
  dat[1] = newSName;
  dat[2] = arrTable[position]["MAKH"];
  dat[3] = arrTable[position]["SODU"]-price;
  if(dat[3]<0){
    document.getElementById("addition-result").className = "alert alert-danger";
    document.getElementById("addition-result").innerHTML =
      "<strong> Lỗi!</strong> không được phát sinh nợ cho khách hàng";
    return;
  }

  //alert(JSON.stringify(dat));
  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "ThemTinDB", data: dat },
    type: "post",
    success: function(output) {
      if (output == "1.successfully2.successfully") {
        arrTable[selected]["TINHTRANGTIN"] = "da dang";
        arrTable[selected]["LOAITIN"] = dat[1];
        arrTable[selected]["SODU"] = dat[3];
        document.getElementById("addition-result").className =
          "alert alert-success";
          if(result=="thanh-cong"){
            document.getElementById("addition-result").innerHTML =
          "<strong>Thành công!</strong> tin đăng đặc biệt đã được tạo.";
          } else{
            document.getElementById("addition-result").innerHTML =
            "<strong>Thành công!</strong> tin đăng đã được HỦY khỏi tạo tin đặc biệt.";
          }
      } else {
        document.getElementById("addition-result").className =
          "alert alert-danger";
        document.getElementById("addition-result").innerHTML =
          "<strong>Thất bại!</strong> Không thể lưu kết quả, mã lỗi:" + output;
      }
      $("#addition-result").show();
    }
  });
}

//Chuyển tin đăng từ đang chờ sang đang đăng
//Xử ly nhấn các phím trong modal
function censorFail() {
  updateKiemDuyet("that-bai", selected);
}

function censorSuccess() {
  updateKiemDuyet("thanh-cong", selected);
}

//Thêm thay đổi tin đặc biệt vào bảng tindang và bảng khachhang
function updateKiemDuyet(result, position) {
  selected = position;

  var dat = [];
  dat[0] = arrTable[position]["MATD"];
  dat[1] = arrTable[position]["MAKH"];
  dat[2] = result =="thanh-cong"?"da dang":"da huy";


  // if(false){
  //   document.getElementById("addition-result").className = "alert alert-danger";
  //   document.getElementById("addition-result").innerHTML =
  //     "<strong> Lỗi!</strong> không được phát sinh nợ cho khách hàng";
  //   return;
  // }

  //alert(JSON.stringify(dat));
  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "duyetTinCho", data: dat },
    type: "post",
    success: function(output) {
      if (output == "1.successfully2.successfully") {
        arrTable[selected]["TINHTRANGTIN"] = "da dang";
        arrTable[selected]["LOAITIN"] = dat[1];
        arrTable[selected]["SODU"] = dat[3];
        document.getElementById("addition-result").className =
          "alert alert-success";
          if(result=="thanh-cong"){
            document.getElementById("addition-result").innerHTML =
              "<strong>Thành công!</strong> tin đăng đã được đưa lên chợ.";
          } else{
            document.getElementById("addition-result").innerHTML =
            "<strong>Thành công!</strong> tin đăng đã được HỦY.";
          }
      } else {
        document.getElementById("addition-result").className =
          "alert alert-danger";
        document.getElementById("addition-result").innerHTML =
          "<strong>Thất bại!</strong> Không thể lưu kết quả, mã lỗi:" + output;
      }
      $("#addition-result").show();
    }
  });
}



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

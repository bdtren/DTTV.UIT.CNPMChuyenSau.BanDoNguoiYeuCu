var selected = -1;
var work = localStorage.getItem('work');
if (!work) {
    work = 0;
    localStorage.setItem('work', work);
}

/***************CÁC MODEL TRÊN TRANG KIỂM DUYỆT*/
//Mở model duyệt tin đặc biệt
function openModelDuyetTinDB(position){
    //$("#addition-result").hide();
    selected = position;
    var title = "ahihi";
    
    switch(arrTable[position]['TINHTRANGTIN']){
        case 'duyet moi':
            title="Tin mới";
        break;
        case 'duyet moi':
            title="Tin hot";
        break;
        case 'duyet moi':
            title="Tin giảm giá";
        break;
        default: break;
    }
    document.getElementById("htitle").innerHTML = title;
    document.getElementById("lbTitle").innerHTML = arrTable[position]['TIEUDE'];
    document.getElementById("lbName").innerHTML = '<a target="_blank" href="../admin-all-post.php?MAKH='+arrTable[position]["MAKH"]+'">'+arrTable[position]["HOTEN"]+'</a>';
    document.getElementById("lbDate").innerHTML = formatDate(new Date(arrTable[position]["NGAYDANG"]));
    
    document.getElementById("lbPayResult").innerHTML = title;

    var postType;
    switch(arrTable[position]['LOAITIN']){
        case 'ribbon-new':
            postType="Tin mới";
        break;
        case 'ribbon-hot':
            postType="Tin hot";
        break;
        case 'ribbon-discount':
            postType="Tin giảm giá";
        break;
        default: postType="Tin thường";break;
    }
    document.getElementById("lbPostType").innerHTML = postType;
    document.getElementById("lbGroup").innerHTML = title;
    var cost = numberWithCommas(parseInt(arrTable[position]['GIABAN']), "VND");
    document.getElementById("lbCost").innerHTML = cost;

    document.getElementById("lbState").innerHTML = arrTable[position]['TINHTRANGMH'];
    var imgs = arrTable[position]['HINHANH'].split(";");
    var imglink = "";
    for(var i = 0;i<imgs.length;i++){
        imglink+='<a href="../../'+ imgs[i] + '" ><img src="../../' + imgs[i] + '" alt="hinhanh" style="width: 100px; height: 100px; border: 1px solid #767575;"></a>';
    }
    document.getElementById("lbImage").innerHTML = imglink;
    document.getElementById("taDetail").innerHTML = arrTable[position]['TAMSU'];
    document.getElementById("lbDeal").innerHTML = arrTable[position]['PTGD'];
}
//Mở model duyệt tin đăng mới
function openModelDuyetTinDang(position){

}



/***************CÁC MODEL TRÊN TRANG CHĂM SÓC KHÁCH HÀNG*/
//Mở model câu hỏi
function openModelCauHoi(position) {
    $("#addition-result").hide();
    selected = position;
    document.getElementById("lbName").innerHTML = '<a target="_blank" href="../admin-all-post.php?MAKH='+arrTable[position]["MAKH"]+'">'+arrTable[position]["HOTEN"]+'</a>';
    //Đối với bảng câu hỏi
    //document.getElementById("lbTime").innerHTML = formatDate(new Date(arrTable[position]["NGAYGUI"]));
    document.getElementById("lbType").innerHTML = arrTable[position]["LOAIHOTRO"];
    document.getElementById("taIssue").innerHTML = arrTable[position]["VANDEGIAIDAP"];
    document.getElementById("taDetail").innerHTML = arrTable[position]["CHITIET"];
    document.getElementById("taAnswer").value = arrTable[position]["TRALOI"];
  }

//Mở model phản hồi
function openModelPhanHoi(position) {
    $("#addition-result").hide();
    selected = position;
    document.getElementById("lbName").innerHTML = '<a target="_blank" href="../admin-all-post.php?MAKH='+arrTable[position]["MAKH"]+'">'+arrTable[position]["HOTEN"]+'</a>';
    //Đối với bảng phản hồi
    document.getElementById("lbTime").innerHTML = formatDate(new Date(arrTable[position]["NGAYPH"]));
    document.getElementById("lbSatisfy").innerHTML = addStar(arrTable[position]["MUCDO"]);
    document.getElementById("lbIntroduce").innerHTML = addStar(arrTable[position]["KNGT"]);
    document.getElementById("taResponse").innerHTML = arrTable[position]["PHANHOI"];
}

//Thêm câu trả lời
function addTraLoi(){
    work++;
    var dat = [];
    dat[0] = arrTable[selected]['MATM'];
    dat[1] = document.getElementById("taAnswer").value;
    $.ajax({
        url: "../../xulyphp/xulyAdmin.php",
        data: { callFunction: 'themCauTraLoi', data: dat, },
        type: "post",
        success: function(output) {
            if(output=="successfully"){
                document.getElementById("addition-result").className =
                    "alert alert-success";
                document.getElementById("addition-result").innerHTML =
                    '<strong>Thành công!</strong> Câu trả lời đã được lưu lại';
            } else{
                document.getElementById("addition-result").className =
                    "alert alert-danger";
                document.getElementById("addition-result").innerHTML =
                    '<strong>Thất bại!</strong> Không thể lưu câu trả lời';
            }
            $("#addition-result").show();            
            arrTable[selected]["TRALOI"]=document.getElementById("taAnswer").value;
        }
    });
}


/************Các hàm xử lý phụ*********/
//Chỉnh lại format ngày tháng năm
function formatDate(date) {
  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}

//thêm sao vàng
function addStar(activeStar){
    var result = "";
    var check = "";
    for(var i = 0;i<5;i++){
        if(activeStar>0){
            activeStar--;
            check="checked";
        }
        else{
            check="";
        }

        result += '<span class="fa fa-star '+check+'"></span>';
    }

    return result;
}

//Tạo số có dấu
function numberWithCommas(x, unit){
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".") +" "+ unit;
}


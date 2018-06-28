var selected = -1;
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



function openModelPhanHoi(position) {
    
  document.getElementById("lbName").innerHTML = '<a href="../../all-post.php?MAKH='+arrTable[position]["MAKH"]+'">'+arrTable[position]["HOTEN"]+'</a>';
  //Đối với bảng phản hồi
  document.getElementById("lbTime").innerHTML = formatDate(new Date(arrTable[position]["NGAYPH"]));
  document.getElementById("lbSatisfy").innerHTML = addStar(arrTable[position]["MUCDO"]);
  document.getElementById("lbIntroduce").innerHTML = addStar(arrTable[position]["KNGT"]);
  document.getElementById("taResponse").innerHTML = arrTable[position]["PHANHOI"];
}

function openModelCauHoi(position) {
    
    document.getElementById("lbName").innerHTML = '<a href="../../all-post.php?MAKH='+arrTable[position]["MAKH"]+'">'+arrTable[position]["HOTEN"]+'</a>';
    //Đối với bảng câu hỏi
    //document.getElementById("lbTime").innerHTML = formatDate(new Date(arrTable[position]["NGAYGUI"]));
    document.getElementById("lbType").innerHTML = arrTable[position]["LOAIHOTRO"];
    document.getElementById("taIssue").innerHTML = arrTable[position]["VANDEGIAIDAP"];
    document.getElementById("taDetail").innerHTML = arrTable[position]["CHITIET"];
    document.getElementById("taAnswer").innerHTML = arrTable[position]["TRALOI"];
    

  }

function formatDate(date) {
  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}

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



function onLogout() {
  //Get storage
  var after = Date.now();
  var before = Date.parse(localStorage.getItem("startDate"));
  var work = localStorage.getItem("work");
  var result = parseFloat((after - before) / 1000 / 60 / 60).toFixed(3); //Thời gian online tính bằng giờ


  var dat = [];
  dat[0] = nv[0]["MANV"];
  dat[1] = "NV0005";
  dat[2] = getToday();
  dat[3] = "Đã trả lời: " + work + " thắc mắc";
  dat[4] =  result;

  $.ajax({
    url: "../../xulyphp/xulyAdmin.php",
    data: { callFunction: "themPhanCong", data: dat },
    type: "post",
    success: function(output) {
      if (output == "successfully") {
        
      } else {
        
      }
      $("#addition-result").show();
      arrTable[selected]["TRALOI"] = document.getElementById("taAnswer").value;
    }
  });
  localStorage.clear();
  
}

//Lấy ngày hiện tại
function getToday() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

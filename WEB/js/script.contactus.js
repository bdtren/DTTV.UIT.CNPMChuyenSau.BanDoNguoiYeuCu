$(document).ready(function() {
  $("#btnsend").click(function() {
    var error = false;
    var info = [];
    info[0] = document.getElementById("ipname").value;
    info[1] = document.getElementById("ipemail").value;
    info[2] = document.getElementById("ipphone").value;
    info[3] = document.getElementById("tacontent").value;

    //Kiểm tra các vị trí bị thiếu và xuất yêu cầu nhập lại
    var errorList = [];
    if (info[0] == "") {
      error = true;
      errorList.push("Họ tên");
    }
    if (info[1] == "") {
      error = true;
      errorList.push("E-mail");
    }
    if (info[2] == "") {
      error = true;
      errorList.push("Số điện thoại");
    }
    if (info[3] == "") {
      error = true;
      errorList.push("Nội dung liên hệ");
    }

    if (error) {
      document.getElementById("submit-result").className = "alert alert-danger";
      document.getElementById("submit-result").innerHTML =
        "<strong>Thất bại!</strong> vui lòng nhập thông tin <i>" +
        errorList.join(", ") +
        "</i>";
      return;
    }

    $.ajax({
      url: "./xulyphp/nhapcsdl.php",
      data: {
        inputFunction: 'contact-us',
        info: info,
      },
      type: "post",
      success: function(output) {
        alert(output);
        //Thông báo kết quả nhập dữ liệu thành công
        document.getElementById("submit-result").className = "alert alert-success";
        document.getElementById("submit-result").innerHTML =
          "<strong>Thành công!</strong> Yêu cầu của bạn đã được hệ thống ghi lại.";
      }
    });
  });
});

//Xử lý cho lựa chọn thống kê
$(document).ready(function() {
  $("#gr-tindang").show();
  $("#gr-nhanvien").hide();
  $("#gr-thietbi").hide();
  $("#gr-doanhthu").hide();
  
  $("#thong-ke").change(function() {
    var optionSelected = document.getElementById("thong-ke");
    var optionSelected_value =
      optionSelected.options[optionSelected.selectedIndex].value;

    if (optionSelected_value == "tin-dang") {
      $("#gr-tindang").show();
    } else {
      $("#gr-tindang").hide();
      $(".customer").hide();
    }

    if (optionSelected_value == "nhan-vien") {
      $("#gr-nhanvien").show();
    } else {
      $("#gr-nhanvien").hide();
      $(".customer").hide();
    }

    if (optionSelected_value == "thiet-bi") {
      $("#gr-thietbi").show();
    } else {
      $("#gr-thietbi").hide();
      $(".customer").hide();
    }

    if (optionSelected_value == "doanh-thu") {
        $("#gr-doanhthu").show();
      } else {
        $("#gr-doanhthu").hide();
        $(".customer").hide();
      }
  });
});

//xử lý hiện ngày tháng năm
$(document).ready(function() {
  $(".customer").toggle();
});

$(document).ready(function() {
  $("#rbngay").click(function() {
    $(".customer").show();
  });
});

$(document).ready(function() {
  $("#rbtuan").click(function() {
    $(".customer").hide();
  });
});

$(document).ready(function() {
  $("#rbthang").click(function() {
    $(".customer").hide();
  });
});

$(document).ready(function() {
  $("#rbnam").click(function() {
    $(".customer").hide();
  });
});

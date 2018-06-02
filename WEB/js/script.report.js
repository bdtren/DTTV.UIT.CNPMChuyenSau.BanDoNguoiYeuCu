//Xử lý cho lựa chọn thống kê
var reportname = "tin-dang";
var sortType = "";
var inputVal = "";
var totalName = "";
var unit = "";
var chartName = "";


function dropdownChangeEvent(selectedValue) {
  $("#gr-luachon").hide();
  $(".datetime-picker").hide();
  if (selectedValue == "tin-dang") {
    document.getElementById("gr-luachon").innerHTML =
      '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbngay" type="radio" name="rbtype" value="Daily" checked>Ngày\n<input id="rbtuan" type="radio" name="rbtype" value="Weekly">Tuần\n<input id="rbthang" type="radio" name="rbtype" value="Monthly">Tháng\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
    reportname = "tin-dang";
    totalName = "tin đăng";
    unit = "tin";
    chartName = "Biểu đồ Tin đăng";
  } else if (selectedValue == "nhan-vien") {
    document.getElementById("gr-luachon").innerHTML =
      '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbngay" type="radio" name="rbtype" value="Daily" checked>Ngày\n<input id="rbthang" type="radio" name="rbtype" value="Monthly">Tháng\n<input id="rbquy" type="radio" name="rbtype" value="Quarterly">Quý\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
    reportname = "nhan-vien";
    totalName = "Lương";
    unit = "VND";
    chartName = "Biểu đồ Lương";    
  } else if (selectedValue == "thiet-bi") {
    document.getElementById("gr-luachon").innerHTML =
      '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbthang" type="radio" name="rbtype" value="Monthly" checked>Tháng\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
    reportname = "thiet-bi";
    totalName = "chi phí";
    unit = "VND";
    chartName = "Biểu đồ Chi phí cho thiết bị";    
  } else if (selectedValue == "doanh-thu") {
    document.getElementById("gr-luachon").innerHTML =
      '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbthang" type="radio" name="rbtype" value="Monthly" checked>Tháng\n<input id="rbquy" type="radio" name="rbtype" value="Quarterly">Quý\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
    //Gọi bảng doanh thu
    reportname = "doanh-thu";
    totalName = "Doanh thu";
    unit = "VND";    
    chartName = "Biểu đồ Doanh thu";        
  } else if (selectedValue == "thu-nhap") {
    document.getElementById("gr-luachon").innerHTML =
      '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbthang" type="radio" name="rbtype" value="Monthly" checked>Tháng\n<input id="rbquy" type="radio" name="rbtype" value="Quarterly">Quý\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
    reportname = "thu-nhap";
    totalName = "Thu nhập";
    unit = "VND";    
    chartName = "Biểu đồ Thu nhập";        
  }
  $("#gr-luachon").show();
}

function radiobtnChangeEvent() {
  //////////Radio thời gian
  $('input[type="radio"]').click(function() {
    radiobtnChoice();
  });
}

function radiobtnChoice() {
  $(".datetime-picker").hide();
  if (
    document.getElementById("rbngay") != null &&
    document.getElementById("rbngay").checked
  ) {
    document.getElementById("time-input").type = "date";
    document.getElementById("time-input").placeholder = "Ngày";
    sortType = "date";
  } else if (
    document.getElementById("rbtuan") != null &&
    document.getElementById("rbtuan").checked
  ) {
    document.getElementById("time-input").type = "week";
    document.getElementById("time-input").placeholder = "Tuần";
    sortType = "week";
  } else if (
    document.getElementById("rbthang") != null &&
    document.getElementById("rbthang").checked
  ) {
    document.getElementById("time-input").type = "month";
    document.getElementById("time-input").placeholder = "Tháng";
    sortType = "month";
  } else if (
    document.getElementById("rbquy") != null &&
    document.getElementById("rbquy").checked
  ) {
    document.getElementById("time-input").type = "text";
    document.getElementById("time-input").placeholder =
      "Quý(Vd: Quý 1 năm 2018->1/2018)";
    sortType = "quarter";
  } else if (
    document.getElementById("rbnam") != null &&
    document.getElementById("rbnam").checked
  ) {
    document.getElementById("time-input").type = "number";
    document.getElementById("time-input").placeholder = "Năm (VD: 2018)";
    //document.getElementById("time-input").min = "0";
    // document.getElementById("time-input").pattern = "\d*";
    // document.getElementById("time-input").step = "1";
    sortType = "year";
  }
  $(".datetime-picker").show();
}

$(document).ready(function() {
  $(".datetime-picker").toggle();
  radiobtnChoice();
  //////////Selection thống kê
  $("#thong-ke").change(function() {
    var optionSelected = document.getElementById("thong-ke");
    var optionSelected_value =
      optionSelected.options[optionSelected.selectedIndex].value;

    dropdownChangeEvent(optionSelected_value);
    radiobtnChoice();

    //////////Radio thời gian
    radiobtnChangeEvent();

    //Tạo lại datatable
    //$('#report-table').DataTable().ajax.reload();
  });
  //////////Radio thời gian
  radiobtnChangeEvent();

  //////////Button View
  $("#btnView").click(function() {
    //Kiểm tra thời gian đầu vào
    var timeVal = document.getElementById("time-input").value;
    alert(timeVal);
    if (timeVal) {
      // Kiểm tra cấu trúc đầu vào quý
      if (document.getElementById("time-input").type == "text") {
        const checkKey = /^[1-4]\/[0-9]{4}?$/;
        if (!checkKey.test(timeVal)) {
          alert(
            "Lỗi nhập liệu: yêu cầu nhập đúng cấu trúc (quý)/(năm) với quý từ 1 đến 4"
          );
          document.getElementById("time-input").value = null;
          return;
        }
      }

      inputVal = timeVal.toString();
    }

    if (reportname != "") {
      //Xóa datatable trước đó
      dataTable.destroy();
      $("#report-table").empty();

      $.ajax({
        url: "./xulyphp/XuLyReport.php",
        data: { callTable: reportname, sort: sortType, inputValue: inputVal },
        type: "post",
        success: function(output) {
          var arr = output.split("//");
          //\/\/\/\/\Bảng dữ liệu/\/\/\/\/\\
          $("#report-table").html(arr[0]);
          // dataTable.clear().draw(output);
          //Tạo một datatable mới
          dataTable = $("#report-table").DataTable(
            /*{
          ordering: true,
          searching: true,
          scrollY: 200,
          paging: false,
          select: true
        }*/
            {
              paging: false,
              select: true
            }
          );

          /**************************/
          //\/\/\/\/\Biểu đồ/\/\/\/\/\\
          var sum = 0;
          var combine = new Array();
          var j = 1;
          combine[0] = [arr[1], arr[2]];
          for (var i = 3; i < arr.length - 1; i += 2) {
            combine[j] = [arr[i], parseInt(arr[i + 1])];
            sum += parseInt(arr[i + 1]);
            j++;
          }
          // alert(combine);

          // Load google charts

          // Draw the chart and set the chart values

          var data = google.visualization.arrayToDataTable(combine, false);
          var formatter = new google.visualization.NumberFormat({
            suffix: " "+unit
          });

          formatter.format(data, 1);

          // Optional; add a title and set the width and height of the chart
          var options = {
            title: chartName,
            width: 550,
            height: 400
          };

          // Display the chart inside the <div> element with id="piechart"
          chart = new google.visualization.PieChart(
            document.getElementById("piechart")
          );
          chart.draw(data, options);

          //\/\/\/\/\TÍnh tổng/\/\/\/\/\\
          const numberWithCommas = (x) => {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".") +" "+ unit;
          }
          var totalValue =
            '<label id="total-label" style="color:#E74C3C" for="Total">Tổng ' +
            totalName +
            ": </label> " +
            numberWithCommas(sum);
          document.getElementById("total-count").innerHTML = totalValue;
        }
      });
    }
  });
});

//xử lý hiện ngày tháng năm
// $(document).ready(function() {
//   $(".datetime-picker").toggle();
// });

// $(document).ready(function() {
//   $('input[type="radio"]').click(function() {
//     if (document.getElementById("rbngay") == null) {
//       $(".datetime-picker").hide();
//       return;
//     }

//     if (document.getElementByName("rbtype").selected) {
//       $(".datetime-picker").show();
//     } else {
//       $(".datetime-picker").hide();
//     }
//   });
// });

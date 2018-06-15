//Xử lý cho lựa chọn thống kê
var reportname = "tin-dang";
var sortType = "";
var inputVal = "";
var totalName = "tin đăng";
var unit = "tin";
var chartName = "Biểu đồ tin đăng";

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
    //alert(timeVal);
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
          alert(arr[0]);
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
              //destroy: true,
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
            suffix: " " + unit
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
          const numberWithCommas = x => {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".") + " " + unit;
          };
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

//In báo cáo
function printReport() {
  var myReport = window.open("", "PRINT", "height=480,width=640");

  switch (reportname) {
    case "tin-dang": 
      myReport.document.write(
        "<html> <head>"
      );
      myReport.document.write("<h3 style='font-weight: 100;'> Trường Đại học công nghệ thông tin </h3>");
      myReport.document.write("<h4> LoveMarket </h4>");
      myReport.document.write("</head><body >");


      myReport.document.write("<h2 style='text-align: center; '> Báo cáo thống kê tin đăng </h2>");
      myReport.document.write("<h5 style='margin-bottom:5px; '> Họ tên:  </h5>");
      myReport.document.write("<h5> Chức vụ:  </h5>");
      
      // myReport.document.write(
      //   document.getElementById("barcode").outerHTML
      // );
      // document.getElementById("barcode").style.background="black";

      myReport.document.write(
        document.getElementById("before-table").innerHTML  
      );

      myReport.document.write(
        document.getElementById("report-table").outerHTML
      );
      
      document.getElementById("report-table").style.display="block";
      document.getElementById("report-table").style.margin="auto";


      // myReport.document.write('<div>');
      // myReport.document.write('<span>');
      // myReport.document.write(
      //   document.getElementById("piechart").outerHTML
      // );
      // myReport.document.write('</span>');

      // myReport.document.write('<span>');

      // myReport.document.write('</span>');

      // myReport.document.write('</div>');


      myReport.document.write("<h6 style='text-align: center; '> Người tạo </h6>");

      myReport.document.write("</body></html>");
    break;
    case "nhan-vien": 
      
    break;
    case "thiet-bi":
      
      break;
    case "doanh-thu": break;
    case "thu-nhap": break;

    default:
      break;
  }

  myReport.document.close(); // necessary for IE >= 10
  myReport.focus();

  myReport.print();
  myReport.close();

  return true;
}

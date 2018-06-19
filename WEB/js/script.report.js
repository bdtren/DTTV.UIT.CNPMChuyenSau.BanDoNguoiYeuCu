//Xử lý cho lựa chọn thống kê
var reportname = "tin-dang";
var sortType = "";
var inputVal = "";
var totalName = "tin đăng";
var unit = "tin";
var chartName = "Biểu đồ tin đăng";
var tableName = "Danh sách tin đăng";

function dropdownChangeEvent(selectedValue) {
  $("#gr-luachon").hide();
  $(".datetime-picker").hide();
  switch (selectedValue) {
    case "tin-dang":
      document.getElementById("gr-luachon").innerHTML =
        '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbngay" type="radio" name="rbtype" value="Daily" checked>Ngày\n<input id="rbtuan" type="radio" name="rbtype" value="Weekly">Tuần\n<input id="rbthang" type="radio" name="rbtype" value="Monthly">Tháng\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
      reportname = "tin-dang";
      totalName = "tin đăng";
      unit = "tin";
      chartName = "Biểu đồ Tin đăng";
      break;
    case "nhan-vien":
      document.getElementById("gr-luachon").innerHTML =
        '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbngay" type="radio" name="rbtype" value="Daily" checked>Ngày\n<input id="rbthang" type="radio" name="rbtype" value="Monthly">Tháng\n<input id="rbquy" type="radio" name="rbtype" value="Quarterly">Quý\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
      reportname = "nhan-vien";
      totalName = "Lương";
      unit = "VND";
      chartName = "Biểu đồ Lương";
      break;
    case "thiet-bi":
      document.getElementById("gr-luachon").innerHTML =
        '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbthang" type="radio" name="rbtype" value="Monthly" checked>Tháng\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
      reportname = "thiet-bi";
      totalName = "chi phí";
      unit = "VND";
      chartName = "Biểu đồ Chi phí cho thiết bị";
      break;
    case "doanh-thu":
      document.getElementById("gr-luachon").innerHTML =
        '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbthang" type="radio" name="rbtype" value="Monthly" checked>Tháng\n<input id="rbquy" type="radio" name="rbtype" value="Quarterly">Quý\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
      //Gọi bảng doanh thu
      reportname = "doanh-thu";
      totalName = "Doanh thu";
      unit = "VND";
      chartName = "Biểu đồ Doanh thu";
      break;
    case "thu-nhap":
      document.getElementById("gr-luachon").innerHTML =
        '<label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>\n<input id="rbthang" type="radio" name="rbtype" value="Monthly" checked>Tháng\n<input id="rbquy" type="radio" name="rbtype" value="Quarterly">Quý\n<input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>\n';
      reportname = "thu-nhap";
      totalName = "Thu nhập";
      unit = "VND";
      chartName = "Biểu đồ Thu nhập";
      break;
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

  var promises = [];
  var request;
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

      request = $.ajax({
        url: "./xulyphp/XuLyReport.php",
        data: { callTable: reportname, sort: sortType, inputValue: inputVal },
        type: "post",
        success: function(output) {
          var arr = output.split("//");
          //\/\/\/\/\Bảng dữ liệu/\/\/\/\/\\
          $("#report-table").html(arr[0]);
          //alertalert(arr[0]);
          // dataTable.clear().draw(output);
          //Tạo một datatable mới
          dataTable = $("#report-table").DataTable({
            //destroy: true,
            //"bJQueryUI": true,
            select: true,
            paging: false,
            "language": {
                      "info": "Hiển thị trang _PAGE_ của _PAGES_",
                      "sInfo": "Hiển thị trang _START_ đến _END_ trong _TOTAL_ dòng",
                      "sSearch": "Tìm kiếm:",
                      "sEmptyTable": "Không có thông tin bảng theo yêu cầu",
                      "sInfoFiltered": "(Duyệt từ _MAX_ dòng của bảng)",
            },
            fnInitComplete: function() {
              this.fnAdjustColumnSizing();
              $("div.dataTables_filter input").focus();
            }
          });
          //alert(dataTable.page.info().end);
          /**************************/
          //\/\/\/\/\Biểu đồ/\/\/\/\/\\
          switch (reportname) {
            case "tin-dang":
              /**Biểu đồ tròn thứ nhất*/
              var sum = 0;
              var combine1 = new Array();
              var j = 1;
              combine1[0] = [arr[1], arr[2]];
              for (var i = 3; i < 27; i += 2) {
                combine1[j] = [arr[i], parseInt(arr[i + 1])];
                sum += parseInt(arr[i + 1]);
                j++;
              }
              var data = google.visualization.arrayToDataTable(combine1, false);
              var formatter = new google.visualization.NumberFormat({
                suffix: " " + unit
              });

              formatter.format(data, 1);

              // Optional; add a title and set the width and height of the chart
              var options = {
                title: chartName + " theo danh mục hàng hóa",
                width: 550,
                height: 400
              };

              // Display the chart inside the <div> element with id="chart1"
              chart = new google.visualization.PieChart(
                document.getElementById("chart1")
              );
              chart.draw(data, options);

              //\/\/\/\/\Tính tổng/\/\/\/\/\\
              var totalValue =
                '<label id="total-label" style="color:#E74C3C" for="Total">Tổng ' +
                totalName +
                ": </label> " +
                numberWithCommas(sum);
              document.getElementById("total-count").innerHTML = totalValue;

              /**Biểu đồ tròn thứ 2*/
              combine2 = new Array();
              j = 1;
              combine2[0] = [arr[1], arr[2]];
              for (var i = 27; i < arr.length - 1; i += 2) {
                combine2[j] = [arr[i], parseInt(arr[i + 1])];
                //sum += parseInt(arr[i + 1]);
                j++;
              }

              data = google.visualization.arrayToDataTable(combine2, false);
              formatter = new google.visualization.NumberFormat({
                suffix: " " + unit
              });

              formatter.format(data, 1);

              // Optional; add a title and set the width and height of the chart
              options = {
                title: chartName + " theo kỉ niệm, kỉ vật",
                width: 550,
                height: 400
              };

              // Display the chart inside the <div> element with id="chart1"
              chart = new google.visualization.PieChart(
                document.getElementById("chart2")
              );
              chart.draw(data, options);

              break;
            // case "nhan-vien":
            //   break;
            // case "thiet-bi":
            //   break;
            // case "doanh-thu":
            //   break;
            // case "thu-nhap":
            //   break;
            default:
              /**Biểu đồ tròn thứ nhất*/
              sum = 0;
              var combine = new Array();
              j = 1;
              combine[0] = [arr[1], arr[2]];
              for (var i = 3; i < arr.length; i += 2) {
                combine[j] = [arr[i], parseInt(arr[i + 1])];
                sum += parseInt(arr[i + 1]);
                j++;
              }
              data = google.visualization.arrayToDataTable(combine, false);
              formatter = new google.visualization.NumberFormat({
                suffix: " " + unit
              });

              formatter.format(data, 1);

              // Optional; add a title and set the width and height of the chart
              options = {
                title: chartName,
                width: 550,
                height: 400
              };

              // Display the chart inside the <div> element with id="chart1"
              chart = new google.visualization.PieChart(
                document.getElementById("chart1")
              );
              chart.draw(data, options);

              //\/\/\/\/\Tính tổng/\/\/\/\/\\
              totalValue =
                '<label id="total-label" style="color:#E74C3C" for="Total">Tổng ' +
                totalName +
                ": </label> " +
                numberWithCommas(sum);
              document.getElementById("total-count").innerHTML = totalValue;

              /***************************************************** 
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

            // Display the chart inside the <div> element with id="chart1"
            chart = new google.visualization.PieChart(
              document.getElementById("chart1")
            );
            chart.draw(data, options);

            //\/\/\/\/\Tính tổng/\/\/\/\/\\
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
            *****************************************************************/
              break;
          }
        }
      });
      promises.push(request);
    }
  });

  ///////////Đóng, mở table con
  // $('#report-table').on( 'click', '#mo-table-con', function (){
  // //$("#report-table").on('click', "#mo-table-con",function() {
  //   //var nTr = this.parentNode.parentNode;
  //   var nTr = this;

  //   if (this.innerHTML.match("details_close")) {
  //     /* This row is already open - close it */
  //     $('img', this).attr( 'src',"Images/sort/details_open.png");
  //     dataTable.fnClose(nTr);
  //   } else {
  //     /* Open this row */
  //     $('img', this).attr( 'src',"Images/sort/details_close.png");
  //     ///*Sai*/var reason = $(this.parentNode.nodeName+" #doanhthu-lydo").html();
  //     var reason = $(this).attr("rel");
  //     request = $.post( "./xulyphp/XuLyReport.php",
  //             {callTable: 'dt-tablecon', sort: sortType, inputValue: inputVal, Reason: reason},
  //             function (childtable) {
  //             //alert(childtable);
  //             //alert(dataTable.page.info().end);

  //             dataTable.fnOpen(nTr, childtable, 'details');
  //             });
  //     promises.push(request);
  //   }
  // }); (/*****Phiên bản cũ*****/)
  $("#report-table").on("click", "#mo-table-con", function() {
    var nTr = this;
    var row = dataTable.row(nTr);

    if (row.child.isShown()) {
      /* This row is already open - close it */
      $("img", this).attr("src", "Images/sort/details_open.png");
      row.child.hide();
      tr.removeClass("shown");
    } else {
      /* Open this row */
      $("img", this).attr("src", "Images/sort/details_close.png");
      var reason = $(this).attr("rel");
      var call = "";
      switch (reportname) {
        case "nhan-vien":
          call = "nv-tablecon";
          break;
        case "doanh-thu":
          call = "dt-tablecon";
          break;
        default:
          call = "";
          break;
      }
      request = $.post(
        "./xulyphp/XuLyReport.php",
        {
          callTable: call,
          sort: sortType,
          inputValue: inputVal,
          Reason: reason
        },
        function(childtable) {
          row.child(childtable).show();
          tr.addClass("shown");
        }
      );
      promises.push(request);
    }
  });
});

//Format số               
function numberWithCommas (x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".") + " " + unit;
};


//In báo cáo
function printReport() {
  var myReport = window.open("", "PRINT", "height=480,width=640");

  switch (reportname) {
    case "tin-dang":
      myReport.document.write("<html> <head>");
      /**Quốc hiệu, tiêu ngữ */
      myReport.document.write(
        "<h3 style='font-weight: 100;'> Trường Đại học công nghệ thông tin - <strong>LoveMarket</strong> </h3>"
      );
      myReport.document.write("</head><body >");
      /**Tên báo cáo */
      myReport.document.write(
        "<h2 style='text-align: center;  '> Báo cáo thống kê tin đăng </h2>"
      );
      /**Họ tên người tạo, mã vạch */
      myReport.document.write(
        document.getElementById("before-table").outerHTML
      );
      myReport.document.write("<br><br><br><br><br><br><br><br>");

      // document.getElementById("barcode").style.background="black";

      //myReport.document.write(
      //  document.getElementById("before-table").innerHTML
      // );

      /**Bảng thông tin */
      myReport.document.write(
        document.getElementById("report-table").outerHTML
      );
      document.getElementById("report-table").style.display = "block";
      document.getElementById("report-table").style.margin = "auto";

      /**Biểu đồ thông tin */
      myReport.document.write(document.getElementById("chart1").outerHTML);
      document.getElementById("chart1").style.display = "block";
      document.getElementById("chart1").style.margin = "auto";
      myReport.document.write("<br><br><br><br><br><br><br><br>");

      /**Biểu đồ thông tin */
      myReport.document.write(document.getElementById("chart2").outerHTML);
      document.getElementById("chart2").style.display = "block";
      document.getElementById("chart2").style.margin = "auto";

      myReport.document.write("<br><br><br><br><br><br><br><br>");

      /**Ngày tháng năm, chữ kí người tạo */
      myReport.document.write(
        "<h6 style='float: right; margin-right: 50px;'> Thành phố Hồ Chí Minh, ngày 16 tháng 06 năm 2018 </h6><br>"
      );

      myReport.document.write(
        "<h6 style='margin-top: 10px; margin-left: 48em;'> Người tạo </h6>"
      );
      myReport.document.write(
        "<h6 id='signname' style='margin-top: 10em; margin-left: 48em;'>  </h6>"
      );
      myReport.document.write(
        '<script>var dateObj = new Date();var month = dateObj.getUTCMonth() + 1;var day = dateObj.getUTCDate();var year = dateObj.getUTCFullYear();var newdate = day + "/" + month + "/" + year;</script>'
      );
      myReport.document.write(
        '<script>document.getElementById("signname").innerHTML = document.getElementById("hname").innerHTML.substring(8);</script>'
      );
      myReport.document.write("</body></html>");
      break;

    case "nhan-vien":
      break;
    case "thiet-bi":
      break;
    case "doanh-thu":
      break;
    case "thu-nhap":
      break;

    default:
      break;
  }

  myReport.document.close(); // necessary for IE >= 10
  myReport.focus();

  myReport.print();
  myReport.close();

  return true;
}

// function chay(th) {
//   var tr = $(th).closet("tr");
//   var row = dataTable.row(tr);
//   alert(dataTable.className);
//   if (row.child.isShown()) {
//     // This row is already open - close it
//     row.child.hide();
//     tr.removeClass("shown");
//   } else {
//     // Open this row
//     row.child("<td>Full name:</td>").show();
//     tr.addClass("shown");
//   }
// }

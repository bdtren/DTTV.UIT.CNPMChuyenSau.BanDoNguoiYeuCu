<?php
  $nv = (isset($_POST['nv']))? unserialize($_POST['nv']) : null;   
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="icon" href="./Images/Home/favicon.png" />
  <title>Thống kê & Báo cáo</title>

  <link rel="stylesheet" href="./css/style-report.css">
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

  <style type="text/css" media="screen">
			@import "./css/site.ccss";
			th { white-space: nowrap; }
			div.dataTables_filter input { padding: 5px; width: 250px; }
			div.innerDetails { display: none; }
			
			div.innerDetails {
				margin: 1em;
			}
			div.column_details { float: left; width: 45%; }
			div.column_details table td { font-size: 13px; }
			div.column_code { float: left; width: 54%; }
			div.purpose { height: 46px; overflow: hidden }
			div.purpose p:first-child { margin-top: 0 }
			div.purpose p:last-child { margin-bottom: 0 }
			tr.odd { background-color: #f6f6ff; cursor: pointer; *cursor: hand }
			tr.even { background-color: white; cursor: pointer; *cursor: hand }
			td.details { cursor: default !important }
			td.dataTables_empty { text-align: center; }
			table.display>tbody>tr { border-left: 1px solid #ccc; border-right: 1px solid #ccc }
			table.display { border-bottom: 1px solid #ccc; }
		</style>

</head>

<body>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  
  
  <div id="report-content" class="row">
    <button id="InBaoCao" href="#" class="btn btn-info btn-lg" onclick="printReport()">
      <span class="glyphicon glyphicon-print"></span> In Báo Cáo
    </button>

      
    <div id="before-table">
      <div style="float:left;">
        <h6 id="hname">Họ tên: <?php echo $nv[0]['HOTEN']?></h6> 
        <h6 id="hcompetence">Chức vụ: <?php echo $nv[0]['TENCV']?></h6>
      </div>
      
      <div style="float:left;">
        <svg id="barcode"></svg>
      </div>
    </div>
      <!-- Mã code -->
    <script src="./js/JsBarcode.all.min.js"></script>
    <script>
      JsBarcode("#barcode", "<?php echo $nv[0]["MANV"].rand(100000000,999999999)?>");
    </script>

      <div class="clearfix"></div>
      <div class="clearfix"></div>
    <div class="col-md-12" style="max-width: 100vw;">
      <div id="fullscreen_bg" class="fullscreen_bg">
        <form class="form-signin">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default">
                  <div class="panel panel-primary">
                    <div class="text-center">
                      <h3 id="table-title" style="color:#2C3E50">Lượt bán hàng tháng này</h3>
                      <h4>
                        <label for="Choose Report" style="color:#E74C3C">Lựa chọn báo cáo</label>
                      </h4>
                      <!-- Lựa chọn lớn -->
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="glyphicon glyphicon-tasks"></span>
                        </span>
                        <select class="form-control" id="thong-ke">
                          <option value="tin-dang" selected>Thống kê tin đăng</option>
                          <option value="nhan-vien">Thống kê nhân viên</option>
                          <option value="thiet-bi">Thống kê thiết bị</option>
                          <option value="doanh-thu">Thống kê doanh thu</option>
                          <option value="thu-nhap">Thống kê thu nhập</option>                          
                        </select>
                      </div>
                      <!-- Các lựa chọn con -->
                      <h5 id="gr-luachon">
                        <label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>
                        <input id="rbngay" type="radio" name="rbtype" value="Daily" checked>Ngày
                        <input id="rbtuan" type="radio" name="rbtype" value="Weekly">Tuần
                        <input id="rbthang" type="radio" name="rbtype" value="Monthly">Tháng
                        <input id="rbnam" type="radio" name="rbtype" value="Yearly">Năm </h5>

                      <div class="datetime-picker">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                          </span>
                          <input id="time-input" type="date" class="form-control" placeholder="Ngày" />
                        </div>
                      </div>
                      </br>
                      <button id="btnView" type="button" class="btn btn-primary btn-lg btn3d">
                        <span class="glyphicon glyphicon-search"></span> Xem</button>
                    </div>
                    <div class="panel-body">

                      <div class="table-responsive">
                        <table id="report-table" class="table table-striped table-condensed" border="1" cellpadding="0" cellspacing="1">
                          <thead>
                            <tr>
                            <th class="text-center" width="18px"></th>
                              <th class="text-center" width="115px">STT</th>
                              <th class="text-center" width="115px">Tên danh mục</th>
                              <th class="text-center" width="115px">Số lượng tin</th>
                              <th class="text-center" width="115px">Ngày</th>
                              <th class="text-center" width="115px">Ghi chú</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <td><img id="mo-table-con" src="Images/sort/details_open.png" rel="0" alt="expand/collapse"></td>
                              <td class="text-center" width="150px">1

                              </td>
                              <td class="text-center" width="150px">Bất động sản</td>
                              <td class="text-center" width="150px">2</span>
                              </td>
                              <td class="text-center" width="150px">22/05/2018</span>
                              </td>
                              <td class="text-center" width="150px">abcxyz</span>
                              </td>
                              
                            </tr>
                            <!-- </tbody>
                            <tbody class="hide">
            <tr>
                <td>Australia</td>
                <td>$7,685.00</td>
                <td>$3,544.00</td>
                <td>$5,834.00</td>
                <td>$10,583.00</td>
            </tr>
            <tr>
                <td>Central America</td>
                <td>$7,685.00</td>
                <td>$3,544.00</td>
                <td>$5,834.00</td>
                <td>$10,583.00</td>
            </tr>
        </tbody> -->

                            <tr>
                            <td><img id="mo-table-con" src="Images/sort/details_open.png" rel="0" alt="expand/collapse"></td>
                              <td class="text-center">2</td>
                              <td class="text-center">Xe</td>
                              <td class="text-center">18</span>
                              </td>
                              <td class="text-center">22/05/2018</span>
                              </td>
                              <td class="text-center">sssssss</span>
                              </td>
                            </tr>
                            <tr>
                            <td><img id="mo-table-con" src="Images/sort/details_open.png" rel="0" alt="expand/collapse"></td>
                              <td class="text-center">3</td>
                              <td class="text-center">Thư tay</td>
                              <td class="text-center">1</span>
                              </td>
                              <td class="text-center">22/05/2018</span>
                              </td>
                              <td class="text-center">ddddddddđ</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="text-center">
                        <h4 id="total-count">
                          <label id="total-label" style="color:#E74C3C" for="Total">Tổng tin: </label> 21</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="clearfix"></div>


    <div class="col-md-6">
          <div id="chart1" class="chart"></div>
    </div>
    <div class="col-md-6">
          <div id="chart2" class="chart"></div>
    </div>
    

    <div class="col-md-12">
      <div id="chart_div" class="chart"></div>
    </div> 
   
  </div>



  <!-- Chart và report -->
  <script type="text/javascript" src="./js/loader.js"></script> 
  <!-- <script type="text/javascript"
        src="https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization','version':'1','packages':['gauge']}]}">
  </script> -->

  <script type="text/javascript">
  var chart;
    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawPieChart);
      // google.load("visualization", "1", {packages:["corechart"], "callback": drawPieChart});
      // google.setOnLoadCallback(drawPieChart);

    // Draw the chart and set the chart values
    function drawPieChart() {
      var data = google.visualization.arrayToDataTable([
        ['danh-muc', 'Số tin'],
        ['Bất động sản', 2],
        ['Xe', 18],
        ['Thư tay', 1]
      ]);

      // Optional; add a title and set the width and height of the chart
      var options = { 'title': 'Số tin đăng trong ngày', 'width': 550, 'height': 400 };

      // Display the chart inside the <div> element with id="chart1"
      chart = new google.visualization.PieChart(document.getElementById('chart1'));
      chart.draw(data, options);
    }

    //Nhận hàm vẽ biểu đồ đường
    google.charts.setOnLoadCallback(drawLineChart);
    //google.setOnLoadCallback(drawLineChart);    
    //Vẽ biểu đồ đường
    function drawLineChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Thời gian');
      data.addColumn('number', 'Bất động sản');
      data.addColumn('number', 'Xe');
      data.addColumn('number', 'Thư tay');

      data.addRows([
        ['2h sáng', 0, 0, 0], ['5h', 1, 4, 0], ['6h', 1, 5, 0], ['8h', 2, 10, 1], ['11h', 2, 14, 1], ['15h', 2, 15, 1], ['24h', 2, 18, 1]
      ]);

      var options = {
        hAxis: {
          title: 'Thời gian',
          logScale: true
        },
        vAxis: {
          title: 'Số tin',
          format: '#,### tin',
          logScale: false
        },
        colors: ['#a52714', '#097138', '#696969']
      };

      chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    //biểu đồ đổi kích thước khi resize
    $(window).resize(function () {
      drawPieChart();
      drawLineChart();
    });
  </script>

  <!-------------- Report table sorter ------------>
  <!-- <script type="text/javascript" src="js/jquery.tablesorter.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $("#report-table").tablesorter();
    }
    );

    /*$(document).ready(function () {
      $("#report-table").tablesorter({ sortList: [[0, 0], [4, 0] ] });
    }
    );*/ 
  </script> -->

  <!-- Report datatable -->
  <link rel="stylesheet" type="text/css" href="./DataTables/datatables.css">
  <script type="text/javascript" charset="utf8" src="./DataTables/datatables.js"></script>

  <script type="text/javascript">
    var dataTable = null;

    $(document).ready( function () {
      dataTable = $('#report-table').DataTable(
        /*{
        ordering: true,
        searching: true,
        scrollY: 200,
        paging: false,
        select: true
      }*/
      {
        paging: false,
        select: false,
        //// "ajax": "./g.json",
        // "columns": [
        //     {
        //         "className":      'details-control',
        //         "orderable":      true,
        //         "data":           null,
        //         "defaultContent": ''
        //     },
        //     { "data": "name" },
        //     { "data": "position" },
        //     { "data": "office" },
        //     { "data": "salary" }
        // ],
        // "order": [[1, 'asc']]
      }
    );

    // Add event listener for opening and closing details'
    // $('#nutnay').click( function () {
    //     alert("hello");
    //     var tr = $(this).closest('tr');
    //     var row = dataTable.row( tr );
 
    //     if ( row.child.isShown() ) {
    //         // This row is already open - close it
    //         row.child.hide();
    //         tr.removeClass('shown');
    //     }
    //     else {
    //         // Open this row
    //         //row.child( '<td>Full name:</td>' ).show();
    //         tr.addClass('shown');
    //     }
    // } );
    } );
  </script>

  <script type="text/javascript" src="./DataTables/fnReloadAjax.js"></script>
  <script type="text/javascript" src="./js/script.report.js"></script>

</body>

</html>
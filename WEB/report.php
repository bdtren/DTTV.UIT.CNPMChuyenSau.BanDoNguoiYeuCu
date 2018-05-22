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


</head>

<body>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  



  <h1>Báo cáo</h1>
  <div class="row">
    <div class="col-md-8">
      <div id="fullscreen_bg" class="fullscreen_bg">
        <form class="form-signin">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-md-offset-2">
                <div class="panel panel-default">
                  <div class="panel panel-primary">
                    <div class="text-center">
                      <h3 style="color:#2C3E50">Lượt bán hàng tháng này</h3>
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
                          <option value="doanh-thu">Thống kê Doanh thu</option>
                        </select>
                      </div>
                      <!-- Các lựa chọn con -->
                      <h5 id="gr-tindang">
                        <label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>
                        <input id="rbngay" type="radio" name="type" value="Daily">Ngày
                        <input id="rbtuan" type="radio" name="type" value="Weekly">Tuần
                        <input id="rbthang" type="radio" name="type" value="Monthly">Tháng
                        <input id="rbnam" type="radio" name="type" value="Yearly">Năm </h5>

                      <h5 id="gr-nhanvien">
                        <label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>
                        <input id="rbngay" type="radio" name="type" value="Daily">Ngày
                        <input id="rbthang" type="radio" name="type" value="Monthly">Tháng
                        <input id="rbquy" type="radio" name="type" value="Quarterly">Quý
                        <input id="rbnam" type="radio" name="type" value="Yearly">Năm </h5>

                      <h5 id="gr-thietbi">
                        <label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>
                        <input id="rbthang" type="radio" name="type" value="Monthly">Tháng
                        <input id="rbnam" type="radio" name="type" value="Yearly">Năm </h5>

                      <h5 id="gr-doanhthu">
                        <label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>
                        <input id="rbthang" type="radio" name="type" value="Monthly">Tháng
                        <input id="rbquy" type="radio" name="type" value="Quarterly">Quý
                        <input id="rbnam" type="radio" name="type" value="Yearly">Năm </h5>

                      <div class="customer">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                          </span>
                          <input type="date" class="form-control" placeholder="Date" />
                        </div>
                      </div>
                      </br>
                      <button type="button" class="btn btn-primary btn-lg btn3d">
                        <span class="glyphicon glyphicon-search"></span> View</button>
                    </div>
                    <div class="panel-body">

                      <div class="table-responsive">
                        <table id="report-table" class="table table-striped table-condensed" border="1" cellpadding="0" cellspacing="1">
                          <thead>
                            <tr>
                              <th class="text-center" width="115px">STT</th>
                              <th class="text-center" width="115px">Tên danh mục</th>
                              <th class="text-center" width="115px">Số lượng tin</th>
                              <th class="text-center" width="115px">Ngày</th>
                              <th class="text-center" width="115px">Ghi chú</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-center" width="150px">1</td>
                              <td class="text-center" width="150px">Bất động sản</td>
                              <td class="text-center" width="150px">2</span>
                              </td>
                              <td class="text-center" width="150px">22/05/2018</span>
                              </td>
                              <td class="text-center" width="150px">abcxyz</span>
                              </td>
                            </tr>
                            <tr>

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
                        <h4>
                          <label style="color:#E74C3C" for="Total">Tổng tin: </label> 21</h4>
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
    <div class="col-md-4">
      <div id="piechart" class="chart"></div>
    </div>

    <div class="clearfix"></div>
    <div class="col-md-12">
      <div id="chart_div" class="chart"></div>
    </div>
  </div>





  <!-- Chart và report -->
  <script type="text/javascript" src="./js/loader.js"></script>
  <script type="text/javascript" src="./js/script.report.js"></script>
  <script type="text/javascript">
    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawPieChart);

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

      // Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }

    //Nhận hàm vẽ biểu đồ đường
    google.charts.setOnLoadCallback(drawLineChart);
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
          //format: '# tin',
          logScale: false
        },
        colors: ['#a52714', '#097138', '#696969']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    //biểu đồ đổi kích thước khi resize
    $(window).resize(function () {
      drawPieChart();
      drawLineChart();
    });
  </script>

  <!-- Report table sorter -->
  <script type="text/javascript" src="js/jquery.tablesorter.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $("#report-table").tablesorter();
    }
    );

    /*$(document).ready(function () {
      $("#report-table").tablesorter({ sortList: [[0, 0], [4, 0] ] });
    }
    );*/ 
  </script>

</body>

</html>
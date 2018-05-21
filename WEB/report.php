<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <link rel="stylesheet" href="./css/style-report.css">
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">


</head>

<body>

  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


  <h1>Báo cáo</h1>
  <div class="row">
    <div class="col-sm-8">
      <div id="fullscreen_bg" class="fullscreen_bg" />
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
                    <div class="input-group">
                      <span class="input-group-addon">
                        <span class="glyphicon glyphicon-tasks"></span>
                      </span>
                      <select class="form-control">
                        <option value="danh-muc" selected>Danh mục sản phẩm</option>
                        <option value="cong-viec">Công việc</option>
                        <option value="doanh-thu">Doanh thu</option>
                      </select>
                    </div>
                    <h5>
                      <label for="Choose Report" style="color:#E74C3C"> Thời gian:</label>
                      <input id="a" type="radio" name="type" value="Daily">Ngày
                      <input id="b" type="radio" name="type" value="Weekly">Tuần
                      <input id="c" type="radio" name="type" value="Monthly">Tháng
                      <input id="d" type="radio" name="type" value="Monthly">Năm</h5>

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

                    <table class="table table-striped table-condensed">
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
  <div class="col-sm-4">
    <div id="piechart"></div>
  </div>
  </div>

  <div class="row2">
    <div class="col-sm-12">
      <div id="chart_div"></div>
    </div>
  </div>



  <script type="text/javascript" src="./js/loader.js"></script>

  <script type="text/javascript">
    //xử lý của bảng report
    $(document).ready(function () {

      $(".customer").toggle();

    });

    $(document).ready(function () {
      $("#a").click(function () {
        $(".customer").show();
      });
    });

    $(document).ready(function () {
      $("#b").click(function () {
        $(".customer").hide();
      });
    });

    $(document).ready(function () {
      $("#c").click(function () {
        $(".customer").hide();
      });
    });

    $(document).ready(function () {
      $("#d").click(function () {
        $(".customer").hide();
      });
    });


    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
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
    google.charts.setOnLoadCallback(drawLogScales);
    //Vẽ biểu đồ đường
    function drawLogScales() {
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
          logScale: false
        },
        colors: ['#a52714', '#097138', '#696969']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  </script>

</body>

</html>
<link href="../../css/style.clock.css" rel="stylesheet" />

<div class="card" style="height: 35em;">
    <h5 class="card-header" id="checkcard">Báo cáo và Thống kê</h5>
    <div class="card-body" style="overflow-y: auto;">
        <div class="col-md-5">
        <form action="../../report.php" target="_blank" method="post" >
            <input type="hidden" name="nv" value="<?php echo htmlentities(serialize($nv)); ?>"/>

            <button id="vao-report" type="submit" class="btn btn-success btn-lg" onclick="">
                <span class="glyphicon glyphicon-print"></span> Đến trang báo cáo
            </button>
        </form>
            
        </div>
        <div class="clearfix"></div>
        <div class="col-md-8">
            <div id="clock" class="light">
                <div class="display">
                    <div class="weekdays"></div>
                    <div class="ampm"></div>
                    <div class="date"></div>
                    <div class="alarm"></div>
                    <div class="digits"></div>
                </div>
            </div>

            <div class="button-holder">
                <a class="button">Đổi màu nền</a>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<!-- Bài đăng cần duyệt -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.0.0/moment.min.js"></script>
<script src="../../js/script.reportAdmin.js"></script>
<script src="../../js/script.clock.js"></script>
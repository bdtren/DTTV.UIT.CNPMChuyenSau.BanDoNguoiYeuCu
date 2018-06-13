<?php 
	session_start();
	$User = (isset($_SESSION['useradmin']))? $_SESSION['useradmin'] : '' ;
	$MaNV = (isset($_SESSION['manv']))? $_SESSION['manv'] : '' ; 
	
?>
<?php include "../xulyphp/login.php"; ?>
<?php include "../../xulyphp/xulytindang.php";
			include('../../xulyphp/xulyAdmin.php');
			if($MaNV!=''){ 
				$nv = layThongTinNhanVien($MaNV);		
				$soGio = laySoGioLam($MaNV, date("Y/m/d"));
				checkLogin($nv[0]['MACV']);
      }
?>


<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>Kế toán và thống kê </title>
	<meta name="author" content="DTTV" />
	<meta name="description" content="Website bán đồ người yêu cũ." />
	<link rel="icon" href="../../Images/Home/favicon.png" />
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="../../css/bootstrap.min.css">
	<link rel="stylesheet" href="../../css/style-admin-finance.css">
	<!-- icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
	<style>
		.active {
			background: orange !important;
		}
	</style>

	<script>
		var nv = <?php echo json_encode($nv); ?>;
		var soGio = <?php echo json_encode($soGio); ?>;
	</script>

	<?php include('modules/header.php'); ?>
	<div class="container" style="margin-top: 20px;">
		<div class="row">
			<div class="col-md-3">
				<?php include('modules/sidebar.php'); ?>
			</div>

			<div class="col-md-9 main-section">
				<?php include('modules/main.php'); ?>
			</div>
		</div>
	</div>

	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="../../js/jquery-3.3.1.min.js"></script>
	<script src="../../js/popper.min.js"></script>
	<script src="../../js/bootstrap.min.js"></script>
	<script src="../../js/count-up-time.js"></script>
	<script src="../../js/get-time-work.js"></script>

	<!-- Tạo datatable -->
	<link rel="stylesheet" type="text/css" href="../../DataTables/datatables.css">
  <script type="text/javascript" charset="utf8" src="../../DataTables/datatables.js"></script>

  <script type="text/javascript">
    var dataTable = null;

    $(document).ready( function () {
      dataTable = $('#content-table').DataTable(
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
    } );
  </script>
</body>

</html>
<?php 
	session_start();
	$User = (isset($_SESSION['useradmin']))? $_SESSION['useradmin'] : '' ;
	$MaNV = (isset($_SESSION['manv']))? $_SESSION['manv'] : '' ; 
?>
<?php include "xulyphp/login.php"; ?>
<?php include "xulyphp/xulytindang.php"; ?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Quảng cáo và tạo tin đặc biệt</title>
	<meta name="author" content="DTTV" />
	<meta name="description" content="Website bán đồ người yêu cũ." />
	<link rel="icon" href="../../Images/Home/favicon.png"/>
 <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="../../css/bootstrap.min.css">  
    <link rel="stylesheet" href="../../css/style-admin-advertisement.css">
    <!-- icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">	
	
</head>

<body>
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
</body>
</html>
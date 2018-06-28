<?php 
	session_start();
	$UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
	$PageName="gioithieu";
?>


<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="icon" href="./Images/Home/favicon.png"/>
	<title>LoveMarket – Bán đồ người yêu cũ – Giới thiệu về LoveMarket </title>
	<meta name="description" content="LoveMarket –Giới thiệu về LoveMarket - bán đồ người yêu cũ. Những người phát triển LoveMaket. " />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	 <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style-gioi-thieu.css">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"> 
	<link rel="manifest" href="./manifest.json"> 
</head>
		
<body>
	<?php include('header.php'); ?>
	<div class="container-fluid">
		<div class="row main-contain">
		  <main role="main">
			<?php include('gioi-thieu/carousel.php')  ?>
				
			<?php include('gioi-thieu/author.php') ?>
  		  </main>
		</div>
	</div>
	
	
	
	
	
	
	
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	
	<!--Progressive Web App(PWA): install, service worker-->
	<!-- <script src="./sw-register.js"></script> -->
</body>
</html>
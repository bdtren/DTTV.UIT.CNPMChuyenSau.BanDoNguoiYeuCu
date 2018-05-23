<?php 
	session_start();
	$PageName="gioithieu";
?>


<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="icon" href="./Images/Home/favicon.png"/>
	<title>Giới thiệu</title>
	 <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style-gioi-thieu.css">

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
	<script src="./sw-register.js"></script>
</body>
</html>
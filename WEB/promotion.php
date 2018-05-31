<?php 
	$PageName="thongbao";
?>


<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Thông báo</title>	
 	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style-promotion.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
		
<body>
		<?php include('header.php'); ?>
	
	
	<div class="container-fluid ">
		<!-- Slider -->
		<div class="main-contain">
		<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
			  <div class="carousel-inner">
				<div class="carousel-item active">
				  <img class="d-block w-100" src="Images/Promotion/khuyen-mai.png" alt="First slide">
				</div>
				<div class="carousel-item">
				  <img class="d-block w-100" src="Images/Promotion/khuyen-mai-nha-cai-ban-nen-biet.jpg" alt="Second slide">
				</div>
				<div class="carousel-item">
				  <img class="d-block w-100" src="Images/Promotion/slider_big_sale_50_19052017.jpg" alt="Third slide">
				</div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			  </a>
			</div>
			</div>
	</div>
	
	<?php include('footer.php'); ?>
	
		<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
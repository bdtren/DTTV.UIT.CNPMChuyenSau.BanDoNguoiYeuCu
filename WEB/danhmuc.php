<?php 
	$PageName="danhmuc";
?>
 

<!doctype html>
<html>
<head>
 <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style-danh-muc.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
<title>Danh mục sản phẩm</title>

</head>
	
<body>
	
	<?php include('header.php'); ?>

	
	<div class="container-fluid">
		<div class="row main-contain">
			<!-- Sidebar -->
			<div class="col-lg-3 col-sm-12 col-md-3">
				<?php include('./danh-muc/sidebar.php'); ?>
			</div>
			
			<div class="col-lg-9 col-sm-12 col-md-9">
				<?php include('./danh-muc/product.php'); ?>
				<?php include('./danh-muc/numpage.php'); ?>	
			</div>
			
		</div>
	</div>
	
	
	
	
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
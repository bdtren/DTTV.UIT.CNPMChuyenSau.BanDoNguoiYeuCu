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
				<div class="card card-main" style="width: 100%; background: #F4F4F4;">
					<div class="card-header card-main-header">
						Sản phẩm
					</div>
					<ul style="list-style: none; ">
						<?php $cardType = "ribbon-new"; $i=0;
						include('./danh-muc/product.php'); ?>
						<?php $cardType = "ribbon-hot"; $i=1;
						include('./danh-muc/product.php'); ?>
						<?php $cardType = "ribbon-discount"; $i=2;
						include('./danh-muc/product.php'); ?>
						<?php 
							include('loaddanhmucsanpham.php');
							$cardType = "";
							$i=3;
							while($i<9) { 
								if(!empty($a[$i]))?>
						<?php include('./danh-muc/product.php'); ?>
						<?php $i++; } ?>

					</ul>
				</div>
				<?php include('./danh-muc/numpage.php'); ?>	
			</div>
			
		</div>
	</div>
	<?php include('./footer.php');?>
	
	
	
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
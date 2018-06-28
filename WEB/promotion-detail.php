<?php 
	session_start();
	$UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
	$MaKH = (isset($_SESSION['makh']))? $_SESSION['makh'] : '' ;
	$PageName="promotion-detail";
	$makm=$_GET['MAKM'];
	include("xulyphp/xulyKM.php");
	
?>


<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="author" content="DTTV" />
	<meta name="description" content="Website bán đồ người yêu cũ." />
	<link rel="icon" href="./Images/Home/favicon.png"/>
	<meta name="viewport" content="width=device-width initial-scale=1.0"/>
	<meta name="mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="msapplication-starturl" content="/"/>
	<meta name="theme-color" content="#f48c5b"/>
	<meta name="Resource-type" content="Document" />  
	<title>Khuyến mãi</title>	
 	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style_promotion_detail.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"> 
</head>
		
<body>
	<?php include('header.php'); ?>
		<!-- Slider -->
	<?php 	$a=layMotKhuyenMai($makm);	
					$b=explode(";",$a["DDANH"]);
	?>
		<div class="main-contain">
		<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
			  <div class="carousel-inner">
				  <?php 
				  	for($i=0;$i<count($b);$i++){
						if($b[$i]=="") continue;
						$act=($i==0)?"active":"";
				  ?>
				<div class="carousel-item <?php echo $act;?>">
				  <img class="d-block w-100" src="<?php echo $b[$i];?>" alt="First slide">
				</div>
				  <?php }?>
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
	
	<div class="container-fluid section">
		<div class="jumbotron" style="overflow-y: auto">
		  <h1 class="tieudekm"><?php echo $a["TIEUDE"]?></h1>
			<h4>Từ:<?php $cdate = new DateTime($a['NGAYBD']);echo $cdate->format('d/m/Y');?> đến <?php $cdate = new DateTime($a['NGAYKT']);echo $cdate->format('d/m/Y');?></span> </h4>
			<hr class="my-4">
		  <p class="lead">
			 <?php echo $a["CHITIET"]?>
		  </p>
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
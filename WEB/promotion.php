<?php 
	session_start();
	$UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
	$MaKH = (isset($_SESSION['makh']))? $_SESSION['makh'] : '' ;
	$PageName="promotion";
?>


<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>LoveMarket – Bán đồ người yêu cũ – Khuyến mãi của LoveMarket</title>
	<meta name="description" content="LoveMarket – Khuyến mãi của LoveMarket - bán đồ người yêu cũ. Giảm giá cho tin đăng đặc biệt.Tìm kiếm đồ người yêu cũ giá rẻ. Hãy đăng tin ngay hôm nay. " />
	<meta name="author" content="DTTV" />
	<link rel="icon" href="./Images/Home/favicon.png"/>
	<meta name="viewport" content="width=device-width initial-scale=1.0"/>
	<meta name="mobile-web-app-capable" content="yes"/>
  	<meta name="apple-mobile-web-app-capable" content="yes"/>
  	<meta name="msapplication-starturl" content="/"/>
	<meta name="theme-color" content="#f48c5b"/>
	<meta name="Resource-type" content="Document" />  
 	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style-promotion.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"> 
</head>
		
<body>
	<?php include('header.php'); ?>
	
	<div class="container-fluid sectionmain">
	<div class="container">
		<p id="lovemarketkm">Khuyến mãi của LoveMarket</p>
		<div class="row detail">
			
		<!-- Tin đăng -->
			<?php
				include("xulyphp/xulyKM.php");
				$a = layKhuyenMai();
				$i = 0;
				while($i<count($a)){
			?>
			<div class="col-md-6">
				<div class="card item" style="margin-top: 10px;">
				  <img class="card-img-top" src="<?php echo explode(';',$a[$i]['DDANH'])[0]?>" alt="Card image cap">
				  <div class="card-body">
					  <!-- Tiêu đề -->
					<div class="row tieude1"> <?php echo $a[$i]["TIEUDE"]?></div>
					  
					 <div class="row details">
						 <div class="col-md-8">Từ:<?php $cdate = new DateTime($a[$i]['NGAYBD']);echo $cdate->format('d/m/Y');?> đến <?php $cdate = new DateTime($a[$i]['NGAYKT']);echo $cdate->format('d/m/Y');?></div>
					 	 <div class="col-md-4">
							 <a href="promotion-detail.php?MAKM=<?php echo $a[$i]['MAKM']?>" class="btn btn-purple">Xem chi tiết</a>
						 </div>
					 </div>
				  </div>
				</div>					
			</div>	
			<?php
					$i++;
				}
			?>
			
		
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
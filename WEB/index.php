<?php 
	session_start();
	$UserName = (isset($_SESSION['user']))? $_SESSION['user'] : '' ;
	$MaKH	  = (isset($_SESSION['makh']))? $_SESSION['makh'] : '' ;
	$PageName="trangchu"; 
?>
<?php include "xulyphp/login.php"; ?>
<?php include "xulyphp/xulytindang.php"; ?>

<!DOCTYPE html>
<html lang="vi">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Love Market | Welcome </title>
	<meta name="author" content="DTTV" />
	<meta name="description" content="Website bán đồ người yêu cũ." />
	<link rel="icon" href="./Images/Home/favicon.png"/>
	<meta name="viewport" content="width=device-width initial-scale=1.0"/>
	<meta name="mobile-web-app-capable" content="yes"/>
  	<meta name="apple-mobile-web-app-capable" content="yes"/>
  	<meta name="msapplication-starturl" content="/"/>
	<meta name="theme-color" content="#f48c5b"/>
	<meta name="Resource-type" content="Document" />  

	<!--********************** Đây là file index.php
	Include  Javascript library
	**********************-->

	<!--**********************
		Include  CSS library
		**********************-->
	<link rel="stylesheet" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/jquery.fullPage.css" />
	<link rel="stylesheet" href="./css/style.css" />
	<link rel="stylesheet" href="./css/animate.css">
	<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 

		<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">	
	


	<!--**********************
	Include Font 
	**********************-->
	<link href="https://fonts.googleapis.com/css?family=Gravitas+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
	<!-- Vietnamese font -->
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Arima+Madurai" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"> 

	<link rel="manifest" href="./manifest.json">
</head>

<body>
	<div id="fullpage">
	
				<!-- section 1 -->
		<div class="section " id="section0">
		<?php include('header.php') ?>	
	
			

			<?php if(empty($UserName))  { ?>
			<div class="content">
				<div class="login-box  animated slideInDown">
					<form action="index.php" method="POST" class="login-form">
						<h2>Đăng nhập</h2>
						<input type="text" id="username" class="login-input username-box" name="username" placeholder="Tên đăng nhập" required>
						<br>
						<br>
						<input type="password" id="password" class="login-input password-box" name="password" placeholder="Mật khẩu" required>
						<br>
						<div class="forgot-password">Quên mật khẩu?
								<a href="forget-password.php">Nhấn vào đây</a>
							</div>
						<br>
						<input type="submit" name="login" class="button login-button" value="Đăng nhập">
						<br><br>
						<h6  class="create-account" >
							<a href="create-account.php" style="text-decoration:none; color:white;">
							Tạo tài khoản</a></h6>
					</form>
				</div>
			</div> 
			<?php } else { ?>
					<div class="main-contain-carousel">
					<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" style="margin-top: 2em;">
						  <div class="carousel-inner">
							<div class="carousel-item active">
							  <img class="d-block w-100" src="Images/Promotion/item-0.jpg" alt="First slide">
							</div>
							<div class="carousel-item">
							  <img class="d-block w-100" src="Images/Promotion/item-1.jpg" alt="Second slide">
							</div>
							<div class="carousel-item">
							  <img class="d-block w-100" src="Images/Promotion/item-2.jpg" alt="Third slide">
							</div>
							<div class="carousel-item">
							  <img class="d-block w-100" src="Images/Promotion/item-3.jpg" alt="Third slide">
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
		
				
				
			<?php } ?>
				
		</div>


		<!-- section 2-->
		<div class="section" id="section1">
			<!-- slide 1-->
			<div class="slide" id="slide1">
				<div class="slideContent">
					<p><a href="#" style="color: white; text-decoration: none; font-weight: bold;">Danh mục theo Ngành hàng</a></p>
					<div class="slide-wrap">
						<div class="category container2">
							<div class="category-list" id="boxListCate">
								<ul>
								<?php $i=1; $a= TaiDanhMuc(); while($i<13) { ?>
									<li class="<?php echo $a[$i]['KTDM']?>">
									<a href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>" class="">
										<div class="category-item" style="background: url(<?php echo $a[$i]['DDANH'] ?>) no-repeat center center; background-size: 100% 100%;"></div>
										<div class="category-text">
											<span><?php echo $a[$i]['TENDM'] ?></span>
										</div>
									</a>
									</li>
								<?php $i++;	} ?>
									
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- slide 2-->
			<div class="slide" id="slide2">
				<div class="slideContent">
					<p>Danh mục theo mốc kỉ niệm</p>
					<div class="slide-wrap">
						<div class="category container2">
							<div class="category-list" id="boxListCate">
								<ul>
								<?php while($i<24) { ?>
									<li class="<?php echo $a[$i]['KTDM']?>">
									<a href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>" class="">
										<div class="category-item" style="background: url(<?php echo $a[$i]['DDANH'] ?>) no-repeat center center; background-size: 100% 100%;"></div>
										<div class="category-text">
											<span><?php echo $a[$i]['TENDM'] ?></span>
										</div>
									</a>
									</li>
								<?php $i++;	} ?>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- slide 3-->
			<div class="slide" id="slide3">
				<div class="slideContent">
					<p>Quà tinh thần</p>
					<div class="slide-wrap">
						<div class="category container2">
							<div class="category-list" id="boxListCate">
								<ul>
								<?php while($i<28) { ?>
									<li class="<?php echo $a[$i]['KTDM']?>">
									<a href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>" class="">
										<div class="category-item" style="background: url(<?php echo $a[$i]['DDANH'] ?>) no-repeat center center; background-size: 100% 100%;"></div>
										<div class="category-text">
											<span><?php echo $a[$i]['TENDM'] ?></span>
										</div>
									</a>
									</li>
								<?php $i++;	} ?>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End section 2 -->


		<!-- Begin section 3 -->
		<div class="section fp-auto-height" id="section2">
			<div class="footerContent">
				<?php include('./footer.php');?>
			</div>
			
		</div>
		<!-- End section 3 -->


	</div>

		
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
		
	<!--Fullpage.js-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	<script src="./js/scrolloverflow.js"></script>
	<script type="text/javascript" src="./js/jquery.fullPage.js"></script>
		
	<script type="text/javascript">
		$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['trang-chu', 'danh-muc', 'more'],
				css3: true,
				scrollBar: false,
				scrollOverflow: true
			});
		});
	</script>
	<!--Progressive Web App(PWA): install, service worker-->
	<!-- <script src="./check_browser.js"></script> -->
	<!-- <script src="./sw-register.js"></script> -->
	

</body>

</html>

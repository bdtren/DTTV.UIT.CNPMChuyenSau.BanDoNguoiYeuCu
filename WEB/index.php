<?php session_start(); // khai báo một (sesion)phiên làm việc?>
<?php $PageName="trangchu"; ?>


<?php include "login.php"; echo "<!-----------------------LOGIN-------------------->" ?>
<?php include "loadDanhMuc.php"; ?>


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
	
			<div class="content">
				<!--<h1>Love Market</h1>-->
				<div class="login-box  animated slideInDown">
					<!--<div class="login-image">
						<div class="cloud cloud1 animated fadeInLeft"></div>
						<div class="cloud thunder animated bounceIn"></div>
						<div class="cloud rain animated bounceIn"></div>
						<div class="cloud cloud2 animated fadeInRight"></div>
					</div>-->
					<form action="index.php" method="POST" class="login-form">
						<h2>Đăng nhập</h2>
						<input type="text" id="username" class="login-input username-box" name="username" placeholder="Tên đăng nhập">
						<br>
						<br>
						<input type="password" id="password" class="login-input password-box" name="password" placeholder="Mật khẩu">
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
									<li class="size50">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[0]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Bất động sản</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[1]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Nội ngoại thất, Đồ gia dụng</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[2]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Đồ điện tử</span>
											</div>
										</a>
									</li>
									<li class="size50">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[3]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Xe cộ</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[4]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Thời trang, đồ dùng cá nhân</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[5]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Mẹ và bé</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[6]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Thú cưng</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[7]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Giải trí, Thể thao, Sở thích</span>
											</div>
										</a>	
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[8]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Đồ văn phòng, Công nông nghiệp</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[9]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Việc làm dịch vụ</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[10]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Các loại khác</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[11]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Tất cả danh mục</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[12]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Cho tặng miễn phí</span>
											</div>
										</a>
									</li>
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
									<li class="size50">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[13]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Món quà đầu tiên</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[14]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Ngày Valentine 14-2</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[15]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Ngày Quốc tế phụ nữ 8-3</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[16]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Ngày Phụ nữ việt nam 20-10</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[17]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Quà sinh nhật</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[18]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Quà ngày lễ khác</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[19]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>100 ngày yêu</span>
											</div>
										</a>
									</li>
									<li class="size50">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[20]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Quà cầu hôn</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[21]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Quà khi người ấy giận</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[22]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Quà chia tay</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[23]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Quà kỉ niệm khác</span>
											</div>
										</a>
									</li>
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
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[24]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Thư tay</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[25]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Handmade</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[26]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Bài hát</span>
											</div>
										</a>
									</li>
									<li class="">
										<a href="#" class="">
											<div class="category-item" style="background: url(<?php echo $DanhMuc[27]; ?>) no-repeat center center; background-size: 100% 100%;"></div>
											<div class="category-text">
												<span>Bài thơ</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- slide 4-->
			<div class="slide" id="slide4">
				<div class="slideContent">
					<p>Tư vấn</p>
					
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
	<!--<script src="./sw-register.js"></script> -->
	

</body>

</html>

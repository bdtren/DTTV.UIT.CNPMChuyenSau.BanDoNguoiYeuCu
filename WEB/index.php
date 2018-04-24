<?php session_start(); // khai báo một (sesion)phiên làm việc?>

 <?php 
       if (isset($_SESSION['username']) && $_SESSION['username']){
           echo 'Bạn đã đăng nhập với tên là '.$_SESSION['username']."<br/>";
           echo 'Click vào đây để <a href="logout.php">Logout</a>';
       }
       else{
           //echo 'Bạn chưa đăng nhập';
       }
?>

<?php
	include 'databaseconfig.php';
	// load du lieu vao cac danh muc
	try {
		$conn = new PDO("mysql:host=$host;dbname=$databasename", $username, $password); 
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		// thông báo kết nối thành công
		if($conn)
		{
			/*echo "<script>";
			echo "alert('dang load danh muc');";    
			echo "</script>";*/
		}
		 else
		 {
			 echo "<script>";
			  echo "alert('khong the load danh muc');";    
			  echo "</script>";
		  }
	
		$stmt = $conn->prepare('SELECT TENDM, DDANH FROM DANHMUC');
		// đặt cấu trúc dữ liệu trả về
		 $stmt->setFetchMode(PDO::FETCH_ASSOC);// trả về dạng mảng với key là tên cột
		//Gán giá trị và thực thi
		$stmt->execute();//array('name' => $username)
		// mảng lưu đường dẫn ảnh danh mục
		$a=array(10);
		$i=0;
		//Hiển thị kết quả, vòng lặp sau đây sẽ dừng lại khi đã duyệt qua toàn bộ kết quả
		while($row = $stmt->fetch()) {
			$a[$i]=$row['DDANH'];
			$i++;
		}
		    // đóng kết nối csdl
			$conn = null;
		} catch (PDOException $pe) {
			die("Could not connect to the database $datebasename :" . $pe->getMessage());
		}

?>
<!DOCTYPE html>
<html lang="vi">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Love Market | Welcome </title>
	<meta name="author" content="DTTV" />
	<meta name="description" content="Website bán đồ người yêu cũ." />
	<link rel="icon" href="./Images/Home/favicon.png">
	<meta name="viewport" content="width=device-width initial-scale=1.0">
	<meta name="mobile-web-app-capable" content="yes">
  	<meta name="apple-mobile-web-app-capable" content="yes">
  	<meta name="msapplication-starturl" content="/">
  	<meta name="theme-color" content="#f48c5b">


	<!--**********************
		Include  CSS library
		**********************-->
	<link rel="stylesheet" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/javascript.fullPage.css" />
	<link rel="stylesheet" href="./css/style.css" />
	<link rel="stylesheet" href="./css/animate.css">

	<!--**********************
	Include  Javascript library
	**********************-->
	<script src="./sw-register.js"></script>

	<!-- Include Snow Effect -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
	<script src="./js/jquery.snow.min.1.0.js"></script>


	<!--**********************
	Include Font 
	**********************-->
	<link href="https://fonts.googleapis.com/css?family=Gravitas+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
	<!-- Vietnamese font -->
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
	<link rel="manifest" href="./manifest.json">
</head>

<body>
	<div id="fullpage">
		<!-- section 1 -->
		<div class="section " id="section0">
			<!--Begin header -->
			<header id="menu">
				<div class="container">
					<a href="./index.html">
						<div id="branding">
							<h1>
								<span class="logo"> </span>
							</h1>
						</div>
					</a>
					<nav>
						<ul>
							<li ><!--class="current"-->
								<a href="index.php">Tìm sản phẩm</a>
							</li>
							<li>
								<a href="#">Thông báo</a>
							</li>
							<li>
								<a href="./html/create_account.php	">Tài khoản</a>
							</li>
							<li>
								<a href="#">Giới thiệu</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<!--End header -->
			<div class="content">
				<!--<h1>Love Market</h1>-->
				<p id ="vt323">Nơi trao đổi, mua bán những món đồ
					<br> của người yêu cũ</p>
				<div class="login-box  animated slideInDown">
					<!--<div class="login-image">
						<div class="cloud cloud1 animated fadeInLeft"></div>
						<div class="cloud thunder animated bounceIn"></div>
						<div class="cloud rain animated bounceIn"></div>
						<div class="cloud cloud2 animated fadeInRight"></div>
					</div>-->
					<form action="login.php" method="POST" class="login-form">
						<h2>Đăng nhập</h2>
						<input type="text" id="username" class="login-input username-box" name="username" placeholder="username">
						<br>
						<br>
						<input type="password" id="password" class="login-input password-box" name="password" placeholder="password">
						<br>
						<div class="forgot-password">Quên mật khẩu?
								<a href="">Nhấn vào đây</a>
							</div>
						<br>
						<input type="submit" name="login" class="button login-button" value="Đăng nhập">
						<br><br>
						<h6  class="create-account" ><a href="./html/create_account.php">Tạo tài khoản</a></h6>
					</form>
				</div>
			</div>
		</div>

		<!-- section 2-->
		<div class="section" id="section1">
			<!-- slide 1-->
			<div class="slide" id="slide1">
				<div class="content">
					<p>Danh mục theo Ngành hàng</p>
					<div class="slide-wrap">
						<div class="category container2">
							<div class="category-list" id="boxListCate">
								<ul>
									<li class="size50">
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/bds2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Bất động sản</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/noithat.jpg) no-repeat; background-size: contain;"></div>
											<div class="category-text">
												<span>Nội ngoại thất, Đồ gia dụng</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/dientu2.jpg) no-repeat; background-size: contain;"></div>
											<div class="category-text">
												<span>Đồ điện tử</span>
											</div>
										</a>
									</li>
									<li class="size50">
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/xeco2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Xe cộ</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/thoitrang.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Thời trang, đồ dùng cá nhân</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/mebe2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Mẹ và bé</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/thucung2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Thú cưng</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/giaitri2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Giải trí, Thể thao, Sở thích</span>
											</div>
										</a>	
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/vanphong2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Đồ văn phòng, Công nông nghiệp</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item" style="background: url(./Images/danh-muc/dichvu2.jpg) no-repeat; background-size: cover;"></div>
											<div class="category-text">
												<span>Việc làm dịch vụ</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item"></div>
											<div class="category-text">
												<span>Các loại khác</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item"></div>
											<div class="category-text">
												<span>Tất cả danh mục</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="">
											<div class="category-item"></div>
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
				<div class="content">
					<p>Danh mục theo mốc kỉ niệm</p>
				</div>
			</div>

			<!-- slide 3-->
			<div class="slide" id="slide3">
				<div class="content">
					<p>Tư vấn</p>
				</div>
			</div>
		</div>
		<!-- End section 2 -->


		<!-- Begin section 3 -->
		<div class="section" id="section2">
			<div class="content">
				
			</div>
			<footer class="flex-rw">
				<ul class="footer-list-top">
					<li>
						<h4 class="footer-list-header">Liên kết ngoài </h4>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Facebook</a>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Zalo</a>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Twitter</a>
					</li>
				</ul>
				<ul class="footer-list-top">
					<li>
						<h4 class="footer-list-header">Hỗ trợ khách hàng</h4>
					</li>


					<li>
						<a href='' class="generic-anchor footer-list-anchor">Liên hệ</a>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor">Câu hỏi thường gặp</a>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor">Các quy định của loveMarket</a>
					</li>
				</ul>
				<ul class="footer-list-top">
					<li id='help'>
						<h4 class="footer-list-header">Về chúng tôi</h4>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Giới thiệu</a>
					</li>
					<li>
						<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Truyền thông</a>
					</li>
				</ul>
				<section class="footer-bottom-section">
					<div class="footer-bottom-wrapper">
						<i class="fa fa-copyright" role="copyright">
								© SE214.I21_Nhom4
						</i> 
						<br>
						<address class="footer-address" role="company address">Ho Chi Minh</address>
						<br>
						<address class="footer-address" role="email address">email:15520161@gm.uit.edu.vn</address>						
						<span class="footer-bottom-rights"> </span>
					</div>
				</section>
			</footer>
		</div>
		<!-- End section 3 -->


	</div>


	<script type="text/javascript" src="js/javascript.fullPage.js"></script>
	<script type="text/javascript">
		fullpage.initialize('#fullpage', {
			anchors: ['trang-chu', 'danh-muc', 'more'],
			menu: '#menu',
			css3: true
		});	
	</script>


	<!-- Begin Snow Effect Script -->
	<script>
		$(document).ready(function () {
			$.fn.snow({ minSize: 5, maxSize: 40, newOn: 500, flakeColor: '#ffffff' });
		});
	</script>
	<!-- End Snow Effect Script -->
</body>

</html>
<?php
	if(isset($_SESSION['user']))
	{
		$UserName = $_SESSION['user'] ;
	}
	else
	{
		$UserName = '';
	}
	//Kiểm tra người dùng đã đăng nhập chưa
	$IsLogin="enable";
	$status="false";
	if($IsLogin=="false"){
		//Không cho phép CLick vào "tài khoản"
		$status="disabled";
	}else{
		$status="";
	}

	//Kiểm tra trạng thái kích hoạt của header 
	if(!isset($PageName)){
		$PageName = "";
	}
	$arrActive= ["","","","",""];
	if($PageName=="trangchu"){
		$arrActive[0]="active";//Trạng thái
	}
	else if($PageName=="danhmuc"){
		$arrActive[1]="active";
	}else if($PageName=="thongbao"){
		$arrActive[2]="active";
	}else if($PageName=="gioithieu"){
		$arrActive[4]="active";
	}

?>	

	<!-- font Vietnamese -->
	<html>
	<head>
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"> 

	<style type="text/css">
		.tieude{
			font-family: 'Lobster', cursive;
		}
	</style>
	</head>

	<body>
<!--Begin header -->
		<div class="tieude">
			<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a class="navbar-brand" href="index.php"><img src="Images/logo-1.png" style="width:210px;"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item <?php echo $arrActive[0]; ?>">
					<a class="nav-link" href="index.php">Trang chủ</a>
					</li>
					<li class="nav-item <?php echo $arrActive[1]; ?>">
					<a class="nav-link" href="category.php">Danh mục sản phẩm</a>
					</li>
					<!-- Nút thông báo -->
					<li class="nav-item dropdown" <?php echo $arrActive[2]; ?> "btn-group">
					<!-- Nếu chưa đăng nhập -->
					<?php if($status=="disabled"){ ?>	
					<a class="nav-link" href="notification.php">Thông báo</a>	
					<?php } else { ?>
					<!-- Example single danger button -->
					<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thông báo</a>
								<div class="dropdown-menu" aria-labelledby="dropdown01">
								  <a class="dropdown-item" href="#">Thông báo từ LoveMarket</a>
								  <a class="dropdown-item" href="#">Thông báo từ người đang theo dõi</a>
								</div>
					<?php
					} ?>
					</li>
					<li class="nav-item <?php echo $arrActive[3]; ?>">
					<a class="nav-link <?php echo $status; ?>" <?php if(isset($_SESSION['user'])) echo 'href="user/user-page.php"'; else echo 'href="index.php"'; ?> >Tài khoản <?php echo $UserName; ?></a>
					</li>
					<li class="nav-item <?php echo $arrActive[4]; ?>">
					<a class="nav-link" href="introduction.php">Giới thiệu</a>
					</li>

				</ul>
				<form class="form-inline mt-2 mt-md-0">
					<input class="form-control mr-sm-2" type="text" placeholder="Tìm sản phẩm..." >
					<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Tìm kiếm</button>
				</form>
				</div>
    		  </nav>
			</div>
	<!--End header -->
	</body>
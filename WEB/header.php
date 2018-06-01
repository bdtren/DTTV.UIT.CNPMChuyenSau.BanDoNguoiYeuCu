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
	$IsLogin="true"; //true hoặc false
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
	<link href="https://fonts.googleapis.com/css?family=Taviraj" rel="stylesheet"> 

	<style type="text/css">
		.tieude{
			font-family: 'Taviraj', serif;
		}
	</style>
	<link rel="stylesheet" href="css/style-notification.css">
	</head>

	<body>
<!--Begin header -->
		<div class="tieude">
			<nav class="navbar navbar-expand-md navbar-dark fixed-top ">
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
					<li>
					<div class="dropdown">
						<a class="nav-link" href="#">Thông báo</a>
						<!-- Chưa đăng nhập -->
							<?php if($IsLogin=="false"){  ?>
						<div class="dropdown-content-nonelogin">
							<img src="Images/Home/cute_twitter5.png" alt="dangnhaplovemaket">
							<div>Bạn cần đăng nhập để xem thông báo!</div>
							<a class="btn" href="create-account.php" id="createacc">Tạo tài khoản</a>
						</div>
							<?php  } else { ?>
						<!-- đã đăng nhập -->
						<div class="dropdown-content-login">
							<div id="loginheader">Thông báo từ LoveMarket</div>
							<!-- Danh sách thông báo mới từ người đang theo dõi -->
							<ul class="list-group list-group-flush">
								<?php 
										   $i=0; $num=2;
										   while($i<$num){ ?>
								<!-- vòng lặp thông báo -- Nên cho 2 thông báo -->
								<a href="product-detail.php"> <!-- Link đến trang chi tiết sản phẩm -->
								<li class="list-group-item colnotify">
									<div class="container-fluid">
										<div class="row">
											<div class="col-3">
												<img class="notiavatar" src="Images/icons/icon-72x72.png" style="border-radius: 0;"> <!-- Mặc định -->
											</div>
											<div class="col-9 notidetail" >
												<div class="row">
												<div class="col-7">
													<label class="user">Tiêu đề</label>
												</div>
												</div>
												<div class="row">
												<div class="col-12">
													<label class="head">Nội dung</label>
												</div>	
												</div>					
											</div>
										</div>	
									</div>						
								</li>
								</a>
								<?php $i++; } ?>
									<!-- Kết thúc 1 thông báo mới -->
							 </ul>
							<a class="btn" href="promotion.php" id="createacc">Xem nhiều hơn</a> <!-- chuyển sang khuyến mãi -->
							
							<!-- Danh sách thông báo mới từ LoveMarket -->
							<div id="loginheader">Thông báo từ người đang theo dõi</div>
							<ul class="list-group list-group-flush">
								<?php 
										   $i=0; $num=2;
										   while($i<$num){ ?>
								<!-- vòng lặp thông báo -- Nên cho 3 thông báo -->
								<a href="product-detail.php"> <!-- Link đến trang chi tiết sản phẩm -->
								<li class="list-group-item colnotify">
									<div class="container-fluid">
										<div class="row">
											<div class="col-3">
												<img class="notiavatar" src="Images/user/avatar5.png">
											</div>
											<div class="col-9 notidetail" >
												<div class="row">
												<div class="col-7">
													<label class="user">Người đăng</label>
												</div>
												<div class="col-5">
													<label class="time">Thời gian</label>
												</div>	
												</div>
												<div class="row">
												<div class="col-12">
													<label class="head">Tiêu đề bài viết</label>
												</div>	
												</div>					
											</div>
										</div>	
									</div>						
								</li>
								<?php $i++; } ?>
									<!-- Kết thúc 1 thông báo mới -->
							 </ul>
							<a class="btn" href="user/user-page.php" id="createacc">Xem nhiều hơn</a> <
								</a>	
							
							
							
						</div>  
							  <?php } ?>	  
						  
					</div>
					</li>
					<!-- Kết thúc nút thông báo -->
					
					
					<li class="nav-item <?php echo $arrActive[3]; ?>">
					<a class="nav-link <?php echo $status; ?>" <?php if(isset($_SESSION['user'])) echo 'href="user/user-page.php"'; else echo 'href="index.php"'; ?> >Tài khoản <?php echo $UserName; ?></a>
					</li>
					<li class="nav-item <?php echo $arrActive[4]; ?>">
					<a class="nav-link" href="introduction.php">Giới thiệu</a>
					</li>

				</ul>
				<!-- <form class="form-inline mt-2 mt-md-0" method='GET' action='xulyphp/search.php'>
					<input class="form-control mr-sm-2" type="text" placeholder="Tìm sản phẩm..." >
					<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Tìm kiếm</button>
				</form> -->
				<div class="form-inline mt-2 mt-md-0">
					<input id='key' name='key' class="form-control mr-sm-2" type="text" placeholder="Tìm sản phẩm..." >
					<input type="button" class="btn btn-outline-primary my-2 my-sm-0"  name="timkiem" id='sreach' onclick="Search()" value='Tìm kiếm'>
				</div>
					
				<script language="javascript">

					function Search(sreach)
					{		
						//document.getElementById("field2").value;
						if(document.getElementById("key").value != '')
						{
							//alert(document.getElementById("key").value);
							location.href = 'category.php?Search='+key.value;
						}
						
					}

				</script>	

				</div>
    		</nav>
		</div>
	<!--End header -->
	</body>
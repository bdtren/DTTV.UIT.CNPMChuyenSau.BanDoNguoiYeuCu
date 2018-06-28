<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="icon" href="./Images/Home/favicon.png"/>
	<title>Trang cá nhân Nguyễn Văn A</title>
		<!-- Bootstrap CSS -->
	<!-- ../../../ trở về index.php -->
	<link rel="stylesheet" href="../../../css/bootstrap.min.css">	
	<link rel="stylesheet" href="../../../css/style-all-post.css">
	
		<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
	
	<!-- Font -->
	<link href="https://fonts.googleapis.com/css?family=Arima+Madurai" rel="stylesheet"> 
	
	
</head>

<body>
	
	<!-- Header -->
	<nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#" style="font-weight: bolder">Admin <span id="nameadmin">Nguyễn Văn ABCD</span></a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="../../index.php">Trở về trang Admin</a>
        </li>
      </ul>
    </nav>
	<!-- Kết thúc Header -->
	
	<div class="container-fluid" id="mainlarge">
		<div class="container" >
		<div class="row main">
			<!-- Thông tin người dùng -->
			<div class="col-md-4 profile">
				<div class="card">
				  <img class="card-img-top" src="../../../Images/user/avatar1.png" alt="Card image cap">
				  <div class="card-body">
					<p class="card-text username">Tên người dùng</p>
				  </div>
				  <ul class="list-group list-group-flush">
					<li class="list-group-item"><i class="fa fa-user sectionman" aria-hidden="true"></i>
  						Họ tên: Nguyễn Văn A</li>
					<li class="list-group-item">
						<i class="fa fa-mars sectionman" aria-hidden="true"></i>
  						Giới tính: Nam 
					  </li>
					<li class="list-group-item"><i class="fa fa-address-book sectionman" aria-hidden="true"></i>
  						Địa chỉ: TPHCM </li>
					<li class="list-group-item"><i class="fa fa-pencil sectionman" aria-hidden="true"></i>
  						Đôi dòng tâm sự: <textarea class="form-control" rows="5" id="comment" style="resize: none;" disabled>Dòng tâm sự của tài khoản</textarea></li>
				  </ul>
				  <div class="card-body">
						<p>
						  <button class="btn btn-type-purple" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
							Liên hệ
						  </button>
						  <button type='button' id='Theodoi' class="btn btn-type-pink" style="color: white;" onclick='TheoDoi()'>
							 Theo dõi
						  </button>
						</p>
						<div class="collapse" id="collapseExample">
						  <div class="card card-body">
							 <ul class="list-group list-group-flush">
								<li class="list-group-item"><i class="fa fa-facebook-official sectioncontactman" aria-hidden="true"></i>
  									Facebook : địa chỉ</li>
								<li class="list-group-item"><i class="fa fa-mobile  sectioncontactman" aria-hidden="true"></i>
  									Điện thoại : SDT</li>
								<li class="list-group-item "><i class="fa fa-envelope-open  sectioncontactman" aria-hidden="true"></i>
  									Email : địa chỉ</li>
							  </ul>
						  </div>
						</div>
				  </div>
				</div>
			</div>
				
	<!-- Vùng các tin đăng -->	
		<div class="col-md-8 news">
			<!-- Vùng các tin đã đăng -->
			<div class="row">
				<div class="col-md-12 sectionallnews">
				<h6 class="border-bottom border-gray pb-2 mb-0">Các tin đã đăng</h6>
				 <div class="my-3 p-3 rounded box-shadow" id="postsectionallnews">	
					  <!-- Bắt đầu tin đăng -->
					 	<?php $i=0; while($i<4){ ?>
						<a href="#">
							<div class="media text-muted pt-3 border-bottom " >
							  <img src="../../../Images/san-pham/tindang1_2.png" alt="" class="mr-2 rounded">
							  <p class="media-body pb-3 mb-0 small lh-125 border-gray">
								  <strong class="d-block text-gray-dark title-allpost"><i class="fa fa-diamond"></i>  Tiêu đề <span class="date-allpost" ><i class="fa fa-calendar calendaricon"></i>  Ngày đăng</span></strong>
								<i class="fa fa-shopping-bag bagicon"></i>  Loại tin đăng<br>
								<i class="fa fa-money moneyicon"></i> Tâm sự<br>
							  </p>
							</div>
						</a>
						<?php $i++;  }  ?>
					 <!-- Kết thúc tin đăng -->
				  </div>
				</div>
			</div>
			
			<!-- Vùng các tin đã ẩn -->
			<div class="row">
				<div class="col-md-12 sectionallnews">
				<h6 class="border-bottom border-gray pb-2 mb-0">Các tin đã ẩn</h6>
				 <div class="my-3 p-3 rounded box-shadow" id="postsectionallnews">	
					  <!-- Bắt đầu tin đăng -->
					 	<?php $i=0; while($i<7){ ?>
						<a href="#">
							<div class="media text-muted pt-3 border-bottom " >
							  <img src="../../../Images/san-pham/tindang1_2.png" alt="" class="mr-2 rounded">
							  <p class="media-body pb-3 mb-0 small lh-125 border-gray">
								  <strong class="d-block text-gray-dark title-allpost"><i class="fa fa-diamond"></i>  Tiêu đề <span class="date-allpost" ><i class="fa fa-calendar calendaricon"></i>  Ngày đăng</span></strong>
								<i class="fa fa-shopping-bag bagicon"></i>  Loại tin đăng<br>
								<i class="fa fa-money moneyicon"></i> Tâm sự<br>
							  </p>
							</div>
						</a>
						<?php $i++;  }  ?>
					 <!-- Kết thúc tin đăng -->
				  </div>
				</div>
			</div>
			<!-- Kết thúc vùng các tin đã ẩn -->
	
			
			
			
			
		</div>	
<!-- Kết thúc vùng các tin đăng -->		
			
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
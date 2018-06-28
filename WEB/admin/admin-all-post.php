<?php
	session_start();
	$User = (isset($_SESSION['useradmin']))? $_SESSION['useradmin'] : '' ;
	$MaNV = (isset($_SESSION['manv']))? $_SESSION['manv'] : '' ; 
	$MaCV = (isset($_SESSION['macv']))? $_SESSION['macv'] : '' ; 
	if($MaCV==""||$_GET['MAKH']==""||$_GET['MAKH']==null){
		header("Location: ./index.php");
	}
	
	include("./xulyphp/xulytindangAdmin.php");
	
	$a = TaiThongTinKhachHang($_GET['MAKH']);

	#Thêm style màu cho mỗi giới tính
	if($a['GIOITINH']=="Nam"){
		$icongioitinh = "fa fa-mars";
		$sectionuser = "sectionman";
		$sectioncontact = "sectioncontactman";
	}
	else{
		$icongioitinh = "fa fa-venus";
		$sectionuser = "sectionwoman";
		$sectioncontact = "sectioncontactwoman";
	}
?>


<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="icon" href="../Images/Home/favicon.png"/>
	<title>Khách hàng <?php echo $a["HOTEN"]?></title>
		<!-- Bootstrap CSS -->
	<!-- ../ trở về index.php -->
	<link rel="stylesheet" href="../css/bootstrap.min.css">	
	<link rel="stylesheet" href="../css/style-all-post.css">
	
		<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
	
	<!-- Font -->
	<link href="https://fonts.googleapis.com/css?family=Arima+Madurai" rel="stylesheet"> 
	
	
</head>

<body>
	
	<!-- Header -->
	<nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#" style="font-weight: bolder">Admin: <span id="nameadmin"><?php echo $User?></span></a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="./index.php">Trở về trang Admin</a>
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
				  <img class="card-img-top" src="../<?php echo $a["AVATAR"]?>" alt="Card image cap">
				  <div class="card-body">
					<p class="card-text username"><?php echo $a["TENTK"]?></p>
				  </div>
				  <ul class="list-group list-group-flush">
					<li class="list-group-item"><i class="fa fa-user <?php echo $sectionuser ?>" aria-hidden="true"></i>
  						Họ tên: <?php echo $a["HOTEN"]?></li>
					<li class="list-group-item">
					<i class="<?php echo $icongioitinh ?> <?php echo $sectionuser ?>" aria-hidden="true"></i>
  						Giới tính: <?php echo $a["GIOITINH"]?>
					  </li>
						<li class="list-group-item"><i class="fa fa-address-book <?php echo $sectionuser ?>" aria-hidden="true"></i>
  						Địa chỉ: <?php echo $a["DIACHI"]?></li>
							<li class="list-group-item"><i class="fa fa-pencil <?php echo $sectionuser ?>" aria-hidden="true"></i>
  						Đôi dòng tâm sự: <textarea class="form-control" rows="5" id="comment" style="resize: none;" disabled><?php echo $a["TAMSU"]?></textarea></li>
				  </ul>
					<br>
					<div class="card card-body">
							 <ul class="list-group list-group-flush">
								<li class="list-group-item"><i class="fa fa-facebook-official sectioncontactman" aria-hidden="true"></i>
  									Facebook : <?php echo $a["FACEBOOK"]?></li>
								<li class="list-group-item"><i class="fa fa-mobile  sectioncontactman" aria-hidden="true"></i>
  									Điện thoại : <?php echo $a["SDT"]?></li>
								<li class="list-group-item "><i class="fa fa-envelope-open  sectioncontactman" aria-hidden="true"></i>
  									Email : <?php echo $a["DIACHI"]?></li>
							  </ul>
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
						 <?php $i=0; 
							$b = TaiDanhSachTinDang($_GET['MAKH']);
							if(!empty($b)){
						 		while($i<count($b)){ ?>
						<a href="<?php echo "../product-detail.php?MATD=".$b[$i]['MATD'];?>">
							<div class="media text-muted pt-3 border-bottom " >
							  <img src="../<?php echo Chuoi2Mang($b[$i]['HINHANH'])[0];?>" alt="" class="mr-2 rounded">
					  <p class="media-body pb-3 mb-0 small lh-125 border-gray">
						  <strong class="d-block text-gray-dark title-allpost"><i class="fa fa-diamond"></i>  <?php echo $b[$i]['TIEUDE'];?> <span class="date-allpost" ><i class="fa fa-calendar calendaricon"></i>  <?php echo $b[$i]['NGAYDANG'];?> </span></strong>
						<i class="fa fa-shopping-bag bagicon"></i>  <?php echo $b[$i]['LOAITD'];?><br>
						<i class="fa fa-money moneyicon"></i> <?php echo (strlen($b[$i]['TSTD'])<=250? $b[$i]['TSTD']: substr($b[$i]['TSTD'],0,250)."...");?><br>
					  </p>
							</div>
						</a>
						<?php $i++;  }  
							}?>
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
						<?php $i=0; 
							$c = TaiDanhSachTinAn($_GET['MAKH']);
							if(!empty($c)){
						 		while($i<count($c)){ ?>
						<a href="<?php echo "../product-detail.php?MATD=".$c[$i]['MATD'];?>">
							<div class="media text-muted pt-3 border-bottom " >
							  <img src="../<?php echo Chuoi2Mang($c[$i]['HINHANH'])[0];?>" alt="" class="mr-2 rounded">
					  <p class="media-body pb-3 mb-0 small lh-125 border-gray">
						  <strong class="d-block text-gray-dark title-allpost"><i class="fa fa-diamond"></i>  <?php echo $c[$i]['TIEUDE'];?> <span class="date-allpost" ><i class="fa fa-calendar calendaricon"></i>  <?php echo $c[$i]['NGAYDANG'];?> </span></strong>
						<i class="fa fa-shopping-bag bagicon"></i>  <?php echo $c[$i]['LOAITD'];?><br>
						<i class="fa fa-money moneyicon"></i> <?php echo (strlen($c[$i]['TSTD'])<=250? $c[$i]['TSTD']: substr($c[$i]['TSTD'],0,250)."...");?><br>
					  </p>
							</div>
						</a>
						<?php $i++;  }
							}  ?>
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
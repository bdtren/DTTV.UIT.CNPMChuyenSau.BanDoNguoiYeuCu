<?php
	$PageName="xemtrangnguoidung";
?>
<?php include('xulyphp/xulytindang.php');?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Untitled Document</title>
		<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">	
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style-all-post.css">
	
		<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
	
	<!-- Font -->
	<link href="https://fonts.googleapis.com/css?family=Arima+Madurai" rel="stylesheet"> 
	
	
</head>

<body>
	<?php include('header.php') ?>
	<div class="container">
		<div class="row main">
			<?php $a = TaiThongTinKhachHang($_GET['MAKH'])?>
			<!-- Thông tin người dùng -->
			<div class="col-md-4 profile">
				<div class="card">
				  <img class="card-img-top" src="<?php echo $a['AVATAR']; ?>" alt="Card image cap">
				  <div class="card-body">
					<p class="card-text username"><?php echo $a['TENTK']; ?></p>
				  </div>
				  <ul class="list-group list-group-flush">
					<li class="list-group-item"><i class="fa fa-user" aria-hidden="true"></i>
  Họ tên: <?php echo $a['HOTEN']; ?></li>
					<li class="list-group-item"><i class="fa fa-transgender" aria-hidden="true"></i>
  Giới tính:<?php echo $a['GIOITINH']; ?></li>
					<li class="list-group-item"><i class="fa fa-address-book" aria-hidden="true"></i>
  Địa chỉ:<?php echo $a['DIACHI']; ?></li>
					<li class="list-group-item"><i class="fa fa-pencil" aria-hidden="true"></i>
  Đôi dòng tâm sự: <textarea class="form-control" rows="5" id="comment" style="resize: none;" disabled>Dòng tâm sự của tài khoản <?php echo $a['TAMSU']; ?></textarea></li>
				  </ul>
				  <div class="card-body">
						<p>
						  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
							Liên hệ
						  </button>
						 <a href="#" class="btn btn-warning" style="color: white;">Theo dõi</a>
						</p>
						<div class="collapse" id="collapseExample">
						  <div class="card card-body">
							 <ul class="list-group list-group-flush">
								<li class="list-group-item"><i class="fa fa-facebook-official" aria-hidden="true"></i>
  Facebook : <?php echo $a['FACEBOOK']; ?></li>
								<li class="list-group-item"><i class="fa fa-mobile" aria-hidden="true"></i>
  Điện thoại : <?php echo $a['SDT']; ?></li>
								<li class="list-group-item"><i class="fa fa-envelope-open" aria-hidden="true"></i>
  Email : <?php echo $a['EMAIL']; ?></li>
							  </ul>
						  </div>
						</div>
				  </div>
				</div>
			</div>
		
			
			<!-- Danh sách các bài đăng đã duyệt -->
			<div class="col-md-8 news">
				 <div class="my-3 p-3 bg-white rounded box-shadow">
					<h6 class="border-bottom border-gray pb-2 mb-0">Các tin đã đăng</h6>
					 
					 <?php
							 if(!empty(TaiDanhSachTin($_GET['MAKH'])))
							 {
								 foreach(TaiDanhSachTin($_GET['MAKH']) as $b)
								 {
					 ?>
					 <!-- tin đăng -->
					<div class="media text-muted pt-3 border-bottom ">
					  <img src="<?php echo Chuoi2Mang($b['HINHANH'])[0];?>" alt="" class="mr-2 rounded">
					  <p class="media-body pb-3 mb-0 small lh-125 border-gray">
						  <strong class="d-block text-gray-dark"><i class="fa fa-diamond"></i>  <?php echo $b['TIEUDE'];?> <span style="float: right"><i class="fa fa-calendar"></i>  <?php echo $b['NGAYDANG'];?> </span></strong>
						<i class="fa fa-shopping-bag"></i>  <?php echo $b['LOAITD'];?><br>
						<i class="fa fa-money"></i>  <?php echo $b['GIABAN'];?><br><?php echo $b['TSTD'];?><br>
						 <span style="float: right;"><a href="<?php echo "product-detail.php?MATD=".$b['MATD'];?>" style="text-decoration: none;"><i class="fa fa-plus-square" style="color: #00A1FB;"></i>  Xem chi tiết</a></span> <!-- Dẫn đển trang product-detail.php -->
					  </p>
					</div>	
					 <!-- Kết thúc tin đăng -->
						<?php 
							 }
						}
					 ?>
				  </div>
			</div>
		</div>
	</div>

	<!-- footer -->
	<?php include('footer.php'); ?>
	    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</body>
</html>
<?php
	session_start();
	$UserName = (isset($_SESSION['user']))? $_SESSION['user'] : '' ;
	$MaKH = (isset($_SESSION['makh']))? $_SESSION['makh'] : '' ;
	$PageName="xemtrangnguoidung";

	include('xulyphp/xulytindang.php');
	include('xulyphp/xulytheodoibaocao.php');
?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Trang cá nhân</title>
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
	<div class="container-fluid" id="mainlarge">
		<div class="container" >
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
						  <button class="btn btn-type-purple" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
							Liên hệ
						  </button>
						  <button type='button' id='Theodoi' class="btn btn-type-pink" style="color: white;" onclick='TheoDoi()'>
							  <?php if(KiemTraTheoDoiKhachHang($MaKH,$a["MAKH"])==1) echo "Bỏ Theo Dõi"; else echo "Theo Dõi"; ?>
						  </button>
						  	<script language="javascript">
								function TheoDoi()
								{
									if('<?php echo $MaKH;?>' == '')
										alert("Bạn phải đăng nhập để theo dõi");
									else
									{
										var info =[];
										info[0] = "<?php echo $MaKH;?>";
										info[1] = "<?php echo $a["MAKH"];?>";
										if("<?php echo KiemTraTheoDoiKhachHang($MaKH,$a['MAKH']);?>" == "0" )
										{
											$.ajax(
											{
												url: "./xulyphp/xulyajax.php",
												data: 
												{
													inputFunction: "theodoikhachhang",
													info: 			info
												},
												type: "post",
												success: function(output) 
												{
													//alert(output);
												}
											});
										}
										else
										{
											$.ajax(
											{
												url: "./xulyphp/xulyajax.php",
												data: 
												{
													inputFunction: "botheodoikhachhang",
													info: 			info
												},
												type: "post",
												success: function(output) 
												{
													//alert(output);
												}
											});
										}									
										location.reload();
									}
										
								}
							</script>
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
				 <div class="my-3 p-3 rounded box-shadow">
					<h6 class="border-bottom border-gray pb-2 mb-0" style=" font-weight: bold; font-size: 19px;">Các tin đã đăng</h6>
					 
					 <?php
							 if(!empty(TaiDanhSachTin($_GET['MAKH'])))
							 {
								 foreach(TaiDanhSachTin($_GET['MAKH']) as $b)
								 {
					 ?>
					 <!-- tin đăng -->
				<a href="<?php echo "product-detail.php?MATD=".$b['MATD'];?>">
					<div class="media text-muted pt-3 border-bottom ">
					  <img src="<?php echo Chuoi2Mang($b['HINHANH'])[0];?>" alt="" class="mr-2 rounded">
					  <p class="media-body pb-3 mb-0 small lh-125 border-gray" style="color: black; font-size: 16px;">
						  <strong class="d-block text-gray-dark"><i class="fa fa-diamond"></i>  <?php echo $b['TIEUDE'];?> <span style="float: right"><i class="fa fa-calendar"></i>  <?php echo $b['NGAYDANG'];?> </span></strong>
						<i class="fa fa-shopping-bag"></i>  <?php echo $b['LOAITD'];?><br>
						<i class="fa fa-money"></i>  <?php echo $b['GIABAN'];?>đ<br><?php echo $b['TSTD'];?><br>
					  </p>
					</div>
				</a>
					 <!-- Kết thúc tin đăng -->
						<?php 
							 }
						}
					 ?>
				  </div>
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
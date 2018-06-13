<?php 
	session_start();
	$UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
	$PageName="chitietsanpham"; 
?>

<?php include('xulyphp/xulytindang.php'); ?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="icon" href="./Images/Home/favicon.png"/>
<title></title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/style-product-detail.css">
	<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="manifest" href="./manifest.json"> 
	<link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif" rel="stylesheet"> 
</head>

<body>
	<?php include('header.php'); ?>
		<?php $a = TaiChiTietSanPham($_GET['MATD']) ?>
		<div class="container-fluid" style="margin-top: 5.5em; border: none;">
			<div class="container-fluid">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-4">
						<label id="tieude"><?php  echo $a["TIEUDE"]; ?></label><br>
						<label id="date">Ngày đăng: <span><?php  echo $a["NGAYDANG"]; ?></span></label>	
						<label id="status">Tình trạng: <span><?php  echo $a["TINHTRANGMH"]; ?></span></label>
						</div>
						<div class="col-md-8" style="margin-top: 30px; margin-bottom: 5px;">
							<a class="btn  theodoi">Theo dõi</a>
							<a class="btn  baocaobtn" data-toggle="modal" data-target="#exampleModal">Báo cáo</a>
							<div class="userinfo" data-toggle="modal" data-target="#contact">
								<img class="imguser" src="Images/user/avatar1.png">
								<label> <?php  echo $a["HOTEN"]; ?> </label>
							</div>
					</div>
				</div>
				
				<div class="container-fluid">
					<div class="row">
						<!-- Hình ảnh -->
					<div class="preview col-sm-12  col-md-4 col-lg-4">
						<div class="preview-pic tab-content">
						<?php  $b =  Chuoi2Mang($a["HINHANH"]); $s=0; 
						
							foreach($b as $value)
							{
								if($s==0)
									echo "<div class='tab-pane active' id='pic-$s'><img class='zoom' src='$value'></div>";
								else
									echo "<div class='tab-pane' id='pic-$s'><img src='$value' class='zoom'></div>";
								 $s++;
							}
						?>
						</div>
												
						<ul class="preview-thumbnail nav nav-tabs">
						<?php
						$s=0;
				
							foreach($b as $value)
							{
								$k = "#pic-".$s;
								if($s==0)
									echo "<li class='active'><a data-target='$k' data-toggle='tab'><img src='$value' /></a></li>";
								else
									echo "<li <a data-target='$k' data-toggle='tab'><img src='$value' /></a></li>";
								$s++;
							}
						
						?>
						</ul>
						
				<div class="card detaildes" style="width: 100%;">
					  <div class="card-header detaildes-header">
						Thông tin
					  </div>
					  <ul class="list-group list-group-flush">
						  <!-- Giá bán -->
						<!-- chọn sản phẩm giảm giá -->
						<?php
							if($a["LOAITIN"]!="ribbon-new" && $a["LOAITIN"]!="ribbon-hot" && $a["LOAITIN"]!=""){								$giagiam=substr($a["LOAITIN"] ,16, strlen($a["LOAITIN"])-16);
							?>
						<li class="list-group-item" id="price"><i class="far fa-money-bill-alt"></i>  Giá : <?php  echo $giagiam; ?>đ <span id="diproduct"><?php echo $a["GIABAN"]; ?>đ</span></li>
						<?php } else { ?>	
						<!-- chọn sản phẩm thông thường -->
						<li class="list-group-item" id="price"><i class="far fa-money-bill-alt"></i>  Giá : <?php  echo $a["GIABAN"]; ?> đ</li>
							<?php } ?>

						<li class="list-group-item"> Loại tin: <span><?php  echo $a["LOAITD"]; ?></span></li>
						  
						<li class="list-group-item" id="method">Phương thức giao dịch: <span><?php  echo $a["PTGD"]; ?></span></li>
					  </ul>
					</div>
						
						
						
					</div>
					
					
					<div class="details col-sm-12 col-md-8 col-lg-8 ">				
					<div id="slogan">
							" Như chưa hề có cuộc chia tay "
					</div>
						
						<div class="tamsubg">
							<div class="tamsu">
							<textarea class="form-control" disabled>
								<?php  echo $a["TAMSU"]; ?>
							</textarea>
							
							</div>
						</div>
						
						
						
					</div>
					
					
				</div>
				</div>
			</div>
			</div>
	</div>
		<?php include('footer.php'); ?>
		
<!-- Form liên hệ -->
<div class="modal fade popuppro" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Thông tin liên hệ</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <div class="row">
		  <div class="col-md-4">
			  <img id="popupimage" src="Images/user/avatar1.png">
		  </div>
		  <div class="col-md-8">
			  <label>Họ tên: <span><?php  echo $a["HOTEN"]; ?></span></label><br>
			  <label>Địa chỉ: <span><?php  echo $a["DIACHI"]; ?></span></label>
			  <label>Điện thoại: <span><?php  echo $a["SDT"]; ?></span></label>
     		 <label>Email: <span><?php  echo $a["EMAIL"]; ?></span></label>
	 		 <label>Facebook: <span><?php  echo $a["FACEBOOK"]; ?></span></label>
		  </div>
	  </div>
	  <div class="modal-footer">
        <a class="btn btn-primary btnxem" href="<?php echo "all-post.php?MAKH=".$a['MAKH'];?>">Xem trang cá nhân</a>
      </div>
      </div>
   
    </div>
  </div>
</div>

<!-- Form báo cáo -->
<div class="modal fade baocao" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Báo cáo vi phạm</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <label style="color: #1470FF;">Nội dung vi phạm:</label>
      <textarea class="form-control">
	  </textarea>  
	  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Báo cáo ngay</button>
      </div>
      </div>
   
    </div>
  </div>
	</div>	
	
	
	
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
		<!--Progressive Web App(PWA): install, service worker-->
	<script src="./sw-register.js"></script>
</body>
</html>
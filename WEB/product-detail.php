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
	
</head>

<body>
	<?php include('header.php'); ?>
		<?php $a = TaiChiTietSanPham($_GET['MATD']) ?>
		<div class="container" style="margin-top: 6em;">
		<div class="card">
			<div class="container-fluid">
				<div class="wrapper row">	
					<div class="preview col-sm-12  col-md-7 col-lg-6">
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
						
					
								
					</div>
					
					
					<div class="details col-sm-12 col-md-5 col-lg-6 ">
						<ul class="list-group list-group-flush">
						<li id="tieude"><?php  echo $a["TIEUDE"]; ?></li>
						<li class="description"> <span>Loại tin:</span> <?php  echo $a["LOAITD"]; ?>, <span>Tình trạng:</span> <?php  echo $a["TINHTRANGMH"]; ?></li>
						<li class="description" id="price"><i class="far fa-money-bill-alt"></i>  Giá : <?php  echo $a["GIABAN"]; ?> đồng</li>
						<div class="row" style="margin: 5px;" id="buttons">
							<p>
							  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
								Liên hệ
							  </a>
							  <a button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
								Báo cáo
							  </a>
							  <a button type="button" class="btn btn-success">
								Theo dõi tin
							  </a>
							</p>
							<div class="collapse" id="collapseExample">
							  <div class="card card-body">
								<ul class="list-group ">
									<li class="list-group-item" style="width: 100%; color: black;"><span>Số điện thoại:</span> <?php  echo $a["SDT"]; ?></li>
									<li class="list-group-item" style="width: 100%; color: black;"><span>Facebook:</span> <?php  echo $a["FACEBOOK"]; ?></li>
									<li class="list-group-item" style="width: 100%; color: black; "><span>Email:</span> <?php  echo $a["EMAIL"]; ?></li>
								  </ul>
							  </div>
							</div>
						</div>
						<li class="description"><span>Người đăng:</span>  <a href="<?php echo "all-post.php?MAKH=".$a['MAKH'];?>" id="user"><?php  echo $a["HOTEN"]; ?></a></li>
						<li class="description"><span>Địa chỉ:</span> <?php  echo $a["DIACHI"]; ?></li>
						<li class="description" id="method"><span>Phương thức giao dịch:</span> <?php  echo $a["PTGD"]; ?></li>
						<li class="description" id="date"><span>Ngày đăng: <?php  echo $a["NGAYDANG"]; ?></span></li>
							<li class="description detaildes"><span>Mô tả chi tiết:</span></br> <?php  echo $a["TAMSU"]; ?></li>
							
							
							
					  </ul>
						
					</div>
					
					
				</div>
				
			</div>
			</div>
	</div>
	
		<?php include('footer.php'); ?>
		
	


<!-- Form báo cáo -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style="color: #FF0004; font-weight: bold; font-size: 20px;">Báo cáo vi phạm</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <label style="color: #FF7600;">Nội dung vi phạm:</label>
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
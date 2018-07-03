<?php 
	session_start();
	$UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
	$MaKH = (isset($_SESSION['makh']))? $_SESSION['makh'] : '' ;
	$MaCV = (isset($_SESSION['macv']))? $_SESSION['macv'] : '' ; 
	$PageName="chitietsanpham"; 
	include('xulyphp/xulytindang.php');
	include('xulyphp/xulytheodoibaocao.php');
	$c = TaiChiTietSanPham($_GET['MATD']);
	$tt = $c['TINHTRANGTIN'];
	$thtin="";
	if($tt=="dang cho"||$tt=="da an"){
		if(strcmp($MaKH, $c["MAKH"])!=0&&$MaCV==""){
			header("Location: ./index.php");
		}
		$thtin = "(tin không hiển thị)";
	}
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="icon" href="./Images/Home/favicon.png"/>
<title><?php echo $c["TIEUDE"]?></title>
<meta name="description" content="LoveMarket –Sản phẩm của LoveMarket - bán đồ người yêu cũ. Rao bán đồ của người yêu cũ giá tốt nhất. Luôn cập nhật sản phẩm. Ghé thăm LoveMarket để tìm những sản phẩm phù hợp cho người yêu. " />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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

		<div class="container-fluid page" style="margin-top: 4.8em; border: none;">
			<div class="container-fluid">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-4">
						<label id="tieude"><?php  echo $c["TIEUDE"];  ?></label>
						<h6><?php echo $thtin; ?></h6>
						<br>
						<label id="date">Ngày đăng: <span><?php  echo $c["NGAYDANG"]; ?></span></label>	
						<label id="status">Tình trạng: <span><?php  echo $c["TINHTRANGMH"]; ?></span></label>
						</div>
						<div class="col-md-8" style="margin-top: 30px; margin-bottom: 5px;">
							<button class="btn  theodoi" onclick='TheoDoi()'><?php if(KiemTraTheoDoiTinDang($MaKH,$c["MATD"])==1) echo "Bỏ Theo Dõi"; else echo "Theo Dõi"; ?></button>
							<script language="javascript">
								function TheoDoi()
								{
									if('<?php echo $MaKH;?>' == '')
										alert("Bạn phải đăng nhập để theo dõi");
									else
									{
										var info =[];
										info[0] = "<?php echo $MaKH;?>";
										info[1] = "<?php echo $c["MATD"];?>";
										if("<?php echo KiemTraTheoDoiTinDang($MaKH,$c['MATD']);?>" == "0" )
										{
											$.ajax(
											{
												url: "./xulyphp/xulyajax.php",
												data: 
												{
													inputFunction: "theodoitindang",
													info: 			info
												},
												type: "post",
												success: function(output) 
												{
													alert(output);
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
													inputFunction: "botheodoitindang",
													info: 			info
												},
												type: "post",
												success: function(output) 
												{
													alert(output);
												}
											});
										}									
										location.reload();
									}
										
								}
							</script>
							<a class="btn  baocaobtn" data-toggle="modal" data-target="#exampleModal">Báo cáo</a>
							<div class="userinfo" data-toggle="modal" data-target="#contact">
								<img class="imguser" src="<?php echo $c["AVATAR"];?>">
								<label> <?php  echo $c["HOTEN"]; ?> </label>
							</div>
					</div>
				</div>
				
				<div class="container-fluid">
					<div class="row">
						<!-- Hình ảnh -->
					<div class="preview col-sm-12  col-md-4 col-lg-4">
						<div class="preview-pic tab-content">
						<?php  $b =  Chuoi2Mang($c["HINHANH"]); $s=0; 
						
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
									echo "<li class='active'><a data-target='$k' data-toggle='tab'><img src='$value' ></a></li>";
								else
									echo "<li> <a data-target='$k' data-toggle='tab'><img src='$value' ></a></li>";
								$s++;
							}
						
						?>
						</ul>
						
				<div class="card detaildes" style="width: 100%;">
					  <div class="card-header detaildes-header" id="tieudett">
						Thông tin
					  </div>
					  <ul class="list-group list-group-flush">
						  <!-- Giá bán -->
						<!-- chọn sản phẩm giảm giá -->
						<?php if($c["LOAITIN"] == "ribbon-discount") { ?>
						<li class="list-group-item" id="price"><i class="far fa-money-bill-alt"></i>  Giá : <?php  echo $c["GIABAN"]; ?>đ <span id="diproduct"><?php  echo $c['GIACU']; ?>đ</span></li>
						<?php } else { ?>	
						<!-- chọn sản phẩm thông thường -->
						<li class="list-group-item" id="price"><i class="far fa-money-bill-alt"></i>  Giá : <?php  echo $c["GIABAN"]; ?> đ</li>
							<?php } ?>

						<li class="list-group-item" id="typenews"> Loại tin: <span><?php  echo $c["LOAITD"]; ?></span></li>
						  
						<li class="list-group-item" id="method">Phương thức giao dịch: <span><?php  echo $c["PTGD"]; ?></span></li>
					  </ul>
					</div>
						
						
						
					</div>
					
					<div class="details col-sm-12 col-md-8 col-lg-8 ">				
					<div id="slogan" style="overflow-y: auto;">
						<?php  echo $c["SLOGAN"]; ?>
					</div>
						
						<div class="tamsubg">
							<div class="tamsu">
							<textarea class="form-control" disabled>
								<?php  echo $c["TSTD"]; ?>
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
			  <img id="popupimage" src="<?php  echo $c["AVATAR"]; ?>">
		  </div>
		  <div class="col-md-8">
			  <label>Họ tên: <span><?php  echo $c["HOTEN"]; ?></span></label><br>
			  <label>Địa chỉ: <span><?php  echo $c["DIACHI"]; ?></span></label>
			  <label>Điện thoại: <span><?php  echo $c["SDT"]; ?></span></label>
     		<label>Email: <span><?php  echo $c["EMAIL"]; ?></span></label>
	 		  <label>Facebook: <span><?php  echo $c["FACEBOOK"]; ?></span></label>
		  </div>
	  </div>
	  <div class="modal-footer">
        <a class="btn btn-primary btnxem" href="<?php echo "all-post.php?MAKH=".$c['MAKH'];?>">Xem trang cá nhân</a>
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
      <textarea class="form-control" id='baocao'></textarea>  
	  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary" onclick='BaoCao()'>Báo cáo ngay</button>
      </div>
      </div>

		<script language="javascript">
		function BaoCao()
		{
			if('<?php echo $MaKH;?>' == '')
				alert("Bạn phải đăng nhập để Bao Cao");
			else
			{
				var info =[];
				
				info[0] = "<?php echo $c["MAKH"];?>";
				info[1] = "<?php echo $c["MATD"];?>"
				info[2] = document.getElementById("baocao").value;
				
				$.ajax(
				{
					url: "./xulyphp/xulyajax.php",
					data: 
					{
						inputFunction: "baocao",
						info: 			info
					},
					type: "post",
					success: function(output) 
					{
						alert(output);
					}
				});							
				location.reload();
			}						
		}
		</script>
			<script language="javascript">
				// function BaoCao()
				// {
				// 	//alert("Bạn phải đăng nhập để báo cáo");
				// 	if('</?php echo $MaKH;?>' == '')
				// 		alert("Bạn phải đăng nhập để báo cáo");
				// 	else
				// 	{
				// 		alert("p để báo cáo");
				// 		var info =[];
				// 		info[0] = "</?php echo $a["MAKH"]?>;
				// 		info[1] = document.getElementById("baocao").value;
				// 		$.ajax(
				// 		{
				// 			url: "./xulyphp/xulyajax.php",
				// 			data: 
				// 			{
				// 				inputFunction: "baocao",
				// 				info: 			info
				// 			},
				// 			type: "post",
				// 			success: function(output) 
				// 			{
				// 				alert(output);
				// 			}
				// 		});									
				// 		location.reload();
				// 	}		
				// }
			</script>
   
    </div>
  </div>
</div>	
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>

	<!-- SNOW -->
	<script src="js/jquery.snow.min.1.0.js"></script>
	<script>
    $(document).ready( function(){
        $.fn.snow();
		
    });
		$.fn.snow({ minSize: 5, maxSize: 50, newOn: 200, flakeColor: '#FFFFFF' });
    </script>
	<!-- SNOW -->
		<!--Progressive Web App(PWA): install, service worker-->
	<!-- <script src="./sw-register.js"></script> -->

</body>
</html>
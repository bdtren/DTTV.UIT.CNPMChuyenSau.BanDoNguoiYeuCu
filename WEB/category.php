<?php 
	$PageName="danhmuc";
	if(isset($_GET['numpage']))
    {
        $numpage = $_GET['numpage'];
    }
    else
    {
        $numpage = 0;
    }
    
    if(isset($_GET['DanhMuc']))
    {
        $DanhMuc = $_GET['DanhMuc'];
    }
    else
    {
        $DanhMuc = '';
    }
?>

<?php include('xulyphp/xulytindang.php'); ?>

<!doctype html>
<html>
<head>
 <!-- Required meta tags -->
    <!-- <meta charset="utf-8"> -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" href="./Images/Home/favicon.png"/>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style-danh-muc.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<!-- Font -->
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"> 
	
<title>Danh mục sản phẩm</title>

<link rel="manifest" href="./manifest.json"> 

</head>
	
<body>
	
	<?php include('header.php'); ?>

	
	<div class="container-fluid">
		<div class="row main-contain">
			<!-- Sidebar -->
			<div class="col-lg-3 col-sm-12 col-md-3">
				<?php include('./danh-muc/sidebar.php'); ?>
			</div>
			
			<div class="col-lg-9 col-sm-12 col-md-9">
				<div class="card card-main" style="width: 100%; background: #F4F4F4;">
					<div class="card-header card-main-header">
						<div class="container-fluid">
							<div class="row">
								<div class="col-md-6" style="font-weight: bold; font-size: 25px;">Danh sách sản phẩm</div>

								<div class="col-md-2" style="font-size: 20px;">Sắp xếp theo:</div>
								
								<div class="col-md-2">
									  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
										<option selected disabled>Kiểu</option>
										<option value="1">Thời gian</option>
										<option value="2">Giá</option>
										<option value="3">Chữ cái</option>
									  </select>
								</div>
							<div class="col-md-2">						
									  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
										<option selected disabled>Thứ tự</option>
										<option value="1">Tăng dần</option>
										<option value="2">Giảm dần</option>
										<option value="3">Mặc định</option>
									  </select>
								</div>
								
							</div>
						
						</div>
						
						
					</div>
					
					<div class="container-fluid">


					</div>
					
					<ul style="list-style: none; ">
						<?php 	
							$a = TaiSanPhamHot($DanhMuc);
							$i = 0;
							$z = 0;
							if(!empty($a))
							{
								foreach($a as $value)
								{
									switch(Chuoi2Mang($value['LOAITIN'])[0])
									{
										case 'ribbon-new': $cardType = "ribbon-new"; break;
										case 'ribbon-hot': $cardType = "ribbon-hot"; break;
										case 'ribbon-discount': $cardType = "ribbon-discount"; break;
									}
									include('./danh-muc/product.php');
									$i++;
									$z++;
								}
							}
							
							$cardType = "";
							$i = 0;	
							$a = TaiSanPhamThuong($numpage,$DanhMuc);
							while($i<6) 
							{ 
								if(!empty($a[$i]))
						 			include('./danh-muc/product.php');
								$i++; 
								$z++;
							} 
						?>

					</ul>
				</div>
				<?php include('./danh-muc/numpage.php'); ?>	
			</div>
			
		</div>
	</div>
	

	<?php include('footer.php');?>

	
	
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	
	<!--Progressive Web App(PWA): install, service worker-->
	<!-- <script src="./sw-register.js"></script> -->
</body>
</html>
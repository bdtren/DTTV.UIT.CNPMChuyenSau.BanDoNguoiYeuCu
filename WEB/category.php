<?php 
	session_start();
	$UserName 	=	(isset($_SESSION['user']))? $_SESSION['user'] : '' ;
	$Type 		=	(isset($_GET['Type']))? $_GET['Type'] : '' ;
	$numpage	=	(isset($_GET['numpage']))? $_GET['numpage'] : 1 ;
	$Search		=	(isset($_GET['Search']))? $_GET['Search'] : '' ;
	$DanhMuc	=	(isset($_GET['DanhMuc']))? $_GET['DanhMuc'] : 'DM0000' ;
	$Sort		=	(isset($_GET['Sort']))? $_GET['Sort'] : 'NGAYDANG' ;
	$SortType	=	(isset($_GET['SortType']))? $_GET['SortType'] : 'ASC' ;
	$PageName	=	"danhmuc";

	include('xulyphp/xulytindang.php');	
?>
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
	
<title><?php if($DanhMuc!="DM0000"&&$DanhMuc!=""&&$DanhMuc!=null) echo layTenDanhMuc($DanhMuc)." - ";
	 else if($Search!='') echo "Kết quả tìm kiếm: ".$Search." - ";?> Danh mục sản phẩm</title>

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
							<?php 
								if(empty($Search))
									echo "<div class='col-md-6 text-head'>Danh sách sản phẩm</div>";
								else
								{
									echo "<div class='col-md-6 text-head'>";
									echo 'Kết quả tìm kiếm: '.$Search;
									echo "</div>";
								}							
							?>

							<div class="col-md-2">
									  <select class="custom-select mr-sm-2 text-chose" id="TypeSelect" onchange="TypeChanged(this)">
										<option value="" <?php if($Type == "") echo "selected";?> > Mua-Bán</option>
										<option value="Mua" <?php if($Type == "Mua") echo "selected";?> > Mua</option>
										<option value="Bán" <?php if($Type == "Bán") echo "selected";?> > Bán</option>
									  </select>
							</div>
							
							<div class="col-md-2 text-head">
									<select class="custom-select mr-sm-2 text-chose" id="SortSelect" onchange="SortChanged(this)">
										<option value="NGAYDANG" <?php if($Sort == "NGAYDANG") echo "selected";?>>Thời gian</option>
										<option value="GIABAN" <?php if($Sort == "GIABAN") echo "selected";?>>Giá</option>
										<option value="TIEUDE" <?php if($Sort == "TIEUDE") echo "selected";?>>Chữ cái</option>
									  </select>
							</div>
							
							<div class="col-md-2">						
									  <select class="custom-select mr-sm-2 text-chose" id="SortTypeSelect" onchange="SortTypeChanged(this)">
										<option value="ASC" <?php if($SortType == "ASC") echo "selected";?> >Tăng dần</option>
										<option value="DESC" <?php if($SortType == "DESC") echo "selected";?> >Giảm dần</option>
									  </select>
						    </div>

								<script language="javascript">

									function TypeChanged(TypeSelect)
									{
										var q = '<?php echo $Search ?>';
										if( q == '')
											location.href = 'category.php?Type='+TypeSelect.value+'&DanhMuc='+'<?php  echo $DanhMuc; ?>'+'&Sort='+SortSelect.value+'&SortType='+SortTypeSelect.value;	
										else
											location.href = 'category.php?Search='+'<?php  echo $Search; ?>'+'&Type='+TypeSelect.value+'&Sort='+SortSelect.value+'&SortType='+SortTypeSelect.value;
									}

									function SortChanged(SortSelect)
									{
										var q = '<?php echo $Search ?>';
										if( q == '')
											location.href = 'category.php?DanhMuc='+'<?php  echo $DanhMuc; ?>'+'&Sort='+SortSelect.value+'&SortType='+SortTypeSelect.value+'&Type='+TypeSelect.value;	
										else
											location.href = 'category.php?Search='+'<?php  echo $Search; ?>'+'&Sort='+SortSelect.value+'&SortType='+SortTypeSelect.value+'&Type='+TypeSelect.value;
									}
									function SortTypeChanged(SortTypeSelect)
									{
										var p = '<?php echo $Search ?>';
										if( p == '')
											location.href = 'category.php?DanhMuc='+'<?php  echo $DanhMuc; ?>'+'&Sort='+SortSelect.value+'&SortType='+SortTypeSelect.value+'&Type='+TypeSelect.value;
										else
											location.href = 'category.php?Search='+'<?php  echo $Search; ?>'+'&Sort='+SortSelect.value+'&SortType='+SortTypeSelect.value+'&Type='+TypeSelect.value;
									}

								</script>						
							</div>
						
						</div>
						
						
					</div>
					
					<div class="container-fluid">


					</div>
					
					<ul style="list-style: none; ">
						<?php 
							if(empty($Search))
							{	
								$a = TaiSanPhamHot($DanhMuc, $Type);
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
								$a = TaiSanPhamThuong($numpage*6-6, $Type, $DanhMuc ,$Sort, $SortType);
								while($i<6) 
								{ 
									if(!empty($a[$i]))
										include('./danh-muc/product.php');
									$i++; 
									$z++;
								} 
							}
							else
							{
								$a = TimKiemSanPham($numpage*9-9, $Type, $Search, $Sort, $SortType);
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
											default : $cardType = '';
										}
										include('./danh-muc/product.php');
										$i++;
										$z++;
									}
								}
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
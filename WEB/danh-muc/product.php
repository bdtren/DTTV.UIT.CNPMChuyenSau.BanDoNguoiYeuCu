<?php
	// Code tạm thời để chọn ra loại thẻ
	$cImg = "";
	$cBorder = "";
		switch($cardType){
			case "ribbon-new":
				$cImg = "<img src='./Images/san-pham/new.png' alt='New' height='25px' width='80px'>";
				$cBorder = "border-image-source:url(./Images/san-pham/newb.jpg); border-image-slice: 10";
				break;
			case "ribbon-hot":
				$cImg = "<img src='./Images/san-pham/hot.png' alt='Hot'height='25px' width='100px'>";
				$cBorder = "border-image-source:url(./Images/san-pham/hotb.jpg); border-image-slice: 24";
				break;
			case "ribbon-discount":
				$cImg = "<img src='./Images/san-pham/discount.png' alt='Discount' height='25px' width='72px'>";
				$cBorder = "border-image-source:url(./Images/san-pham/discountb.jpg); border-image-slice: 10";
				break;
			default:
			break;
		}
	?>

<!-- Từng sản phẩm -->
<li class="product">
	<a href="<?php echo "product-detail.php?MATD=".$a[$i]['MATD']; ?>" style="text-decoration: none;">
	<div class="card card-product" style="<?php echo $cBorder?>;">
		<?php 
			echo "<div class=\"corner-ribbon shadow ".$cardType."\">\n
			<!-- thẻ thông tin -->".$cImg."\n
		</div>\n";
		?>
		<img class="card-img-top" src="<?php echo Chuoi2Mang($a[$i]['HINHANH'])[0] ?>" alt="Card image cap" style="width: 230px; height: 230px;  background-size:contain;">
		<div class="card-body">
			<h5 class="card-title"><i class="fa fa-diamond"></i>  <?php echo $a[$i]['TIEUDE'] ?> </h5>
			<ul class="list-group list-group-flush">
				<!-- Giảm giá -->
				<?php if($cardType=="ribbon-discount")
				{	
					$giaban = Chuoi2Mang($a[$i]['GIABAN']);
				?>
				<li class="list-group-item price"><i class="fa fa-money"></i> <span id="pricediscount">  <?php echo $giaban[0];?>đ </span> <span id="priceorginal"><?php echo $giaban[1] ?>đ</span>
				</li>
				<?php
				 		}
			 		else
			 			{ 
					?>
				<li class="list-group-item price"><i class="fa fa-money"></i><span style="color: red;">  <?php echo $a[$i]['GIABAN'] ?>đ</span>
				</li>
				<?php }?>	
				<!--Kết thúc Giảm giá -->	
				<li class="list-group-item user-name" id="person"><i class="fa fa-user-circle"></i>
				<a href="<?php echo 'all-post.php?MAKH='.$a[$i]['MAKH'] ?>">  <?php echo $a[$i]['HOTEN'] ?></a> <!-- Link đến trang các bài post cùa người dùng -->
					<span style="float: right; font-weight: bold;">
				</li>
			</ul>

		</div>

		<!--Xem thêm thông tin -->
		<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#down<?php echo $z ?>">Xem thêm</button>
		<div id="down<?php echo $z ?>" class="collapse">
			<ul class="list-group list-group-flush">
			<li class="list-group-item type-info">
			  <p style="font-size: 16px; color:black;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>  <?php echo $a[$i]['TSTD'] ?></p></li>
				<li class="list-group-item type-info"><i class="fa fa-shopping-bag"></i>  <?php echo $a[$i]['LOAITD'] ?>
				</li>
			</ul>
			<div class="card-body">
				<a href="<?php echo "product-detail.php?MATD=".$a[$i]['MATD']; ?>" class="card-link"><i class="fa fa-plus-square"></i> Xem chi tiết</a>
			</div>
			<!-- footer card -->
			<div class="card-footer">
				<small class="text-muted"><i class="fa fa-calendar"></i>  <?php echo $a[$i]['NGAYDANG'] ?>
				</small>
			</div>
		</div>
	</div>
	</a>
		</li> <!-- Kết thúc sản phẩm -->
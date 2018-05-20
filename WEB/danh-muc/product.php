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
	<div class="card card-product" style="border: 10px solid transparent; padding: 15px; <?php echo $cBorder?>; width: 18rem;float: left; margin-right: 25px; margin-top: 20px;">
		<?php 
			echo "<div class=\"corner-ribbon shadow ".$cardType."\">\n
			<!-- thẻ thông tin -->".$cImg."\n
		</div>\n";
		?>
		<img class="card-img-top" src="<?php echo $a[$i]['HINHANH'] ?>" alt="Card image cap" style="width: 230px; height: 230px; background-size: cover; background-position: center;">
		<div class="card-body">
			<h5 class="card-title"><i class="fa fa-diamond"></i><?php echo $a[$i]['TIEUDE'] ?> </h5>
			<ul class="list-group list-group-flush">
				<li class="list-group-item price"><i class="fa fa-money"></i><?php echo $a[$i]['GIABAN'] ?>Đ
					<span style="float: right; font-weight: bold;">
				</li>
				<li class="list-group-item user-name"><i class="fa fa-user-circle"></i>
					<a href="all-post.php" style="text-decoration: none;"><?php echo $a[$i]['HOTEN'] ?></a> <!-- Link đến trang các bài post cùa người dùng -->
					<span style="float: right; font-weight: bold;">
				</li>
			</ul>

		</div>

		<!--Xem thêm thông tin -->
		<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#down<?php echo $i ?>">Xem thêm</button>
		<div id="down<?php echo $i ?>" class="collapse">
			<ul class="list-group list-group-flush">
			<li class="list-group-item type-info">
					<p class="card-text"><?php echo $a[$i]['TAMSU'] ?></p>
				</li>
				<li class="list-group-item type-info"><i class="fa fa-shopping-bag"></i><?php echo $a[$i]['LOAITD'] ?>
				</li>
			</ul>
			<div class="card-body">
				<a href="<?php echo "product-detail.php?MATD=".$a[$i]['MATD']; ?>" class="card-link"><i class="fa fa-plus-square"></i> Xem chi tiết</a>
			</div>
			<!-- footer card -->
			<div class="card-footer">
				<small class="text-muted"><i class="fa fa-calendar"></i><?php echo $a[$i]['NGAYDANG'] ?>
				</small>
			</div>
		</div>
	</div>
</li <!-- Kết thúc sản phẩm -->
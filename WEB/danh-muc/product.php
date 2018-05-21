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
		<img class="card-img-top" src="Images/san-pham/demo.jpg" alt="Card image cap" style="width: 230px; height: 230px; display: block; margin: auto;">
		<div class="card-body">
			<h5 class="card-title"><i class="fa fa-diamond"></i><?php echo $a[$i]['tieude'] ?> </h5>
			<ul class="list-group list-group-flush">
				<li class="list-group-item price"><i class="fa fa-money"></i><?php echo $a[$i]['gia'] ?> VND
					<span style="float: right; font-weight: bold;">
				</li>
				<li class="list-group-item user-name"><i class="fa fa-user-circle"></i><?php echo $a[$i]['ten'] ?>
					<span style="float: right; font-weight: bold;">
				</li>
			</ul>

		</div>

		<!--Xem thêm thông tin -->
		<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#down<?php echo $i ?>">Xem thêm</button>
		<div id="down<?php echo $i ?>" class="collapse">
			<ul class="list-group list-group-flush">
			<li class="list-group-item type-info">
					<p class="card-text">Nội dung tin đăng</p>
				</li>
				<li class="list-group-item type-info"><i class="fa fa-shopping-bag"></i><?php echo $a[$i]['loai'] ?>
				</li>
			</ul>
			<div class="card-body">
				<a href="product-detail.php?id=blabla" class="card-link"><i class="fa fa-plus-square"></i> Xem chi tiết</a>
			</div>
			<!-- footer card -->
			<div class="card-footer">
				<small class="text-muted"><i class="fa fa-calendar"></i><?php echo $a[$i]['ngay'] ?>
				</small>
			</div>
		</div>
	</div>
</li <!-- Kết thúc sản phẩm -->
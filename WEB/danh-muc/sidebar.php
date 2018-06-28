<?php $actBar="";
	$show = array();
	$show[0] = $show[1] = $show[2] = "";
	$a= TaiDanhMuc();
	$j=0;
	while($j<count($a)){
		if($DanhMuc==$a[$j]['MADM'])
			break;
		$j++;
	}
	if($j<13){
		$show[0] ="show";
		$show[1] = $show[2] = "";
	} else if($j<24){
		$show[0] = $show[2] = "";
		$show[1]="show";
	} else{
		$show[0] = $show[1] = "";
		$show[2]="show";
	}
?>
<div class="card" style="width: 100%;">
					  <div class="card-header">
						Danh mục sản phẩm
					  </div>
					  
					<!-- Collapse Menu -->
					  <div class="accordion" id="accordionExample">
						  <!-- Danh mục chính -->
						  <div class="card card-sidebar">
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Ngành hàng
								</button>
							  </h5>
							</div>

							  <!-- Danh mục con -->
							<div id="collapseOne" class="collapse <?php echo $show[0]?>" aria-labelledby="headingOne" data-parent="#accordionExample">
								  <div class="card" style="width: 100%;">
									  <ul class="list-group list-group-flush">
										<?php $i=0; while($i<13) { 
											if($DanhMuc==$a[$i]['MADM']){
												$actBar = "active";
											} else{
												$actBar = "";
											}
											?>								
										<a class="itemdanhmuc" href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>" style="text-decoration: none;"><li class="list-group-item <?php echo $actBar?>"><i class="fa fa-shopping-bag" aria-hidden="true"></i><?php echo str_repeat("&nbsp;", 4).$a[$i]['TENDM'] ?></li></a>
										<?php $i++;	} ?>
									  </ul>
									</div>
							</div>  
						  </div>
	
						  
						    <!-- Danh mục chính -->
						  <div class="card card-sidebar">
							<div class="card-header" id="headingTwo">
							 <h5 class="mb-0">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-controls="collapseTwo" style="text-align: center;">
								Mốc kỉ niệm
								</button>
								  </h5>
							</div>

							  <!-- Danh mục con -->
							<div id="collapseTwo" class="collapse <?php echo $show[1]?>" aria-labelledby="headingTwo" data-parent="#accordionExample">
								  <div class="card" style="width: 100%;">
									  <ul class="list-group list-group-flush">
										<?php while($i<24) { 
											if($DanhMuc==$a[$i]['MADM']){
												$actBar = "active";
											} else{
												$actBar = "";
											}
										?>								
										<a class="itemdanhmuc" href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>" style="text-decoration: none;"><li class="list-group-item <?php echo $actBar?>"><i class="fa fa-calendar-check-o"></i><?php echo str_repeat("&nbsp;", 4).$a[$i]['TENDM'] ?></li></a>
										<?php $i++;	} ?>
									  </ul>
									</div>
							</div>  
						  </div>
					
						   <!-- Danh mục chính -->
						  <div class="card card-sidebar">
							<div class="card-header" id="headingThree">
							  <h5 class="mb-0">
								<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
								Quà tinh thần
								</button>
							  </h5>
							</div>

							  <!-- Danh mục con -->
							<div id="collapseThree" class="collapse <?php echo $show[2]?>" aria-labelledby="headingThree" data-parent="#accordionExample">
								  <div class="card" style="width: 100%;">
									  <ul class="list-group list-group-flush">
										<?php while($i<28) { 
											if($DanhMuc==$a[$i]['MADM']){
												$actBar = "active";
											} else{
												$actBar = "";
											}	
										?>								
										<a class="itemdanhmuc" href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>" style="text-decoration: none;"><li class="list-group-item <?php echo $actBar?>"><i class="fa fa-gift" aria-hidden="true"></i>  <?php echo str_repeat("&nbsp;", 4).$a[$i]['TENDM'] ?></li></a>
										<?php $i++;	} ?>
									  </ul>
									</div>
							</div>  
						  </div>
						  
						  
						  
					</div>
			</div>
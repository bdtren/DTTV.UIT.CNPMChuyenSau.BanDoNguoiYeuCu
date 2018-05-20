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
								 <i class="fa fa-star"></i>  Ngành hàng
								</button>
							  </h5>
							</div>

							  <!-- Danh mục con -->
							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
								  <div class="card" style="width: 100%;">
									  <ul class="list-group list-group-flush">
										<?php $i=0; $a= loadDanhMuc(); while($i<13) { ?>								
										<li class="list-group-item"><a href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>"><i class="fa fa-calendar-check-o"></i><?php echo $a[$i]['TENDM'] ?></a></li>
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
								<i class="fa fa-calendar-check-o"></i> Mốc kỉ niệm
								</button>
								  </h5>
							</div>

							  <!-- Danh mục con -->
							<div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
								  <div class="card" style="width: 100%;">
									  <ul class="list-group list-group-flush">
										<?php while($i<24) { ?>								
										<li class="list-group-item"><a href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>"><i class="fa fa-calendar-check-o"></i><?php echo $a[$i]['TENDM'] ?></a></li>
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
								 <i class="fa fa-universal-access"></i> Quà tinh thần
								</button>
							  </h5>
							</div>

							  <!-- Danh mục con -->
							<div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
								  <div class="card" style="width: 100%;">
									  <ul class="list-group list-group-flush">
										<?php while($i<28) { ?>								
										<li class="list-group-item"><a href="category.php?DanhMuc=<?php echo $a[$i]['MADM'] ?>"><i class="fa fa-calendar-check-o"></i><?php echo $a[$i]['TENDM'] ?></a></li>
										<?php $i++;	} ?>
									  </ul>
									</div>
							</div>  
						  </div>
						  
						  
						  
					</div>
			</div>
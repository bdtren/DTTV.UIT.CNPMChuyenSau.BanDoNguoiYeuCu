	<div class="card card-main" style="width: 100%; background: #F4F4F4;">
					  <div class="card-header card-main-header">
						Sản phẩm
					  </div>
					  	
						
						<ul style="list-style: none;">
							<!-- Từng sản phẩm -->
							<?php 
								$i=0;
								while($i<6) { ?>
							<li>
							<div class="card card-product" style="width: 15rem; border: 1px solid #CDCBCB; float: left; margin-right: 60px; margin-top: 20px;">
							  <img class="card-img-top" src="Images/san-pham/demo.jpg" alt="Card image cap" style="width: 230px; height: 230px; display: block; margin: auto;">
							  <div class="card-body">
								<h5 class="card-title"><i class="fa fa-diamond"></i> Nhẫn đôi</h5>
								<ul  class="list-group list-group-flush">
									<li class="list-group-item price"><i class="fa fa-money"></i> 10000đ <span style="float: right; font-weight: bold;"></li>
									<li class="list-group-item type-info"><p class="card-text">Nội dung tin đăng</p></li>
							  	</ul>
									 
							  </div>
								
								<!--Xem thêm thông tin -->			
							 <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#down<?php echo $i ?>">Xem thêm</button>
								<div id="down<?php echo $i ?>" class="collapse">
								  <ul class="list-group list-group-flush">
									<li class="list-group-item user-name"><i class="fa fa-user-circle"></i> Nguyễn Văn ABC <span style="float: right; font-weight: bold;"></li>
									<li class="list-group-item type-info"><i class="fa fa-shopping-bag"></i> Cần bán</li>
							  		</ul>
								 	<div class="card-body">
										<a href="#" class="card-link"><i class="fa fa-plus-square"></i>  Xem chi tiết</a>
									</div>
										<!-- footer card -->
									<div class="card-footer">
									  	<small class="text-muted"><i class="fa fa-calendar"></i> 12/12/2017</small>
									</div>
								</div> 
							</div>
						</li>
							<?php $i++; } ?>
							<!-- Kết thúc sản phẩm -->
						
						
							
					</ul>
					</div>
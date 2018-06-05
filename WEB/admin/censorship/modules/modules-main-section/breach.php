<div class="card" style="height: 35em;">
	<h5 class="card-header main-color-bg">Xử lí vi phạm</h5>
	<div class="card-body" style="overflow-y:auto;">
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">STT</th>
					<th scope="col">Tiêu đề</th>
					<th scope="col">Người đăng</th>
					<th scope="col">Ngày đăng</th>
					<th scope="col">Quản lý</th>
				</tr>
			</thead>
			<tbody>
				<!-- Dòng dữ liệu -->
				<?php 
												$a=layDanhSachBaoCaoVP();
												$i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<count($a)){ 
				?>
				<tr>
					<th scope="row"><?echo ($i+1) ?></th>
					<td><?php echo $a[$i]['TIEUDE']?></td>
					<td><a href="../../all-post.php?MAKH=<?php echo $a[$i]['VANDEGIAIDAP']; ?>"><?php echo $a[$i]['HOTEN']; ?></a></td>
					<td><?php echo date("d-m-Y", strtotime($a[$i]['NGAYDANG'])); ?></td>
					<td>
						<a class="btn btn-primary" data-toggle="modal" href="#" style="color:white;" data-target="#breach">Xử lí</a>
					</td>
				</tr>
				<!-- Kết thúc dòng dữ liệu -->
				<!-- Kết thúc dòng dữ liệu -->
				<?php
													$i++;
												} 
				?>

				<!-- Xử lý lưu tất cả dữ liệu lấy được từ các bảng qua file php -->
				<script type="text/javascript">
					var arrTable = <?php echo json_encode($a); ?>;
				</script>
			</tbody>
		</table>
	</div>
</div>

<!-- Modal -->
<!-- Form xử lí vi phạm -->
<div class="modal fade" id="breach" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Xử lý vi phạm</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body">
					<div class="accordion" id="accordionExample">
						<div class="card">
							<div class="card-header" id="headingOne">
								<h5 class="mb-0">
									<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
									 style="text-decoration: none;">
										Xem nội dung báo cáo
									</button>
								</h5>
							</div>

							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
								<div class="card-body">
									<form>
										<div class="form-group">
											<label>Người báo cáo: </label>
										</div>
										<div class="form-group">
											<label>Nội dung báo cáo: </label>
										</div>
										<textarea class="form-control" rows="4" disabled style="resize: none">Nội dung báo cáo</textarea>
									</form>
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header" id="headingTwo">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
									 aria-controls="collapseTwo" style="text-decoration: none;">
										Xem tin đăng
									</button>
								</h5>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
								<div class="card-body">
									<!-- Form tin đăng -->
									<form>
										<div class="form-group">
											<label>Tiêu đề tin:</label>
										</div>

										<div class="form-group">
											<label>Người đăng:</label>
										</div>

										<div class="form-group">
											<label style="font-weight: bold;">Thanh toán phí tạo tin:</label>
											<!-- Thanh toán phí tạo tin đặc biệt -->
										</div>

										<div class="form-group">
											<label>Loại tin: Cần bán hoặc mua </label>
										</div>

										<div class="form-group">
											<label>Danh mục tin: </label>
										</div>

										<div class="form-group">
											<label>Giá bán(mua):</label>
										</div>

										<div class="form-group">
											<label>Tình trạng sản phẩm:</label>
										</div>

										<div class="form-group">
											<label>Hình ảnh sản phẩm</label>
											</br>
											<?php 
									$i=0; $num=2; //Số ảnh 
									while($i<$num){ 
								?>
											<img src="../../Images/san-pham/tindang13.png" alt="hinhanh" style="width: 100px; height: 100px; border: 1px solid #767575;">
											<?php
										$i++ ;
									}
								?>
										</div>

										<div class="form-group">
											<label>Mô tả chi tiết</label>
											<textarea disabled class="form-control" rows="4" style="resize: none;"></textarea>
										</div>

										<div class="form-group">
											<label>Phương thức giao dịch</label>
										</div>
									</form>


								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="form-group" style="padding: 15px;">
					<label>Nội dung xử lí</label>
					<textarea class="form-control" rows="4" style="resize: none;"></textarea>
				</div>



				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal" name="thoat">Thoát</button>
					<button type="button" class="btn btn-danger" name="huytaotin">Hủy xử lý</button>
					<button type="button" class="btn btn-primary" name="chapnhantaotin">Xử lý tin đăng</button>
				</div>
			</form>
		</div>
	</div>
</div>


<script src="../../js/script.admin.js"></script>
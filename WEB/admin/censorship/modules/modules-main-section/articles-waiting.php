<!-- Website Overview-->
<div class="card" style="height: 35em;">
	<h5 class="card-header main-color-bg">Bài đăng chờ duyệt</h5>
	<div class="card-body" style="overflow-y: auto;">
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">STT</th>
					<th scope="col">Tiêu đề</th>
					<th scope="col">Người đăng</th>
					<th scope="col">Ngày đăng</th>
					<th scope="col">Quản lí</th>
				</tr>
			</thead>
			<tbody>
				<!-- Dòng dữ liệu -->
				<?php 
												$a=layTinDangChoDuyet();
												$i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<count($a)){ 
				?>
				<tr>
					<th scope="row">
						<?php echo $i; ?>
					</th>
					<td><?php echo $a[$i]['TIEUDE']?></td>
					<td><a href="../../all-post.php?MAKH=<?php echo $a[$i]['MAKH']; ?>"><?php echo $a[$i]['HOTEN']; ?></a></td>
					<td><?php echo date("d-m-Y", strtotime($a[$i]['NGAYDANG'])); ?></td>
					<td>
						<a class="btn btn-primary" data-toggle="modal" href="#" style="color:white;" data-target="#arwaiting" onclick="openModelDuyetTinDang(<?php echo $i?>)">Duyệt tin</a>
					</td>
				</tr>
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
<!-- Bài đăng cần duyệt -->
<div class="modal fade" id="arwaiting" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Tiêu đề tin</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body">
					<!-- Form  -->
					<form>
						<div class="form-group">
							<label>Loại tin: Cần bán hoặc mua </label>
						</div>

						<div class="form-group">
							<label>Người đăng: </label>
						</div>

						<div class="form-group">
							<label>Thời gian: </label>
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
							<img src="../../Images/san-pham/tindang7.png" alt="hinhanh" style="width: 100px; height: 100px; border: 1px solid #767575;">
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

						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
							<button type="button" class="btn btn-danger">Hủy đăng tin</button>
							<button type="button" class="btn btn-primary">Chấp nhận đăng tin</button>
						</div>

					</form>
				</div>

			</form>
		</div>
	</div>
</div>


<script src="../../js/script.admin.js"></script>
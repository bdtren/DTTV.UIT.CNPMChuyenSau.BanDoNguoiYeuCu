<!-- Website Overview-->
<div class="card" style="height: 35em;">
	<h5 class="card-header main-color-bg">Duyệt tin đặc biệt</h5>
	<div class="card-body" style="overflow-y: auto;">
		<table id="content-table" class="table table-striped">
			<thead>
				<tr>
					<th scope="col">STT</th>
					<th scope="col">Tiêu đề</th>
					<th scope="col">Hình ảnh</th>
					<th scope="col">Người đăng</th>
					<th scope="col">Quản lí</th>
				</tr>
			</thead>
			<tbody>
				<!-- Dòng dữ liệu -->
				<?php 
												$a=layTinDangChoDB();
												$i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<count($a)){ 
													$imgs = explode(';',$a[$i]['HINHANH']);
													
				?>
				<tr>
					<th scope="row">
						<?php echo ($i+1); ?>
					</th>
					<td><?php echo $a[$i]['TIEUDE']?></td>
					<td>
						<!-- <h6 style="visibility: hidden;"><?php echo $imgs[0]?></h6> -->
						
						<?php 
							// for($j=0;$j<count($imgs);$j++){
							echo '<a href="../../'.$imgs[0].'" ><img src="../../'.$imgs[0].'" style="width: 50px; height: 50px;"></a>';
							// }
						?>
					</td>
					<td><a href="../../all-post.php?MAKH=<?php echo $a[$i]['MAKH']; ?>"><?php echo $a[$i]['HOTEN']; ?></a></td>
					<td>
						<a class="btn btn-primary" data-toggle="modal" href="#" style="color:white;" data-target="#seespecial" onclick="openModelDuyetTinDB(<?php echo $i?>)">Duyệt tin</a>
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
<!-- Bài đăng đặc biệt cần duyệt -->
<div class="modal fade" id="seespecial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle" style="color: red; font-weight: bold;">Yêu cầu tạo tin: <span id="htitle"></span> </h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body">
					<!-- Form  -->
					<form>
						<div class="form-group">
							<label>Tiêu đề tin: </label>
							<label id="lbTitle"></label>
						</div>

						<div class="form-group">
							<span>
								<label>Người đăng: </label>
								<label id="lbName"></label>
							</span>
							&nbsp;&emsp;
							<span>
								<label>Ngày đăng: </label>
								<label id="lbDate"></label>
							</span>
						</div>
						
						<div class="form-group">
							<label style="font-weight: bold;">Thanh toán phí tạo tin: </label>
							<!-- Thanh toán phí tạo tin đặc biệt -->
							<label id="lbPayResult"></label>
						</div>

						<div class="form-group">
							<label>Loại tin: </label>
							<label id="lbPostType"></label>
						</div>

						<div class="form-group">
							<span>
								<label>Danh mục tin: </label>
								<label id="lbGroup"></label>
							</span>
							&nbsp;&emsp;
							<span>
								<label>Giá: </label>
								<label id="lbCost"></label>
							</span>
							
						</div>

						<div class="form-group">
							<label>Tình trạng sản phẩm: </label>
							<label id="lbState"></label>
						</div>

						<div class="form-group">
							<label>Hình ảnh sản phẩm</label>
							<label id="lbImage"></label>
							
						</div>

						<div class="form-group">
							<label>Mô tả chi tiết:</label>
							<textarea id="taDetail" disabled class="form-control" rows="4" style="resize: none;"></textarea>
						</div>

						<div class="form-group">
							<label>Phương thức giao dịch: </label>
							<label id="lbDeal"></label>
						</div>

						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal" name="thoat">Thoát</button>
							<button type="button" class="btn btn-danger" name="huytaotin">Hủy tạo tin</button>
							<button type="button" class="btn btn-primary" name="chapnhantaotin">Chấp nhận tạo tin</button>
						</div>

					</form>
				</div>

			</form>
		</div>
	</div>
</div>

<script src="../../js/script.admin.js"></script>
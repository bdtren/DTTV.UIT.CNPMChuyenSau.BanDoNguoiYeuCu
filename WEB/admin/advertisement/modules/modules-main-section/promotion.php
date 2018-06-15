<div class="card" style="height: 35em;">
	<h5 class="card-header" id="checkcard">Khuyến mãi
		<span style="float: right;">
			<a class="btn btn-primary" data-toggle="modal" href="#" data-target="#create">Tạo khuyến mãi</a>
		</span>
	</h5>


	<div class="card-body" style="overflow-y: auto;">
		<table id="content-table" class="table table-striped">
			<thead>
				<tr>
					<th scope="col">STT</th>
					<th scope="col">Tiêu đề</th>
					<th scope="col">Thời hạn</th>
					<th scope="col">Nội dung</th>
					<th scope="col">Quản lí</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<!-- Dòng dữ liệu -->
				<?php 
												$a=layDanhSachKhuyenMai();
												$i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<count($a)){ 
												?>
				<tr>
					<th scope="row">
						<?php echo ($i+1); ?>
					</th>
					<td>	<?php echo $a[$i]["TIEUDE"];?> </td>
					<td>Từ:<?php $cdate = new DateTime($a[$i]['NGAYBD']);echo $cdate->format('d/m/Y');?> đến <?php $cdate = new DateTime($a[$i]['NGAYKT']);echo $cdate->format('d/m/Y');?></td>
					<td><?php echo (strlen($a[$i]["CHITIET"])<=30? $a[$i]["CHITIET"]: substr($a[$i]["CHITIET"],0,30)."...");?></td>
					<td>
						<a class="btn adverbtnsee" data-toggle="modal" href="#" data-target="#see" style="background-color: #C630FF;color: white;" onclick="openModelChiTietQC(<?php echo $i?>)">Xem</a>
					</td>
					<td>
						<a class="btn" style="background-color: #B100F4;
												color: white;" onclick="deleteQuangCao(<?php echo $i?>)">Xóa</a>
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
<!-- Xem khuyến mãi -->
<div class="modal fade" id="see" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle" id="prTitle">Xem thông tin khuyến mãi</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body">
					<!-- Form  -->
					<form>
						<div class="form-group">
							<label>Nhân viên đăng: </label>
							<label id="lbName"></label>
						</div>

						<div class="form-group">
							<label>Thời gian: </label>
							<label id="lbTime"></label>
						</div>

						<div class="form-group">
							<div id="lbImage"></div>
						</div>

						<div class="form-group">
							<label>Nội dung: </label>
							<textarea id="taContent" class="form-control" rows="3" style="resize: none;" disabled></textarea>
						</div>


						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
						</div>

					</form>
				</div>

			</form>
		</div>
	</div>
</div>

<!-- Modal -->
<!-- Tạo khuyến mãi -->
<div class="modal fade" id="create" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Tạo một khuyến mãi</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body">
					<!-- Form  -->
					<form method="post" enctype="multipart/form-data" action="">
						<div class="form-group">
							<label>Tiêu đề: </label>
							<input id ="ipTitle"type="text" class="form-control" placeholder="Nhập tiêu đề khuyến mãi...">
						</div>

						<div class="form-group">
							<label>Thời gian: </label>
							<input id="ipStartday" type="date" name="bday"> -
							<input id="ipEndday" type="date" name="bday">
						</div>
						<div class="form-group">
							<label>Ảnh minh họa: </label>
							<input id="ipPromotionImage" type="file" name="anhQuangCao" accept="image/*" accept-charset="UTF-8" multiple onchange="themAnhQc(this)"> 
							<br>
							<span id="uploaded-image"></span>
						</div>

						<div class="form-group">
							<label>Nội dung: </label>
							<textarea id="ipContent" class="form-control" rows="4" style="resize: none;"></textarea>
						</div>


						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
							<button type="button" class="btn btn-primary" onclick="addKhuyenMai()">Tạo</button>
						</div>
            <div id="addition-result" class="modal-footer"></div>

					</form>

				</div>
			</form>
		</div>
	</div>
</div>

<script src="../../js/script.admin.js"></script>
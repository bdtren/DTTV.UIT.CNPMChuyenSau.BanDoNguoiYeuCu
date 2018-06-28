<div class="card" style="height: 35em;">
	<h5 class="card-header mainheader">Câu hỏi của người dùng</h5>
	<div class="card-body" style="overflow-y: auto;">
		<table id="content-table" class="table table-striped">
			<thead>
				<tr>
					<th scope="col">STT</th>
					<th scope="col">Nội dung câu hỏi</th>
					<th scope="col">Loại vấn đề</th>
					<th scope="col">Người đăng</th>
					<th scope="col">Quản lí</th>
				</tr>
			</thead>
			<tbody>
				<!-- Dòng dữ liệu -->
				<?php 
												$a = layCauHoiChiTiet();
												$i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												$b=array("");
												while($i<count($a)){
													if($a[$i]['TRALOI']==""){
														$b[$i]="";
													} else{
														$b[$i]='(Đã trả lời)';
													}
				?>
				<tr>
					<th scope="row">
						<?php echo ($i+1); ?>
					</th>
					<td><?php echo $a[$i]['CHITIET']; ?> </td>
					<td><?php echo $a[$i]['VANDEGIAIDAP']; ?> </td>
					<td><a target="_blank" href="../admin-all-post.php?MAKH=<?php echo $a[$i]['MAKH']; ?>"><?php echo $a[$i]['HOTEN']; ?></a></td>
					<td>
						<span id="tt-phanhoi" style="visibility: hidden;"><?php echo $b[$i]?></span>
						<button class="btn btn-success" data-toggle="modal" href="#" style="color:white;" data-target="#see" onclick="openModelCauHoi(<?php echo $i?>)">Trả lời <br> <?php echo $b[$i]?></button>
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
<div class="modal fade" id="see" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Trả lời câu hỏi</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div class="modal-body">
					<!-- Form  -->
					<form>
						<div class="form-group">
							<label>Người dùng: </label>
							<label id="lbName"></label>
						</div>

						<div class="form-group">
							<label>Ngày gửi: </label>
							<label id="lbTime"></label>
						</div>

						<div class="form-group">
							<label>Cần hỗ trợ: </label>
							<label id="lbType"></label>
						</div>


						<div class="form-group">
							<label>Vấn đề gặp phải: </label>
							<textarea id="taIssue" class="form-control" rows="1" style="resize: none;" disabled></textarea>
						</div>

						<div class="form-group">
							<label>Thông tin chi tiết: </label>
							<textarea id="taDetail" class="form-control" rows="3" style="resize: none;" disabled></textarea>
						</div>

						<div class="form-group">
							<label>Trả lời: </label>
							<textarea id="taAnswer" class="form-control" rows="3" style="resize: none;" required></textarea>
						</div>

						<div class="modal-footer">
							<span id="addition-result"></span>
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
							<button id="btnAnswer" type="button" class="btn btn-primary" onclick="addTraLoi()">Trả lời</button>
						</div>

					</form>
				</div>

			</form>
		</div>
	</div>
</div>

<script src="../../js/script.admin.js"></script>

<?php $a = TaiThongTinKhachHang($MaKH);?>
<div class="card profile" style="margin-bottom: 10px; padding: 10px;">    
	<img class="card-img-top" src="<?php echo '.'.$a['AVATAR']?>" alt="Card image cap" style="border: 1px solid #A2A2A2; border-radius: 50%;">		
	<a class="list-group-item list-group-item-action"><i class="fa fa-user-circle"></i>  Tên tài khoản : <?php echo $UserName?> </a>
	<a class="list-group-item list-group-item-action"><i class="fa fa-calendar"></i>  Ngày sinh : <?php echo $a['NGAYSINH']?></a>
	<button type="button" id="seeDetailProfile" class="btn" data-toggle="modal" data-target="#seeProfile">Xem chi tiết</button>                              
</div>

<!-- Modal -->
<!--  Xem thông tin người dùng-->
<div class="modal fade" id="seeProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
	<div class="modal-dialog" role="document" >
		<div class="modal-content" >

			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Họ tên khách hàng : <?php echo $a['HOTEN']?></h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			</div>

			<div class="modal-body">
				<div class="row">
					<div class="col-md-4" >
					<label style="font-weight:bold; float: right;">Ảnh đại diện: </label>
					</div>
					<div class="col-md-8">
						<img src="<?php echo '.'.$a['AVATAR']?>" style="width: 100px; height: 100px; border-radius: 50%; border: 1px solid #DCD6D7;">
					</div>
				</div>

				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Tên tài khoản:</label>
					</div>
					<div class="col-md-8">
						<label> <?php echo $UserName?></label>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Giới tính:</label>
					</div>
					<div class="col-md-8">
						<label><?php echo $a['GIOITINH']?></label>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Ngày sinh:</label>
					</div>
					<div class="col-md-8">
						<label><?php echo $a['NGAYSINH']?></label>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Địa chỉ:</label>
					</div>
					<div class="col-md-8">
						<?php echo $a['DIACHI']?>
					</div>
				</div>


				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Số điện thoại:</label>
					</div>
					<div class="col-md-8">
						<?php echo $a['SDT']?>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Facebook:</label>
					</div>
					<div class="col-md-8">
						<?php echo $a['FACEBOOK']?>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4" style="font-weight:bold;">
						<label style="font-weight:bold; float: right;">Email:</label>
					</div>
					<div class="col-md-8">
						<?php echo $a['EMAIL']?>
					</div>
				</div>
				
			
				<div class="form-group">
					<label style="font-weight:bold;">Đôi dòng tâm sự: </label>
					<textarea class="form-control" rows="4" style="resize: none;" disabled><?php echo $a['TAMSU']?></textarea>
				</div>

				<div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button></div>

			</div>
			
		</div>
	</div>
</div>
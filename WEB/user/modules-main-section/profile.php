<?php $a = TaiThongTinKhachHang($MaKH);?>
<div class="card profile" style="margin-bottom: 10px; padding: 10px;">    
	<img class="card-img-top" src="<?php echo '.'.$a['AVATAR']?>" alt="Card image cap" style="border: 1px solid #A2A2A2; border-radius: 50%;">		
	<a class="list-group-item list-group-item-action"><i class="fa fa-user-circle"></i>  Username : <?php echo $UserName?> </a>
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
					<div class="col-4"><img src="<?php echo '.'.$a['AVATAR']?>" style="width: 100px; height: 100px; border-radius: 50%; border: 1px solid #DCD6D7;"></div>
					<div class="col-8">
						<div class="form-group"><label >Tên tài khoản: <?php echo $UserName?></label></div>
						<div class="form-group"><label >Giới tính: <?php echo $a['GIOITINH']?></label></div>
						<div class="form-group"><label >Ngày sinh: <?php echo $a['NGAYSINH']?> </label></div>
					</div>
				</div>          

				<div class="form-group"><label >Địa chỉ: <?php echo $a['DIACHI']?></label></div>
				<div class="form-group"><label >Số điện thoại: <?php echo $a['SDT']?></label></div>
				<div class="form-group"><label >Facebook: <?php echo $a['FACEBOOK']?></label></div>
				<div class="form-group"><label >Email: <?php echo $a['EMAIL']?></label></div>
			
				<div class="form-group">
					<label>Đôi dòng tâm sự: </label>
					<textarea class="form-control" rows="4" style="resize: none;" disabled><?php echo $a['TAMSU']?></textarea>
				</div>

				<div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button></div>

			</div>
			
		</div>
	</div>
</div>
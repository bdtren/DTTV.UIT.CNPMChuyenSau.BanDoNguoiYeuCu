 <!--Xử lý trên sidebar(đổi màu card đang được chọn) -->
 <?php
	$act = array("","");
	if(isset($_GET['page'])){
		$temp=$_GET['page'];
	}
	else{
		$temp='';
	}

	if($temp=='promotion'){
		$act[1] = "active";
		$act[0] = "";
	}
	else{
		$act[0] = "active";
		$act[1] = "";
	}
?>
 
 <!-- Sidebar -->
					<div class="card" style="margin-bottom: 10px;">    
							  
								<img class="card-img-top" src="../../<?php echo $nv[0]['AVATAR']?>" alt="Card image cap" style="border: 1px solid #A2A2A2; border-radius: 50%;">
							  	  
								 <a class="list-group-item list-group-item-action"><i class="fa fa-user-circle"></i>  <?php echo $nv[0]['HOTEN']?> </a>
							
								<a class="list-group-item list-group-item-action"><i class="fa fa-clock-o"></i>  Hoạt động : <span id="demo"></span> </a>
							
								<button type="button" class="btn" data-toggle="modal" data-target="#profilesee" onclick="getProfileInfo()">
							 	Xem chi tiết
								</button>
                               
					</div>



						    <div class="list-group">
                                <a href="index.php" class="list-group-item list-group-item-action" id="sidebar">
                                        <i class="fa fa-dashcube"></i> Bảng điều khiển
                                </a>
								
								 <a id="checkcard" href="index.php?page=checkcard" class="list-group-item list-group-item-action <?php echo $act[0];?>"><i class="fa fa-pencil"></i>  Kiểm tra thẻ cào <span class="badge badge-danger" style="float: right;"><?php echo laySoTheCaoTrong();?></span></a>
								<a id="promotion" href="index.php?page=promotion" class="list-group-item list-group-item-action <?php echo $act[1];?>"><i class="fa fa-pencil"></i>  Khuyến mãi <span class="badge badge-danger" style="float: right;"><?php echo laySoKhuyenMai();?></span></a>
							
                                
                        </div>
<!-- Kết thúc sidebar -->

<!-- Modal -->
    <!-- Bài đăng cần duyệt -->
    <div class="modal fade" id="profilesee" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Thông tin nhân viên kế toán</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">	
					<!-- Form  -->
                        <form>		
								<div class="row">
									<div class="col-6">
										<img src="../../<?php echo $nv[0]['AVATAR']?>" style=" width: 200px; 200px; border-radius: 50%; border: 1px solid #D9D9D9;">
									</div>
									<div class="col-6">
										<div class="form-group">
										 <label >Họ và tên: <?php echo $nv[0]['HOTEN']?></label>
										</div>

										<div class="form-group">
										 <label >Giới tính: <?php echo $nv[0]['GIOITINH']?></label>
										</div>

										<div class="form-group">
										 <label >Ngày sinh: <?php echo date("d-m-Y", strtotime($nv[0]['NGAYSINH'])); ?></label>
										</div>
										
										<div class="form-group">
										 <label >Địa chỉ: <?php echo $nv[0]['DIACHI']?></label>
										</div>
										
										<div class="form-group">
										 <label >Chức vụ: <?php echo $nv[0]['TENCV']?></label>
										</div>
									</div>
								</div>
							
								
                                
								<div class="form-group">
								 <label >Số điện thoại: <?php echo $nv[0]['SDT']?></label>
                              	</div>
							
								<div class="form-group">
									<label >Email: <?php echo $nv[0]['EMAIL']?></label>
                              	</div>
								
								<div class="form-group">
									<label style="color: red;">Ngày vào làm: <?php echo date("d-m-Y", strtotime($nv[0]['NGAYVL']));?></label>
								</div>
								
    							<div class="form-group">
									<!-- (!$soGio? 0: round($soGio[0]['SoGio'],3)) -->
									<label style="color: red;">Số giờ đã làm trong ngày: <span id="worktime"><?php echo (!$soGio? 0: $soGio[0]['SoGio'])?></span></label>
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



	
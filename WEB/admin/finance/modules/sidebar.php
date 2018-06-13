<!-- Sidebar -->
							<div class="card" style="margin-bottom: 10px; padding: 10px;">    
							  
								<img class="card-img-top" src="../../Images/user/avatar7.png" alt="Card image cap" style="border: 1px solid #A2A2A2; border-radius: 50%;">
							  	  
								 <a class="list-group-item list-group-item-action"><i class="fa fa-user-circle"></i>  NguyenVanA </a>
							
								<a class="list-group-item list-group-item-action"><i class="fa fa-clock-o"></i>  Hoạt động : <span id="demo"></span> </a>
							
								<button type="button" class="btn" data-toggle="modal" data-target="#seeprofile">
							 	Xem chi tiết
								</button>
                               
							</div>



						    <div class="list-group">
                                <a href="index.php" class="list-group-item list-group-item-action" id="sidebar">
                                        <i class="fa fa-dashcube"></i> Bảng điều khiển
                                </a>
								
								 <a href="index.php?page=checkcard" class="list-group-item list-group-item-action"><i class="fa fa-pencil"></i>  Kiểm tra thẻ cào <span class="badge badge-danger" style="float: right;">20</span></a>
								<a href="../../report.php" class="list-group-item list-group-item-action"><i class="fa fa-pencil"></i>  Thống kê doanh thu</a>
							
                                
                        </div>
<!-- Kết thúc sidebar -->

<!-- Modal -->
    <!-- Bài đăng cần duyệt -->
    <div class="modal fade" id="seeprofile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
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
										<img src="../../Images/user/avatar7.png" style=" width: 200px; 200px; border-radius: 50%; border: 1px solid #D9D9D9;">
									</div>
									<div class="col-6">
										<div class="form-group">
										 <label >Họ và tên: </label>
										</div>

										<div class="form-group">
										 <label >Giới tính: </label>
										</div>

										<div class="form-group">
										 <label >Ngày sinh: </label>
										</div>
										
										<div class="form-group">
										 <label >Địa chỉ: </label>
										</div>
										
										<div class="form-group">
										 <label >Chức vụ: </label>
										</div>
									</div>
								</div>
							
								
                                
								<div class="form-group">
								 <label >Số điện thoại:</label>
                              	</div>
							
								<div class="form-group">
									<label >Email:</label>
                              	</div>
								
								<div class="form-group">
									<label style="color: red;">Ngày vào làm:</label>
								</div>
								
    							<div class="form-group">
									<label style="color: red;">Số giờ làm:</label>
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




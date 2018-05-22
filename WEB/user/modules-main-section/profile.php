<div class="card" style="margin-bottom: 10px; padding: 10px;">    
							  
								<img class="card-img-top" src="../Images/user/avatar8.png" alt="Card image cap" style="border: 1px solid #A2A2A2; border-radius: 50%;">
							  	  
								 <a class="list-group-item list-group-item-action"><i class=""></i>  username </a>
							
								<a class="list-group-item list-group-item-action"><i class="fa fa-pencil"></i>  Ngày sinh </a>
							
								<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#seeProfile" style="color: white;">
							 	Xem chi tiết
								</button>
                               
</div>


 <!-- Modal -->
    <!--  Xem thông tin người dùng-->
    <div class="modal fade" id="seeProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Họ tên khách hàng</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">
					
					<!-- Form Đăng tin -->
                        <form>
							<div class="row">
								<div class="col-4">
									<img src="../Images/user/avatar8.png" style="width: 100px; height: 100px; border-radius: 50%; border: 1px solid #DCD6D7;">
								</div>
								<div class="col-8">
								<div class="form-group">
                                  <label >Tên tài khoản: </label>
                                </div>
							
								<div class="form-group">
                                  <label >Giới tính: </label>
                                </div>
								<div class="form-group">
                                  <label >Ngày sinh: </label>
                                </div>
								</div>
							</div>          
							
								
							
								 <div class="form-group">
                                  <label >Địa chỉ:</label>
                                 </div>
							
								<div class="form-group">
								 <label >Số điện thoại:</label>
                              	</div>
								
								<div class="form-group">
								 <label >Facebook:</label>
                              	</div>
							
								<div class="form-group">
								 <label >Email:</label>
                              	</div>
                               						
							
                                <div class="form-group">
                                    <label>Đôi dòng tâm sự: </label>
                                    <textarea class="form-control" rows="4" style="resize: none;" disabled></textarea>
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
  <style>
	#thacmac{
		color: white; 
		background: #FF00F5; 
	}
	#thacmac:hover{
		background: #E514DD;
	}
	  
	#yeucau{
		color: white; 
		background: #BF00F3; 
	}
	#yeucau:hover{
		background: #AB02D9;
	}
	
</style>	


<!-- Thanh tiêu đề -->
    <nav class="navbar navbar-expand-md navbar-default bg-default">
      <a class="navbar-brand" href="../index.php"><img src="../Images/logo-1.png" style="width:210px;"></a>

		
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
        </ul>


        <ul class="navbar-nav navbar-right">
            <li class="nav-item">
                <a class="nav-link">Chào mừng, Anh</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="../index.php">Đăng xuất</a>
            </li>
          </ul>
    
      </div>
    </nav>
<!-- Kết thúc thanh tiêu đề -->


	  <!-- Thanh tiêu đề -->
    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <h1><i class="fa fa-dashboard"></i> <small>Trang người dùng</small></h1>
                </div>
                <div class="col-md-3">
                        <!-- Example single danger button -->
                        <div class="btn-group create">
							<!-- Button trigger modal -->
							<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#addPost" style="color: white;">
							  Thêm bài đăng
							</button>
														
							<button type="button" class="btn" id="thacmac" data-toggle="modal" data-target="#addReq">
								Thắc mắc,yêu cầu
							</button>
							
							<button type="button" class="btn" id="yeucau" data-toggle="modal" data-target="#addRes">
								Phản hồi
							</button>
                         </div>
                </div>
            </div>
        </div>
	</header>
		 <!-- Kết thúc thanh tiêu đề -->



<!-- Modal -->
    <!-- Thêm bài đăng-->
<div class="modal fade" id="addPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Thêm bài đăng</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">
					
					<!-- Form Đăng tin -->
                        <form>
                                <div class="form-group">
                                  <label >Tiêu đề tin</label>
                                  <input type="text" class="form-control" placeholder="Nhập tiêu đề...">
                                </div>
							
								<div class="form-group">
								 <label >Loại tin</label>
                                  <select class="form-control">
  										<option>Cần bán</option>
									  	<option>Cần mua</option>
								  </select>
                              	</div>
							
								<div class="form-group">
								 <label >Danh mục tin</label>
                                  <input type="text" class="form-control" placeholder="Nhập danh mục tin...">
                              	</div>
                                
								<div class="form-group">
								 <label >Giá bán(mua)</label>
                                  <input type="text" class="form-control" placeholder="Nhập giá bán...">
                              	</div>
							
								<div class="form-group">
								 <label >Tình trạng sản phẩm</label>
                                  <select class="form-control">
  										<option>Như mới</option>
									  	<option>Mới</option>
									  	<option>Cũ</option>
								  </select>
                              	</div>
								
								<div class="form-group">
								<label >Hình ảnh sản phẩm</label>
    							<input type="file" class="form-control-file">
								</div>
							
                                <div class="form-group">
                                    <label>Mô tả chi tiết</label>
                                    <textarea class="form-control" rows="4" style="resize: none;"></textarea>
                                </div>
							
								  <div class="form-group">
                                    <label>Phương thức giao dịch</label>
                                    <input type="text" class="form-control" placeholder="Nhập phương thức giao dịch..."></textarea>
                                </div>
							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                 					<button type="button" class="btn btn-primary">Đăng</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>
	
	
	<!-- Thêm thăc mắc, yêu cầu-->
	<div class="modal fade" id="addReq" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Thắc mắc, yêu cầu</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">
                        <form>		
								<div class="form-group">
									<label for="exampleFormControlSelect1">Cần hỗ trợ</label>
									<select class="form-control">
									  <option>Thắc mắc</option>
									  <option>Yêu cầu</option>
									</select>
								  </div>
							
                                <div class="form-group">
                                    <label>Vấn đề gặp phải</label>
                                    <textarea class="form-control" rows="3" style="resize: none;"></textarea>
                                </div>
							
							
								<div class="form-group">
                                    <label>Thông tin chi tiết</label>
                                    <textarea class="form-control" rows="5" style="resize: none;"></textarea>
                                </div>

							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                 					<button type="button" class="btn btn-primary">Gửi</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>


<!-- Thêm phản hồi-->
	<div class="modal fade" id="addRes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Phản hồi</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">
                        <form>		
								<div class="form-group">
									<label for="exampleFormControlSelect1">Mức độ hài lòng</label>
									<select class="form-control">
									  <option value="1">Tệ</option>
									  <option value="2">Không hài lòng</option>
									  <option selected value="3" >Tạm được</option>
									  <option value="4">Hài lòng</option>
									  <option value="5">Rất hài lòng</option>
									</select>
								  </div>
							
                                <div class="form-group">
									<label for="exampleFormControlSelect1">Khả năng giới thiệu tới bạn bè, đồng nghiệp</label>
									<select class="form-control">
									  <option value="0">Không giới thiệu</option>
									  <option selected value="1" >Chưa quyết định</option>
									  <option value="2">Sau khi cải thiện chất lượng</option>
									  <option value="3">Sẽ giới thiệu</option>
									  <option value="4">Chắc chắn sẽ giới thiệu</option>
									 <!-- <option value="5"></option> -->
									</select>
								  </div>
							
							
								<div class="form-group">
                                    <label>Phản hồi khác để chúng tôi nâng cao chất lượng dịch vụ</label>
                                    <textarea class="form-control" rows="5" style="resize: none;"></textarea>
                                </div>

							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                 					<button type="button" class="btn btn-primary">Gửi</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>






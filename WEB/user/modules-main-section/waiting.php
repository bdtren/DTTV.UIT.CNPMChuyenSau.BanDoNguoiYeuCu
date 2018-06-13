		<div class="card" style="height: 30em;">
                            <h5 class="card-header main-color"><i class="fa fa-spinner"></i>  Bài đăng chờ duyệt</h5>
                            <div class="card-body user-detail-section" style="overflow-y: auto;">
                                    <table class="table table-striped">
                                            <thead>
                                              <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tiêu đề</th>
                                                <th scope="col">Ngày</th>
                                                <th scope="col">Quản lí</th>
												<th scope="col"></th>
                                              </tr>
                                            </thead>
                                            <tbody>
												<!-- Dòng dữ liệu -->
                                              <tr>
                                                <th scope="row">1</th>
                                                <td>Bán dép người yêu cũ</td>
                                                <td>12/12/2017</td>
                                                <td><a class="btn btn-type-purple" href="#" style="color:white;">Xóa</a></td>
												<td><button type="button" class="btn btn-type-pink" data-toggle="modal" data-target="#editPost">
												Chỉnh sửa
												</button></td>
                                              </tr>
                                              	<!-- Kết thúc dòng dữ liệu -->
                                            </tbody>
                                          </table>
                    </div>
                </div>




    <!-- Chỉnh sửa bài đăng-->
<div class="modal fade" id="editPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Chỉnh sửa bài đăng</h5>
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
                 					<button type="button" class="btn btn-primary">Sửa</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>
				 
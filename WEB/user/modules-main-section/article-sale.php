 <!-- Website Overview-->
							<div class="card" style="height: 30em;">
                            <h5 class="card-header main-color-bg"><i class="fa fa-check" style="color: #00B2E0"></i>  Bài bán đã duyệt</h5>
                            <div class="card-body">
                                    <table class="table table-striped" style="overflow-y: auto;">
                                            <thead>
                                              <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tiêu đề</th>
                                                <th scope="col">Ngày</th>
                                                <th scope="col"></th>
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
                                                <td><a class="btn btn-danger" href="#" style="color:white;">Ẩn</a></td>
												<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createspecial">
												Tin đặc biệt
												</button></td>
												<td><a class="btn btn-success" href="../product-detail.php" style="color:white;">Xem</a></td>
                                              </tr>
                                              	<!-- Kết thúc dòng dữ liệu -->
										
                                            </tbody>
                                          </table>
                    </div>
                </div>



<!-- Form tạo tin đặc biệt -->
<div class="modal fade" id="createspecial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Tạo tin đặc biệt</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">
                        <form>							
                                <div class="form-group">
                                    <label>Nội dung tạo tin</label>
                                    <select class="form-control" id="getFname" onchange="SelectCheck(this);">
										  <option value="1">Tin hot</option>
										  <option value="2">Tin new</option>
										 <option id="discount" value="3">Tin discount</option>
										</select>
                                </div>
							
								<div id="DivCheck" style="display:none;">
									<div class="form-group">
									<label>Giá sau khi giảm(đồng):</label>
									 <input type="text" class="form-control" placeholder="Nhập giá sau khi giảm">
   									 <small class="form-text text-muted">Đừng quên tỉ lệ % giảm giá càng lớn thì càng tăng khả năng khách hàng mua sản phẩm của bạn càng cao</small>
									</div>
								</div>
							
								<div class="form-group">
                                    <label>Thanh toán bằng thẻ cào</label>
                                    <select class="form-control">
										  <option>Vinaphone</option>
										  <option>Viettel</option>
										   <option>Mobifone</option>
										 <option>Vietnamobile</option>
										<option>S-fone</option>
										</select>
                                </div>
								
							<label>Nhập mã thẻ</label>
							<div class="form-group">
							  <input type="text" class="form-control" placeholder="Mã thẻ cào">
							</div>
							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                 					<button type="button" class="btn btn-primary">Tiến hành tạo tin đặc biệt</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>


				
				
				 
                        
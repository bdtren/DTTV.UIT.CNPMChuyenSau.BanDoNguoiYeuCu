 <div class="card" style="height: 35em;">
                            <h5 class="card-header" id="checkcard">Kiểm tra thẻ cào</h5>
                            <div class="card-body" style="overflow-y: auto;">
                                    <table class="table table-striped">
                                            <thead>
                                              <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tiêu đề</th>
                                                <th scope="col">Người đăng</th>
                                                <th scope="col">Ngày đăng</th>
                                                <th scope="col">Quản lí</th>
                                              </tr>
                                            </thead>
                                            <tbody>
												<!-- Dòng dữ liệu -->
											<?php 
												$i=1;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<$num){ 
												?>
                                              <tr>
                                                <th scope="row"><?php echo $i; ?></th>
                                                <td>Tiêu đề tin </td>
                                                <td>Người đăng</td>
                                                <td>Ngày đăng</td>
												<td><a class="btn btn-warning" data-toggle="modal" href="#" style="color:white;" data-target="#see">Kiểm tra</a></td>					  
                                              </tr>
                                              	<!-- Kết thúc dòng dữ liệu -->
											<?php
												$i++;
												} 
												?>
                                            </tbody>
                                          </table>
                    </div>
</div> 
	 
 <!-- Modal -->
    <!-- Bài đăng cần duyệt -->
    <div class="modal fade" id="see" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Kiểm tra mã thẻ cào</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">	
					<!-- Form  -->
                        <form>	
								<div class="form-group">
								 <label >Tiêu đề tin: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Người đăng: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Thời gian: </label>
                              	</div>
								
								<div class="form-group">
                                    <label style="color: red; font-weight: bold;">Yêu cầu tạo tin: </label>
                                </div>
							
							
								  <div>
                                    <label class="form-group" style="color: red; font-weight: bold;">Mã thẻ cào: </label>
                                </div>
							
								
							
							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
									<button type="button" class="btn btn-danger">Không thành công</button>
                 					<button type="button" class="btn btn-primary">Thành công</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>
	 
	 
	
 <div class="card" style="height: 35em;">
                            <h5 class="card-header" id="checkcard">Khuyến mãi <span style="float: right;"><a class="btn btn-primary" data-toggle="modal" href="#"data-target="#create">Tạo khuyến mãi</a></span></h5>
	 						
	 
                            <div class="card-body" style="overflow-y: auto;">
                                    <table class="table table-striped">
                                            <thead>
                                              <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tiêu đề</th>
												<th scope="col">Ngày đăng</th>
                                                <th scope="col">Nội dung</th>                         
                                                <th scope="col">Quản lí</th>
												<th scope="col"></th>
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
												<td><a class="btn adverbtnsee" data-toggle="modal" href="#"data-target="#see" style="background-color: #C630FF;color: white;">Xem</a></td>				
												<td><a class="btn" style="background-color: #B100F4;
												color: white;">Xóa</a></td>			  
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
    <!-- Xem khuyến mãi -->
    <div class="modal fade" id="see" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Xem thông tin khuyến mãi</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">	
					<!-- Form  -->
                        <form>	
								<div class="form-group">
								 <label >Tiêu đề: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Nhân viên đăng: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Thời gian: </label>
                              	</div>						
							
								<div class="form-group">
								 <label >Nội dung: </label>
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
	 
	 <!-- Modal -->
    <!-- Tạo khuyến mãi -->
    <div class="modal fade" id="create" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Tạo một khuyến mãi</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">	
					<!-- Form  -->
                        <form>	
								<div class="form-group">
								 <label >Tiêu đề: </label>
								<input type="text" class="form-control" placeholder="Nhập tiêu đề khuyến mãi...">
                              	</div>
							
								<div class="form-group">
								 <label >Thời gian: </label>
								 <input type="date" name="bday"> -
							     <input type="date" name="bday">
                              	</div>
														
								<div class="form-group">
								 <label >Nội dung: </label>
								 <textarea class="form-control" rows="4" style="resize: none;" disabled></textarea>
                              	</div>	
							
							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                 					<button type="button" class="btn btn-primary">Tạo</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>
	 
	
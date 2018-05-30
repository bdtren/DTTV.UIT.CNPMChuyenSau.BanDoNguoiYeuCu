<div class="card" style="height: 35em;">
                            <h5 class="card-header mainheader">Phản hồi của người dùng</h5>
                            <div class="card-body" style="overflow-y: auto;">
                                    <table class="table table-striped">
                                            <thead>
                                              <tr>
                                                <th scope="col">STT</th>
												<th scope="col">Người đăng</th>
                                                <th scope="col">Ngày gửi</th>
                                                <th scope="col">Mức độ hài lòng</th>
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
												<td>Người đăng</td>
                                                <td>Ngày gửi</td>
                                                <td>Mức hài lòng </td>
												<td><a class="btn btn-success" data-toggle="modal" href="#" style="color:white;" data-target="#see">Xem chi tiết</a></td>					  
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
                  <h5 class="modal-title" id="exampleModalLongTitle">Phản hồi của khách hàng</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">	
					<!-- Form  -->
                        <form>								
								<div class="form-group">
								 <label >Người đăng: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Thời gian: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Mức độ hài lòng: </label>
                              	</div>
								
								<div class="form-group">
								 <label >Khả năng giới thiệu với bạn bè, đồng nghiệp: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Phản hồi khác: </label>
								<textarea class="form-control" rows="4" style="resize: none;" disabled ></textarea>
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
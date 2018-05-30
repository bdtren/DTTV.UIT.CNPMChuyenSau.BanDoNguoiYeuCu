	 <div class="card" style="height: 35em;">
                            <h5 class="card-header mainheader">Câu hỏi của người dùng</h5>
                            <div class="card-body" style="overflow-y: auto;">
                                    <table class="table table-striped">
                                            <thead>
                                              <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Cần hỗ trợ</th>
                                                <th scope="col">Người đăng</th>
                                                <th scope="col">Ngày gửi</th>
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
                                                <td>Thắc mắc hoặc yêu cầu </td>
                                                <td>Người đăng</td>
                                                <td>Ngày gửi</td>
												<td><a class="btn btn-success" data-toggle="modal" href="#" style="color:white;" data-target="#see">Trả lời</a></td>					  
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
                  <h5 class="modal-title" id="exampleModalLongTitle">Trả lời câu hỏi</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
				  
                <div class="modal-body">	
					<!-- Form  -->
                        <form>	
								<div class="form-group">
								 <label >Người dùng: </label>
                              	</div>
								
								<div class="form-group">
								 <label >Ngày gửi: </label>
                              	</div>
							
								<div class="form-group">
								 <label >Cần hỗ trợ: </label>
                              	</div>
														
							
								<div class="form-group">
								 <label >Vấn đề gặp phải: </label>
								<textarea class="form-control" rows="3" style="resize: none;" disabled></textarea>
                              	</div>
							
								<div class="form-group">
								 <label >Thông tin chi tiết: </label>
								<textarea class="form-control" rows="4" style="resize: none;" disabled></textarea>
                              	</div>													
							
								<div class="form-group">
								 <label >Trả lời: </label>
								<textarea class="form-control" rows="4" style="resize: none;" required></textarea>
                              	</div>	
							
                    			<div class="modal-footer">
                  					<button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                 					<button type="button" class="btn btn-primary">Trả lời</button>
                				</div>

						</form>
                </div>
	
            	</form>
              </div>
            </div>
          </div>
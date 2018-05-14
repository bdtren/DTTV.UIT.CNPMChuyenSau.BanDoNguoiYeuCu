<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style-user-page.css"> 
    <!-- icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

  <body>

	 <?php
	  		include('modules-main-section/header.php');
	  ?>

	  <!-- Nội dung chính -->
    <section id="main">
        <div class="container">
            <div class="row">
				 <div class="col-md-3">
					 <?php
					 	include('modules-main-section/sidebar.php');
					 ?>
				</div>

				  <div class="col-md-9">
					  <?php
					  	include('modules-main-section/main-section.php');
					  ?>
				</div>
            </div>
        </div>
    </section>

	 <!-- Modal -->
    <!-- Thêm bài đăng bán-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
              <div class="modal-content" >
              <form style="overflow-y: scroll;" >
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

		


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>


  </body>
</html>
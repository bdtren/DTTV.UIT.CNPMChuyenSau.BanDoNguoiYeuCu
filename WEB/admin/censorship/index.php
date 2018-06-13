<?php 
	session_start();
	$User = (isset($_SESSION['useradmin']))? $_SESSION['useradmin'] : '' ;
	$MaNV = (isset($_SESSION['manv']))? $_SESSION['manv'] : '' ; 
	
?>
<?php include "../xulyphp/login.php"; ?>
<?php include "../../xulyphp/xulytindang.php";
			include('../../xulyphp/xulyAdmin.php');
			if($MaNV!=''){ 
				$nv = layThongTinNhanVien($MaNV);		
				$soGio = laySoGioLam($MaNV, date("Y/m/d"));
      }
      
      checkLogin($nv[0]['MACV']);
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Kiểm duyệt tin đăng và xứ lí vi phạm </title>
	<meta name="author" content="DTTV" />
	<meta name="description" content="Website bán đồ người yêu cũ." />
	<link rel="icon" href="../../Images/Home/favicon.png"/>
    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="../../css/bootstrap.min.css">  
    <link rel="stylesheet" href="../../css/style-admin-censorship.css">
    <!-- icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

  <body>
	<style>
		.active{
			background: blue !important;
		}
	</style>

	<script>
		var nv = <?php echo json_encode($nv); ?>;
		var soGio = <?php echo json_encode($soGio); ?>;
	</script>

	<?php include('modules/header.php'); ?>

	  <!-- Nội dung chính -->
    <section id="main">
        <div class="container">
            <div class="row">
				 <div class="col-md-3">
					 <?php
					 	include('modules/sidebar.php');
					 ?>
				</div>

				  <div class="col-md-9 main-section">
					  <?php
					  	include('modules/main-section.php');
					  ?>
				</div>
            </div>
        </div>
    </section>

	 <!-- Modal -->
    <!-- Thêm bài đăng bán-->
    <div class="modal fade" id="addpost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
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
   	<script src="../../js/jquery-3.3.1.min.js"></script>
    <script src="../../js/popper.min.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
	<script src="../../js/count-up-time.js"></script>
	<script src="../../js/get-time-work.js"></script>

	<!-- Tạo datatable -->
	<link rel="stylesheet" type="text/css" href="../../DataTables/datatables.css">
  <script type="text/javascript" charset="utf8" src="../../DataTables/datatables.js"></script>

  <script type="text/javascript">
    var dataTable = null;

    $(document).ready( function () {
      dataTable = $('#content-table').DataTable(
        /*{
        ordering: true,
        searching: true,
        scrollY: 200,
        paging: false,
        select: true
      }*/
      {
        paging: false,
        select: true
      }
    );
    } );
  </script>
  </body>
</html>
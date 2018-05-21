<?php $PageName="chitietsanpham"; ?>


<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="icon" href="./Images/Home/favicon.png"/>
<title></title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/style-product-detail.css">
	<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link rel="manifest" href="./manifest.json"> 
	
</head>

<body>
	<?php include('header.php'); ?>
	
		<div class="container-fluid" style="margin-top: 6em;">
		<div class="card-header">Tiêu đề tin đăng</div>
		<div class="card">
			<div class="container-fluid">
				<div class="wrapper row">
					<div class="preview col-md-8 col-lg-6">
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="Images/san-pham/demo.jpg"></div>
						  <div class="tab-pane" id="pic-2"><img src="Images/san-pham/demo.jpg"></div>
						  <div class="tab-pane" id="pic-3"><img src="Images/san-pham/demo.jpg" /></div>
						  <div class="tab-pane" id="pic-4"><img src="Images/san-pham/demo.jpg" /></div>
						  <div class="tab-pane" id="pic-5"><img src="Images/san-pham/demo.jpg" /></div>
						  <div class="tab-pane" id="pic-6"><img src="Images/san-pham/demo.jpg" /></div>
						</div>
						
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="Images/san-pham/demo.jpg" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="Images/san-pham/demo.jpg" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="Images/san-pham/demo.jpg" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="Images/san-pham/demo.jpg" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="Images/san-pham/demo.jpg" /></a></li>
						  <li><a data-target="#pic-6" data-toggle="tab"><img src="Images/san-pham/demo.jpg" /></a></li>
						</ul>
						
						<p style="margin-top: 20px;">
							
							  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
								  <i class="fa fa-phone-square"></i>  Liên hệ
							  </button>
							
							 <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
							  Báo cáo
							</button>
							
							</p>
							<div class="collapse" id="collapseExample">
							  <div class="card card-body">
								<ul class="list-group list-group-flush">
									<li class="list-group-item" style="width: 100%; color: #331CFF; font-weight: bold;">Số điện thoại: </li>
									<li class="list-group-item" style="width: 100%; color: #331CFF; font-weight: bold;">Facebook: </li>
									<li class="list-group-item" style="width: 100%; color: #331CFF; font-weight: bold;">Email: </li>
								  </ul>
							  </div>
							</div>
								
					</div>
					
					
					<div class="details col-md-4 col-lg-6 ">
						<p style="font-weight: 20px; text-align: center; color: #8D00CB; margin-top: 10px;">Thông tin chi tiết</p>
						<ul class="list-group list-group-flush">
						<li class="list-group-item description"><i class="fa fa-shopping-bag"></i>  Loại tin</li>
						<li class="list-group-item description"><i class="fa fa-money"></i>  Giá </li>
						<li class="list-group-item description"><i class="fa fa-shield"></i>  Tình trạng</li>
						<li class="list-group-item description"><i class="fa fa-user-circle"></i>  Người đăng</li>
						<li class="list-group-item description"><i class=" 	fa fa-address-book"></i>  Địa chỉ</li>
						<li class="list-group-item description detaildes"><i class="fa fa-pencil-square"></i>  Mô tả chi tiết</li>
						<li class="list-group-item description"><i class="fa fa-credit-card"></i>  Phương thức giao dịch</li>
						<li class="list-group-item description"><i class="fa fa-calendar"></i>  Ngày đăng: </li>
						
							
							
							
					  </ul>
						
					</div>
					
					
				</div>
			</div>
			</div>
	</div>
	
		<?php include('footer.php'); ?>
		
	


<!-- Form báo cáo -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style="color: #FF0004; font-weight: bold; font-size: 20px;">Báo cáo vi phạm</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <label style="color: #FF7600;">Nội dung vi phạm:</label>
      <textarea class="form-control">
	  </textarea>  
	  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Báo cáo ngay</button>
      </div>
      </div>
   
    </div>
  </div>
</div>
	
	
	
	
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
		<!--Progressive Web App(PWA): install, service worker-->
	<script src="./sw-register.js"></script>
</body>
</html>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Liên hệ</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="./Images/Home/favicon.png">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style-contact-us.css">
  <!-- Icon -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Arsenal" rel="stylesheet"> 

</head>

<body>
	<?php include('header.php') ?>
	<div class="container-fluid" style="overflow-y: auto;">
		<div class="row image">
			<img src="Images/gioi-thieu/uit.jpg">
		</div>
		<div class="row main">
			
			<div class="col-md-5 ">
				<div class="jumbotron jumbotron-fluid" style="width: 100%; margin-bottom: 10px; background: #cc4f9b">
				  <div class="container">
					<h1 class="contactjum">Liên hệ với chúng tôi</h1>
					<p class="lead1"><i class="fa fa-home"></i>  Trường Đại học Công nghệ Thông tin, Đại học Quốc gia TP Hồ Chí Minh</p>
					<p class="lead"><i class="fa fa-location-arrow"></i>  Khu phố 6, P.Linh Trung, Q.Thủ Đức, Tp.Hồ Chí Minh.</p>
					<p class="lead"><i class="fa fa-phone-square"></i>  01674442766 </p>
					<p class="lead"><i class="fa fa-rss"></i>  15520161@gm.uit.edu.vn </p>
				  </div>
				</div>
				
				<!-- Form liên hệ -->
				<form id="form-contact">
				  <label class="headlh">Liên hệ</label>
				  <div class="form-group">
					<input type="text" class="form-control" placeholder="Nhập họ tên">
				  </div>
				  <div class="form-group">
					<input type="email" class="form-control" placeholder="Nhập email">
				  </div>
				 <div class="form-group">
					<input type="text" class="form-control" placeholder="Nhập số điện thoại">
				  </div>
				 <div class="form-group">
					<textarea class="form-control" style="resize: none;" placeholder="Nhập nội dung tin nhắn"></textarea>
				  </div>
				 <button type="submit" class="btn btn-primary">Gửi</button>
				</form>
			</div>
			<div class="col-md-7">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9080.160423151548!2d106.8034424754638!3d10.8668447111361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa199b9a4bd67ae19!2zR2nhuqNuZyDEkcaw4budbmcgQSAtIFRyxrDhu51uZyDEkOG6oWkgaOG7jWMgQ8O0bmcgbmdo4buHIFRow7RuZyB0aW4gLSDEkEhRRyBUUEhDTQ!5e0!3m2!1svi!2s!4v1526819786764" width="100%" height="620" frameborder="0" style="border:0" allowfullscreen=""></iframe>
			</div>
		</div>
	</div>
	<?php include('footer.php') ?>
	
	
	<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
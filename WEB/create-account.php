<?php 
	$PageName="taotaikhoan";
?>

<?php include "xulyphp/signup.php"; ?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Tạo tài khoản</title>

	<!-- Required meta tags -->
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" href="./Images/Home/favicon.png"/>

     <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style-create-account.css">

	<!-- font Vietnamese -->
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"> 
	
		<!-- Icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 

	<link rel="manifest" href="./manifest.json"> 
	
</head>

<body >	
	
		<?php include('header.php') ?>
	
	<section>
		<form method="POST" action="create-account.php" enctype="multipart/form-data">
		<div class="container1">
			<div class="form_contain1">
				<h1 id="dktk">Đăng ký tài khoản</h1>
				<label >Tên đăng nhập:</label>
				<input type="text"  class="textinput" name="username" required="">
				<label >Mật khẩu</label>
				<input type="password" class="textinput" name="password" required="">
				<label >Xác nhận mật khẩu</label>
				<input type="password" class="textinput" name="confirmpassword" required="">
				<label >Email:</label>
				<input type="text" class="textinput" name="email" required="">
				<label >Facebook:</label>
				<input type="text" class="textinput" name="facebook">

			</div>
			
			<div class="form_contain2">
				<label >Họ và tên:</label>
				<input type="text" class="textinput" name="name" required=""> 		
				<label >Ngày sinh:</label>
				<input type="date" name="Date" class="textinput" format required="" min="1960-01-01" max="2012-12-30" value="2012-01-01"> 
				<label>Giới tính:</label>
						<input type="radio" name="gender" value="male"> <font color="white">Nam</font> 
						<input type="radio" name="gender" value="female" > <font color="white">Nữ</font> 
						<input type="radio" name="gender" value="other" > <font color="white">Khác</font> 

				<br>
				<span> <label>Ảnh minh họa: </label> </span>
				<span id="uploaded-image"></span>
				<br>
				<input id="ipAvatarImage" type="file" name="anhDaiDien" accept="image/*" accept-charset="UTF-8" onchange="themAvatar(this)"> 
				<br>

				<label >Địa chỉ:</label>
				<input type="text" class="textinput" name="address" required="">
				<label >Điện thoại:</label>
				<input type="text" class="textinput" name="phone" required="">
				
				
				<label>Đôi dòng tâm sự:</label>
				<textarea name="text" class="textTalk" rows="4"></textarea>
				<input type="submit" name="signup" value="Tạo tài khoản">							
			</div>
		</div>
		</form>
	</section>
	
	<div id="footerpage">
		<?php include('footer.php'); ?>
	</div>
	 <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
 	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
   	<script src="js/bootstrap.min.js"></script>

	   <!-- Script xử lý trên trang -->
   	<script src="js/script.account.js"></script>


	<!--Progressive Web App(PWA): install, service worker-->
	<!-- <script src="./sw-register.js"></script> -->
</body>
</html>

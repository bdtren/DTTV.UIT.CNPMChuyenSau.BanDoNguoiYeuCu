<?php
	$PageName="quenmatkhau";
?>

<?php  include "xulyQuenMK.php" ?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Quên mật khẩu</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	 <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style_forget_password.css">
	<link href="https://fonts.googleapis.com/css?family=Cormorant+Infant" rel="stylesheet"> 
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
</head>

<body>	
	<?php include('header.php'); ?>
	
	<section id="forget-password">
		<h1>Quên mật khẩu</h1>
			<form id="form-forget-password" method="POST" action="forget-password.php" >
			<label>Tên đăng nhập:</label><br>
			<input type="text" name="username"><br>			
			<label>Email:</label><br>
			<input type="text" name="email"><br>
			<label>Mật khẩu mới:</label><br>
			<input type="password" name="password"><br>
			<label>Xác nhận mật khẩu mới:</label><br>
			<input type="password" name="confirm-password"><br>	
			<input type="submit" name="accept" value="Đổi mật khẩu">
			</form>
	</section>

		<?php include('footer.php'); ?>

	



	  <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
 	<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
   	<script src="js/bootstrap.min.js"></script>
</body>
	
</html>

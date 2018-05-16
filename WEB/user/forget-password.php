<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Quên mật khẩu</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	 <!-- Bootstrap CSS -->
	 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/style_forget_password.css">
	<link href="https://fonts.googleapis.com/css?family=Cormorant+Infant" rel="stylesheet"> 
</head>

<body>	
	<header id="menu">
			<!--Begin header -->
			<!-- Fixed navbar -->
			<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a class="navbar-brand" href="#"><img src="../Images/logo-1.png" style="width:210px;"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item ">
					<a class="nav-link" href="../index.php">Trang chủ</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">Thông báo</a>
					</li>
					<li class="nav-item active">
					<a class="nav-link" href="#">Tài khoản</span></a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">Giới thiệu</a>
					</li>

				</ul>
				<form class="form-inline mt-2 mt-md-0">
					<input class="form-control mr-sm-2" type="text" placeholder="Tìm sản phẩm...">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
				</form>
				</div>
    		  </nav>
			<!--End header -->
			</header>
	
	<section id="forget-password">
		<h1>Quên mật khẩu</h1>
			<form id="form-forget-password">
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



	  <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</body>
	
</html>

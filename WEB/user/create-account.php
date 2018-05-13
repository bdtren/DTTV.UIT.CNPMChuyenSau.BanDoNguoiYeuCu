<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Create Account</title>

	<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="../css/style.css">
	<!-- font Vietnamese -->
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"> 
	
	
	
</head>

<body >	
	
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
	
		<div class="container1">
			<div class="form_contain1">
				<h1 id="dktk">Đăng ký tài khoản</h1>
				<label >Tên đăng nhập:</label>
				<input type="text"  class="textinput" name="username" required="">
				<label >Mật khẩu</label>
				<input type="password" class="textinput" name="password" required="">
				<label >Xác nhận mật khẩu</label>
				<input type="password" class="textinput" name="confirmpassword" required="">
				<label >Địa chỉ Facebook:</label>
				<input type="text" class="textinput" name="facebook">

			</div>
			
			<div class="form_contain2">
				<form>
				<label >Họ và tên:</label>
				<input type="text" class="textinput" name="name" required=""> 		
				<label >Ngày sinh:</label>
				<input type="date" name="Date" class="textinput" format required="" min="1960-01-01" max="2012-12-30" value="2012-01-01"> 
				<label>Giới tính:</label>
					<form>
						<input type="radio" name="gender" value="male"> <font color="white">Nam</font> 
						<input type="radio" name="gender" value="female" > <font color="white">Nữ</font> 
						<input type="radio" name="gender" value="other" > <font color="white">Khác</font> 
					</form>
				<label >Địa chỉ:</label>
				<input type="text" class="textinput" name="address" required="">
				<label >Điện thoại:</label>
				<input type="text" class="textinput" name="phone" required="">
				
				<label>Đôi dòng tâm sự:</label>
				<textarea name="text" class="textTalk" rows="4"></textarea>
				<input type="submit" name="accept" value="Tạo tài khoản">
				</form>
							
		</div>
	</div>
	
	
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

</body>
</html>

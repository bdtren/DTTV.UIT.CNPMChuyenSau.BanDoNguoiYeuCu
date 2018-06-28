<?php 
	session_start();
	$User = (isset($_SESSION['useradmin']))? $_SESSION['useradmin'] : '' ;
	$MaNV = (isset($_SESSION['manv']))? $_SESSION['manv'] : '' ; 
?>
<?php include "xulyphp/login.php"; ?>
<?php 
  $MaCV = (isset($_SESSION['macv']))? $_SESSION['macv'] : '' ; 
  
  if($MaCV!=''){
    switch ($MaCV) {
      case 'CV0002':header("Location: advertisement/index.php");
          break;
      case 'CV0003':header("Location: customercare/index.php");
          break;
      case 'CV0004':header("Location: censorship/index.php");
          break;
      case 'CV0005':header("Location: finance/index.php");
          break;
        default: break;
    }
  }
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">

<title>Admin | Welcome</title>
<meta name="author" content="DTTV" />
<meta name="description" content="Website bán đồ người yêu cũ." />
<link rel="icon" href="../../Images/Home/favicon.png"/>
<link rel="stylesheet" href="../css/bootstrap.min.css">
<link rel="stylesheet" href="../css/style-admin.css">
</head>
	
	
<body>
	<form class="form-signin" action="index.php" method="post" >
    <!-- <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" style="text-align: center;"> -->
    <h1 class="h3 mb-3 font-weight-normal">Đăng nhập vào trang quản trị admin</h1>
    <label class="sr-only">Tên đăng nhập</label>
    <input name="username" type="text" class="form-control" placeholder="Tên đăng nhập" required autofocus>
    <label for="inputPassword" class="sr-only">Mật khẩu</label>
    <input name="password" type="password" class="form-control" placeholder="Mật khẩu" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit" name="login">Đăng nhập</button>
    <p class="mt-5 mb-3 text-muted" style="text-align: center;">LoveMarket&copy;2018</p>
  </form>	
	
	<script src="../js/jquery-3.3.1.min.js"></script>
	<script src="../js/popper.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
</body>	
</html>
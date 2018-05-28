<?php
    session_start();
	if(isset($_SESSION['user']))
	{
		$UserName = $_SESSION['user'];
	}
	else
	{
		$UserName = '';
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./Images/Home/favicon.png" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Câu hỏi thường gặp</title>

    <!--**********************
		Include  CSS library
        **********************-->
            <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" type="text/css" href="./css/jquery.fullPage.css" />
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="./css/style-faq.css" />
    <!-- Icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<!-- font -->
	<link href="https://fonts.googleapis.com/css?family=Cormorant+Upright" rel="stylesheet"> 

</head>

<body>
	<?php include('header.php') ?>
	
     <div class="container-fluid">
      <div class="row">
		  <!-- Sidebar -->
    		<?php include('FAQ/sidebar.php') ?>

       		<!-- Question and Answer section -->
		  	<?php include('FAQ/ques-ans.php') ?>
	<?php include('footer.php'); ?>
   
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

   

    <!--Progressive Web App(PWA): install, service worker-->
    <!-- <script src="./check_browser.js"></script> -->
    <!-- <script src="./sw-register.js"></script>  -->
</body>

</html>
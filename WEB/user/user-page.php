<?php 
  session_start(); 
  $UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
  include("../xulyphp/account-detail.php");
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="../Images/Home/favicon.png"/>
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style-user-page.css"> 
    <!-- icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="manifest" href="../manifest.json">

</head>

  <body>

	 <?php
	  		include('modules-main-section/header.php');
	  ?>

	  <!-- Nội dung chính -->
    <section id="main">
        <div class="container-fluid">
            <div class="row">
				 <div class="col-md-3">
					 <?php
					 	include('modules-main-section/sidebar.php');
					 ?>
				</div>

				  <div class="col-md-6">
					  <?php
					  	include('modules-main-section/main-section.php');
					  ?>
				</div>
				
				<div class="col-md-3">
					  <?php
					  	include('modules-main-section/profile.php');
					  ?>
				</div>
            </div>
        </div>
    </section>
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
	  <script src="../js/discount-price.js"></script> 

    <!--Progressive Web App(PWA): install, service worker-->
	<script src="../sw-register.js"></script>

  </body>
</html>
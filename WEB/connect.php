<?php
	include "databaseconfig.php";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password,$databasename);

	if (!$conn) 
	{
		echo '<script language="javascript">';
		echo 'alert("kết nối csdl không thành công")';
		echo '</script>';
		die("Connection failed: " . mysqli_connect_error());
	}
	else
	{
		echo '<script language="javascript">';
		echo 'alert("ket noi csdl thanh cong")';
		echo '</script>';
	}

?>
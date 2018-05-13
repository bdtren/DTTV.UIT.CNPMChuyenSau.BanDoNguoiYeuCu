<?php
include "databaseconfig.php";
try{
	$options = array(
		PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
		);
	// Create connection
	$conn = new PDO("mysql:host=$host;dbname=$databasename", $username, $password,$options);
	// Check connection
	if (!$conn) 
	{
		echo '<script language="javascript">';
		echo 'alert("kết nối csdl không thành công")';
		echo '</script>';
	}
	else
	{
		//echo '<script language="javascript">';
		//echo 'alert("ket noi csdl thanh cong")';
		//echo '</script>';
	}
}
catch(PDOException $e) 
{
	echo $e->getMessage();
	exit();
}


?>
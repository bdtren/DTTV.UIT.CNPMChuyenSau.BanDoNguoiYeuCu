<?php
    include "databaseconfig.php";
    $conn = mysqli_connect($servername, $username, $password,$databasename);
    mysqli_set_charset($conn, "utf8");
    if (!$conn) 
    {
        echo '<script language="javascript">';
        echo 'alert("kết nối csdl không thành công")';
        echo '</script>';
        die("Connection failed: " . mysqli_connect_error());
    }
?>
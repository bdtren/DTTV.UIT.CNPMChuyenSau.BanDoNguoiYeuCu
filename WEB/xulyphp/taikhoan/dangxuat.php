<?php
    session_start(); 
    if (isset($_SESSION['username']))
    {
        unset($_SESSION['username']);
        echo "ahihi";
        header("Location: ../../index.php");
        // mở chức năng đăng nhập
    }
?>
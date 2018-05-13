<?php session_start(); 
 
if (isset($_SESSION['username'])){
    unset($_SESSION['username']); // xóa session login
    // ve trang chu
    <? header("Location: index.php");?>
}
?>
<?php
session_start();
    if (isset($_SESSION['user']))
    {
        unset($_SESSION['user']);
        unset($_SESSION['makh']);
        header("Location: ../index.php");
    }
?>
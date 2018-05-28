<?php
session_start();
    if (isset($_SESSION['user']))
    {
        unset($_SESSION['user']);
        echo "0ccho";
        header("Location: ../index.php");
    }
?>
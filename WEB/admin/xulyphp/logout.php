<?php
session_start();
    if (isset($_SESSION['useradmin']))
    {
        unset($_SESSION['useradmin']);
    }
    if (isset($_SESSION['manv']))
    {
        unset($_SESSION['manv']);
    }
    if (isset($_SESSION['macv']))
    {
        unset($_SESSION['macv']);
    }

    header("Location: ../index.php");
?>
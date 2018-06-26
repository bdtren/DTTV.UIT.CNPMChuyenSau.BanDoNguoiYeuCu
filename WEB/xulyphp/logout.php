<?php
session_start();
$username = (isset($_SESSION['user']))? $_SESSION['user'] : '' ;

$sql = "UPDATE TAIKHOAN
            SET KTONLINE = 0
            WHERE TENTK='$username'";
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {

    } else {
        echo ".1 Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);

    if (isset($_SESSION['user']))
    {
        unset($_SESSION['user']);
        if (isset($_SESSION['makh']))
        {
            unset($_SESSION['makh']);    
        }
        header("Location: ../index.php");
    }
?>
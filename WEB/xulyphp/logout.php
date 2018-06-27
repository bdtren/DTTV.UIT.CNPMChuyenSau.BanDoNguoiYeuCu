<?php
session_start();
$tenTK = (isset($_SESSION['user'])) ? $_SESSION['user'] : '';


if (isset($_SESSION['user'])) {
    //Cập nhật thông tin đã đăng xuất
    include './connect.php';
    $sql = "UPDATE TAIKHOAN
        SET KTONLINE = 0
        WHERE TENTK='$tenTK';";

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {

    } else {
        echo ".1 Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);

    //Xóa session
    unset($_SESSION['user']);
    if (isset($_SESSION['makh'])) {
        unset($_SESSION['makh']);
    }
    header("Location: ../index.php");
}

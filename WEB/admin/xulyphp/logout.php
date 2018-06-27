<?php
session_start();
$tenTK = (isset($_SESSION['useradmin'])) ? $_SESSION['useradmin'] : '';

if (isset($_SESSION['useradmin'])) {
    //Cập nhật thông tin đăng xuất
    $sql = "UPDATE TAIKHOAN
            SET KTONLINE = 0
            WHERE TENTK='$tenTK'";
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {

    } else {
        echo ".1 Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
    //Xóa session
    unset($_SESSION['useradmin']);
}
if (isset($_SESSION['manv'])) {
    unset($_SESSION['manv']);
}
if (isset($_SESSION['macv'])) {
    unset($_SESSION['macv']);
}

header("Location: ../index.php");
?>

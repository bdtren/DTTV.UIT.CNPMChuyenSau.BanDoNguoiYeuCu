<?php
session_start();
$tenTK = (isset($_SESSION['useradmin'])) ? $_SESSION['useradmin'] : '';

if (isset($_SESSION['useradmin'])) {
    //Cập nhật thông tin đăng xuất
    date_default_timezone_set('Asia/Ho_Chi_Minh');
    $day = date("Y/m/d H:i:s");
    $sql = "UPDATE TAIKHOAN
        SET KTONLINE = 0, TGDANGXUAT= '$day'
        WHERE TENTK='$tenTK';";
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

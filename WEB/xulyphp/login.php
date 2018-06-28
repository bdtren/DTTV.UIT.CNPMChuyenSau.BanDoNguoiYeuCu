<?php
if (isset($_POST['login'])) {
    include 'xulyphp/connect.php';
    //Lấy dữ liệu từ form
    $username = $_POST['username'];
    $password = md5($_POST['password']);

    $sql = "SELECT      *
                FROM        TAIKHOAN,KHACHHANG
                WHERE       TAIKHOAN.MATK = KHACHHANG.MATK
                AND         TENTK = '$username'
                AND         MATKHAU = '$password' ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 0) {
        echo '<script language="javascript"> alert("Tên đăng nhập hoặc mật khẩu không đúng") </script>';
    } else {
        $row = mysqli_fetch_assoc($result);
        if ($row['KTONLINE'] == 1&&empty($username)) {
            echo '<script language="javascript"> alert("Tài khoản này đã có người đăng nhập!") </script>';
            
        } else {
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $day = date("Y/m/d H:i:s");
            $sql = "UPDATE TAIKHOAN
                SET KTONLINE = 1, TGDANGNHAP = '$day'
                WHERE TENTK='$username'";
            mysqli_set_charset($conn, "utf8");
            if (mysqli_query($conn, $sql)) {

            } else {
                echo ".1 Error: " . $sql . "<br>" . mysqli_error($conn);
            }
            //Lưu session
            $_SESSION['user'] = $username;
            $_SESSION['makh'] = $row['MAKH'];

        }
    }
    mysqli_close($conn);
}

<?php
if (isset($_POST['login'])) {
    include '../xulyphp/connect.php';
    //Lấy dữ liệu từ form
    $username = addslashes($_POST['username']);
    $password = md5(addslashes($_POST['password']));

    //Kiểm tra đã nhập đủ tên đăng nhập với mật khẩu chưa
    //$password = md5($password);
    $sql = "SELECT      *
                FROM        TAIKHOAN,NHANVIEN
                WHERE       TAIKHOAN.MATK = NHANVIEN.MATK
                AND         TENTK = '$username'
                AND         MATKHAU = '$password' ";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) == 0) {
        echo '<script language="javascript"> alert("Tên đăng nhập hoặc mật khẩu không đúng") </script>';
    } else {
        //echo '<script language="javascript"> alert("đúng") </script>';

        $row = mysqli_fetch_assoc($result);
        if ($row['KTONLINE'] == 1 &&empty($username)) {
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

            //Lưu tên đăng nhập
            $_SESSION['useradmin'] = $username;
            $_SESSION['manv'] = $row['MANV'];
            $_SESSION['macv'] = $row['MACV'];
            switch ($row['MACV']) {
                case 'CV0002':header("Location: advertisement/index.php");
                    break;
                case 'CV0003':header("Location: customercare/index.php");
                    break;
                case 'CV0004':header("Location: censorship/index.php");
                    break;
                case 'CV0005':header("Location: finance/index.php");
                    break;
            }
        }
    }
    mysqli_close($conn);
}

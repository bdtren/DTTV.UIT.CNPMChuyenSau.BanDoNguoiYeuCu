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
    mysqli_close($conn);
}

?>
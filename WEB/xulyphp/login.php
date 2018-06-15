<?php
   if (isset($_POST['login'])) 
    {     
        include('xulyphp/connect.php');
        //Lấy dữ liệu từ form
        $username = $_POST['username'];
        $password = md5($_POST['password']);
        
        $sql = "SELECT      * 
                FROM        TAIKHOAN,KHACHHANG 
                WHERE       TAIKHOAN.MATK = KHACHHANG.MATK
                AND         TENTK = '$username'
                AND         MATKHAU = '$password' ";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) == 0) 
        {
            echo '<script language="javascript"> alert("Tên đăng nhập hoặc mật khẩu không đúng") </script>';
        }
        else
        {
            $row = mysqli_fetch_assoc($result);
            //Lưu session
            $_SESSION['user'] = $username;
            $_SESSION['makh'] = $row['MAKH'];
        }     
        mysqli_close($conn);
    }
?>
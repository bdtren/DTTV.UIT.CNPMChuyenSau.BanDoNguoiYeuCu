<?php
   if (isset($_POST['login'])) 
    {     
        include('xulyphp/connect.php');
        //Lấy dữ liệu từ form
        $username = addslashes($_POST['username']);
        $password = addslashes($_POST['password']);
        
        //Kiểm tra đã nhập đủ tên đăng nhập với mật khẩu chưa
        if (!$username || !$password) 
        {
            echo '<script language="javascript"> alert("Vui lòng nhập đầy đủ thông tin đăng nhập!") </script>';             
        }
        else
        {
            //$password = md5($password);
            $sql = "SELECT      * 
                    FROM        TAIKHOAN,KHACHHANG
                    WHERE       KHACHHANG.MATK=TAIKHOAN.MATK
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
                //Lưu tên đăng nhập 
                $_SESSION['user'] = $username;
                $_SESSION['makh'] = $row['MAKH'];
            }   
        }   
        mysqli_close($conn);
    }
?>
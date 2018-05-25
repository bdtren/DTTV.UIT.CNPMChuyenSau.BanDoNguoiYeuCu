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
                    FROM        TAIKHOAN 
                    WHERE       TENTK = '$username'
                    AND         MATKHAU = '$password' ";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) == 0) 
            {
                echo '<script language="javascript"> alert("Tên đăng nhập hoặc mật khẩu không đúng") </script>';
            }
            else
            {
                //Lưu tên đăng nhập 
                $_SESSION['user'] = $username;
                echo '<script language="javascript"> alert("Xin chào '.$username.'") </script>';
                // ẩn trang đăng nhập
            }   
        }   
        mysqli_close($conn);
    }
?>
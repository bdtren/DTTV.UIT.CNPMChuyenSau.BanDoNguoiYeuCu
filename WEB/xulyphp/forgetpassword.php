<?php
    if(isset($_POST['forgetpasssword']))
    {
        include('xulyphp/connect.php');
        //Lấy dữ liệu từ form
        $username           =   $_POST['username'];
        $email              =   $_POST['email'];
        $password           =   md5($_POST['password']);
        $confirmpassword    =   md5($_POST['confirm-password']);
        
        if($password != $confirmpassword)
        {
            echo '<script language="javascript"> alert("Mật khẩu phải giống nhau") </script>';
        }
        else
        {                
            //Kiểm tra tên đăng nhập email có đúng 
            $sql = "SELECT      TAIKHOAN.MATK AS TK 
                    FROM        TAIKHOAN,KHACHHANG 
                    WHERE       TAIKHOAN.MATK =   KHACHHANG.MATK 
                    AND         TENTK='$username' 
                    AND         EMAIL='$email' ";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) == 0) 
            {
                echo '<script language="javascript"> alert("Tên đăng nhập hoặc email không đúng") </script>';                
            }
            else
            {
                if($row = mysqli_fetch_assoc($result))
                    $MATK = $row['TK'];
                // nếu mọi thứ hợp lệ thì đổi mật khẩu ở csdl
                $sql = "UPDATE TAIKHOAN 
                        SET MATKHAU = '$password' 
                        WHERE MATK='$MATK' ";
                if(mysqli_query($conn, $sql))
                {  
                    echo '<script language="javascript">if(!alert("Đổi mật khẩu thành công")) document.location = "index.php" </script>';
                    //header("Location: ../index.php");
                }  
                else
                {
                    echo '<script language="javascript"> alert("không thể update mật khẩu") </script>'; 
                }                     
            }
        }
        mysqli_close($conn);  
    }
?>
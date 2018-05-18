<?php

    if(isset($_POST['accept']))
    {
        include "connect.php";
        //Lấy dữ liệu từ form
        $username = addslashes($_POST['username']);
        $email = addslashes($_POST['email']);
        $password = addslashes($_POST['password']);
        $confirmpassword = addslashes($_POST['confirm-password']);
        
        if (!$username || !$password || !$email || !$confirmpassword) 
        {
            echo '<script language="javascript"> alert("Vui lòng nhập đầy đủ thông tin!") </script>';
            $mysqli_close($conn);
        }
        else
        {
            if($password != $confirmpassword)
            {
                echo '<script language="javascript"> alert("Mật khẩu phải giống nhau") </script>';
                mysqli_close($conn);
            }
            else
            {                
                //Kiểm tra tên đăng nhập email có đúng 
                $sql = "SELECT TAIKHOAN.MATK AS TK FROM TAIKHOAN,KHACHHANG WHERE TAIKHOAN.MATK=KHACHHANG.MATK AND TENTK='$username' AND EMAIL='$email' ";
                $result = mysqli_query($conn, $sql);

                if (mysqli_num_rows($result) == 0) 
                {
                    echo '<script language="javascript"> alert("Tên đăng nhập hoặc email không đúng") </script>';
                    //echo "Tên đăng nhập này không tồn tại. Vui lòng kiểm tra lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
                    mysqli_close($conn);
                }
                else
                {
                    if($row = mysqli_fetch_assoc($result))
                        $MATK = $row['TK'];

                    // nếu mọi thứ hợp lệ thì đổi mật khẩu ở csdl
                    $sql = "UPDATE TAIKHOAN SET MATKHAU = '$password' WHERE MATK='$MATK' ";
                    // use exec() because no results are returned
                    if(mysqli_query($conn, $sql))
                    {
                        //echo '<script language="javascript"> alert("Đổi mật khẩu thành công") </script>';   
                        echo '<script language="javascript">if(!alert("Đổi mật khẩu thành công")) document.location = "index.php" </script>';
                        //header("Location: ../index.php");
                    }  
                    else
                    {
                        echo '<script language="javascript"> alert("không thể update mật khẩu") </script>'; 
                    }         
                    
                }
            }
        }   
    }

?>
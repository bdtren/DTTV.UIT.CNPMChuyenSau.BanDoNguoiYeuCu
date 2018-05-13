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
            $conn = null;
        }
        else
        {
            if($password != $confirmpassword)
            {
                echo '<script language="javascript"> alert("Mật khẩu phải giống nhau") </script>';
                $conn = null;
            }
            else
            {
                //Kiểm tra tên đăng nhập email có đúng 
                $sql = "SELECT TAIKHOAN.MATK AS TK FROM TAIKHOAN,KHACHHANG WHERE TAIKHOAN.MATK=KHACHHANG.MATK AND TENTK='$username' AND EMAIL='$email' ";
                $stmt = $conn->prepare($sql);
                //Thiết lập kiểu dữ liệu trả về
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
                
                if($stmt->execute())
                {
                    $count = $stmt->rowCount();
                    $result = $stmt->fetchAll();
                    foreach ($result as $row) 
                    {
                        $MATK = $row['TK'];
                    }
                    if ($count == 0) 
                    {
                        echo '<script language="javascript"> alert("Tên đăng nhập hoặc email không đúng") </script>';
                        $conn = null;
                    }
                    else
                    {
                        // nếu mọi thứ hợp lệ thì đổi mật khẩu ở csdl
                        $sql = "UPDATE TAIKHOAN SET MATKHAU = '$password' WHERE MATK='$MATK' ";
                        // use exec() because no results are returned
                        if($conn->exec($sql))
                        {
                            //echo '<script language="javascript"> alert("Đổi mật khẩu thành công") </script>';   
                            echo '<script language="javascript">if(!alert("Đổi mật khẩu thành công")) document.location = "index.php" </script>';
                            //header("Location: ../index.php");
                        }  
                        else
                        {
                            echo '<script language="javascript"> alert("không thể update mậtt khẩu") </script>'; 
                        }              
                    }
                }
                else
                {
                    echo '<script language="javascript"> alert("Không thể lấy tên đăng nhập , email") </script>'; 
                }       
            }
        }   
    }

?>
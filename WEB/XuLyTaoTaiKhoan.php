<?php

    if(isset($_POST['accept']))
    {
        include "XuLyChuoi.php";
        include "connect.php";
        //Lấy dữ liệu từ form
        $username        = addslashes($_POST['username']);
        $password        = addslashes($_POST['password']);
        $confirmpassword = addslashes($_POST['confirmpassword']);
        $email           = addslashes($_POST['email']);
        $facebook        = addslashes($_POST['facebook']);
        $name            = addslashes($_POST['name']);
        $date            = addslashes($_POST['Date']);
        $gender          = addslashes($_POST['gender']);
        $address         = addslashes($_POST['address']);
        $phone           = addslashes($_POST['phone']);
        $textTalk        = addslashes($_POST['text']);
        
        if (empty($username) || empty($password) || empty($confirmpassword) || empty($email) || empty($facebook) || empty($name) || empty($date) || empty($gender) || empty($address) || empty($phone) || empty($textTalk)  )
        {
            echo '<script language="javascript"> alert("Vui lòng nhập đầy đủ thông tin!") </script>';
            mysqli_close($conn);
            
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
                // Mã khóa mật khẩu
                $password = md5($password);
                       
                //Kiểm tra tên đăng nhập này đã có người dùng chưa
                //Kiểm tra email đã có người dùng chưa
                $sql1 = "SELECT TenTK FROM TAIKHOAN WHERE TenTK='$username' ";
                $sql2 = "SELECT EMAIL FROM KHACHHANG WHERE TenTK='$email' ";
                if (($count1 = @mysqli_num_rows( mysqli_query($conn, $sql1)) > 0) || ($count2 = @mysqli_num_rows(mysqli_query($conn, $sql2)) > 0)) 
                {
                    if($count1 > 0)
                        echo '<script language="javascript"> alert("Tên đăng nhập đã tồn tại") </script>';

                    if($count2 > 0)
                        echo '<script language="javascript"> alert("Email đã tồn tại") </script>';

                    mysqli_close($conn);      
                }
                else
                {
                    //lấy ra id cuối cùng và +1 ID Tai Khoan
                    $sql = "SELECT MaTK FROM TAIKHOAN ORDER BY MaTK DESC LIMIT 1";
                    $result = mysqli_query($conn, $sql);
                    if(!$result)
                        echo '<script language="javascript"> alert("loi ") </script>';
                    $count = mysqli_num_rows($result);
                    if ($count == 0) 
                    {
                        $MaTK = "TK0000";
                    }
                    else
                    {
                        if($row = mysqli_fetch_assoc($result))
                        {
                            $MaTK = TangMa($row['MaTK']);
                        }
                    }

                    //lấy ra id cuối cùng và +1 ID Khach Hang
                    $sql = "SELECT MaKH FROM KHACHHANG ORDER BY MaKH DESC LIMIT 1 ";
                    $result = mysqli_query($conn, $sql);
                    if (mysqli_num_rows($result) == 0) 
                    {
                        $MaKH = "KH0000";
                    }
                    else
                    {
                        if($row = mysqli_fetch_assoc($result))
                            $MaKH = TangMa($row['MaKH']);
                    }

                    switch($gender)
                    {
                        case 'male': $GT = 'Nam'; break;
                        case 'female': $GT = 'Nu'; break;
                        case 'other': $GT = 'Khac'; break;
                    }
                    //Lưu thông tin Tài khoản
                    $sql = "INSERT INTO TAIKHOAN (MaTK,TenTK,MatKhau) VALUE ('$MaTK','$username','$password')";
                    @mysqli_query($conn, $sql);              
                
                    // // Lưu thông tin khách hàng
                    $sql = "INSERT INTO KHACHHANG (MAKH, MATK, HOTEN, DIACHI, SDT,FACEBOOK, NGAYSINH, GIOITINH, EMAIL, AVATAR, TAMSU) VALUE ('$MaKH','$MaTK','$name','$address','$phone','$facebook','$date','$GT','$email','','$textTalk')";
                    @mysqli_query($conn, $sql);
                    
                    echo '<script language="javascript"> if(!alert("Tạo tài khoản thành công")) document.location = "index.php" </script>';
                }             
            }
        }   
    }

?>
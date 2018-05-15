<?php

    if(isset($_POST['accept']))
    {
        include "connect.php";
        //Lấy dữ liệu từ form
        $username        = addslashes($_POST['username']);
        $password        = addslashes($_POST['password']);
        $confirmpassword = addslashes($_POST['confirm-password']);
        $email           = addslashes($_POST['email']);
        $facebook        = addslashes($_POST['facebook']);
        $name            = addslashes($_POST['name']);
        $date            = addslashes($_POST['Date']);
        $gender          = addslashes($_POST['gender']);
        $address         = addslashes($_POST['address']);
        $phone           = addslashes($_POST['phone']);
        $textTail        = addslashes($_POST['textTail']);
        
        if (!$username || !$password || !$email || !$confirmpassword || !=$facebook || !=$name || !=$date  || !=$gender || !=$address || !=$phone || !=$textTail)  
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
                // Mã khóa mật khẩu
                $password = md5($password);
          
                //Kiểm tra tên đăng nhập này đã có người dùng chưa
                $sql = "SELECT TenTK FROM TAIKHOAN WHERE TenTK='$username' ";
                $stmt = $conn->prepare($sql);
                //Thiết lập kiểu dữ liệu trả về
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
                $stmt->execute();
                $count = $stmt->rowCount();
                if($count>0)
                {
                    echo '<script language="javascript"> alert("Tên đăng nhập đã tồn tại") </script>';
                    $conn = null;
                    exit;
                }
              
                //Kiểm tra email có đúng định dạng hay không
                if (!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", $email))
                {
                    echo '<script language="javascript"> alert("Nhập sai đinh dạng email") </script>';
                    $conn = null;
                    exit;
                }
              
                //Kiểm tra email đã có người dùng chưa
                $sql1 = "SELECT EMAIL FROM KHACHHANG WHERE TenTK='$email' ";
                $stmt1 = $conn->prepare($sql);
                //Thiết lập kiểu dữ liệu trả về
                $stmt1->setFetchMode(PDO::FETCH_ASSOC);
                $stmt1->execute();
                $count1 = $stmt1->rowCount();
                if($count1>0)
                {
                    echo '<script language="javascript"> alert("Email đã tồn tại") </script>';
                    $conn = null;
                    exit;
                }
              
                //Kiểm tra email có đúng định dạng hay không
                if (!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", $email))
                {
                    echo '<script language="javascript"> alert("Nhập sai đinh dạng email") </script>';
                    $conn = null;
                    exit;
                }
                
                //Kiểm tra dạng nhập vào của ngày sinh
                if (!ereg("^[0-9]+/[0-9]+/[0-9]{2,4}", $birthday))
                {
                    echo '<script language="javascript"> alert("Nhập sai định dạng ngay") </script>';
                    $conn = null;
                    exit;
                }
              
                //lấy ra id cuối cùng và +1 ID Tai Khoan
                $sql3 = "SELECT MaTK FROM TAIKHOAN ORDER BY MaTK DESC LIMIT 1  ";
                $stmt3 = $conn->prepare($sql3);
                //Thiết lập kiểu dữ liệu trả về
                $stmt3->setFetchMode(PDO::FETCH_ASSOC);
                $stmt3->execute();
                $count3 = $stmt3->rowCount();
                if($count3==0)
                {
                    echo '<script language="javascript"> alert("Du lieu trong") </script>';
                    $conn = null;
                    exit;
                }
                else
                {
                    $result = $stmt->fetchAll();
                    foreach ($result as $row) 
                    {
                        $bb = $row['MaTK'];
                    }
                    $n = 1 + substr( $bb,  2, 4);
                    $n = "TK"+$n;
                    echo $n;

                }

                //lấy ra id cuối cùng và +1 ID Khach Hang

                $sql4 = "SELECT MaKH FROM KHACHHANG ORDER BY MaKH DESC LIMIT 1 ";
                $stmt4 = $conn->prepare($sql4);
                //Thiết lập kiểu dữ liệu trả về
                $stmt4->setFetchMode(PDO::FETCH_ASSOC);
                $stmt4->execute();
                $count4 = $stmt4->rowCount();
                if($count4==0)
                {
                    substr( 'freetuts.net',  0, 8);
                    $conn = null;
                    exit;
                }
                else
                {

                }

                //Lưu thông tin thành viên vào bảng
                $sql1= ' INSERT INTO TAIKHOAN (MaTK,TenTK,MatKhau) VALUE ($n,$username,$password)';

                //$sql2= ' INSERT INTO KHACHHANG () VALUE ()';

                // use exec() because no results are returned
                $conn->exec($sql1);
                echo '<script language="javascript"> alert("tao tk thnah cong") </script>';
                
                //$conn->exec($sql2);
            }
        }   
    }

?>
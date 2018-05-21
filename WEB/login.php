<?php

//Xử lý đăng nhập
if (isset($_POST['login'])) 
{     
    include "connect.php";
    //Lấy dữ liệu từ form
    $username = addslashes($_POST['username']);
    $password = addslashes($_POST['password']);
     
    //Kiểm tra đã nhập đủ tên đăng nhập với mật khẩu chưa
    if (!$username || !$password) {
        echo '<script language="javascript"> alert("Vui lòng nhập đầy đủ thông tin đăng nhập!") </script>';
        //<a href='javascript: history.go(-1)'>Trở lại</a>";
        mysqli_close($conn);
    }
    else
    {
        // mã hóa pasword
        $password = md5($password);
     
        //Kiểm tra tên đăng nhập có tồn tại không
        $sql = "SELECT TenTK, MatKhau FROM TAIKHOAN WHERE TenTK='$username'";
        $result = mysqli_query($conn, $sql);
    
        if (mysqli_num_rows($result) == 0) {
            echo '<script language="javascript"> alert("Tên đăng nhập không đúng") </script>';
            //echo "Tên đăng nhập này không tồn tại. Vui lòng kiểm tra lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
            mysqli_close($conn);
        }
        else
        {
            if($row = mysqli_fetch_assoc($result))
                $mk = $row['MatKhau'];
    
            //So sánh 2 mật khẩu có trùng khớp hay không
            if ($password != $mk) 
            {
                echo '<script language="javascript"> alert("Mật khẩu không đúng") </script>';
                //echo "Mật khẩu không đúng. Vui lòng nhập lại $password wfwf $mk  . <a href='javascript: history.go(-1)'>Trở lại</a>";
                mysqli_close($conn);
            }
            else
            {
            //Lưu tên đăng nhập
            $_SESSION['username'] = $username;
            echo '<script language="javascript"> alert("Xin chào '.$username.'") </script>';
            //echo "Xin chào " . $username . ". Bạn đã đăng nhập thành công. <a href='/'>Về trang chủ</a>";
            mysqli_close($conn);
            }
        }
    
    }   
}

?>
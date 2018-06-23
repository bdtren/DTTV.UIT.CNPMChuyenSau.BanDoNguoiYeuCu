<?php
function TangMa($Ma)
{
    if (!empty($Ma)) {
        $tukhoa = substr($Ma, 0, 2);
        $m = substr($Ma, 2);
        $z = 1 + $m;
        $MaMoi = '';
        if ($z < 10) {
            $MaMoi = $tukhoa . "000" . $z;
        } else if ($z < 100) {
            $MaMoi = $tukhoa . "00" . $z;
        } else if ($z < 1000) {
            $MaMoi = $tukhoa . "0" . $z;
        } else {
            $MaMoi = $tukhoa . $z;
        }
        return $MaMoi;
    }
    return null;
}
if (isset($_POST['signup'])) {
    include 'xulyphp/connect.php';
    //Lấy dữ liệu từ form
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    $confirmpassword = md5($_POST['confirmpassword']);
    $email = $_POST['email'];
    $facebook = $_POST['facebook'];
    $name = $_POST['name'];
    $date = $_POST['Date'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $textTalk = $_POST['text'];

    if ($password != $confirmpassword) {
        echo '<script language="javascript"> alert("Mật khẩu phải giống nhau") </script>';
    } else {
        //Kiểm tra tên đăng nhập này đã có người dùng chưa
        //Kiểm tra email đã có người dùng chưa
        $sql1 = "SELECT * FROM TAIKHOAN WHERE TENTK = '$username' ";
        $sql2 = "SELECT * FROM KHACHHANG WHERE EMAIL = '$email' ";


        if (($count1 = @mysqli_num_rows(mysqli_query($conn, $sql1)) > 0) || ($count2 = @mysqli_num_rows(mysqli_query($conn, $sql2)) > 0)) {
            if ($count1 > 0) {
                echo '<script language="javascript"> alert("Tên đăng nhập đã tồn tại") </script>';
            }

            if ($count2 > 0) {
                echo '<script language="javascript"> alert("Email đã tồn tại") </script>';
            }

        } else {
            //lấy ra id cuối cùng và +1 ID Tai Khoan
            $sql = "SELECT MATK FROM TAIKHOAN ORDER BY MATK DESC LIMIT 1";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) == 0) {
                $MaTK = "TK0000";
            } else {
                if ($row = mysqli_fetch_assoc($result)) {
                    $MaTK = TangMa($row['MATK']);
                }
            }

            //lấy ra id cuối cùng và +1 ID Khach Hang
            $sql = "SELECT MAKH FROM KHACHHANG ORDER BY MAKH DESC LIMIT 1 ";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) == 0) {
                $MaKH = "KH0000";
            } else {
                if ($row = mysqli_fetch_assoc($result)) {
                    $MaKH = TangMa($row['MAKH']);
                }

            }

            switch ($gender) {
                case 'male':$GT = 'Nam';
                    break;
                case 'female':$GT = 'Nu';
                    break;
                case 'other':$GT = 'Khac';
                    break;
            }

            //Thêm avatar vào CSDL
            $location = "";
            $pureLocation="";
            $srcName = $_FILES["anhDaiDien"]["name"];
            if ($srcName != "") {
                $test = explode(".", $srcName);
                $ext = end($test);
                $fname = 'User_'.$username . '-' .$MaKH.'.'.$ext;
                $fname = str_replace(';', '', $fname);
                $location = './Images/user/' . $fname;
                $pureLocation = './Images/user/' . $fname;
                move_uploaded_file($_FILES["anhDaiDien"]["tmp_name"], $location);
            }

            

            //Lưu thông tin Tài khoản
            $sql = "INSERT INTO TAIKHOAN (MATK,TENTK,MATKHAU) VALUE ('$MaTK','$username','$password')";
            @mysqli_query($conn, $sql);

            // Lưu thông tin khách hàng
            $sql = "INSERT INTO KHACHHANG (MAKH, MATK, HOTEN, DIACHI, SDT,FACEBOOK, NGAYSINH, GIOITINH, EMAIL, AVATAR, TAMSU) VALUE ('$MaKH','$MaTK','$name','$address','$phone','$facebook','$date','$GT','$email','$pureLocation','$textTalk')";
            @mysqli_query($conn, $sql);

            echo '<script language="javascript"> if(!alert("Tạo tài khoản thành công")) document.location = "index.php" </script>';
        }
    }
    mysqli_close($conn);
}

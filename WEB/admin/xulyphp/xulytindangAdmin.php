<?php
//Tải thông tin khách hàng
function TaiThongTinKhachHang($MAKH)
{
    $a = null;
    include 'connect.php';
    $sql = "SELECT      *
                FROM        KHACHHANG,TAIKHOAN
                WHERE       KHACHHANG.MATK=TAIKHOAN.MATK
                AND         MAKH = '$MAKH'";
    if ($result = mysqli_query($conn, $sql)) {
        if ($row = mysqli_fetch_assoc($result)) {
            $a = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

// Tải danh sách tin đăng đã đăng theo mã khách hàng
function TaiDanhSachTinDang($MAKH)
{
    $a = null;
    include 'connect.php';
    $sql = "SELECT      *, TINDANG.TAMSU AS TSTD, KHACHHANG.TAMSU AS TSKH
                 FROM        TINDANG,KHACHHANG
                 WHERE       TINDANG.MAKH=KHACHHANG.MAKH
                 AND         TINDANG.MAKH = '$MAKH'
                 AND         TINDANG.TINHTRANGTIN = 'da dang'
                 ORDER BY    NGAYDANG DESC";
    $count = mysqli_num_rows(mysqli_query($conn, $sql));
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

// Tải danh sách tin đăng đã ẩn theo mã khách hàng
function TaiDanhSachTinAn($MAKH)
{
    $a = null;
    include 'connect.php';
    $sql = "SELECT      *, TINDANG.TAMSU AS TSTD, KHACHHANG.TAMSU AS TSKH
                 FROM        TINDANG,KHACHHANG
                 WHERE       TINDANG.MAKH=KHACHHANG.MAKH
                 AND         TINDANG.MAKH = '$MAKH'
                 AND         TINDANG.TINHTRANGTIN = 'da an'
                 ORDER BY    NGAYDANG DESC";
    $count = mysqli_num_rows(mysqli_query($conn, $sql));
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}


//Hàm xử lý phụ//
//Chuyển chuỗi thành mảng
function Chuoi2Mang($string)
    {
        if(!empty($string))
        {
            return explode(';', $string);
        }
        return null;
    }
?>
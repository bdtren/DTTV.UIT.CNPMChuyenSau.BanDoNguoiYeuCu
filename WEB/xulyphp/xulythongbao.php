<?php

// tai thong bao
function TaiKhuyenMai()
{
    $a = null; 
    include('connect.php');
    $sql = "SELECT      *
            FROM        KHUYENMAI";
    if($result = mysqli_query($conn, $sql)) 
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $a[] = $row;
        } 
        $a['dem'] = mysqli_num_rows($result);
    }
    mysqli_close($conn);
    return $a;
}

// tai thong bao
function TaiThongBao($MAKH)
{
    $a = null; 
    include('connect.php');
    $date = date("Y-m-d");
    $sql = "SELECT      *
            FROM        KH_THEODOI_KH,TINDANG,KHACHHANG
            WHERE       KH_THEODOI_KH.MAKH = '$MAKH'
            AND         KHACHHANG.MAKH = TINDANG.MAKH
            AND         KH_THEODOI_KH.MAKHTD = TINDANG.MAKH
            AND         TINHTRANGTIN = 'da dang'";
           // AND         NGAYDT < '$date' ";
    if($result = mysqli_query($conn, $sql)) 
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $a[] = $row;
        } 
        $a['dem'] = mysqli_num_rows($result);
    }
    mysqli_close($conn);
    return $a;
}
function ChuoiToMang($string)
    {
        if(!empty($string))
        {
            return explode(';', $string);
        }
        return null;
    }
?>
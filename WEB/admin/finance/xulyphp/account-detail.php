<?php
    function TaiChiTietKhachHang($UserName)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KHACHHANG,TAIKHOAN
                WHERE       KHACHHANG.MATK=TAIKHOAN.MATK
                AND         TENTK = '$UserName'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            if($row = mysqli_fetch_assoc($result))
            {
                $a = $row;
            } 
        }
        mysqli_close($conn);
        return $a;
    }
?>
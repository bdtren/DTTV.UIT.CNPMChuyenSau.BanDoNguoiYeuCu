<?php
    // kiem tra theo doi
    function KiemTraTheoDoi($MAKH1,$MAKH2)
    {
        include('connect.php');
        $sql = "SELECT      *
                FROM        KH_THEODOI_KH
                WHERE       MAKH = '$MAKH1'
                AND         KHA_MAKH = '$MAKH2'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            mysqli_close($conn);
            return mysqli_num_rows($result);
        }
        else
        {
            mysqli_close($conn);
            return 0;
        }     
    }
    
    // đếm người đang theo dõi mình
    function DemTheoDoi($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KH_THEODOI_KH
                WHERE       MAKH = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }
    // chặn theo dõi
    function ChanTheoDoi($MAKH1,$MAKH2)
    {
        include('connect.php');
        $sql = "DELETE 
                FROM        KH_THEODOI_KH
                WHERE       KHA_MAKH = '$MAKH1'
                AND         MAKH = '$MAKH2'";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    }
    // bỏ theo dõi
    function BoTheoDoi($MAKH1,$MAKH2)
    {
        include('connect.php');
        $sql = "DELETE 
                FROM        KH_THEODOI_KH
                WHERE       KHA_MAKH = '$MAKH1'
                AND         MAKH = '$MAKH2'";
        mysqli_query($conn, $sql); 
        mysqli_close($conn);
    }
    // thêm theo dõi
    function ThemTheoDoi($MAKH1,$MAKH2)
    {
        include('connect.php');
        $sql = "INSERT INTO KH_THEODOI_KH (KHA_MAKH,MAKH) VALUE ($MAKH1,$MAKH2)";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    }

    // bao cao nguoi dung
    function BaoCao($MAKH1,$MAKH2)
    {
        $a = null; 
        include('connect.php');
        $sql = "INSERT INTO 
                FROM        KHACHHANG,KH_THEODOI_KH
                WHERE       KHACHHANG.MAKH=KH_THEODOI_KH.MAKH
                AND         KH_THEODOI_KH.KHA_MAKH = '$MAKH'";
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
?>
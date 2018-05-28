<?php
    function TimKiemSanPham( $index, $DanhMuc = '', $Search = '', $Sort = 'MATD', $SortType = 'ASC' )
    {
        // chuyển chuỗi tìm kiếm về chữ thường
        $st=strtolower($Search);
        $sql="SELECT * FROM TINDANG WHERE LCASE(TIEUDE) LIKE '%$st%' ";
        $a = null;
        include('xulyphp/connect.php');
        if(empty($DanhMuc))
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         LOAITIN = ''
                    AND         TIEUDE LIKE '%$str%'
                    ORDER BY    $Sort $SortType
                    LIMIT       $index,6";
        }
        else
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         MADM = '$DanhMuc'
                    AND         LOAITIN = ''
                    AND         TIEUDE LIKE '%$str%'
                    ORDER BY    $Sort $SortType
                    LIMIT       $index,6";     
        }
        if($result = mysqli_query($conn, $sql))
        {
            while($row = mysqli_fetch_assoc($result))
            {                    
                $a[] = $row;
            } 
        }
        mysqli_close($conn);
        return $a;
    }

?>
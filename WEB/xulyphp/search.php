<?php
    function TimKiemSanPham( $index, $Search = '', $Sort = 'MATD', $SortType = 'ASC' )
    {
        // chuyển chuỗi tìm kiếm về chữ thường
        $st=strtolower($Search);
        $sql="SELECT * FROM TINDANG WHERE LCASE(TIEUDE) LIKE '%$st%' ";
        $a = null;
        include('xulyphp/connect.php');
        $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                FROM        TINDANG,KHACHHANG 
                WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                AND         TINHTRANGTIN = 'da dang'
                AND         LOAITIN = ''
                AND         TIEUDE LIKE '%$st%'
                ORDER BY    $Sort $SortType
                LIMIT       $index,9";
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
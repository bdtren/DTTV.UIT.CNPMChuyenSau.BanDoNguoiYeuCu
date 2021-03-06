<?php
	function TangMa($Ma)
    {
        if(!empty($Ma))
        {
            $tukhoa = substr($Ma,0,2);
            $m = substr($Ma,2);
            $z = 1 + $m;
            $MaMoi = '';
            if($z<10)
            {
                $MaMoi = $tukhoa."000".$z;
            } 
            else if($z<100)
            {
                    $MaMoi = $tukhoa."00".$z;
            }
            else if($z<1000)
            {
                $MaMoi = $tukhoa."0".$z;
            }
            else
            {
                $MaMoi = $tukhoa.$z;
            }
            return $MaMoi;
        }
        return null;       
    }
    
    function Chuoi2Mang($string)
    {
        if(!empty($string))
        {
            return explode(';', $string);
        }
        return null;
    }

    function TimKiemSanPham( $index, $Search, $Sort = 'MATD', $SortType = 'ASC' )
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

    function DemSanPhamTimKiem($Search)
    {
        // chuyển chuỗi tìm kiếm về chữ thường
        $st=strtolower($Search);
        $sql="SELECT * FROM TINDANG WHERE LCASE(TIEUDE) LIKE '%$st%' ";
        $a = null;
        include('xulyphp/connect.php');
        $sql = "SELECT      *
                FROM        TINDANG
                WHERE       TINHTRANGTIN = 'da dang'
                AND         TIEUDE LIKE '%$st%' ";
        if($count = mysqli_num_rows(mysqli_query($conn, $sql)))
        {
            mysqli_close($conn);
            return $count;
        }
        else
        {
            mysqli_close($conn);
            return 0;
        }
    }

    function DemSanPham($DanhMuc)
    {
        include('xulyphp/connect.php');
        if($DanhMuc == 'DM0000' )
        {
           $sql = "SELECT MATD FROM TINDANG WHERE TINHTRANGTIN = 'da dang'  AND  LOAITIN = '' ";
        }
        else
        {
            $sql = "SELECT MATD FROM TINDANG WHERE TINHTRANGTIN = 'da dang' AND MADM = '$DanhMuc'  AND  LOAITIN = '' ";
        }
        if($count = mysqli_num_rows(mysqli_query($conn, $sql)))
        {
            mysqli_close($conn);
            return $count;
        }
        else
        {
            mysqli_close($conn);
            return 0;
        }
    }

    function TaiSanPhamHot($DanhMuc)
    {   
        $a = null;     
        include('xulyphp/connect.php');
        if( $DanhMuc == 'DM0000')
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         ((LOAITIN LIKE 'ribbon-discount%') OR (LOAITIN LIKE 'ribbon-new') OR (LOAITIN LIKE 'ribbon-hot'))
                    ORDER BY    RAND()
                    LIMIT       3";
        }
        else
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         ((LOAITIN LIKE 'ribbon-discount%') OR (LOAITIN LIKE 'ribbon-new') OR (LOAITIN LIKE 'ribbon-hot'))
                    AND         MADM = '$DanhMuc'
                    ORDER BY    RAND()
                    LIMIT       3";   
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

    // hàm load 6 sản phẩm tin thường
    function TaiSanPhamThuong( $index, $DanhMuc , $Sort = 'MATD', $SortType = 'ASC' )
    {
        $a = null;
        include('xulyphp/connect.php');
        if($DanhMuc == 'DM0000')
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         LOAITIN = ''
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

    // load chi tiet san pham
    function TaiChiTietSanPham($MATD)
    {
        $a = null;
        include('xulyphp/connect.php');
        $sql = "SELECT      *
                FROM        TINDANG,KHACHHANG 
                WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                AND         MATD = '$MATD'";
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

    function TaiDanhMuc()
    {
        $a = null; 
        include('connect.php');  
        $sql = "SELECT      * 
                FROM        DANHMUC 
                ORDER BY    MADM ASC";
        if($result = mysqli_query($conn, $sql))
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $a[]= $row;
            }            
        }
        mysqli_close($conn);
        return $a;
    }
     
    function TaiThongTinKhachHang($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KHACHHANG,TAIKHOAN
                WHERE       KHACHHANG.MATK=TAIKHOAN.MATK
                AND         MAKH = '$MAKH'";
        mysqli_set_charset($conn, "utf8");
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

    // Tải danh sách tin đăng đã đang theo mã khách hàng
    function TaiDanhSachTin($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      *, TINDANG.TAMSU AS TSTD, KHACHHANG.TAMSU AS TSKH
                FROM        TINDANG,KHACHHANG 
                WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                AND         TINDANG.MAKH = '$MAKH'
                ORDER BY    NGAYDANG DESC";
        $count = mysqli_num_rows(mysqli_query($conn, $sql));
        if ($result = mysqli_query($conn, $sql)) 
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
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

    function TimKiemSanPham( $index, $Type ='', $Search, $Sort = 'NGAYDANG', $SortType = 'ASC' )
    {
        $Sort = 'TINDANG.'.$Sort; 
        if(empty($Type))
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH = KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         TIEUDE LIKE '%$Search%'
                    ORDER BY    $Sort $SortType
                    LIMIT       $index,9";
        }
        else
        {
            $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                    FROM        TINDANG,KHACHHANG 
                    WHERE       TINDANG.MAKH = KHACHHANG.MAKH 
                    AND         TINHTRANGTIN = 'da dang'
                    AND         TIEUDE LIKE '%$Search%'
                    AND         LOAITD = '$Type'
                    ORDER BY    $Sort $SortType
                    LIMIT       $index,9";
        }
        $a = null;
        include('xulyphp/connect.php');
        
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

    function DemSanPhamTimKiem($Search, $Type)
    {
        $a = null;
        include('xulyphp/connect.php');
        if(empty($Type))
        {
            $sql = "SELECT      *
                    FROM        TINDANG
                    WHERE       TINHTRANGTIN = 'da dang'
                    AND         TIEUDE LIKE '%$Search%' ";
        }
        else
        {   
            $sql = "SELECT      *
                    FROM        TINDANG
                    WHERE       TINHTRANGTIN = 'da dang'
                    AND         TIEUDE LIKE '%$Search%'
                    AND         LOAITD = '$Type' ";
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

    function DemSanPham($DanhMuc, $Type)
    {
        include('xulyphp/connect.php');
        if($DanhMuc == 'DM0000' )
        {
            if(empty($Type))
            {
                $sql = "SELECT       MATD 
                FROM        TINDANG 
                WHERE       TINHTRANGTIN = 'da dang'  
                AND         LOAITIN = 'ribbon-normal' ";
            }
            else
            {
                $sql = "SELECT       MATD 
                FROM        TINDANG 
                WHERE       TINHTRANGTIN = 'da dang'  
                AND         LOAITIN = 'ribbon-normal'
                AND         LOAITD = '$Type'  ";
            }

        }
        else
        {
            if(empty($Type))
            {
                $sql = "SELECT      * 
                        FROM        TINDANG,TD_THUOC_DM 
                        WHERE       TINHTRANGTIN = 'da dang'
                        AND         TINDANG.MATD = TD_THUOC_DM.MATD 
                        AND         MADM = '$DanhMuc'  
                        AND         LOAITIN = 'ribbon-normal' ";
            }
            else
            {
                $sql = "SELECT      * 
                        FROM        TINDANG,TD_THUOC_DM 
                        WHERE       TINHTRANGTIN = 'da dang'
                        AND         TINDANG.MATD = TD_THUOC_DM.MATD 
                        AND         MADM = '$DanhMuc'  
                        AND         LOAITD = '$Type'
                        AND         LOAITIN = 'ribbon-normal' ";
            }
            
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

    function TaiSanPhamHot($DanhMuc, $Type)
    {   
        $a = null;     
        include('xulyphp/connect.php');
        if( $DanhMuc == 'DM0000')
        {
            if(empty($Type))
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG 
                        WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                        AND         TINHTRANGTIN = 'da dang'
                        AND         LOAITIN IN ('ribbon-discount', 'ribbon-new', 'ribbon-hot')
                        ORDER BY    RAND()
                        LIMIT       3";
            }
            else
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG 
                        WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                        AND         TINHTRANGTIN = 'da dang'
                        AND         LOAITD = '$Type'
                        AND         LOAITIN IN ('ribbon-discount', 'ribbon-new', 'ribbon-hot')
                        ORDER BY    RAND()
                        LIMIT       3";
            }

        }
        else
        {
            if(empty($Type))
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                FROM        TINDANG,KHACHHANG,TD_THUOC_DM  
                WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                AND         TINHTRANGTIN = 'da dang'
                AND         TD_THUOC_DM.MATD = TINDANG.MATD
                AND         LOAITIN IN ('ribbon-discount', 'ribbon-new', 'ribbon-hot')
                AND         MADM = '$DanhMuc'
                ORDER BY    RAND()
                LIMIT       3";   
            }
            else
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG ,TD_THUOC_DM 
                        WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                        AND         TINHTRANGTIN = 'da dang'
                        AND         TD_THUOC_DM.MATD = TINDANG.MATD
                        AND         LOAITD = '$Type'
                        AND         LOAITIN IN ('ribbon-discount', 'ribbon-new', 'ribbon-hot')
                        AND         MADM = '$DanhMuc'
                        ORDER BY    RAND()
                        LIMIT       3";   
            }         
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
    function TaiSanPhamThuong( $index, $Type, $DanhMuc , $Sort = 'NGAYDANG', $SortType = 'ASC' )
    {
        $Sort = 'TINDANG.'.$Sort; 
        $a = null;
        include('xulyphp/connect.php');
        if($DanhMuc == 'DM0000')
        {
            if(empty($Type))
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG 
                        WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                        AND         TINHTRANGTIN = 'da dang'
                        AND         LOAITIN = 'ribbon-normal'
                        ORDER BY    $Sort $SortType
                        LIMIT       $index,6";
            }
            else
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG 
                        WHERE       TINDANG.MAKH=KHACHHANG.MAKH 
                        AND         TINHTRANGTIN = 'da dang'
                        AND         LOAITD = '$Type'
                        AND         LOAITIN = 'ribbon-normal'
                        ORDER BY    $Sort $SortType
                        LIMIT       $index,6";
            }
            
        }
        else
        {
            if(empty($Type))
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG,TD_THUOC_DM 
                        WHERE       TINDANG.MAKH = KHACHHANG.MAKH 
                        AND         TD_THUOC_DM.MATD = TINDANG.MATD
                        AND         TINHTRANGTIN = 'da dang'
                        AND         MADM = '$DanhMuc'
                        AND         LOAITIN = 'ribbon-normal'
                        ORDER BY    $Sort $SortType
                        LIMIT       $index,6";    
            }
            else
            {
                $sql = "SELECT      *, TINDANG.TAMSU AS TSTD
                        FROM        TINDANG,KHACHHANG,TD_THUOC_DM 
                        WHERE       TINDANG.MAKH = KHACHHANG.MAKH 
                        AND         TD_THUOC_DM.MATD = TINDANG.MATD
                        AND         TINHTRANGTIN = 'da dang'
                        AND         MADM = '$DanhMuc'
                        AND         LOAITD = '$Type'
                        AND         LOAITIN = 'ribbon-normal'
                        ORDER BY    $Sort $SortType
                        LIMIT       $index,6";     
            }          
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

    //Hàm lấy tên danh mục theo mã danh mục
    function layTenDanhMuc($DanhMuc)
    {
        $a = null;
        include('xulyphp/connect.php');
        $sql = "SELECT TENDM FROM DANHMUC
                WHERE MADM='$DanhMuc'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            if($row = mysqli_fetch_assoc($result))
            {
                $a = $row;
            } 
        }
        mysqli_close($conn);
        return $a["TENDM"];
    }

    // load chi tiet san pham
    function TaiChiTietSanPham($MATD)
    {
        $a = null;
        include('xulyphp/connect.php');
        $sql = "SELECT      *, TINDANG.TAMSU as TSTD
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
                AND         TINDANG.TINHTRANGTIN = 'da dang'
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

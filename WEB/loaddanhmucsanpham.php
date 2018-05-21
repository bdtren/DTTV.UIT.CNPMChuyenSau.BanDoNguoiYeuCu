<?php
    header('Content-Type: text/html; charset=utf-8');
    //Bien toan cuc mac dinh

    if(isset($_GET['numpage']))
    {
        $numpage = $_GET['numpage'];
    }
    else
    {
        $numpage = 0;
    }
    
    if(isset($_GET['DanhMuc']))
    {
        $DanhMuc = $_GET['DanhMuc'];
    }
    else
    {
        $DanhMuc = '';
    }
    // Hàm sử lý chuỗi hình ảnh
    function XuLyAnh($string)
    {
        if(!empty($string))
        {
            return explode(';', $string);
        }
        return null;
    }

    // hàm đếm sản phẩm
    function DemSp($DanhMuc)
    {
        include "connect.php";
        $count = 0;
        if(empty($DanhMuc))
        {
            $sql = "SELECT MATD FROM TINDANG WHERE TINHTRANGTIN = 'da dang' ";
        }
        else
        {
            $sql = "SELECT MATD FROM TINDANG WHERE TINHTRANGTIN = 'da dang' AND MADM = '$DanhMuc'  ";
        }
        $count = mysqli_num_rows(mysqli_query($conn, $sql));
        mysqli_close($conn);
        if ( $count == 0) 
        {
            return 0;
        }
        else
        {
            return CEIL($count/6);
        }
    }

    // load sap hot
    function LoadSpHot($DanhMuc = '')
    {        
        include "connect.php";
        if(empty($DanhMuc))
        {
            $sql = "SELECT  MATD,TIEUDE,GIABAN,NGAYDANG,TINDANG.TAMSU AS TS,HINHANH,LOAITD,LOAITIN,HOTEN
                    FROM    TINDANG,KHACHHANG 
                    WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                    AND     TINHTRANGTIN = 'da dang'
                    AND     ((LOAITIN LIKE   'ribbon-discount%') OR (LOAITIN LIKE   'ribbon-new') OR (LOAITIN LIKE   'ribbon-hot'))
                    ORDER BY RAND()
                    LIMIT   3";
        }
        else
        {
            $sql = "SELECT  MATD,TIEUDE,GIABAN,NGAYDANG,TINDANG.TAMSU AS TS,HINHANH,LOAITD,LOAITIN,HOTEN
                    FROM    TINDANG,KHACHHANG 
                    WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                    AND     TINHTRANGTIN = 'da dang'
                    AND     ((LOAITIN LIKE   'ribbon-discount%') OR (LOAITIN LIKE   'ribbon-new') OR (LOAITIN LIKE   'ribbon-hot'))
                    AND     MADM = '$DanhMuc'
                    ORDER BY RAND()
                    LIMIT 3";   
        }       
        $a = array();
        $i = 0;
        mysqli_set_charset($conn, "utf8");
        if($result = mysqli_query($conn, $sql))
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $hb = XuLyAnh($row['LOAITIN']);
                $ha = XuLyAnh($row['HINHANH']);
                if($row['LOAITD']=='Ban')
                    $LOAITD='Cần Bán';
                else
                    $LOAITD='Cần Mua';
                $a[$i] = array('MATD' => $row['MATD'], 'TIEUDE' => $row['TIEUDE'],'GIABAN' => $row['GIABAN'], 'HOTEN' => $row['HOTEN'],'LOAITD' => $LOAITD,'NGAYDANG' => $row['NGAYDANG'],'HINHANH' => $ha[0], 'LOAITIN'=> $hb[0] ,'TAMSU' => $row['TS']);
                $i++;
            }
        }
        mysqli_close($conn);
        return $a;
    }

    // hàm load 6 sản phẩm tin thường
    function LoadSP( $index, $DanhMuc = '')
    {
        include "connect.php";
        // nếu Danh muc rỗng thì load 6 tin thường
        if(empty($DanhMuc))
        {
            $sql = "SELECT  MATD,TIEUDE,GIABAN,HOTEN,LOAITD,NGAYDANG,HINHANH,TINDANG.TAMSU AS TS
                    FROM    TINDANG,KHACHHANG 
                    WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                    AND     TINHTRANGTIN = 'da dang'
                    AND     LOAITIN = ''
                    ORDER BY MATD
                    LIMIT   $index,6";
        }
        else
        {
            $sql = "SELECT  MATD,TIEUDE,GIABAN,HOTEN,LOAITD,NGAYDANG,HINHANH,TINDANG.TAMSU AS TS
                    FROM    TINDANG,KHACHHANG 
                    WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                    AND     TINHTRANGTIN = 'da dang'
                    AND     MADM = '$DanhMuc'
                    AND     LOAITIN = ''
                    ORDER BY MATD
                    LIMIT   $index,6";     
        }
        // mang luu 9 san pham
        $a = array();
        $i = 0;
        mysqli_set_charset($conn, "utf8");
        if($result = mysqli_query($conn, $sql))
        {
            while($row = mysqli_fetch_assoc($result))
            {
                // mảng lưu mảng hình ảnh
                $ha = XuLyAnh($row['HINHANH']);
                
                if($row['LOAITD']=='Ban')
                    $LOAITD='Cần Bán';
                else
                    $LOAITD='Cần Mua';
                    
                $a[$i] = array('MATD' => $row['MATD'],'TIEUDE' => $row['TIEUDE'],'GIABAN' => $row['GIABAN'], 'HOTEN' => $row['HOTEN'],'LOAITD' => $LOAITD,'NGAYDANG' => $row['NGAYDANG'],'HINHANH' => $ha[0] ,'TAMSU' => $row['TS']);
                $i++;
            } 
        }
        mysqli_close($conn);
        return $a;
    }

    // load chi tiet san pham
    function LoadChiTietSP($MATD)
    {
        include "connect.php";
        $sql = "SELECT  *
                FROM    TINDANG,KHACHHANG 
                WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                AND     MATD = '$MATD'";
        $a = array();
        mysqli_set_charset($conn, "utf8");
        if ($result = mysqli_query($conn, $sql)) 
        {
            if($row = mysqli_fetch_assoc($result))
            {
                if($row['LOAITD']=='Ban')
                   $LOAITD='Cần Bán';
                else
                   $LOAITD='Cần Mua';
                $a = array('MAKH' => $row['MAKH'],'SDT' => $row['SDT'], 'EMAIL' => $row['EMAIL'],'FACEBOOK' => $row['FACEBOOK'],'TINHTRANGMH' => $row['TINHTRANGMH'], 'DIACHI' => $row['DIACHI'], 'PTGD'=>$row['PTGD'],'MATD' => $row['MATD'],'TIEUDE' => $row['TIEUDE'],'GIABAN' => $row['GIABAN'], 'HOTEN' => $row['HOTEN'],'LOAITD' => $LOAITD,'NGAYDANG' => $row['NGAYDANG'],'HINHANH' => $row['HINHANH'] ,'TAMSU' => $row['TAMSU']);
            } 
        }
        mysqli_close($conn);
        return $a;
    }

    // load danh muc san pham
    function LoadDanhMuc1()
    {
        include "connect.php";
        
        $DanhMuc=array(28);
        $i=0;

        $sql = "SELECT * FROM DANHMUC ORDER BY MADM";
        if($result = mysqli_query($conn, $sql))
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $DanhMuc[$i]= array('MADM' => $row['MADM'],'DDANH' => $row['DDANH'],'TENDM' => $row['TENDM'],'KTDM' => $row['KTDM']);
                $i++;
            }
            return $a;
        }
        mysqli_close($conn);
    }

     // load thong tin khachahng
     
     function LoadKH($MAKH)
     {
         include "connect.php";
         $sql = "SELECT  *
                 FROM    KHACHHANG 
                 WHERE   MAKH = '$MAKH'";
         $a = array();
         mysqli_set_charset($conn, "utf8");
         if ($result = mysqli_query($conn, $sql)) 
         {
             if($row = mysqli_fetch_assoc($result))
             {
                 $a = array('MAKH' => $row['MAKH'],'SDT' => $row['SDT'], 'EMAIL' => $row['EMAIL'],'FACEBOOK' => $row['FACEBOOK'],'AVATAR' => $row['AVATAR'], 'DIACHI' => $row['DIACHI'], 'TAMSU'=>$row['TAMSU'],'GIOITINH' => $row['GIOITINH'], 'HOTEN' => $row['HOTEN']);
             } 
         }
         mysqli_close($conn);
         return $a;
     }

     function LoadDSTin($MAKH)
     {
        include "connect.php";
        $sql = "SELECT  *
                FROM    TINDANG,KHACHHANG 
                WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                AND     TINDANG.MAKH = '$MAKH'";
        $a = array();
        $i=0;
        mysqli_set_charset($conn, "utf8");
        $count = mysqli_num_rows(mysqli_query($conn, $sql));
        if ($result = mysqli_query($conn, $sql)) 
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $ha = XuLyAnh($row['HINHANH']);
                if($row['LOAITD']=='Ban')
                   $LOAITD='Cần Bán';
                else
                   $LOAITD='Cần Mua';
                $a[$i] = array('LOAITD' => $LOAITD,'SL' => $count,'MAKH' => $row['MAKH'],'TINHTRANGMH' => $row['TINHTRANGMH'], 'MATD' => $row['MATD'],'TIEUDE' => $row['TIEUDE'],'GIABAN' => $row['GIABAN'],'NGAYDANG' => $row['NGAYDANG'],'HINHANH' => $ha[0] ,'TAMSU' => $row['TAMSU']);
            $i++;
            } 
        }
        mysqli_close($conn);
        return $a;
     }
 

?>
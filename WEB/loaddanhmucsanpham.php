<?php
    header('Content-Type: text/html; charset=utf-8');
    //echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
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
        mysqli_set_charset($conn, "utf8");
        $result = mysqli_query($conn, $sql);
        if ( $count == 0) 
        {
            return 0;
        }
        else
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $a=$row['MATD'];
            }
            return CEIL($count/6);
        }
        mysqli_close($conn);
    }


    // hàm lấy sản phẩm random ra 3 sản phẩm
    function RanDomSP($DanhMuc)
    {
        include "connect.php";
        // Nếu rỗng thì ranđon trong tất cả sản phẩm
        if(empty($DanhMuc))
        {
        $sql = "SELECT MATD FROM TINDANG ORDER BY RAND() LIMIT 3 WHERE TINHTRANGTIN = 'da dang' AND LOAITIN IN ('ribbon-new','ribbon-hot','ribbon-discount')";
        }
        else
        {
            $sql = "SELECT MATD FROM TINDANG ORDER BY RAND() LIMIT 3 WHERE TINHTRANGTIN = 'da dang' AND MADM = '$DanhMuc'AND LOAITIN IN ('ribbon-new','ribbon-hot','ribbon-discount') ";
        }
        // tạo mảng random luu MaTD
        $Ran = array();
        $i = 0;
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        while($row = mysqli_fetch_assoc($result))
        {
            $Ran[$i] = array('MATD' => row['MATD'] );
            $i++;
        }

        mysqli_close($conn);
        return $Ran;

    }

    function LoadSpHot($DanhMuc = '')
    {        
        include "connect.php";
        if(empty($DanhMuc))
        {
            $sql = "SELECT  MATD,TIEUDE,GIABAN,HOTEN,LOAITD,NGAYDANG,HINHANH, TINDANG.TAMSU AS TS, LOAITIN
                    FROM    TINDANG,KHACHHANG 
                    WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                    AND     TINHTRANGTIN = 'da dang'
                    AND     LOAITIN IN ('ribbon-new','ribbon-hot','ribbon-discount')
                    ORDER BY MATD
                    LIMIT   3";
        }
        else
        {
            $sql = "SELECT  MATD,TIEUDE,GIABAN,HOTEN,LOAITD,NGAYDANG,HINHANH, TINDANG.TAMSU AS TS, LOAITIN
                    FROM    TINDANG,KHACHHANG 
                    WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                    AND     TINHTRANGTIN = 'da dang'
                    AND     LOAITIN IN ('ribbon-new','ribbon-hot','ribbon-discount')
                    AND     MADM = '$DanhMuc'
                    ORDER BY MATD
                    LIMIT 3";   
        }
        
        $a = array();
        $i = 0;
        mysqli_set_charset($conn, "utf8");
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);
        if ($count == 0) 
        {
            echo '<script language="javascript"> alert("Dữ liệu trống") </script>';
            mysqli_close($conn);
        }
        else
        {
            while($row = mysqli_fetch_assoc($result))
            {
                // mảng lưu mảng hình ảnh
                //($row['LOAITIN']);
                $ha = XuLyAnh($row['HINHANH']);
                if($row['LOAITD']=='Ban')
                    $LOAITD='Cần Bán';
                else
                    $LOAITD='Cần Mua';
                $a[$i] = array('MATD' => $row['MATD'], 'TIEUDE' => $row['TIEUDE'],'GIABAN' => $row['GIABAN'], 'HOTEN' => $row['HOTEN'],'LOAITD' => $LOAITD,'NGAYDANG' => $row['NGAYDANG'],'HINHANH' => $ha[0],'TAMSU' => $row['TS'], 'LOAITIN'=> $row['LOAITIN'] );
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
            $sql = "SELECT  MATD,TIEUDE,GIABAN,HOTEN,LOAITD,NGAYDANG,HINHANH,TINDANG.TAMSU
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
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);
        if ($count == 0) 
        {
            echo '<script language="javascript"> alert("Dữ liệu trống") </script>';
            mysqli_close($conn);
        }
        else
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


    function LoadChiTietSP($MATD)
    {
        include "connect.php";
        $sql = "SELECT  *
                FROM    TINDANG,KHACHHANG 
                WHERE   TINDANG.MAKH=KHACHHANG.MAKH 
                AND     MATD = '$MATD'";
        $a = array();
        mysqli_set_charset($conn, "utf8");
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);
        if ($count == 0) 
        {
            echo '<script language="javascript"> alert("Dữ liệu trống") </script>';
            mysqli_close($conn);
        }
        else
        {
            if($row = mysqli_fetch_assoc($result))
            {
                
                //mảng lưu mảng hình ảnh

                if($row['LOAITD']=='Ban')
                   $LOAITD='Cần Bán';
                else
                   $LOAITD='Cần Mua';
                $a = array('SDT' => $row['SDT'], 'EMAIL' => $row['EMAIL'],'FACEBOOK' => $row['FACEBOOK'],'TINHTRANGMH' => $row['TINHTRANGMH'], 'DIACHI' => $row['DIACHI'], 'PTGD'=>$row['PTGD'],'MATD' => $row['MATD'],'TIEUDE' => $row['TIEUDE'],'GIABAN' => $row['GIABAN'], 'HOTEN' => $row['HOTEN'],'LOAITD' => $LOAITD,'NGAYDANG' => $row['NGAYDANG'],'HINHANH' => $row['HINHANH'] ,'TAMSU' => $row['TINDANG.TAMSU']);
            } 
        }
        print_r($a["HINHANH"]);
        mysqli_close($conn);
        return $a;
    }
	

?>
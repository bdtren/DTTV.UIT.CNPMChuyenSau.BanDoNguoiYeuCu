<?php

    if(isset($_POST['phanhoi']))
    {
        include('../xulyphp/connect.php');
        //Lấy dữ liệu từ form phan hoi
        $hailong         = $_POST['hailong'];
        $gioithieu       = $_POST['gioithieu'];
        $phanhoikhac     = addslashes($_POST['phanhoikhac']);             
                        
        //lấy ra id cuối cùng và +1
        $sql = "SELECT MAPH FROM GHINHANPHANHOI ORDER BY MAPH DESC LIMIT 1";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) == 0) 
        {
            $MaPH = "PH0000";
        }
        else
        {
            if($row = mysqli_fetch_assoc($result))
            {
                $MaPH = TangMa($row['MAPH']);
            }
        }
        $day = date("Y/m/d");
        //Lưu phan hoi
        $sql = "INSERT INTO  GHINHANPHANHOI (MAPH,MAKH,NGAYPH,MUCDO,KNGT,PHANHOI) VALUE ('$MaPH','$MaKH','$day','$hailong','$gioithieu','$phanhoikhac')";
        if(mysqli_query($conn, $sql))
        {
            echo '<script language="javascript"> alert("Cảm ơn bạn đã phản hồi!") </script>'; 
        } 
        else
        {
            echo '<script language="javascript"> alert("loi !") </script>'; 
        }             
        mysqli_close($conn);                
    }
    if(isset($_POST['thacmac']))
    {
        include('../xulyphp/connect.php');
        //Lấy dữ liệu từ form phan hoi
        $loai           = $_POST['hotro'];
        $vande          = addslashes($_POST['vande']);
        $chitiet        = addslashes($_POST['chitiet']);             

        $sql = "SELECT MATM FROM THACMAC ORDER BY MATM DESC LIMIT 1";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) == 0) 
        {
            $MaTM = "TM0000";
        }
        else
        {
            if($row = mysqli_fetch_assoc($result))
            {
                $MaTM = TangMa($row['MATM']);
            }
        }
        //Lưu phan hoi
        $sql = "INSERT INTO  THACMAC (MATM,MAKH,MANV,LOAIHOTRO,VANDEGIAIDAP,CHITIET,TRALOI) VALUE ('$MaTM','$MaKH','NV0000','$loai','$vande','$chitiet','')";
        if(mysqli_query($conn, $sql))
        {
            echo '<script language="javascript"> alert("Cảm ơn bạn cung cap!") </script>'; 
        } 
        else
        {
            echo '<script language="javascript"> alert("loi !") </script>'; 
        }             
        mysqli_close($conn); 
    }
    if(isset($_POST['antin']))
    {
        $MATD = $_GET['MATD'];
        include('connect.php');
        $sql = "UPDATE      TINDANG
                SET         TINHTRANGTIN = 'da an'
                WHERE       MATD = '$MATD'";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    }

    if(isset($_POST['hientin']))
    {
        include('connect.php');
        $sql = "UPDATE      TINDANG
                SET         TINHTRANGTIN = 'da dang'
                WHERE       MATD = '$MATD'";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    }
    if(isset($_POST['suatin']))
    {

    }

    if(isset($_POST['themtin']))
    {

        $error=array();
        $extension=array("jpeg","jpg","png","gif");
        foreach($_FILES["files"]["tmp_name"] as $key=>$tmp_name)
                {
                    $file_name=$_FILES["files"]["name"][$key];
                    $file_tmp=$_FILES["files"]["tmp_name"][$key];
                    $ext=pathinfo($file_name,PATHINFO_EXTENSION);
                    if(in_array($ext,$extension))
                    {
                        if(!file_exists("../Images/san-pham/".$file_name))
                        {
                            move_uploaded_file($file_tmp=$_FILES["files"]["tmp_name"][$key],"../Images/san-pham/".$file_name);
                        }
                        else
                        {
                            $filename=basename($file_name,$ext);
                            $newFileName=$filename.time().".".$ext;
                            move_uploaded_file($file_tmp=$_FILES["files"]["tmp_name"][$key],"../Images/san-pham/".$newFileName);
                        }
                    }
                    else
                    {
                        array_push($error,"$file_name, ");
                    }
                }




         // Nếu người dùng có chọn file để upload
         /*if (isset($_FILES['avatar']))
         { > 0
             if ($_FILES['file']['error'] > 0)
             {
                 echo 'File Upload Bị Lỗi';
             }
             else{
                 move_uploaded_file($_FILES['file']['tmp_name'], '../Images/san-pham/'.$_FILES['file']['name']);
                 echo 'File Uploaded';
             }
         }
         else{
             echo 'Bạn chưa chọn file upload';
         }*/
    }

    if(isset($_POST['botheodoi']))
    {
        $MAKH1 = $_GET['MaKH1'];
        $MAKH2 = $_GET['MaKH2'];
        include('connect.php');
        $sql = "DELETE 
                FROM        KH_THEODOI_KH
                WHERE       KHA_MAKH = '$MAKH1'
                AND         MAKH = '$MAKH2'";
        mysqli_query($conn, $sql); 
        mysqli_close($conn);
    }

    if(isset($_POST['chan']))
    {
        $MAKH1 = $_GET['MaKH1'];
        $MAKH2 = $_GET['MaKH2'];
        include('connect.php');
        $sql = "DELETE 
                FROM        KH_THEODOI_KH
                WHERE       KHA_MAKH = '$MAKH2'
                AND         MAKH = '$MAKH1'";
        mysqli_query($conn, $sql); 
        mysqli_close($conn);
    }

    if(isset($_POST['xoatin']))
    {
        $MATD = $_GET['MATD'];
        include('connect.php');
        $sql = "DELETE 
                FROM        TINDANG
                WHERE       MATD = '$MATD'";
        mysqli_query($conn, $sql); 
        mysqli_close($conn);
    }
    if(isset($_POST['taotidacbiet']))
    {

    }
    function KiemTraMaThe($NhaMang,$MaThe)
    {
        
    }
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

    function TaiThongTinKhachHang($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KHACHHANG
                WHERE       MAKH = '$MAKH'";
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

    function SuaThongTinKhachHang($MAKH)
    {
       
    }
    // tai nguoi dang theo doi minh
    function TaiNguoiTheoDoiMinh($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      *, KHACHHANG.MAKH AS MA
                FROM        KHACHHANG,KH_THEODOI_KH
                WHERE       KHACHHANG.MAKH=KH_THEODOI_KH.KHA_MAKH
                AND         KH_THEODOI_KH.MAKH = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
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
    // tai nguoi minh danh theo doi
    function TaiMinhDangTheoDoi($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      *, KHACHHANG.MAKH AS MA
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
    // tải bài đăng chờ duyệt
    function TaiBaiDangChoDuyet($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = '0'";
        if ($result = mysqli_query($conn, $sql)) 
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
    // tải bài mua đã duyệt
    function TaiBaiMuaDaDuyet($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = '1'
                AND         LOAITD = 'Mua'";
        if ($result = mysqli_query($conn, $sql)) 
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
    // tải bài bán đã duyệt
    function TaiBaiBanDaDuyet($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = '1'
                AND         LOAITD = 'Bán'";
        if ($result = mysqli_query($conn, $sql)) 
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
    // ẩn tin
   
    // tai thong bao
    function TaiThongBao()
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      *
                FROM        THONGBAO";
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
    // xóa tin đăng
    function XoaTin($MATD)
    {
        include('connect.php');
        $sql = "DELETE 
                FROM        TINDANG
                WHERE       MATD = '$MATD'";
        mysqli_query($conn, $sql); 
        mysqli_close($conn);
    }
        // include('xulyphp/connect.php');
        //Lấy dữ liệu từ form phan hoi
        // $hailong         = $_POST['hailong'];
        // $gioithieu       = $_POST['gioithieu'];
        // $phanhoikhac     = addslashes($_POST['phanhoikhac']);             
                        
        //lấy ra id cuối cùng và +1
        // $sql = "SELECT MAPH FROM GHINHANPHANHOI ORDER BY MAPH DESC LIMIT 1";
        // $result = mysqli_query($conn, $sql);
        // if (mysqli_num_rows($result) == 0) 
        // {
        //     $MaPH = "PH0000";
        // }
        // else
        // {
        //     if($row = mysqli_fetch_assoc($result))
        //     {
        //         $MaPH = TangMa($row['MAPH']);
        //     }
        // }
        //echo "<script language='javascript'> alert('ufyfy'); </script>";
        //echo $day;
        //$day = date("Y/m/d");
       // echo $day;
        //Lưu phan hoi
        // $sql = "INSERT INTO  GHINHANPHANHOI (MAPH,MAKH,NGAYPH,MUCDO,KNGT,PHANHOI) VALUE ('PH0012','KH0003','2018-11-30','1','3','jrubdhge')";
        // if(mysqli_query($conn, $sql))
        // {
        //     echo '<script language="javascript"> alert("Cảm ơn bạn đã phản hồi!") </script>'; 
        // } 
        // else
        // {
        //     echo '<script language="javascript"> alert("loi !") </script>'; 
        // }             
        // mysqli_close($conn);   
    function ThemBaiDang($UserName)
    {
        
    }
    // Đếm số lần vi phạm
    function DemViPham($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        XULYVIPHAM
                WHERE       MAKH = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }
    // Đếm Bài đăng đang chờ
    function DemCho($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = 0";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }
    // đếm bài bán đã duyệt
    function DemBan($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = 1
                AND         LOAITD = 'Bán'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }
    // đếm bài mua đã duyệt
    function DemMua($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = 1
                AND         LOAITD = 'Mua'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }
    // đếm người mình đang theo dõi
    function DemDangTheoDoi($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KH_THEODOI_KH
                WHERE       KHA_MAKH = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
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
?>
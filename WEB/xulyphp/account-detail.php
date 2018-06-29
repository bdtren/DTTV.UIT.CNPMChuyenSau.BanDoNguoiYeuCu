<?php
    $action = "";
    $info = [];
    ////////////////////////////////////////////////////////////////////////
    ////////////            Thân hàm chính xu ly ajax           ///////////
    //////////////////////////////////////////////////////////////////////
    // if (isset($_POST['inputFunction']) && !empty($_POST['inputFunction'])) 
    // {
    //     $action = $_POST['inputFunction'];
    //     if (isset($_POST['info']) && !empty($_POST['info'])) 
    //     {
    //         $info = $_POST['info'];
    //     }

    //     switch ($action) 
    //     {
    //         case 'themtindang': ThemTinDang($info);
    //             break;
    //         case 'thacmac':     ThemThacMac($info);
    //             break;
    //         case 'phanhoi':     ThemPhanHoi($info);
    //             break;
    //         case 'xoatindang':  XoaTinDang($info);
    //             break;
    //         case 'suatindang':  SuaTinDang($info);
    //             break;
    //         case 'tindacbiet':  TinDacBiet($info);
    //             break;   
    //         case 'botheodoi':   BoTheoDoi($info);
    //             break;
            
    //         default:break;
    //     }
    // }
    function Chuoi2Mang($string)
    {
        if(!empty($string))
        {
            return explode(';', $string);
        }
        return null;
    }
    // them tin dang
    if(isset($_POST['DangTin']))
    {
        
        $TieuDe        = $_POST['tieude'];
        $Loai        = $_POST['loai'];
        $DanhMuc        = $_POST['danhmuc'];
        //$        = $_POST[''];
        $GiaBan        = $_POST['giaban'];
        $TrinhTrang        = $_POST['trinhtrang'];
        $MoTa        = $_POST['mota'];
        $PTGD        = $_POST['ptgd'];


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

    // them thac mac
    if(isset($_POST['ThacMac']))
    {
        include('connect.php');  
        
        $loai           = $_POST['loai'];
        $vande          = $_POST['vande'];
        $chitiet        = $_POST['chitiet'];  

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
            //echo "Cảm ơn bạn cung cấp!"; 
        } 
        else
        {
            //echo "không thể thêm thắc mắc"; 
        }             
        mysqli_close($conn); 
    }  

    // them phan hoi
    if(isset($_POST['PhanHoi']))
    {
        include('connect.php');
        
        $hailong         = $_POST['hailong'];
        $gioithieu       = $_POST['gioithieu'];
        $phanhoikhac     = $_POST['phanhoikhac'];
                        
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
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $day = date("Y/m/d");
        //Lưu phan hoi
        $sql = "INSERT INTO  GHINHANPHANHOI (MAPH,MAKH,NGAYPH,MUCDO,KNGT,PHANHOI) VALUE ('$MaPH','$MaKH','$day','$hailong','$gioithieu','$phanhoikhac')";
        if(mysqli_query($conn, $sql))
        {
           // echo "Cảm ơn bạn đã phản hồi!"; 
        } 
        else
        {
           // echo "Không thể phản hồi"; 
        }             
        mysqli_close($conn);                
    }

    // An tin dang
    if(isset($_POST['AnHienTin']))
    {
        $MATD = $_POST['MATD'];
        include('connect.php');
        if(KiemTraAnHienTin($MATD)==1)
        {
            $sql = "UPDATE      TINDANG
                SET         TINHTRANGTIN = 'da dang'
                WHERE       MATD = '$MATD'";
        }
        else
        {
            $sql = "UPDATE      TINDANG
                SET         TINHTRANGTIN = 'da an'
                WHERE       MATD = '$MATD'";
        }
        
        if(mysqli_query($conn, $sql))
            echo "Đã ẩn hien ";
        else
            echo "Ẩn hien không thành công";
        mysqli_close($conn);
    }

    // Xoa tin dang
    if(isset($_POST['XoaTin']))
    {
        $MATD = $_POST['MATD'];
        include('connect.php');
        $sql = "UPDATE      TINDANG
                SET         TINHTRANGTIN = 'da xoa'
                WHERE       MATD = '$MATD'";
        if(mysqli_query($conn, $sql))
            echo "Đã xóa";
        else
            echo "Xóa không thành công";
        mysqli_close($conn);
    }

     // tao tin dac biet mua
     if(isset($_POST['TinDacBietMua']))
     {
        $MATD       = $_POST['MATD'];
        $MAKH       = $_POST['MAKH'];
        $LOAITIN    = $_POST['loaitinmua'];
        $NHAMANG    = $_POST['nhamangmua'];
        $MATHE      = $_POST['mathemua'];
        switch($LOAITIN)
        {
            case 'ribbon-hot': $TTTIN = 'duyet hot'; $LYDO = 'tao tin hot' ; break;
            case 'ribbon-new': $TTTIN = 'duyet moi' ; $LYDO = 'tao tin moi'; break;
        }

        echo $MATD;
         include('connect.php');
        $sql1 = "UPDATE      TINDANG
                 SET         TINHTRANGTIN = '$TTTIN'
                 WHERE       MATD = '$MATD'";
        
        $sql = "SELECT MADT FROM DOANHTHU ORDER BY MADT DESC LIMIT 1";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) == 0) 
        {
            $MaDT = "DT0000";
        }
        else
        {
            if($row = mysqli_fetch_assoc($result))
            {
                $MaDT = TangMa($row['MADT']);
            }
        }
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $day = date("Y/m/d");
        //Lưu phan hoi
        $sql2 = "INSERT INTO DOANHTHU (MADT,MAKH,MANV,MATHECAO,DOANHTHU,LYDO,NGAYTHU) VALUE ('$MaDT','$MAKH','NV0000','$MATHE','','$LYDO','$day')";
        if(mysqli_query($conn, $sql1) &&  mysqli_query($conn, $sql2))
            echo "Đã tao tin ban dac biet";
        else
            echo "dc ban không thành công";         
         mysqli_close($conn);
     }

    // tao tin dac biet mua
    if(isset($_POST['TinDacBietBan']))
    {
        $MATD       = $_POST['MATD'];
        $MAKH       = $_POST['MAKH'];
        $LOAITIN    = $_POST['loaitinban'];
        $NHAMANG    = $_POST['nhamangban'];
        $MATHE      = $_POST['matheban'];
        $GIAGIAM     = $_POST['giagiam'];
        switch($LOAITIN)
        {
            case 'ribbon-hot': $TTTIN = 'duyet hot'; $LYDO = 'tao tin hot' ; break;
            case 'ribbon-new': $TTTIN = 'duyet moi' ; $LYDO = 'tao tin moi'; break;
            case 'ribbon-discount': $TTTIN = 'duyet gg' ; $LYDO = 'tao tin giam gia'; break;
        }

        include('connect.php');
        if(empty($GIAGIAM))
        {
            $sql1 = "UPDATE      TINDANG
                 SET         TINHTRANGTIN = '$TTTIN'
                 WHERE       MATD = '$MATD'";
        }
        else
        {
            // cap nhap gia cu
            $sql3 = "UPDATE      TINDANG
                 SET         TINHTRANGTIN = '$TTTIN' , GIACU = GIABAN
                 WHERE       MATD = '$MATD'";
            mysqli_query($conn, $sql3);
            $sql1 = "UPDATE      TINDANG
                 SET         TINHTRANGTIN = '$TTTIN' , GIABAN = '$GIAGIAM'
                 WHERE       MATD = '$MATD'";
        }
        
        
        $sql = "SELECT MADT FROM DOANHTHU ORDER BY MADT DESC LIMIT 1";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) == 0) 
        {
            $MaDT = "DT0000";
        }
        else
        {
            if($row = mysqli_fetch_assoc($result))
            {
                $MaDT = TangMa($row['MADT']);
            }
        }
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $day = date("Y/m/d");
        //Lưu phan hoi
        $sql2 = "INSERT INTO DOANHTHU (MADT,MAKH,MANV,MATHECAO,DOANHTHU,LYDO,NGAYTHU) VALUE ('$MaDT','$MAKH','NV0000','$MATHE','','$LYDO','$day')";
        if(mysqli_query($conn, $sql1) &&  mysqli_query($conn, $sql2))
        {
            //echo "Đã tao tin mua dac biet";
        }
        else
        {
           // echo "dc mua không thành công";  
        }       
            mysqli_close($conn);
    }

    // bo theo doi
    if(isset($_POST['BoTheoDoi']))
    {
        $MAKH1 = $_POST['MAKH1'];
        $MAKH2 = $_POST['MAKH2'];
        include('connect.php');  
        $sql = "DELETE FROM KH_THEODOI_KH
                WHERE       MAKH = '$MAKH1'
                AND         MAKHTD = '$MAKH2'";
        if(mysqli_query($conn, $sql))
        {
            //echo "Đã Bỏ Theo Dõi";
        }
        else
        {
            //echo "Không thành công";
        }
        mysqli_close($conn);   
    }

    // bo theo doi tin dang
    if(isset($_POST['BoTheoDoiTinDang']))
    {
        $MATD = $_POST['MATD'];
        $MAKH = $_POST['MAKH'];
        include('connect.php');  
        $sql = "DELETE FROM KH_THEODOI_TD
                WHERE       MAKH = '$MAKH'
                AND         MATD = '$MATD'";
        if(mysqli_query($conn, $sql))
        {
            //echo "Đã Bỏ Theo Dõi";
        }
        else
        {
            //echo "Không thành công";
        }
        mysqli_close($conn);   
    }

//////////////////////////////////////////////////////////////////////
///////////////              hàm php thong thuong       /////////////
////////////////////////////////////////////////////////////////////

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
                AND         TINHTRANGTIN = 'da dang'
                ORDER BY    NGAYDANG";
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
                AND         TTKIEMDUYET = '0'
                AND         TINHTRANGTIN NOT IN ('da xoa')";
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

    // tải bài mua đã duyệt
    function TaiBaiMuaDaDuyet($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = '1'
                AND         LOAITD IN ('Mua','Tặng')";
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

    // tai nguoi dang theo doi minh
    function TaiNguoiTheoDoiMinh($MAKH)
    {
        $a = null; 
        include('connect.php');
        $sql = "SELECT      *, KHACHHANG.MAKH AS MA
                FROM        KHACHHANG,KH_THEODOI_KH
                WHERE       KHACHHANG.MAKH=KH_THEODOI_KH.MAKH
                AND         KH_THEODOI_KH.MAKHTD = '$MAKH'";
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
                WHERE       KHACHHANG.MAKH=KH_THEODOI_KH.MAKHTD
                AND         KH_THEODOI_KH.MAKH = '$MAKH'";
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

    // chi tai bang khachhang
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

    // tai vi pham
    function TaiViPham($MAKH)
    {
        $a = null;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        XULYVIPHAM,TINDANG
                WHERE       XULYVIPHAM.MATD = TINDANG.MATD
                AND         MAKH = '$MAKH'";
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

    // tai tin dang theo doi
    function TaiTheoDoiTinDang($MAKH)
    {
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KH_THEODOI_TD,TINDANG
                WHERE       KH_THEODOI_TD.MATD = TINDANG.MATD
                AND         KH_THEODOI_TD.MAKH = '$MAKH'";
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

///////////////////////////////////////////////////////
/////////         các hàm đếm                 ////////
/////////////////////////////////////////////////////
    // Đếm số lần vi phạm
    function DemViPham($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        XULYVIPHAM , TINDANG
                WHERE       XULYVIPHAM.MATD = TINDANG.MATD
                AND         MAKH = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }
    // Đếm Bài đăng đang chờ kiem duyet = 0;
    function DemCho($MAKH)
    {
        $Count=0;
        include('connect.php');
        $sql = "SELECT      * 
                FROM        TINDANG
                WHERE       MAKH = '$MAKH'
                AND         TTKIEMDUYET = 0
                AND         TINHTRANGTIN NOT IN ('da xoa')";
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
                AND         LOAITD IN ('Mua','Tặng')";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }

    // Đếm tin đăng đang theo dõi
    function DemDangTheoDoiTD($MAKH)
    {
        include('connect.php');
        $sql = "SELECT      * 
                FROM        KH_THEODOI_TD,TINDANG
                WHERE       KH_THEODOI_TD.MATD = TINDANG.MATD
                AND         KH_THEODOI_TD.MAKH = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $Count=mysqli_num_rows($result);
            } 
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
                WHERE       MAKH = '$MAKH'";
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
                WHERE       MAKHTD = '$MAKH'";
        if ($result = mysqli_query($conn, $sql)) 
        {
            $Count=mysqli_num_rows($result);
        }
        mysqli_close($conn);
        return $Count;
    }

///////////////////////////////////////////////////////
/////////         các hàm kiểm tra            ////////
/////////////////////////////////////////////////////

    // kiem tra tin dac biet
    function KiemTraTinDacBiet($MATD)
    {
        include('connect.php');
        $sql = "SELECT      *
                FROM        TINDANG
                WHERE       MATD = '$MATD'
                AND         LOAITIN IN ('ribbon-discount', 'ribbon-new', 'ribbon-hot')";
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

    // kiem tra tin dac biet nếu ẩn tra về 1
    function KiemTraAnHienTin($MATD)
    {
        include('connect.php');
        $sql = "SELECT      *
                FROM        TINDANG
                WHERE       MATD = '$MATD'
                AND         TINHTRANGTIN = 'da an'";
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


////////////////////////////////////////////
//////          hàm phụ trợ         ///////
///////////////////////////////////////////
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
?>
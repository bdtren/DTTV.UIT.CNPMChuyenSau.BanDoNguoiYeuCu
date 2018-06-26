<?php
$action = "";
$info = [];
//Thân hàm chính
if (isset($_POST['inputFunction']) && !empty($_POST['inputFunction'])) 
{
    $action = $_POST['inputFunction'];
    if (isset($_POST['info']) && !empty($_POST['info'])) 
    {
        $info = $_POST['info'];
    }

    switch ($action) 
    {
        case 'theodoikhachhang':     ThemTheoDoiKhachHang($info);
            break;
        case 'botheodoikhachhang':   BoTheoDoiKhachHang($info);
            break;
        case 'theodoitindang':       ThemTheoDoiTinDang($info);
            break;
        case 'botheodoitindang':     BoTheoDoiTinDang($info);
            break;
        case 'baocao': BaoCao($info);
            break;
        default:break;
    }
}

function ThemTheoDoiKhachHang($info)
{
    $MAKH1 = $info[0];
    $MAKH2 = $info[1];
    include('connect.php');
    $sql = "INSERT INTO KH_THEODOI_KH (MAKH, MAKHTD) VALUE ('$MAKH1', '$MAKH2')";
    if(mysqli_query($conn, $sql))
    {
        echo "Đã Theo Dõi";
    }
    else
    {
        echo "Theo dõi không thành công";
    }
    mysqli_close($conn);
}

function BoTheoDoiKhachHang($info)
{
    $MAKH1 = $info[0];
    $MAKH2 = $info[1];
    include('connect.php');
    $sql = "DELETE FROM KH_THEODOI_KH
            WHERE       MAKH = '$MAKH1'
            AND         MAKHTD = '$MAKH2'";
    if(mysqli_query($conn, $sql))
    {
        echo "Đã Bỏ Theo Dõi";
    }
    else
    {
        echo "Không thành công";
    }
    mysqli_close($conn);   
}

function ThemTheoDoiTinDang($info)
{
    $MAKH = $info[0];
    $MATD = $info[1];
    include('connect.php');
    $sql = "INSERT INTO KH_THEODOI_TD (MAKH, MATD) VALUE ('$MAKH', '$MATD')";
    if(mysqli_query($conn, $sql))
    {
        echo "Đã Theo Dõi";
    }
    else
    {
        echo "Theo dõi không thành công";
    }
    mysqli_close($conn);
}

function BoTheoDoiTinDang($info)
{
    $MAKH = $info[0];
    $MATD = $info[1];
    include('connect.php');
    $sql = "DELETE FROM KH_THEODOI_TD
            WHERE       MAKH = '$MAKH'
            AND         MATD = '$MATD'";
    if(mysqli_query($conn, $sql))
    {
        echo "Đã Bỏ Theo Dõi";
    }
    else
    {
        echo "Không thành công";
    }
    mysqli_close($conn);   
}

function BaoCao($info)
{
    include('connect.php');
    $MaKH        = $info[0];
    $matin       = $info[1];  
    $baocao      = $info[2];             

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
    $sql = "INSERT INTO  THACMAC (MATM,MAKH,MANV,LOAIHOTRO,VANDEGIAIDAP,CHITIET,TRALOI) VALUE ('$MaTM','$MaKH','NV0000','Vi Pham','$matin','$baocao','')";
    if(mysqli_query($conn, $sql))
    {
        echo "Cảm ơn bạn cung cap!"; 
    } 
    else
    {
        echo "Báo cáo không thành công"; 
    }             
    mysqli_close($conn); 
}


////////////////////////////////////////////
function PhanHoi($info)
{
    include('../xulyphp/connect.php');
    //Lấy dữ liệu từ form phan hoi
    $hailong         = $info[0];
    $gioithieu       = $info[1];
    $phanhoikhac     = $info[2];             
                    
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
        echo "Cảm ơn bạn đã phản hồi!"; 
    } 
    else
    {
        echo "Không thể phản hồi"; 
    }             
    mysqli_close($conn);                
}
function ThacMac($info)
{
    include('../xulyphp/connect.php');
    //Lấy dữ liệu từ form phan hoi
    $loai           = $info[0];
    $vande          = $info[1];
    $chitiet        = $info[2];             

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
        echo "Cảm ơn bạn cung cap!"; 
    } 
    else
    {
        echo "loi !"; 
    }             
    mysqli_close($conn); 
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


?>
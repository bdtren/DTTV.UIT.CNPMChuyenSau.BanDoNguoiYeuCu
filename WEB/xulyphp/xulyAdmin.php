<?php
$action = "";
$data = "";
if (isset($_POST['callFunction']) && !empty($_POST['callFunction'])) {
    $action = $_POST['callFunction'];
    if (isset($_POST['data']) && !empty($_POST['data'])) {
        $data = $_POST['data'];
    }
    switch ($action) {
        case 'themCauTraLoi':themCauTraLoi($data);
            break;
        case 'themPhanCong':themPhanCong($data);
            break;
        default:break;
    }
}

/**********XỬ LÝ THIỂN THỊ THÔNG TIN NHÂN VIÊN********/
//Lấy thông tin của một nhân viên
function layThongTinNhanVien($MaNV = "")
{
    $qNV = ($MaNV == "") ? "" : "and nv.MANV='" . $MaNV . "'";

    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
            from nhanvien nv, chucvu cv, taikhoan tk, phancong pc
            where nv.MACV=CV.MACV and nv.MATK=tk.MATK and nv.MANV = pc.MANV " . $qNV . ";";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Lấy thông tin phân công của nhân viên
function layThongTinPhanCong($MaNV = "", $date = "")
{
    $qNV = ($MaNV == "") ? "" : "and nv.MANV='" . $MaNV . "'";
    $qDate = ($date == "") ? "" : "and pc.NGAYPC='" . $date . "'";

    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
            from nhanvien nv, phancong pc
            where nv.MANV = pc.MANV " . $qNV . $qDate . ";";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Lấy số giờ đã làm của nhân viên
function laySoGioLam($MaNV = "", $date = "")
{
    $qNV = ($MaNV == "") ? "" : "and MANV='" . $MaNV . "'";
    $qDate = ($date == "") ? "" : "and pc.NGAYPC='" . $date . "'";

    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT MANV, NGAYPC, sum(SOGIOHD) SoGio
            from  phancong pc
            where MAPC is not null " . $qNV . " " . $qDate . "
            group by MANV;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Thêm thông tin phân công sau khi nhân viên đăng xuất
function themPhanCong($data = array())
{
    $a = layMaPhanCongCuoi();
    $ma = TangMaSo($a[0]['MAPC']);
    include '../xulyphp/connect.php';
    include("../admin/xulyphp/logout.php");
    if ($data == null) {
        echo 'error loading input info';
        return;
    }

    $sql = 'INSERT into phancong
    VALUES ("' . $ma . '", "' . $data[0] . '","' . $data[1] . '", "' . $data[2] . '", "' . $data[3] . '", "' . $data[4] . '")';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "New phancong's record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

/**********XỬ LÝ TRÊN TRANG NHÂN VIÊN KIỂM DUYỆT********/
//Lấy ra số tin đặc biệt
function laySoTinDacBiet($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATD) SOTM
            FROM tindang
            WHERE LOAITIN !='ribbon-normal'";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);
    }
    mysqli_close($conn);
    return $a['SOTM'];
}
//Lấy số tin đang chờ duyệt thành đặc biệt
function laySoTinChoDuyetDacBiet($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATD) SOTM
            FROM tindang
            WHERE TINHTRANGTIN IN ('duyet moi','duyet hot','duyet gg');";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);
    }
    mysqli_close($conn);
    return $a['SOTM'];
}
//Lấy sồ tin đang chờ duyệt
function laySoTinChoDuyet($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATD) SOTM
            FROM tindang
            WHERE TTKIEMDUYET=0;";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);
    }
    mysqli_close($conn);
    return $a['SOTM'];
}
//Lấy số tin vi phạm
function laySoTinViPham($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATD) SOTM
            FROM tindang
            WHERE TINHTRANGTIN='da huy';";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);
    }
    mysqli_close($conn);
    return $a['SOTM'];
}
//Lấy số tin yêu cầu xử lý vi phạm
function laySoTinBiBaoCao($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(VANDEGIAIDAP) SOTM
            FROM thacmac
            WHERE LOAIHOTRO='Vi pham' AND TRALOI='';";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);
    }
    mysqli_close($conn);
    return $a['SOTM'];
}
//Lấy tin đăng đang chờ trở thành tin đặc biệt
function layTinDangChoDB($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
                from tindang td, khachhang kh
                where td.MAKH = kh.MAKH  and TINHTRANGTIN in('duyet moi', 'duyet hot', 'duyet gg');";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Lấy danh sách tin đăng đang chờ để được duyệt đăng
function layTinDangChoDuyet($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
                from tindang td, khachhang kh
                where td.MAKH = kh.MAKH  and TINHTRANGTIN = 'dang cho' /*or TTKIEMDUYET = 0;*/";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Lấy danh sách tin đăng bị báo cáo
function layDanhSachBaoCaoVP($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *, tm.MAKH as KHBC
    from thacmac tm, tindang td, khachhang kh
    where tm.VANDEGIAIDAP = td.MATD and td.MAKH = kh.MAKH and LOAIHOTRO='vi pham';";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Lấy thông tin khách hàng
function layThongTinKhachHang($dsKH = array()){
    
    $strMaKH ="";
    $qKH="";
    if($dsKH!=null){
        $strMaKH = implode("','", $dsKH);
        $qKH= "and MAKH in('".$strMaKH."')";
    }

    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
            from khachhang 
            where MAKH is not null ".$qKH.";";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

/**********XỬ LÝ TRÊN TRANG NHÂN VIÊN CHĂM SÓC KHÁCH HÀNG********/
//Lấy số câu hỏi chưa phản hồi
function laySoCauHoi($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATM) SOTM
                FROM thacmac
                WHERE TRALOI='';";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);

    }
    mysqli_close($conn);
    return $a['SOTM'];
}

//lấy đầy đủ thông tin từ cả 2 bảng Thắc mắc và khách hàng
function layCauHoiChiTiet($maTM = "", $date = "")
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
                from thacmac tm, khachhang kh
                where tm.MAKH = kh.MAKH;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Thêm câu trả lời
function themCauTraLoi($data)
{
    include '../xulyphp/connect.php';

    $sql = 'UPDATE thacmac
            SET TRALOI = "' . $data[1] . '"
            WHERE MaTM = "' . $data[0] . '";';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

/**********XỬ LÝ TRÊN TRANG PHẢN HỒI********/
//Lấy tổng số phản hồi
function laySoPhanHoi($date = "")
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MAPH) SOPH
                FROM ghinhanphanhoi ph;";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);

    }
    mysqli_close($conn);
    return $a['SOPH'];
}

//Lấy một số thông tin cơ bản của phản hồi (mã phản hồi, mà khách hàng, tên khách hàng, ngày phản hồi, mức độ hài lòng)
//hàm này hiện tại không được dùng
function layPhanHoiChung($date = "")
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT MAPH, ph.MAKH, HOTEN, NGAYPH, MUCDO
                FROM ghinhanphanhoi ph, khachhang kh
                WHERE ph.MAKH = kh.MAKH;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}
//lấy đầy đủ thông tin từ cả 2 bảng Phản hồi và người dùng
function layPhanHoiChiTiet($maPH = "", $date = "")
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
                from ghinhanphanhoi ph, khachhang kh
                where ph.MAKH = kh.MAKH;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

/*******************************************************************/
/****************CÁC HÀM XỬ LÝ PHỤ************/
function layMaPhanCongCuoi()
{
    $a = null;
    include '../xulyphp/connect.php';
    $sql = 'SELECT MAPC
    from phancong
    order by MAPC desc
    limit 1;';

    mysqli_set_charset($conn, "utf8");
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}


function TangMaSo($Ma)
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
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
        default:break;
    }
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

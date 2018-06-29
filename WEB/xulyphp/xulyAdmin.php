<?php
$action = "";
$data = "";
if (isset($_POST['callFunction']) && !empty($_POST['callFunction'])) {
    $action = $_POST['callFunction'];
    if (isset($_POST['data']) && !empty($_POST['data'])) {
        $data = $_POST['data'];
    }
    switch ($action) {
        case 'themKhuyenMai':themKhuyenMai($data);
            break;
        case 'xoaKhuyenMai':xoaKhuyenMai($data);
            break;
        case 'themCauTraLoi':themCauTraLoi($data);
            break;
        case 'xulyDangXuat':xulyDangXuat($data);
            break;
        case 'nhapThemTien':nhapThemTien($data);
            break;
        case 'duyetTinCho':duyetTinCho($data);
            break;
        case 'themTinDB':themTinDB($data);
            break;
        case 'layDanhMucTin':layDanhMucTin($data);
            break;
        case 'xulyViPham':xulyViPham($data);
            break;
        default:break;
    }
}

/******************************************************/
/**********XỬ LÝ THIỂN THỊ THÔNG TIN NHÂN VIÊN********/
/****************************************************/
//Lấy thông tin của một nhân viên
function layThongTinNhanVien($MaNV = "")
{
    $qNV = ($MaNV == "") ? "" : "and nv.MANV='" . $MaNV . "'";

    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
            from NHANVIEN nv, CHUCVU cv, TAIKHOAN tk, PHANCONG pc
            where nv.MACV=cv.MACV and nv.MATK=tk.MATK and nv.MANV = pc.MANV " . $qNV . "
            group by nv.MANV;";
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
            from NHANVIEN nv, PHANCONG pc
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
            from  PHANCONG pc
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
function xulyDangXuat($data = array())
{
    $a = layMaPhanCongCuoi();
    $ma = TangMaSo($a[0]['MAPC'], "PC");
    include '../xulyphp/connect.php';
    include "../admin/xulyphp/logout.php";
    if ($data == null) {
        echo 'error loading input info';
        return;
    }

    $sql = 'INSERT into PHANCONG
    VALUES ("' . $ma . '", "' . $data[0] . '","' . $data[1] . '", "' . $data[2] . '", "' . $data[3] . '", "' . $data[4] . '")';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "New PHANCONG's record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

/*******************************************************/
/**********XỬ LÝ TRÊN TRANG NHÂN VIÊN QUẢNG CÁO********/
/*****************************************************/
//Lấy số thẻ cào chưa có giá trị
function laySoTheCaoTrong($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MADT) SOTM
            FROM DOANHTHU
            WHERE DOANHTHU < 10000;";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);

    }
    mysqli_close($conn);
    return $a['SOTM'];
}
//Lấy ra thông tin thẻ cào
function layThongTinTheCao($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT*
            from DOANHTHU dt, KHACHHANG kh
            where dt.MAKH=kh.MAKH;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}
//Lấy ra danh mục tin của tin đăng
function layDanhMucTin($MaTD = '')
{
    $qTD = ($MaTD == "") ? "" : "and tddm.matd='" . $MaTD . "'";
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT tddm.matd, dm.madm,dm.tendm
            FROM TD_THUOC_DM tddm, DANHMUC dm
            WHERE tddm.madm=dm.madm " . $qTD . ";";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return json_encode($a);
}

//Nhập sồ tiền vào Doanh thu, cập nhật số dư cho khách hàng
function nhapThemTien($data)
{
    include '../xulyphp/connect.php';

    $sql = 'UPDATE DOANHTHU
            SET DOANHTHU = ' . $data[2] . '
            WHERE MADT = "' . $data[0] . '";';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "1.successfully";
    } else {
        echo ".1 Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $sql = 'UPDATE KHACHHANG
            SET SODU = SODU + ' . $data[3] . '
            WHERE MAKH = "' . $data[1] . '";';
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "2.successfully";
    } else {
        echo ".2 Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

//Lấy só khuyến mãi
function laySoKhuyenMai($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MAKM) SOTM
            FROM KHUYENMAI";
    if ($result = mysqli_query($conn, $sql)) {
        $a = mysqli_fetch_assoc($result);

    }
    mysqli_close($conn);
    return $a['SOTM'];
}

//Lấy ra danh sách khuyến mãi
function layDanhSachKhuyenMai($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
            FROM KHUYENMAI km, NHANVIEN nv
            WHERE km.MANV=nv.MANV;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Thêm Khuyến mãi mới
function themKhuyenMai($data = array())
{
    $a = layMaKhuyenMaiCuoi();
    $ma = TangMaSo($a[0]['MAKM'], "KM");
    include '../xulyphp/connect.php';
    if ($data == null) {
        echo 'error loading input info';
        return;
    }

    $sql = 'INSERT into KHUYENMAI
    VALUES ("' . $ma . '", "' . $data[0] . '","' . $data[1] . '", "' . $data[5] . '", "' . $data[2] . '", "' . $data[3] . '", "' . $data[4] . '")';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "successfully".$ma;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

//Xóa 1 khuyến mãi
function xoaKhuyenMai($data = array())
{
    include '../xulyphp/connect.php';
    if ($data == null) {
        echo 'error loading input info';
        return;
    }

    $sql = 'DELETE FROM KHUYENMAI
    WHERE MAKM="' . $data[0] . '";';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

/********************************************************/
/**********XỬ LÝ TRÊN TRANG NHÂN VIÊN KIỂM DUYỆT********/
/******************************************************/
//Lấy ra số tin đặc biệt
function laySoTinDacBiet($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATD) SOTM
            FROM TINDANG
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
            FROM TINDANG
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
            FROM TINDANG
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
            FROM TINDANG
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
            FROM THACMAC
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
                from TINDANG td, KHACHHANG kh
                where td.MAKH = kh.MAKH  and TINHTRANGTIN in('duyet moi', 'duyet hot', 'duyet gg');";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}
//Lấy danh sách chi phí tạo tin đặc biệt
function layGiaTaoTinDB()
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
                from LOAITIN;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}
//Nhập tin đăng đã duyệt tạo tin đặc biệt
function themTinDB($data)
{
    include '../xulyphp/connect.php';

    $sql = 'UPDATE TINDANG
            SET TINHTRANGTIN = "da dang", LOAITIN = "' . $data[1] . '"
            WHERE MATD = "' . $data[0] . '";';
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "1.successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $sql = 'UPDATE KHACHHANG
            SET SODU = "' . $data[3] . '"
            WHERE MAKH = "' . $data[2] . '";';
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "2.successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}

//Lấy danh sách tin đăng đang chờ để được duyệt đăng
function layTinDangChoDuyet($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
                from TINDANG td, KHACHHANG kh
                where td.MAKH = kh.MAKH  and TINHTRANGTIN = 'dang cho' /*or TTKIEMDUYET = 0;*/";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Duyệt tin đăng đang chờ
function duyetTinCho($data)
{
    include '../xulyphp/connect.php';

    date_default_timezone_set('Asia/Ho_Chi_Minh');
    $day = date("Y/m/d");
    $sql = 'UPDATE TINDANG
            SET TTKIEMDUYET = 1, TINHTRANGTIN = "' . $data[2] . '", NGAYDANG="' . $day . '"
            WHERE MATD = "' . $data[0] . '";';
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "1.successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $a = layMaThongBaoTDCuoi();
    $ma = TangMaSo($a[0]['MATBTD'], "TB");

    $sql = 'INSERT INTO THONGBAOTINDANG
            VALUES ("' . $ma . '", "' . $data[0] . '","' . $day . ';';
    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "2.successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}

//Lấy danh sách tin đăng bị báo cáo
function layDanhSachBaoCaoVP($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *, tm.MAKH as KHBC
            from THACMAC tm, TINDANG td, KHACHHANG kh
            where tm.VANDEGIAIDAP = td.MATD and td.MAKH = kh.MAKH and LOAIHOTRO='vi pham'
            and tm.VANDEGIAIDAP not in(select MATD from XULYVIPHAM);";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

//Xử lý các tin đăng vi phạm
function xulyViPham($data = array())
{
    include '../xulyphp/connect.php';

    //Cập nhật kết quả giải đáp báo cáo vi phạm
    $sql = 'UPDATE THACMAC
            SET TRALOI = "' . $data[4] . '"
            WHERE MATM = "' . $data[0] . '";';

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "1.successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    //Cập nhật thông tin vi phạm
    if ($data[3] == "vi-pham") {
        $a = layViPhamCuoi();
        $ma = TangMaSo($a[0]['MAXULY'], "XL");
        include '../xulyphp/connect.php';
        if ($data == null) {
            echo 'error loading input data';
            return;
        }
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $day = date("Y/m/d H:i:s");
        $sql = "INSERT INTO XULYVIPHAM VALUE('$ma', '$data[1]','$data[2]','$day', '$data[4]');";

        mysqli_set_charset($conn, "utf8");
        if (mysqli_query($conn, $sql)) {
            echo "2.successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        $sql = 'UPDATE TINDANG
                SET TINHTRANGTIN = "da huy"
                WHERE MATD = "' . $data[2] . '";';

        mysqli_set_charset($conn, "utf8");
        if (mysqli_query($conn, $sql)) {
            echo "3.successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

    } else {
        echo "2.successfully3.successfully";
    }

    mysqli_close($conn);
}

//Lấy thông tin khách hàng
function layThongTinKhachHang($dsKH = array())
{

    $strMaKH = "";
    $qKH = "";
    if ($dsKH != null) {
        $strMaKH = implode("','", $dsKH);
        $qKH = "and MAKH in('" . $strMaKH . "')";
    }

    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT *
            from KHACHHANG
            where MAKH is not null " . $qKH . ";";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

/*****************************************************************/
/**********XỬ LÝ TRÊN TRANG NHÂN VIÊN CHĂM SÓC KHÁCH HÀNG********/
/***************************************************************/
//Lấy số câu hỏi chưa phản hồi
function laySoCauHoi($date = '')
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MATM) SOTM
                FROM THACMAC
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
                from THACMAC tm, KHACHHANG kh
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

    $sql = 'UPDATE THACMAC
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

/********************************************/
/**********XỬ LÝ TRÊN TRANG PHẢN HỒI********/
/******************************************/
//Lấy tổng số phản hồi
function laySoPhanHoi($date = "")
{
    $a = array();
    include '../../xulyphp/connect.php';
    $sql = "SELECT count(MAPH) SOPH
                FROM GHINHANPHANHOI ph;";
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
                FROM GHINHANPHANHOI ph, KHACHHANG kh
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
                from GHINHANPHANHOI ph, KHACHHANG kh
                where ph.MAKH = kh.MAKH;";
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

/**********************************************/
/****************CÁC HÀM XỬ LÝ PHỤ************/
/********************************************/
//Lấy mã khuyến mãi cuối
function layMaKhuyenMaiCuoi()
{
    $a = null;
    include '../xulyphp/connect.php';
    $sql = 'SELECT MAKM
    from KHUYENMAI
    order by MAKM desc
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

function layMaPhanCongCuoi()
{
    $a = null;
    include '../xulyphp/connect.php';
    $sql = 'SELECT MAPC
    from PHANCONG
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

//Lấy mã thông báo tin đăng cuối
function layMaThongBaoTDCuoi()
{
    $a = null;
    include '../xulyphp/connect.php';
    $sql = 'SELECT MATBTD
    from THONGBAOTINDANG
    order by MATBTD desc
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

//Lấy vi phạm cuối cùng
function layViPhamCuoi()
{
    $a = null;
    include '../xulyphp/connect.php';
    $sql = 'SELECT MAXULY FROM XULYVIPHAM
            ORDER BY MAXULY DESC
            LIMIT 1;';

    mysqli_set_charset($conn, "utf8");
    if ($result = mysqli_query($conn, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $a[] = $row;
        }
    }
    mysqli_close($conn);
    return $a;
}

function TangMaSo($Ma, $dau)
{
    if (!empty($Ma)) {
        $tukhoa = substr($Ma, 0, 2);
        $m = substr($Ma, 2);
        $z = 1 + $m;
        $MaMoi = '';
        if ($z < 10) {
            $MaMoi = $tukhoa . "000" . $z;
        } else if ($z < 100) {
            $MaMoi = $tukhoa . "00" . $z;
        } else if ($z < 1000) {
            $MaMoi = $tukhoa . "0" . $z;
        } else {
            $MaMoi = $tukhoa . $z;
        }
        return $MaMoi;
    }
    return $dau . "0001";
}

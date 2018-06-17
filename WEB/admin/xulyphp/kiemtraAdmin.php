<?php
function checkLogin($MaCV = '')
{
    $thisUrl = $_SERVER['REQUEST_URI'];
    switch ($MaCV) {
        //Nhân viên quản lý
        case "CV0001":
            //đồng ý truy cập tất cả các trang nếu là nhân viên quản lý
            break;
        //Nhân viên quảng cáo
        case "CV0002":
            //Nếu là nhân viên quảng cáo thì chỉ cho phép truy cập trang quảng cáo
            if (stripos($thisUrl, "admin/advertisement/") === false) {
                //echo '<script>alert("Bạn không thể truy cập trang này!")</script>';
                //http_response_code(403);
                header("Location: ../advertisement/index.php");
            }
            break;
        //Nhân viên chăm sóc khách hàng
        case "CV0003":
            //Nếu là nhân viên CSKH thì chỉ cho phép truy cập trang chăm sóc khách hàng
            if (stripos($thisUrl, "admin/customercare/") === false) {
                //echo '<script>alert("Bạn không thể truy cập trang này!")</script>';
                http_response_code(403);
                header("Location: ../customercare/index.php");
            }
            break;
        //Nhân viên kiểm duyệt
        case "CV0004":
            //Nếu là nhân viên kiểm duyệt thì chỉ cho phép truy cập trang kiểm duyệt
            if (stripos($thisUrl, "admin/censorship/") === false) {
                //echo '<script>alert("Bạn không thể truy cập trang này!")</script>';
                http_response_code(403);
                header("Location: ../censorship/index.php");
            }
            break;
        //Nhân viên Tài chính-kế toán
        case "CV0005":
            //Nếu là nhân viên kế toán thì chỉ cho phép truy cập trang tài chính kế toán
            if (stripos($thisUrl, "admin/finance/") === false) {
                //echo '<script>alert("Bạn không thể truy cập trang này!")</script>';
                http_response_code(403);
                header("Location: ../finance/index.php");
            }
            break;
        //Nhân viên kĩ thuật
        case "CV0006":break;
        default:
            header("Location: ../index.php");
            break;

    }
}

?>
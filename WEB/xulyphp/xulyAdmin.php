<?php
    /**********XỬ LÝ TRÊN TRANG CÂU HỎI********/
    //Lấy số câu hỏi chưa phản hồi
    function laySoCauHoi($date='')
    {
        $a = null;
        include('../../xulyphp/connect.php');
        $sql = "SELECT count(MATM) SOTM 
                FROM thacmac 
                WHERE TRALOI='';";
        if($result = mysqli_query($conn, $sql))
        {
           $a = mysqli_fetch_assoc($result);
             
        }
        mysqli_close($conn);
        return $a['SOTM'];
    }

    //lấy đầy đủ thông tin từ cả 2 bảng Thắc mắc và khách hàng
    function layCauHoiChiTiet($maTM="",$date=""){
        $a = null;
        include('../../xulyphp/connect.php');
        $sql = "SELECT *
                from thacmac tm, khachhang kh
                where tm.MAKH = kh.MAKH;";
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


    /**********XỬ LÝ TRÊN TRANG PHẢN HỒI********/
    //Lấy tổng số phản hồi
    function laySoPhanHoi( $date="")
    {
        $a = null;
        include('../../xulyphp/connect.php');
        $sql = "SELECT count(MAPH) SOPH
                FROM ghinhanphanhoi ph;";
        if($result = mysqli_query($conn, $sql))
        {
           $a = mysqli_fetch_assoc($result);
             
        }
        mysqli_close($conn);
        return $a['SOPH'];
    }

    //Lấy một số thông tin cơ bản của phản hồi (mã phản hồi, mà khách hàng, tên khách hàng, ngày phản hồi, mức độ hài lòng)
    //hàm này hiện tại không được dùng
    function layPhanHoiChung( $date="")
    {
        $a = null;
        include('../../xulyphp/connect.php');
        $sql = "SELECT MAPH, ph.MAKH, HOTEN, NGAYPH, MUCDO
                FROM ghinhanphanhoi ph, khachhang kh
                WHERE ph.MAKH = kh.MAKH;";
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
    //lấy đầy đủ thông tin từ cả 2 bảng Phản hồi và người dùng
    function layPhanHoiChiTiet($maPH="",$date=""){
        $a = null;
        include('../../xulyphp/connect.php');
        $sql = "SELECT *
                from ghinhanphanhoi ph, khachhang kh
                where ph.MAKH = kh.MAKH;";
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
?>
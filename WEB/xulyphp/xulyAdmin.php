<?php
    function layPhanHoi( $date="")
    {
        $a = null;
        include('../../xulyphp/connect.php');
        $sql = "SELECT *
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
?>
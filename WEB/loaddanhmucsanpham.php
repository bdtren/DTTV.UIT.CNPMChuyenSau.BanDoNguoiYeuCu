<?php
     
    include "connect.php";
    //LIMIT   1, 6

    // tao mang luu 6 san pham
    $a = array();
	$i = 0;
	$j=0;	
			
    $stmt = $conn->prepare("SELECT  TIEUDE,GIABAN,HOTEN,LOAITD,NGAYDANG 
                            FROM    TINDANG,KHACHHANG 
                            WHERE   TTKIEMDUYET=1 
                            AND     TINDANG.MAKH=KHACHHANG.MAKH 
                            LIMIT   $j,6");
	// đặt cấu trúc dữ liệu trả về
	$stmt->setFetchMode(PDO::FETCH_ASSOC);// trả về dạng mảng với key là tên cột
	//Gán giá trị và thực thi
    if($stmt->execute())
    {
			
        $count = $stmt->rowCount();
	    $result = $stmt->fetchAll();
        // Lấy đường dẫn ảnh danh mục lưu vào mảng
        
        //echo "$count ";
		foreach ($result as $row)  
		{
            //$HINHANH=$row['HINHANH'];
            $TIEUDE=$row['TIEUDE'];
            $GIABAN=$row['GIABAN'];
            //$TAMSU=$row['TAMSU'];
            $HOTEN=$row['HOTEN'];

            if($row['LOAITD']=='Ban')
                $LOAITD='Cần Bán';
            else
                $LOAITD='Cần Mua';
            $NGDANG=$row['NGAYDANG'];
            $a[$i] = array("tieude"=>$TIEUDE,"gia"=>$GIABAN,"ten"=>$HOTEN,"loai"=>$LOAITD,"ngay"=>$NGDANG);
            //echo 'document.getElementById("p1").innerHTML = $HINHANH;';
            //echo '';
            //echo 'document.getElementById("p3").innerHTML = $GIABAN;';
            //echo 'document.getElementById("p3").innerHTML = $TAMSU;';
            //echo 'document.getElementById("p4").innerHTML = $HOTEN;';
            //echo 'document.getElementById("p5").innerHTML = $LOAITD;';
            //echo 'document.getElementById("p7").innerHTML = $NGDANG;';
           // echo '</scripts>';
            $i++;
           
        } 
        //print_r($a);
       
    }
	// đóng kết nối csdl  
    $conn = null;

?>
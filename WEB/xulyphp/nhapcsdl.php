<?php
$action = "";
$info = [];
//Thân hàm chính
if(isset($_POST['inputFunction']) && !empty($_POST['inputFunction'])) {
    $action = $_POST['inputFunction'];
    if(isset($_POST['info']) && !empty($_POST['info'])) {
        $info = $_POST['info'];
    }

    switch($action) {
        case 'contact-us': themThacMac($info); break;
        case 'nhan-vien': bangNhanVien($query); break;
        case 'thiet-bi': bangThietBi($query); break;
        case 'doanh-thu' : bangDoanhThu($query); break;
        case 'thu-nhap': bangThuNhap($query); break;
        default: break;
    }
}
/******************************************************* */

//\/\/\/\/\Các hàm xử lý thêm dữ liệu vào csdl/\/\/\/\/\\
function layThacMacCuoi(){
    $a = null;
    include('../xulyphp/connect.php');
    $sql='SELECT MATM 
    from thacmac
    order by MATM desc
    limit 1;';

    mysqli_set_charset($conn, "utf8");
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
function tangMa($Ma){
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
function themThacMac($info){
    $a = layThacMacCuoi();
    $ma = tangMa($a[0]['MATM']);
    include('../xulyphp/connect.php');

    $customerInfo = $info[0].'_'.$info[1].'_'.$info[2].'\nNội dung: '.$info[3];
    $sql='INSERT into thacmac (MATM, MAKH, MANV, LOAIHOTRO, VANDEGIAIDAP, CHITIET)
    VALUES ("'.$ma.'", "KH0000","NV0000", "Liên hệ", "Liên hệ chúng tôi", "'.$customerInfo.'")';

    mysqli_set_charset($conn, "utf8");
    if(mysqli_query($conn, $sql))
    {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
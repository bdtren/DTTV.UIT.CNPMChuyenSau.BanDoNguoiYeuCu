<?php
$action = "";
$id="";
$data = "";
if (isset($_POST['callFunction']) && !empty($_POST['callFunction'])) {
    $action = $_POST['callFunction'];
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        $id = $_POST['id'];
    }
    if (isset($_POST['data']) && !empty($_POST['data'])) {
        $data = $_POST['data'];
    }
    switch ($action) {
        case 'nhapJsonSubscription':nhapJsonSubscription($id, $data);
            break;
        default:break;
    }
}
/**********************************Xử lý từ ajax ***************************************/
function nhapJsonSubscription($id, $data){
    include('connect.php');
    if ($data == null) {
        echo 'error loading input info';
        return;
    }

    $sql = "INSERT INTO NOTIFICATION (MATK,SUBSCRIPTION)
    VALUES ('".$id."','".$data."')
    ON DUPLICATE KEY UPDATE 
      SUBSCRIPTION='".$data."';" ;

    mysqli_set_charset($conn, "utf8");
    if (mysqli_query($conn, $sql)) {
        echo "successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

/***************************************************************************************/



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
            AND         TINHTRANGTIN = 'da dang'";
           // AND         NGAYDT < '$date' ";
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
function ChuoiToMang($string)
    {
        if(!empty($string))
        {
            return explode(';', $string);
        }
        return null;
    }
?>
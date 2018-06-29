<?php

/*********************************************************/
/**********XỬ LÝ HÌNH ẢNH TRÊN TRANG NV QUẢNG CÁO********/
/*******************************************************/
//Thêm ảnh quảng cáo mới

$location = "";
$srcName = $_FILES["anhDauVao"]["name"];
$data= json_decode($_POST["data"]);
if ($srcName!="") {
    $test = explode(".", $srcName);
    $ext = end($test);
    //$name = $data[0] . '-' . $data[1] . '-' . $data[2] .'-' . rand(1, 999) . '.' . $ext;
    $name = $data[0] . '-' . $data[1] . '-' . $data[2].$data[3] .'-' . $data[4] . '.' . $ext;
    $name = str_replace(';', '', $name);
    if($_POST["nguon"]=="km"){
        $location = '../Images/Promotion/'.$name;
        $pureLocation = './Images/Promotion/'.$name;
    } else if($_POST["nguon"]=="td"){
        $location = '../Images/san-pham/'.$name;
        $pureLocation = './Images/san-pham/'.$name;
    }
    move_uploaded_file($_FILES["anhDauVao"]["tmp_name"], $location);
}

echo $pureLocation;
//echo json_encode($data);

function TEMP()
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

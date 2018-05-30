<?php 
$action = "";
$sortType = "";

//Thân hàm chính
if(isset($_POST['callTable']) && !empty($_POST['callTable'])) {
    $action = $_POST['callTable'];
    if (isset($_POST['sort']) && !empty($_POST['sort'])){
        $sortType = $_POST['sort'];
    }
    switch($action) {
        case 'tin-dang' : bangTinDang($sortType); break;
        case 'nhan-vien': bangNhanVien($sortType); break;
        case 'thiet-bi': bangThietBi($sortType); break;
        case 'doanh-thu' : bangDoanhThu($sortType);break;
        case 'thu-nhap': bangThuNhap($sortType); break;
        default: break;
        // ...etc...
    }
}

///\/\/\/\/\/\/\/CÁC HÀM XỬ LÝ GỌI CSDL\/\/\/\/\/\/\/\/\\\
function csdlNhanVien(){
    $a = null;
    include('../xulyphp/connect.php');
    $sql="select nv.MANV, HOTEN, TENCV, SOGIOHD, HSLUONG, (cv.LUONGCB*cv.HSLUONG*pc.SOGIOHD) LUONG from nhanvien nv, chucvu cv, phancong pc
    where nv.MANV = pc.MANV and nv.MACV=cv.MACV;";

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



/********************************************************/
///\/\/\/\/\/\/\/CÁC HÀM XỬ LÝ XUẤT KẾT QUẢ VÀO WEB\/\/\/\/\/\/\/\/\\\
function bangTinDang($sort=""){
    echo '<thead>
            <tr>
                <th class="text-center" width="115px">STT</th>
                <th class="text-center" width="115px">Tên danh mục</th>
                <th class="text-center" width="115px">Số lượng tin</th>
                <th class="text-center" width="115px">Ngày</th>
                <th class="text-center" width="115px">Ghi chú</th>
            /tr>
          </thead>
          <tbody>
            <tr>
                <td class="text-center" width="150px">1/1/1111</td>
                <td class="text-center" width="150px">1 tỷ</td>
                <td class="text-center" width="150px">500 triệu</span></td>
                <td class="text-center" width="150px">500 triệu</span></td>
                <td class="text-center" width="150px">abcxyz</span></td>
            </tr>
            <tr>
                <td class="text-center" width="150px">2/2/2222</td>
                <td class="text-center" width="150px">10 tỷ</td>
                <td class="text-center" width="150px">500 triệu</span></td>
                <td class="text-center" width="150px">9.5 tỷ</span></td>
                <td class="text-center" width="150px">abcxyz</span></td>
            </tr>
           </tbody>';
}

function bangNhanVien($sort=""){
    $result = '<thead>
    <tr>
        <th class="text-center" width="115px">Mã nhân viên</th>
        <th class="text-center" width="115px">Tên nhân viên</th>
        <th class="text-center" width="115px">Chức vụ</th>
        <th class="text-center" width="115px">Số giờ làm</th>
        <th class="text-center" width="115px">Hệ số</th>
        <th class="text-center" width="115px">Lương</th>
    /tr>
  </thead>
  <tbody>';
    $a=csdlNhanVien();
    $lengthA = count($a);

    for( $i=0; $i<$lengthA; $i++){
        $result.='<tr>
        <td class="text-center" width="150px">'.$a[$i]['MANV'].'</td>
        <td class="text-center" width="150px">'.$a[$i]['HOTEN'].'</td>
        <td class="text-center" width="150px">'.$a[$i]['TENCV'].'</span></td>
        <td class="text-center" width="150px">'.$a[$i]['SOGIOHD'].'</span></td>
        <td class="text-center" width="150px">'.$a[$i]['HSLUONG'].'</span></td>
        <td class="text-center" width="150px">'.$a[$i]['LUONG'].'</span></td>
    </tr>';
    }
    $result.='</tbody>//Họ tên//Lương';
    
    for( $i=0; $i<$lengthA; $i++){
        $result.='//'.$a[$i]['HOTEN'].'//'.$a[$i]['LUONG'];
    }

    echo $result;

}

function bangDoanhThu($sort ="not thing"){
    echo '<thead>
            <tr>
                <th class="text-center" width="115px">Ngày tháng năm</th>
                <th class="text-center" width="115px">Số tiền kiếm được</th>
                <th class="text-center" width="115px">Sổ tiền mất</th>
                <th class="text-center" width="115px">Doanh thu</th>
            /tr>
          </thead>
          <tbody>
            <tr>
                <td class="text-center" width="150px">1/1/1111</td>
                <td class="text-center" width="150px">1 tỷ</td>
                <td class="text-center" width="150px">500 triệu</span></td>
                <td class="text-center" width="150px">500 triệu</span></td>
            </tr>
            <tr>
                <td class="text-center" width="150px">2/2/2222</td>
                <td class="text-center" width="150px">10 tỷ</td>
                <td class="text-center" width="150px">500 triệu</span></td>
                <td class="text-center" width="150px">9.5 tỷ</span></td>
            </tr>
           </tbody>'; 
}
    
?>
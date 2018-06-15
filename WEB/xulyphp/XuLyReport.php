<?php 
$action = "";
$sortType = "";
$inputValue = "";
$query = "";
$timeSelect = "NGAYDANG";

//Thân hàm chính
if(isset($_POST['callTable']) && !empty($_POST['callTable'])) {
    $action = $_POST['callTable'];
    if (isset($_POST['sort']) && !empty($_POST['sort'])){
        $sortType = $_POST['sort'];

        if(isset($_POST['inputValue']) && !empty($_POST['inputValue'])){
            $inputValue = $_POST['inputValue'];

            switch($action) {
                case 'tin-dang' : $timeSelect = "NGAYDANG"; break;
                case 'nhan-vien': $timeSelect = "NGAYPC"; break;
                case 'thiet-bi': $timeSelect = "NGAYKT"; break;
                case 'doanh-thu' : $timeSelect = "NGAYTHU"; break;
                case 'thu-nhap': $timeSelect = "NGAYPC"; break;
                default: break;
            }

            switch($sortType){
                case 'date':
                    $query = ' and date('.$timeSelect.') BETWEEN "'.$inputValue.' 00:00:00" AND "'.$inputValue.' 23:59:59"';
                    break;
                case 'week':
                    $dates = explode("-", $inputValue);
                    $week = substr($dates[1], 1);
                    $firstDayofYear = new DateTime(''.$dates[0].'-1-1');                  
                    $firstMonday = $firstDayofYear->modify('second monday')->format('Y-m-d');
        
                    $step = ($week-3)*7;
                    $thisMonday = date('Y-m-d', strtotime($firstMonday."+".$step." days"));
                    $thisSunday = date('Y-m-d', strtotime($thisMonday."+6 days"));
                    
                    $query = ' and date('.$timeSelect.') BETWEEN "'.$thisMonday.' 00:00:00" AND "'.$thisSunday.' 23:59:59"';
                    break;
                case 'month':
                    $dates = explode("-", $inputValue);
                    $query = ' and month('.$timeSelect.')='.$dates[1].' and year('.$timeSelect.')='.$dates[0].'';
                    break;
                case 'quarter':
                    $dates = explode("/", $inputValue);
                    $groupMonth = "";
                    switch($dates[0]){
                        case 1: 
                            $groupMonth = "(1, 2, 3)";
                            break;
                        case 2: 
                            $groupMonth = "(4, 5, 6)";
                            break;
                        case 3: 
                            $groupMonth = "(7, 8, 9)";
                            break;
                        case 4:
                            $groupMonth = "(10, 11, 12)"; 
                            break;
                        default : 
                            break;
                    }
                    $query = ' and month('.$timeSelect.') in '.$groupMonth.' and year('.$timeSelect.')='.$dates[1].''; 
                    break;
                case 'year':
                $query = ' and year('.$timeSelect.')='.$inputValue.'';
                    break;
                default: 
                    break;
            }
        }
    }
    
    switch($action) {
        case 'tin-dang': bangTinDang($query); break;
        case 'nhan-vien': bangNhanVien($query); break;
        case 'thiet-bi': bangThietBi($query); break;
        case 'doanh-thu' : bangDoanhThu($query); break;
        case 'thu-nhap': bangThuNhap($query); break;
        default: break;
    }

    
}

///\/\/\/\/\/\/\/CÁC HÀM XỬ LÝ GỌI CSDL\/\/\/\/\/\/\/\/\\\
function csdlTinDang($sort=""){
    $a = null;
    include('../xulyphp/connect.php');
    $sql='SELECT cttd.MADM, TENDM, count(MATD) SoTin 
    from danhmuc dm, (select MADM, td.MATD, TIEUDE, NGAYDANG 
                        from tindang td, td_thuoc_dm tddm
                        where td.MATD=tddm.MATD'.$sort.') cttd
    where dm.MADM = cttd.MADM
    group by cttd.MADM
    order by cttd.MADM asc;';

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


function csdlNhanVien($sort=""){
    $a = null;
    include('../xulyphp/connect.php');
    $sql='SELECT nv.MANV, HOTEN, TENCV,sum(SOGIOHD) SOGIOHD, HSLUONG, LUONGCB, (hsluong*luongcb*temp.sum) Luong
        from nhanvien nv, chucvu cv, phancong pc, (SELECT nv2.MANV manv2, sum(SOGIOHD) sum
                                                    from nhanvien nv2, chucvu cv2, phancong pc2
                                                    where nv2.MANV = pc2.MANV and nv2.MACV=cv2.MACV'.$sort.'
                                                    group by nv2.MANV) temp
        where nv.MANV = pc.MANV and nv.MACV=cv.MACV'.$sort.' and nv.manv=temp.manv2
        group by nv.MANV;';

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

function csdlThietBi($sort=""){
    $a = null;
    include('../xulyphp/connect.php');
    $sql='SELECT tb.MATB, TENTB, GIATRI, NGAYNHAP, MAKT, NGAYKT, TINHTRANG, ChiPhi, kt.GHICHU
    from thietbi tb, kiemtratb kt, (select tb1.MATB, case
                                                when TINHTRANG="Hu" 
                                                    then GIATRI
                                                else 0
                                            end as ChiPhi
                                    from thietbi tb1, kiemtratb kt1
                                    where tb1.MATB = kt1.MATB'.$sort.') sc
    where tb.MATB = kt.MATB and sc.MATB = kt.MATB'.$sort.';';

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

function csdlDoanhThu($sort=""){
    $a = null;

    include('../xulyphp/connect.php');
    $sql='SELECT MADT, LYDO, NGAYTHU, DOANHTHU 
    from doanhthu 
    where MADT is not NULL'.$sort.'
    group by LYDO, NGAYTHU;';

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
    $result =  '<thead <!--'.$sort.'-->>
    <tr>
        <th class="text-center" width="115px">Mã danh mục</th>
        <th class="text-center" width="115px">Tên danh mục</th>
        <th class="text-center" width="115px">Số tin đăng</th>
    </tr>
  </thead>
  <tbody>';
  $a=csdlTinDang($sort);
  if(!$a){
      echo $result;
      return;
  }
  $lengthA = count($a);

  for( $i=0; $i<$lengthA; $i++){
      $result.='<tr>
      <td class="text-center" style="width:195px !important;">'.$a[$i]['MADM'].'</td>
      <td class="text-center" style="width:195px !important;">'.$a[$i]['TENDM'].'</td>
      <td class="text-center" style="width:175px !important;">'.$a[$i]['SoTin'].'</span></td>   
  </tr>';
  }
  $result.='</tbody>//Tên danh mục//số tin đăng';
  
  for( $i=0; $i<$lengthA; $i++){
      $result.='//'.$a[$i]['TENDM'].'//'.$a[$i]['SoTin'];
  }

  echo $result;  
}

function bangNhanVien($sort=""){
    // <!--'.$sort.'-->
    $result = '<thead> 
    <tr>
        <th class="text-center" width="115px">Mã nhân viên</th>
        <th class="text-center" width="115px">Tên nhân viên</th>
        <th class="text-center" width="115px">Chức vụ</th>
        <th class="text-center" width="115px">Số giờ làm</th>
        <th class="text-center" width="115px">Hệ số</th>
        <th class="text-center" width="115px">Lương(VND)</th>
    </tr>
  </thead>
  <tbody>';
    $a=csdlNhanVien($sort);
    if(!$a){
        echo $result;
        return;
    }
    $lengthA = count($a);

    for( $i=0; $i<$lengthA; $i++){
        $result.='<tr>
        <td class="text-center" style="width:84px !important;">'.$a[$i]['MANV'].'</td>
        <td class="text-center" style="width:84px !important;">'.$a[$i]['HOTEN'].'</td>
        <td class="text-center" style="width:85px !important;">'.$a[$i]['TENCV'].'</span></td>
        <td class="text-center" style="width:80px !important;">'.number_format($a[$i]['SOGIOHD'],3).'</span></td>
        <td class="text-center" style="width:76px !important;">'.$a[$i]['HSLUONG'].'</span></td>
        <td class="text-center" style="width:96px !important;">'.number_format($a[$i]['Luong']).'</span></td>
    </tr>';
    }
    $result.='</tbody>//Họ tên//Lương';
    
    for( $i=0; $i<$lengthA; $i++){
        $result.='//'.$a[$i]['HOTEN'].'//'.$a[$i]['Luong'];
    }

    echo $result;
}

function bangThietBi($sort =""){
    echo '<thead>
    <tr>
        <th class="text-center" width="115px">Mã thiết bị</th>
        <th class="text-center" width="115px">Tên thiết bị</th>
        <th class="text-center" width="115px">Giá trị</th>
        <th class="text-center" width="115px">Ngày nhập</th>
        <th class="text-center" width="115px">Mã kiểm tra</th>
        <th class="text-center" width="115px">Ngày kiểm tra</th>
        <th class="text-center" width="115px">Tình trạng</th>
        <th class="text-center" width="115px">Chi phí</th>
        <th class="text-center" width="115px">Ghi chú</th>
    </tr>
  </thead>
  <tbody>'; 
  $a=csdlThietBi($sort);
  if(!$a){
      echo $result;
      return;
  }
  $lengthA = count($a);

  for( $i=0; $i<$lengthA; $i++){
      $result.='<tr>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['MATB'].'</td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['TENTB'].'</td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['GIATRI'].'</span></td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['NGAYNHAP'].'</span></td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['MAKT'].'</span></td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['NGAYKT'].'</span></td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['TINHTRANG'].'</span></td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['ChiPhi'].'</span></td>
      <td class="text-center" style="width:84px !important;">'.$a[$i]['GHICHU'].'</span></td>
      
  </tr>';
  }
  $result.='</tbody>//Tên Thiết bị//Chi phí bảo dưỡng';
  
  for( $i=0; $i<$lengthA; $i++){
      $result.='//'.$a[$i]['TENTB'].'//'.$a[$i]['ChiPhi'];
  }

  echo $result;
}

function bangDoanhThu($sort =""){
    $result = '<thead <!--'.$sort.'-->>
    <tr>
        <th class="text-center" width="115px">Mã Doanh thu</th>
        <th class="text-center" width="115px">Lý do</th>
        <th class="text-center" width="115px">Ngày thu</th>
        <th class="text-center" width="115px">Doanh thu</th>
    </tr>
  </thead>
  <tbody>'; 

  $a=csdlDoanhThu($sort);
  if(!$a){
      echo $result;
      return;
  }
  $lengthA = count($a);

  for( $i=0; $i<$lengthA; $i++){
      $result.='<tr>
      <td class="text-center" width="150px">'.$a[$i]['MADT'].'</td>
      <td class="text-center" width="150px">'.$a[$i]['LYDO'].'</td>
      <td class="text-center" width="150px">'.$a[$i]['NGAYTHU'].'</span></td>
      <td class="text-center" width="150px">'.$a[$i]['DOANHTHU'].'</span></td>
  </tr>';
  }
  $result.='</tbody>//Lý do//Doanh thu';
  
  for( $i=0; $i<$lengthA; $i++){
      $result.='//'.date("d-m-Y", strtotime($a[$i]['NGAYTHU'])).' '.$a[$i]['LYDO'].'//'.$a[$i]['DOANHTHU'];
  }

  echo $result;
}

function bangThuNhap($sort ="not thing"){
    echo '<thead>
            <tr>
                <th class="text-center" width="115px">Ngày tháng năm</th>
                <th class="text-center" width="115px">Số tiền kiếm được</th>
                <th class="text-center" width="115px">Sổ tiền mất</th>
                <th class="text-center" width="115px">Doanh thu</th>
            </tr>
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
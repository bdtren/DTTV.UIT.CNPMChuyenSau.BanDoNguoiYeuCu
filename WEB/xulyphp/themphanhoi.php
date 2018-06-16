<?php
    $a = null;
    if(isset($_POST['DATA']))
    {
        $a = $_POST['DATA'];
    }
    // include('xulyphp/connect.php');
    //Lấy dữ liệu từ form phan hoi
    // $makh            = $_POST['MAKH'];
    // $hailong         = $_POST['MDHL'];
    // $gioithieu       = $_POST['KNGT'];
    // $phanhoikhac     = addslashes($_POST['PH']);       
    //echo $makh;

    // chuyen mang thanh danh chuoi string
    return json_encode($a);
    // <script language="javascript">    
    // var string = JSON.stringify($a); 
    // return string;  
    // </script>                
        //lấy ra id cuối cùng và +1
    // $sql = "SELECT MAPH FROM GHINHANPHANHOI ORDER BY MAPH DESC LIMIT 1";
    // $result = mysqli_query($conn, $sql);
    // if (mysqli_num_rows($result) == 0) 
    // {
    //     $MaPH = "PH0000";
    // }
    // else
    // {
    //     if($row = mysqli_fetch_assoc($result))
    //     {
    //         $MaPH = TangMa($row['MAPH']);
    //          }
    //      }
    //     echo "<script language='javascript'> alert('ufyfy'); </script>";
    //     echo $day;
    //     $day = date("Y/m/d");
    //     echo $day;
    //     //Lưu phan hoi
    //      $sql = "INSERT INTO  GHINHANPHANHOI (MAPH,MAKH,NGAYPH,MUCDO,KNGT,PHANHOI) VALUE ('PH0012','KH0003','2018-11-30','1','3','jrubdhge')";
    //      if(mysqli_query($conn, $sql))
    //      {
    //          echo '<script language="javascript"> alert("Cảm ơn bạn đã phản hồi!") </script>'; 
    //      } 
    //      else
    //      {
    //          echo '<script language="javascript"> alert("loi !") </script>'; 
    //      }             
    //      mysqli_close($conn);  
?> 
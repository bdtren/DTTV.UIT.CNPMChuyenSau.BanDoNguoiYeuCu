<?php
     
    // include "connect.php";
    
    // $DanhMuc=array(28);
	// $i=0;

	// $sql = "SELECT DDANH FROM DANHMUC";
	// if($result = mysqli_query($conn, $sql))
	// {
	// 	while($row = mysqli_fetch_assoc($result))
	// 	{
	// 		$DanhMuc[$i]=$row['DDANH'];
	// 		$i++;
	// 		//echo $DanhMuc[0];
	// 	}
	// }
	
	// // đóng kết nối csdl  
	// mysqli_close($conn);
	function LoadDanhMuc()
    {
        include "connect.php";
        
        $b=array(28);
        $p=0;

		$sql = "SELECT * FROM DANHMUC ORDER BY MADM";
		mysqli_set_charset($conn, "utf8");
        if($result = mysqli_query($conn, $sql))
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $b[$p]= array('MADM' => $row['MADM'],'DDANH' => $row['DDANH'],'TENDM' => $row['TENDM'],'KTDM' => $row['KTDM']);
                $p++;
            }
            return $b;
        } 
        mysqli_close($conn);
    }

?>
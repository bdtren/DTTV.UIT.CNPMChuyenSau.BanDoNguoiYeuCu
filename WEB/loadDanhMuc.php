<?php
     
    include "connect.php";
    
    $DanhMuc=array(28);
	$i=0;

	$sql = "SELECT DDANH FROM DANHMUC";
	if($result = mysqli_query($conn, $sql))
	{
		while($row = mysqli_fetch_assoc($result))
		{
			$DanhMuc[$i]=$row['DDANH'];
			$i++;
			//echo $DanhMuc[0];
		}
	}
	
	// đóng kết nối csdl  
    mysqli_close($conn);

?>
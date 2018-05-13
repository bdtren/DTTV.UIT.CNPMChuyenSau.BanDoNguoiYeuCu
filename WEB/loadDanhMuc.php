<?php
     
    include "connect.php";
    
    $stmt = $conn->prepare('SELECT TENDM, DDANH FROM DANHMUC');
	// đặt cấu trúc dữ liệu trả về
	$stmt->setFetchMode(PDO::FETCH_ASSOC);// trả về dạng mảng với key là tên cột
	//Gán giá trị và thực thi
	if($stmt->execute())
	{
		//array('name' => $username)
		// mảng lưu đường dẫn ảnh danh mục
		$a=array(10);
		$i=0;
		// Lấy đường dẫn ảnh danh mục lưu vào mảng
		while($row = $stmt->fetch()) 
		{
			$a[$i]=$row['DDANH'];
			$i++;
		} 
	}
	// đóng kết nối csdl  
    $conn = null;

?>
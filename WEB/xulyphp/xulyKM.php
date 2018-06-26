<?php
	function layKhuyenMai(){
		$a = null;
		include 'connect.php';
		$sql = 'SELECT *
		from KHUYENMAI;';

		mysqli_set_charset($conn, "utf8");
		if ($result = mysqli_query($conn, $sql)) {
			while ($row = mysqli_fetch_assoc($result)) {
				$a[] = $row;
			}
		}
		mysqli_close($conn);
		return $a;
	}

	function layMotKhuyenMai($MaKM){
		$a = null;
		include 'connect.php';
		$sql = 'SELECT *
		from KHUYENMAI 
		where MAKM="'.$MaKM.'";';

		mysqli_set_charset($conn, "utf8");
		if ($result = mysqli_query($conn, $sql)) {
			while ($row = mysqli_fetch_assoc($result)) {
				$a[] = $row;
			}
		}
		mysqli_close($conn);
		return $a[0];
	}
?>
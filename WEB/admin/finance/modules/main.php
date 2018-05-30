 <?php

	if(isset($_GET['page'])){
		$temp=$_GET['page'];
	}
	else{
		$temp='';
	}

	if($temp=='report')  
	{
		include('modules/modules-main-section/report.php');
	}
	else{
		include('modules/modules-main-section/checkcard.php');
	}

?>
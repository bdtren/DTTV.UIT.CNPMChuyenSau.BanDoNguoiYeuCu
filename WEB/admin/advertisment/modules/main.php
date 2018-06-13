 <?php

	if(isset($_GET['page'])){
		$temp=$_GET['page'];
	}
	else{
		$temp='';
	}

	if($temp=='promotion')  
	{
		include('modules/modules-main-section/promotion.php');
	}
	else{
		include('modules/modules-main-section/checkcard.php');
	}

?>
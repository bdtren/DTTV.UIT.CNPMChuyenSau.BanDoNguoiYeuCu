 <?php

	if(isset($_GET['page'])){
		$temp=$_GET['page'];
	}
	else{
		$temp='';
	}

	if($temp=='feedback'){
		include('modules/modules-main-section/feedback.php');
	}
	else{
		include('modules/modules-main-section/question.php');
	}

?>
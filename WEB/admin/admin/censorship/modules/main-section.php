 <?php

	if(isset($_GET['page'])){
		$temp=$_GET['page'];
	}
	else{
		$temp='';
	}

	if($temp=='breach'){
		include('modules/modules-main-section/breach.php');
	}
	else if($temp=='special-news'){
		include('modules/modules-main-section/special-news.php');
	}
	else{
		include('modules/modules-main-section/articles-waiting.php');
	}

?>
                    
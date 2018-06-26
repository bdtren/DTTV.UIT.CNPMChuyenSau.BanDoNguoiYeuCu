 <?php

	if(isset($_GET['page'])){
		$temp=$_GET['page'];
	}
	else{
		$temp='';
	}

	if($temp=='article-buy')  //Danh sách bài đăng mua
	{
		include('modules-main-section/article-buy.php');
	}
	else if($temp=='article-sale')  //Danh sách bài đăng bán
	{
		include('modules-main-section/article-sale.php');
	}
	else if($temp=='waiting')  //Danh sách bài đăng đang cờ duyệt
	{
		include('modules-main-section/waiting.php');
	}
	else if($temp=='follow')  //Danh sách bài đăng bán
	{
		include('modules-main-section/follow.php');
	}
	else if($temp=='follower')  //Danh sách bài đăng bán
	{
		include('modules-main-section/followers.php');
	}
	else if($temp=='news-follow')  //Danh tin theo dõi
	{
		include('modules-main-section/news-follow.php'); //trang
	}
	else if($temp=='num-break')  //Danh sách vi phạm
	{
		include('modules-main-section/num-break.php'); //trang
	}
	else
	{
		include('modules-main-section/dashboard.php');	
	}

?>
                    
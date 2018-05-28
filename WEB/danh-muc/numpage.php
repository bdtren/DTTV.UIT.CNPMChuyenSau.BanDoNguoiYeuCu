<!-- Số trang sản phẩm sua -->
<nav aria-label="Page navigation example" style="float: right;">
	<ul class="pagination">	
	<?php
		$z=1; 
		$actNum = "";
		$numOfPages=CEIL(DemSanPham($DanhMuc)/6);
		//$numOfPages = 100;

		$show = 5;
		if($numOfPages<=6){
			while( $z <= $numOfPages)
			{
				if($numpage==$z||($numpage==0&&$z==1)){
					$actNum = "active";
				}
				else{
					$actNum = "";
				}
				
				if(!empty($DanhMuc))
				{
					if($z==1)
						$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType";
					else
						$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
				}
				else		
					$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
					
				echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
				$z++;
			}
		} else{
			if($numpage<5){
				while( $z <= 5)
				{
					if($numpage==$z||($numpage==0&&$z==1)){
						$actNum = "active";
					}
					else{
						$actNum = "";
					}
					
					if(!empty($DanhMuc))
					{
						if($z==1)
							$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType";
						else
							$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
					}
					else		
						$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						
					echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
					$z++;
				}

				//Xử lý trang cuối
				echo "<li class='page-item'>...</li>";
				$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$numOfPages";
				echo "<li class='page-item'><a class='page-link' href='$string'>$numOfPages</a></li>";
			} else if($numpage>=5&&$numpage<=($numOfPages-5)){
				//xử lý trang đầu tiên
				$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."1";
				echo "<li class='page-item'><a class='page-link' href='$string'>1</a></li>";
				echo "<li class='page-item'>...</li>";

				$z = $numpage-2;				
				while($z<=($numpage+2)){
					if($numpage==$z||($numpage==0&&$z==1)){
						$actNum = "active";
					}
					else{
						$actNum = "";
					}
					
					if(!empty($DanhMuc))
					{
						$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&n=1&numpage="."$z";
					}
					else		
						$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						
					echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
					$z++;
				}

				//Xử lý trang cuối
				echo "<li class='page-item'>...</li>";
				$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$numOfPages";
				echo "<li class='page-item'><a class='page-link' href='$string'>$numOfPages</a></li>";
			} else if($numpage>($numOfPages-5)){
				//xử lý trang đầu tiên
				$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."1";
				echo "<li class='page-item'><a class='page-link' href='$string'>1</a></li>";
				echo "<li class='page-item'>...</li>";

				$z=$numOfPages-5;
				while($z<=$numOfPages){
					if($numpage==$z||($numpage==0&&$z==1)){
						$actNum = "active";
					}
					else{
						$actNum = "";
					}
					
					if(!empty($DanhMuc))
					{
						if($z==1)
							$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType";
						else
							$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
					}
					else		
						$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						
					echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
					$z++;
				}
			}
		}
	
	//<li class="page-item active"><a class="page-link" href="#">1</a></li>
	//<li class="page-item"><a class="page-link" href="#">2</a></li>
	//<li class="page-item"><a class="page-link" href="#">3</a></li>
	?>
	</ul>
</nav>

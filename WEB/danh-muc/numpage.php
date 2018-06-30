<!-- Số trang sản phẩm sua -->
<nav aria-label="Page navigation example" style="float: right;">
	<ul class="pagination">	
	<?php
		if(empty($Search))
		{
			$z=1; 
			$actNum = "";
			$numOfPages=CEIL((float)DemSanPham($DanhMuc, $Type)/6);	
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
							$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType";
						else
							$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
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
								$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType";
							else
								$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						}
						else		
							$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
							
						echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
						$z++;
					}
	
					//Xử lý trang cuối
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
					$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$numOfPages";
					echo "<li class='page-item'><a class='page-link' href='$string'>$numOfPages</a></li>";
				} else if($numpage>=5&&$numpage<=($numOfPages-5)){
					//xử lý trang đầu tiên
					$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."1";
					echo "<li class='page-item'><a class='page-link' href='$string'>1</a></li>";
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
	
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
							$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&n=1&numpage="."$z";
						}
						else		
							$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
							
						echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
						$z++;
					}
	
					//Xử lý trang cuối
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
					$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$numOfPages";
					echo "<li class='page-item'><a class='page-link' href='$string'>$numOfPages</a></li>";
				} else if($numpage>($numOfPages-5)){
					//xử lý trang đầu tiên
					$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."1";
					echo "<li class='page-item'><a class='page-link' href='$string'>1</a></li>";
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
	
					$z=$numOfPages-4;
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
								$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType";
							else
								$string = "category.php?DanhMuc="."$DanhMuc"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						}
						else		
							$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
							
						echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
						$z++;
					}
				}
			}
		}
		else
		{
			$z=1; 
			$actNum = "";
			$numOfPages=CEIL((float)DemSanPhamTimKiem($Search, $Type)/9);	
			//$numOfPages = 100;
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
							$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType";
						else
							$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
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
								$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType";
							else
								$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						}
						else		
							$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
							
						echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
						$z++;
					}
	
					//Xử lý trang cuối
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
					$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$numOfPages";
					echo "<li class='page-item'><a class='page-link' href='$string'>$numOfPages</a></li>";
				} else if($numpage>=5&&$numpage<=($numOfPages-5)){
					//xử lý trang đầu tiên
					$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."1";
					echo "<li class='page-item'><a class='page-link' href='$string'>1</a></li>";
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
	
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
							$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&n=1&numpage="."$z";
						}
						else		
							$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
							
						echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
						$z++;
					}
	
					//Xử lý trang cuối
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
					$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$numOfPages";
					echo "<li class='page-item'><a class='page-link' href='$string'>$numOfPages</a></li>";
				} else if($numpage>($numOfPages-5)){
					//xử lý trang đầu tiên
					$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."1";
					echo "<li class='page-item'><a class='page-link' href='$string'>1</a></li>";
					echo "<li class='page-item' style='font-size: 25px; font-weight: bolder; color: blue;'>&ensp;...&ensp;</li>";
	
					$z=$numOfPages-4;
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
								$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType";
							else
								$string = "category.php?Search="."$Search"."&Type="."$Type"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
						}
						else		
							$string = "category.php?&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";
							
						echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
						$z++;
					}
				}
			}
		}
		
	?>	
	</ul>
</nav>

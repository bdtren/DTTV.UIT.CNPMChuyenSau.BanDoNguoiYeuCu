<!-- Số trang sản phẩm sua -->
<nav aria-label="Page navigation example" style="float: right;">
	<ul class="pagination">	
	<?php
		if(empty($Search))
		{
			$z=1; 
			$actNum = "";
			$numOfPages=CEIL((float)DemSanPham($DanhMuc)/6);	
			while( $z <= $numOfPages)
			{
				if($numpage==$z)
				{
					$actNum = "active";
				}
				else
				{
					$actNum = "";
				}			
				$string = "category.php?DanhMuc="."$DanhMuc"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";			
				echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
				$z++;
			}
		}
		else
		{
			$z=1; 
			$actNum = "";
			$numOfPages=CEIL((float)DemSanPhamTimKiem($Search)/9);	
			while( $z <= $numOfPages)
			{
				if($numpage==$z)
				{
					$actNum = "active";
				}
				else
				{
					$actNum = "";
				}			
				$string = "category.php?Search="."$Search"."&Sort="."$Sort"."&SortType="."$SortType"."&numpage="."$z";			
				echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
				$z++;
			}
		}
		
	?>	
	</ul>
</nav>

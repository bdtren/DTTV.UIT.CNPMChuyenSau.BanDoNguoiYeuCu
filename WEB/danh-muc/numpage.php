<!-- Số trang sản phẩm sua -->
<nav aria-label="Page navigation example" style="float: right;">
	<ul class="pagination">	
	<?php
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
	?>	
	</ul>
</nav>

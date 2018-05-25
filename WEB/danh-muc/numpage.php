<!-- Số trang sản phẩm sua -->
<nav aria-label="Page navigation example" style="float: right;">
	<ul class="pagination">	
	<?php
		$z=1; 
		$actNum = "";
		while( $z <= CEIL(DemSanPham($DanhMuc)/6))
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
	
	//<li class="page-item active"><a class="page-link" href="#">1</a></li>
	//<li class="page-item"><a class="page-link" href="#">2</a></li>
	//<li class="page-item"><a class="page-link" href="#">3</a></li>
	?>
	</ul>
</nav>

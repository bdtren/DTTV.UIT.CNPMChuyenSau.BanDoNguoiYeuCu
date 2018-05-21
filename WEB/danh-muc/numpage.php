<!-- Số trang sản phẩm sua -->
<nav aria-label="Page navigation example" style="float: right;">
	<ul class="pagination">	
	<?php
		$z=1; 
		$actNum = "";
		while( $z <= DemSp($DanhMuc))
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
					$string = "category.php?DanhMuc="."$DanhMuc";//."&DanhMuc="."$DanhMuc";
				else
					$string = "category.php?numpage="."$z"."&DanhMuc="."$DanhMuc";//."&DanhMuc="."$DanhMuc";

			}
			else		
				$string = "category.php?numpage="."$z";
				
			echo "<li class='page-item $actNum'><a class='page-link' href='$string'>$z</a></li>";
			$z++;
		}
	
	//<li class="page-item active"><a class="page-link" href="#">1</a></li>
	//<li class="page-item"><a class="page-link" href="#">2</a></li>
	//<li class="page-item"><a class="page-link" href="#">3</a></li>
	?>
	</ul>
</nav>

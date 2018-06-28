<!-- Thanh tiêu đề -->
<nav class="navbar navbar-expand-md navbar-default bg-default">
  <a class="navbar-brand" href="../index.php"><img src="../Images/logo-1.png" style="width:210px;"></a>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto"></ul>
    <ul class="navbar-nav navbar-right">
      <li class="nav-item"><a class="nav-link">Chào mừng <?php echo $UserName; ?></a></li>
      <li class="nav-item"><a class="nav-link" href="../xulyphp/logout.php">Đăng xuất</a></li>
    </ul>
  </div>
</nav>
<!-- Kết thúc thanh tiêu đề -->

        <script>
          var MAKH = "<?php echo $MaKH?>";
        </script> 

<!-- Thanh tiêu đề -->
<header id="header">
  <div class="container-fluid">
    <div class="row">

      <div class="col-md-6"><h1><i class="fa fa-dashboard"></i> <small>Trang người dùng</small></h1></div>
	
	  <!--<div class="col-md-offset-2">

	  </div> 
		
  		<div class="col-md-offset-2">
		 
	  </div>
	-->
	 
	   <div class="col-md-6">
		  <button type="button" class="btn btn-type-purple" id="thacmac" data-toggle="modal" data-target="#addReq">Thắc mắc</button>
		  <button type="button" class="btn btn-type-pink" id="yeucau" data-toggle="modal" data-target="#addRes">Phản hồi</button>
		  <button type="button" class="btn btn-type-blue" data-toggle="modal" data-target="#addPost" >Đăng bài</button>
		  
	  </div>
		




    </div>
  </div>
</header>
<!-- Kết thúc thanh tiêu đề -->

<!-- Modal -->
<!-- Thêm bài đăng-->
<form action='user-page.php' method='post'>
<div class="modal fade" id="addPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Thêm bài đăng</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>

      <div class="modal-body">

        <!-- Form Đăng tin -->
        <div class="form-group">
          <label >Tiêu đề tin</label>
          <input type="text" class="form-control" placeholder="Nhập tiêu đề..." requirer id='tieude' name='tieude'>
        </div>
  
        <div class="form-group">
          <label >Loại tin:</label>
          <select class="form-control" name='loai' id="loai">
            <option value='Bán'>Cần bán</option>
            <option value='Mua'>Cần mua</option>
            <option value='Tặng'>Tặng</option>
          </select>
        </div>
  
        <div class="form-group">
          <label >Danh mục tin:</label>
          <select class="form-control" id='danhmuc1' name='danhmuc1' >
            <option value='DM0001'>Bất động sản</option>
            <option value='DM0002'>Nội thất, đồ gia dụng</option>
            <option value='DM0003'>Đồ điện tử</option>
            <option value='DM0004'>Xe cộ</option>
            <option value='DM0005'>Thời trang, đồ dùng cá nhân</option>
            <option value='DM0006'>Mẹ và bé</option>
            <option value='DM0007'>Thú cưng</option>
            <option value='DM0008'>Giải trí thể thao sở thích</option>
            <option value='DM0009'>Đồ văn phòng ,công nông nghiệp</option>
            <option value='DM0010'>Việc làm du lịch</option>
            <option value='DM0011'>Các lại khác</option>
            <option value='DM0012'>Cho Tặng miễn phí</option>
          </select>
          <select class="form-control" id='danhmuc2' name='danhmuc2'>
            <option value='DM1001'>Món quà đầu tiên</option>
            <option value='DM1002'>Quà Valentine 14-2</option>
            <option value='DM1003'>Ngày quốc tế phụ nữ 8/3</option>
            <option value='DM1004'>Ngày phụ nữ Việt Nam 20-10</option>
            <option value='DM1005'>Dịp sinh nhật</option>
            <option value='DM1006'>Ngày lễ khác</option>
            <option value='DM1007'>100 ngày yêu nhau</option>
            <option value='DM1008'>Quà cầu hôn</option>
            <option value='DM1009'>Khi người ấy giận</option>
            <option value='DM1010'>Quà chia tay</option>
            <option value='DM1011'>Quà kỉ niêm khác</option>
            <option value='DM2001'>Thư tay</option>
            <option value='DM2002'>Handmade</option>
            <option value='DM2003'>Bài hát</option>
            <option value='DM2004'>Bài thơ</option>
          </select>
        </div>
              
        <div class="form-group">
          <label >Giá bán(mua):</label>
          <input type="number" class="form-control" placeholder="Nhập giá bán(VND)" requirer id='giaban' name='giaban'>
        </div>
  
        <div class="form-group">
          <label >Tình trạng sản phẩm:</label>
          <select class="form-control" id='tinhtrang' name='tinhtrang'>
            <option value='Như mới'>Như mới</option>
            <option valie='Mới'>Mới</option>
            <option value='Cũ'>Cũ</option>
          </select>
        </div>
    
        <div class="form-group">
          <label >Hình ảnh sản phẩm:</label>
          <input id="ipPromotionImage" type="file" name="anhDangTin" accept="image/*" accept-charset="UTF-8" multiple onchange="themAnhDT(this)">
          <br>
					<span id="uploaded-image"></span>
        </div>

        <div class="form-group">
          <label>Slogan:</label>
          <textarea class="form-control" rows="2" style="resize: none;" id='slogan' name='slogan'></textarea>
        </div>
  
        <div class="form-group">
          <label>Tâm sự:</label>
          <textarea class="form-control" rows="4" style="resize: none;" id='mota' name='mota'></textarea>
        </div>
  
        <div class="form-group">
          <label>Phương thức giao dịch:</label>
          <input type="text" class="form-control" placeholder="Nhập phương thức giao dịch..." id='ptgd' name='ptgd'></textarea>
        </div>
  
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          <button type="button" id='dangtin' class="btn btn-primary" name="DangTin" onclick="addTinDang()">Đăng</button>
        </div>
        <div id="addition-result" class="modal-footer"></div>
      </div>

    </div>
  </div>
</div>
</form>

<!-- Thêm thăc mắc, yêu cầu-->
<form action='user-page.php' method='post'>
<div class="modal fade" id="addReq" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Thắc mắc, yêu cầu</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>

      <div class="modal-body">		
        <div class="form-group">
          <label for="exampleFormControlSelect1">Cần hỗ trợ</label>
          <select class="form-control" name='loai'>
            <option value='Thac Mac'>Thắc mắc</option>
            <option value='Yeu Cau'>Yêu cầu</option>
          </select>
        </div>

        <div class="form-group">
          <label>Vấn đề gặp phải</label>
          <textarea class="form-control" rows="3" style="resize: none;" name='vande' required></textarea>
        </div>
 
        <div class="form-group">
          <label>Thông tin chi tiết</label>
          <textarea class="form-control" rows="5" style="resize: none;" name='chitiet' required></textarea>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          <button type="submit" class="btn btn-primary" name="ThacMac">Gửi</button>
        </div>
      </div>

    </div>
  </div>
</div>
</form>

<!-- Thêm phản hồi-->
<form action='user-page.php' method='post'>
<div class="modal fade" id="addRes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Phản hồi</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">	

        <div class="form-group">
          <label for="exampleFormControlSelect1">Mức độ hài lòng</label>
          <select class="form-control" name='hailong' id="hai-long">
            <option value="1">Tệ</option>
            <option value="2">Không hài lòng</option>
            <option selected value="3" >Tạm được</option>
            <option value="4">Hài lòng</option>
            <option value="5">Rất hài lòng</option>
          </select>
        </div>
      
        <div class="form-group">
          <label for="exampleFormControlSelect1">Khả năng giới thiệu tới bạn bè, đồng nghiệp</label>
          <select class="form-control" name='gioithieu'>
            <option value="0">Không giới thiệu</option>
            <option selected value="1" >Chưa quyết định</option>
            <option value="2">Sau khi cải thiện chất lượng</option>
            <option value="3">Sẽ giới thiệu</option>
            <option value="4">Chắc chắn sẽ giới thiệu</option>
          </select>
        </div>
    
        <div class="form-group">
          <label>Phản hồi khác để chúng tôi nâng cao chất lượng dịch vụ</label>
          <textarea class="form-control" rows="5" style="resize: none;" name='phanhoikhac' required ></textarea>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          <button type="submit" class="btn btn-primary" name="PhanHoi">Gửi</button>
        </div>

      </div>

    </div>
  </div>
</div>
</form>

<script src="../js/script.user.js"></script>

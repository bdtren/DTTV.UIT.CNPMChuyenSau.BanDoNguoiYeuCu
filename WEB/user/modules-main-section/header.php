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


<!-- Thanh tiêu đề -->
<header id="header">
  <div class="container">
    <div class="row">

      <div class="col-md-9"><h1><i class="fa fa-dashboard"></i> <small>Trang người dùng</small></h1></div>

      <div class="col-md-3">
        <!-- Example single danger button -->
        <div class="btn-group create">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-type-blue" data-toggle="modal" data-target="#addPost" style="color: white;">Thêm bài đăng</button>
          <button type="button" class="btn btn-type-purple" id="thacmac" data-toggle="modal" data-target="#addReq">Thắc mắc,yêu cầu</button>
          <button type="button" class="btn btn-type-pink" id="yeucau" data-toggle="modal" data-target="#addRes">Phản hồi</button>
        </div>
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
          <input type="text" class="form-control" placeholder="Nhập tiêu đề..." requirer name='tieude'>
        </div>
  
        <div class="form-group">
          <label >Loại tin</label>
          <select class="form-control" name='loai'>
            <option value='Bán'>Cần bán</option>
            <option value='Mua'>Cần mua</option>
            <option value='Tặng'>Tặng</option>
          </select>
        </div>
  
        <div class="form-group">
          <label >Danh mục tin</label>
          <select class="form-control" name='loai'>
            <option value=''>Bất động sản</option>
            <option value=''>Nội thất, đồ gia dụng</option>
            <option value=''>Đồ điện tử</option>
            <option value='DM0004'>Xe cộ</option>
            <option value=''>Thời trang, đồ dùng cá nhân</option>
            <option value=''>Mẹ và bé</option>
            <option value=''>Thú cưng</option>
            <option value=''>Giải trí thể thao sở thích</option>
            <option value='DM0009'>Đồ văn phòng ,công nông nghiệp</option>
            <option value=''>Việc làm du lịch</option>
            <option value=''>Các lại khác</option>
            <option value=''>Cho Tặng miễn phí</option>
            <option value=''>Món quà đầu tiên</option>
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
          <input type="text" class="form-control" placeholder="Nhập danh mục tin..." requirer name='danhmuc'>
        </div>
                    
        <div class="form-group">
          <label >Giá bán(mua)</label>
          <input type="text" class="form-control" placeholder="Nhập giá bán..." requirer name='giaban'>
        </div>
  
        <div class="form-group">
          <label >Tình trạng sản phẩm</label>
          <select class="form-control" name='trinhtrang'>
            <option value='Như mới'>Như mới</option>
            <option valie='Mới'>Mới</option>
            <option value='Cũ'>Cũ</option>
          </select>
        </div>
    
        <div class="form-group">
          <label >Hình ảnh sản phẩm</label>
          <input type="file" class="form-control-file">
        </div>
  
        <div class="form-group">
          <label>Mô tả chi tiết</label>
          <textarea class="form-control" rows="4" style="resize: none;" requirer name='mota'></textarea>
        </div>
  
        <div class="form-group">
          <label>Phương thức giao dịch</label>
          <input type="text" class="form-control" placeholder="Nhập phương thức giao dịch..." requirer name='ptgd'></textarea>
        </div>
  
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          <button type="submit" class="btn btn-primary" name="DangTin">Đăng</button>
        </div>

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
          <select class="form-control" name='hailong'>
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
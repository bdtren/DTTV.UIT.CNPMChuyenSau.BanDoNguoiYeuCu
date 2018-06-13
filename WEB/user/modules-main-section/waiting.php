<div class="card" style="height: 30em;">
  <?php  $a = TaiBaiDangChoDuyet($MaKH); ?>
  <h5 class="card-header main-color-bg"><i class="fa fa-spinner" style="color: #00B2E0"></i>  Bài đăng chờ duyệt</h5>
  <div class="card-body" style="overflow-y: auto;">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tiêu đề</th>
          <th scope="col">Ngày</th>
          <th scope="col">Quản lí</th>
        <th scope="col"></th>
        </tr>
      </thead>

      <tbody>
      <!-- Dòng dữ liệu -->
      <?php for($i = 0; $i < $a['dem']; $i++) { ?>
        <tr>
          <th scope="row"><?php echo $i+1;?></th>
          <td><?php echo $a[$i]['TIEUDE']?></td>
          <td><?php echo $a[$i]['NGAYDANG']?></td>
          <td><a class="btn btn-danger" href="#" style="color:white;">Xóa</a></td>
          <td>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editPost">
            Chỉnh sửa
            </button>
          </td>
        </tr>
      <?php } ?>
      <!-- Kết thúc dòng dữ liệu -->
      </tbody>
    </table>
  </div>
</div>

<!-- Chỉnh sửa bài đăng-->
<div class="modal fade" id="editPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >
      <form>
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Chỉnh sửa bài đăng</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
        <!-- Form Đăng tin -->
          <div class="form-group">
            <label >Tiêu đề tin</label>
            <input type="text" class="form-control" placeholder="Nhập tiêu đề...">
          </div>
    
          <div class="form-group">
            <label >Loại tin</label>
            <select class="form-control">
              <option>Cần bán</option>
              <option>Cần mua</option>
            </select>
          </div>
    
          <div class="form-group">
            <label >Danh mục tin</label>
            <input type="text" class="form-control" placeholder="Nhập danh mục tin...">
          </div>
                      
          <div class="form-group">
            <label >Giá bán(mua)</label>
            <input type="text" class="form-control" placeholder="Nhập giá bán...">
          </div>
    
          <div class="form-group">
            <label >Tình trạng sản phẩm</label>
            <select class="form-control">
              <option>Như mới</option>
              <option>Mới</option>
              <option>Cũ</option>
            </select>
          </div>
      
          <div class="form-group">
            <label >Hình ảnh sản phẩm</label>
            <input type="file" class="form-control-file">
          </div>
    
          <div class="form-group">
            <label>Mô tả chi tiết</label>
            <textarea class="form-control" rows="4" style="resize: none;"></textarea>
          </div>
    
          <div class="form-group">
            <label>Phương thức giao dịch</label>
            <input type="text" class="form-control" placeholder="Nhập phương thức giao dịch..."></textarea>
          </div>
    
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
            <button type="button" class="btn btn-primary">Sửa</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
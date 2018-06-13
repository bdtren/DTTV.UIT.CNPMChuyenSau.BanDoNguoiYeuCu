<!-- Website Overview-->
<?php $a = TaiBaiMuaDaDuyet($MaKH);?>
<div class="card" style="height: 30em;">
  <h5 class="card-header main-color-bg"><i class="fa fa-check" style="color: #00B2E0"></i>  Bài mua đã duyệt</h5>
  <div class="card-body" style="overflow-y: scroll; overflow-x: auto;">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tiêu đề</th>
          <th scope="col">Ngày</th>
          <th scope="col"></th>
          <th scope="col">Quản lí</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
      <!-- Dòng dữ liệu -->
      <?php for($i=0; $i< $a['dem'];$i++) { ?>
        <tr>
          <th scope="row"><?php echo $i+1;?></th>
          <td><?php echo $a[$i]['TIEUDE'];?></td>
          <td><?php echo $a[$i]['NGAYDANG'];?></td>
          <td><a class="btn btn-danger" href="#" style="color:white;" data-toggle="modal" data-target="#hide">Ẩn</a></td>
          <td>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createspecial">
            Tạo tin đặc biệt
            </button></td>
          <td>
            <a class="btn btn-success" href="<?php echo"../product-detail.php?MATD=".$a[$i]['MATD'];?>" style="color:white;">Xem</a>
          </td>
        </tr>
        <!-- Kết thúc dòng dữ liệu -->
      <?php } ?>
      </tbody>
    </table>
  </div>
</div>

<!-- Form tạo tin đặc biệt -->
<div class="modal fade" id="createspecial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >
    <form method='post' action='user-page.php'>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Ẩn tin</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">		
        <div class="form-group">
          <label>Tạo tin:</label>
          <select class="form-control">
            <option value="1">Tin Hot</option>
            <option value="2">Tin New</option>
          </select>
        </div>

        <div class="form-group">
          <label>Thanh toán bằng thẻ cào</label>
          <select class="form-control" name='nhamang'>
            <option value= '1'>Vinaphone</option>
            <option value= '2'>Viettel</option>
            <option value= '3'>Mobifone</option>
            <option value= '4'>Vietnamobile</option>
            <option value= '5'>S-fone</option>
          </select>
        </div>
    
        <label>Nhập mã thẻ</label>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Mã thẻ cào" name='mathe'>
        </div>
      
        <div id="red" class="colors" style="display:none"> Hello</div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          <button type="submit" class="btn btn-primary" name="taotinhot">Đồng ý</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>


<!-- Form ẩn tin -->
<div class="modal fade" id="hide" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >
    <form method='post' action='<?php echo 'user-page.php?MATD='.$a[$i]['MATD']  ?>'>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Ẩn tin đăng</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="form-group" style="padding: 10px;">
        <label>Lí do ẩn tin</label>
        <select class="form-control" name='lydoan'>
          <option value='daban'>Đã bán qua trang LoveMarket</option>
          <option value='dabankhac'>Đã bán qua thông qua phương tiện khác</option>
          <option value='khongbannua'>Không muốn bán nữa</option>
        </select>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
        <button type="submit" class="btn btn-primary" name="antin">Đồng ý</button>
      </div>

    </form>
    </div>
  </div>
</div>
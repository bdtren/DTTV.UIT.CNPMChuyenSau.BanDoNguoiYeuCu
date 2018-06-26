<!-- Website Overview-->
<?php $a = TaiBaiBanDaDuyet($MaKH);?>
<div class="card" style="height: 30em;">
  <h5 class="card-header main-color"><i class="fa fa-check"></i>  Bài bán đã duyệt</h5>
  <div class="card-body user-detail-section">
    <table class="table table-striped" style="overflow-y: auto;">
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
      <?php for($i = 0; $i < $a['dem']; $i++) { ?>
        <tr>
          <th scope="row"><?php echo $i+1;?></th>
          <td><?php echo $a[$i]['TIEUDE']?></td>
          <td><?php echo $a[$i]['NGAYDANG']?></td>
          <td>
            <form action='user-page.php?page=article-sale' method='post'>
              <input type="hidden" name="MATD" value="<?php echo $a[$i]['MATD'];?>" />
              <button type='submit' name='AnHienTin' class="btn btn-type-blue" style="color:white;">
              <?php if(KiemTraAnHienTin($a[$i]["MATD"])==1) echo "Đã ẩn"; else echo "Đã hiện"; ?>
              </button>
            </form> 
          </td>
          <td>
            <?php if(KiemTraTinDacBiet($a[$i]["MATD"])==0) { ?>
            <button type="button" class="btn btn-type-purple" data-toggle="modal" data-target="#tindacbietmua" onclick='taotindacbietmua("<?php echo $a[$i]["MATD"];?>")'>Tạo tin đặc biệt</button>            
            <?php } else { ?>
            <button type="button" class="btn btn-type-purple" data-toggle="modal" data-target="#">Là tin đặc biệt</button>
            <?php } ?>

          </td>  
          <td><a class="btn btn-type-pink" href="<?php echo '../product-detail.php?MATD='.$a[$i]['MATD']?>" style="color:white;">Xem</a></td>
        </tr>
      <?php } ?>
      <!-- Kết thúc dòng dữ liệu -->
      </tbody>
    </table>
  </div>
</div>


<script>
  function taotindacbietmua(matd)
  {
    document.getElementById("matd1").value = matd;
  }
</script>

<!-- //Form tạo tin đặc biệt -->
<form action='user-page.php' method='post'>
<input type="hidden" id='matd1' name="MATD" value="" />
<input type="hidden" name="MAKH" value="<?php echo $MaKH; ?>" />
<div class="modal fade" id="tindacbietmua" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" >

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tạo tin đặc biệt</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>

      <div class="modal-body">

        <div class="form-group">
          <label>Nội dung tạo tin</label>
          <select class="form-control" name="loaitinban" onchange="SelectCheck(this);">
            <option value="ribbon-hot">Tin hot</option>
            <option value="ribbon-new">Tin new</option>
            <option id="discount" value="ribbon-discount">Tin discount</option>
          </select>
        </div>
    
        <div id="DivCheck" style="display:none;">
          <div class="form-group">
          <label>Giá sau khi giảm(đồng):</label>
            <input type="text" class="form-control" placeholder="Nhập giá sau khi giảm" name='giagiam'>
            <small class="form-text text-muted">Đừng quên tỉ lệ % giảm giá càng lớn thì càng tăng khả năng khách hàng mua sản phẩm của bạn càng cao</small>
          </div>
        </div>
      
        <div class="form-group">
          <label>Thanh toán bằng thẻ cào</label>
          <select class="form-control" name='nhamangban'>
            <option value='Vinaphone'>Vinaphone</option>
            <option value='Viettel'>Viettel</option>
            <option value='Mobifone'>Mobifone</option>
            <option value='Vietnammobile'>Vietnamobile</option>
            <option value='S-fone'>S-fone</option>
          </select>
        </div>
        
        <label>Nhập mã thẻ</label>
        <div class="form-group"><input type="text" class="form-control" placeholder="Mã thẻ cào" name='matheban'></div>
      
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          <button type="submit" name="TinDacBietBan" class="btn btn-primary" >Tiến hành tạo tin đặc biệt</button>
        </div>
        
      </div>

    </div>
  </div>
</div>                       
</form>
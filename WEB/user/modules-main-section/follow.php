<?php $a = TaiMinhDangTheoDoi($MaKH);?>
<div class="card" style="height: 30em;">
  <h5 class="card-header main-color"><i class="fa fa-users"></i>  Người bạn đang theo dõi</h5>
  <div class="card-body user-detail-section">
    <table class="table table-striped" style="overflow-y: scroll;">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên người dùng</th>
          <th scope="col">Liên lạc</th>
          <th scope="col">Quản lí</th>
        </tr>
      </thead>
      <tbody>
      <!-- Dòng dữ liệu -->
      <?php for($i = 0; $i < $a['dem']; $i++) { ?>
        <tr>
          <th scope="row"><?php echo $i+1;?></th>
          <td><a href="<?php echo '../all-post.php?MAKH='.$a[$i]['MA']; ?>" style="text-decoration: none;"><?php echo $a[$i]['HOTEN']?></a></td>
          <td><?php echo $a[$i]['SDT']?></td>
          <td>
            <form action='user-page.php' method='post'>
              <input type="hidden" name="MAKH2" value="<?php echo $a[$i]['MA'];?>" />
              <input type="hidden" name="MAKH1" value="<?php echo $MaKH;?>" />
              <button type="submit" name='BoTheoDoi' class="btn btn-danger" style="color:white;">Bỏ theo dõi</button>
            </form>    
          </td>
        </tr>
      <?php } ?>
      <!-- Kết thúc dòng dữ liệu -->
      </tbody>
    </table>
  </div>
</div>
<?php $a = TaiTheoDoiTinDang($MaKH);?>
<div class="card" style="height: 30em;">
  <h5 class="card-header main-color"><i class="fa fa-check"></i>  Tin đang theo dõi</h5>
  <div class="card-body user-detail-section">
    <table class="table table-striped" style="overflow-y: auto;">
      <thead>
        <tr>
          <th scope="col" style="width: 70px;">STT</th>
          <th scope="col">Tiêu đề</th>
          <th scope="col" style="width: 20px !important;">Quản lí</th>
        </tr>
      </thead>
      <tbody>
      <!-- Dòng dữ liệu -->
      <?php for($i = 0; $i < $a['dem']; $i++) { ?>
        <tr>
          <td scope="row"><?php echo $i+1;?></td>
          <td><a href="<?php echo '../product-detail.php?MATD='.$a[$i]['MATD']; ?>" style="text-decoration: none;"><?php echo $a[$i]['TIEUDE']?></a></td>
          
        <td>
          <form action='user-page.php?page=news-follow' method='post'>
            <input type="hidden" name="MATD" value="<?php echo $a[$i]['MATD'];?>" />
            <input type="hidden" name="MAKH" value="<?php echo $MaKH;?>" />
            <button type="submit" name='BoTheoDoiTinDang' class="btn btn-danger" style="color:white;">Bỏ theo dõi</button>
          </form>    
        </td>
        </tr>  
        <?php } ?>

      <!-- Kết thúc dòng dữ liệu -->
      </tbody>
    </table>
  </div>
</div>
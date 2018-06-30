<div class="card" style="height: 30em;">
  <h5 class="card-header main-color"><i class="fa fa-users"></i>  Người đang theo dõi bạn</h5>
  <div class="card-body user-detail-section" style="overflow-y: auto; overflow-x: auto;">

  <?php $a = TaiNguoiTheoDoiMinh($MaKH);?>

    <table class="table table-striped" style="overflow-y: scroll;">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên người dùng</th>
          <th scope="col">Liên lạc</th>
        </tr>
      </thead>
      <tbody>
        <!-- Dòng dữ liệu -->
        <?php for($i = 0; $i < $a['dem']; $i++) { ?>
        <tr>
          <th scope="row"><?php echo $i+1;?></th>
          <td><a href="<?php echo '../all-post.php?MAKH='.$a[$i]['MA']; ?>" style="text-decoration: none;"><?php echo $a[$i]['HOTEN']?></a></td>
          <td><?php echo $a[$i]['SDT']?></td>
        </tr>    
        <?php } ?>
        <!-- Kết thúc dòng dữ liệu -->
      </body>
    </table>
  </div>
</div>
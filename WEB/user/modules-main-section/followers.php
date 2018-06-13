<div class="card" style="height: 30em;">
<?php $a = TaiNguoiTheoDoiMinh($MaKH);?>
<h5 class="card-header main-color-bg"><i class="fa fa-users" style="color: #00B2E0"></i>  Người đang theo dõi bạn</h5>
  <div class="card-body" style="overflow-y: auto; overflow-x: auto;">
    <table class="table table-striped">
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
          <td>
            <form method="post" action="<?php echo 'user-page.php?MaKH1='.$MaKH.'&MaKH2='.$a[$i]['MA']; ?>">
              <input type="submit" name="chan"class="btn btn-danger" style="color:white;" value="Chặn" />
            </form>
          </td>
        </tr>
          <!-- Kết thúc dòng dữ liệu -->
      <?php } ?>
          <!-- Kết thúc dòng dữ liệu -->
      </tbody>
    </table>
  </div>
</div>
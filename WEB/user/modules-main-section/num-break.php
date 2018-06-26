<?php $a = TaiViPham($MaKH);?>
<div class="card" style="height: 30em;">
  <h5 class="card-header main-color"><i class="	fa fa-remove"></i>  Danh sách vi phạm</h5>
  <div class="card-body user-detail-section">
    <table class="table table-striped" style="overflow-y: scroll;">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Nội dung vi phạm</th>
          <th scope="col">Ngày xử lí</th>
        </tr>
      </thead>
      <tbody>
      <!-- Dòng dữ liệu -->
     
      <?php for($i = 0; $i < $a['dem']; $i++) { ?>
        <tr>
          <th scope="row"><?php echo $i+1;?></th>
          <td><?php echo $a[$i]['NOIDUNGXULY']?></td>
          <td><?php echo $a[$i]['NGAYXULY']?></td>
        </tr>
      <?php } ?>

      <!-- Kết thúc dòng dữ liệu -->
      </tbody>
    </table>
  </div>
</div>
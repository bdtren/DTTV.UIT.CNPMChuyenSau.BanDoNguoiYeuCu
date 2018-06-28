<div class="card" style="height: 35em;">
  <h5 class="card-header mainheader">Phản hồi của người dùng</h5>
  <div class="card-body" style="overflow-y: auto;">
    <table id="content-table" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Người đăng</th>
          <th scope="col">Ngày gửi</th>
          <th scope="col">Mức độ hài lòng</th>
          <th scope="col">Quản lí</th>
        </tr>
      </thead>
      <tbody>
        <!-- Dòng dữ liệu -->
        <?php 
                        $a = layPhanHoiChiTiet();
												$i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<count($a)){ 
				?>
        <tr>
          <th scope="row">
            <?php echo ($i+1); ?>
          </th>
          <td><a target="_blank" href="../admin-all-post.php?MAKH=<?php echo $a[$i]['MAKH']; ?>"><?php echo $a[$i]['HOTEN']; ?></a></td>
          <td><?php echo date("d-m-Y", strtotime($a[$i]['NGAYPH'])); ?></td>
          <td>
            <!-- Mức độ hải lòng theo text -->
            <span id="rating"><?php echo $a[$i]['MUCDO']?></span>
            <!-- Mức độ hải lòng theo số sao -->
            <?php 
              $star = $a[$i]['MUCDO'];
                for($r =0;$r<5;$r++){
                  $check = '';
                  if($star>0){
                    $star--;
                    $check = 'checked';
                  }
                  else{
                    $check = '';
                  }
                  echo '<span class="fa fa-star '.$check.'"></span>';                  
                }          
              ?>
            </td>
          <td>
            <a class="btn btn-success" data-toggle="modal" href="#" style="color:white;" data-target="#see" onclick="openModelPhanHoi(<?php echo $i/*$a[$i]['MAPH']*/?>)">Xem chi tiết</a>
          </td>
        </tr>
        <!-- Kết thúc dòng dữ liệu -->
        <?php
												  $i++;
												} 
        ?>
        
        <!-- Xử lý lưu tất cả dữ liệu lấy được từ các bảng qua file php -->
       <script type="text/javascript">
          var arrTable = <?php echo json_encode($a); ?>;
        </script>
      </tbody>
    </table>
  </div>
</div>
<!-- Modal -->
<!-- Bài đăng cần duyệt -->
<div class="modal fade" id="see" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Phản hồi của khách hàng</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <!-- Form  -->
          <form>
            <div class="form-group" >
              <label>Người đăng: </label>
              <label id="lbName"></label>
            </div>

            <div class="form-group">
              <label>Thời gian: </label>
              <label id="lbTime"></label>
            </div>

            <div class="form-group">
              <label>Mức độ hài lòng: </label>
              <label id="lbSatisfy"></label>
            </div>

            <div class="form-group">
              <label>Khả năng giới thiệu với bạn bè, đồng nghiệp: </label>
              <label id="lbIntroduce"></label>
            </div>

            <div class="form-group">
              <label>Phản hồi khác: </label>
              <textarea id="taResponse" class="form-control" rows="4" style="resize: none;" disabled></textarea>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
            </div>

          </form>
        </div>

      </form>
    </div>
  </div>
</div>

<style>
.checked {
    color: orange;
}
#rating {
  visibility: hidden;
}

</style>


<script src="../../js/script.admin.js"></script>

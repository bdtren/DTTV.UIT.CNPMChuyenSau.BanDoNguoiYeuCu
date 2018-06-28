<div class="card" style="height: 35em;">
  <h5 class="card-header" id="checkcard">Kiểm tra thẻ cào</h5>
  <div class="card-body" style="overflow-y: auto;">
    <table id="content-table" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Khách hàng</th>
          <th scope="col">Mã thẻ</th>
          <th scope="col">Ngày thu</th>
          <th scope="col">Quản lí</th>
        </tr>
      </thead>
      <tbody>
        <!-- Dòng dữ liệu -->
        <?php 
                        $a=layThongTinTheCao();
                        $i=0;
												$num=10; //Số dòng dữ liệu trừ 1 ($num=10 hiện 9 dòng)
												while($i<count($a)){ 
				?>
        <tr>
          <th scope="row">
            <?php echo ($i+1); ?>
          </th>
          <td><a target="_blank" href="../admin-all-post.php?MAKH=<?php echo $a[$i]['MAKH']; ?>"><?php echo $a[$i]['HOTEN']; ?></a></td>
          <td><?php echo $a[$i]['MATHECAO'];?></td>
          <td><?php echo date("d-m-Y", strtotime($a[$i]['NGAYTHU'])); ?></td>
          <td>
            <a class="btn adverbtn" data-toggle="modal" href="#" data-target="#see" onclick="openModelTheCao(<?php echo $i/*$a[$i]['MAPH']*/?>)">Kiểm tra</a>
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
          <h5 class="modal-title" id="exampleModalLongTitle">Kiểm tra mã thẻ cào</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <!-- Form  -->
          <form>
            <div class="form-group">
              <label>Người đăng: </label>
              <label for="" id="lbName"></label>
            </div>

            <div class="form-group">
            <span>
              <label>Nhà mạng: </label>
              <label for="" id="lbCompany"></label>
            </span>
            &emsp; &emsp;
            <span>
              <label>Mã số seri: </label>
              <label for="" id="lbSerial"></label>
            </span>
              
            </div>

            <div class="form-group">
              <label>Thời gian: </label>
              <label for="" id="lbTime"></label>
            </div>

            <div class="form-group">
              <label style="color: red; font-weight: bold;">Mã thẻ cào: </label>
              <label for="" id="lbCardID"></label>
            </div>
            <div>
              <label class="form-group" style="color: red; font-weight: bold;">Giá trị:</label>
              &emsp;<input type="number" id="lbCardPrice" value="10000"></input>
              <label for="" id="lbUnit">(VND)</label>
            </div>




            <div class="modal-footer">
              <button id="btnQuit" type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
              <button id="btnFail" type="button" class="btn btn-danger" onclick="moneyFail()">Không thành công</button>
              <button id="btnSuccess" type="button" class="btn btn-primary" onclick="moneySuccess()">Thành công</button>
            </div>
            <div id="addition-result" class="modal-footer"></div>
          </form>
        </div>

      </form>
    </div>
  </div>
</div>
<script src="../../js/script.admin.js"></script>

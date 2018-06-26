<?php $a = TaiKhuyenMai();?>
<div class="card cardsection" style="max-height: 14em;">
    <h5 class="card-header main-color-bg">Thông báo từ LoveMarket</h5>
    <div class="card-body" style= "overflow-y: auto;">
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Từ ngày</th>  
                    <th scope="col">Đến ngày</th>
                    <th scope="col">Xem</th>
                    </tr>
                </thead>
                <tbody>
                <?php for($i = 0; $i < $a['dem']; $i++) { ?>
                    <tr>
                        <th scope="row"><?php echo $i+1;?></th>
                        <td><?php echo $a[$i]['TIEUDE']?></td>
                        <td><?php echo $a[$i]['NGAYBD']?></td>
                        <td><?php echo $a[$i]['NGAYKT']?></td>
                        <td><a class="btn btn-primary" href="<?php echo '../promotion-detail.php?MAKM='.$a[$i]['MAKM']; ?>" style="text-decoration: none;">Xem</a></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        </div>
    </div>

<?php $a = TaiThongBao($MaKH);?>
<!--Thông báo-->
<div class="card cardsection" style="margin-top: 15px; max-height: 14em;">
    <h5 class="card-header main-color-bg">Thông báo từ người theo dõi</h5>
    <div class="card-body" style="overflow-y: auto;">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Tiêu đề</th>
                <th scope="col">Hình ảnh</th>  
                <th scope="col">Thời gian</th>
                <th scope="col">Người đăng</th>
                <th scope="col">Xem</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bán mũ của người yêu</td>
                    <td></td>
                    <td>12/1/2018</td>
                    <td>Allan Nguyễn</td>
                    <td><a class="btn btn-primary" href="#" style="color:white;">Xem</a></td>
                </tr>       
            </tbody>
        </table>
    </div>
</div>
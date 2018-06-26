<!-- Phần nội dung bên trái Sidebar -->
<style>
        .list-group i
        {
                color: #00B2E0;
        }       
</style>				

<div class="list-group">
        <a href="user-page.php" class="list-group-item list-group-item-action active main-color-bg"><i class="fa fa-dashcube"></i> Thông báo</a>                                 
        <a href="user-page.php?page=waiting" class="list-group-item list-group-item-action"><i class="fa fa-spinner"></i>  Bài đăng chờ duyệt <span class="badge badge-danger" style="float: right;"><?php echo DemCho($MaKH);?></span></a>                       
        <a href="user-page.php?page=article-sale" class="list-group-item list-group-item-action"><i class="fa fa-check"></i>  Bài bán đã duyệt <span class="badge badge-danger" style="float: right;"><?php echo DemBan($MaKH);?></span></a>                              
        <a href="user-page.php?page=article-buy" class="list-group-item list-group-item-action"><i class="fa fa-check"></i>  Bài mua đã duyệt <span class="badge badge-danger" style="float: right;"><?php echo DemMua($MaKH);?></span></a>
        <a href="user-page.php?page=news-follow" class="list-group-item list-group-item-action"><i class="fa fa-check"></i>  Tin đang theo dõi <span class="badge badge-danger" style="float: right;"><?php echo 5 ;?></span></a>
        <a href="user-page.php?page=follower" class="list-group-item list-group-item-action"><i class="fa fa-users"></i>  Người theo dõi bạn <span class="badge badge-danger" style="float: right;"><?php echo DemTheoDoi($MaKH);?></span></a>
        <a href="user-page.php?page=follow" class="list-group-item list-group-item-action"><i class="fa fa-users"></i>  Bạn đang theo dõi <span class="badge badge-danger" style="float: right;"><?php echo DemDangTheoDoi($MaKH);?></span></a>
</div>
<?php $vp = DemViPham($MaKH);?>

<a href="user-page.php?page=num-break" style="link:white;">
<div class="well border " style="padding: 10px; margin-top: 10px; text-decoration: none; color: white;">
        <h6>Số lần vi phạm : <?php echo $vp; ?>/3</h6>

        <?php   if($vp==0) $status="0";
                else if($vp==1) $status="33"; 
                else if($vp==2) $status="66";
                else $status="99"; ?>
        <p> <i>Vi phạm quá 3 lần sẽ bị khóa tài khoản</i></p>
         <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: <?php echo $status ?>%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">1</div>
        </div>
</div>
</a>

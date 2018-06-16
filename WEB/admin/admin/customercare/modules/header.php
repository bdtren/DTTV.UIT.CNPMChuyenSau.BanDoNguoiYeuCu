	  <!-- Thanh tiêu đề -->
    <nav class="navbar navbar-expand-md navbar-default bg-default">
      <a class="navbar-brand" href="#">Nhân viên chăm sóc khách hàng</a>

		
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
			
          <li class="nav-item">
            <a class="nav-link" href="../../index.php">Trang chủ</a>
          </li>
			  
        </li>
        </ul>


        <ul class="navbar-nav navbar-right">
            <li class="nav-item">
                <a class="nav-link" href="#">Chào mừng, <?php echo $nv[0]['TENTK'] ?></a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="../index.php" onclick="onLogout()">Đăng xuất</a>
            </li>
          </ul>
    
      </div>
    </nav>
<!-- Kết thúc thanh tiêu đề -->
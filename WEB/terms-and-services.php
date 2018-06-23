<?php 
  session_start();
  $UserName = isset($_SESSION['user']) ? $_SESSION['user'] : "" ;
?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Điều khoản và quy định</title>	
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style-term.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link href="https://fonts.googleapis.com/css?family=Arsenal" rel="stylesheet"> 

</head>

<body>
	<?php include('header.php'); ?>
	
	<div class="container choose">
	<h2>Điều khoản và dịch vụ của LoveMarket</h2>
		<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
		  <li class="nav-item">
			<a class="nav-link active"  data-toggle="pill" href="#pills-dk" role="tab" aria-controls="pills-dk" aria-selected="false">Điều khoản</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" data-toggle="pill" href="#pills-qd" role="tab" aria-controls="pills-qd" aria-selected="false">Dịch vụ</a>
		  </li>
		</ul>
	</div>
	
	<div class="container main" style="overflow-y: auto;">
		<div class="tab-content" id="pills-tabContent">
			<!-- Điều khoản -->
		  <div class="tab-pane fade show active" id="pills-dk" role="tabpanel" aria-labelledby="pills-dk">
		<h1>
          <span id="a-doi-tuong-dang-tin">
            <strong>A. Đối tượng đăng tin</strong>
          </span>
        </h1>
        <ul>
          <li> &emsp; Dành cho đối tượng là các cá nhân có quyền hợp pháp tham gia vào các thoả thuận/hợp đồng mua bán ở Việt
            Nam và bán hàng không vì mục đích kinh doanh.</li>
        </ul>
        <h1>
          <span id="b-quy-dinh-co-ban-ve-tin-dang">
            <strong>B. Quy định cơ bản về tin đăng</strong>
          </span>
        </h1>
        <h3>
          <span>
            <strong>&ensp;1. Thông tin liên lạc</strong>
          </span>
        </h3>
        <ul>
          <li>
            <strong>&emsp;&emsp;Tên:&nbsp;</strong> Điền đầy đủ họ tên thật của người bán.</li>
          <li>
            <strong>&emsp;&emsp;Email:&nbsp;</strong>Hãy cung cấp địa chỉ email thật. Chúng tôi liên lạc với bạn chủ yếu qua email.
            Email của bạn sẽ được Love Market bảo mật.</li>
          <li>
            <strong>&emsp;&emsp;Số điện thoại:&nbsp;</strong>Để đảm bảo an toàn mua bán, bạn cần xác nhận sở hữu của số điện thoại
            dùng để đăng tin.
          </li>
          <li>
            <strong>&emsp;&emsp;Địa chỉ:&nbsp;</strong>Hãy cung cấp địa chỉ giao dịch chính xác bao gồm: tên đường, quận/huyện, thành
            phố nơi bạn đang sống.</li>

          <h3>
            <span>
              <strong>&ensp;2. Tiêu đề tin đăng</strong>
            </span>
          </h3>
          <ul>
            &emsp;Tiêu đề cần thể hiện chi tiết chính của mặt hàng hoặc dịch vụ được quảng cáo, bao gồm các thông tin như:
            <li>&emsp;&emsp;Tên sản phẩm, model, tình trạng …. (Ví dụ: Iphone 5S 16gb còn bảo hành …)</li>
            <li>&emsp;&emsp;Loại nhà đất, tên đường, số phòng ngủ… (đối với bất động sản). Ví dụ: Nhà 3 lầu 6 phòng ngủ đường
              Nguyễn Trãi …)</li>
            &emsp;Trên tiêu đề tin, không sử dụng các thông tin/ từ ngữ thiếu văn hóa hoặc các từ ngữ có tính câu khách, ám chỉ đến một
            ai đó.
          </ul>

          <h3>
            <span>
              <strong>&ensp;3. Hình ảnh trong tin đăng</strong>
            </span>
          </h3>
          <ul>
            <li>&emsp;&emsp;Hình ảnh trong tin đăng phải là hình chụp từ mặt hàng, dịch vụ bạn đăng bán, và phải thể hiện rõ
              & chân thực mặt hàng dịch vụ đó.</li>
          </ul>

          <h3>
            <span>
              <strong>&ensp;4. Nội dung tin đăng</strong>
            </span>
          </h3>
          <ul>
            <li>&emsp;&emsp;Nội dung tin đăng cần có đầy đủ thông tin để người mua có thể quyết định mua hàng</li>
          </ul>

          <h3>
            <span>
              <strong>&ensp;5. Giá</strong>
            </span>
          </h3>
          <ul>
            <li>&emsp;&emsp;Love Market có quyền từ chối các sản phẩm có giá bán không hợp lý. Giá bán phải được niêm yết bằng
              giá Việt Nam Đồng. Các tin đăng giá ngoại tệ đều không được đăng.</li>
          </ul>

          <h1>
            <span id="c-cac-ly-do-tin-bi-tu-choi">
              <strong>C. Các lý do tin bị từ chối</strong>
            </span>
          </h1>
          <h3>
            &ensp;1) Tin đăng bị trùng lặp:
          </h3>
          <ul>
            <li>&emsp;&emsp;Nếu bạn đã đăng 1 mặt hàng trên Love Market, toàn bộ những tin đăng bán cùng mặt hàng đó của bạn
              sẽ bị từ chối do trùng lặp (Kể cả trùng lặp với tin đã ẩn).</li>
            <li>&emsp;&emsp;Trong trường hợp bạn có nhiều tài khoản và dùng những tài khoản đó đăng tin giống nhau thì tin đăng
              vẫn bị từ chối tin trùng lặp. Quy định này nhằm loại bỏ các tin rác, giúp người mua tìm mặt hàng ưng ý nhanh
              hơn và người bán bán hàng nhanh hơn.</li>
            <li>&emsp;&emsp;Nếu bạn có nhiều sản phẩm cùng loại có nhiều tình trạng khác nhau, bạn có thể miêu tả nhiều tình
              trạng, giá tiền khác nhau của cùng 1 sản phẩm trong 1 tin đăng. Lưu ý: Nội dung tin có thể miêu tả bán nhiều
              sản phẩm cùng model nhưng hình ảnh phải đảm bảo có 3 hình thật, riêng biệt của 1 sản phẩm.</li>
          </ul>

          <h3>
            &ensp;2) Tim đăng không đúng sự thật, sử dụng hình ảnh từ trên mạng:
          </h3>
          <ul>
            <li>&emsp;&emsp;Các tin đăng có nội dung không rõ ràng hoặc có dấu hiệu lừa đảo đều sẽ bị hủy, Love Market cho phép
              tin có miêu tả đầy đủ sản phẩm được đăng.</li>
            <li>&emsp;&emsp;Tin đăng sử dụng hình tải từ trên mạng sẽ bị từ chối. Love Market yêu cầu người bán tự chụp hình
              mặt hàng khi đăng tin. Việc đăng hình thật thu hút các khách hàng thực sự yêu thích sản phẩm, giúp bạn bán
              hàng nhanh hơn.</li>
          </ul>

          <h3>
            &ensp;3) Tin đăng chứa nội dung vi phạm pháp luật hoặc không phù hợp với thuần phong mỹ tục Việt Nam:
          </h3>
          <ul>
            <li>&emsp;&emsp;Các tin đăng thuộc đanh sách các hàng cấm của pháp luật như: Ma túy,Hàng hóa có chứa hình ảnh liên
              quan đến cần sa, hoa anh túc. Vũ khí và các sản phẩm thuộc lĩnh vực quân sự, an ninh quốc phòng khác, bao gồm
              nhưng không giới hạn bởi quân trang, quân hiệu, phù hiệu, thiết bị quân sự, cấp hiệu. Bộ phận cơ thể người.
              Thực vật, Động vật nguy cấp, quý hiếm. Sản phẩm khiêu dâm. Pháo hoa và chất nổ.
              <br>&emsp;&emsp;Hàng giả, hàng lậu, hàng vi phạm bản quyền: Sản phẩm có thương hiệu, tác phẩm thơ văn của các nghệ
              sĩ đã được đăng kí bản quyền, chương trình máy tính/trò chơi điện tử.
            </li>
            <li>&emsp;&emsp;Các tin hàng hóa dịch vụ bị cấm theo quy định của Love Market:
              <br> &emsp;&emsp;&emsp;- Các sản phẩm trong ngành y tế: Máy móc y tế, thuốc và thuốc bổ cho người lớn/trẻ em/vật
              nuôi, dược phẩm thảo mộc có tính chất quý hiếm, thuốc theo đơn.
              <br> &emsp;&emsp;&emsp;- Các mặt hàng dễ gây dị ứng, có thể ảnh hưởng đến sức khoẻ của người dùng: Quần áo lót
              đã qua sử dụng. Kính áp tròng, kính cận. Bia, cồn, rượu, thuốc lá, các chất kích thích, gây nghiện khác. Mỹ
              phẩm dạng uống, tiêm.
              <br> &emsp;&emsp;&emsp;- Các sản phẩm có nội dung người lớn: Đồ chơi tình dục, sản phẩm khiêu dâm.
              <br> &emsp;&emsp;&emsp;- Các tin đăng không nhằm mục đích mua bán hàng hoá, dịch vụ, tuyên truyền: Sự kiện hội
              họp. Các tài liệu tuyên truyền. Thư/ Lời chúc mừng/ Thông báo.
              <br> &emsp;&emsp;&emsp;- Các sản phẩm mê tín: Bùa hộ mạng hoặc miêu tả mê tín (đuổi tà, đuổi quỷ …) và tất cả các
              vật thần bí. Các sản phẩm phục vụ cho mục đích cờ bạc (bao gồm cả máy đánh bài).
              <br> &emsp;&emsp;&emsp;- Các sản phẩm thuộc về di tích lịch sử.
              <br> &emsp;&emsp;&emsp;- Hoá chất: bao gồm nhưng không giới hạn bởi a-xít, chất hoá học nông nghiệp, chất phóng
              xạ, sản phẩm hoá học diệt côn trùng.
              <br>
            </li>
          </ul>
          <h4>&ensp;Love Market bảo lưu quyền thay đổi, điều chỉnh Quy định này vào bất kỳ lúc nào Love Market cho là thuận tiện
            hoặc theo sự thay đổi chính sách luật pháp mà không cần báo trước. Love Market cũng sẽ bảo lưu quyền từ chối
            đăng tin hoặc gỡ tin đăng nếu: &emsp;&emsp;
            <br> (i) Love Market cho rằng các thông tin mà người bán cung cấp là không phù hợp/không đúng hoặc (ii) người bán
            vi phạm bất kỳ nội dung nào được nêu trong Quy chế này mà không phải chịu bất kỳ trách nhiệm nào. Việc thực thi
            quyền theo quy định ở đây không ảnh hưởng và cũng không xem là từ bỏ việc thực hiện quyền hoặc áp dụng các biện
            pháp khác theo chính sách chung của Love Market tùy từng thời điểm.
          </h4>
		 </div>
			
			
			<!-- Quy định -->
		  <div class="tab-pane fade" id="pills-qd" role="tabpanel" aria-labelledby="pills-qd" style="overflow-y: auto;">
			  <h1 style="text-align: center" > GIỚI THIỆU VỀ TIN ĐẶC BIỆT</h1>
            <h4>
              &emsp;Tin đặc biệt là gì?
            </h4>
            <ul>
              <li>&emsp;&emsp;Tin đặc biệt là các tin được hiển thị ở 3 ô trống trong khung tin đặc biệt(trừ tin đẩy), các tin đăng này được
                nằm ở trang đầu tiên của danh sách tin đăng và được tách biệt với các tin đăng khác.</li>
              <li>&emsp;&emsp;Tin đặc biệt bao gồm tin đẩy, tin mới, tin hot và tin giảm giá.</li>
            </ul>

            <h4>
              &emsp;Tin đặc biệt khác các tin dịch vụ khác như thế nào?
            </h4>
            <ul>
              <li>&emsp;&emsp;Tin đặc biệt là các tin được hiển thị ở vị trí tách biệt với các tin đăng bình thường trên danh sách tin.</li>
              <li>&emsp;&emsp;Tin đặc biệt sẽ được thực hiện hiển thị trong 24h kể từ khi bắt đầu thực hiện dịch vụ.</li>
              <li>&emsp;&emsp;Giá dịch vụ tin đặc biệt là  10.000đ với các tin đẩy; 20.000đ với các tin có nhãn mới, hot, giảm giá và được thanh toán bẳng thẻ điện thoại(Viettel, Mobifone, Vinaphone).</li>
            </ul>

            <h4>
              &emsp;Một số lưu ý về hiển thị của tin đặc biệt:
            </h4>
            <ul>
              <li>&emsp;&emsp;Xuất hiện ngẫu nhiên, chia sẻ lượt hiển thị với các tin mua dịch vụ "Tin đặc biệt" cùng loại.</li>
              <li>&emsp;&emsp;Số lượng "Tin đặc biệt" được giới hạn để đảm bảo tính hiệu quả.</li>
            </ul>
		  </div>
			
			  </div>
		</div>
	
	<?php include('footer.php'); ?>
	
	
	
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</body>
	
</html>
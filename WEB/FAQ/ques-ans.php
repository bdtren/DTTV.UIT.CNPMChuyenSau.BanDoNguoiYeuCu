<?php
	$ques=1;
	if(isset($_GET['ques'])){
		$ques=$_GET['ques'];
	}
?>



	<main role="main" class="col-md-9">
         
		<!-- câu hỏi và trả lời -->
		<?php if($ques==1){ ?> 
		
		  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom main-question">		  
            <h1 class="h2"><i class="fa fa-question-circle"></i>  Love Market là gì?</h1>
          </div>
		
		<div class="main-answer">
			<b><i>“Love Market - Bán đồ người yêu cũ”</i></b>  là một kênh rao vặt online giúp kết nối người bán - những người mới chia tay và muốn bán những món đồ từ người yêu cũ,
                        với người mua - những người đang tìm kiếm những món đồ cũ hoặc những món đồ sưu tập với giá cả phải chăng.
		</div>
		<?php } ?> 
		
		<?php if($ques==2){ ?> 
		
		  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom main-question">		  
            <h1 class="h2"><i class="fa fa-question-circle"></i>  Cách đăng một tin(bán/mua) lên Love Market?</h1>
          </div>
		
		<div class="main-answer">
			 Để có thể đăng được tin lên <b>Love Market</b> bạn cần phải hoàn thành các bước sau:<br>
                             <strong>Bước 1:</strong> Đăng kí tài khoản với đầy đủ thông tin tại đường dẫn: <a href="HTTPS://lovemarket.000webhostapp.com/create-account.php">này</a>. <br>
                             <strong>Bước 2:</strong> Tại đường dẫn: <a href="HTTPS://lovemarket.000webhostapp.com/user/user-page.php">này</a> chọn thêm bài đăng và điền đầy đủ thông tin <br>
                             <strong>Bước 3:</strong> Kiểm duyệt viên sẽ kiểm tra tính hợp lệ của tin đăng và gửi trả kết quả yêu cầu đăng tin cho bạn trong vòng 24h
		</div>
		<?php } ?> 
		
		<?php if($ques==3){ ?> 
		
		  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom main-question">		  
            <h1 class="h2"><i class="fa fa-question-circle"></i>  Các quy định về đăng tin của Love Market?</h1>
          </div>
		
		<div class="main-answer">
							<h4>
                                <strong>1) Tin đăng bị trùng lặp:</strong>
                            </h4>
                            <ul>
                                <li>Nếu bạn đã đăng 1 mặt hàng trên Love Market, toàn bộ những tin đăng bán cùng mặt hàng đó của bạn sẽ bị từ chối do trùng lặp (Kể cả trùng lặp với tin đã ẩn).</li>
                                <li>Trong trường hợp bạn có nhiều tài khoản và dùng những tài khoản đó đăng tin giống nhau thì tin đăng vẫn bị từ chối tin trùng lặp. Quy định này nhằm loại bỏ các tin rác, giúp người mua tìm mặt hàng ưng ý nhanh hơn và người bán bán hàng nhanh hơn.</li>
                                <li>Nếu bạn có nhiều sản phẩm cùng loại có nhiều tình trạng khác nhau, bạn có thể miêu tả nhiều tình trạng, giá tiền khác nhau của cùng 1 sản phẩm trong 1 tin đăng. Lưu ý: Nội dung tin có thể miêu tả bán nhiều sản phẩm cùng model nhưng hình ảnh phải đảm bảo có 3 hình thật, riêng biệt của 1 sản phẩm.</li>
                            </ul>

                            <h4>
                                <strong>2) Tim đăng không đúng sự thật, sử dụng hình ảnh từ trên mạng:</strong>
                            </h4>
                            <ul>
                                <li>Các tin đăng có nội dung không rõ ràng hoặc có dấu hiệu lừa đảo đều sẽ bị hủy, Love Market cho phép tin có miêu tả đầy đủ sản phẩm được đăng.</li>
                                <li>Tin đăng sử dụng hình tải từ trên mạng sẽ bị từ chối. Love Market yêu cầu người bán tự chụp hình mặt hàng khi đăng tin. Việc đăng hình thật thu hút các khách hàng thực sự yêu thích sản phẩm, giúp bạn bán hàng nhanh hơn.</li>
                            </ul>

                            <h4>
                                <strong>3) Tin đăng chứa nội dung vi phạm pháp luật hoặc không phù hợp với thuần phong mỹ tục Việt Nam:</strong>
                            </h4>
                            <ul>
                                <li>Các tin đăng thuộc đanh sách các hàng cấm của pháp luật như: Ma túy,Hàng hóa có chứa hình ảnh liên quan đến cần sa, hoa anh túc. Vũ khí và các sản phẩm thuộc lĩnh vực quân sự, an ninh quốc phòng khác, bao gồm nhưng không giới hạn bởi quân trang, quân hiệu, phù hiệu, thiết bị quân sự, cấp hiệu. Bộ phận cơ thể người. Thực vật, Động vật nguy cấp, quý hiếm. Sản phẩm khiêu dâm. Pháo hoa và chất nổ.<br>
                                    Hàng giả, hàng lậu, hàng vi phạm bản quyền: Sản phẩm có thương hiệu, tác phẩm thơ văn của các nghệ sĩ đã được đăng kí bản quyền, chương trình máy tính/trò chơi điện tử.
                                </li>
                                <li>Các tin hàng hóa dịch vụ bị cấm theo quy định của Love Market: <br>
                                    Các sản phẩm trong ngành y tế: Máy móc y tế, thuốc và thuốc bổ cho người lớn/trẻ em/vật nuôi, dược phẩm thảo mộc có tính chất quý hiếm, thuốc theo đơn.<br>
                                    Các mặt hàng dễ gây dị ứng, có thể ảnh hưởng đến sức khoẻ của người dùng: Quần áo lót đã qua sử dụng. Kính áp tròng, kính cận. Bia, cồn, rượu, thuốc lá, các chất kích thích, gây nghiện khác. Mỹ phẩm dạng uống, tiêm. <br>
                                    Các sản phẩm có nội dung người lớn: Đồ chơi tình dục, sản phẩm khiêu dâm. <br>
                                    Các tin đăng không nhằm mục đích mua bán hàng hoá, dịch vụ, tuyên truyền: Sự kiện hội họp. Các tài liệu tuyên truyền. Thư/ Lời chúc mừng/ Thông báo. <br>
                                    Các sản phẩm mê tín: Bùa hộ mạng hoặc miêu tả mê tín (đuổi tà, đuổi quỷ …) và tất cả các vật thần bí.
                                    Các sản phẩm phục vụ cho mục đích cờ bạc (bao gồm cả máy đánh bài). <br>
                                    Các sản phẩm thuộc về di tích lịch sử. <br>
                                    Hoá chất: bao gồm nhưng không giới hạn bởi a-xít, chất hoá học nông nghiệp, chất phóng xạ, sản phẩm hoá học diệt côn trùng. <br>
                                </li>
                            </ul>
                            <h4>Love Market bảo lưu quyền thay đổi, điều chỉnh Quy định này vào bất kỳ lúc nào Love Market cho là thuận tiện hoặc theo sự thay đổi chính sách luật pháp mà không cần báo trước. Love Market cũng sẽ bảo lưu quyền từ chối đăng tin hoặc gỡ tin đăng nếu: <br>
                                    <strong>(i)</strong> Love Market cho rằng các thông tin mà người bán cung cấp là không phù hợp/không đúng hoặc <br><strong>(ii)</strong> người bán vi phạm bất kỳ nội dung nào được nêu trong Quy chế này mà không phải chịu bất kỳ trách nhiệm nào. Việc thực thi quyền theo quy định ở đây không ảnh hưởng và cũng không xem là từ bỏ việc thực hiện quyền hoặc áp dụng các biện pháp khác theo chính sách chung của Love Market tùy từng thời điểm.
                            </h4>
		</div>
		<?php } ?> 

		
		<?php if($ques==4){ ?> 
		
		  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom main-question" >		  
            <h1 class="h2"><i class="fa fa-question-circle"></i>  Làm sao để kiểm tra tình trạng của một tin?</h1>
          </div>
		
		<div class="main-answer">
			Bạn có thể kiểm tra tình trạng tin đăng của mình bằng các cách sau: <br>

                        &emsp; Cách 1: Nhận thông báo đăng tin từ trang thông báo <br>

                        &emsp;&emsp;– Love Market sẽ thông báo kết quả đăng tin của bạn khi tin đăng đã được duyệt, hoặc đã bị từ chối cùng lý do bị từ chối. <br>

                        &emsp;Cách 2: Sử dụng tính năng Quản lý tin đăng <br>

                        &emsp;&emsp;– Nhấp vào đường dẫn <a href="HTTPS://lovemarket.000webhostapp.com/user/user-page.php">này</a>.  Vào tài khoản của mình bằng cách điền tài khoản và mật khẩu khi đăng tin. 
                        Tại trang này bạn sẽ biết được danh sách các tin đăng đang hiển thị, đã ẩn, chưa kiểm duyệt hoặc bị từ chối của mình.
		</div>
		<?php } ?> 
		
		<?php if($ques==5){ ?> 
		
		  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom main-question">		  
            <h1 class="h2"><i class="fa fa-question-circle"></i>  Chi phí cho việc tạo một tin đặc biệt(tin mới, tin hot, tin giảm giá, đẩy tin) trên Love Market là bao nhiêu?</h1>
          </div>
		
		<div class="main-answer">
			 Chi phí cho việc tạo một tin đặc biệt là <strong>10.000đ</strong> với các tin đẩy; <strong>20.000đ</strong> với các tin có nhãn mới, hot, giảm giá và được thanh toán bẳng thẻ điện thoại(Viettel, Mobifone, Vinaphone,S-fone, Vietnamobile). Bạn có thể tạo một tin đặc biệt qua các bước sau: <br>
                            &emsp; <strong>Bước 1:</strong> Tại trang <a href="HTTPS://lovemarket.000webhostapp.com/user/user-page.php">Quản lý</a> chọn đến danh sách các tin đang đăng và nhấp chọn tạo tin đặc biệt. <br>
                            &emsp; <strong>Bước 2:</strong> Một hộp thoại xuất hiện cho phép bạn lựa chọn loại tin đặc biệt, một số thông tin kèm theo và mã thẻ-serial để thanh toán. <br>
                            &emsp; <strong>Bước 3:</strong> Sau khi hoàn thành hộp thoại này, bạn nhấp gửi. Nhân viên của Love Market sẽ tiến hành kiểm tra thông tin và thực hiện tạo tin đặc biệt cho bạn.
		</div>
		<?php } ?> 
		
		
		
          <canvas class="my-4 w-100" id="myChart" width="900" height="10"></canvas>
	
        </main>
      </div>
    </div>
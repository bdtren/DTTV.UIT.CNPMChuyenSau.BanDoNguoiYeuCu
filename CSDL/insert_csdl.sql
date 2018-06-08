/*file script chay du lieu*/

/*Báng chucvu */
insert into CHUCVU values('CV0000','NV đã nghỉ','0','0');
insert into CHUCVU values('CV0001','NV Quản lý','3','100000');
insert into CHUCVU values('CV0002','NV Quảng Cáo','2','50000');
insert into CHUCVU values('CV0003','NV Chăm sóc KH','2','50000');
insert into CHUCVU values('CV0004','NV Kiểm duyệt','1','50000');
insert into CHUCVU values('CV0005','NV Tài chính-Kế toán','2','50000');
insert into CHUCVU values('CV0006','NV Kỹ thuật','1','70000');

/*Bang danhmuc*/
insert into DANHMUC values('DM0000','Tất cả danh mục','./Images/danh-muc/tatca.jpg','');
insert into DANHMUC values('DM0001','Bất động sản','./Images/danh-muc/bds2.jpg','size50');
insert into DANHMUC values('DM0002','Nội ngoại thất, đồ gia dụng','./Images/danh-muc/noithat.jpg','');
insert into DANHMUC values('DM0003','Đồ điện tử','./Images/danh-muc/dientu2.jpg','');
insert into DANHMUC values('DM0004','Xe cộ','./Images/danh-muc/xeco2.jpg','size50');
insert into DANHMUC values('DM0005','Thời trang, đồ dùng cá nhân','./Images/danh-muc/thoitrang.jpg','');
insert into DANHMUC values('DM0006','Mẹ và bé','./Images/danh-muc/mebe2.jpg','');
insert into DANHMUC values('DM0007','Thú cưng','./Images/danh-muc/thucung2.jpg','');
insert into DANHMUC values('DM0008','Giải trí, Thể thao, Sở thích','./Images/danh-muc/giaitri2.jpg','');
insert into DANHMUC values('DM0009','Đồ văn phòng, Công nông nghiệp','./Images/danh-muc/vanphong2.jpg','');
insert into DANHMUC values('DM0010','Việc làm dịch vụ','./Images/danh-muc/dichvu2.jpg','');
insert into DANHMUC values('DM0011','Các loại khác','./Images/danh-muc/loaikhac.jpg','');
insert into DANHMUC values('DM0012','Cho tặng miễn phí','./Images/danh-muc/chotang.png','');
insert into DANHMUC values('DM1001','Món quà đầu tiên','./Images/danh-muc/quadautien.jpg','size50');
insert into DANHMUC values('DM1002','Ngày Valentine 14-2','./Images/danh-muc/valentine.jpg','');
insert into DANHMUC values('DM1003','Ngày Quốc tế Phụ nữ 8-3','./Images/danh-muc/8-3.jpg','');
insert into DANHMUC values('DM1004','Ngày Phụ nữ Việt Nam 20-10','./Images/danh-muc/20-10.jpg','');
insert into DANHMUC values('DM1005','Dịp sinh nhật','./Images/danh-muc/sinhnhat.jpg','');
insert into DANHMUC values('DM1006','Quà ngày lễ khác','./Images/danh-muc/ngaylekhac.jpg','');
insert into DANHMUC values('DM1007','100 ngày yêu','./Images/danh-muc/100ngay.jpg','');
insert into DANHMUC values('DM1008','Quà cầu hôn','./Images/danh-muc/cauhon.jpg','size50');
insert into DANHMUC values('DM1009','Khi người ấy giận','./Images/danh-muc/nguoiaygian.jpg','');
insert into DANHMUC values('DM1010','Quà chia tay','./Images/danh-muc/chiatay.jpg','');
insert into DANHMUC values('DM1011','Quà kỉ niệm khác','./Images/danh-muc/kiniem.jpg','');
insert into DANHMUC values('DM2001','Thư tay','./Images/danh-muc/thu.jpg','');
insert into DANHMUC values('DM2002','Handmade','./Images/danh-muc/handmade.jpg','');
insert into DANHMUC values('DM2003','Bài hát','./Images/danh-muc/baihat3.jpg','');
insert into DANHMUC values('DM2004','Bài thơ','./Images/danh-muc/baitho2.jpg','');

/*Báng taikhoan */
insert into TAIKHOAN values('TK0000','TK_Rong1','');
insert into TAIKHOAN values('TK0001','leminhtuan','minhtuan');
insert into TAIKHOAN values('TK0002','nguyenanhtuan','anhtuan');
insert into TAIKHOAN values('TK0003','vosivai','sivai');
insert into TAIKHOAN values('TK0004','nguyenbaoduy','baoduy');
insert into TAIKHOAN values('TK0005','hoangtuananh','tuananh');

insert into TAIKHOAN values('TK1000','TK_Rong2','');
insert into TAIKHOAN values('TK1005','nguyenvanduc','vanduc');
insert into TAIKHOAN values('TK1006','trananhviet','anhviet');
insert into TAIKHOAN values('TK1007','hoxuanhuong','xuanhuong');
insert into TAIKHOAN values('TK1008','nguyenthitrang','thitrang');
insert into TAIKHOAN values('TK1009','hoangtuananh','tuananh');
insert into TAIKHOAN values('TK1010','lehoangnam','hoangnam');
insert into TAIKHOAN values('TK1011','hoxuanthuong','baoanh');




/*Báng khachhang */
insert into KHACHHANG
values('KH0000','TK1000','','','','','1900/1/1','','','./Images/user/avatar0.png','','0');
insert into KHACHHANG
values('KH0001','TK1005','Nguyễn Văn Đức','Hồ Chí Minh','0123456789','abcd.facebook','1997/5/6','Nam','abc@gmail.com','./Images/user/avatar1.png','tam su abc...','0');
insert into KHACHHANG
values('KH0002','TK1006','Tran Anh Việt','Bình Dương','01232456789','abcde.facebook','1996/2/14','Nam','abcd@gmail.com','./Images/user/avatar2.png','tam su def...','10');
insert into KHACHHANG
values('KH0003','TK1007','Hồ Xuân Hương','Đồng Nai','00123456789','abcdf.facebook','1997/8/27','Nu','abcdf@gmail.com','./Images/user/avatar3.png','tam su bcd...','30');
insert into KHACHHANG
values('KH0004','TK1008','Nguyễn Thị Trang','Tiền Giang','1223456789','abcdfe.facebook','1998/3/13','Nu','abcdfef@gmail.com','./Images/user/avatar4.png','tam su abc...','0');
insert into KHACHHANG
values('KH0005','TK1011','Hồ Xuân Thương','Hồ Chí Minh','12023456789','abcdfe.facebook','1996/7/13','Nam','abcdfef@gmail.com','./Images/user/avatar5.png','tam su abc...','0');
insert into KHACHHANG
values('KH0006','TK1009','Hoàng Tuấn Anh','Bình Phước','01234529749','tuananh.facebook','1990/3/19','Nam','tuananh@gmail.com','./Images/user/avatar6.png','tam su khach hang 6','20');
insert into KHACHHANG
values('KH0007','TK1010','Lê Hoàng Nam','Bình Phước','01234529749','hoangnam.facebook','1990/3/19','Nam','hoangnam@gmail.com','./Images/user/avatar6.png','tam su khach hang 6','20');

/* Báng nhanvien */
insert into NHANVIEN
values('NV0000','TK0000','CV0000','','1900/1/1','','','','','./Images/user/avatar5.png','1900/1/1');
insert into NHANVIEN
values('NV0001','TK0001','CV0002','Lê Minh Tuấn','1997/6/23','Bình Dương','01234562358','Nam','mintuan@gmail.com','./Images/user/avatar5.png','2018/5/1');
insert into NHANVIEN
values('NV0002','TK0002','CV0003','Nguyễn Anh Tuấn','1997/4/13','Hồ Chí Minh','010234562358','Nam','anhtuan@gmail.com','./Images/user/avatar6.png','2018/2/12');
insert into NHANVIEN
values('NV0003','TK0003','CV0004','Võ Sĩ Vai','1997/8/10','Hồ Chí Minh','012340562358','Nam','sivai@gmail.com','./Images/user/avatar7.png','2018/2/12');
insert into NHANVIEN
values('NV0004','TK0004','CV0005','Nguyễn Bảo Duy','1997/4/3','Biên Hòa','012345602358','Nu','bdtren@gmail.com','./Images/user/avatar8.png','2018/2/12');
insert into NHANVIEN
values('NV0005','TK0005','CV0001','Hoàng Tuấn Anh','1996/4/3','Tiền Giang','0123450602358','Nam','adsff@gmail.com','./Images/user/avatar9.png','2018/2/12');

/*Bang loaitin */
insert into LOAITIN values('ribbon-new','tin mới','10000');
insert into LOAITIN values('ribbon-hot','tin hot','20000');
insert into LOAITIN values('ribbon-discount','tin giảm giá','1000');
insert into LOAITIN values('ribbon-normal','tin bình thường','0');

/*Báng tindang */
insert into TINDANG
values ('TD0001','NV0003','KH0001','ribbon-new','1','2018/4/30','Bán','Bán nhà người yêu cũ','3000000000','mới','./Images/san-pham/tindang1.png;./Images/san-pham/tindang1_2.png','tâm sự abc','tiền mặt','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0002','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán tủ lạnh','4000000','mới','./Images/san-pham/tindang2.png','tâm sự abc','chuyển khoản','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0003','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua Tivi','3000000','mới','./Images/san-pham/tindang3.png','tâm sự abc','tiền mặt','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0004','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang4.png','tâm sự abc','chuyển khoản','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0005','NV0003','KH0005','ribbon-new','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang5.png','tâm sự abc','tiền mặt','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0006','NV0003','KH0005','ribbon-normal','1','2018/4/30','Bán','Bán xe đạp em bé','1000000','mới','./Images/san-pham/tindang6.png','tâm sự abc','tiền mặt','dang cho','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0007','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua chó kiểng','4000000','mới','./Images/san-pham/tindang7.png','tâm sự abc','tiền mặt','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0008','NV0003','KH0002','ribbon-normal','1','2018/4/30','Mua','Mua banh','200000','mới/cũ','./Images/san-pham/tindang8.png','tâm sự abc','tiền mặt/chuyển khoản','duyet gg','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0009','NV0003','KH0003','ribbon-normal','1','2018/4/30','Bán','Bán bàn làm việc','1000000','cũ','./Images/san-pham/tindang9.png','tâm sự abc','tiền mặt','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0010','NV0003','KH0004','ribbon-normal','1','2018/4/30','Mua','Mua xe đạp','700000','mới','./Images/san-pham/tindang10.png;./Images/san-pham/tindang10_2.png','tâm sự abc','chuyển khoản','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0011','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua mắt kiếng','1000000','mới','./Images/san-pham/tindang11.png','tâm sự abc','tiền mặt','da an','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0012','NV0003','KH0005','ribbon-normal','1','2018/4/30','Bán','Bán khăn len','50000','mới','./Images/san-pham/tindang12.png','tâm sự abc','tiền mặt','da dang','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0013','NV0003','KH0006','ribbon-normal','1','2018/4/30','Mua','Mua nhà','3000000000','mới','./Images/san-pham/tindang13.png','tâm sự abc','tiền mặt/chuyển khoản','dang cho','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0014','NV0003','KH0007','ribbon-normal','1','2018/4/30','Bán','Bán máy giặt','6000000','cũ','./Images/san-pham/tindang14.png','tâm sự abc','tiền mặt','duyet moi','Chia tay lấy lại vốn');
insert into TINDANG
values ('TD0015','NV0003','KH0007','ribbon-normal','1','2018/4/30','Mua','Mua máy lạnh','3000000','mới','./Images/san-pham/tindang15.png','tâm sự abc','tiền mặt','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0016','NV0003','KH0007','ribbon-normal','1','2018/4/30','Mua','Mua tivi','6000000','mới','./Images/san-pham/tindang16.png;./Images/san-pham/tindang16_2.png','tâm sự abc','tiền mặt','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0017','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang17.png','tâm sự abc','tiền mặt','da dang', 'Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0018','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán điện thoại','4000000','mới','./Images/san-pham/tindang18.png','tâm sự abc','tiền mặt','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0019','NV0003','KH0001','ribbon-normal','1','2018/4/30','Tặng','Tặng chó Nhật','0','mới','./Images/san-pham/tindang19.png','tâm sự abc','Tặng','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0020','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán nhẫn','1000000','cũ','./Images/san-pham/tindang20.png','tâm sự abc','chuyển khoản','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0021','NV0003','KH0003','ribbon-normal','1','2018/4/30','Bán','Bán dây chuyền','3000000','mới','./Images/san-pham/tindang21.png','tâm sự abc','tiền mặt','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0022','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang22.png','tâm sự abc','chuyển khoản','da an','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0023','NV0003','KH0005','ribbon-hot','1','2018/4/30','Mua','Mua áo sơ mi','200000','mới','./Images/san-pham/tindang23.png;./Images/san-pham/tindang23_2.png','tâm sự abc','tiền mặt','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0024','NV0003','KH0006','ribbon-normal','1','2018/4/30','Bán','Bán xe hơi','1000000000','mới','./Images/san-pham/tindang24.png','tâm sự abc','tiền mặt/chuyển khoản','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0025','NV0003','KH0007','ribbon-normal','1','2018/4/30','Tặng','Thư kỷ niệm','0','cũ','./Images/san-pham/tindang25.png','tâm sự abc','Tặng','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0026','NV0003','KH0007','ribbon-discount','1','2018/4/30','Bán','Bán Nhẫn','2000000;4000000','mới','./Images/san-pham/tindang26.png','tâm sự abc','chuyển khoản','da dang','Đừng biến trái tim bạn thành một con đường, để ai cũng có thể đi qua. Mà hãy biến nó thành một bầu trời, nơi mà tất cả mọi người đều mơ ước tới.');
insert into TINDANG
values ('TD0027','NV0003','KH0003','ribbon-normal','1','2018/4/30','Tặng','Thư tỏ tình','0','mới','./Images/san-pham/tindang27.png','Cô quyết định buông bỏ, buông bỏ cả quãng đời thanh xuân đẹp nhất cô đã từng dâng hiến cho anh, buông bỏ cả những gì thiêng liêng nhất trong tình yêu mà đến mãi sau này cô mới nhận ra chính những cùng cực trong đau khổ đó cô mới thấy tình yêu vẫn là mãi mãi và chính những đổ vỡ hôm nay đã dạy cho cô những mạnh mẽ sau này. 
Cô vẫn nhớ như in ngày anh rời Hà Nội vào Sài Gòn. Ngày đó Hà Nội mưa nhiều lắm. Anh đã rời xa cô rồi chạy trốn cùng với một người con gái khác, tới một khung trời khác mà không có cô. Bao nhiêu dại khờ, bao nhiêu hứa hẹn, bao nhiêu tình yêu cũng theo anh mà tan biến trong phút chốc. Anh bảo với cô vì anh sợ làm ảnh hưởng đến tương lai của cô. Anh bảo với cô vì anh sợ không mang lại được hạnh phúc cho cô. Anh bảo... anh bảo... anh bảo anh phải đi. 
Nhưng thật ra, cô hiểu chỉ vì trong lòng anh đã có một người con gái khác, không phải cô.
- "Anh đi vì một người con gái khác, và tuyệt nhiên đó không phải là em?" Tin nhắn cuối cùng cô gửi cho anh là câu hỏi mãi mãi rơi vào trong im lặng. Câu trả lời cả cô và anh chắc đều rõ. Có thể vì anh không muốn làm cô tổn thương thêm nữa nên mới im lặng. Nhưng điều đó chỉ càng làm cô đau khổ hơn bao giờ hết.
Ngày anh đi, cô như con mèo hen sợ nước. Cô giam mình trong phòng với bao kỉ niệm. Cô không dám bước chân khỏi phòng vì mỗi con đường, mỗi góc phố đều như đang cười nhạo cô, cười nhạo sự thất bại của cô. Nhưng làm sao thoát ra được, cả chính căn phòng nơi cô đang giam mình cũng đầy áp hình ảnh của cô và anh...
Cô đã từng kiêu hãnh, cô đã từng xinh đẹp, cô đã từng tự hào biết bao nhiêu. Nhưng giờ, đơn giản, cô chỉ là người thất bại, thất bại trong những ảo tưởng tình yêu mà anh mang đến cho cô.
Anh ra đi, mang theo cả tâm hồn cô.
Cô ở lại, chỉ còn lại toàn là kỉ niệm.
Cô quyết định buông bỏ, buông bỏ cả quãng đời thanh xuân đẹp nhất cô đã từng dâng hiến cho anh, buông bỏ cả những gì thiêng liêng nhất trong tình yêu mà đến mãi sau này cô mới nhận ra chính những cùng cực trong đau khổ đó cô mới thấy tình yêu vẫn là mãi mãi và chính những đổ vỡ hôm nay đã dạy cho cô những mạnh mẽ sau này.
Nhưng nỗi đau nào cũng phải qua, vết thương nào cũng có ngày liền da, chỉ là sớm hay muộn.
Ngày cô nhận được thiệp mời đám của anh thì vết thương vẫn chưa liền miệng. Cô cứ nghĩ mọi thứ đã ngủ yên, cô đã nghĩ tình yêu trong cô đã chết, cô đã nghĩ mình không thể yêu thêm một ai nữa. Nhưng không phải, tất cả vẫn vẹn nguyên như ngày đầu, chỉ khác là tình yêu đó chỉ có mỗi mình cô đứng đợi. Người đã ra đi không bao giờ quay về nữa.
Cô hiểu khi một cánh cửa đã đóng lại, thường thì người ta vẫn cứ đắm chìm trong những tiếc nuối, hối hận mà quên mất bên cạnh mình một cánh cửa đã dần mở ra, chỉ cần ta dừng lại một chút thôi đã nhìn thấy ánh sáng cuối chân trời. Chỉ là cô cố chấp, không chấp nhận những gì đã qua mà thôi.
Bao năm trôi qua, vẫn có một người đến bên cạnh cô mỗi lần cô buồn, chở cô lang thang Hà Nội khi lòng cô trống trải, lắng nghe cô thổn thức mỗi khi nắng chiều hoang hoải về. Vẫn có một người con trai đợi cô mà không phải là anh. Cô chìm đắm trong nỗi đau của riêng cô mà quên mất nỗi đau đó có ngày liền da chính là nhờ anh. Cô cũng như con chim sợ cành cong mà không dám đậu, nên cứ bay mãi, bay mãi, cuối cùng mỏi cánh chùn chân...
Ngày anh cưới, cô như người mất hồn, nhợt nhạt. Nhưng người đó đã đến bên cạnh để rồi cô chợt nhận ra, vì sao, vì một thứ không xứng với mình, vì một vết thương mà làm con rùa rụt cổ, vì một người đã không còn yêu mình nữa mà để cả tuổi thanh xuân vụt qua.
Tiền tài, danh vọng cô không cần. Cô chỉ cần một bờ vai để cô có thể dựa vào mỗi khi buồn, cần một bàn tay sẵn sàng nắm lấy mỗi khi cô chới với, cần một ánh mắt thấu hiểu, cần một mái nhà ấm êm.
Nếu trước kia yêu anh, mỗi ngày trong tuần anh đều vùi đầu trong công việc, cuối tuần đến anh lại mải mê với bè bạn để mặc cô trống vắng, cô đơn.
Vậy vì sao cô chấp nhận chờ đợi?
Cô không hối hận vì quãng đời vừa qua, vì cô biết, trước kia cô đã từng như vậy vì tại thời điểm đó bản thân cô muốn như vậy. Dù đó có là điều ngốc ngếch gì đi nữa cô vẫn chưa từng hối hận.
Dù người con gái hôm nay mặc váy cưới tinh khôi đó không phải là cô đi nữa, cô vẫn mỉm cười chỉ vì cô không muốn hận anh nữa. Cô thật lòng mong anh hạnh phúc. Chỉ là từ giờ trở đi, cô sẽ buông bỏ những gì không thuộc về cô và cho người đến sau một cơ hội, cũng chính là cho bản thân mình một cơ hội.
Em buông tay rồi, anh hạnh phúc nghe anh.'
,'Tặng','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0028','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán nhà tăm','50000','mới','./Images/san-pham/tindang28.png','Rồi cũng đến những ngày, bọn anh cảm thấy cả hai trở nên xa lạ và thừa thải trong cuộc đời nhau. Nỗi đau của hai đứa anh không phải là cãi vã, cũng chẳng hẳn
Rồi cũng đến những ngày, bọn anh cảm thấy cả hai trở nên xa lạ và thừa thải trong cuộc đời nhau.
Nỗi đau của hai đứa anh không phải là cãi vã, cũng chẳng hẳn là giận hờn. Chỉ bởi mỗi ngày, bọn anh đều mặc nhau im lặng với cô đơn.
Cảm giác cả ngày đi làm về mệt mỏi, điện thoại chẳng rung lên bất kì cuộc gọi nào từ người kia, mớ tin nhắn, vẫn nằm bất động ở đấy im lìm.
Cô ấy lim dim ngủ mà chẳng hề có được đủ đầy một câu chúc. Anh và cô ấy thức dậy cùng lúc nhưng đáng tiếc đã chẳng còn cùng nhau.
Có lần, cô ấy bảo:
“Anh có thấy mình đang dần mất nhau?”
Anh lơ ngơ lát lâu rồi trả lời:
“Anh còn thương mà, chỉ là chẳng đủ thiết tha như ngày xưa nữa …”
“Vậy mình buông nhau được chưa?”
Bọn anh cũng từng nghĩ đến chuyện rời bỏ nhau. Nhưng hình như, còn nợ nhau quá nhiều lời hứa.
Anh từng nói sẽ mua cho cô ấy một bộ váy hoa, đưa cô ấy ra biển vào ngày đẹp trời nhất.
Anh từng bảo nhất định cưới cô ấy vào năm anh hai lăm, rồi mười năm sau, cả hai sẽ nắm tay nhau về một khu nhà nhỏ bên đồi xanh, có bầy con nhỏ của bọn anh.
Và có cái bình yên mộc dị của những ngày không còi xe, không khói thuốc.
Bọn anh ràng buộc nhau bởi quá nhiều lần thề hẹn sẽ sống trọn một cuộc an lành về sau. Vậy mà hôm nay, chẳng còn ai đủ can đảm để dịu dàng với người kia thêm một tí tẹo nào.
Cô ấy bảo anh đừng xin lỗi. Chẳng ai là người sai dù ngày mai chuyện này sẽ đi đến hồi kết. Bọn anh cũng mong cho dù đặt dấu chấm hết, cả hai cũng sẽ có riêng nhau những ngày tháng yên bình
Nếu có một bình minh đẹp trời nào đấy, em hãy mặc váy hoa anh tặng, anh sẽ đưa em ra biển, mình bỏ lại ngày cũ ở phía sau.
Em ngượng hỏi – “Còn thương nhau không?”, anh giả vờ hôn lên trán em rồi ngồi yên lặng đấy. Để thấu hiểu, để hạnh phúc, để ngọt ngào.
Để mình bắt đầu lại cuộc đời khác, còn nhau …','tiền mặt','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0029','NV0003','KH0001','ribbon-normal','1','2018/4/30','Tặng','Tặng đĩa nhạc','0','cũ','./Images/san-pham/tindang29.png','Thế giới chúng tôi đang sống, thực sự buồn. Càng buồn hơn trong những ngày lễ lạt. Giống như những kẻ cô độc bị bỏ quên, đứng bên rìa thành phố nhìn người người trao nhau những cái ôm nồng ấm, một nụ cười tươi. Không ai mang cho chúng tôi những điều như vậy cả.
Trong lúc mơ màng giấc ngủ chiều nay, tôi mơ thấy trường cấp ba của mình. Một quá khứ xa xôi hiện về qua những khung hình nhảy cóc. Ba mùa giáng sinh cả lũ ở trọ lôi nhau đi bộ xuống nhà thờ. Rất nhiều nhà thờ to nhỏ, đặc biệt có cái nhà thờ nghe đồn to nhất cả Việt Nam. Chúng tôi thường dắt díu nhau đến đó, hòa vào dòng người đông đúc và tiếng nhạc ầm ĩ những bài thánh ca. Mười hai giờ đêm, khi những kẻ vô thần đã kéo nhau về ngủ, chỉ còn lại chúng tôi vẫn cố chấp ở lại nhà thờ cùng các con chiên. Chúng tôi cũng quỳ và cầu nguyện, và nghe dàn đồng ca hát lên bài hát về chúa giáng sinh.
Chúng tôi chỉ ở đó, những kẻ vô thần xâm nhập vào thế giới của những người thiên chúa. Hết lễ, lại lúi húi dắt nhau về. Để mặc cho khí lạnh phả vào mặt, và những cơn gió khiến tất cả rùng mình.
Mùa giáng sinh cuối cùng năm đó, trong số những người gia nhập hội, có cả anh. Tôi chỉ dám đứng từ xa nhìn anh qua ánh đèn nhập nhoạng, để mặc cô bạn muốn kéo tôi đi đâu thì đi. Anh đang chụp hình cùng lũ bạn. Anh đang đứng xem ca nhạc. Anh đang chui vào cái hầm ánh sáng phía bên kia con đường. Thế giới của tôi năm ấy, không thoát ra ngoài bóng dáng một chàng trai.
Tôi lại mơ hồ nhớ cả chuyện xa hơn thế nữa. Một giáng sinh nào đó năm tôi còn học cấp hai, anh em tôi trốn đi chơi với bạn, nửa đêm không về. Bị cha tôi mắng xối xả. Hai đứa nhìn nhau lấm lét cười, đầu đang nghĩ về cây thông rực sáng trước cổng nhà thờ đâu đó.
Năm tôi cùng cha mẹ đi chơi giáng sinh, tôi thấy mẹ cười hạnh phúc. Mẹ tôi, người phụ nữ một đời lam lũ với những vết chân chim hằn sâu trên khóe mắt, chưa từng biết giáng sinh là gì. Năm đó, tôi đã phải mè nheo ỉ ôi cả ngày cha tôi mới chịu chở hai mẹ con đi. Tôi muốn chỉ cho mẹ thấy, cây thông ánh sáng rực rỡ diệu kỳ, cả những mô hình chúa giáng sinh người ta kỳ công dựng lên nữa.
Bây giờ tôi đã biết đi xe máy, lại không thể ở nhà để đưa mẹ đi xem được. Tôi lại cũng đang bị nhốt trong cái thế giới u buồn này. Sau này tôi sẽ bù, chỉ hy vọng còn đủ thời gian.
Bao mùa trôi qua, tôi không biết cái lũ bạn ngày xưa có còn nhớ, không biết cha mẹ giờ này đang làm gì, anh có đang nắm tay ai sánh vai nhau trên con đường ánh sáng?!
Giá mà, ai cho tôi một nụ cười an ủi, một cái ôm nhắc nhở tôi đừng buồn. Có lẽ, chỉ vì tôi đang ốm, và tác dụng của thuốc khiến tôi thấy trống rỗng vô cùng. Ừ, có lẽ, chỉ là vậy thôi.
Tôi hay nghĩ đến một người khi viết. Có nhiều lúc thứ tôi viết chẳng liên quan gì đến người. Tôi từng nghĩ, anh vui, tôi cũng sẽ vui. Nhưng giờ tôi mới hiểu, anh vui, tôi không vui, vì tôi không thể ở cùng anh chia sẻ niềm vui đó. Mọi thứ sẽ tệ hơn, khi tôi cảm thấy mình hoàn toàn bất lực.
Đã qua một ngày. Chúc cho tất cả mọi người luôn bình an, luôn vui vẻ.
Hôm nay trời đẹp, có lẽ ngoài kia ai đó đang cười…','tặng','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0030','NV0003','KH0002','ribbon-normal','1','2018/4/30','Tặng','Tặng truyện','0','mới','./Images/san-pham/tindang30.png','Tôi bước ra cổng trường… dảo mắt tìm cậu…bước lên bậc đứng đợi cậu…nhìn sang bên kia đường…thấy ? Tôi quay lưng…bỏ đi… trốn tránh?
Buổi chiều, trong tiết học thể dục, lớp tôi bàn tán về cậu, về người cậu yêu.. tôi lắng nghe. Cô gái ấy đáng yêu như thế, dũng cảm như thế,..Tôi tự nhủ: ” Phải rồi, phải rồi”
Chúng ta chả là gì của nhau cả, phải rồi… Chỉ là nắm tay vài lần, chỉ là đèo nhau vài lần, chỉ là xoa đầu vài lần, chỉ là hứa hẹn vài lần….
Chúng ta đang chơi trò gì vậy? Tôi đã game over chưa? Tôi …không hiểu, tôi đáng ra phải có câu trả lời nghiêm túc chứ. Tôi ngỡ…mình đang bị chơi đùa vậy.
Đến khi tôi đủ tự tin, đủ dũng cảm tôi sẽ nói rõ với cậu. Một là chúng ta là bạn. Hai là người xa lạ.','tặng','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0031','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua nhà','2000000000','mới','./Images/san-pham/tindang31.png','Gió. Cứ mơn man buồn trôi theo những cơn mê! Có khi tự hỏi tôi đang đi về đâu ? Lòng bất an và khó tả đến vô cùng. Em đang phải đương đầu với sóng dữ hay … đối mặt với những ngọt ngào của cám dỗ ? Đôi lúc trở nên bất lực hay có cảm giác bị phụ thuộc vào ai đó. Sự vô định đã hình thành từ bao giờ rồi ???
Ngày hôm nay không còn cảm giác sợ yêu thương nào đó sẽ vụt mất. Không còn lo lắng rằng yêu thương đó có chân thành hay không? Và cũng không còn sợ yêu thương đó bao giờ tan biến nữa. Tôi chấp nhận cho sự nhỏ nhoi và cả những thứ khiến tôi ấm ức bực bội vì có thể những điều đó sẽ không tồn tại mãi mãi được. Tôi tin vào những điều hiển hiện trước mắt mình mặc dù đôi lần ghét cho cái thực tại xô bồ chen chúc đến khó thở…
”Đôi khi muốn mở lời để hỏi anh: Chúng ta đã yêu chưa? Sao cứ để con tim em bị dối lừa như thế này hả anh? Nếu đã yêu sao còn nhung nhớ ai kia để rồi xót xa cho cuộc tình không trọn. Yêu là để cho nhau đau khổ hả anh? Những lúc e cần anh nhất anh đâu có thấu được. Bao suy nghĩ trong em cứ dần trào dâng để rồi em nghĩ về những thứ phù phiếm và vô vọng. Em tin tưởng ai giờ đây khi niềm tin ở anh đã dần vơi cạn mất rồi? Em tin vào ai khi trong em mang đầy những mớ rối bời và hoang mang. Anh quan tâm ai để rồi anh không còn biết em là ai nữa. Anh nói gì khi em đã mất dần sự trông mong,có lẽ ta đã sai khi gặp nhau không đúng thời điểm anh à. Và có lẽ em cũng sai khi em nhận ra mối chân tình đó không thuộc về em.
Những giằng xé về tâm hồn sẽ khiến e mòn mỏi nhiều đi vì em biết thanh xuâm của mỗi người có được bao nhiêu đâu chứ. Dặn lòng sẽ không xót xa bởi những thương tổn trước mắt nhưng mà em vẫn là em,vẫn là linh hồn chứ không phải một vật thể chỉ tồn tại. Dặn lòng dù có yêu anh đến thế nào đi nữa cũng không được phép tổn thương tâm hồn này , nhưng anh à em bất lực trước mọi thứ. Bởi những bộn bề đâu đó đã khiến em khó chịu đến đau lòng. Có lúc giống như địa ngục tăm tối, lúc thấy đầy hi vọng. Em là gì trong trái tim anh?Là người thay thế cho một khoảng trống còn ngăn hay là người anh chót thương hại? Lắm lúc lòng chật vật và lo nghĩ. Anh đâu có cần em ! Bởi nếu có thì đâu anh đối xử với em như thể chỉ cho có vậy chứ? Em không phải người con gái anh thầm mong. Và em cũng chắc rằng :anh không yêu em.','tiền mặt/chuyển khoản','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0032','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán máy lạnh','4000000','mới','./Images/san-pham/tindang32.png','“Yên đơn phương” thường được ví là tình yêu vĩ đại nhất; khi bạn cho đi mà không cần nhận lại. Bạn cứ yêu, cứ dõi theo bước chân người ta và đương nhiên người ta chẳng hề hay biết. Bạn có quyền vui khi người ta cười và buồn khi người ta khóc; nhưng bạn lại không có quyền được góp phần trong tiếng cười ấy, hay đơn giản là tạo cho người ta những giọt nước mắt li ti. Thật nực cười đúng không?
Những ai đã và đang “yêu đơn phương” mới có thể thấu nỗi đau mà thứ tình cảm này mang lại; nó nhẹ nhàng khứa vào tim trong những ngày nắng ấm. Nhìn người ta vui vẻ bên người yêu mà tự nhủ: “ừm bạn ấy hạnh phúc thì mình cũng hạnh phúc” có thật sự thế không? Hay là lòng bạn đang chảy máu, một thứ máu không màu.Thật tàn nhẫn khi nói  “yêu đơn phương” là thứ tình yêu cao thượng; sẵn sàng cho đi mà không cần người kia biết. Nếu được chọn, tôi chẳng cần cái cao thượng đó.Mọi người vẫn thường nói khi yêu con người luôn ngu ngốc, luôn chẳng biết mình đang nghĩ gì và sẽ làm gì. Thế nhưng với “yêu đơn phương” tôi không nghĩ vậy; khi bạn “yêu đơn phương” bạn không được ngu ngốc bất cứ phút giây nào, bởi chỉ cần một giây ngu ngốc bạn sẽ không kiểm soát được hành động của mình và có thể làm mất đi cái “phao” duy nhất mà bạn bám trụ trong thứ tình cảm này, đó là sự thương hại hoặc chăng là sự lừa dối bản thân. Khi tôi nhận ra mình yêu anh và biết rằng thứ tình yêu đó ngày càng lớn lên chiếm trọn trái tim tôi, thì tôi đã thấy mình lỗ nặng rồi. Tôi sẽ không được người yêu chăm sóc như những bạn khác; sẽ không có những dòng tin nhắn lúc về đêm; không được nắm tay nhau bước trên đường dài hay đơn giản là một tiếng alo trên điện thoại. Thế mà tôi vẫn cứ yêu anh, yêu đến mức chấp nhận tất cả. Chấp nhận nhìn anh quan tâm người khác, nhìn anh cười, nhìn anh khóc mà chỉ có thể dõi theo trong im lặng. Anh tàn nhẫn lắm nhưng chính tôi mới là người tàn nhẫn nhất với bản thân mình. Đó không phải là sự ngu ngốc, đó là cách ngược đãi trái tim.
Đừng bao giờ nghĩ “yêu đơn phương” là yếu đuối khi mà không dám thổ lộ tình yêu. Một người phải có đủ mạnh mẽ thì mới có thể giả dạng bình tâm nhìn người mình yêu-yêu người khác. “Yêu đơn phương” là thứ tình cảm vĩ đại, cao thượng nhất; những chính nó cũng là thứ tình cảm hèn mọn nhất.','tiền mặt','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0033','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua máy tính','3000000','cũ','./Images/san-pham/tindang33.png','tâm sự abc','tiền mặt','da an','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0034','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán xe máy','7000000','mới','./Images/san-pham/tindang34.png','tâm sự abc','tiền mặt','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0035','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua máy ảnh','1000000','cũ','./Images/san-pham/tindang35.png','tâm sự abc','tiền mặt','da dang','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');
insert into TINDANG
values ('TD0036','NV0003','KH0002','ribbon-normal','0','2018/4/30','Bán','Bán võng','1000000','mới','./Images/san-pham/tindang36.png','tâm sự abc','tiền mặt','dang cho','Thà rằng cô đơn vì không yêu ai cả…còn hơn yêu ai đó mà vẫn cô đơn');


insert into TINDANG
values ('TD0037','NV0003','KH0001','ribbon-new','1','2018/4/30','Bán','Đồng hồ thông minh','250000','mới','./Images/san-pham/tindang37.png;./Images/san-pham/tindang37_2.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0038','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Quần jogger BIGSIZE NAM NỮ','100000','mới','./Images/san-pham/tindang38.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0039','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua sáo trúc','200000','mới','./Images/san-pham/tindang39.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0040','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán đàn piano cơ','50000000','mới','./Images/san-pham/tindang40.png','tâm sự abc','chuyển khoản','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0041','NV0003','KH0005','ribbon-hot','1','2018/4/30','Mua','Mua sóc','300000','mới','./Images/san-pham/tindang41.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0042','NV0003','KH0006','ribbon-normal','1','2018/4/30','Bán','Bán gà tre','500000','mới','./Images/san-pham/tindang42.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0043','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua xe máy','20000000','mới','./Images/san-pham/tindang43.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0044','NV0003','KH0002','ribbon-normal','1','2018/4/30','Mua','Mua điện thoại','1000000','mới/cũ','./Images/san-pham/tindang44.png','tâm sự abc','tiền mặt/chuyển khoản','duyet hot','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0045','NV0003','KH0003','ribbon-new','1','2018/4/30','Bán','Bán bếp gas','300000','cũ','./Images/san-pham/tindang45.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0046','NV0003','KH0004','ribbon-normal','1','2018/4/30','Mua','Mua nhà','3000000000','mới','./Images/san-pham/tindang46.png;./Images/san-pham/tindang46_2.png','tâm sự abc','chuyển khoản','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0047','NV0003','KH0006','ribbon-normal','1','2018/4/30','Mua','Mua mèo','100000','mới','./Images/san-pham/tindang47.png','tâm sự abc','tiền mặt','duyet hot','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0048','NV0003','KH0005','ribbon-normal','1','2018/4/30','Bán','Bán khăn len','50000','mới','./Images/san-pham/tindang48.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0049','NV0003','KH0007','ribbon-hot','1','2018/4/30','Mua','Mua nhà','3000000000','mới','./Images/san-pham/tindang49.png','tâm sự abc','tiền mặt/chuyển khoản','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0050','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán máy giặt','6000000','cũ','./Images/san-pham/tindang50.png','tâm sự abc','tiền mặt','duyet moi','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0051','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua máy lạnh','3000000','mới','./Images/san-pham/tindang51.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0052','NV0003','KH0004','ribbon-normal','1','2018/4/30','Mua','Mua tivi','6000000','mới','./Images/san-pham/tindang52.png;./Images/san-pham/tindang52_2.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0053','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang53.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0054','NV0003','KH0005','ribbon-normal','1','2018/4/30','Bán','Bán điện thoại','4000000','mới','./Images/san-pham/tindang54.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0055','NV0003','KH0005','ribbon-normal','1','2018/4/30','Tặng','Tặng chó Nhật','0','mới','./Images/san-pham/tindang55.png','tâm sự abc','Tặng','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0056','NV0003','KH0006','ribbon-normal','1','2018/4/30','Bán','Bán nhẫn','1000000','cũ','./Images/san-pham/tindang56.png','tâm sự abc','chuyển khoản','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');
insert into TINDANG
values ('TD0057','NV0003','KH0007','ribbon-normal','1','2018/4/30','Bán','Bán dây chuyền','3000000','mới','./Images/san-pham/tindang57.png','tâm sự abc','tiền mặt','da dang','Từ bỏ chính là một bắt đầu mới từ một kết thúc buồn');


insert into TD_THUOC_DM values ('TD0001','DM0001');
insert into TD_THUOC_DM values ('TD0001','DM1008');
insert into TD_THUOC_DM values ('TD0002','DM0002');
insert into TD_THUOC_DM values ('TD0003','DM0003');
insert into TD_THUOC_DM values ('TD0004','DM0004');
insert into TD_THUOC_DM values ('TD0004','DM1007');
insert into TD_THUOC_DM values ('TD0005','DM0005');
insert into TD_THUOC_DM values ('TD0006','DM0006');
insert into TD_THUOC_DM values ('TD0007','DM0007');
insert into TD_THUOC_DM values ('TD0008','DM0008');
insert into TD_THUOC_DM values ('TD0009','DM0009');
insert into TD_THUOC_DM values ('TD0009','DM1005');
insert into TD_THUOC_DM values ('TD0010','DM0004');
insert into TD_THUOC_DM values ('TD0011','DM0005');
insert into TD_THUOC_DM values ('TD0012','DM0006');
insert into TD_THUOC_DM values ('TD0013','DM0007');
insert into TD_THUOC_DM values ('TD0014','DM0008');
insert into TD_THUOC_DM values ('TD0015','DM0009');
insert into TD_THUOC_DM values ('TD0016','DM0010');
insert into TD_THUOC_DM values ('TD0017','DM0011');
insert into TD_THUOC_DM values ('TD0018','DM0003');
insert into TD_THUOC_DM values ('TD0018','DM1009');
insert into TD_THUOC_DM values ('TD0019','DM0012');
insert into TD_THUOC_DM values ('TD0020','DM1001');
insert into TD_THUOC_DM values ('TD0021','DM1002');
insert into TD_THUOC_DM values ('TD0022','DM1003');
insert into TD_THUOC_DM values ('TD0023','DM1004');
insert into TD_THUOC_DM values ('TD0024','DM1005');
insert into TD_THUOC_DM values ('TD0025','DM1007');
insert into TD_THUOC_DM values ('TD0026','DM1009');
insert into TD_THUOC_DM values ('TD0027','DM2001');
insert into TD_THUOC_DM values ('TD0028','DM2002');
insert into TD_THUOC_DM values ('TD0029','DM2003');
insert into TD_THUOC_DM values ('TD0030','DM2004');
insert into TD_THUOC_DM values ('TD0031','DM0001');
insert into TD_THUOC_DM values ('TD0032','DM0002');
insert into TD_THUOC_DM values ('TD0033','DM0003');
insert into TD_THUOC_DM values ('TD0034','DM0004');
insert into TD_THUOC_DM values ('TD0035','DM0005');
insert into TD_THUOC_DM values ('TD0036','DM0006');

insert into TD_THUOC_DM values ('TD0037','DM0003');
insert into TD_THUOC_DM values ('TD0038','DM0005');
insert into TD_THUOC_DM values ('TD0039','DM0005');
insert into TD_THUOC_DM values ('TD0039','DM1005');
insert into TD_THUOC_DM values ('TD0040','DM0003');
insert into TD_THUOC_DM values ('TD0041','DM0007');
insert into TD_THUOC_DM values ('TD0042','DM0007');
insert into TD_THUOC_DM values ('TD0043','DM0007');
insert into TD_THUOC_DM values ('TD0044','DM0003');
insert into TD_THUOC_DM values ('TD0045','DM0002');
insert into TD_THUOC_DM values ('TD0046','DM0010');
insert into TD_THUOC_DM values ('TD0047','DM0007');
insert into TD_THUOC_DM values ('TD0048','DM0003');
insert into TD_THUOC_DM values ('TD0048','DM1009');
insert into TD_THUOC_DM values ('TD0049','DM0012');
insert into TD_THUOC_DM values ('TD0050','DM1001');
insert into TD_THUOC_DM values ('TD0050','DM0003');
insert into TD_THUOC_DM values ('TD0051','DM1002');
insert into TD_THUOC_DM values ('TD0051','DM0003');
insert into TD_THUOC_DM values ('TD0052','DM1003');
insert into TD_THUOC_DM values ('TD0052','DM0003');
insert into TD_THUOC_DM values ('TD0053','DM1004');
insert into TD_THUOC_DM values ('TD0053','DM0003');
insert into TD_THUOC_DM values ('TD0054','DM1005');
insert into TD_THUOC_DM values ('TD0054','DM0003');
insert into TD_THUOC_DM values ('TD0055','DM1007');
insert into TD_THUOC_DM values ('TD0055','DM0012');
insert into TD_THUOC_DM values ('TD0056','DM1009');
insert into TD_THUOC_DM values ('TD0056','DM0005');
insert into TD_THUOC_DM values ('TD0057','DM2001');
insert into TD_THUOC_DM values ('TD0057','DM0005');

/* Báng thanhtoanluong */
insert into THANHTOANLUONG values ('TT0001','NV0001','3000000','2018/5/2');
insert into THANHTOANLUONG values ('TT0002','NV0002','4000000','2018/5/2');
insert into THANHTOANLUONG values ('TT0003','NV0003','5000000','2018/5/2');
insert into THANHTOANLUONG values ('TT0004','NV0004','6000000','2018/5/2');

/* Báng thacmac */
insert into THACMAC values ('TM0001','KH0002','NV0002','Giai dap','Cách đăng tin','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0002','KH0003','NV0002','Giai dap','Cách hủy tin','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0003','KH0002','NV0002','Giai dap','Cách sửa tin','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0004','KH0004','NV0002','Giai dap','Cáchtạo tin hot','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0005','KH0005','NV0002','Vi pham','TD0001','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0006','KH0006','NV0002','Vi pham','TD0001','Chi tiết abc ','Tra loi abc ');

/* Báng ghinhanphanhoi */
insert into GHINHANPHANHOI values('PH0001','KH0001','2018/4/30','3','3','ab');
insert into GHINHANPHANHOI values('PH0002','KH0002','2018/4/30','4','5','abc');
insert into GHINHANPHANHOI values('PH0003','KH0003','2018/4/30','2','4','abcd');
insert into GHINHANPHANHOI values('PH0004','KH0004','2018/4/30','5','3','abcde');

/* Báng thietbi */
insert into THIETBI values('TB0002','NV0002','man hinh','dien tu','viet nam','2018/4/30','4000000','2018/4/29',' ');
insert into THIETBI values('TB0001','NV0002','chuot','dien tu','viet nam','2018/4/30','4000000','2018/4/29',' ');
insert into THIETBI values('TB0003','NV0002','Bán','do go','viet nam','2018/4/30','5000000','2018/4/29',' ');
insert into THIETBI values('TB0004','NV0002','ghe','do nhua','viet nam','2018/4/30','2000000','2018/4/29',' ');

/* Báng kiemtrathietbi */
insert into KIEMTRATB values('KT0001','NV0002','TB0001','2018/5/1','Tot','Tot');
insert into KIEMTRATB values('KT0002','NV0002','TB0002','2018/5/1','Binh Thuong','Tot');
insert into KIEMTRATB values('KT0003','NV0002','TB0003','2018/5/1','Hu','Sua');
insert into KIEMTRATB values('KT0004','NV0002','TB0004','2018/5/1','Hu','thay mới');

/* Báng doanhthu */
insert into DOANHTHU values('DT0001','KH0001','NV0004','1234567890','1000','tao tin moi','2018/5/15');
insert into DOANHTHU values('DT0002','KH0002','NV0004','1234567890','1000','tao tin moi','2018/5/16');
insert into DOANHTHU values('DT0003','KH0003','NV0004','1234567890','2000','tao tin hot','2018/5/17');
insert into DOANHTHU values('DT0004','KH0004','NV0004','1234567890','1000','tao tin giam gia','2018/5/18');

/* Báng phancong */
insert into PHANCONG values('PC0001','NV0001','NV0005','2018/5/1','abc','5.3');
insert into PHANCONG values('PC0002','NV0002','NV0005','2018/5/1','abcd','6.3');
insert into PHANCONG values('PC0003','NV0003','NV0005','2018/5/1','abce','4.12');
insert into PHANCONG values('PC0004','NV0004','NV0005','2018/5/1','abcf','5.555');

/*Bang xuylyvipham*/
insert into XULYVIPHAM values('KH0001','NV0003','2108/5/2','vi pham noi quy');
insert into XULYVIPHAM values('KH0002','NV0003','2108/5/2','vi pham noi quy');

/*Bang kh_theodoi_kh*/
insert into KH_THEODOI_KH values('KH0001','KH0002');
insert into KH_THEODOI_KH values('KH0001','KH0004');
insert into KH_THEODOI_KH values('KH0002','KH0001');
insert into KH_THEODOI_KH values('KH0002','KH0003');
insert into KH_THEODOI_KH values('KH0002','KH0005');
insert into KH_THEODOI_KH values('KH0003','KH0001');
insert into KH_THEODOI_KH values('KH0003','KH0004');
insert into KH_THEODOI_KH values('KH0005','KH0002');

/*Bang kh_theodoi_td*/
insert into KH_THEODOI_TD values('KH0001','TD0010');
insert into KH_THEODOI_TD values('KH0001','TD0011');
insert into KH_THEODOI_TD values('KH0002','TD0012');
insert into KH_THEODOI_TD values('KH0003','TD0022');
insert into KH_THEODOI_TD values('KH0004','TD0015');
insert into KH_THEODOI_TD values('KH0004','TD0032');
insert into KH_THEODOI_TD values('KH0005','TD0018');
insert into KH_THEODOI_TD values('KH0005','TD0006');


insert into KHUYENMAI values('KM0001','NV0003','Khuyến mãi','Chi tiết khuyến mãi abc...........','2018/6/2','2018/6/5','./Images/khuyenmai/khuyenmai1.png');

insert into THONGBAOTINDANG values('TB0001','TD0037','2018/6/1');
insert into THONGBAOTINDANG values('TB0002','TD0023','2018/6/1');
insert into THONGBAOTINDANG values('TB0003','TD0011','2018/6/1');

insert into CHITIEU values('CT0001','NV0004','2018/5/30','3000000','thu chi','5000000','2000000');

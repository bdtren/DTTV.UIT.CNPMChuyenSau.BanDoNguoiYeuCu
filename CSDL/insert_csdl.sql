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
values('KH0000','TK1000','','','','','1900/1/1','','','./Images/user/avatar0.png','');
insert into KHACHHANG
values('KH0001','TK1005','Nguyễn Văn Đức','Hồ Chí Minh','0123456789','abcd.facebook','1997/5/6','Nam','abc@gmail.com','./Images/user/avatar1.png','tam su abc...');
insert into KHACHHANG
values('KH0002','TK1006','Tran Anh Việt','Bình Dương','01232456789','abcde.facebook','1996/2/14','Nam','abcd@gmail.com','./Images/user/avatar2.png','tam su def...');
insert into KHACHHANG
values('KH0003','TK1007','Hồ Xuân Hương','Đồng Nai','00123456789','abcdf.facebook','1997/8/27','Nu','abcdf@gmail.com','./Images/user/avatar3.png','tam su bcd...');
insert into KHACHHANG
values('KH0004','TK1008','Nguyễn Thị Trang','Tiền Giang','1223456789','abcdfe.facebook','1998/3/13','Nu','abcdfef@gmail.com','./Images/user/avatar4.png','tam su abc...');
insert into KHACHHANG
values('KH0005','TK1011','Hồ Xuân Thương','Hồ Chí Minh','12023456789','abcdfe.facebook','1996/7/13','Nam','abcdfef@gmail.com','./Images/user/avatar4.png','tam su abc...');

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
insert into LOAITIN values('ribbon-hot','tin hot','10000');
insert into LOAITIN values('ribbon-discount','tin giảm giá','0');
insert into LOAITIN values('ribbon-normal','tin bình thường','0');

/*Báng tindang */
insert into TINDANG
values ('TD0001','NV0003','KH0001','ribbon-new','1','2018/4/30','Bán','Bán nhà người yêu cũ','3000000000','mới','./Images/san-pham/tindang1.png;./Images/san-pham/tindang1_2.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0002','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán tủ lạnh','4000000','mới','./Images/san-pham/tindang2.png','tâm sự abc','chuyển khoản','da dang');
insert into TINDANG
values ('TD0003','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua Tivi','3000000','mới','./Images/san-pham/tindang3.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0004','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang4.png','tâm sự abc','chuyển khoản','da dang');
insert into TINDANG
values ('TD0005','NV0003','KH0005','ribbon-new','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang5.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0006','NV0003','KH0005','ribbon-normal','1','2018/4/30','Bán','Bán xe đạp em bé','1000000','mới','./Images/san-pham/tindang6.png','tâm sự abc','tiền mặt','dang cho');
insert into TINDANG
values ('TD0007','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua chó kiểng','4000000','mới','./Images/san-pham/tindang7.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0008','NV0003','KH0002','ribbon-normal','1','2018/4/30','Mua','Mua banh','200000','mới/cũ','./Images/san-pham/tindang8.png','tâm sự abc','tiền mặt/chuyển khoản','da huy');
insert into TINDANG
values ('TD0009','NV0003','KH0003','ribbon-normal','1','2018/4/30','Bán','Bán bàn làm việc','1000000','cũ','./Images/san-pham/tindang9.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0010','NV0003','KH0004','ribbon-normal','1','2018/4/30','Mua','Mua xe đạp','700000','mới','./Images/san-pham/tindang10.png;./Images/san-pham/tindang10_2.png','tâm sự abc','chuyển khoản','da dang');
insert into TINDANG
values ('TD0011','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua mắt kiếng','1000000','mới','./Images/san-pham/tindang11.png','tâm sự abc','tiền mặt','da an');
insert into TINDANG
values ('TD0012','NV0003','KH0005','ribbon-normal','1','2018/4/30','Bán','Bán khăn len','50000','mới','./Images/san-pham/tindang12.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0013','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua nhà','3000000000','mới','./Images/san-pham/tindang13.png','tâm sự abc','tiền mặt/chuyển khoản','dang cho');
insert into TINDANG
values ('TD0014','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán máy giặt','6000000','cũ','./Images/san-pham/tindang14.png','tâm sự abc','tiền mặt','da huy');
insert into TINDANG
values ('TD0015','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua máy lạnh','3000000','mới','./Images/san-pham/tindang15.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0016','NV0003','KH0004','ribbon-normal','1','2018/4/30','Mua','Mua tivi','6000000','mới','./Images/san-pham/tindang16.png;./Images/san-pham/tindang16_2.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0017','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang17.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0018','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán điện thoại','4000000','mới','./Images/san-pham/tindang18.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0019','NV0003','KH0001','ribbon-normal','1','2018/4/30','Tặng','Tặng chó Nhật','0','mới','./Images/san-pham/tindang19.png','tâm sự abc','Tặng','da dang');
insert into TINDANG
values ('TD0020','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán nhẫn','1000000','cũ','./Images/san-pham/tindang20.png','tâm sự abc','chuyển khoản','da dang');
insert into TINDANG
values ('TD0021','NV0003','KH0003','ribbon-normal','1','2018/4/30','Bán','Bán dây chuyền','3000000','mới','./Images/san-pham/tindang21.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0022','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang22.png','tâm sự abc','chuyển khoản','da an');
insert into TINDANG
values ('TD0023','NV0003','KH0001','ribbon-hot','1','2018/4/30','Mua','Mua áo sơ mi','200000','mới','./Images/san-pham/tindang23.png;./Images/san-pham/tindang23_2.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0024','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán xe hơi','1000000000','mới','./Images/san-pham/tindang24.png','tâm sự abc','tiền mặt/chuyển khoản','da dang');
insert into TINDANG
values ('TD0025','NV0003','KH0001','ribbon-normal','1','2018/4/30','Tặng','Thư kỷ niệm','0','cũ','./Images/san-pham/tindang25.png','tâm sự abc','Tặng','da dang');
insert into TINDANG
values ('TD0026','NV0003','KH0002','ribbon-discount','1','2018/4/30','Bán','Bán Nhẫn','2000000','mới','./Images/san-pham/tindang26.png','tâm sự abc','chuyển khoản','da dang');
insert into TINDANG
values ('TD0027','NV0003','KH0003','ribbon-normal','1','2018/4/30','Tặng','Thư tỏ tình','0','mới','./Images/san-pham/tindang27.png','tâm sự abc','Tặng','da dang');
insert into TINDANG
values ('TD0028','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán nhà tăm','50000','mới','./Images/san-pham/tindang28.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0029','NV0003','KH0001','ribbon-normal','1','2018/4/30','Tặng','Tặng đĩa nhạc','0','cũ','./Images/san-pham/tindang29.png','tâm sự abc','tặng','da dang');
insert into TINDANG
values ('TD0030','NV0003','KH0002','ribbon-normal','1','2018/4/30','Tặng','Tặng truyện','0','mới','./Images/san-pham/tindang30.png','tâm sự abc','tặng','da dang');
insert into TINDANG
values ('TD0031','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua nhà','2000000000','mới','./Images/san-pham/tindang31.png','tâm sự abc','tiền mặt/chuyển khoản','da dang');
insert into TINDANG
values ('TD0032','NV0003','KH0002','ribbon-normal','1','2018/4/30','Bán','Bán máy lạnh','4000000','mới','./Images/san-pham/tindang32.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0033','NV0003','KH0003','ribbon-normal','1','2018/4/30','Mua','Mua máy tính','3000000','cũ','./Images/san-pham/tindang33.png','tâm sự abc','tiền mặt','da an');
insert into TINDANG
values ('TD0034','NV0003','KH0004','ribbon-normal','1','2018/4/30','Bán','Bán xe máy','7000000','mới','./Images/san-pham/tindang34.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0035','NV0003','KH0001','ribbon-normal','1','2018/4/30','Mua','Mua máy ảnh','1000000','cũ','./Images/san-pham/tindang35.png','tâm sự abc','tiền mặt','da dang');
insert into TINDANG
values ('TD0036','NV0003','KH0002','ribbon-normal','0','2018/4/30','Bán','Bán võng','1000000','mới','./Images/san-pham/tindang36.png','tâm sự abc','tiền mặt','dang cho');


/*
insert into TINDANG
values ('TD0037','NV0003','DM0007','KH0001','1','2018/4/30','Bán','Bán nhà người yêu cũ','3000000000','mới','./Images/san-pham/tindang1.png;./Images/san-pham/tindang1_2.png','tâm sự abc','tiền mặt','da dang','ribbon-new');
insert into TINDANG
values ('TD0038','NV0003','DM0008','KH0002','1','2018/4/30','Bán','Bán tủ lạnh','4000000','mới','./Images/san-pham/tindang2.png','tâm sự abc','chuyển khoản','da dang','');
insert into TINDANG
values ('TD0039','NV0003','DM0009','KH0003','1','2018/4/30','Mua','Mua Tivi','3000000','mới','./Images/san-pham/tindang3.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0040','NV0003','DM0010','KH0004','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang4.png','tâm sự abc','chuyển khoản','da dang','');
insert into TINDANG
values ('TD0041','NV0003','DM0011','KH0005','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang5.png','tâm sự abc','tiền mặt','da dang','ribbon-new');
insert into TINDANG
values ('TD0042','NV0003','DM0012','KH0005','1','2018/4/30','Bán','Bán xe đạp em bé','1000000','mới','./Images/san-pham/tindang6.png','tâm sự abc','tiền mặt','dang cho','');
insert into TINDANG
values ('TD0043','NV0003','DM1001','KH0001','1','2018/4/30','Mua','Mua chó kiểng','4000000','mới','./Images/san-pham/tindang7.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0044','NV0003','DM1002','KH0002','1','2018/4/30','Mua','Mua banh','200000','mới/cũ','./Images/san-pham/tindang8.png','tâm sự abc','tiền mặt/chuyển khoản','da huy','');
insert into TINDANG
values ('TD0045','NV0003','DM1003','KH0003','1','2018/4/30','Bán','Bán bàn làm việc','1000000','cũ','./Images/san-pham/tindang9.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0046','NV0003','DM1004','KH0004','1','2018/4/30','Mua','Mua xe đạp','700000','mới','./Images/san-pham/tindang10.png;./Images/san-pham/tindang10_2.png','tâm sự abc','chuyển khoản','da dang','');
insert into TINDANG
values ('TD0047','NV0003','DM1005','KH0001','1','2018/4/30','Mua','Mua mắt kiếng','1000000','mới','./Images/san-pham/tindang11.png','tâm sự abc','tiền mặt','da an','');
insert into TINDANG
values ('TD0048','NV0003','DM1006','KH0005','1','2018/4/30','Bán','Bán khăn len','50000','mới','./Images/san-pham/tindang12.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0049','NV0003','DM1007','KH0001','1','2018/4/30','Mua','Mua nhà','3000000000','mới','./Images/san-pham/tindang13.png','tâm sự abc','tiền mặt/chuyển khoản','dang cho','');
insert into TINDANG
values ('TD0050','NV0003','DM1008','KH0002','1','2018/4/30','Bán','Bán máy giặt','6000000','cũ','./Images/san-pham/tindang14.png','tâm sự abc','tiền mặt','da huy','');
insert into TINDANG
values ('TD0051','NV0003','DM1009','KH0003','1','2018/4/30','Mua','Mua máy lạnh','3000000','mới','./Images/san-pham/tindang15.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0052','NV0003','DM1010','KH0004','1','2018/4/30','Mua','Mua tivi','6000000','mới','./Images/san-pham/tindang16.png;./Images/san-pham/tindang16_2.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0053','NV0003','DM1011','KH0001','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang17.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0054','NV0003','DM2001','KH0002','1','2018/4/30','Bán','Bán điện thoại','4000000','mới','./Images/san-pham/tindang18.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0055','NV0003','DM2002','KH0001','1','2018/4/30','Tặng','Tặng chó Nhật','0','mới','./Images/san-pham/tindang19.png','tâm sự abc','Tặng','da dang','');
insert into TINDANG
values ('TD0056','NV0003','DM2003','KH0002','1','2018/4/30','Bán','Bán nhẫn','1000000','cũ','./Images/san-pham/tindang20.png','tâm sự abc','chuyển khoản','da dang','');
insert into TINDANG
values ('TD0057','NV0003','DM2004','KH0003','1','2018/4/30','Bán','Bán dây chuyền','3000000','mới','./Images/san-pham/tindang21.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0058','NV0003','DM1003','KH0004','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang22.png','tâm sự abc','chuyển khoản','da an','');
insert into TINDANG
values ('TD0059','NV0003','DM0001','KH0001','1','2018/4/30','Mua','Mua áo sơ mi','200000','mới','./Images/san-pham/tindang23.png;./Images/san-pham/tindang23_2.png','tâm sự abc','tiền mặt','da dang','ribbon-hot');
insert into TINDANG
values ('TD0060','NV0003','DM0002','KH0002','1','2018/4/30','Bán','Bán xe hơi','1000000000','mới','./Images/san-pham/tindang24.png','tâm sự abc','tiền mặt/chuyển khoản','da dang','');
insert into TINDANG
values ('TD0061','NV0003','DM0003','KH0001','1','2018/4/30','Tặng','Thư kỷ niệm','0','cũ','./Images/san-pham/tindang25.png','tâm sự abc','Tặng','da dang','');
insert into TINDANG
values ('TD0062','NV0003','DM0004','KH0002','1','2018/4/30','Bán','Bán Nhẩn','4000000','mới','./Images/san-pham/tindang26.png','tâm sự abc','chuyển khoản','da dang','ribbon-discount;200000');
insert into TINDANG
values ('TD0063','NV0003','DM0005','KH0003','1','2018/4/30','Tặng','Thư tỏ tình','0','mới','./Images/san-pham/tindang27.png','tâm sự abc','Tặng','da dang','');
insert into TINDANG
values ('TD0064','NV0003','DM0006','KH0004','1','2018/4/30','Bán','Bán nhà tăm','50000','mới','./Images/san-pham/tindang28.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0065','NV0003','DM0007','KH0001','1','2018/4/30','Tặng','Tặng đĩa nhạc','0','cũ','./Images/san-pham/tindang29.png','tâm sự abc','tặng','da dang','');
insert into TINDANG
values ('TD0066','NV0003','DM0008','KH0002','1','2018/4/30','Tặng','Tặng truyện','0','mới','./Images/san-pham/tindang30.png','tâm sự abc','tặng','da dang','');
insert into TINDANG
values ('TD0067','NV0003','DM0009','KH0001','1','2018/4/30','Mua','Mua nhà','2000000000','mới','./Images/san-pham/tindang31.png','tâm sự abc','tiền mặt/chuyển khoản','da dang','');
insert into TINDANG
values ('TD0068','NV0003','DM0010','KH0002','1','2018/4/30','Bán','Bán máy lạnh','4000000','mới','./Images/san-pham/tindang32.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0069','NV0003','DM0011','KH0003','1','2018/4/30','Mua','Mua máy tính','3000000','cũ','./Images/san-pham/tindang33.png','tâm sự abc','tiền mặt','da an','');
insert into TINDANG
values ('TD0070','NV0003','DM0012','KH0004','1','2018/4/30','Bán','Bán xe máy','7000000','mới','./Images/san-pham/tindang34.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0071','NV0003','DM1001','KH0001','1','2018/4/30','Mua','Mua máy ảnh','1000000','cũ','./Images/san-pham/tindang35.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0072','NV0003','DM1002','KH0002','1','2018/4/30','Bán','Bán võng','1000000','mới','./Images/san-pham/tindang36.png','tâm sự abc','tiền mặt','dang cho','');
insert into TINDANG
values ('TD0073','NV0003','DM1003','KH0003','1','2018/4/30','Bán','Bán bàn làm việc','1000000','cũ','./Images/san-pham/tindang9.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0074','NV0003','DM1004','KH0004','1','2018/4/30','Mua','Mua xe đạp','700000','mới','./Images/san-pham/tindang10.png;./Images/san-pham/tindang10_2.png','tâm sự abc','chuyển khoản','da dang','');
insert into TINDANG
values ('TD0075','NV0003','DM1005','KH0001','1','2018/4/30','Mua','Mua mắt kiếng','1000000','mới','./Images/san-pham/tindang11.png','tâm sự abc','tiền mặt','da an','');
insert into TINDANG
values ('TD0076','NV0003','DM1006','KH0005','1','2018/4/30','Bán','Bán khăn len','50000','mới','./Images/san-pham/tindang12.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0077','NV0003','DM1007','KH0001','1','2018/4/30','Mua','Mua nhà','3000000000','mới','./Images/san-pham/tindang13.png','tâm sự abc','tiền mặt/chuyển khoản','dang cho','');
insert into TINDANG
values ('TD0078','NV0003','DM1008','KH0002','1','2018/4/30','Bán','Bán máy giặt','6000000','cũ','./Images/san-pham/tindang14.png','tâm sự abc','tiền mặt','da huy','');
insert into TINDANG
values ('TD0079','NV0003','DM1009','KH0003','1','2018/4/30','Mua','Mua máy lạnh','3000000','mới','./Images/san-pham/tindang15.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0080','NV0003','DM1010','KH0004','1','2018/4/30','Mua','Mua tivi','6000000','mới','./Images/san-pham/tindang16.png;./Images/san-pham/tindang16_2.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0081','NV0003','DM1011','KH0001','1','2018/4/30','Mua','Mua đồng hồ','1000000','mới','./Images/san-pham/tindang17.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0082','NV0003','DM2001','KH0002','1','2018/4/30','Bán','Bán điện thoại','4000000','mới','./Images/san-pham/tindang18.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0083','NV0003','DM2002','KH0001','1','2018/4/30','Tặng','Tặng chó Nhật','0','mới','./Images/san-pham/tindang19.png','tâm sự abc','Tặng','da dang','');
insert into TINDANG
values ('TD0084','NV0003','DM2003','KH0002','1','2018/4/30','Bán','Bán nhẫn','1000000','cũ','./Images/san-pham/tindang20.png','tâm sự abc','chuyển khoản','da dang','');
insert into TINDANG
values ('TD0085','NV0003','DM2004','KH0003','1','2018/4/30','Bán','Bán dây chuyền','3000000','mới','./Images/san-pham/tindang21.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0086','NV0003','DM1003','KH0004','1','2018/4/30','Bán','Bán xe đạp','700000','mới','./Images/san-pham/tindang22.png','tâm sự abc','chuyển khoản','da an','');
insert into TINDANG
values ('TD0087','NV0003','DM0001','KH0001','1','2018/4/30','Mua','Mua áo sơ mi','200000','mới','./Images/san-pham/tindang23.png;./Images/san-pham/tindang23_2.png','tâm sự abc','tiền mặt','da dang','ribbon-hot');
insert into TINDANG
values ('TD0088','NV0003','DM0002','KH0002','1','2018/4/30','Bán','Bán xe hơi','1000000000','mới','./Images/san-pham/tindang24.png','tâm sự abc','tiền mặt/chuyển khoản','da dang','');
insert into TINDANG
values ('TD0089','NV0003','DM0003','KH0001','1','2018/4/30','Tặng','Thư kỷ niệm','0','cũ','./Images/san-pham/tindang25.png','tâm sự abc','Tặng','da dang','');
insert into TINDANG
values ('TD0090','NV0003','DM0004','KH0002','1','2018/4/30','Bán','Bán Nhẩn','4000000','mới','./Images/san-pham/tindang26.png','tâm sự abc','chuyển khoản','da dang','ribbon-discount;200000');
insert into TINDANG
values ('TD0091','NV0003','DM0005','KH0003','1','2018/4/30','Tặng','Thư tỏ tình','0','mới','./Images/san-pham/tindang27.png','tâm sự abc','Tặng','da dang','');
insert into TINDANG
values ('TD0092','NV0003','DM0006','KH0004','1','2018/4/30','Bán','Bán nhà tăm','50000','mới','./Images/san-pham/tindang28.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0093','NV0003','DM0007','KH0001','1','2018/4/30','Tặng','Tặng đĩa nhạc','0','cũ','./Images/san-pham/tindang29.png','tâm sự abc','tặng','da dang','');
insert into TINDANG
values ('TD0094','NV0003','DM0008','KH0002','1','2018/4/30','Tặng','Tặng truyện','0','mới','./Images/san-pham/tindang30.png','tâm sự abc','tặng','da dang','');
insert into TINDANG
values ('TD0095','NV0003','DM0009','KH0001','1','2018/4/30','Mua','Mua nhà','2000000000','mới','./Images/san-pham/tindang31.png','tâm sự abc','tiền mặt/chuyển khoản','da dang','');
insert into TINDANG
values ('TD0096','NV0003','DM0010','KH0002','1','2018/4/30','Bán','Bán máy lạnh','4000000','mới','./Images/san-pham/tindang32.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0097','NV0003','DM0011','KH0003','1','2018/4/30','Mua','Mua máy tính','3000000','cũ','./Images/san-pham/tindang33.png','tâm sự abc','tiền mặt','da an','');
insert into TINDANG
values ('TD0098','NV0003','DM0012','KH0004','1','2018/4/30','Bán','Bán xe máy','7000000','mới','./Images/san-pham/tindang34.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0099','NV0003','DM1001','KH0001','1','2018/4/30','Mua','Mua máy ảnh','1000000','cũ','./Images/san-pham/tindang35.png','tâm sự abc','tiền mặt','da dang','');
insert into TINDANG
values ('TD0100','NV0003','DM1002','KH0002','1','2018/4/30','Bán','Bán võng','1000000','mới','./Images/san-pham/tindang36.png','tâm sự abc','tiền mặt','dang cho','');
*/


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

/* Báng thanhtoanluong */
insert into THANHTOANLUONG values ('TT0001','NV0001','3000000','2018/5/2');
insert into THANHTOANLUONG values ('TT0002','NV0002','4000000','2018/5/2');
insert into THANHTOANLUONG values ('TT0003','NV0003','5000000','2018/5/2');
insert into THANHTOANLUONG values ('TT0004','NV0004','6000000','2018/5/2');

/* Báng thacmac */
insert into THACMAC values ('TM0001','KH0002','NV0002','Giải đáp','Cách đăng tin','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0002','KH0003','NV0002','Giải đáp','Cách hủy tin','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0003','KH0002','NV0002','Giải đáp','Cách sửa tin','Chi tiết abc ','Tra loi abc ');
insert into THACMAC values ('TM0004','KH0004','NV0002','Giải đáp','Cáchtạo tin hot','Chi tiết abc ','Tra loi abc ');

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
insert into DOANHTHU values('DT0001','NV0004','10000','tao tin hot','2018/5/15');
insert into DOANHTHU values('DT0002','NV0004','10000','tao tin hot','2018/5/16');
insert into DOANHTHU values('DT0003','NV0004','10000','tao tin hot','2018/5/17');

/* Báng phancong */
insert into PHANCONG values('PC0001','NV0001','NV0005','2018/5/1','abc','5');
insert into PHANCONG values('PC0002','NV0002','NV0005','2018/5/1','abcd','6');
insert into PHANCONG values('PC0003','NV0003','NV0005','2018/5/1','abce','4');
insert into PHANCONG values('PC0004','NV0004','NV0005','2018/5/1','abcf','5');

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


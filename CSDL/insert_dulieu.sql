/*file script chay du lieu*/

/*Báng chucvu */
insert into CHUCVU values('CV0001','NV Quản lý','3','5000000');
insert into CHUCVU values('CV0002','NV Quảng Cáo','2','3000000');
insert into CHUCVU values('CV0003','NV Chăm sóc KH','2','3000000');
insert into CHUCVU values('CV0004','NV Kiểm duyệt','1','3000000');
insert into CHUCVU values('CV0005','NV Tài chính-Kế toán','2','3000000');
insert into CHUCVU values('CV0006','NV Kỹ thuật','1','3000000');

/*Báng danhmuc */
insert into DANHMUC(MADM,TENDM) values('DM0001','Bất động sản');
insert into DANHMUC(MADM,TENDM) values('DM0002','Nội ngoại thất, đồ gia dụng');
insert into DANHMUC(MADM,TENDM) values('DM0003','Đồ điện tử');
insert into DANHMUC(MADM,TENDM) values('DM0004','Xe cộ');
insert into DANHMUC(MADM,TENDM) values('DM0005','Thời trang, đồ dùng cá nhân');
insert into DANHMUC(MADM,TENDM) values('DM0006','Mẹ và bé');
insert into DANHMUC(MADM,TENDM) values('DM0007','Thú cưng');
insert into DANHMUC(MADM,TENDM) values('DM0008','Giải trí, thể thao, sở thích');
insert into DANHMUC(MADM,TENDM) values('DM0009','Đồ văn phòng, công nông nghiệp');
insert into DANHMUC(MADM,TENDM) values('DM0010','Việc làm dịch vụ');
insert into DANHMUC(MADM,TENDM) values('DM0011','Các loại khác');
insert into DANHMUC(MADM,TENDM) values('DM0012','Tất cả danh mục');
insert into DANHMUC(MADM,TENDM) values('DM0013','Cho tặng miễn phí');
insert into DANHMUC(MADM,TENDM) values('DM0014','Món quà đầu tiên');
insert into DANHMUC(MADM,TENDM) values('DM0015','Ngày valentine 14-2');
insert into DANHMUC(MADM,TENDM) values('DM0016','Ngày Quốc tế Phụ nữ 8-3');
insert into DANHMUC(MADM,TENDM) values('DM0017','Ngày Phụ nữ Việt Nam 20-10');
insert into DANHMUC(MADM,TENDM) values('DM0018','Dịp sinh nhật');
insert into DANHMUC(MADM,TENDM) values('DM0019','100 ngày yêu');
insert into DANHMUC(MADM,TENDM) values('DM0020','Khi người ấy giận');
insert into DANHMUC(MADM,TENDM) values('DM0021','Thư tay');
insert into DANHMUC(MADM,TENDM) values('DM0022','Handmade');
insert into DANHMUC(MADM,TENDM) values('DM0023','Bài hát');
insert into DANHMUC(MADM,TENDM) values('DM0024','Bài thơ');

/*Báng taikhoan */
insert into TAIKHOAN values('TK0001','leminhtuan','minhtuan');
insert into TAIKHOAN values('TK0002','nguyenanhtuan','anhtuan');
insert into TAIKHOAN values('TK0003','vosivai','sivai');
insert into TAIKHOAN values('TK0004','nguyenbaoduy','baoduy');
insert into TAIKHOAN values('TK0005','nguyenvanduc','vanduc');
insert into TAIKHOAN values('TK0006','trananhviet','anhviet');
insert into TAIKHOAN values('TK0007','hoxuanhuong','xuanhuong');
insert into TAIKHOAN values('TK0008','nguyenthitrang','thitrang');
insert into TAIKHOAN values('TK0009','hoangtuananh','tuananh');
insert into TAIKHOAN values('TK0010','lehoangnam','hoangnam');
insert into TAIKHOAN values('TK0011','hoxuanthuong','baoanh');

/*Báng khachhang */
insert into KHACHHANG
values('KH0001','TK0005','Nguyễn Văn Đức','Hồ Chí Minh','0123456789','abcd.facebook','1997/5/6','Nam','abc@gmail.com','../Images/avatar1.png','tam su abc...');
insert into KHACHHANG
values('KH0002','TK0006','Tran Anh Việt','Bình Dương','01232456789','abcde.facebook','1996/2/14','Nam','abcd@gmail.com','../Images/avatar2.png','tam su def...');
insert into KHACHHANG
values('KH0003','TK0007','Hồ Xuân Hương','Đồng Nai','00123456789','abcdf.facebook','1997/8/27','Nu','abcdf@gmail.com','../Images/avatar3.png','tam su bcd...');
insert into KHACHHANG
values('KH0004','TK0008','Nguyễn Thị Trang','Tiền Giang','1223456789','abcdfe.facebook','1998/3/13','Nu','abcdfef@gmail.com','../Images/avatar4.png','tam su abc...');
insert into KHACHHANG
values('KH0005','TK0011','Hồ Xuân Thương','Hồ Chí Minh','12023456789','abcdfe.facebook','1996/7/13','Nam','abcdfef@gmail.com','../Images/avatar4.png','tam su abc...');

/* Báng nhanvien */
insert into NHANVIEN
values('NV0001','TK0001','CV0002','Lê Minh Tuấn','1997/6/23','Bình Dương','01234562358','Nam','mintuan@gmail.com','../Images/avatar5.png','2018/5/1');
insert into NHANVIEN
values('NV0002','TK0002','CV0003','Nguyễn Anh Tuấn','1997/4/13','Hồ Chí Minh','010234562358','Nam','anhtuan@gmail.com','../Images/avatar6.png','2018/2/12');
insert into NHANVIEN
values('NV0003','TK0003','CV0004','Võ Sĩ Vai','1997/8/10','Hồ Chí Minh','012340562358','Nam','sivai@gmail.com','../Images/avatar7.png','2018/2/12');
insert into NHANVIEN
values('NV0004','TK0004','CV0005','Nguyễn Bảo Duy','1997/4/3','Biên Hòa','012345602358','Nu','bdtren@gmail.com','../Images/avatar8.png','2018/2/12');
insert into NHANVIEN
values('NV0005','TK0009','CV0001','Hoàng Tuấn Anh','1996/4/3','Tiền Giang','0123450602358','Nam','adsff@gmail.com','../Images/avatar9.png','2018/2/12');

/*Báng tindang */
insert into TINDANG
values ('TD0001','NV0003','DM0001','KH0001','1','2018/4/30','Bán','Bán nhà người yêu cũ','3000000000','mới','../Imanges/tindang1.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0002','NV0003','DM0002','KH0002','1','2018/4/30','Bán','Bán tủ lạnh','4000000','mới','../Imanges/tindang2.png','tâm sự abc','chuyển khoản','đang đăng','Bán');
insert into TINDANG
values ('TD0003','NV0003','DM0003','KH0003','1','2018/4/30','Mua','Bán Tivi','3000000','mới','../Imanges/tindang3.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0004','NV0003','DM0004','KH0004','1','2018/4/30','Bán','Bán xe đạp','700000','mới','../Imanges/tindang4.png','tâm sự abc','chuyển khoản','đang đăng','Bán');
insert into TINDANG
values ('TD0005','NV0003','DM0005','KH0005','0','2018/4/30','Mua','Mua đồng hồ','1000000','mới','../Imanges/tindang5.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0006','NV0003','DM0006','KH0005','0','2018/4/30','Bán','Bán xe đạp em bé','1000000','mới','../Imanges/tindang6.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0007','NV0003','DM0007','KH0001','1','2018/4/30','Mua','Mua chó kiểng','4000000','mới','../Imanges/tindang7.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0008','NV0003','DM0008','KH0002','1','2018/4/30','Mua','Mua banh','200000','mới/cũ','../Imanges/tindang8.png','tâm sự abc','tiền mặt/chuyển khoản','đang đăng','Mua');
insert into TINDANG
values ('TD0009','NV0003','DM0009','KH0003','1','2018/4/30','Bán','Bán bàn làm việc','1000000','cũ','../Imanges/tindang9.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0010','NV0003','DM0004','KH0004','1','2018/4/30','Mua','Mua xe đạp','700000','mới','../Imanges/tindang10.png','tâm sự abc','chuyển khoản','đang đăng','Mua');
insert into TINDANG
values ('TD0011','NV0003','DM0005','KH0001','0','2018/4/30','Mua','Mua mắt kiếng','1000000','mới','../Imanges/tindang11.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0012','NV0003','DM0006','KH0005','0','2018/4/30','Bán','Bán khăn len','50000','mới','../Imanges/tindang12.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0013','NV0003','DM0007','KH0001','0','2018/4/30','Mua','Mua nhà','3000000000','mới','../Imanges/tindang13.png','tâm sự abc','tiền mặt/chuyển khoản','đang đăng','Mua');
insert into TINDANG
values ('TD0014','NV0003','DM0008','KH0002','1','2018/4/30','Bán','Bán máy giặt','6000000','cũ','../Imanges/tindang14.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0015','NV0003','DM0009','KH0003','1','2018/4/30','Mua','Mua máy lạnh','3000000','mới','../Imanges/tindang15.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0016','NV0003','DM0010','KH0004','1','2018/4/30','Mua','Mua tivi','6000000','mới','../Imanges/tindang16.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0017','NV0003','DM0011','KH0001','0','2018/4/30','Mua','Mua đồng hồ','1000000','mới','../Imanges/tindang17.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0018','NV0003','DM0012','KH0002','0','2018/4/30','Bán','Bán điện thoại','4000000','mới','../Imanges/tindang18.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0019','NV0003','DM0013','KH0001','1','2018/4/30','Tặng','Tặng chó Nhật','0','mới','../Imanges/tindang19.png','tâm sự abc','Tặng','đang đăng','Tặng');
insert into TINDANG
values ('TD0020','NV0003','DM0014','KH0002','1','2018/4/30','Bán','Bán nhẫn','1000000','cũ','../Imanges/tindang20.png','tâm sự abc','chuyển khoản','đang đăng','Bán');
insert into TINDANG
values ('TD0021','NV0003','DM0015','KH0003','1','2018/4/30','Bán','Bán dây chuyền','3000000','mới','../Imanges/tindang21.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0022','NV0003','DM0016','KH0004','1','2018/4/30','Bán','Bán xe đạp','700000','mới','../Imanges/tindang22.png','tâm sự abc','chuyển khoản','đang đăng','Bán');
insert into TINDANG
values ('TD0023','NV0003','DM0017','KH0001','0','2018/4/30','Mua','Mua áo sơ mi','200000','mới','../Imanges/tindang23.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0024','NV0003','DM0018','KH0002','0','2018/4/30','Bán','Bán xe hơi','1000000000','mới','../Imanges/tindang24.png','tâm sự abc','tiền mặt/chuyển khoản','đang đăng','Bán');
insert into TINDANG
values ('TD0025','NV0003','DM0019','KH0001','1','2018/4/30','Tặng','Thư kỷ niệm','0','cũ','../Imanges/tindang25.png','tâm sự abc','Tặng','đang đăng','Tặng');
insert into TINDANG
values ('TD0026','NV0003','DM0020','KH0002','1','2018/4/30','Bán','Bán Nhẩn','4000000','mới','../Imanges/tindang26.png','tâm sự abc','chuyển khoản','đang đăng','Bán');
insert into TINDANG
values ('TD0027','NV0003','DM0021','KH0003','1','2018/4/30','Tặng','Thư tỏ tình','0','mới','../Imanges/tindang27.png','tâm sự abc','Tặng','đang đăng','Tặng');
insert into TINDANG
values ('TD0028','NV0003','DM0022','KH0004','1','2018/4/30','Bán','Bán nhà tăm','50000','mới','../Imanges/tindang28.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0029','NV0003','DM0023','KH0001','0','2018/4/30','Tặng','Tặng đĩa nhạc','0','cũ','../Imanges/tindang29.png','tâm sự abc','tặng','đang đăng','Tặng');
insert into TINDANG
values ('TD0030','NV0003','DM0024','KH0002','0','2018/4/30','Tặng','Tặng truyện','0','mới','../Imanges/tindang30.png','tâm sự abc','tặng','đang đăng','Tặng');
insert into TINDANG
values ('TD0031','NV0003','DM0001','KH0001','1','2018/4/30','Mua','Mua nhà','2000000000','mới','../Imanges/tindang31.png','tâm sự abc','tiền mặt/chuyển khoản','đang đăng','Mua');
insert into TINDANG
values ('TD0032','NV0003','DM0002','KH0002','1','2018/4/30','Bán','Bán máy lạnh','4000000','mới','../Imanges/tindang32.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0033','NV0003','DM0003','KH0003','1','2018/4/30','Mua','Mua máy tính','3000000','cũ','../Imanges/tindang33.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0034','NV0003','DM0004','KH0004','1','2018/4/30','Bán','Bán xe máy','7000000','mới','../Imanges/tindang34.png','tâm sự abc','tiền mặt','đang đăng','Bán');
insert into TINDANG
values ('TD0035','NV0003','DM0005','KH0001','0','2018/4/30','Mua','Mua máy ảnh','1000000','cũ','../Imanges/tindang35.png','tâm sự abc','tiền mặt','đang đăng','Mua');
insert into TINDANG
values ('TD0036','NV0003','DM0006','KH0002','0','2018/4/30','Bán','Bán võng','1000000','mới','../Imanges/tindang36.png','tâm sự abc','tiền mặt','đang đăng','Bán');


/* Báng thanhtoanluong */
insert into THANHTOANLUONG values ('TT0001','NV0001','3000000');
insert into THANHTOANLUONG values ('TT0002','NV0002','4000000');
insert into THANHTOANLUONG values ('TT0003','NV0003','5000000');
insert into THANHTOANLUONG values ('TT0004','NV0004','6000000');

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
insert into DOANHTHU values('DT0001','NV0004','10000','tao tin hot');
insert into DOANHTHU values('DT0002','NV0004','10000','tao tin hot');
insert into DOANHTHU values('DT0003','NV0004','-100000','mua vat tu');

/* Báng phancong */
insert into PHANCONG values('PC0001','NV0001','NV0005','2018/5/1','abc','5');
insert into PHANCONG values('PC0002','NV0002','NV0005','2018/5/1','abcd','6');
insert into PHANCONG values('PC0003','NV0003','NV0005','2018/5/1','abce','4');
insert into PHANCONG values('PC0004','NV0004','NV0005','2018/5/1','abcf','5');

/*Bang xuylyvipham*/
insert into XULYVIPHAM values('KH0001','NV0003','2108/5/2','vi pham noi quy');
insert into XULYVIPHAM values('KH0002','NV0003','2108/5/2','vi pham noi quy');
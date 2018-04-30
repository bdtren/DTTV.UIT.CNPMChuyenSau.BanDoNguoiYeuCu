/*file script chay du lieu*/

/*Bang chucvu */
insert into CHUCVU values('CV0001','Nhan vien quan ly','3','5000000');
insert into CHUCVU values('CV0002','NV quang cao','2','3000000');
insert into CHUCVU values('CV0003','NV cham soc KH','2','3000000');
insert into CHUCVU values('CV0004','NV kiem duyet','1','3000000');
insert into CHUCVU values('CV0005','NV tai chinh ke toan','2','3000000');
insert into CHUCVU values('CV0006','NV ky thuat','1','3000000');

/*Bang danhmuc */
insert into DANHMUC(MADM,TENDM) values('DM0001','bat dong san');
insert into DANHMUC(MADM,TENDM) values('DM0002','noi ngoai that, do gia dung');
insert into DANHMUC(MADM,TENDM) values('DM0003','do dien tu');
insert into DANHMUC(MADM,TENDM) values('DM0004','xe co');
insert into DANHMUC(MADM,TENDM) values('DM0005','thoi trang, do dung ca nhan');
insert into DANHMUC(MADM,TENDM) values('DM0006','me va be');
insert into DANHMUC(MADM,TENDM) values('DM0007','thu cung');
insert into DANHMUC(MADM,TENDM) values('DM0008','giai tri, the thao, du lich');
insert into DANHMUC(MADM,TENDM) values('DM0009','do van phong, cong nong nghiep');
insert into DANHMUC(MADM,TENDM) values('DM0010','viec lam du lich');

/*Bang taikhoan */
insert into TAIKHOAN values('TK0001','leminhtuan','minhtuan');
insert into TAIKHOAN values('TK0002','nguyenanhtuan','anhtuan');
insert into TAIKHOAN values('TK0003','vosivai','sivai');
insert into TAIKHOAN values('TK0004','nguyenbaoduy','baoduy');
insert into TAIKHOAN values('TK0005','nguyenvanduc','vanduc');
insert into TAIKHOAN values('TK0006','trananhviet','anhviet');
insert into TAIKHOAN values('TK0007','hoxuanhuong','xuanhuong');
insert into TAIKHOAN values('TK0008','nguyenthitrang','thitrang');
insert into TAIKHOAN values('TK0009','hoangtuananh','tuananh');

/*Bang khachhang */
insert into KHACHHANG(MAKH,MATK,HOTEN,DIACHI,SDT,FACEBOOK,NGAYSINH,GIOITINH,EMAIL)
values('KH0001','TK0005','Nguyen Van Duc','Ho Chi Minh','0123456789','abcd.facebook','1997/5/6','Nam','abc@gmail.com');
insert into KHACHHANG(MAKH,MATK,HOTEN,DIACHI,SDT,FACEBOOK,NGAYSINH,GIOITINH,EMAIL)
values('KH0002','TK0006','Tran Anh Viet','Binh Duong','01232456789','abcde.facebook','1996/2/14','Nam','abcd@gmail.com');
insert into KHACHHANG(MAKH,MATK,HOTEN,DIACHI,SDT,FACEBOOK,NGAYSINH,GIOITINH,EMAIL)
values('KH0003','TK0007','Ho Xuan Huong','Dong Nai','00123456789','abcdf.facebook','1997/8/27','Nu','abcdf@gmail.com');
insert into KHACHHANG(MAKH,MATK,HOTEN,DIACHI,SDT,FACEBOOK,NGAYSINH,GIOITINH,EMAIL)
values('KH0004','TK0008','Nguyen Thi Trang','Tien Giang','1223456789','abcdfe.facebook','1998/3/13','Nu','abcdfef@gmail.com');

/* Bang nhanvien */
insert into NHANVIEN(MANV,MATK,MACV,HOTEN,NGAYSINH,DIACHI,SDT,GIOITINH,EMAIL,NGAYVL)
values('NV0001','TK0001','CV0002','Le Minh Tuan','1997/6/23','Binh Duong','01234562358','Nam','mintuan@gmail.com','2018/2/12');
insert into NHANVIEN(MANV,MATK,MACV,HOTEN,NGAYSINH,DIACHI,SDT,GIOITINH,EMAIL,NGAYVL)
values('NV0002','TK0002','CV0003','Nguyen Anh Tuan','1997/4/13','Ho Chi Minh','010234562358','Nam','anhtuan@gmail.com','2018/2/12');
insert into NHANVIEN(MANV,MATK,MACV,HOTEN,NGAYSINH,DIACHI,SDT,GIOITINH,EMAIL,NGAYVL)
values('NV0003','TK0003','CV0004','Vo Si Vai','1997/8/10','Ho Chi Minh','012340562358','Nam','sivai@gmail.com','2018/2/12');
insert into NHANVIEN(MANV,MATK,MACV,HOTEN,NGAYSINH,DIACHI,SDT,GIOITINH,EMAIL,NGAYVL)
values('NV0004','TK0004','CV0005','Nguyen Bao Duy','1997/4/3','Bien Hoa','012345602358','Nu','bdtren@gmail.com','2018/2/12');
insert into NHANVIEN(MANV,MATK,MACV,HOTEN,NGAYSINH,DIACHI,SDT,GIOITINH,EMAIL,NGAYVL)
values('NV0005','TK0009','CV0001','Hoang Tuan Anh','1996/4/3','Tien Giang','0123450602358','Nam','adsff@gmail.com','2018/2/12');

/*Bang tindang */
insert into TINDANG(MATD,MANV,MADM,MAKH,TTKIEMDUYET,NGAYDANG,LOAITD,TIEUDE,GIABAN,TINHTRANGMH,PTGD,TINHTRANGTIN,LOAITIN)
values ('TD0001','NV0003','DM0001','KH0001','1','2018/4/30','Ban','Ban nha nguoi yeu cu','3000000000','moi','tien mat','dang dang',' ');
insert into TINDANG(MATD,MANV,MADM,MAKH,TTKIEMDUYET,NGAYDANG,LOAITD,TIEUDE,GIABAN,TINHTRANGMH,PTGD,TINHTRANGTIN,LOAITIN)
values ('TD0002','NV0003','DM0002','KH0002','1','2018/4/30','Ban','Ban tu lanh','4000000','moi','chuyen khoan','dang dang',' ');
insert into TINDANG(MATD,MANV,MADM,MAKH,TTKIEMDUYET,NGAYDANG,LOAITD,TIEUDE,GIABAN,TINHTRANGMH,PTGD,TINHTRANGTIN,LOAITIN)
values ('TD0003','NV0003','DM0003','KH0003','1','2018/4/30','Mua','Ban Tivi','3000000','moi','tien mat','dang dang',' ');
insert into TINDANG(MATD,MANV,MADM,MAKH,TTKIEMDUYET,NGAYDANG,LOAITD,TIEUDE,GIABAN,TINHTRANGMH,PTGD,TINHTRANGTIN,LOAITIN)
values ('TD0004','NV0003','DM0004','KH0004','1','2018/4/30','Ban','Ban xe dap','700000','moi','chuyen khoan','dang dang',' ');
insert into TINDANG(MATD,MANV,MADM,MAKH,TTKIEMDUYET,NGAYDANG,LOAITD,TIEUDE,GIABAN,TINHTRANGMH,PTGD,TINHTRANGTIN,LOAITIN)
values ('TD0005','NV0003','DM0005','KH0001','0','2018/4/30','Mua','Mua dong ho','1000000','moi','tien mat','dang dang',' ');
insert into TINDANG(MATD,MANV,MADM,MAKH,TTKIEMDUYET,NGAYDANG,LOAITD,TIEUDE,GIABAN,TINHTRANGMH,PTGD,TINHTRANGTIN,LOAITIN)
values ('TD0006','NV0003','DM0006','KH0002','0','2018/4/30','Ban','Ban xe dap em be','1000000','moi','tien mat','dang dang',' ');

/* Bang thanhtoanluong */
insert into THANHTOANLUONG values ('TT0001','NV0001','3000000');
insert into THANHTOANLUONG values ('TT0002','NV0002','4000000');
insert into THANHTOANLUONG values ('TT0003','NV0003','5000000');
insert into THANHTOANLUONG values ('TT0004','NV0004','6000000');

/* Bang thacmac */
insert into THACMAC values ('TM0001','KH0002','NV0002','giai dap','Cach dang tin',' ',' ');
insert into THACMAC values ('TM0002','KH0003','NV0002','giai dap','Cach huy tin',' ',' ');
insert into THACMAC values ('TM0003','KH0002','NV0002','giai dap','Cach sua tin',' ',' ');
insert into THACMAC values ('TM0004','KH0004','NV0002','giai dap','Cach tao tin hot',' ',' ');

/* Bang ghinhanphanhoi */
insert into GHINHANPHANHOI values('PH0001','KH0001','2018/4/30','3','3','ab');
insert into GHINHANPHANHOI values('PH0002','KH0002','2018/4/30','4','5','abc');
insert into GHINHANPHANHOI values('PH0003','KH0003','2018/4/30','2','4','abcd');
insert into GHINHANPHANHOI values('PH0004','KH0004','2018/4/30','5','3','abcde');

/* Bang thietbi */
insert into THIETBI values('TB0002','NV0002','man hinh','dien tu','viet nam','2018/4/30','4000000','2018/4/29',' ');
insert into THIETBI values('TB0001','NV0002','chuot','dien tu','viet nam','2018/4/30','4000000','2018/4/29',' ');
insert into THIETBI values('TB0003','NV0002','ban','do go','viet nam','2018/4/30','5000000','2018/4/29',' ');
insert into THIETBI values('TB0004','NV0002','ghe','do nhua','viet nam','2018/4/30','2000000','2018/4/29',' ');

/* Bang kiemtrathietbi */
insert into KIEMTRATB values('KT0001','NV0002','TB0001','2018/5/1','Tot','Tot');
insert into KIEMTRATB values('KT0002','NV0002','TB0002','2018/5/1','Binh Thuong','Tot');
insert into KIEMTRATB values('KT0003','NV0002','TB0003','2018/5/1','Hu','Sua');
insert into KIEMTRATB values('KT0004','NV0002','TB0004','2018/5/1','Hu','thay moi');

/* Bang doanhthu */
insert into DOANHTHU values('DT0001','NV0004','10000','tao tin hot');
insert into DOANHTHU values('DT0002','NV0004','10000','tao tin hot');
insert into DOANHTHU values('DT0003','NV0004','-100000','mua vat tu');

/* Bang phancong */
insert into PHANCONG values('PC0001','NV0001','NV0005','2018/5/1','abc','5');
insert into PHANCONG values('PC0002','NV0002','NV0005','2018/5/1','abcd','6');
insert into PHANCONG values('PC0003','NV0003','NV0005','2018/5/1','abce','4');
insert into PHANCONG values('PC0004','NV0004','NV0005','2018/5/1','abcf','5');

/*Bang xuylyvipham*/
insert into XULYVIPHAM values('KH0001','NV0003','2108/5/2','vi pham noi quy');
insert into XULYVIPHAM values('KH0002','NV0003','2108/5/2','vi pham noi quy');
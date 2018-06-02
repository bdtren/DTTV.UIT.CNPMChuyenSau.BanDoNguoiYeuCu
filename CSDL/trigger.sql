/*tao trigger truoc khi xoa tin dang */

/*drop trigger before_delete_tindang;*/

delimiter |
create trigger before_delete_tindang before delete on TINDANG
for each row
begin
	delete from KH_THEODOI_TD where MATD=old.MATD;
    delete from TD_THUOC_DM where MATD=old.MATD;
end;
|
delimiter


/* tao trigger truoc khi xoa khach hang */

/*drop trigger before_delete_khachhang;*/

delimiter |
create trigger before_delete_khachhang before delete on KHACHHANG
for each row
begin
	delete from GHINHANPHANHOI where MAKH=old.MAKH;
	delete from XULYVIPHAM where MAKH=old.MAKH;
	delete from THACMAC where MAKH=old.MAKH;
	delete from TINDANG where MAKH=old.MAKH;
    delete from KH_THEODOI_KH where MAKH=old.MAKH;
    delete from KH_THEODOI_KH where MAKHTD=old.MAKH;
    delete from KH_THEODOI_TD where MAKH=old.MAKH;
end;
|
delimiter 

/* tao trigger sau khi xoa khachhang*/

/*drop trigger after_delete_khachhang;*/

delimiter |
create trigger after_delete_khachhang after delete on KHACHHANG
for each row
begin
	delete from TAIKHOAN where MATK=old.MATK;
end;
|
delimiter

/*tao trigger truoc khi khi xoa danhmuc*/

/*drop trigger before_delete_danhmuc;*/
delimiter |
create trigger before_delete_danhmuc before delete on DANHMUC
for each row
begin
	delete from TD_THUOC_DM where MADM=old.MADM;
	/*delete from TINDANG where MADM=old.MADM;*/
end;
|
delimiter

/*tao trigger truoc khi xoa thiet bi*/

/*drop trigger before_delete_thietbi;*/
delimiter |
create trigger before_delete_thietbi before delete on THIETBI
for each row
begin
	delete from KIEMTRATB where MATB=old.MATB;
end;
|
delimiter;

/*tao trigger truoc khi xoa nhanvien*/

/*drop trigger before_delete_nhanvien;*/

delimiter |
create trigger before_delete_nhanvien before delete on NHANVIEN
for each row
begin
	/*delete from THANHTOANLUONG where MANV=old.MANV;*/
    update THANHTOANLUONG set MANV='NV0000' where MANV=old.MANV;
    /*delete from XULYVIPHAM where MANV=old.MANV;*/
    update XULYVIPHAM set MANV='NV0000' where MANV=old.MANV;
    /*delete from THACMAC where MANV=old.MANV;*/
    update THACMAC set MANV='NV0000' where MANV=old.MANV;
    /*delete from TINDANG where MANV=old.MANV;*/
    update TINDANG set MANV='NV0000' where MANV=old.MANV;
    /*delete from KIEMTRATB where MANV=old.MANV;*/
    update KIEMTRATB set MANV='NV0000' where MANV=old.MANV;
    /*delete from PHANCONG where MANV=old.MANV;*/
    update PHANCONG set MANV='NV0000' where MANV=old.MANV;
    /*delete from THIETBI where MANV=old.MANV;*/
    update THIETBI set MANV='NV0000' where MANV=old.MANV;
    /*delete from DOANHTHU where MANV=old.MANV;*/
    update DOANHTHU set MANV='NV0000' where MANV=old.MANV;
end;
|
delimiter;

/*tao trigger sau khi xoa nhan vien*/

/*drop trigger after_delete_nhanvien;*/

delimiter |
create trigger after_delete_nhanvien after delete on NHANVIEN
for each row
begin
	delete from TAIKHOAN where MATK=old.MATK;
end;
|
delimiter;

/*tao trigger truoc khi xoa chuc vu*/

/*drop trigger before_delete_chucvu;*/

delimiter |
create trigger before_delete_chucvu before delete on CHUCVU
for each row
begin
	delete from NHANVIEN where MACV=old.MACV;
end;
|
delimiter;

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
	delete from TINDANG where MADM=old.MADM;
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
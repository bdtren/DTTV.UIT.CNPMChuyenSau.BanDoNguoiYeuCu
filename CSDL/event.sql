/*drop trigger before_delete_tindang;*/
delimiter |
create trigger before_delete_tindang before delete on TINDANG
for each row
begin
	delete from KH_THEODOI_TD where MATD=old.MATD;
    delete from TD_THUOC_DM where MATD=old.MATD;
    delete from THONGBAOTINDANG where MATD=old.MATD;
	delete from XULYVIPHAM where MATD=old.MATD;
end;
|
delimiter

SET SQL_SAFE_UPDATES = 0;

SET GLOBAL event_scheduler = ON;




/*DROP EVENT tudongxoatin */

CREATE EVENT tudongxoatin
    ON SCHEDULE
      EVERY 1 HOUR
    COMMENT 'xoa tin dang sau 1 thang'
    DO
      DELETE FROM TINDANG
        WHERE DATEDIFF(CURDATE(), NGAYDANG)>30;
/*==============================================================*/
/* DBMS name:      MySQL 4.0                                    */
/* Created on:     4/21/2018 6:58:54 AM                         */
/*==============================================================*/


drop table if exists CHUCVU;

drop table if exists DANHMUC;

drop index NV_QUANLY_DT_FK on DOANHTHU;

drop table if exists DOANHTHU;

drop index KH_GUI_PH_FK on GHINHANPHANHOI;

drop table if exists GHINHANPHANHOI;

drop index KH_CO_TK_FK on KHACHHANG;

drop table if exists KHACHHANG;

drop index NV_CO_CV_FK on NHANVIEN;

drop index NV_CO_TK_FK on NHANVIEN;

drop table if exists NHANVIEN;

drop index NV_XULYVIPHAM_KH2_FK on NV_XULYVIPHAM_KH;

drop index NV_XULYVIPHAM_KH_FK on NV_XULYVIPHAM_KH;

drop table if exists NV_XULYVIPHAM_KH;

drop table if exists TAIKHOAN;

drop index NV_XULY_TM_FK on THACMAC;

drop index KH_CO_TM_FK on THACMAC;

drop table if exists THACMAC;

drop index NV_THEM_TB_FK on THIETBI;

drop table if exists THIETBI;

drop index NV_KIEMDUYET_TD_FK on TINDANG;

drop index KH_CO_TD_FK on TINDANG;

drop index TD_THUOC_DM_FK on TINDANG;

drop table if exists TINDANG;

/*==============================================================*/
/* Table: CHUCVU                                                */
/*==============================================================*/
create table CHUCVU
(
   MACV                           char(6)                        not null,
   TENCV                          varchar(20)                    not null,
   primary key (MACV)
);

/*==============================================================*/
/* Table: DANHMUC                                               */
/*==============================================================*/
create table DANHMUC
(
   MADM                           varchar(8)                     not null,
   TENDM                          char(50)                       not null,
   primary key (MADM)
)comment = 'DANH SÁCH DANH M?C';

/*==============================================================*/
/* Table: DOANHTHU                                              */
/*==============================================================*/
create table DOANHTHU
(
   MADT                           char(6)                        not null,
   MANV                           char(6)                        not null,
   DOANHTHU                       float(8,2)                     not null,
   LYDO                           varchar(50)                    not null,
   primary key (MADT)
)comment = 'DANH SÁCH DOANH THU';

/*==============================================================*/
/* Index: NV_QUANLY_DT_FK                                       */
/*==============================================================*/
create index NV_QUANLY_DT_FK on DOANHTHU
(
   MANV
);

/*==============================================================*/
/* Table: GHINHANPHANHOI                                        */
/*==============================================================*/
create table GHINHANPHANHOI
(
   MAPH                           char(6)                        not null,
   MAKH                           char(6)                        not null,
   NGAYPH                         date                           not null,
   MUCDO                          int                            not null,
   KNGT                           int                            not null,
   PHANHOI                        varchar(50)                    not null,
   primary key (MAPH)
)comment = 'DANH SÁCH PH?N H?I';

/*==============================================================*/
/* Index: KH_GUI_PH_FK                                          */
/*==============================================================*/
create index KH_GUI_PH_FK on GHINHANPHANHOI
(
   MAKH
);

/*==============================================================*/
/* Table: KHACHHANG                                             */
/*==============================================================*/
create table KHACHHANG
(
   MAKH                           char(6)                        not null,
   MATK                           char(6)                        not null,
   HOTEN                          varchar(20)                    not null,
   DIACHI                         varchar(20)                    not null,
   SDT                            varchar(13)                    not null,
   FACEBOOK                       longtext                       not null,
   NGAYSINH                       date                           not null,
   GIOITINH                       varchar(4)                     not null,
   EMAIL                          longtext                       not null,
   AVATAR                         longtext                       not null,
   TAMSU                          longtext                       not null,
   primary key (MAKH)
);

/*==============================================================*/
/* Index: KH_CO_TK_FK                                           */
/*==============================================================*/
create index KH_CO_TK_FK on KHACHHANG
(
   MATK
);

/*==============================================================*/
/* Table: NHANVIEN                                              */
/*==============================================================*/
create table NHANVIEN
(
   MANV                           char(6)                        not null,
   MACV                           char(6)                        not null,
   MATK                           char(6)                        not null,
   HOTEN                          varchar(20)                    not null,
   NGAYSINH                       date                           not null,
   DIACHI                         varchar(20)                    not null,
   SDT                            varchar(13)                    not null,
   primary key (MANV)
);

/*==============================================================*/
/* Index: NV_CO_TK_FK                                           */
/*==============================================================*/
create index NV_CO_TK_FK on NHANVIEN
(
   MATK
);

/*==============================================================*/
/* Index: NV_CO_CV_FK                                           */
/*==============================================================*/
create index NV_CO_CV_FK on NHANVIEN
(
   MACV
);

/*==============================================================*/
/* Table: NV_XULYVIPHAM_KH                                      */
/*==============================================================*/
create table NV_XULYVIPHAM_KH
(
   MAKH                           char(6)                        not null,
   MANV                           char(6)                        not null,
   NGAYXL                         date                           not null,
   NOIDUNGVP                      varchar(50)                    not null,
   primary key (MAKH, MANV)
);

/*==============================================================*/
/* Index: NV_XULYVIPHAM_KH_FK                                   */
/*==============================================================*/
create index NV_XULYVIPHAM_KH_FK on NV_XULYVIPHAM_KH
(
   MAKH
);

/*==============================================================*/
/* Index: NV_XULYVIPHAM_KH2_FK                                  */
/*==============================================================*/
create index NV_XULYVIPHAM_KH2_FK on NV_XULYVIPHAM_KH
(
   MANV
);

/*==============================================================*/
/* Table: TAIKHOAN                                              */
/*==============================================================*/
create table TAIKHOAN
(
   MATK                           char(6)                        not null,
   TENTK                          varchar(20)                    not null,
   MATKHAU                        varchar(20)                    not null,
   NHANVIEN                       bool                           not null,
   primary key (MATK)
);

/*==============================================================*/
/* Table: THACMAC                                               */
/*==============================================================*/
create table THACMAC
(
   MATM                           char(6)                        not null,
   MANV                           char(6)                        not null,
   MAKH                           char(6)                        not null,
   LOAIHOTRO                      varchar(20)                    not null,
   VANDEGIAIDAP                   varchar(50)                    not null,
   CHITIET                        varchar(50)                    not null,
   TRALOI                         varchar(50)                    not null,
   primary key (MATM)
)comment = 'DANH SÁCH TH?C M?C';

/*==============================================================*/
/* Index: KH_CO_TM_FK                                           */
/*==============================================================*/
create index KH_CO_TM_FK on THACMAC
(
   MAKH
);

/*==============================================================*/
/* Index: NV_XULY_TM_FK                                         */
/*==============================================================*/
create index NV_XULY_TM_FK on THACMAC
(
   MANV
);

/*==============================================================*/
/* Table: THIETBI                                               */
/*==============================================================*/
create table THIETBI
(
   MATB                           char(8)                        not null,
   MANV                           char(6)                        not null,
   TENTB                          varchar(50)                    not null,
   LOAITB                         varchar(50)                    not null,
   XUATXU                         varchar(50)                    not null,
   NGAYSUDUNG                     date                           not null,
   GIATRI                         float(8,2)                     not null,
   NGAYNHAP                       date                           not null,
   GHICHU                         varchar(50)                    not null,
   primary key (MATB)
)comment = 'DANH SÁCH THI?T B?';

/*==============================================================*/
/* Index: NV_THEM_TB_FK                                         */
/*==============================================================*/
create index NV_THEM_TB_FK on THIETBI
(
   MANV
);

/*==============================================================*/
/* Table: TINDANG                                               */
/*==============================================================*/
create table TINDANG
(
   MATD                           char(6)                        not null,
   MADM                           varchar(8)                     not null,
   MANV                           char(6)                        not null,
   MAKH                           char(6)                        not null,
   TTKIEMDUYET                    int                            not null,
   NGAYDANG                       date                           not null,
   LOAITD                         varchar(50)                    not null,
   TIEUDE                         varchar(50)                    not null,
   GIABAN                         float(8,2)                     not null,
   TINHTRANGMH                    varchar(50)                    not null,
   HINHANH                        longtext,
   TAMSU                          longtext,
   PTGD                           char(50),
   TINHTRANGTIN                   char(50)                       not null,
   LOAITIN                        char(50)                       not null,
   primary key (MATD)
)comment = 'DANH SÁCH TIN ÐANG';

/*==============================================================*/
/* Index: TD_THUOC_DM_FK                                        */
/*==============================================================*/
create index TD_THUOC_DM_FK on TINDANG
(
   MADM
);

/*==============================================================*/
/* Index: KH_CO_TD_FK                                           */
/*==============================================================*/
create index KH_CO_TD_FK on TINDANG
(
   MAKH
);

/*==============================================================*/
/* Index: NV_KIEMDUYET_TD_FK                                    */
/*==============================================================*/
create index NV_KIEMDUYET_TD_FK on TINDANG
(
   MANV
);

alter table DOANHTHU add constraint FK_NV_QUANLY_DT foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table GHINHANPHANHOI add constraint FK_KH_GUI_PH foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table KHACHHANG add constraint FK_KH_CO_TK foreign key (MATK)
      references TAIKHOAN (MATK) on delete restrict on update restrict;

alter table NHANVIEN add constraint FK_NV_CO_CV foreign key (MACV)
      references CHUCVU (MACV) on delete restrict on update restrict;

alter table NHANVIEN add constraint FK_NV_CO_TK foreign key (MATK)
      references TAIKHOAN (MATK) on delete restrict on update restrict;

alter table NV_XULYVIPHAM_KH add constraint FK_NV_XULYVIPHAM_KH foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table NV_XULYVIPHAM_KH add constraint FK_NV_XULYVIPHAM_KH2 foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table THACMAC add constraint FK_KH_CO_TM foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table THACMAC add constraint FK_NV_XULY_TM foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table THIETBI add constraint FK_NV_THEM_TB foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table TINDANG add constraint FK_KH_CO_TD foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table TINDANG add constraint FK_NV_KIEMDUYET_TD foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table TINDANG add constraint FK_TD_THUOC_DM foreign key (MADM)
      references DANHMUC (MADM) on delete restrict on update restrict;


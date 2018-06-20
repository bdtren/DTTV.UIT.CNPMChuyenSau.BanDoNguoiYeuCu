/*==============================================================*/
/* DBMS name:      MySQL 4.0                                    */
/* Created on:     6/20/2018 12:11:22 PM                        */
/*==============================================================*/

/*
drop index NV_QUANLY_CT_FK on CHITIEU;

drop table if exists CHITIEU;

drop table if exists CHUCVU;

drop table if exists DANHMUC;

drop index NAPTIEN_FK on DOANHTHU;

drop index NV_QUANLY_DT_FK on DOANHTHU;

drop table if exists DOANHTHU;

drop index KH_GUI_PH_FK on GHINHANPHANHOI;

drop table if exists GHINHANPHANHOI;

drop index KH_CO_TK_FK on KHACHHANG;

drop table if exists KHACHHANG;

drop index NV_TAO_THONGBAO_FK on KHUYENMAI;

drop table if exists KHUYENMAI;

drop index KH_THEODOI_KH2_FK on KH_THEODOI_KH;

drop index KH_THEODOI_KH_FK on KH_THEODOI_KH;

drop table if exists KH_THEODOI_KH;

drop index KH_THEODOI_TD2_FK on KH_THEODOI_TD;

drop index KH_THEODOI_TD_FK on KH_THEODOI_TD;

drop table if exists KH_THEODOI_TD;

drop index NV_KIEMTRA_TB_FK on KIEMTRATB;

drop index KIEMTRA_THIETBI_FK on KIEMTRATB;

drop table if exists KIEMTRATB;

drop table if exists LOAITIN;

drop index NV_CO_TK_FK on NHANVIEN;

drop index NV_CO_CV_FK on NHANVIEN;

drop table if exists NHANVIEN;

drop index NV_PHANCONG_FK on PHANCONG;

drop table if exists PHANCONG;

drop table if exists TAIKHOAN;

drop index TD_THUOC_DM2_FK on TD_THUOC_DM;

drop index TD_THUOC_DM_FK on TD_THUOC_DM;

drop table if exists TD_THUOC_DM;

drop index NV_XULYTHACMAC_KH_FK on THACMAC;

drop index KH_CO_TM_FK on THACMAC;

drop table if exists THACMAC;

drop index NV_THANHTOAN_LUONG_FK on THANHTOANLUONG;

drop table if exists THANHTOANLUONG;

drop index NV_THEM_TB_FK on THIETBI;

drop table if exists THIETBI;

drop index TD_CO_THONGBAO_FK on THONGBAOTINDANG;

drop table if exists THONGBAOTINDANG;

drop index TINDANG_THUOC_LOAITIN_FK on TINDANG;

drop index KH_CO_TD_FK on TINDANG;

drop index NV_KIEMDUYET_TD_FK on TINDANG;

drop table if exists TINDANG;

drop index NV_XU_LY_VI_PHAM_FK on XULYVIPHAM;

drop index TIN_DANG_BI_XU_LY_FK on XULYVIPHAM;

drop table if exists XULYVIPHAM;

/*==============================================================*/
/* Table: CHITIEU                                               */
/*==============================================================*/
create table CHITIEU
(
   MACT                           char(6)                        not null,
   MANV                           char(6)                        not null,
   NGAY                           date                           not null,
   TIENCHI                        double                         not null,
   LYDO                           text                           not null,
   TIENTHU                        double                         not null,
   TONG                           double                         not null,
   primary key (MACT)
);

/*==============================================================*/
/* Index: NV_QUANLY_CT_FK                                       */
/*==============================================================*/
create index NV_QUANLY_CT_FK on CHITIEU
(
   MANV
);

/*==============================================================*/
/* Table: CHUCVU                                                */
/*==============================================================*/
create table CHUCVU
(
   MACV                           char(6)                        not null,
   TENCV                          varchar(20)                    not null,
   HSLUONG                        double                         not null,
   LUONGCB                        double                         not null,
   primary key (MACV)
);

/*==============================================================*/
/* Table: DANHMUC                                               */
/*==============================================================*/
create table DANHMUC
(
   MADM                           char(6)                        not null,
   TENDM                          char(50)                       not null,
   DDANH                          longtext,
   KTDM                           varchar(20),
   primary key (MADM)
);

/*==============================================================*/
/* Table: DOANHTHU                                              */
/*==============================================================*/
create table DOANHTHU
(
   MADT                           char(6)                        not null,
   MAKH                           char(6)                        not null,
   MANV                           char(6)                        not null,
   MATHECAO                       varchar(50)                    not null,
   NHAMANG                        varchar(50)                    not null,
   SERIAL                         varchar(20)                    not null,
   DOANHTHU                       double                         not null,
   LYDO                           text                           not null,
   NGAYTHU                        date                           not null,
   primary key (MADT)
);

/*==============================================================*/
/* Index: NV_QUANLY_DT_FK                                       */
/*==============================================================*/
create index NV_QUANLY_DT_FK on DOANHTHU
(
   MANV
);

/*==============================================================*/
/* Index: NAPTIEN_FK                                            */
/*==============================================================*/
create index NAPTIEN_FK on DOANHTHU
(
   MAKH
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
   PHANHOI                        text                           not null,
   primary key (MAPH)
);

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
   TAMSU                          text                           not null,
   SODU                           float(8,2)                     not null,
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
/* Table: KHUYENMAI                                             */
/*==============================================================*/
create table KHUYENMAI
(
   MAKM                           char(6)                        not null,
   MANV                           char(6)                        not null,
   TIEUDE                         text                           not null,
   CHITIET                        text                           not null,
   NGAYBD                         date                           not null,
   NGAYKT                         date                           not null,
   DDANH                          longtext                       not null,
   primary key (MAKM)
);

/*==============================================================*/
/* Index: NV_TAO_THONGBAO_FK                                    */
/*==============================================================*/
create index NV_TAO_THONGBAO_FK on KHUYENMAI
(
   MANV
);

/*==============================================================*/
/* Table: KH_THEODOI_KH                                         */
/*==============================================================*/
create table KH_THEODOI_KH
(
   MAKH                           char(6)                        not null,
   MAKHTD                         char(6)                        not null,
   primary key (MAKH, MAKHTD)
);

/*==============================================================*/
/* Index: KH_THEODOI_KH_FK                                      */
/*==============================================================*/
create index KH_THEODOI_KH_FK on KH_THEODOI_KH
(
   MAKH
);

/*==============================================================*/
/* Index: KH_THEODOI_KH2_FK                                     */
/*==============================================================*/
create index KH_THEODOI_KH2_FK on KH_THEODOI_KH
(
   MAKHTD
);

/*==============================================================*/
/* Table: KH_THEODOI_TD                                         */
/*==============================================================*/
create table KH_THEODOI_TD
(
   MAKH                           char(6)                        not null,
   MATD                           char(6)                        not null,
   primary key (MAKH, MATD)
);

/*==============================================================*/
/* Index: KH_THEODOI_TD_FK                                      */
/*==============================================================*/
create index KH_THEODOI_TD_FK on KH_THEODOI_TD
(
   MAKH
);

/*==============================================================*/
/* Index: KH_THEODOI_TD2_FK                                     */
/*==============================================================*/
create index KH_THEODOI_TD2_FK on KH_THEODOI_TD
(
   MATD
);

/*==============================================================*/
/* Table: KIEMTRATB                                             */
/*==============================================================*/
create table KIEMTRATB
(
   MAKT                           char(6)                        not null,
   MANV                           char(6)                        not null,
   MATB                           char(6)                        not null,
   NGAYKT                         date                           not null,
   TINHTRANG                      varchar(20)                    not null,
   GHICHU                         text                           not null,
   primary key (MAKT)
);

/*==============================================================*/
/* Index: KIEMTRA_THIETBI_FK                                    */
/*==============================================================*/
create index KIEMTRA_THIETBI_FK on KIEMTRATB
(
   MATB
);

/*==============================================================*/
/* Index: NV_KIEMTRA_TB_FK                                      */
/*==============================================================*/
create index NV_KIEMTRA_TB_FK on KIEMTRATB
(
   MANV
);

/*==============================================================*/
/* Table: LOAITIN                                               */
/*==============================================================*/
create table LOAITIN
(
   LOAITIN                        varchar(50)                    not null,
   TENLOAI                        varchar(50)                    not null,
   GIA                            float(8,2)                     not null,
   primary key (LOAITIN)
);

/*==============================================================*/
/* Table: NHANVIEN                                              */
/*==============================================================*/
create table NHANVIEN
(
   MANV                           char(6)                        not null,
   MATK                           char(6)                        not null,
   MACV                           char(6)                        not null,
   HOTEN                          varchar(20)                    not null,
   NGAYSINH                       date                           not null,
   DIACHI                         varchar(20)                    not null,
   SDT                            varchar(13)                    not null,
   GIOITINH                       varchar(4)                     not null,
   EMAIL                          longtext                       not null,
   AVATAR                         longtext                       not null,
   NGAYVL                         date                           not null,
   primary key (MANV)
);

/*==============================================================*/
/* Index: NV_CO_CV_FK                                           */
/*==============================================================*/
create index NV_CO_CV_FK on NHANVIEN
(
   MACV
);

/*==============================================================*/
/* Index: NV_CO_TK_FK                                           */
/*==============================================================*/
create index NV_CO_TK_FK on NHANVIEN
(
   MATK
);

/*==============================================================*/
/* Table: PHANCONG                                              */
/*==============================================================*/
create table PHANCONG
(
   MAPC                           char(6)                        not null,
   MANV                           char(6)                        not null,
   NVQL                           char(6)                        not null,
   NGAYPC                         date                           not null,
   CHITIET                        text                           not null,
   SOGIOHD                        double                         not null,
   primary key (MAPC)
);

/*==============================================================*/
/* Index: NV_PHANCONG_FK                                        */
/*==============================================================*/
create index NV_PHANCONG_FK on PHANCONG
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
   MATKHAU                        varchar(32)                    not null,
   primary key (MATK)
);

/*==============================================================*/
/* Table: TD_THUOC_DM                                           */
/*==============================================================*/
create table TD_THUOC_DM
(
   MATD                           char(6)                        not null,
   MADM                           char(6)                        not null,
   primary key (MATD, MADM)
);

/*==============================================================*/
/* Index: TD_THUOC_DM_FK                                        */
/*==============================================================*/
create index TD_THUOC_DM_FK on TD_THUOC_DM
(
   MATD
);

/*==============================================================*/
/* Index: TD_THUOC_DM2_FK                                       */
/*==============================================================*/
create index TD_THUOC_DM2_FK on TD_THUOC_DM
(
   MADM
);

/*==============================================================*/
/* Table: THACMAC                                               */
/*==============================================================*/
create table THACMAC
(
   MATM                           char(6)                        not null,
   MAKH                           char(6)                        not null,
   MANV                           char(6)                        not null,
   LOAIHOTRO                      varchar(20)                    not null,
   VANDEGIAIDAP                   text                           not null,
   CHITIET                        text                           not null,
   TRALOI                         text                           not null,
   primary key (MATM)
);

/*==============================================================*/
/* Index: KH_CO_TM_FK                                           */
/*==============================================================*/
create index KH_CO_TM_FK on THACMAC
(
   MAKH
);

/*==============================================================*/
/* Index: NV_XULYTHACMAC_KH_FK                                  */
/*==============================================================*/
create index NV_XULYTHACMAC_KH_FK on THACMAC
(
   MANV
);

/*==============================================================*/
/* Table: THANHTOANLUONG                                        */
/*==============================================================*/
create table THANHTOANLUONG
(
   MATT                           char(6)                        not null,
   MANV                           char(6)                        not null,
   TIENTHANHTOAN                  double                         not null,
   NGAYTT                         date,
   primary key (MATT)
);

/*==============================================================*/
/* Index: NV_THANHTOAN_LUONG_FK                                 */
/*==============================================================*/
create index NV_THANHTOAN_LUONG_FK on THANHTOANLUONG
(
   MANV
);

/*==============================================================*/
/* Table: THIETBI                                               */
/*==============================================================*/
create table THIETBI
(
   MATB                           char(6)                        not null,
   MANV                           char(6)                        not null,
   TENTB                          varchar(50)                    not null,
   LOAITB                         varchar(50)                    not null,
   XUATXU                         varchar(50)                    not null,
   NGAYSUDUNG                     date                           not null,
   GIATRI                         double                         not null,
   NGAYNHAP                       date                           not null,
   GHICHU                         text                           not null,
   primary key (MATB)
);

/*==============================================================*/
/* Index: NV_THEM_TB_FK                                         */
/*==============================================================*/
create index NV_THEM_TB_FK on THIETBI
(
   MANV
);

/*==============================================================*/
/* Table: THONGBAOTINDANG                                       */
/*==============================================================*/
create table THONGBAOTINDANG
(
   MATBTD                         char(6)                        not null,
   MATD                           char(6)                        not null,
   NGAYBD                         date                           not null,
   primary key (MATBTD)
);

/*==============================================================*/
/* Index: TD_CO_THONGBAO_FK                                     */
/*==============================================================*/
create index TD_CO_THONGBAO_FK on THONGBAOTINDANG
(
   MATD
);

/*==============================================================*/
/* Table: TINDANG                                               */
/*==============================================================*/
create table TINDANG
(
   MATD                           char(6)                        not null,
   MANV                           char(6)                        not null,
   MAKH                           char(6)                        not null,
   LOAITIN                        varchar(50)                    not null,
   TTKIEMDUYET                    int                            not null,
   NGAYDANG                       date                           not null,
   LOAITD                         varchar(50)                    not null,
   TIEUDE                         text                           not null,
   GIABAN                         double	                     not null,
   GIACU                          double,
   TINHTRANGMH                    varchar(50)                    not null,
   HINHANH                        longtext,
   TAMSU                          text,
   PTGD                           varchar(50)                    not null,
   TINHTRANGTIN                   varchar(50)                    not null,
   SLOGAN                         text                           not null,
   primary key (MATD)
);

/*==============================================================*/
/* Index: NV_KIEMDUYET_TD_FK                                    */
/*==============================================================*/
create index NV_KIEMDUYET_TD_FK on TINDANG
(
   MANV
);

/*==============================================================*/
/* Index: KH_CO_TD_FK                                           */
/*==============================================================*/
create index KH_CO_TD_FK on TINDANG
(
   MAKH
);

/*==============================================================*/
/* Index: TINDANG_THUOC_LOAITIN_FK                              */
/*==============================================================*/
create index TINDANG_THUOC_LOAITIN_FK on TINDANG
(
   LOAITIN
);

/*==============================================================*/
/* Table: XULYVIPHAM                                            */
/*==============================================================*/
create table XULYVIPHAM
(
   MAXULY                         char(6)                        not null,
   MANV                           char(6)                        not null,
   MATD                           char(6)                        not null,
   TGXULY                         date                           not null,
   NOIDUNG						  text							 not null,
   primary key (MAXULY)
);

/*==============================================================*/
/* Index: TIN_DANG_BI_XU_LY_FK                                  */
/*==============================================================*/
create index TIN_DANG_BI_XU_LY_FK on XULYVIPHAM
(
   MATD
);

/*==============================================================*/
/* Index: NV_XU_LY_VI_PHAM_FK                                   */
/*==============================================================*/
create index NV_XU_LY_VI_PHAM_FK on XULYVIPHAM
(
   MANV
);

alter table CHITIEU add constraint FK_NV_QUANLY_CT foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table DOANHTHU add constraint FK_NAPTIEN foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table DOANHTHU add constraint FK_NV_QUANLY_DT foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table GHINHANPHANHOI add constraint FK_KH_GUI_PH foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table KHACHHANG add constraint FK_KH_CO_TK foreign key (MATK)
      references TAIKHOAN (MATK) on delete restrict on update restrict;

alter table KHUYENMAI add constraint FK_NV_TAO_THONGBAO foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table KH_THEODOI_KH add constraint FK_KH_THEODOI_KH foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table KH_THEODOI_KH add constraint FK_KH_THEODOI_KH2 foreign key (MAKHTD)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table KH_THEODOI_TD add constraint FK_KH_THEODOI_TD foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table KH_THEODOI_TD add constraint FK_KH_THEODOI_TD2 foreign key (MATD)
      references TINDANG (MATD) on delete restrict on update restrict;

alter table KIEMTRATB add constraint FK_KIEMTRA_THIETBI foreign key (MATB)
      references THIETBI (MATB) on delete restrict on update restrict;

alter table KIEMTRATB add constraint FK_NV_KIEMTRA_TB foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table NHANVIEN add constraint FK_NV_CO_CV foreign key (MACV)
      references CHUCVU (MACV) on delete restrict on update restrict;

alter table NHANVIEN add constraint FK_NV_CO_TK foreign key (MATK)
      references TAIKHOAN (MATK) on delete restrict on update restrict;

alter table PHANCONG add constraint FK_NV_PHANCONG foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table TD_THUOC_DM add constraint FK_TD_THUOC_DM foreign key (MATD)
      references TINDANG (MATD) on delete restrict on update restrict;

alter table TD_THUOC_DM add constraint FK_TD_THUOC_DM2 foreign key (MADM)
      references DANHMUC (MADM) on delete restrict on update restrict;

alter table THACMAC add constraint FK_KH_CO_TM foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table THACMAC add constraint FK_NV_XULYTHACMAC_KH foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table THANHTOANLUONG add constraint FK_NV_THANHTOAN_LUONG foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table THIETBI add constraint FK_NV_THEM_TB foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table THONGBAOTINDANG add constraint FK_TD_CO_THONGBAO foreign key (MATD)
      references TINDANG (MATD) on delete restrict on update restrict;

alter table TINDANG add constraint FK_KH_CO_TD foreign key (MAKH)
      references KHACHHANG (MAKH) on delete restrict on update restrict;

alter table TINDANG add constraint FK_NV_KIEMDUYET_TD foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table TINDANG add constraint FK_TINDANG_THUOC_LOAITIN foreign key (LOAITIN)
      references LOAITIN (LOAITIN) on delete restrict on update restrict;

alter table XULYVIPHAM add constraint FK_NV_XU_LY_VI_PHAM foreign key (MANV)
      references NHANVIEN (MANV) on delete restrict on update restrict;

alter table XULYVIPHAM add constraint FK_TIN_DANG_BI_XU_LY foreign key (MATD)
      references TINDANG (MATD) on delete restrict on update restrict;


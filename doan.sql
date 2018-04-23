-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 22, 2018 lúc 07:46 AM
-- Phiên bản máy phục vụ: 10.1.31-MariaDB
-- Phiên bản PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chucvu`
--

CREATE TABLE `chucvu` (
  `MACV` char(6) NOT NULL,
  `TENCV` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `MADM` char(6) NOT NULL,
  `TENDM` char(50) NOT NULL,
  `DDAnh` longtext,
  `KTDM` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`MADM`, `TENDM`, `DDAnh`, `KTDM`) VALUES
('DM0001', 'DDS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZX1UFEoY99p39FOZskhiLhf_6gvs3Co9qZrKYIeK_YFg2925mg', '100'),
('DM0002', 'NT', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1atUsPGYFHHwL5S8dBxTDYVmH-UH6Nii8z5C0YSvZY6obfioGtw', '100'),
('DM0003', 'DT', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1U-XAkAE9qcLbN0iCgNkM4hn-tjzZdY4wvSLIsQnCwST4skU', '100'),
('DM0004', 'XE', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN7czeHP6PrAp11hhgeMm3BPkOfH8-x1ecZ0Jb2wUHRiMup0gmA', '100'),
('DM0005', 'TT', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1w-DoRpULEFcRwYzH-s1hi-wfJhGcriXUiHeGOkeJaDrLevFnA', '100'),
('DM0006', 'MB', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3y5_TmfA86S-uW6MdBlm9_JS9D7MKpXQEz2YrgU-OPmIgFGM', '100'),
('DM0007', 'TC', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIV7LboFMjEklJxIZjXmeXACaolF0hpmwHXSn_A_kSTGONO7o', '100'),
('DM0008', 'GT', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtnP9PetBhOOUU1aB2uQXRCJFy9Oc4ihPTZQaM4hPQxl0D1C24g', '100'),
('DM0009', 'VP', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMNO9h_Y38UywwinPDoqZOSlqJZNA1QrXnOBO3yyxjQmz3Idxxg', '100'),
('DM0010', 'DV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOdhOWoQIbGMruNC4qzNQbfqwjt57y4BqP5GA1zW3Cx--HftR', '100');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doanhthu`
--

CREATE TABLE `doanhthu` (
  `MADT` char(6) NOT NULL,
  `MANV` char(6) NOT NULL,
  `DOANHTHU` float(8,2) NOT NULL,
  `LYDO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ghinhanphanhoi`
--

CREATE TABLE `ghinhanphanhoi` (
  `MAPH` char(6) NOT NULL,
  `MAKH` char(6) NOT NULL,
  `NGAYPH` date NOT NULL,
  `MUCDO` int(11) NOT NULL,
  `KNGT` int(11) NOT NULL,
  `PHANHOI` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `MAKH` char(6) NOT NULL,
  `MANV` char(6) NOT NULL,
  `MATK` char(6) NOT NULL,
  `HOTEN` varchar(20) NOT NULL,
  `DIACHI` varchar(20) NOT NULL,
  `SDT` varchar(13) NOT NULL,
  `FACEBOOK` longtext NOT NULL,
  `NGAYSINH` date NOT NULL,
  `GIOITINH` varchar(4) NOT NULL,
  `EMAIL` longtext NOT NULL,
  `AVATAR` longtext NOT NULL,
  `TAMSU` longtext NOT NULL,
  `NGAYXULY` date NOT NULL,
  `NOIDUNGXULY` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MANV` char(6) NOT NULL,
  `MATK` char(6) NOT NULL,
  `MACV` char(6) NOT NULL,
  `HOTEN` varchar(20) NOT NULL,
  `NGAYSINH` date NOT NULL,
  `DIACHI` varchar(20) NOT NULL,
  `SDT` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MATK` char(6) NOT NULL,
  `TENTK` varchar(20) NOT NULL,
  `MATKHAU` varchar(20) NOT NULL,
  `NHANVIEN` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`MATK`, `TENTK`, `MATKHAU`, `NHANVIEN`) VALUES
('TK0001', 'vosivai', '123456', 1),
('TK0002', 'leminhtuan', '654321', 0),
('TK0003', 'nguyenanhtuan', '123456789', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thacmac`
--

CREATE TABLE `thacmac` (
  `MATM` char(6) NOT NULL,
  `MAKH` char(6) NOT NULL,
  `MANV` char(6) NOT NULL,
  `LOAIHOTRO` varchar(20) NOT NULL,
  `VANDEGIAIDAP` varchar(50) NOT NULL,
  `CHITIET` varchar(50) NOT NULL,
  `TRALOI` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thietbi`
--

CREATE TABLE `thietbi` (
  `MATB` char(6) NOT NULL,
  `MANV` char(6) NOT NULL,
  `TENTB` varchar(50) NOT NULL,
  `LOAITB` varchar(50) NOT NULL,
  `XUATXU` varchar(50) NOT NULL,
  `NGAYSUDUNG` date NOT NULL,
  `GIATRI` float(8,2) NOT NULL,
  `NGAYNHAP` date NOT NULL,
  `GHICHU` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tindang`
--

CREATE TABLE `tindang` (
  `MATD` char(6) NOT NULL,
  `MANV` char(6) NOT NULL,
  `MADM` char(6) NOT NULL,
  `MAKH` char(6) NOT NULL,
  `TTKIEMDUYET` int(11) NOT NULL,
  `NGAYDANG` date NOT NULL,
  `LOAITD` varchar(50) NOT NULL,
  `TIEUDE` varchar(50) NOT NULL,
  `GIABAN` float(8,2) NOT NULL,
  `TINHTRANGMH` varchar(50) NOT NULL,
  `HINHANH` longtext,
  `TAMSU` longtext,
  `PTGD` varchar(50) NOT NULL,
  `TINHTRANGTIN` varchar(50) NOT NULL,
  `LOAITIN` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chucvu`
--
ALTER TABLE `chucvu`
  ADD PRIMARY KEY (`MACV`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`MADM`);

--
-- Chỉ mục cho bảng `doanhthu`
--
ALTER TABLE `doanhthu`
  ADD PRIMARY KEY (`MADT`),
  ADD KEY `NV_QUANLY_DT_FK` (`MANV`);

--
-- Chỉ mục cho bảng `ghinhanphanhoi`
--
ALTER TABLE `ghinhanphanhoi`
  ADD PRIMARY KEY (`MAPH`),
  ADD KEY `KH_GUI_PH_FK` (`MAKH`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`MAKH`),
  ADD KEY `XULYVIPHAM_FK` (`MANV`),
  ADD KEY `KH_CO_TK2_FK` (`MATK`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MANV`),
  ADD KEY `NV_CO_CV_FK` (`MACV`),
  ADD KEY `NV_CO_TK2_FK` (`MATK`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`MATK`);

--
-- Chỉ mục cho bảng `thacmac`
--
ALTER TABLE `thacmac`
  ADD PRIMARY KEY (`MATM`),
  ADD KEY `KH_CO_TM_FK` (`MAKH`),
  ADD KEY `NV_XULYTHACMAC_KH_FK` (`MANV`);

--
-- Chỉ mục cho bảng `thietbi`
--
ALTER TABLE `thietbi`
  ADD PRIMARY KEY (`MATB`),
  ADD KEY `KH_THEM_TB_FK` (`MANV`);

--
-- Chỉ mục cho bảng `tindang`
--
ALTER TABLE `tindang`
  ADD PRIMARY KEY (`MATD`),
  ADD KEY `TD_THUOC_DM_FK` (`MADM`),
  ADD KEY `NV_KIEMDUYET_TD_FK` (`MANV`),
  ADD KEY `KH_CO_TD_FK` (`MAKH`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `doanhthu`
--
ALTER TABLE `doanhthu`
  ADD CONSTRAINT `FK_NV_QUANLY_DT` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `ghinhanphanhoi`
--
ALTER TABLE `ghinhanphanhoi`
  ADD CONSTRAINT `FK_KH_GUI_PH` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`);

--
-- Các ràng buộc cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD CONSTRAINT `FK_KH_CO_TK` FOREIGN KEY (`MATK`) REFERENCES `taikhoan` (`MATK`),
  ADD CONSTRAINT `FK_XULYVIPHAM` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `FK_NV_CO_CV` FOREIGN KEY (`MACV`) REFERENCES `chucvu` (`MACV`),
  ADD CONSTRAINT `FK_NV_CO_TK2` FOREIGN KEY (`MATK`) REFERENCES `taikhoan` (`MATK`);

--
-- Các ràng buộc cho bảng `thacmac`
--
ALTER TABLE `thacmac`
  ADD CONSTRAINT `FK_KH_CO_TM` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`),
  ADD CONSTRAINT `FK_NV_XULYTHACMAC_KH` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `thietbi`
--
ALTER TABLE `thietbi`
  ADD CONSTRAINT `FK_KH_THEM_TB` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `tindang`
--
ALTER TABLE `tindang`
  ADD CONSTRAINT `FK_KH_CO_TD` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`),
  ADD CONSTRAINT `FK_NV_KIEMDUYET_TD` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`),
  ADD CONSTRAINT `FK_TD_THUOC_DM` FOREIGN KEY (`MADM`) REFERENCES `danhmuc` (`MADM`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

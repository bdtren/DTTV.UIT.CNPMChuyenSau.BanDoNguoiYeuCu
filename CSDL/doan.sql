-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 15, 2018 lúc 09:10 AM
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
  `MACV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `TENCV` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `HSLUONG` int(11) NOT NULL,
  `LUONGCB` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chucvu`
--

INSERT INTO `chucvu` (`MACV`, `TENCV`, `HSLUONG`, `LUONGCB`) VALUES
('CV0001', 'NV Quản lý', 3, 5000000),
('CV0002', 'NV Quảng Cáo', 2, 3000000),
('CV0003', 'NV Chăm sóc KH', 2, 3000000),
('CV0004', 'NV Kiểm duyệt', 1, 3000000),
('CV0005', 'NV Tài chính-Kế toán', 2, 3000000),
('CV0006', 'NV Kỹ thuật', 1, 3000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `MADM` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `TENDM` char(50) COLLATE utf32_unicode_ci NOT NULL,
  `DDANH` longtext COLLATE utf32_unicode_ci,
  `KTDM` varchar(20) COLLATE utf32_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`MADM`, `TENDM`, `DDANH`, `KTDM`) VALUES
('DM0001', 'Bất động sản', NULL, NULL),
('DM0002', 'Nội ngoại thất, đồ gia dụng', NULL, NULL),
('DM0003', 'Đồ điện tử', NULL, NULL),
('DM0004', 'Xe cộ', NULL, NULL),
('DM0005', 'Thời trang, đồ dùng cá nhân', NULL, NULL),
('DM0006', 'Mẹ và bé', NULL, NULL),
('DM0007', 'Thú cưng', NULL, NULL),
('DM0008', 'Giải trí, thể thao, sở thích', NULL, NULL),
('DM0009', 'Đồ văn phòng, công nông nghiệp', NULL, NULL),
('DM0010', 'Việc làm dịch vụ', NULL, NULL),
('DM0011', 'Các loại khác', NULL, NULL),
('DM0012', 'Tất cả danh mục', NULL, NULL),
('DM0013', 'Cho tặng miễn phí', NULL, NULL),
('DM0014', 'Món quà đầu tiên', NULL, NULL),
('DM0015', 'Ngày valentine 14-2', NULL, NULL),
('DM0016', 'Ngày Quốc tế Phụ nữ 8-3', NULL, NULL),
('DM0017', 'Ngày Phụ nữ Việt Nam 20-10', NULL, NULL),
('DM0018', 'Dịp sinh nhật', NULL, NULL),
('DM0019', '100 ngày yêu', NULL, NULL),
('DM0020', 'Khi người ấy giận', NULL, NULL),
('DM0021', 'Thư tay', NULL, NULL),
('DM0022', 'Handmade', NULL, NULL),
('DM0023', 'Bài hát', NULL, NULL),
('DM0024', 'Bài thơ', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doanhthu`
--

CREATE TABLE `doanhthu` (
  `MADT` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `DOANHTHU` double NOT NULL,
  `LYDO` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `doanhthu`
--

INSERT INTO `doanhthu` (`MADT`, `MANV`, `DOANHTHU`, `LYDO`) VALUES
('DT0001', 'NV0004', 10000, 'tao tin hot'),
('DT0002', 'NV0004', 10000, 'tao tin hot'),
('DT0003', 'NV0004', -100000, 'mua vat tu');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ghinhanphanhoi`
--

CREATE TABLE `ghinhanphanhoi` (
  `MAPH` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MAKH` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `NGAYPH` date NOT NULL,
  `MUCDO` int(11) NOT NULL,
  `KNGT` int(11) NOT NULL,
  `PHANHOI` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ghinhanphanhoi`
--

INSERT INTO `ghinhanphanhoi` (`MAPH`, `MAKH`, `NGAYPH`, `MUCDO`, `KNGT`, `PHANHOI`) VALUES
('PH0001', 'KH0001', '2018-04-30', 3, 3, 'ab'),
('PH0002', 'KH0002', '2018-04-30', 4, 5, 'abc'),
('PH0003', 'KH0003', '2018-04-30', 2, 4, 'abcd'),
('PH0004', 'KH0004', '2018-04-30', 5, 3, 'abcde');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `MAKH` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MATK` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `HOTEN` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `DIACHI` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `SDT` varchar(13) COLLATE utf32_unicode_ci NOT NULL,
  `FACEBOOK` longtext COLLATE utf32_unicode_ci NOT NULL,
  `NGAYSINH` date NOT NULL,
  `GIOITINH` varchar(4) COLLATE utf32_unicode_ci NOT NULL,
  `EMAIL` longtext COLLATE utf32_unicode_ci NOT NULL,
  `AVATAR` longtext COLLATE utf32_unicode_ci NOT NULL,
  `TAMSU` longtext COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`MAKH`, `MATK`, `HOTEN`, `DIACHI`, `SDT`, `FACEBOOK`, `NGAYSINH`, `GIOITINH`, `EMAIL`, `AVATAR`, `TAMSU`) VALUES
('KH0001', 'TK0005', 'Nguyễn Văn Đức', 'Hồ Chí Minh', '0123456789', 'abcd.facebook', '1997-05-06', 'Nam', 'abc@gmail.com', '../Images/avatar1.png', 'tam su abc...'),
('KH0002', 'TK0006', 'Tran Anh Việt', 'Bình Dương', '01232456789', 'abcde.facebook', '1996-02-14', 'Nam', 'abcd@gmail.com', '../Images/avatar2.png', 'tam su def...'),
('KH0003', 'TK0007', 'Hồ Xuân Hương', 'Đồng Nai', '00123456789', 'abcdf.facebook', '1997-08-27', 'Nu', 'abcdf@gmail.com', '../Images/avatar3.png', 'tam su bcd...'),
('KH0004', 'TK0008', 'Nguyễn Thị Trang', 'Tiền Giang', '1223456789', 'abcdfe.facebook', '1998-03-13', 'Nu', 'abcdfef@gmail.com', '../Images/avatar4.png', 'tam su abc...'),
('KH0005', 'TK0011', 'Hồ Xuân Thương', 'Hồ Chí Minh', '12023456789', 'abcdfe.facebook', '1996-07-13', 'Nam', 'abcdfef@gmail.com', '../Images/avatar4.png', 'tam su abc...');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `kiemtratb`
--

CREATE TABLE `kiemtratb` (
  `MAKT` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MATB` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `NGAYKT` date NOT NULL,
  `TINHTRANG` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `GHICHU` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `kiemtratb`
--

INSERT INTO `kiemtratb` (`MAKT`, `MANV`, `MATB`, `NGAYKT`, `TINHTRANG`, `GHICHU`) VALUES
('KT0001', 'NV0002', 'TB0001', '2018-05-01', 'Tot', 'Tot'),
('KT0002', 'NV0002', 'TB0002', '2018-05-01', 'Binh Thuong', 'Tot'),
('KT0003', 'NV0002', 'TB0003', '2018-05-01', 'Hu', 'Sua'),
('KT0004', 'NV0002', 'TB0004', '2018-05-01', 'Hu', 'thay mới');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MATK` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MACV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `HOTEN` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `NGAYSINH` date NOT NULL,
  `DIACHI` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `SDT` varchar(13) COLLATE utf32_unicode_ci NOT NULL,
  `GIOITINH` varchar(4) COLLATE utf32_unicode_ci NOT NULL,
  `EMAIL` longtext COLLATE utf32_unicode_ci NOT NULL,
  `AVATAR` longtext COLLATE utf32_unicode_ci NOT NULL,
  `NGAYVL` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`MANV`, `MATK`, `MACV`, `HOTEN`, `NGAYSINH`, `DIACHI`, `SDT`, `GIOITINH`, `EMAIL`, `AVATAR`, `NGAYVL`) VALUES
('NV0001', 'TK0001', 'CV0002', 'Lê Minh Tuấn', '1997-06-23', 'Bình Dương', '01234562358', 'Nam', 'mintuan@gmail.com', '../Images/avatar5.png', '2018-05-01'),
('NV0002', 'TK0002', 'CV0003', 'Nguyễn Anh Tuấn', '1997-04-13', 'Hồ Chí Minh', '010234562358', 'Nam', 'anhtuan@gmail.com', '../Images/avatar6.png', '2018-02-12'),
('NV0003', 'TK0003', 'CV0004', 'Võ Sĩ Vai', '1997-08-10', 'Hồ Chí Minh', '012340562358', 'Nam', 'sivai@gmail.com', '../Images/avatar7.png', '2018-02-12'),
('NV0004', 'TK0004', 'CV0005', 'Nguyễn Bảo Duy', '1997-04-03', 'Biên Hòa', '012345602358', 'Nu', 'bdtren@gmail.com', '../Images/avatar8.png', '2018-02-12'),
('NV0005', 'TK0009', 'CV0001', 'Hoàng Tuấn Anh', '1996-04-03', 'Tiền Giang', '0123450602358', 'Nam', 'adsff@gmail.com', '../Images/avatar9.png', '2018-02-12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phancong`
--

CREATE TABLE `phancong` (
  `MAPC` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `NVQL` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `NGAYPC` date NOT NULL,
  `CHITIET` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `SOGIOHD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phancong`
--

INSERT INTO `phancong` (`MAPC`, `MANV`, `NVQL`, `NGAYPC`, `CHITIET`, `SOGIOHD`) VALUES
('PC0001', 'NV0001', 'NV0005', '2018-05-01', 'abc', 5),
('PC0002', 'NV0002', 'NV0005', '2018-05-01', 'abcd', 6),
('PC0003', 'NV0003', 'NV0005', '2018-05-01', 'abce', 4),
('PC0004', 'NV0004', 'NV0005', '2018-05-01', 'abcf', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MATK` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `TENTK` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `MATKHAU` varchar(20) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`MATK`, `TENTK`, `MATKHAU`) VALUES
('TK0001', 'leminhtuan', 'minhtuan'),
('TK0002', 'nguyenanhtuan', 'anhtuan'),
('TK0003', 'vosivai', 'sivai'),
('TK0004', 'nguyenbaoduy', 'baoduy'),
('TK0005', 'nguyenvanduc', 'vanduc'),
('TK0006', 'trananhviet', 'anhviet'),
('TK0007', 'hoxuanhuong', 'xuanhuong'),
('TK0008', 'nguyenthitrang', 'thitrang'),
('TK0009', 'hoangtuananh', 'tuananh'),
('TK0010', 'lehoangnam', 'hoangnam'),
('TK0011', 'hoxuanthuong', 'baoanh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thacmac`
--

CREATE TABLE `thacmac` (
  `MATM` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MAKH` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `LOAIHOTRO` varchar(20) COLLATE utf32_unicode_ci NOT NULL,
  `VANDEGIAIDAP` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `CHITIET` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `TRALOI` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thacmac`
--

INSERT INTO `thacmac` (`MATM`, `MAKH`, `MANV`, `LOAIHOTRO`, `VANDEGIAIDAP`, `CHITIET`, `TRALOI`) VALUES
('TM0001', 'KH0002', 'NV0002', 'Giải đáp', 'Cách đăng tin', 'Chi tiết abc ', 'Tra loi abc '),
('TM0002', 'KH0003', 'NV0002', 'Giải đáp', 'Cách hủy tin', 'Chi tiết abc ', 'Tra loi abc '),
('TM0003', 'KH0002', 'NV0002', 'Giải đáp', 'Cách sửa tin', 'Chi tiết abc ', 'Tra loi abc '),
('TM0004', 'KH0004', 'NV0002', 'Giải đáp', 'Cáchtạo tin hot', 'Chi tiết abc ', 'Tra loi abc ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanhtoanluong`
--

CREATE TABLE `thanhtoanluong` (
  `MATT` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `TIENTHANHTOAN` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thanhtoanluong`
--

INSERT INTO `thanhtoanluong` (`MATT`, `MANV`, `TIENTHANHTOAN`) VALUES
('TT0001', 'NV0001', 3000000),
('TT0002', 'NV0002', 4000000),
('TT0003', 'NV0003', 5000000),
('TT0004', 'NV0004', 6000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thietbi`
--

CREATE TABLE `thietbi` (
  `MATB` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `TENTB` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `LOAITB` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `XUATXU` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `NGAYSUDUNG` date NOT NULL,
  `GIATRI` double NOT NULL,
  `NGAYNHAP` date NOT NULL,
  `GHICHU` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thietbi`
--

INSERT INTO `thietbi` (`MATB`, `MANV`, `TENTB`, `LOAITB`, `XUATXU`, `NGAYSUDUNG`, `GIATRI`, `NGAYNHAP`, `GHICHU`) VALUES
('TB0001', 'NV0002', 'chuot', 'dien tu', 'viet nam', '2018-04-30', 4000000, '2018-04-29', ' '),
('TB0002', 'NV0002', 'man hinh', 'dien tu', 'viet nam', '2018-04-30', 4000000, '2018-04-29', ' '),
('TB0003', 'NV0002', 'Bán', 'do go', 'viet nam', '2018-04-30', 5000000, '2018-04-29', ' '),
('TB0004', 'NV0002', 'ghe', 'do nhua', 'viet nam', '2018-04-30', 2000000, '2018-04-29', ' ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tindang`
--

CREATE TABLE `tindang` (
  `MATD` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MADM` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MAKH` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `TTKIEMDUYET` int(11) NOT NULL,
  `NGAYDANG` date NOT NULL,
  `LOAITD` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `TIEUDE` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `GIABAN` double NOT NULL,
  `TINHTRANGMH` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `HINHANH` longtext COLLATE utf32_unicode_ci,
  `TAMSU` longtext COLLATE utf32_unicode_ci,
  `PTGD` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `TINHTRANGTIN` varchar(50) COLLATE utf32_unicode_ci NOT NULL,
  `LOAITIN` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tindang`
--

INSERT INTO `tindang` (`MATD`, `MANV`, `MADM`, `MAKH`, `TTKIEMDUYET`, `NGAYDANG`, `LOAITD`, `TIEUDE`, `GIABAN`, `TINHTRANGMH`, `HINHANH`, `TAMSU`, `PTGD`, `TINHTRANGTIN`, `LOAITIN`) VALUES
('TD0001', 'NV0003', 'DM0001', 'KH0001', 1, '2018-04-30', 'Bán', 'Bán nhà người yêu cũ', 3000000000, 'mới', '../Imanges/tindang1.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0002', 'NV0003', 'DM0002', 'KH0002', 1, '2018-04-30', 'Bán', 'Bán tủ lạnh', 4000000, 'mới', '../Imanges/tindang2.png', 'tâm sự abc', 'chuyển khoản', 'đang đăng', 'Bán'),
('TD0003', 'NV0003', 'DM0003', 'KH0003', 1, '2018-04-30', 'Mua', 'Bán Tivi', 3000000, 'mới', '../Imanges/tindang3.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0004', 'NV0003', 'DM0004', 'KH0004', 1, '2018-04-30', 'Bán', 'Bán xe đạp', 700000, 'mới', '../Imanges/tindang4.png', 'tâm sự abc', 'chuyển khoản', 'đang đăng', 'Bán'),
('TD0005', 'NV0003', 'DM0005', 'KH0005', 0, '2018-04-30', 'Mua', 'Mua đồng hồ', 1000000, 'mới', '../Imanges/tindang5.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0006', 'NV0003', 'DM0006', 'KH0005', 0, '2018-04-30', 'Bán', 'Bán xe đạp em bé', 1000000, 'mới', '../Imanges/tindang6.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0007', 'NV0003', 'DM0007', 'KH0001', 1, '2018-04-30', 'Mua', 'Mua chó kiểng', 4000000, 'mới', '../Imanges/tindang7.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0008', 'NV0003', 'DM0008', 'KH0002', 1, '2018-04-30', 'Mua', 'Mua banh', 200000, 'mới/cũ', '../Imanges/tindang8.png', 'tâm sự abc', 'tiền mặt/chuyển khoản', 'đang đăng', 'Mua'),
('TD0009', 'NV0003', 'DM0009', 'KH0003', 1, '2018-04-30', 'Bán', 'Bán bàn làm việc', 1000000, 'cũ', '../Imanges/tindang9.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0010', 'NV0003', 'DM0004', 'KH0004', 1, '2018-04-30', 'Mua', 'Mua xe đạp', 700000, 'mới', '../Imanges/tindang10.png', 'tâm sự abc', 'chuyển khoản', 'đang đăng', 'Mua'),
('TD0011', 'NV0003', 'DM0005', 'KH0001', 0, '2018-04-30', 'Mua', 'Mua mắt kiếng', 1000000, 'mới', '../Imanges/tindang11.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0012', 'NV0003', 'DM0006', 'KH0005', 0, '2018-04-30', 'Bán', 'Bán khăn len', 50000, 'mới', '../Imanges/tindang12.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0013', 'NV0003', 'DM0007', 'KH0001', 0, '2018-04-30', 'Mua', 'Mua nhà', 3000000000, 'mới', '../Imanges/tindang13.png', 'tâm sự abc', 'tiền mặt/chuyển khoản', 'đang đăng', 'Mua'),
('TD0014', 'NV0003', 'DM0008', 'KH0002', 1, '2018-04-30', 'Bán', 'Bán máy giặt', 6000000, 'cũ', '../Imanges/tindang14.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0015', 'NV0003', 'DM0009', 'KH0003', 1, '2018-04-30', 'Mua', 'Mua máy lạnh', 3000000, 'mới', '../Imanges/tindang15.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0016', 'NV0003', 'DM0010', 'KH0004', 1, '2018-04-30', 'Mua', 'Mua tivi', 6000000, 'mới', '../Imanges/tindang16.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0017', 'NV0003', 'DM0011', 'KH0001', 0, '2018-04-30', 'Mua', 'Mua đồng hồ', 1000000, 'mới', '../Imanges/tindang17.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0018', 'NV0003', 'DM0012', 'KH0002', 0, '2018-04-30', 'Bán', 'Bán điện thoại', 4000000, 'mới', '../Imanges/tindang18.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0019', 'NV0003', 'DM0013', 'KH0001', 1, '2018-04-30', 'Tặng', 'Tặng chó Nhật', 0, 'mới', '../Imanges/tindang19.png', 'tâm sự abc', 'Tặng', 'đang đăng', 'Tặng'),
('TD0020', 'NV0003', 'DM0014', 'KH0002', 1, '2018-04-30', 'Bán', 'Bán nhẫn', 1000000, 'cũ', '../Imanges/tindang20.png', 'tâm sự abc', 'chuyển khoản', 'đang đăng', 'Bán'),
('TD0021', 'NV0003', 'DM0015', 'KH0003', 1, '2018-04-30', 'Bán', 'Bán dây chuyền', 3000000, 'mới', '../Imanges/tindang21.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0022', 'NV0003', 'DM0016', 'KH0004', 1, '2018-04-30', 'Bán', 'Bán xe đạp', 700000, 'mới', '../Imanges/tindang22.png', 'tâm sự abc', 'chuyển khoản', 'đang đăng', 'Bán'),
('TD0023', 'NV0003', 'DM0017', 'KH0001', 0, '2018-04-30', 'Mua', 'Mua áo sơ mi', 200000, 'mới', '../Imanges/tindang23.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0024', 'NV0003', 'DM0018', 'KH0002', 0, '2018-04-30', 'Bán', 'Bán xe hơi', 1000000000, 'mới', '../Imanges/tindang24.png', 'tâm sự abc', 'tiền mặt/chuyển khoản', 'đang đăng', 'Bán'),
('TD0025', 'NV0003', 'DM0019', 'KH0001', 1, '2018-04-30', 'Tặng', 'Thư kỷ niệm', 0, 'cũ', '../Imanges/tindang25.png', 'tâm sự abc', 'Tặng', 'đang đăng', 'Tặng'),
('TD0026', 'NV0003', 'DM0020', 'KH0002', 1, '2018-04-30', 'Bán', 'Bán Nhẩn', 4000000, 'mới', '../Imanges/tindang26.png', 'tâm sự abc', 'chuyển khoản', 'đang đăng', 'Bán'),
('TD0027', 'NV0003', 'DM0021', 'KH0003', 1, '2018-04-30', 'Tặng', 'Thư tỏ tình', 0, 'mới', '../Imanges/tindang27.png', 'tâm sự abc', 'Tặng', 'đang đăng', 'Tặng'),
('TD0028', 'NV0003', 'DM0022', 'KH0004', 1, '2018-04-30', 'Bán', 'Bán nhà tăm', 50000, 'mới', '../Imanges/tindang28.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0029', 'NV0003', 'DM0023', 'KH0001', 0, '2018-04-30', 'Tặng', 'Tặng đĩa nhạc', 0, 'cũ', '../Imanges/tindang29.png', 'tâm sự abc', 'tặng', 'đang đăng', 'Tặng'),
('TD0030', 'NV0003', 'DM0024', 'KH0002', 0, '2018-04-30', 'Tặng', 'Tặng truyện', 0, 'mới', '../Imanges/tindang30.png', 'tâm sự abc', 'tặng', 'đang đăng', 'Tặng'),
('TD0031', 'NV0003', 'DM0001', 'KH0001', 1, '2018-04-30', 'Mua', 'Mua nhà', 2000000000, 'mới', '../Imanges/tindang31.png', 'tâm sự abc', 'tiền mặt/chuyển khoản', 'đang đăng', 'Mua'),
('TD0032', 'NV0003', 'DM0002', 'KH0002', 1, '2018-04-30', 'Bán', 'Bán máy lạnh', 4000000, 'mới', '../Imanges/tindang32.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0033', 'NV0003', 'DM0003', 'KH0003', 1, '2018-04-30', 'Mua', 'Mua máy tính', 3000000, 'cũ', '../Imanges/tindang33.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0034', 'NV0003', 'DM0004', 'KH0004', 1, '2018-04-30', 'Bán', 'Bán xe máy', 7000000, 'mới', '../Imanges/tindang34.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán'),
('TD0035', 'NV0003', 'DM0005', 'KH0001', 0, '2018-04-30', 'Mua', 'Mua máy ảnh', 1000000, 'cũ', '../Imanges/tindang35.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Mua'),
('TD0036', 'NV0003', 'DM0006', 'KH0002', 0, '2018-04-30', 'Bán', 'Bán võng', 1000000, 'mới', '../Imanges/tindang36.png', 'tâm sự abc', 'tiền mặt', 'đang đăng', 'Bán');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xulyvipham`
--

CREATE TABLE `xulyvipham` (
  `MAKH` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `MANV` char(6) COLLATE utf32_unicode_ci NOT NULL,
  `NGAYXULY` date NOT NULL,
  `NOIDUNGXULY` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `xulyvipham`
--

INSERT INTO `xulyvipham` (`MAKH`, `MANV`, `NGAYXULY`, `NOIDUNGXULY`) VALUES
('KH0001', 'NV0003', '2108-05-02', 'vi pham noi quy'),
('KH0002', 'NV0003', '2108-05-02', 'vi pham noi quy');

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
  ADD KEY `KH_CO_TK_FK` (`MATK`);

--
-- Chỉ mục cho bảng `kiemtratb`
--
ALTER TABLE `kiemtratb`
  ADD PRIMARY KEY (`MAKT`),
  ADD KEY `KIEMTRA_THIETBI_FK` (`MATB`),
  ADD KEY `NV_KIEMTRA_TB_FK` (`MANV`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MANV`),
  ADD KEY `NV_CO_CV_FK` (`MACV`),
  ADD KEY `NV_CO_TK_FK` (`MATK`);

--
-- Chỉ mục cho bảng `phancong`
--
ALTER TABLE `phancong`
  ADD PRIMARY KEY (`MAPC`),
  ADD KEY `NV_PHANCONG_FK` (`MANV`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`MATK`),
  ADD UNIQUE KEY `TAIKHOAN_TENTK_U` (`TENTK`);

--
-- Chỉ mục cho bảng `thacmac`
--
ALTER TABLE `thacmac`
  ADD PRIMARY KEY (`MATM`),
  ADD KEY `KH_CO_TM_FK` (`MAKH`),
  ADD KEY `NV_XULYTHACMAC_KH_FK` (`MANV`);

--
-- Chỉ mục cho bảng `thanhtoanluong`
--
ALTER TABLE `thanhtoanluong`
  ADD PRIMARY KEY (`MATT`),
  ADD KEY `NV_THANHTOAN_LUONG_FK` (`MANV`);

--
-- Chỉ mục cho bảng `thietbi`
--
ALTER TABLE `thietbi`
  ADD PRIMARY KEY (`MATB`),
  ADD KEY `NV_THEM_TB_FK` (`MANV`);

--
-- Chỉ mục cho bảng `tindang`
--
ALTER TABLE `tindang`
  ADD PRIMARY KEY (`MATD`),
  ADD KEY `TD_THUOC_DM_FK` (`MADM`),
  ADD KEY `NV_KIEMDUYET_TD_FK` (`MANV`),
  ADD KEY `KH_CO_TD_FK` (`MAKH`);

--
-- Chỉ mục cho bảng `xulyvipham`
--
ALTER TABLE `xulyvipham`
  ADD PRIMARY KEY (`MAKH`,`MANV`),
  ADD KEY `XULYVIPHAM_FK` (`MAKH`),
  ADD KEY `XULYVIPHAM2_FK` (`MANV`);

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
  ADD CONSTRAINT `FK_KH_CO_TK` FOREIGN KEY (`MATK`) REFERENCES `taikhoan` (`MATK`);

--
-- Các ràng buộc cho bảng `kiemtratb`
--
ALTER TABLE `kiemtratb`
  ADD CONSTRAINT `FK_KIEMTRA_THIETBI` FOREIGN KEY (`MATB`) REFERENCES `thietbi` (`MATB`),
  ADD CONSTRAINT `FK_NV_KIEMTRA_TB` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `FK_NV_CO_CV` FOREIGN KEY (`MACV`) REFERENCES `chucvu` (`MACV`),
  ADD CONSTRAINT `FK_NV_CO_TK` FOREIGN KEY (`MATK`) REFERENCES `taikhoan` (`MATK`);

--
-- Các ràng buộc cho bảng `phancong`
--
ALTER TABLE `phancong`
  ADD CONSTRAINT `FK_NV_PHANCONG` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `thacmac`
--
ALTER TABLE `thacmac`
  ADD CONSTRAINT `FK_KH_CO_TM` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`),
  ADD CONSTRAINT `FK_NV_XULYTHACMAC_KH` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `thanhtoanluong`
--
ALTER TABLE `thanhtoanluong`
  ADD CONSTRAINT `FK_NV_THANHTOAN_LUONG` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `thietbi`
--
ALTER TABLE `thietbi`
  ADD CONSTRAINT `FK_NV_THEM_TB` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);

--
-- Các ràng buộc cho bảng `tindang`
--
ALTER TABLE `tindang`
  ADD CONSTRAINT `FK_KH_CO_TD` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`),
  ADD CONSTRAINT `FK_NV_KIEMDUYET_TD` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`),
  ADD CONSTRAINT `FK_TD_THUOC_DM` FOREIGN KEY (`MADM`) REFERENCES `danhmuc` (`MADM`);

--
-- Các ràng buộc cho bảng `xulyvipham`
--
ALTER TABLE `xulyvipham`
  ADD CONSTRAINT `FK_XULYVIPHAM` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`),
  ADD CONSTRAINT `FK_XULYVIPHAM2` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

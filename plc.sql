-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2024 at 07:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `plc`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_plan`
--

CREATE TABLE `tbl_plan` (
  `id` int(11) NOT NULL,
  `creata_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `quantity_total` int(11) NOT NULL,
  `quantity_red` int(11) NOT NULL,
  `quantity_yellow` int(11) NOT NULL,
  `quantity_blue` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `note` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL,
  `creata_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `color` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_day`
--

CREATE TABLE `tbl_product_day` (
  `id` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `red` int(11) NOT NULL,
  `yellow` int(11) NOT NULL,
  `blue` int(11) NOT NULL,
  `fail` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `img` text NOT NULL,
  `categoryUser` int(11) NOT NULL,
  `note` text NOT NULL,
  `address` varchar(5000) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `password`, `fullname`, `img`, `categoryUser`, `note`, `address`, `status`) VALUES
(27, 'duydb123', '$2a$10$9UWzMaGa/h1qH53JGLR5puumls7huo/k9AYZfcFKXgE2JXwOy6y5e', 'Nguyễn đức duy', ' ', 2, '', 'Thôn  tân quán', 1),
(28, 'duydb123az', '$2a$10$W.WX2RfDXEpnJ9iAp4taguqR3bj5vc11c48VL75CuB2Ue3N1IHBlu', 'Nguyễn đức duy', ' ', 2, '', 'Thôn  tân quán', 1),
(29, 'duyml123', '$2a$10$np1.ja/znWEUWbZxGSVoO.lP4nEUgIS43RLmvWWHiyBoD4H3Jr/AC', 'Nguyễn Đức Duy', ' ', 3, '', 'Thôn Đồng thanh', 1),
(30, 'daomanhtien123az', '$2a$10$edeo4S3swnJ1.yxj8nma5.CdvIKEACrNkOiRWKS2DslbklNxGcgWi', 'Đào mạnh tiến', ' ', 2, '', 'Lưu trú', 1),
(31, 'vutienmanh123', '$2a$10$7S1xcwJvecMVqS/FNBDHO.EQd3plB9tPtBMMSN5PMhrJUSel0/TT6', 'Vũ tiến Mạnh', ' ', 3, '', 'Vũ Thôn , Xã Yên Vũ', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_plan`
--
ALTER TABLE `tbl_plan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product_day`
--
ALTER TABLE `tbl_product_day`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_plan`
--
ALTER TABLE `tbl_plan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_product_day`
--
ALTER TABLE `tbl_product_day`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

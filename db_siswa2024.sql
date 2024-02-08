-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2024 at 05:05 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_siswa2024`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `id` int(5) NOT NULL,
  `Nama` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id`, `Nama`, `created_at`, `updated_at`) VALUES
(1, 'Jakarta', '2024-02-03 07:35:32', '2024-02-03 07:35:32'),
(2, 'Malang', '2024-02-05 00:37:56', '2024-02-05 00:37:56'),
(3, 'Yogyakarta', '2024-02-05 00:45:24', '2024-02-05 00:45:24'),
(4, 'Bandung', '2024-02-05 01:46:27', '2024-02-05 01:46:27'),
(5, 'Surabaya', '2024-02-05 07:50:54', '2024-02-05 07:50:54'),
(6, 'Padang', '2024-02-05 08:18:13', '2024-02-05 08:33:37'),
(7, 'Lamongan', '2024-02-05 11:55:02', '2024-02-05 11:55:02'),
(8, 'Banyuwangi', '2024-02-06 01:40:27', '2024-02-06 01:40:27'),
(9, 'Blitar', '2024-02-08 07:30:33', '2024-02-08 07:53:10'),
(13, 'Balik papan', '2024-02-08 08:09:19', '2024-02-08 08:09:19');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` text NOT NULL,
  `Username` text NOT NULL,
  `Password` char(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `Name`, `Username`, `Password`, `created_at`, `updated_at`) VALUES
(1, 'Ahmad Rasyid', 'HiRasyid', '12345678', '2024-01-26 18:56:57', '2024-01-26 18:56:57');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_23_134907_create_siswas_table', 1),
(6, '2024_01_23_144015_create__kota_table', 1),
(7, '2024_01_24_114900_create_login_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `id` int(5) UNSIGNED NOT NULL,
  `Nis` int(11) NOT NULL,
  `Nama` longtext NOT NULL,
  `Gender` char(255) NOT NULL,
  `TglLahir` date NOT NULL,
  `Kota_id` int(5) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`id`, `Nis`, `Nama`, `Gender`, `TglLahir`, `Kota_id`, `created_at`, `updated_at`) VALUES
(1, 8753, 'Arya bima kusuma', 'Laki - laki', '2004-12-08', 1, NULL, '2024-02-03 21:11:42'),
(2, 3287, 'M. Zulfikar', 'Laki - laki', '2003-05-03', 4, '2024-01-31 06:50:42', '2024-02-06 00:46:10'),
(3, 3652, 'Fadil Ramadani', 'Laki - laki', '2002-01-28', 4, '2024-02-02 04:52:22', '2024-02-06 01:38:48'),
(4, 2893, 'Amelisa tisyani', 'Perempuan', '2004-06-15', 4, '2024-02-03 06:33:18', '2024-02-06 00:55:02'),
(5, 7841, 'Casy silfia', 'Perempuan', '2001-02-09', 7, '2024-02-03 06:36:13', '2024-02-06 00:55:19'),
(6, 7893, 'Afif yogi muzaiyana', 'Perempuan', '2006-02-08', 1, '2024-02-03 21:15:32', '2024-02-03 21:15:32'),
(10, 2319, 'Dian Santoso', 'Laki - laki', '2005-12-05', 4, '2024-02-06 00:44:31', '2024-02-06 00:44:31'),
(11, 7369, 'Muhammad haris', 'Laki - laki', '2004-06-05', 5, '2024-02-06 00:45:30', '2024-02-06 00:45:30'),
(12, 3580, 'Didik nanda nurmansyah', 'Laki - laki', '2007-03-23', 5, '2024-02-06 00:56:38', '2024-02-06 00:56:38'),
(13, 4609, 'Ega andika', 'Laki - laki', '2005-07-08', 4, '2024-02-06 01:00:59', '2024-02-06 01:00:59'),
(14, 5649, 'Syarifana Nurshofi', 'Perempuan', '2010-03-06', 5, '2024-02-06 01:03:35', '2024-02-06 01:03:35'),
(17, 2534, 'Gilang pratama', 'Laki - laki', '2024-02-26', 2, '2024-02-07 18:07:08', '2024-02-08 02:32:51'),
(18, 2435, 'Aditya angga', 'Laki - laki', '2024-02-16', 2, '2024-02-07 18:10:28', '2024-02-08 02:37:05'),
(19, 5685, 'hfvbnmm', 'Laki - laki', '2024-02-06', 5, '2024-02-07 18:13:37', '2024-02-07 18:13:37'),
(20, 6876, 'Zggddh', 'Laki - laki', '2024-02-29', 3, '2024-02-07 18:28:57', '2024-02-07 18:28:57'),
(21, 4679, 'Zulfa natasya', 'Perempuan', '2024-02-13', 4, '2024-02-07 18:47:05', '2024-02-08 08:17:37'),
(23, 4332, 'Geno rahmadani', 'Perempuan', '2024-02-06', 6, '2024-02-07 18:57:51', '2024-02-08 08:08:17'),
(24, 3456, 'Azizah NurIsnaini', 'Perempuan', '2024-02-14', 2, '2024-02-07 19:18:24', '2024-02-08 02:39:54'),
(25, 7697, 'vbjhhkb', 'Perempuan', '2024-02-14', 3, '2024-02-07 19:24:05', '2024-02-07 19:24:05'),
(26, 6778, 'Bahrul Alam', 'Laki - laki', '2024-02-07', 2, '2024-02-07 19:25:13', '2024-02-08 02:42:35'),
(27, 4354, 'NBsakj', 'Perempuan', '2024-02-05', 2, '2024-02-07 19:33:43', '2024-02-07 19:33:43'),
(28, 8746, 'Rifaul husna', 'Perempuan', '2006-04-29', 8, '2024-02-08 06:50:56', '2024-02-08 06:50:56'),
(29, 2387, 'Diwa saputra', 'Laki - laki', '2024-02-01', 5, '2024-02-08 08:07:11', '2024-02-08 08:07:11'),
(30, 8320, 'Rahmad argantara', 'Laki - laki', '2024-01-30', 4, '2024-02-08 08:16:39', '2024-02-08 08:16:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Zuifa amalia', 'amel@gmail.com', NULL, '$2y$10$fWrxfD0q6n04K9FjqHiLNuDKUa4WJBFzqwqcaKsptQKFvd1NJEGVm', '2UGeLltarz8CV4iMHOqGYtzHI53CT2W7unjuybpIlIso36T3L9fDvQE1xn9V', '2024-02-05 13:18:11', '2024-02-05 13:18:11'),
(2, 'zidni', 'zidni@gmail.com', NULL, '$2y$10$IpoyMvliVYYUbwM.khg2NeA.OTFnhmTB90Vvg07x4yvNB02VMWGZW', 'gsKmnYi3zDJdnXpJxP8LtbKWX8g4hR9YvYI2dlaKxG8l88Czmiii7ijFbYqY', '2024-02-06 01:37:38', '2024-02-06 01:37:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `kota`
--
ALTER TABLE `kota`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Kota_id` (`Kota_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `siswa_ibfk_1` FOREIGN KEY (`Kota_id`) REFERENCES `kota` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 186.202.152.139
-- Generation Time: 05-Fev-2022 às 17:30
-- Versão do servidor: 5.7.32-35-log
-- PHP Version: 5.6.40-0+deb8u12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `despesas_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `categoria_id` int(11) NOT NULL,
  `categoria_nome` varchar(200) NOT NULL,
  `categoria_class` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`categoria_id`, `categoria_nome`, `categoria_class`) VALUES
(1, 'Entradas', 'icon-income'),
(2, 'Saídas', 'icon-expense'),
(3, 'Relatórios', 'icon-report'),
(4, 'Veículo', 'icon-report');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `categoria_id` int(11) NOT NULL,
  `categoria_nome` varchar(200) NOT NULL,
  `classe_id` int(11) NOT NULL,
  `preco_id` int(11) NOT NULL,
  `categoria_img` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`categoria_id`, `categoria_nome`, `classe_id`, `preco_id`, `categoria_img`) VALUES
(1, 'Salário', 1, 0, 'icon-salary.png'),
(2, 'Depósitos', 1, 0, 'icon-income.png'),
(3, 'Entretenimento', 2, 0, 'icon-entertainment.png'),
(4, 'Veículo', 2, 0, 'icon-car.png'),
(5, 'Roupas', 2, 0, 'icon-clothes.png'),
(6, 'Comunicação', 2, 0, 'icon-communication.png'),
(7, 'Comer Fora', 2, 0, 'icon-fast-food.png'),
(8, 'Presentes', 2, 0, 'icon-gift.png'),
(9, 'Alimentação', 2, 0, 'icon-food.png'),
(10, 'Saúde', 2, 0, 'icon-health.png'),
(11, 'Casa', 2, 0, 'icon-house.png'),
(12, 'Higiene Pessoal', 2, 0, 'icon-toiletry.png'),
(13, 'Pets', 2, 0, 'icon-pets.png'),
(14, 'Esportes', 2, 0, 'icon-sports.png'),
(15, 'Educação', 2, 0, 'icon-education.jpg'),
(16, 'Poupança', 2, 0, 'safe-icon.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `classes`
--

CREATE TABLE `classes` (
  `classe_id` int(11) NOT NULL,
  `classe_nome` varchar(200) NOT NULL,
  `classe_class` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `classes`
--

INSERT INTO `classes` (`classe_id`, `classe_nome`, `classe_class`) VALUES
(1, 'Entradas', 'icon-income'),
(2, 'Saídas', 'icon-expense');

-- --------------------------------------------------------

--
-- Estrutura da tabela `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `data` varchar(50) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `quantidade` varchar(50) NOT NULL,
  `total` varchar(50) NOT NULL,
  `unitario` varchar(50) NOT NULL,
  `preco_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `items`
--

INSERT INTO `items` (`item_id`, `categoria_id`, `data`, `produto_id`, `quantidade`, `total`, `unitario`, `preco_id`) VALUES
(16, 4, '2019-10', 1, '10.22', '50', '4.89', 49),
(20, 9, '2019-10', 9, '1', '5', '0.83', 44),
(21, 9, '2019-10', 9, '1', '6', '6', 46),
(22, 9, '2019-10', 6, '2', '5', '2.5', 46),
(24, 15, '2019-11', 14, '1', '350', '350', 56),
(26, 4, '2019-11', 1, '20.40', '100', '4.9', 59),
(28, 13, '2019-11', 16, '1', '52', '52', 64),
(30, 13, '2019-11', 20, '2', '44', '22', 63),
(32, 4, '2019-11', 1, '10.43', '50', '4.79', 65),
(34, 4, '2019-12', 1, '10.22', '50', '4.89', 75),
(36, 4, '2019-12', 1, '10.48', '50', '4.77', 68),
(38, 11, '2019-12', 24, '1', '234', '234', 74),
(40, 11, '2019-12', 22, '1', '173', '173', 73),
(42, 4, '2019-12', 1, '1', '50', '50', 77),
(44, 15, '2019-12', 14, '1', '165', '165', 78),
(46, 12, '2019-12', 26, '1', '49', '49', 69),
(48, 4, '2020-01', 1, '1', '50', '50', 85),
(50, 0, '', 0, '1', '100', '4.69', 0),
(52, 15, '2020-01', 14, '1', '385', '385', 86);

-- --------------------------------------------------------

--
-- Estrutura da tabela `movimentacao`
--

CREATE TABLE `movimentacao` (
  `movimentacao_id` int(11) NOT NULL,
  `m_classe_id` int(11) NOT NULL,
  `m_categoria_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `observacoes` varchar(500) NOT NULL,
  `preco` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `despesa_fixa` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `movimentacao`
--

INSERT INTO `movimentacao` (`movimentacao_id`, `m_classe_id`, `m_categoria_id`, `usuario_id`, `observacoes`, `preco`, `status`, `despesa_fixa`) VALUES
(13, 1, 1, 1, 'SimCosta', 6, 0, 0),
(12, 2, 9, 1, 'Açucar e macarrão.', 4, 0, 0),
(14, 1, 2, 1, 'Venda roupa Malu', 9, 0, 0),
(15, 2, 6, 1, 'Recarga celular', 10, 0, 0),
(16, 2, 7, 1, 'open garage', 11, 0, 0),
(20, 2, 11, 1, 'Água', 15, 0, 0),
(18, 2, 13, 1, 'Ração Primocão e Mak Gatos', 13, 0, 0),
(19, 2, 7, 1, 'Open Garage', 14, 0, 0),
(21, 2, 11, 1, 'Luz', 16, 0, 0),
(24, 2, 9, 1, 'Atacadão', 19, 0, 0),
(25, 2, 11, 1, 'Água', 20, 0, 0),
(26, 2, 3, 1, 'Cinema Aquaman', 21, 0, 0),
(28, 2, 4, 1, 'Gasolina', 23, 0, 0),
(29, 2, 9, 1, 'Churrasco em casa', 24, 0, 0),
(31, 1, 1, 1, 'SimCosta', 26, 0, 0),
(32, 2, 9, 1, 'Atacadão', 27, 0, 0),
(33, 2, 9, 1, 'Cartão Atacadão', 28, 0, 0),
(34, 2, 11, 1, 'Limpeza Esgoto', 29, 0, 0),
(35, 2, 9, 1, 'Guanabara', 30, 0, 0),
(36, 2, 9, 1, 'Churras em Casa', 31, 0, 0),
(37, 1, 2, 1, 'SimCosta', 32, 0, 0),
(38, 2, 9, 1, 'Atacadão', 33, 0, 0),
(39, 2, 13, 1, 'Raç?o gatos\n', 34, 0, 0),
(40, 2, 4, 1, 'Gasolina', 35, 0, 0),
(41, 2, 6, 1, 'Celular Sara', 36, 0, 0),
(42, 2, 10, 1, 'Pomadas Malu', 37, 0, 0),
(43, 2, 11, 1, 'Luz', 38, 0, 0),
(44, 2, 11, 1, 'Agua', 39, 0, 0),
(45, 2, 11, 1, 'Lenha para lareira', 40, 0, 0),
(46, 2, 3, 1, 'Open Garage', 41, 0, 0),
(47, 2, 13, 1, 'Ração para os gatos', 42, 0, 0),
(48, 1, 1, 1, 'Simcosta', 43, 0, 0),
(49, 2, 9, 1, 'Pão ', 44, 0, 0),
(50, 1, 1, 1, 'SimCosta', 45, 0, 0),
(51, 2, 9, 1, 'Atacadao', 46, 0, 0),
(52, 1, 2, 1, 'PIS', 47, 0, 0),
(53, 2, 10, 1, 'Leg medicamento Malu ', 48, 0, 0),
(54, 2, 4, 1, 'Gasolina', 49, 0, 0),
(55, 2, 11, 1, 'Luz', 50, 0, 0),
(56, 2, 11, 1, 'Água ', 51, 0, 0),
(57, 2, 11, 1, 'Escolinha Malu', 52, 0, 0),
(58, 2, 9, 1, 'Guanabara', 55, 0, 0),
(59, 2, 15, 1, 'Escolinha Malú', 56, 0, 0),
(60, 1, 1, 1, 'SimCosta', 57, 0, 0),
(61, 1, 1, 1, 'SiMCosta', 58, 0, 0),
(62, 2, 4, 1, 'Gasolina', 59, 0, 0),
(63, 2, 11, 1, 'Atacadao', 60, 0, 0),
(64, 2, 11, 1, 'Corsan', 61, 0, 0),
(65, 2, 11, 1, 'CEEE', 62, 0, 0),
(66, 2, 13, 1, 'Ração dog', 63, 0, 0),
(67, 2, 13, 1, 'Ração cats', 64, 0, 0),
(68, 2, 4, 1, 'Gasolina', 65, 0, 0),
(69, 1, 1, 1, 'SiMCosta', 66, 0, 0),
(70, 2, 9, 1, 'Atacadao', 67, 0, 0),
(71, 2, 4, 1, 'Gasolina', 68, 0, 0),
(72, 2, 12, 1, 'Fralda', 69, 0, 0),
(73, 2, 15, 1, 'Escolinha', 70, 0, 0),
(74, 1, 1, 1, 'SiMCosta', 71, 0, 0),
(75, 2, 9, 1, 'Atadacao ', 72, 0, 0),
(76, 2, 11, 1, 'CEEE', 73, 0, 0),
(77, 2, 11, 1, 'Corsan', 74, 0, 0),
(78, 2, 4, 1, 'Gasolina', 75, 0, 0),
(79, 2, 9, 1, 'Atacadao ', 76, 0, 0),
(80, 2, 4, 1, 'Combustível ', 77, 0, 0),
(81, 2, 15, 1, 'Soma Kids', 78, 0, 0),
(82, 1, 1, 1, 'SimCosta', 79, 0, 0),
(83, 2, 4, 1, 'Ipva', 80, 0, 0),
(84, 2, 9, 1, 'Atacadao ', 81, 0, 0),
(85, 2, 11, 1, 'Corsan', 82, 0, 0),
(86, 2, 11, 1, 'Ceee', 83, 0, 0),
(87, 2, 4, 1, 'Gasolina', 84, 0, 0),
(88, 2, 4, 1, 'Combustivel', 85, 0, 0),
(89, 2, 15, 1, 'Somma Kids', 86, 0, 0),
(90, 2, 11, 1, 'Limpeza do esgoto', 87, 0, 0),
(91, 2, 9, 1, 'Reserva supermercado', 88, 0, 0),
(92, 2, 11, 1, 'Corsan', 89, 0, 0),
(93, 2, 15, 1, 'Escolinha Malu', 90, 0, 0),
(94, 2, 4, 1, 'Garagem', 91, 0, 0),
(95, 2, 11, 1, 'CEEE', 92, 0, 0),
(96, 2, 4, 1, 'Gasolina', 93, 0, 0),
(97, 2, 13, 1, 'Ração pets', 94, 0, 0),
(98, 2, 6, 1, 'Planos de celulares', 95, 0, 0),
(99, 2, 10, 1, 'Medicamentos Sara', 96, 0, 0),
(100, 2, 9, 1, 'Água bambona', 97, 0, 0),
(101, 2, 11, 1, 'Gás cozinha', 98, 0, 0),
(102, 1, 1, 1, 'Água bambona', 99, 0, 0),
(103, 1, 1, 1, 'Guanabara', 100, 0, 0),
(104, 1, 2, 1, 'Guanabara', 101, 0, 0),
(105, 1, 1, 1, 'Escolinha', 102, 0, 0),
(106, 1, 1, 1, 'Carne', 103, 0, 0),
(107, 1, 1, 1, 'Atacadao ', 104, 0, 0),
(108, 1, 1, 1, 'Corsan', 105, 0, 0),
(109, 1, 1, 1, 'CEEE', 106, 0, 0),
(110, 1, 1, 1, 'Guanabara', 107, 0, 0),
(111, 1, 1, 1, 'Panvel', 108, 0, 0),
(112, 1, 1, 1, 'Escolinha material', 109, 0, 0),
(113, 1, 1, 1, 'Festa', 110, 0, 0),
(114, 1, 1, 1, 'Carne festa carnaval', 111, 0, 0),
(115, 2, 11, 1, 'CEEE', 112, 0, 1),
(116, 2, 11, 1, 'Corsan', 113, 0, 1),
(117, 1, 1, 1, 'Quero Quero', 114, 0, 0),
(118, 2, 9, 1, 'Padaria', 115, 0, 0),
(119, 2, 9, 1, 'Sorvete', 116, 0, 0),
(120, 2, 9, 1, 'Atacadao', 117, 0, 0),
(121, 2, 4, 1, 'Gasolina e conveniencias', 118, 0, 0),
(122, 2, 9, 1, 'Balde coxinhas', 119, 0, 0),
(123, 2, 9, 1, 'Casa de carnes', 120, 0, 0),
(124, 2, 11, 1, 'Sara', 121, 0, 0),
(125, 2, 13, 1, 'Ração gatos', 122, 0, 0),
(126, 2, 9, 1, 'Guanabara', 123, 0, 0),
(127, 2, 4, 1, 'Gasolina', 124, 0, 0),
(128, 2, 3, 1, 'Sara', 125, 0, 0),
(129, 2, 15, 1, 'Escolinha Malu', 126, 0, 0),
(130, 2, 9, 1, 'Carne', 127, 0, 0),
(131, 2, 9, 1, 'Guanabara', 128, 0, 0),
(132, 2, 11, 1, 'Pagamentos MEI', 129, 0, 0),
(133, 2, 4, 1, 'IPVA', 130, 0, 0),
(134, 2, 11, 1, 'CEEE', 131, 0, 1),
(135, 2, 11, 1, 'CEEE', 132, 0, 1),
(136, 2, 11, 1, 'CEEE', 133, 0, 1),
(137, 2, 11, 1, 'CEEE', 134, 0, 1),
(138, 2, 11, 1, 'CEEE', 135, 0, 1),
(139, 2, 11, 1, 'CEEE', 136, 0, 1),
(140, 2, 11, 1, 'CEEE', 137, 0, 1),
(141, 2, 11, 1, 'CEEE', 138, 0, 1),
(142, 2, 11, 1, 'CEEE', 139, 0, 1),
(143, 2, 9, 1, 'Fruteira', 140, 0, 0),
(144, 2, 11, 1, 'Água', 141, 0, 1),
(145, 2, 11, 1, 'Água', 142, 0, 1),
(146, 2, 11, 1, 'Água', 143, 0, 1),
(147, 2, 11, 1, 'Água', 144, 0, 1),
(148, 2, 11, 1, 'Água', 145, 0, 1),
(156, 2, 9, 1, 'Guanabara', 153, 0, 0),
(154, 2, 9, 1, 'Lanche', 151, 0, 0),
(155, 2, 10, 1, 'Panvel', 152, 0, 0),
(153, 2, 10, 1, 'Panvel', 150, 0, 0),
(157, 2, 9, 1, 'Guanabara ', 154, 0, 0),
(158, 2, 9, 1, 'Carne', 155, 0, 0),
(159, 2, 9, 1, 'Água ', 156, 0, 0),
(160, 2, 9, 1, 'Big', 157, 0, 0),
(161, 2, 9, 1, 'Açougue ', 158, 0, 0),
(162, 2, 11, 1, 'ferragem', 159, 0, 0),
(163, 2, 11, 1, 'tintas', 160, 0, 0),
(164, 2, 9, 1, 'Casa do confeiteiro', 161, 0, 0),
(165, 2, 9, 1, 'pascoa', 162, 0, 0),
(166, 2, 9, 1, 'Guanabara', 163, 0, 0),
(167, 2, 9, 1, 'Big', 164, 0, 0),
(168, 2, 5, 1, 'Roupa Sara', 165, 0, 0),
(169, 2, 9, 1, 'Big', 166, 0, 0),
(170, 2, 5, 1, 'Roupa Sara', 167, 0, 0),
(171, 2, 13, 1, 'Ração pets', 168, 0, 0),
(172, 2, 9, 1, 'Carne', 169, 0, 0),
(173, 2, 4, 1, 'Garagem', 170, 0, 0),
(174, 2, 15, 1, 'Escolinha Malu ', 171, 0, 0),
(175, 2, 4, 1, 'Gasolina', 172, 0, 0),
(176, 1, 1, 1, 'Salario', 173, 0, 0),
(177, 2, 9, 1, 'Atacadao', 174, 0, 0),
(178, 2, 9, 1, 'Lanche', 175, 0, 0),
(179, 2, 10, 1, 'Dentista Sara', 176, 0, 0),
(180, 2, 10, 1, 'Antibióticos dente Sara', 177, 0, 0),
(181, 2, 12, 1, 'Farmacia', 178, 0, 0),
(182, 2, 3, 1, 'micro teclado', 179, 0, 0),
(183, 2, 9, 1, 'Guanabara', 180, 0, 0),
(184, 2, 5, 1, 'roupa Malu, manta sofá ', 181, 0, 0),
(185, 2, 5, 1, 'Roupas Malu', 182, 0, 0),
(186, 2, 9, 1, 'Bobs', 183, 0, 0),
(187, 2, 6, 1, '', 184, 0, 0),
(188, 2, 9, 1, 'Açougue', 185, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `preco`
--

CREATE TABLE `preco` (
  `preco_id` int(11) NOT NULL,
  `preco` varchar(50) NOT NULL,
  `preco_data` date NOT NULL,
  `busca_data` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `preco`
--

INSERT INTO `preco` (`preco_id`, `preco`, `preco_data`, `busca_data`) VALUES
(4, '18', '2019-08-20', '2019-08'),
(10, '14', '2019-08-20', '2019-08'),
(6, '3000', '2019-08-20', '2019-08'),
(9, '25', '2019-08-20', '2019-08'),
(11, '18', '2019-08-20', '2019-08'),
(15, '180', '2019-08-26', '2019-08'),
(13, '100', '2019-08-25', '2019-08'),
(14, '300', '2019-08-25', '2019-08'),
(16, '160', '2019-08-26', '2019-08'),
(20, '206', '2019-08-26', '2019-08'),
(19, '685', '2019-08-26', '2019-08'),
(21, '18', '2019-08-26', '2019-08'),
(23, '200', '2019-08-26', '2019-08'),
(24, '107', '2019-08-26', '2019-08'),
(26, '1100', '2019-08-02', '2019-08'),
(27, '300', '2019-08-02', '2019-08'),
(28, '485', '2019-08-02', '2019-08'),
(29, '200', '2019-08-02', '2019-08'),
(30, '58', '2019-08-02', '2019-08'),
(31, '12', '2019-08-02', '2019-08'),
(32, '3000', '2019-09-12', '2019-09'),
(33, '850', '2019-09-12', '2019-09'),
(34, '34', '2019-09-18', '2019-09'),
(35, '150', '2019-09-18', '2019-09'),
(36, '96', '2019-09-18', '2019-09'),
(37, '45', '2019-09-18', '2019-09'),
(38, '215', '2019-09-18', '2019-09'),
(39, '160', '2019-09-18', '2019-09'),
(40, '20', '2019-09-18', '2019-09'),
(41, '20', '2019-09-20', '2019-09'),
(42, '50', '2019-10-01', '2019-10'),
(43, '1100', '2019-10-01', '2019-10'),
(44, '5', '2019-10-01', '2019-10'),
(45, '1900', '2019-10-03', '2019-10'),
(46, '770', '2019-10-03', '2019-10'),
(47, '333', '2019-10-04', '2019-10'),
(48, '29.9', '2019-10-04', '2019-10'),
(49, '50', '2019-10-07', '2019-10'),
(50, '185', '2019-10-07', '2019-10'),
(51, '169', '2019-10-07', '2019-10'),
(52, '350', '2019-10-07', '2019-10'),
(56, '350', '2019-11-07', '2019-11'),
(55, '98', '2019-10-20', '2019-10'),
(57, '1900', '2019-11-14', '2019-11'),
(58, '1100', '2019-11-14', '2019-11'),
(59, '100', '2019-11-15', '2019-11'),
(60, '870', '2019-11-15', '2019-11'),
(61, '160', '2019-11-15', '2019-11'),
(62, '201', '2019-11-15', '2019-11'),
(63, '44', '2019-11-15', '2019-11'),
(64, '52', '2019-11-15', '2019-11'),
(65, '50', '2019-11-27', '2019-11'),
(66, '1100', '2019-12-04', '2019-12'),
(67, '870', '2019-12-04', '2019-12'),
(68, '50', '2019-12-04', '2019-12'),
(69, '49', '2019-12-04', '2019-12'),
(70, '20', '2019-12-04', '2019-12'),
(71, '1900', '2019-12-12', '2019-12'),
(72, '215', '2019-12-12', '2019-12'),
(73, '173', '2019-12-12', '2019-12'),
(74, '234', '2019-12-12', '2019-12'),
(75, '50', '2019-12-12', '2019-12'),
(76, '174', '2019-12-14', '2019-12'),
(77, '50', '2019-12-22', '2019-12'),
(78, '165', '2019-12-29', '2019-12'),
(79, '3000', '2020-01-07', '2020-01'),
(80, '360', '2020-01-07', '2020-01'),
(81, '850', '2020-01-07', '2020-01'),
(82, '180', '2020-01-07', '2020-01'),
(83, '122', '2020-01-07', '2020-01'),
(84, '100', '2020-01-07', '2020-01'),
(85, '50', '2020-01-08', '2020-01'),
(86, '385', '2020-01-17', '2020-01'),
(87, '200', '2020-01-22', '2020-01'),
(88, '2000', '2021-02-04', '2021-02'),
(89, '230', '2021-02-04', '2021-02'),
(90, '495', '2021-02-04', '2021-02'),
(91, '180', '2021-02-04', '2021-02'),
(92, '200', '2021-02-04', '2021-02'),
(93, '200', '2021-02-04', '2021-02'),
(94, '250', '2021-02-04', '2021-02'),
(95, '100', '2021-02-04', '2021-02'),
(96, '70', '2021-02-04', '2021-02'),
(97, '60', '2021-02-04', '2021-02'),
(98, '90', '2021-02-04', '2021-02'),
(99, '15', '2021-02-06', '2021-02'),
(100, '80', '2021-02-06', '2021-02'),
(101, '160', '2021-02-08', '2021-02'),
(102, '495', '2021-02-10', '2021-02'),
(103, '145', '2021-02-10', '2021-02'),
(104, '1200', '2021-02-10', '2021-02'),
(105, '230', '2021-02-11', '2021-02'),
(106, '188', '2021-02-11', '2021-02'),
(107, '41', '2021-02-11', '2021-02'),
(108, '41', '2021-02-11', '2021-02'),
(109, '121', '2021-02-11', '2021-02'),
(110, '56', '2021-02-11', '2021-02'),
(111, '45', '2021-02-13', '2021-02'),
(112, '165', '2021-03-06', '2021-03'),
(113, '165', '2021-03-06', '2021-03'),
(114, '8400', '2021-03-06', '2021-03'),
(115, '6', '2021-03-06', '2021-03'),
(116, '28', '2021-03-06', '2021-03'),
(117, '1248', '2021-03-06', '2021-03'),
(118, '60', '2021-03-06', '2021-03'),
(119, '50', '2021-03-06', '2021-03'),
(120, '22', '2021-03-06', '2021-03'),
(121, '250', '2021-03-08', '2021-03'),
(122, '119', '2021-03-09', '2021-03'),
(123, '58', '2021-03-09', '2021-03'),
(124, '25', '2021-03-09', '2021-03'),
(125, '250', '2021-03-09', '2021-03'),
(126, '700', '2021-03-12', '2021-03'),
(127, '81', '2021-03-13', '2021-03'),
(128, '116', '2021-03-13', '2021-03'),
(129, '190', '2021-03-15', '2021-03'),
(130, '500', '2021-03-15', '2021-03'),
(131, '203', '2021-04-15', '2021-04'),
(132, '120', '2021-05-15', '2021-05'),
(133, '120', '2021-06-15', '2021-06'),
(134, '120', '2021-07-15', '2021-07'),
(135, '120', '2021-08-15', '2021-08'),
(136, '120', '2021-09-15', '2021-09'),
(137, '120', '2021-10-15', '2021-10'),
(138, '120', '2021-11-15', '2021-11'),
(139, '120', '2021-12-06', '2021-12'),
(140, '71', '2021-03-16', '2021-03'),
(141, '173', '2021-04-16', '2021-04'),
(142, '130', '2021-05-16', '2021-05'),
(143, '130', '2021-06-16', '2021-06'),
(144, '130', '2021-07-16', '2021-07'),
(145, '130', '2021-08-16', '2021-08'),
(153, '167', '2021-03-18', '2021-03'),
(151, '67', '2021-03-17', '2021-03'),
(152, '84', '2021-03-18', '2021-03'),
(150, '62', '2021-03-17', '2021-03'),
(154, '55', '2021-03-20', '2021-03'),
(155, '66', '2021-03-20', '2021-03'),
(156, '15', '2021-03-20', '2021-03'),
(157, '60', '2021-03-22', '2021-03'),
(158, '72', '2021-03-27', '2021-03'),
(159, '51', '2021-03-27', '2021-03'),
(160, '187', '2021-03-27', '2021-03'),
(161, '75', '2021-03-30', '2021-03'),
(162, '78', '2021-03-30', '2021-03'),
(163, '54', '2021-04-03', '2021-04'),
(164, '80', '2021-04-05', '2021-04'),
(165, '47', '2021-04-05', '2021-04'),
(166, '60', '2021-04-05', '2021-04'),
(167, '20', '2021-04-05', '2021-04'),
(168, '140', '2021-04-05', '2021-04'),
(169, '60', '2021-04-06', '2021-04'),
(170, '180', '2021-04-07', '2021-04'),
(171, '700', '2021-04-07', '2021-04'),
(172, '30', '2021-04-07', '2021-04'),
(173, '8235', '2021-04-07', '2021-04'),
(174, '1388', '2021-04-07', '2021-04'),
(175, '65', '2021-04-07', '2021-04'),
(176, '300', '2021-04-09', '2021-04'),
(177, '38', '2021-04-09', '2021-04'),
(178, '97', '2021-04-10', '2021-04'),
(179, '38', '2021-04-11', '2021-04'),
(180, '40', '2021-04-11', '2021-04'),
(181, '87', '2021-04-14', '2021-04'),
(182, '187', '2021-04-14', '2021-04'),
(183, '10', '2021-04-14', '2021-04'),
(184, '33', '2021-04-14', '2021-04'),
(185, '70', '2021-04-15', '2021-04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `produto_id` int(11) NOT NULL,
  `produto_nome` varchar(200) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `parcelas` int(11) NOT NULL,
  `valor` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`produto_id`, `produto_nome`, `categoria_id`, `parcelas`, `valor`) VALUES
(2, 'CEEE ', 11, 12, '150'),
(3, 'Corsan', 11, 12, '120');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `usuario_nome` varchar(200) NOT NULL,
  `usuario_email` varchar(50) NOT NULL,
  `usuario_senha` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
-- password:  123
--

INSERT INTO `usuario` (`usuario_id`, `usuario_nome`, `usuario_email`, `usuario_senha`) VALUES
(1, 'admin', 'adim@email.com', '202cb962ac59075b964b07152d234b70');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL,
  `usuario_nome` varchar(200) NOT NULL,
  `usuario_email` varchar(50) NOT NULL,
  `usuario_senha` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`categoria_id`),
  ADD KEY `item_categoria` (`classe_id`),
  ADD KEY `preco_id` (`preco_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`classe_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `movimentacao`
--
ALTER TABLE `movimentacao`
  ADD PRIMARY KEY (`movimentacao_id`),
  ADD KEY `preco` (`preco`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `preco`
--
ALTER TABLE `preco`
  ADD PRIMARY KEY (`preco_id`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`produto_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `categoria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `classe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `movimentacao`
--
ALTER TABLE `movimentacao`
  MODIFY `movimentacao_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT for table `preco`
--
ALTER TABLE `preco`
  MODIFY `preco_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `produto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

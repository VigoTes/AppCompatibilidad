-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2023 a las 19:26:08
-- Versión del servidor: 5.7.32-log
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `compatibilidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amistad`
--

CREATE TABLE `amistad` (
  `codAmistad` int(11) NOT NULL,
  `codUsuarioA` int(11) NOT NULL,
  `codUsuarioB` int(11) NOT NULL,
  `indiceObtenido` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `amistad`
--

INSERT INTO `amistad` (`codAmistad`, `codUsuarioA`, `codUsuarioB`, `indiceObtenido`) VALUES
(5, 1, 24, 63),
(6, 25, 1, 7),
(7, 38, 1, 0),
(8, 39, 1, 0),
(9, 40, 1, 0),
(10, 41, 1, 70);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `error_historial`
--

CREATE TABLE `error_historial` (
  `codErrorHistorial` int(11) NOT NULL,
  `codUsuario` int(11) NOT NULL,
  `controllerDondeOcurrio` varchar(100) NOT NULL,
  `funcionDondeOcurrio` varchar(200) NOT NULL,
  `fechaHora` datetime NOT NULL,
  `fechaHoraSolucion` datetime DEFAULT NULL,
  `ipEmpleado` varchar(40) NOT NULL,
  `descripcionError` varchar(55000) NOT NULL,
  `estadoError` tinyint(4) NOT NULL,
  `razon` varchar(200) DEFAULT NULL,
  `solucion` varchar(500) DEFAULT NULL,
  `formulario` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_solicitud_amistad`
--

CREATE TABLE `estado_solicitud_amistad` (
  `codEstado` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `nombreAparente` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado_solicitud_amistad`
--

INSERT INTO `estado_solicitud_amistad` (`codEstado`, `nombre`, `nombreAparente`) VALUES
(1, 'pendiente', 'Pendiente'),
(2, 'aceptada', 'Aceptada'),
(3, 'rechazada', 'Rechazada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenguaje_amor`
--

CREATE TABLE `lenguaje_amor` (
  `codLenguaje` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `nombreAparente` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `codLenguajeBajarSlider` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lenguaje_amor`
--

INSERT INTO `lenguaje_amor` (`codLenguaje`, `nombre`, `nombreAparente`, `descripcion`, `codLenguajeBajarSlider`) VALUES
(1, 'tiempo_calidad', 'Tiempo de calidad', '', 2),
(2, 'contacto_fisico', 'Contacto Físico', '', 3),
(3, 'actos_servicio', 'Actos de servicio', '', 4),
(4, 'regalos', 'Regalos', '', 5),
(5, 'palabras_afirmacion', 'Palabras de afirmacion', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logeo_historial`
--

CREATE TABLE `logeo_historial` (
  `codLogeoHistorial` int(11) NOT NULL,
  `fechaHora` datetime NOT NULL,
  `codUsuario` int(11) NOT NULL,
  `ip` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parametro_sistema`
--

CREATE TABLE `parametro_sistema` (
  `codParametro` int(11) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `valor` varchar(1000) NOT NULL,
  `fechaHoraCreacion` datetime NOT NULL,
  `fechaHoraBaja` datetime DEFAULT NULL,
  `fechaHoraActualizacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuacion_lenguaje`
--

CREATE TABLE `puntuacion_lenguaje` (
  `codPuntuacionLenguaje` int(11) NOT NULL,
  `puntajeDar` int(11) NOT NULL,
  `puntajeRecibir` int(11) NOT NULL,
  `codUsuario` int(11) NOT NULL,
  `codLenguaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntuacion_lenguaje`
--

INSERT INTO `puntuacion_lenguaje` (`codPuntuacionLenguaje`, `puntajeDar`, `puntajeRecibir`, `codUsuario`, `codLenguaje`) VALUES
(46, 25, 0, 24, 1),
(47, 0, 42, 24, 2),
(48, 20, 58, 24, 3),
(49, 0, 0, 24, 4),
(50, 55, 0, 24, 5),
(51, 0, 1, 25, 1),
(52, 28, 65, 25, 2),
(53, 37, 34, 25, 3),
(54, 35, 0, 25, 4),
(55, 0, 0, 25, 5),
(56, 0, 0, 26, 1),
(57, 0, 0, 26, 2),
(58, 0, 0, 26, 3),
(59, 0, 0, 26, 4),
(60, 0, 0, 26, 5),
(61, 0, 0, 27, 1),
(62, 0, 0, 27, 2),
(63, 0, 0, 27, 3),
(64, 0, 0, 27, 4),
(65, 0, 0, 27, 5),
(66, 0, 19, 28, 1),
(67, 8, 23, 28, 2),
(68, 26, 13, 28, 3),
(69, 23, 5, 28, 4),
(70, 43, 40, 28, 5),
(71, 0, 0, 29, 1),
(72, 0, 0, 29, 2),
(73, 0, 0, 29, 3),
(74, 0, 0, 29, 4),
(75, 0, 0, 29, 5),
(76, 0, 72, 30, 1),
(77, 0, 2, 30, 2),
(78, 0, 0, 30, 3),
(79, 31, 4, 30, 4),
(80, 69, 22, 30, 5),
(81, 0, 0, 31, 1),
(82, 19, 24, 31, 2),
(83, 81, 76, 31, 3),
(84, 0, 0, 31, 4),
(85, 0, 0, 31, 5),
(86, 0, 28, 32, 1),
(87, 0, 0, 32, 2),
(88, 11, 39, 32, 3),
(89, 89, 7, 32, 4),
(90, 0, 26, 32, 5),
(91, 0, 11, 33, 1),
(92, 23, 33, 33, 2),
(93, 77, 23, 33, 3),
(94, 0, 33, 33, 4),
(95, 0, 0, 33, 5),
(96, 51, 0, 34, 1),
(97, 0, 82, 34, 2),
(98, 0, 3, 34, 3),
(99, 0, 0, 34, 4),
(100, 49, 15, 34, 5),
(101, 0, 0, 35, 1),
(102, 0, 0, 35, 2),
(103, 0, 0, 35, 3),
(104, 0, 0, 35, 4),
(105, 0, 0, 35, 5),
(106, 0, 0, 36, 1),
(107, 2, 0, 36, 2),
(108, 48, 33, 36, 3),
(109, 50, 67, 36, 4),
(110, 0, 0, 36, 5),
(111, 50, 50, 37, 1),
(112, 50, 50, 37, 2),
(113, 0, 0, 37, 3),
(114, 0, 0, 37, 4),
(115, 0, 0, 37, 5),
(116, 0, 0, 38, 1),
(117, 0, 0, 38, 2),
(118, 0, 0, 38, 3),
(119, 0, 0, 38, 4),
(120, 0, 0, 38, 5),
(121, 0, 0, 39, 1),
(122, 0, 0, 39, 2),
(123, 0, 0, 39, 3),
(124, 0, 0, 39, 4),
(125, 0, 0, 39, 5),
(126, 0, 0, 40, 1),
(127, 0, 0, 40, 2),
(128, 0, 0, 40, 3),
(129, 0, 0, 40, 4),
(130, 0, 0, 40, 5),
(131, 50, 50, 41, 1),
(132, 20, 50, 41, 2),
(133, 0, 0, 41, 3),
(134, 0, 0, 41, 4),
(135, 0, 0, 41, 5),
(136, 50, 50, 1, 1),
(137, 0, 0, 1, 2),
(138, 0, 0, 1, 3),
(139, 0, 0, 1, 4),
(140, 50, 50, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `codRol` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`codRol`, `nombre`) VALUES
(1, 'Admin'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala_dupla`
--

CREATE TABLE `sala_dupla` (
  `codSala` int(11) NOT NULL,
  `indiceObtenido` int(11) NOT NULL,
  `codUsuarioA` int(11) NOT NULL,
  `codUsuarioB` int(11) DEFAULT NULL,
  `codigoUnico` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_amistad`
--

CREATE TABLE `solicitud_amistad` (
  `codSolicitud` int(11) NOT NULL,
  `codUsuarioEmisor` int(11) NOT NULL,
  `codUsuarioReceptor` int(11) NOT NULL,
  `codEstado` int(11) NOT NULL,
  `fechaHoraEmision` datetime NOT NULL,
  `fechaHoraAceptacion` datetime DEFAULT NULL,
  `fechaHoraRechazo` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitud_amistad`
--

INSERT INTO `solicitud_amistad` (`codSolicitud`, `codUsuarioEmisor`, `codUsuarioReceptor`, `codEstado`, `fechaHoraEmision`, `fechaHoraAceptacion`, `fechaHoraRechazo`) VALUES
(1, 38, 1, 2, '2023-02-01 04:55:49', '2023-02-01 05:54:44', NULL),
(3, 39, 1, 2, '2023-02-01 05:55:32', '2023-02-01 05:55:48', NULL),
(4, 40, 1, 3, '2023-02-01 05:56:32', '2023-02-01 05:57:24', '2023-02-01 05:58:16'),
(6, 1, 36, 1, '2023-02-01 17:24:55', NULL, NULL),
(7, 41, 1, 2, '2023-02-01 17:32:37', '2023-02-01 17:35:08', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `codUsuario` int(11) NOT NULL,
  `dni` varchar(10) DEFAULT NULL,
  `usuario` varchar(200) NOT NULL,
  `password` varchar(500) NOT NULL,
  `nombres` varchar(300) DEFAULT NULL,
  `apellidos` varchar(300) DEFAULT NULL,
  `codRol` int(11) NOT NULL,
  `verificado` int(11) NOT NULL,
  `codigoUnico` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`codUsuario`, `dni`, `usuario`, `password`, `nombres`, `apellidos`, `codRol`, `verificado`, `codigoUnico`) VALUES
(1, '71208489', 'admin', '$2y$10$eYaebX38eMUNIzu4rHgafuWdvwOcOjsxOiXd4rev0Cjfefcb0E5J.', 'Diego Ernesto', 'Vigo Briones', 1, 0, ''),
(24, NULL, 'usuario2', '$2y$10$xltSGDoyeChbzeoYDp6OzOZEq8fVljS9cJILILYgT2CF94Nnq3QHC', NULL, NULL, 2, 0, '24_63d951ea9fd8d'),
(25, NULL, 'asddsadsa', '$2y$10$xCH7Isgq0IbYJzJMdPKGmu8JkeDmS6RoH4cjnLBwnDInzX/YlBwXu', NULL, NULL, 2, 0, '25_63d95233e27d2'),
(26, NULL, 'awdwad', '$2y$10$O5qQ6GRSqlTlXLZe8gFzsueoX.n5We/cHmV/LmTvq2GdXOu3sQkTm', NULL, NULL, 2, 0, '26_63d95dfed2874'),
(27, NULL, 'awd', '$2y$10$OkGCaAcnWKLLLisA6gBeO.WWmj26cSXJZMksPj16bKkuDGbbdKzvi', NULL, NULL, 2, 0, '27_63d95e6db7d34'),
(28, NULL, 'wadwdawdawda', '$2y$10$IWOzz8pTsbNbupZo8eFlp.VEJQNAiHCMP0l2zIEeKhA402MuWMJNm', NULL, NULL, 2, 0, '28_63d95e8015015'),
(29, NULL, 'awd', '$2y$10$RyoYHzoC8KoKCxvmOkDkO.iIFVWTcjrKZ8HjvNg5SLOZn1mUtJFV6', NULL, NULL, 2, 0, '29_63d95f226d719'),
(30, NULL, 'awddwawda', '$2y$10$qewYW.DbRXQ8nbUl.4Zp1ehADDd29eossqPxMCAC2F.0Choe3cwUy', NULL, NULL, 2, 0, '30_63d95f27bb1fb'),
(31, NULL, 'awd125', '$2y$10$ojaP0RvlyOgqnPFBTbX21ubZmkI98Emxd2X/OrunoLQQwMbNyaChW', NULL, NULL, 2, 0, '31_63d9603930234'),
(32, NULL, 'awdwdaawd', '$2y$10$.sED3D1.GdeZ4lbGlFGz.uTPPy6Pmmm1/G5mrCELyPVFGosm9oi1y', NULL, NULL, 2, 0, '32_63d970dea6ff3'),
(33, NULL, 'awdadwdawwadwad', '$2y$10$tqfDWvpVRdc4BGqxBNywaOO549lrjWUC3QMLZu3dVLbMPmD/ywnF2', NULL, NULL, 2, 0, '33_63d98bd24e58e'),
(34, NULL, 'awdwad2', '$2y$10$vTMgCN/iPw4rQ0UcTJupKOZNIwB9ziA/47mpEPA.u6Mw5OP533TkG', NULL, NULL, 2, 0, '34_63d98ca0d2a55'),
(35, NULL, 'awdwad2', '$2y$10$okOTeqwBlu5/fhKLNlW7kup2b5fv/QJHQp3Da7evpnePeKCwxfD5e', NULL, NULL, 2, 0, '35_63d98cba414c3'),
(36, NULL, 'awdadw', '$2y$10$Y8RsMGtHl6o8xh8UtTbyIuPBudLORENnGVXN/kJiL42E769xbw3Ya', NULL, NULL, 2, 0, '36_63d9be11be0c2'),
(37, NULL, 'uihasiuhdas', '$2y$10$xnYE.vEnE/qt4yqeYgk/7OckEd52icrB9q07YABztJH14wIdUNqH2', NULL, NULL, 2, 0, '37_63d9dc0130278'),
(38, NULL, 'asd', '$2y$10$.PybCtnXwOvOcxoA77uEgu9ZKZ/X1luDLSxDkuJeQwIprsiyMtR.S', NULL, NULL, 2, 0, '38_63d9dda4ae983'),
(39, NULL, 'user2', '$2y$10$BmTgu.IVxg.afOUh.6JBVeoN2dwfLrmQVeO/H5M2NvgVy21CWqMye', NULL, NULL, 2, 0, '39_63d9fec99e702'),
(40, NULL, 'user3', '$2y$10$RQyzVgQLPrI/Dqm9hQKOGOO0oa9sk47UBD261evTZw4NejK3qUb1i', NULL, NULL, 2, 0, '40_63d9ff0679ded'),
(41, NULL, 'usuario5', '$2y$10$k9gcOT.RgI3922HfCY98BuE1ioLszQI0LTVIqEuQZnV5KqwNi4nAm', NULL, NULL, 2, 0, '41_63daa21f117ff');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `amistad`
--
ALTER TABLE `amistad`
  ADD PRIMARY KEY (`codAmistad`),
  ADD UNIQUE KEY `amistad_unica` (`codUsuarioA`,`codUsuarioB`),
  ADD KEY `FK_amistad_usuarioB` (`codUsuarioB`);

--
-- Indices de la tabla `error_historial`
--
ALTER TABLE `error_historial`
  ADD PRIMARY KEY (`codErrorHistorial`),
  ADD KEY `error_usuario_relacion` (`codUsuario`);

--
-- Indices de la tabla `estado_solicitud_amistad`
--
ALTER TABLE `estado_solicitud_amistad`
  ADD PRIMARY KEY (`codEstado`);

--
-- Indices de la tabla `lenguaje_amor`
--
ALTER TABLE `lenguaje_amor`
  ADD PRIMARY KEY (`codLenguaje`),
  ADD KEY `FK_lenguaje_slider_bajar` (`codLenguajeBajarSlider`);

--
-- Indices de la tabla `logeo_historial`
--
ALTER TABLE `logeo_historial`
  ADD PRIMARY KEY (`codLogeoHistorial`),
  ADD KEY `logeo_usuario_relacion` (`codUsuario`);

--
-- Indices de la tabla `parametro_sistema`
--
ALTER TABLE `parametro_sistema`
  ADD PRIMARY KEY (`codParametro`);

--
-- Indices de la tabla `puntuacion_lenguaje`
--
ALTER TABLE `puntuacion_lenguaje`
  ADD PRIMARY KEY (`codPuntuacionLenguaje`),
  ADD KEY `FK_puntuacion_lenguaje_lenguaje` (`codLenguaje`),
  ADD KEY `FL_puntuacion_lenguaje_usuario` (`codUsuario`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`codRol`);

--
-- Indices de la tabla `sala_dupla`
--
ALTER TABLE `sala_dupla`
  ADD PRIMARY KEY (`codSala`),
  ADD KEY `FK_sala_dupla_usuario_A` (`codUsuarioA`),
  ADD KEY `FK_sala_dupla_usuario_B` (`codUsuarioB`);

--
-- Indices de la tabla `solicitud_amistad`
--
ALTER TABLE `solicitud_amistad`
  ADD PRIMARY KEY (`codSolicitud`),
  ADD KEY `FK_solicitud_usuarioA` (`codUsuarioEmisor`),
  ADD KEY `FK_solicitud_usuarioB` (`codUsuarioReceptor`),
  ADD KEY `FK_solicitud_estado` (`codEstado`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codUsuario`),
  ADD KEY `usuario_rol_relacion` (`codRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amistad`
--
ALTER TABLE `amistad`
  MODIFY `codAmistad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `error_historial`
--
ALTER TABLE `error_historial`
  MODIFY `codErrorHistorial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado_solicitud_amistad`
--
ALTER TABLE `estado_solicitud_amistad`
  MODIFY `codEstado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `lenguaje_amor`
--
ALTER TABLE `lenguaje_amor`
  MODIFY `codLenguaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `logeo_historial`
--
ALTER TABLE `logeo_historial`
  MODIFY `codLogeoHistorial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `parametro_sistema`
--
ALTER TABLE `parametro_sistema`
  MODIFY `codParametro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `puntuacion_lenguaje`
--
ALTER TABLE `puntuacion_lenguaje`
  MODIFY `codPuntuacionLenguaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `codRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sala_dupla`
--
ALTER TABLE `sala_dupla`
  MODIFY `codSala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `solicitud_amistad`
--
ALTER TABLE `solicitud_amistad`
  MODIFY `codSolicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `codUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `amistad`
--
ALTER TABLE `amistad`
  ADD CONSTRAINT `FK_amistad_usuarioA` FOREIGN KEY (`codUsuarioA`) REFERENCES `usuario` (`codUsuario`),
  ADD CONSTRAINT `FK_amistad_usuarioB` FOREIGN KEY (`codUsuarioB`) REFERENCES `usuario` (`codUsuario`);

--
-- Filtros para la tabla `error_historial`
--
ALTER TABLE `error_historial`
  ADD CONSTRAINT `error_usuario_relacion` FOREIGN KEY (`codUsuario`) REFERENCES `usuario` (`codUsuario`);

--
-- Filtros para la tabla `lenguaje_amor`
--
ALTER TABLE `lenguaje_amor`
  ADD CONSTRAINT `FK_lenguaje_slider_bajar` FOREIGN KEY (`codLenguajeBajarSlider`) REFERENCES `lenguaje_amor` (`codLenguaje`);

--
-- Filtros para la tabla `logeo_historial`
--
ALTER TABLE `logeo_historial`
  ADD CONSTRAINT `logeo_usuario_relacion` FOREIGN KEY (`codUsuario`) REFERENCES `usuario` (`codUsuario`);

--
-- Filtros para la tabla `puntuacion_lenguaje`
--
ALTER TABLE `puntuacion_lenguaje`
  ADD CONSTRAINT `FK_puntuacion_lenguaje_lenguaje` FOREIGN KEY (`codLenguaje`) REFERENCES `lenguaje_amor` (`codLenguaje`),
  ADD CONSTRAINT `FL_puntuacion_lenguaje_usuario` FOREIGN KEY (`codUsuario`) REFERENCES `usuario` (`codUsuario`);

--
-- Filtros para la tabla `sala_dupla`
--
ALTER TABLE `sala_dupla`
  ADD CONSTRAINT `FK_sala_dupla_usuario_A` FOREIGN KEY (`codUsuarioA`) REFERENCES `usuario` (`codUsuario`),
  ADD CONSTRAINT `FK_sala_dupla_usuario_B` FOREIGN KEY (`codUsuarioB`) REFERENCES `usuario` (`codUsuario`);

--
-- Filtros para la tabla `solicitud_amistad`
--
ALTER TABLE `solicitud_amistad`
  ADD CONSTRAINT `FK_solicitud_estado` FOREIGN KEY (`codEstado`) REFERENCES `estado_solicitud_amistad` (`codEstado`),
  ADD CONSTRAINT `FK_solicitud_usuarioA` FOREIGN KEY (`codUsuarioEmisor`) REFERENCES `usuario` (`codUsuario`),
  ADD CONSTRAINT `FK_solicitud_usuarioB` FOREIGN KEY (`codUsuarioReceptor`) REFERENCES `usuario` (`codUsuario`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_rol_relacion` FOREIGN KEY (`codRol`) REFERENCES `rol` (`codRol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

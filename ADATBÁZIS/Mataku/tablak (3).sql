DROP TABLE IF EXISTS `eltunt`;
CREATE TABLE `eltunt` (
  `sor` int(11) NOT NULL,
  `hely` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `mikor` date NOT NULL
) ;

DROP TABLE IF EXISTS `kutya`;
CREATE TABLE `kutya` (
  `sor` int(11) NOT NULL,
  `fajta` varchar(200) COLLATE utf8_hungarian_ci NOT NULL,
  `nem` varchar(200) COLLATE utf8_hungarian_ci NOT NULL,
  `kor` int(11) NOT NULL,
  `neve` varchar(200) COLLATE utf8_hungarian_ci NOT NULL
) ;

ALTER TABLE `eltunt`
  ADD PRIMARY KEY (`sor`);

ALTER TABLE `kutya`
  ADD PRIMARY KEY (`sor`);

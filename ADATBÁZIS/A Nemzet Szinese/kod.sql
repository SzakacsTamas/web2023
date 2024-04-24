\C latin2
DROP DATABASE nemzet;
CREATE DATABASE nemzet DEFAULT CHARSET utf8 COLLATE=utf8_hungarian_ci;

USE nemzet;

SELECT * FROM szinesz WHERE valasztas ="2000-08-22" ORDER BY nev;

SELECT * FROM szinesz WHERE valasztas =2000 ORDER BY nev;
\C latin2
DROP DATABASE varosok;
CREATE DATABASE varosok DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE varosok;

SELECT vnev FROM varos WHERE vnev LIKE "%vásár%";

SELECT vnev,nepesseg,terulet FROM varos WHERE terulet>400 ORDER BY nepesseg DESC;

SELECT vnev,nepesseg from varos Inner join megye on megyeid=megye.id where mnev="Fejér" AND nepesseg>15000;

SELECT vtip AS "Város Típusa", COUNT(varos.id) AS "Városok száma",SUM(nepesseg) AS "Népesség" from varostipus innerjoin varos on varostipus.id=vtipid;
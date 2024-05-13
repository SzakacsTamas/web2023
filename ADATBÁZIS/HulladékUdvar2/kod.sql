\C latin2
DROP DATABASE hulladekudvar;
CREATE DATABASE hulladekudvar DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE hulladekudvar;

SELECT kerulet,cim FROM hely INNER JOIN gyujt on helyid=hely.id INNER JOIN fajtaid=fajta.id WHERE nev="gumiabroncs"

SELECT * FROM hely WHERE kerulet IN ("I.","II.","III.","XI.","XII.","XXII.")
\C latin2
DROP DATABASE forma1;
CREATE DATABASE forma1 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE forma1;

/*tabla*/

/*adatok*/

/*3.Feldat*/
CREATE INDEX pnev ON pilotak (pnev);

/*5 Feladat*/
SELECT * FROM versenyek WHERE vnev="Német Nagydij";
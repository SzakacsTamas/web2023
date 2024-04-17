\C latin2
DROP DATABASE forma1;
CREATE DATABASE forma1 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE forma1;

/*tabla*/

/*adatok*/

/*3.Feldat*/
CREATE INDEX pnev ON pilotak (pnev);

/*5 Feladat*/

SELECT * FROM versenyek WHERE vnev LIKE "N%";
DELETE FROM versenyek WHERE vnev LIKE "N%";
/*6*/
UPDATE versenyek SET hely="Sao Paolo" WHERE vnev="Brazil Nagydíj";

/*7*/
SELECT pnev, COUNT(pazon) AS gyozelem FROM pilotak JOIN eredmenyek ON pazon=pilota WHERE celpoz=1
GROUP BY pazon ORDER BY 2 LIMIT 1;
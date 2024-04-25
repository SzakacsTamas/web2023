\C latin2
DROP DATABASE diafilmek;
CREATE DATABASE diafilmek DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE diafilmek;

/*tabla*/

/*adatok*/

/*
2.feladat 

*/
SELECT cim, kiadasnev FROM film WHERE kiadasnev > 2000 ORDER BY cim;

/*3 Feladat*/
SELECT cim,kocka,kiadasiev FROM film WHERE cim LIKE "%farkas%";
/*azért kell a %% hogyha bárhol előfordul*/

/*4 feladat*/
SELECT DISTINCT nev FROM film JOIN kiado on kiadoid=kiado.id 
WHERE cim LIKE "%sicc%";
/*DISTINCT az hogy csak egyszer szerepeljen*/

/*5 feladat*/
SELECT cim,COUNT(*) FROM film GROUP BY cim ORDER BY 2 DESC LIMIT 1;
/*DESC csokkeno*/
/* 6 feladat*/
SELECT kiadasiev,COUNT(*) FROM film WHERE kiadasiev!=0 GROUP BY kiadasiev ORDER BY 2 DESC;
/*<> NEM Egyenlő*/

/*7 feladat*/
SELECT DISTINCT film.cim FROM film JOIN film AS film2 ON film.cim=film2.cim
 WHERE film.szinese AND NOT film2.szinese;




\C latin2
DROP DATABASE nagykonyv;
CREATE DATABASE nagykonyv DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE nagykonyv;

SELECT DISTINCT nemzetiseg FROM szerzo WHERE nemzetiseg!= "magyar";

SELECT nev, 2005-szulev as kor FROM szerzo WHERE halEv IS NULL;

SELECT nev FROM szerzo WHERE nemzetiseg ="magyar";

SELECT nev,cim,helyezes FROM szerzo inner join konyv ON szerzoid=szerzo.id WHERE nemzetiseg="magyar" GROUP BY nev ORDER by legjobb;
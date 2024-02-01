mysql -u root

CREATE DATABASE tanulok DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

USE tanulok;

CREATE TABLE tanulok(nev VARCHAR(20); szuletesnap DATE(20); magassag VARCHAR(170); suly VARCHAR(100));

INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Béla",2011-08-02,162,44-5);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Pisti",2012-04-27,154,73-7);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Julcsi",2011-07-13,159,69-6);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Karcsi",2011-11-22,189,58-4);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Marcsi",2012-04-28,166,44-5);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Alehandó",2011-08-01,145,44-5);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Hürrem",2012-08-17,172,44-5);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Alex",2012-08-25,148,44-5);
INSERT INTO tanulok(nev,szuletesnap,magassag,suly) VALUES("Sanyi",2011-08-05,170,44-5);


DROP DATABASE 
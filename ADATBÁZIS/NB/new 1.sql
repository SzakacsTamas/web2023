CREATE DATABASE kezbesito DEFAULT CHARSET utf8 collate=utf8_hungarian_ci;
USE kezbesito;

SELECT SUM(lap.eves) FROM lap,elofizetes,elofizeto WHERE lap.id=lapid AND eloid=elofizeto.id AND utca="Bodor utca" AND hazszam="13";

SELECT cim, 12*havi-eves as kedvezmeny FROM lap ;
DROP DATABASE nyiltnap;
CREATE DATABASE nyiltnap default charset=utf8 collate=utf8_hungarian_ci;

USE nyiltnap;

CREATE TABLE tantargy (id int(10)AUTO_INCREMENT PRIMARY KEY,nev VARCHAR(50));

CREATE TABLE oktato (id int(10)AUTO_INCREMENT PRIMARY KEY,nev VARCHAR(50));

CREATE TABLE agazat (id int(10)AUTO_INCREMENT PRIMARY KEY,nev VARCHAR(50));

CREATE TABLE oktato2tantargy (id int(10)AUTO_INCREMENT PRIMARY KEY,oktatoid int,tantargyid int);

CREATE TABLE osztaly2agazat (id int(10)AUTO_INCREMENT PRIMARY KEY,osztalyid int,agazatid int);

CREATE TABLE osztaly (id int(10)AUTO_INCREMENT PRIMARY KEY,evfolyam int,betujel VARCHAR(10),osztalyfonokid int);

CREATE TABLE idopont (id int(10)AUTO_INCREMENT PRIMARY KEY,datum DATE,ora int,osztalyid int, oktato2tantargy int);


Óra	Osztály/csoport	ágazat/tagozat	tantárgy	oktató	osztályfőnök	dátum
1.	9.D	informatika és távközlés	informatikai és távközlési alapok	Böndicz János	Molnár Bernadett	2023.11.27. (B hét hétfő)


CREATE TABLE eredeti(
	id int (10) AUTO_INCREMENT PRIMARY KEY,
	ora int (10),
	osztaly VARCHAR(50),
	agazat VARCHAR(50),
	tantargy VARCHAR(50),
	oktato VARCHAR(50),
	osztalyfonok VARCHAR(50);
	dátum DATE,
	
	
);

INSERT INTO eredeti(ora,osztaly,agazat,tantargy,oktato,ofo,datum)
VALUES ("1","9.H","gimnázium","földrajz ","Vránicsné Bődi Ildikó ","","2023.11.27."),
("1","9.C","egészségügy","Történelem","Sudár István Ákos","","2023.11.27."),
("1","9.C","gazd. és menedzsment","Történelem","Sudár István Ákos","","2023.11.27."),
("1","12.B1","gépészet","Műszaki számítások","Kovács István","","2023.11.27."),
("1","9.D","informatika és távközlés","informatikai és távközlési alapok","Böndicz János","Molnár Bernadett","2023.11.27."),
("1","11B","oktatás","testnevelés","Jüngling-Czotter Éva","","2023.11.27."),
("2","10.h","gimnázium","fizika","Gelencsér Szabolcsné","","2023.11.27."),
("2","11.H","gimnázium","angol","Dr. Horváth Andrea","2023.11.27."),
("2","9.H","gimnázium","angol","Hauptman Henrik","","2023.11.27."),
("2","10.B","egészségügy","Gyógyszertani alapismeretek","Horváth Veronika","Hauptman Henrik","2023.11.27."),
("2","9.C","gazd. és menedzsment","német nyelv","Papné K. Ildikó","","2023.11.27."),
("2","12.B1","gépészet","CAD rajzolás","Szakács Ibolya","","2023.11.27."),
("2","12.C","informatika és távközlés","Irodalom","Hornyák Katalin","","2023.11.27."),
("2","10.C","oktatás","Értékteremtő gyermeknevelés","Sipos Margit Erika","","2023.11.27."),
("3","7.H","gimnázium","matematika","Tóth Ágnes Katalin","","2023.11.27."),
("3","7.H","gimnázium","matematika","Déri Ildikó","","2023.11.27."),
("3","10B","egészségügy","matematika","Molnár Bernadett","Hauptman Henrik","2023.11.27."),
("3","10C","oktatás","matematika","Molnár Bernadett","Hauptman Henrik","2023.11.27."),
("3","10.C","gazd. és menedzsment","matematika","Fodor Írisz","","2023.11.27."),
("3","12B1","gépészet","testnevelés","Balogh Zsuzsanna","","2023.11.27."),
("3","9.D","informatika és távközlés","informatikai és távközlési alapok","Böndicz János","Molnár Bernadett","2023.11.27."),
("3","9.B","oktatás","Tanulás tanulása","Sipos Margit Erika","","2023.11.27."),
("4","11.H","gimnázium","Irodalom","Csehné Varga Csilla Mária","","2023.11.27."),
("4","11B","egészségügy","biológia","Dergez-Mohari Katalin","","2023.11.27."),
("4","11C","egészségügy","biológia","Dergez-Mohari Katalin","","2023.11.27."),
("4","10.C","gazd. és menedzsment","testnevelés","Jüngling-Czotter Éva","","2023.11.27."),
("4","9.B","gépészet","fizika","Gelencsér Szabolcsné","","2023.11.27."),
("4","12C","informatika és távközlés","testnevelés","Madarász Péter","Madarász Péter","2023.11.27."),
("4","9.B","oktatás","Játékos személyiségfejlesztés","Sipos Margit Erika","","2023.11.27."),
("1","8.H","gimnázium","angol nyelv","Páva Zoltánné/","","2023.11.28."),
("1","8.H","gimnázium","német","Füstösné Cs. Katalin","","2023.11.28."),
("1","10.C","egészségügy","szakmai óra","Bogdánné Basa Eszter","","2023.11.28."),
("1","10.C","gazd. és menedzsment","Gazdasági és jogi alapismeretek","Horváthné Bali Mónika","","2023.11.28."),
("1","13.TG","gépészet","Gyártástervezés és gyártásirányítás","Szakács Lehel","","2023.11.28."),
("1","10.B","informatika és távközlés","IKT projektmunka","Papp Péter","Hauptman Henrik","2023.11.28."),
("1","10.C","oktatás","pedagógiai gyakorlat","Perger péterné","","2023.11.28."),
("2","8H","gimnázium","testnevelés","Balogh Zsuzsanna","","2023.11.28."),
("2","10.B","egészségügy","Emberitest működése","Horváth Veronika","Hauptman Henrik","2023.11.28."),
("2","10.C","gazd. és menedzsment","Gazdasági és jogi alapismeretek","Horváthné Bali Mónika","","2023.11.28."),
("2","9.B","gépészet","Gépészeti alapismeretek","Kovács István","","2023.11.28."),
("2","11C","informatika és távközlés","fizika","Mesterné Subicz Erika","","2023.11.28."),
("2","9.C","oktatás","pedagógiai gyakorlat","Nagy Istvánné","","2023.11.28."),
("3","10H","gimnázium","testnevelés ","Jüngling Márton ","","2023.11.28."),
("3","9.C","egészségügy","testnevelés ","Vránicsné Bődi Ildikó ","","2023.11.28."),
("3","10.C gazd. és menedzsment","vállalkozási ismeretek testnevelés ","Némethné Kalocsai Krisztina 2023.11.28."),
("3"," 9.C","gazd. és menedzsment","vállalkozási ismeretek testnevelés ","Vránicsné Bődi Ildikó ","","2023.11.28."),
("3","9.B","gépészet","Gépészeti alapismeretek","Kovács István","","2023.11.28."),
("3","11.C","informatika és távközlés","Szakmai angol","Hauptman Henrik","","2023.11.28."),
("3","9.B","oktatás","Zenei nevelés","Nagy Istvánné","","2023.11.28."),
("4","9.H / 2. ","gimnázium","angol nyelv","Galambfalvi Rozália","","2023.11.28."),
("4","9.H / 2. ","gimnázium","francia nyelv","Bácskay Annamária","","2023.11.28."),
("4","10.B","egészségügy","Komplex klinikai szimulációs gyakorlat","Bogdánné Basa Eszter","Hauptman Henrik","2023.11.28."),
("4","9.C","gazd. és menedzsment","Komplex természettudomány","Vojkovics Gábor","","2023.11.28."),
("4","9.B","gépészet","Gépészeti alapismeretek","Kovács István","","2023.11.28."),
("4"," 10.B","informatika és távközlés"," Informatikai alapismeretek"," Böndicz János","Hauptman Henrik","2023.11.28."),
("4","-","oktatás","-","-","","2023.11.28."),
("1","7.H","gimnázium","Etika","Bácskay Annamária","Tóth Ágnes Katalin","2023.11.29. "),
("1","10.B","egészségügy","biológia","Bárdosi Erika","Hauptman Henrik","2023.11.29. "),
("1","12.D","gazd. és menedzsment","matematika Vállalkozások működtetése","Tóth Ágnes Katalin","","2023.11.29. "),
("1","10.C","gazd. és menedzsment","matematika Vállalkozások működtetése","Némethné Kalocsai Krisztina","","2023.11.29. "),
("1","9.B","gépészet","német nyelv","Heizler Erika","","2023.11.29. "),
("1","10.B informatika és távközlés","Programozási alapok Hálózatok","Papp Péter","Hauptman Henrik","2023.11.29. "),
("1","12.C","informatika és távközlés","Programozási alapok Hálózatok","Mészáros Róbert","Madarász Péter","2023.11.29. "),
("1","10.C","oktatás","Értékteremtő gyermeknevelés","Sipos Margit Erika","","2023.11.29. "),
("2","9.H","gimnázium","kémia","Dergez-Mohari Katalin","","2023.11.29. "),
("2","10.B","egészségügy","angol Páva Zoltánné Hauptman Henrik","2023.11.29. "),
("2","10.C","egészségügy","német","Papné Kigyósi Ildikó","Horváthné Bali Mónika","2023.11.29. "),
("2","10.B","gazd. és menedzsment","angol","Bárdosi Erika","Hauptman Henrik","2023.11.29. "),
("2","10.C","gazd. és menedzsment","német","Papné Kigyósi Ildikó"","Hauptman Henrik","2023.11.29. "),
("2"," -","gépészet"," -"," -","","2023.11.29. "),
("2","9.D","informatika és távközlés","fizika","Mesterné Subicz Erika","Molnár Bernadett","2023.11.29. "),
("2","10.B","oktatás","angol Páva Zoltánné 2023.11.29. "),
("2","10.C","oktatás","német Papné Kigyósi Ildikó","","2023.11.29. "),
("3","9H","gimnázium","testnevelés","Vojkovics Gábor","","2023.11.29. "),
("3","9.C","egészségügy","történelem","Sudár István Ákos","","2023.11.29. "),
("3","10.C","gazd. és menedzsment","Vállalkozások működtetése","Némethné Kalocsai Krisztina","","2023.11.29. "),
("3","12.B1","gépészet","Automatizálás","Szakács Lehel Sándor","","2023.11.29. "),
("3","10.B","informatika és távközlés","matematika","Fodor Írisz","Hauptman Henrik","2023.11.29. "),
("3","9.D","informatika és távközlés","programozási alapok","Török Bálint","Molnár Bernadett","2023.11.29. "),
("3","10.B","oktatás","matematika","Molnár Bernadett","Hauptman Henrik","2023.11.29. "),
("3","10.C","oktatás","matematika","Molnár Bernadett","Hauptman Henrik","2023.11.29. "),
("4","7.H","gimnázium","Nyelvtan","Szabóné Haluskay Ágnes","","2023.11.29. "),
("4","10.C","egészségügy","Irodalom","Takács Orsolya Réka","","2023.11.29. "),
("4","11.D","gazd. és menedzsment","Számvitel","Némethné Kalocsai Krisztina","","2023.11.29. "),
("4","9.B","gépészet","Történelem","Török Bálint","","2023.11.29. "),
("4","9D","Gépészeti alapismeret","testnevelés","Vojkovics Gábor","Molnár Bernadett","2023.11.29. "),
("4","9.B","oktatás","Történelem","Török Bálint","","2023.11.29. "),
("4","12.C","informatika és távközlés","IKT Projektmunka,","Mészáros róbert","Madarász Péter","2023.11.29. ");

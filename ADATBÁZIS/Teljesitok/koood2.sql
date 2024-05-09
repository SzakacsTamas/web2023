\C latin2
DROP DATABASE teljesitok;
CREATE DATABASE teljesitok DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
USE teljesitok;

/*tabla*/

/*adatok*/

SELECT nev FROM teljesitok WHERE nevelotag="ifj.";
SELECT teljesites.nev,telepules.nev,orszag FROM teljesites join telepules on telepulesid=telepules.id WHERE orszag<>"" AND datum;


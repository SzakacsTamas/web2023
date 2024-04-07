function tablaKeszit(){
  const t=document.getElementById("tabla");
  
  for(let i=0;i<40;i++){
    let mezo=document.createElement("div");
    mezo.id="m"+i;
    //mezo.innerHTML=mezo.id;
    t.appendChild(mezo);
  }
}
let kovetkezoEmber=0;

function init(){
  tablaKeszit();
  for(let i=0; i<jatekosok.length;i++){
    
    jatekosok[i].ugorjIde(0);
  }
  jatekosok[kovetkezoEmber].next();
  /*
  for(let i=0; i<jatekosok.length;i++)
  {
    setTimeout(function(){jatekosok[i].ugorjIde(kocka())},1000);
    break;
  }
  */
  //setTimeout(function(){jatekosok[0].ugorjIde(kocka())},1000);
  //setTimeout(function(){jatekosok[1].ugorjIde(4)},2000);

}


let dobottKor = 1; // változó a jelenlegi körben már dobott játékosok követésére
let korokSzama=0;
function dobas() {
  
    if (dobottKor>0) { // csak akkor dobhat, ha még nem dobott ebben a körben
        let dobottErtek = kocka();
        
        jatekosok[kovetkezoEmber].lepjElore(dobottErtek);
        dobottKor -=1; // beállítjuk, hogy már dobott ebben a körben
        document.getElementById("dobas").innerHTML ="Dobásaid száma: "+dobottKor;
    } else {
        console.log("Már dobott a játékos ebben a körben!");
        
    }
}

function valtasKovetkezoEmberre() {
    if (dobottKor===0) { // csak akkor váltunk a következő játékosra, ha már legalább egyszer dobott
        jatekosok[kovetkezoEmber].unnext(); // előző játékos "leveszése"
        kovetkezoEmber++; // következő játékosra váltás
        
        document.getElementById("aktivEsemeny").innerHTML = '';//LEVESZEM A VIZUÁLIS MEGJELENitest
        
        if (kovetkezoEmber >= jatekosok.length) {
            kovetkezoEmber = 0; // visszatérés az első játékostól, ha már mindenki dobott
        }
        jatekosok[kovetkezoEmber].next(); // következő játékos kiválasztása
        korokSzama+=1;
        dobottKor = 1; // új kör kezdődött, visszaállítjuk az állapotot
        document.getElementById("dobas").innerHTML ="Dobásaid száma: "+dobottKor;
        console.dir(korokSzama)
    } else {
        console.log("Még nem dobott a játékos ebben a körben!");
    }
}

function kocka(){
  let szam=Math.floor(Math.random() * 6 + 1);
  return szam;
}

class jatekos {
    constructor(nev, karakter,penz) {
      this.nev = nev;
      this.karakter = karakter;
      this.penz=penz;

      const kep=document.createElement("div");
      kep.classList.add("jatekos");
      kep.classList.add(this.karakter);
      this.kep=kep;
      
      

    }
  
  unnext(){
    this.kep.classList.remove("aktualis");
    
    
    

  }
    next(){
      this.kep.classList.add("aktualis");
      
      //adatokProgram.classList.add(jatekos);
      //ITT LEHET MEGVÁLTOZTATNI A KIIRATOTT ADATOKAT
      document.getElementById("nev").innerHTML = this.nev;
      document.getElementById("penz").innerHTML="Egyenleg: "+this.penz+"Ft";
      document.getElementById("dobas").innerHTML ="Dobásaid száma: "+dobottKor;
      //document.getElementById("ikon").innerHTML = '<img src="">';
      
      console.log(this.nev)
      
      
    }
    
    lepjElore(mennyit){
      let ujpoz=this.pozicio+mennyit;
      if(ujpoz>39){
        ujpoz-=40;
      }
      this.ugorjIde(ujpoz);

    }


    ugorjIde(hova) {
      if (this.pozicio !== undefined) {
          let elozoMezo = document.getElementById("m" + this.pozicio);
          elozoMezo.removeChild(this.kep);
      }
      //ITT ÁLL
      this.pozicio = hova;
      let kovetkezoMezo = document.getElementById("m" + this.pozicio);
      kovetkezoMezo.appendChild(this.kep);

      // MEZŐ VIZSGÁLATA
      switch (hova) {
        /* AZ ALAP AMI MINDENHOVA KELL, X HELYÉRE A MEZŐ SORSZÁMA
        case x:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
        */
          //CASE MEZO : ESEMÉNY, VIZUÁLIS MEGJELENités
              case 1:
              this.penz -= 1000; 
              //document.getElementById("aktivEsemeny").innerHTML = '<img src="esemenyek/27.png">';
              document.getElementById("aktivEsemeny").innerHTML = '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
              
              document.getElementById("penz").innerHTML="Egyenleg: "+this.penz+"Ft";
              break;
              //SZERENCSEKARTYA
              case 2:
                case 9:
                  case 15:
                    case 22:
                      case 31:
                        case 35:
                          //A TÖKELETES KÓD
                          document.getElementById("aktivEsemeny").innerHTML = '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                          
                          myFunction();
              case 3:
              document.getElementById("aktivEsemeny").innerHTML = '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
              case 4:
                document.getElementById("aktivEsemeny").innerHTML =
                 '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
              case 5:
                  document.getElementById("aktivEsemeny").innerHTML =
                  '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                      case 6:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 7:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 8:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 10:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 11:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 12:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 13:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 14:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
                       case 16:
              document.getElementById("aktivEsemeny").innerHTML =
               '<div id="esemeny' + hova + '" class="esemenyKartya"></div>';
              
            
              
              
        
      }
      //document.getElementById("aktivEsemeny").innerHTML = '<div id="esemeny'+hova+'" class="esemenyKartya"></div>';

      
  }
  }


const jatekosok=[];

jatekosok[0]=new jatekos(prompt("Kérem adja meg a(z) 1. játékos nevét"),"figura1",75000)
jatekosok[1]=new jatekos(prompt("Kérem adja meg a(z) 2. játékos nevét"),"figura2",75000)
jatekosok[2]=new jatekos(prompt("Kérem adja meg a(z) 3. játékos nevét"),"figura3",75000)
jatekosok[3]=new jatekos(prompt("Kérem adja meg a(z) 4. játékos nevét"),"figura4",75000)

/*
let jatekosokSzama = parseInt(prompt("Kérem, adja meg a játékosok számát:"));

if (!isNaN(jatekosokSzama)) {
    const jatekosok = [];

    for (let i = 0; i < jatekosokSzama; i++) {
        let nev = prompt("Kérem adja meg a(z) " + (i + 1) + ". játékos nevét:");
        jatekosok.push(new jatekos(nev, "figura" + (i + 1), 75000));
    }


*/

let timeout;
                          function myFunction() {
                            timeout = setTimeout(alertFunc, 500);
                          }
                          function alertFunc() {
                            alert("Hello!");
                          }

  
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
function rollDice() {
  
    if (dobottKor>0) { // csak akkor dobhat, ha még nem dobott ebben a körben
        let dobottErtek = kocka();
        
        jatekosok[kovetkezoEmber].lepjElore(dobottErtek);
        dobottKor -=1; // beállítjuk, hogy már dobott ebben a körben
        document.getElementById("dobas").innerHTML ="Dobásaid száma: "+dobottKor;
    } else {
        console.log("Már dobott a játékos ebben a körben!");
        
    }
}

function switchToNextPlayer() {
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
          //CASE MEZO : ESEMÉNY, VIZUÁLIS MEGJELENités
              case 1:
              this.penz -= 1000; 
              document.getElementById("aktivEsemeny").innerHTML = '<img src="penzek/500.png">';
              document.getElementById("penz").innerHTML="Egyenleg: "+this.penz+"Ft";
              break;
              //SZERENCSEKARTYA
              case 2:
                case 9:
                  case 15:
                    case 22:
                      case 31:
                        case 35:
                          document.getElementById("aktivEsemeny").innerHTML = '<img src="penzek/500.png">';

          
        
      }

      
  }
  }


const jatekosok=[];

jatekosok[0]=new jatekos("Tomi","figura1",75000)
jatekosok[1]=new jatekos("Petya","figura2",75000)
jatekosok[2]=new jatekos("Gabi","figura3",75000)
jatekosok[3]=new jatekos("Jazmin","figura4",75000)



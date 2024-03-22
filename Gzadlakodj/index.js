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


  
function kocka(){
  console.dir("asdasd")

  let szam=Math.floor(Math.random() * 6+1)
  jatekosok[kovetkezoEmber].lepjElore(szam);
  


  jatekosok[kovetkezoEmber].unnext();
  //setTimeout(function(){alert("készen vagy?")},1000);
  kovetkezoEmber++;
  if(kovetkezoEmber>=jatekosok.length){
    kovetkezoEmber-=jatekosok.length;
  }
  jatekosok[kovetkezoEmber].next();
  
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
      let adatokProgram=document.getElementById("adatok");
      //adatokProgram.classList.add(jatekos);
      document.getElementById("nev").innerHTML = this.nev;
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
      if(this.pozicio==undefined){
        //ITT ÁLL
        this.pozicio=hova;
        
        let kovetkezo=document.getElementById("m"+this.pozicio);
        kovetkezo.appendChild(this.kep);
      }
      else{
        let elozo=document.getElementById("m"+this.pozicio);
        elozo.removeChild(this.kep);
        this.pozicio=hova;
        let kovetkezo=document.getElementById("m"+this.pozicio);
        kovetkezo.appendChild(this.kep);
      }

    }
  }


const jatekosok=[];

jatekosok[0]=new jatekos("Tomi","figura1",75000)
jatekosok[1]=new jatekos("Petya","figura2",75000)
jatekosok[2]=new jatekos("Gabi","figura3",75000)
jatekosok[3]=new jatekos("Jazmin","figura4",75000)
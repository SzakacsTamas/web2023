var kepekurl = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",

];
var pardb = 4;
var kattintas = 0;
function init()
{
    kepkirakas();
}
function kepkirakas()
{
    let asztal = document.getElementById("asztal");

    let kartyak = [];

    for(let j = 0; j < 2; j++)
    {
        for(let i = 0; i < pardb; i++)
        {
            let uj = document.createElement("div");
            uj.className = "kartya";
            uj.onclick = function(){
                if (kattintas < 2 &&
                     typeof uj.dataset.felforditva!=="undifined"&&  uj.dataset.felforditva!="true")
                {
                    uj.style.backgroundImage = "url(kepek/" + kepekurl[i] + ")";
                    uj.dataset.felforditva = "true";
                   
                    kattintas++;
                }
                
                if (kattintas === 2)
                {
                    setTimeout(visszafordit, 2000);
                }
            };
            
            kartyak.push(uj);
        }
    }

    kartyak = kever(kartyak);

    for(let i = 0; i < kartyak.length; i++)
    {
        asztal.appendChild(kartyak[i]);
    }
}   

function visszafordit()
{
    const lapok = document.getElementById("asztal").children;
    const aktiv = [];
    for (let i = 0; i < lapok.length; i++)
    {
        if (lapok[i].dataset.felforditva === "true")
        {
            aktiv.push(lapok[i]);
        }
    }
    if (aktiv[0].style.backgroundImage !== aktiv[1].style.backgroundImage)
    {
        aktiv[0].style.backgroundImage = "";
        aktiv[1].style.backgroundImage = "";
    }
    else
    {
        aktiv[0].onclick = "";
        aktiv[1].onclick = "";
        if (!vanemeg())
        {
            nyertel();
        }
    }
    aktiv[0].dataset.felforditva = "";
    aktiv[1].dataset.felforditva = "";

    kattintas = 0;
}

function nyertel()
{
    let uj = doucment.createElement("div");
    uj.innerHTML = "Game over";

    
}

function vanemeg()
{
    let db = 0;
    const lapok = document.getElementById("asztal").children;
    for (let i = 0; i < lapok.length; i++)
    {
        if (lapok[i].style.backgroundImage === "")
        {
            db++;
        }
    }
    return db > 0;
}

function kever(points) 
{
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  return points;
}
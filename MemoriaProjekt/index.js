var kepekUrl=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]


var parDb = 4;
var kattintas=0

function init()
{
    kepKirakas();
}

function kepKirakas()
{
    
    let asztal = document.getElementById("asztal");

    let kartyak = [];

    for(let k = 0; k < 2; k++)
    {
        for(let i=0; i < parDb;i++)
        {
            /*let uj = document.createElement("img");
            uj.src="kepek/" + kepekUrl[i];
            asztal.appendChild(uj);
            */

            let uj = document.createElement("div");
            uj.className="kartya";
            uj.onclick=function(){uj.style.backgroundImage="url(kepek/" + kepekUrl[i] + ")"};
            //asztal.appendChild(uj);
            kartyak.push(uj);

        }
    }
    kartyak=kever(kartyak);

    for(let i=0; i < kartyak.length; i++)
    {
    asztal.appendChild(kartyak[i]);
    }
    
}

function kever(points) {

    for (let i = points.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = points[i];
      points[i] = points[j];
      points[j] = k;
    }

    return points;
}
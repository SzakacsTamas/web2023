var kepekUrl=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]


function init(){
    kepKirakas();
}

function kepKirakas(){
    let asztal=document.getElementById("asztal");
    for(let k=0;k<2;k++)    
        for(let i=0;i<kepekUrl.length;i++){
            /*
            let uj=document.createElement("img");


            uj.src="kepek/"+ kepekUrl[i];
            asztal.appendChild(uj);
            */
            let uj=document.createElement("div");

            uj.className="kartya"; //div class="kartya"
            uj.style.backgroundImage="url(kepek/"+ kepekUrl[i]+")";
            asztal.appendChild(uj);
            
        }
   
}

function kever(){
    
}
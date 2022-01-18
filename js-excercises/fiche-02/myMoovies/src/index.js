// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
// This is the entry point to your app : add all relevant import and custom code


import image1 from '../src/img/image1.jpg';
import image2 from '../src/img/image2.jpg';
let main=document.querySelector("#main");
let img1 = document.createElement("img");
let img2 = document.createElement("img");
let div1= document.createElement("div");
let p1 = document.createElement("p");
let div2= document.createElement("div");
let p2 = document.createElement("p");
img1.src=image1;
img1.alt="image 1";
img2.src=image2;
img2.alt="image 2";
img2.height=img1.height;
p1.innerHTML="image 1";
p2.innerHTML="image 2";

div1.appendChild(img1);
div2.appendChild(img2);
div1.appendChild(p1);
div2.appendChild(p2);
main.appendChild(div1);
main.appendChild(div2);

/*
let valider=document.getElementById("valider");
let suivant=document.getElementById("suivant");
valider.addEventListener("click", calcul);
suivant.addEventListener("click", calcul);
let running=true;
let timer=10;

let myVar = setInterval(function () {
    document.querySelector('#time').textContent = timer % 60;

    if (--timer < 0) {
        document.querySelector('#timer').textContent="end";
    }
}, 1000);

function calcul(){
    if(running){
        clearInterval(myVar);
        running=false;
    }
    else{
        timer=10;
        myVar = setInterval(function () {
            document.querySelector('#time').textContent = timer % 60;
        
            if (--timer < 0) {
                document.querySelector('#timer').textContent="end";
            }
        }, 1000);
        running=true;
    }
}
*/
/*
let btn1=document.getElementById("message");
btn1.addEventListener("click", calcul);
let running=true;

let myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementById("message").innerHTML = t;
}

function calcul(){
    if(running){
        clearInterval(myVar);
        running=false;
    }
    else{
        myVar = setInterval(myTimer, 1000);
        running=true;
    }
}

function chrono(){

}*/
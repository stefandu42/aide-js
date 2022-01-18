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
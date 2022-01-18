// Import Bootstrap CSS
import { computeStyles } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

// This is the entry point to your app : add all relevant import and custom code
let line = document.querySelector("#lines");
let column = document.querySelector("#columns");
let initial = document.querySelector("#initial");
let submit = document.querySelector("#submit");
let div = document.querySelector("#table");

function creerArray(){
    const numberOfRows = line.value;
    const numberOfColumns = column.value;
    const myTab = [];
    for (let x = 0; x < numberOfRows; x++) {
        myTab[x] = [];
        for (let y = 0; y < numberOfColumns; y++) {
            myTab[x].push(initial.value + "[" + x + "][" + y + "]");
        }
    }
    return myTab;
}

function afficheArray(){
    let tab =creerArray();
    let table = document.createElement("table");
    for(let x=0; x<tab.length; x++){
        let tr = document.createElement("tr");
        for(let y=0; y< tab[x].length; y++){
            let th = document.createElement("th");
            th.innerHTML=tab[x][y];
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
    return table;
}


function checkValidity(){
    if(isNaN(line.value) || line.value<=0){
        return false;
    }
    else if(isNaN(column.value) || column.value<=0){
        return false;
    }
    else{
        return true;
    }
}

function run(e){
    let isValide = checkValidity();
    
    if(isValide){
        let table = afficheArray();
        div.appendChild(table);
    }
    e.preventDefault();
}


submit.addEventListener("click",run);

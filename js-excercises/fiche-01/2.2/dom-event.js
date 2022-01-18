let btn= document.querySelector("#button");
let compteur= document.querySelector("#compteur");
let message= document.querySelector("#message");
let compt=0;

function onClickHandlerForBtn() {
    compt++;
    compteur.innerText = compt;
    if(compt===5){
        message.innerText = "Bravo, bel échauffement !";
    }
    else if(compt===10){
        message.innerText = "Vous êtes passé maître en l’art du clic !";
    }
}
    

btn.addEventListener("click", onClickHandlerForBtn);
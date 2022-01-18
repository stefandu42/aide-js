// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

const RECT_NUMBER = 101;

let myCanvas = document.querySelector("canvas");
let myContext = myCanvas.getContext("2d");
let page = document.querySelector("#page");
// set the canvas dimensions
let pageWidth = page.clientWidth;
let pageHeight = page.clientHeight;
myCanvas.width = pageWidth;
myCanvas.height = pageHeight;
let estActif = true;
let couleur="blue";

// call the callback to draw our animation when the browser is ready
let animation = requestAnimationFrame(drawOneFrame);
let tailleCarre = 20;

function drawOneFrame() {
  // Reset everything done in the previous frame
  // We could force the width or height of canvas to force a redraw myCanvas.width = pageWidth;myCanvas.height = pageHeight;
  // however that would not be optimized.
  myContext.clearRect(0, 0, pageWidth, pageHeight);

  myContext.fillStyle = couleur; //'rgba(255,0,0,0.5)';//'blue';

  //draw dynamically the rectangles at random locations
  for (let i = 0; i < RECT_NUMBER; i++) {
    myContext.fillRect(
      Math.floor(Math.random() * pageWidth-20),
      Math.floor(Math.random() * pageHeight),
      tailleCarre,
      tailleCarre
    );
  }
  // Refresh automatically the animation via this recursive call :
  animation = requestAnimationFrame(drawOneFrame);

  // Slow the animation down via setTimeout
  //requestAnimationFrame(() => setTimeout(drawOneFrame,1000));
}

function gererLAnimation(){
  if(estActif){
    cancelAnimationFrame(animation);
    estActif=false;
  }
  else{
    animation = requestAnimationFrame(drawOneFrame);
    estActif=true;
  }
}


function redimensionnerTaille(e) {
  if(e.key==="+" && tailleCarre<=Number.MAX_VALUE){
    tailleCarre++;
  }
  if(e.key==="-" && tailleCarre>5){
    tailleCarre--;
  }
}

function changerCouleurAnimation(e) {
  e.preventDefault();
  let red = Math.floor(Math.random() * 256); // [0,255]
  let green = Math.floor(Math.random() * 256); // [0,255]
  let blue = Math.floor(Math.random() * 256); // [0,255]
  couleur="rgba("+red+","+green+","+blue+")";
}

myCanvas.addEventListener("click", gererLAnimation);
window.addEventListener('keydown', redimensionnerTaille);
window.addEventListener('contextmenu', changerCouleurAnimation);
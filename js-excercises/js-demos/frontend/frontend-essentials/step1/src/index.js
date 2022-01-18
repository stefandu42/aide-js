import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/style.css";

// load an analog clock
import { AnalogClock } from "customizable-analog-clock";
// const { AnalogClock } = require ("customizable-analog-clock"); // Node syntax require() would also work
import logo from "./img/js-logo.png";
import music from "./sound/Infecticide-11-Pizza-Spinoza.mp3";

const stopStartSound = () => {
  const myAudioPlayer = document.querySelector("#audioPlayer");

  if (myAudioPlayer.paused) myAudioPlayer.play();
  else myAudioPlayer.pause();
};

const header = document.querySelector("header");
header.addEventListener("click", stopStartSound);

// Create the audio and load the file via webpack file-loader
const myPlayer = `<audio id="audioPlayer" controls autoplay>
        <source
          src="${music}"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>`;

const main = document.querySelector("main");
main.innerHTML += myPlayer;

// the Webpack file-loader recognise /src/img/js-logo.png as local file and replace
//"./image/js-logo.png" with the final path to the image in the output directory (/dist)
const footerPhoto = new Image();
footerPhoto.src = logo;
footerPhoto.src = logo;
footerPhoto.height = 50;
const footer = document.querySelector("footer");
footer.appendChild(footerPhoto);

// add a wrapper for the clock
main.innerHTML += `  <br><br><div 
                          id="my-clock"                          
                          style="width: 200px; height: 200px;"  
                          class="mx-auto"                       
                      </div>`;
// create and attach the clock to the wrapper (#my-clock)
const clock = new AnalogClock({
  htmlElement: "my-clock",
  showIndicators: true,
});

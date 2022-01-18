// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
// Import Anime.js
import anime from 'animejs/lib/anime.es.js';

"use strict";

let propeller = document.getElementById("propeller");

// start with aligning the lift & propeller in the center of the page content

let animation = anime({
  //here you specify your targeted element through CSS selector syntax
  targets: "#propeller", //propeller,
  rotate: "360",
  //duration in ms to make one iteration
  duration: 1000,
  //number of iterations or true for indefinitely
  loop: true,
  //don't start automatically the animation
  autoplay: false,
  easing: "linear",
});

//mouseenter event is more convenient than mouseover in order not to restart the animation spuriously after a click
propeller.addEventListener("mouseenter", function () {
  // start the animation
  console.log("mouseenter:", anime.running.length);
  animation.play();
});

propeller.addEventListener("click", function (e) {
  // pause the rotation animation
  animation.pause();
  // inflate our propeller

  anime({
    //here you specify your targeted element through CSS selector syntax
    targets: "#propeller",
    scale: "360",
    //duration in ms to make one iteration
    duration: 1000,
    scale: 2,
    //start automatically the animation
    autoplay: true,
    //to go from scale x2 back and forth
    direction: "alternate",
    //number of iterations or true for indefinitely
    loop: true,
    easing: "linear",
  });
});

document.addEventListener("keydown", function (e) {
  //for the sake of the demo, we have used a simple animation to create a propeller
  if (e.code === "ArrowUp") {
    //the animation to go up has to be inside the click event in order to start from a relative correct position
    //if the animation is declared globally, it will always start to translate from the same position
    //don't start the animation if no other animation is running
    if (anime.running.length != 0) {
      anime({
        targets: "#lift",
        translateY: "-=50",
        //duration in ms to make one iteration
        duration: 1000,
        autoplay: true,
        easing: "linear",
      });
    }
  }

  if (e.code === "ArrowDown") {
    if (anime.running.length != 0) {
      anime({
        targets: "#lift",
        translateY: "+=50",
        //duration in ms to make one iteration
        duration: 1000,
        autoplay: true,
        easing: "linear",
      });
    }
  }
});


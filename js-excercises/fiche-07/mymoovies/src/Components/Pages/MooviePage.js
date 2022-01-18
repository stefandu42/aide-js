import Film from "../../Domain/Film";
import FilmLibrary from "../../Domain/FilmLibrary";
import { Redirect } from "../Router/Router";
import { getSessionObject } from "../../utils/session";

const mooviePage = `
<div class="text-center">
  <h3>Moovies</h3>

  <p>Here you can find all moovies</p>

  <div id="printMoovies"></div>
  
</div>`;

async function getFilms (){
  try {
    const filmsResponse = await fetch("/api/films");
    if(!filmsResponse.ok){
      throw new Error("fetch error: "+response.status+" : "+response.statusText);
    }
    const filmsData = await filmsResponse.json();
    return filmsData;
  } catch (error) {
    console.error("MooviePage::error : ",error);
  }
}

let myFilmLibrary;

// const films= getFilms(); // get films renvoie une promesse, c'est une fonction asynchrone !
getFilms().then((films) => {
  myFilmLibrary = new FilmLibrary(films);
});


const MooviePage = async () => {
  const main = document.querySelector("main");
  main.innerHTML = mooviePage;
  const printMoovies = document.querySelector("#printMoovies");
  printMoovies.innerHTML = await myFilmLibrary.getHtmlTable();
};

export default MooviePage;

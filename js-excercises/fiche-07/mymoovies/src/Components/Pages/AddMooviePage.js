import Film from "../../Domain/Film";
import FilmLibrary from "../../Domain/FilmLibrary";
import { Redirect } from "../Router/Router";
import { getSessionObject } from "../../utils/session";

const mooviePage = `
<div class="text-center">
  <h3>Moovies</h3>

  <p>Here you can add moovies and find all moovies</p>

  <form class="px-5">
            <div class="mb-3">
              <label for="title">Enter title</label>
              <input
                class="form-control"
                type="text"
                name="title"
                id="title"
                required
              />
            </div>
            <div class="mb-3">
              <label for="duration">Enter duration (minutes)</label>
              <input
                class="form-control"
                type="number"
                name="duration"
                id="duration"
                required
              />
            </div>
            <div class="mb-3">
              <label for="budget">Enter budget (million)</label>
              <input
                class="form-control"
                type="number"
                name="budget"
                id="budget"
                required
              />
            </div>
            <div class="mb-3">
              <label for="link">Enter link</label>
              <input
                class="form-control"
                type="url"
                name="link"
                id="link"
                required
              />
            </div>
            <input type="submit" class="btn btn-primary" value="Add Moovie" />
    </form>
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
  let user = getSessionObject("user");
  if (!user) {
    Redirect("/login");
  }
  else{
    const main = document.querySelector("main");
    main.innerHTML = mooviePage;
    const myForm = document.querySelector("form");
    const printMoovies = document.querySelector("#printMoovies");
    printMoovies.innerHTML = await myFilmLibrary.getHtmlTable();

    myForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      try {
        const options= {
          method: "POST",
          body: JSON.stringify({
            title: title.value,
            duration: duration.value,
            budget: budget.value,
            link: link.value
          }),
          headers:{
            "Content-Type": "application/json",
            Authorization: user.token,
          },
        };
        
        const response = await fetch("/api/films",options);

        if(!response.ok){
          throw new Error("fetch error: "+response.status+" : "+response.statusText);
        }

        const film = await response.json(); //keep if necessary the film added

        
        myFilmLibrary.addFilm(film);   
        printMoovies.innerHTML = myFilmLibrary.getHtmlTable();
        // clear form inputs
        myForm.reset();
        
      } catch (error) {
        console.error("MooviePage");
      }
      
    });
  }
};

export default MooviePage;

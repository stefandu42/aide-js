import default_texts from "../../Domain/default_texts";

const texts_library = new default_texts();

/**
 * Render the HomePage
 */

const toRender = () => {
  let page = ` 
  <div class = "container mt-5">
    <select name="difficulte" id="difficulte">
      <option value="default">Veuillez choisir un niveau</option>
      <option id="facile" value="facile">facile</option>
      <option value="moyen">moyen</option>
      <option value="difficile">difficile</option>
    </select>
    <div class="alert alert-info mt-2" role="alert" id="texteARecopier">
      Le texte à dactylographier sera repris ici une fois le niveau sélectionné.
    </div>

    <textarea id="textUtilisateur" name="textUtilisateur" rows="15" cols="80" disabled>
      
    </textarea>
  <div>`;
  return page;
};

const HomePage = () => {
  const pageDiv = document.querySelector("#page");

  pageDiv.innerHTML = toRender();

  let difficultes = document.getElementById("difficulte");
  let champsText = document.getElementById("textUtilisateur");
  let textARecopier = document.getElementById("texteARecopier");

  difficultes.addEventListener("change", function () {
    let value = difficultes.value;
    if(value!=="default"){
      champsText.disabled=false;
      champsText.value="";
      let text = texts_library.selectRandomText(value);
      textARecopier.innerHTML=text.content;
    }
    else{
      champsText.disabled=true;
      textARecopier.innerHTML="Le texte à dactylographier sera repris ici une fois le niveau sélectionné.";
    }
  });

  
};

export default HomePage;

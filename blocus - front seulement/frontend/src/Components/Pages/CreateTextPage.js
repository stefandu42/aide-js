import default_texts from "../../Domain/default_texts";

const texts_library = new default_texts();


/**
 * Render the HomePage
 */

 const toRender = () => {
    let page =` 
    <div class = "container mt-5">
      <form id="formulaire">
        <p><textarea id="textUtilisateur" name="textUtilisateur" rows="15" cols="80"></textarea></p>

        <select name="difficulte" id="difficulte">
            <option value="default">Veuillez choisir un niveau</option>
            <option value="facile">facile</option>
            <option value="moyen">moyen</option>
            <option value="difficule">difficile</option>
        </select>

        <p><button type="submit" class="btn btn-primary mt-2" id="submit">Envoyer</button></p>

        <div class="alert alert-info mt-2" role="alert">
            Statut opération
        </div>
  
      </form>
        
    <div>`;
    return page;
  }

const CreateTextPage = () => { 
    
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = toRender();
    let ajouterButton = document.getElementById("submit");
    let level = document.getElementById("difficulte");
    let text = document.getElementById("textUtilisateur");
    let formulaire = document.getElementById("formulaire");

    ajouterButton.addEventListener("click",e =>{
        e.preventDefault();
        if(level.value!=="default"){
            texts_library.addText(text.value,level.value);
            formulaire.reset();
        }
            
    })
  };
  
  export default CreateTextPage;
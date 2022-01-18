const { parse, serialize } = require("../utils/json");
const jsonDbPath = __dirname + "/../data/films.json";
const films=[
    {
        id: 1,
        titre: "Spiderman 2",
        duration: 132,
        budget: 120000,
        link: "https://www.fakeid1.com",
    },
    {
        id: 2,
        titre: "X-Men",
        duration: 121,
        budget: 150000,
        link: "https://www.fakeid2.com",
    },
    {
        id: 3,
        titre: "Fast and furious 7",
        duration: 201,
        budget: 300000,
        link: "https://www.fakeid3.com",
    },
];

class Films{
    constructor(dbPath = jsonDbPath,defaultItems = films){
        this.jsonDbPath=dbPath;
        this.listFilms=defaultItems;
    }

    getNextId() {
        const films= parse(this.jsonDbPath,this.listFilms);
        let nextId;
        if (films.length === 0) nextId = 1;
        else nextId = films[films.length - 1].id + 1;
    
        return nextId;
      }

    getAll(minimum_duration){
        const films= parse(this.jsonDbPath,this.listFilms);
        if(minimum_duration===undefined){
            return films;
        }
        else{
            const tab= [];
            films.forEach(function(item){
                if(item.duration>=minimum_duration){
                    tab.push(item);
                }
            });
            return tab;
        }
    }
    
    getId(id){
        const films= parse(this.jsonDbPath,this.listFilms);
        const foundIndex = films.findIndex((film) => film.id == id);
        if (foundIndex < 0) return;

        return films[foundIndex];
    }
    


    addOne(body){
        const films= parse(this.jsonDbPath,this.listFilms);
        // add new pizza to the menu
        const newFilm = {
            id: this.getNextId(),
            titre: body.titre,
            duration: body.duration,
            budget: body.budget,
            link: body.link,
        };
        films.push(newFilm);
        serialize(this.jsonDbPath,films);
        return newFilm;
    }

    deleteOne(id) {
        const films= parse(this.jsonDbPath,this.listFilms);
        const foundIndex = films.findIndex((film) => film.id == id);
        if (foundIndex < 0) return;
        const itemRemoved = films.splice(foundIndex, 1); //supprime de la liste, à partir de foudIndex, 1 element
        serialize(this.jsonDbPath,films);
        return itemRemoved[0]; // renvoie le premier élément de la liste des supprimé, car il pourrait y en avoir plusieurs
      }

    updateOne(id, body) {
        const films= parse(this.jsonDbPath,this.listFilms);
        const foundIndex = films.findIndex((film) => film.id == id);
        if (foundIndex < 0) return;
        // create a new object based on the existing film - prior to modification -
        // and the properties requested to be updated (those in the body of the request)
        // use of the spread operator to create a shallow copy and repl
        const updatedFilm = { ...films[foundIndex],...body };
        // replace the film found at index : (or use splice)
        films[foundIndex] = updatedFilm;
        serialize(this.jsonDbPath,films);
        return updatedFilm;
    }

}

module.exports = { Films };
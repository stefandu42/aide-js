var express = require("express");
var router = express.Router();

// Starting pizza menu
const menu = [
  {
    id: 1,
    title: "4 fromages",
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    title: "Vegan",
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    title: "Vegetarian",
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    title: "Alpage",
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    title: "Diable",
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];

// GET /pizzas : read all the pizzas from the menu
router.get("/", function (req, res) {
  console.log("GET /pizzas");
  return res.json(menu);
});

// GET /pizzas/{id} : Get a pizza from its id in the menu
router.get("/:id", function (req, res) {
  console.log(`GET /pizzas/${req.params.id}`);

  const foundIndex = menu.findIndex((pizza) => pizza.id == req.params.id);
  // Send an error code '404 Not Found' if the pizza was not found
  if (foundIndex < 0) return res.status(404).end();

  return res.json(menu[foundIndex]);
});

// POST /pizzas : create a pizza to be added to the menu.
router.post("/", function (req, res) {
  console.log("POST /pizzas");

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty('title') && req.body.title.length === 0) ||
    (req.body.hasOwnProperty('content')  && req.body.content.length === 0)
  )
    return res.status(400).end();

  // get next id
  let nextId;
  if (menu.length === 0) nextId = 1;
  else nextId = menu[menu.length - 1].id + 1;

  // add new pizza to the menu
  const newPizza = {
    id: nextId,
    title: req.body.title,
    content: req.body.content,
  };

  
  menu.push(newPizza);
  // return the new pizza
  return res.json(newPizza);
});

// DELETE /pizzas/{i} : delete a pizza from the menu
router.delete("/:id", function (req, res) {
  console.log(`DELETE /pizzas/${req.params.id}`);

  const foundIndex = menu.findIndex((pizza) => pizza.id == req.params.id);
  // Send an error code '404 Not Found' if the pizza was not found
  if (foundIndex < 0) return res.status(404).end();

  // remove the pizza found at index : splice returns an array of removed elements
  const itemRemoved = menu.splice(foundIndex, 1);

  return res.json(itemRemoved[0]);
});

// PUT /pizzas/{id} : update a pizza at id
router.put("/:id", function (req, res) {
  console.log(`PUT /pizzas/${req.params.id}`);

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty('title') && req.body.title.length === 0) ||
    (req.body.hasOwnProperty('content')  && req.body.content.length === 0)
  )
    return res.status(400).end();

  const foundIndex = menu.findIndex((pizza) => pizza.id == req.params.id);
  // Send an error code 'Not Found' if the pizza was not found :
  if (foundIndex < 0) return res.status(404).end();

  // create a new object based on the existing pizza - prior to modification -
  // and the properties requested to be updated (those in the body of the request)
  // use of the spread operator to create a shallow copy and repl
  const updatedPizza = { ...menu[foundIndex], ...req.body };
  // replace the pizza found at index : (or use splice)

  menu[foundIndex] = updatedPizza;

  return res.json(updatedPizza);
});

module.exports = router;

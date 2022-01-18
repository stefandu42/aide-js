var express = require("express");
var router = express.Router();

const fs = require("fs");

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

const jsonDbPath = __dirname + "/../data/pizzas.json";

// GET /pizzas : read all the pizzas from the menu
router.get("/", function (req, res) {
  console.log("GET /pizzas");
  // Get pizzas from JSON file
  const pizzas = parse(jsonDbPath, menu);
  return res.json(pizzas);
});

// GET /pizzas/{id} : Get a pizza from its id in the menu
router.get("/:id", function (req, res) {
  console.log(`GET /pizzas/${req.params.id}`);

  // Get pizzas from JSON file
  const pizzas = parse(jsonDbPath, menu);
  const foundIndex = pizzas.findIndex((pizza) => pizza.id == req.params.id);
  // Send an error code '404 Not Found' if the pizza was not found
  if (foundIndex < 0) return res.status(404).end();

  return res.json(pizzas[foundIndex]);
});

// POST /pizzas : create a pizza to be added to the menu.
router.post("/", function (req, res) {
  console.log("POST /pizzas");

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("content") && req.body.content.length === 0)
  )
    return res.status(400).end();

  // Get pizzas from JSON file
  const pizzas = parse(jsonDbPath, menu);

  // get next id
  let nextId;
  if (pizzas.length === 0) nextId = 1;
  else nextId = pizzas[pizzas.length - 1].id + 1;

  // add new pizza to the menu
  const newPizza = {
    id: nextId,
    title: req.body.title,
    content: req.body.content,
  };
  pizzas.push(newPizza);

  // save the data into the JSON file
  serialize(jsonDbPath, pizzas);

  // return the new pizza
  return res.json(newPizza);
});

// DELETE /pizzas/{i} : delete a pizza from the menu
router.delete("/:id", function (req, res) {
  console.log(`DELETE /pizzas/${req.params.id}`);

  // Get pizzas from JSON file
  const pizzas = parse(jsonDbPath, menu);

  const foundIndex = pizzas.findIndex((pizza) => pizza.id == req.params.id);
  // Send an error code '404 Not Found' if the pizza was not found
  if (foundIndex < 0) return res.status(404).end();

  // remove the pizza found at index : splice returns an array of removed elements
  const itemRemoved = pizzas.splice(foundIndex, 1);

  // save the data into the JSON file
  serialize(jsonDbPath, pizzas);

  return res.json(itemRemoved[0]);
});

// PUT /pizzas/{id} : update a pizza at id
router.put("/:id", function (req, res) {
  console.log(`PUT /pizzas/${req.params.id}`);

  // Get pizzas from JSON file
  const pizzas = parse(jsonDbPath, menu);

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("content") && req.body.content.length === 0)
  )
    return res.status(400).end();

  const foundIndex = pizzas.findIndex((pizza) => pizza.id == req.params.id);
  // Send an error code 'Not Found' if the pizza was not found :
  if (foundIndex < 0) return res.status(404).end();

  // create a new object based on the existing pizza - prior to modification -
  // and the properties requested to be updated (those in the body of the request)
  // use of the spread operator to create a shallow copy and repl
  const updatedPizza = { ...pizzas[foundIndex], ...req.body };
  // replace the pizza found at index : (or use splice)
  pizzas[foundIndex] = updatedPizza;

  // save the data into the JSON file
  serialize(jsonDbPath, pizzas);

  return res.json(updatedPizza);
});

/**
 * Parse items given in a .json file
 * @param {String} filePath - path to the .json file
 * If the file does not exist or it's content cannot be parsed as JSON data,
 * use the default data.
 * @param {Array} defaultArray - Content to be used when the .json file does not exists
 * @returns {Array} : the array that was parsed from the file (or defaultData)
 */
function parse(filePath, defaultArray = []) {
  if (!fs.existsSync(filePath)) return defaultArray;
  let fileData = fs.readFileSync(filePath);
  try {
    // parse() Throws a SyntaxError exception if the string to parse is not valid JSON.
    return JSON.parse(fileData);
  } catch (err) {
    return defaultArray;
  }
}

/**
 * Serialize the content of an Object within a file
 * @param {String} filePath - path to the .json file
 * @param {Array} object - Object to be written within the .json file.
 * Even if the file exists, its whole content is reset by the given object.
 */
function serialize(filePath, object) {
  const objectSerialized = JSON.stringify(object);
  fs.writeFileSync(filePath, objectSerialized);
}

module.exports = router;

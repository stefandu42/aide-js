var express = require('express');
const { Films } = require('../model/film');
var router = express.Router();

const filmModel = new Films();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.json(filmModel.getAll(req.query["minimum-duration"]));
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const film= filmModel.getId(req.params.id);
  if (!film) return res.status(404).end();
  return res.json(film);
});



// POST /films : create a film to be added to films.
router.post("/", function (req, res) {
  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("titre") && req.body.titre.length === 0) ||
    (req.body.hasOwnProperty("duration") && req.body.duration.length === 0) ||
    (req.body.hasOwnProperty("budget") && req.body.budget.length === 0) ||
    (req.body.hasOwnProperty("link") && req.body.link.length === 0)
  )
    return res.status(400).end();

  const film = filmModel.addOne(req.body);

  return res.json(film);
});

// DELETE /films/{i} : delete a film from the films
router.delete("/:id", function (req, res) {
  const film = filmModel.deleteOne(req.params.id);
  // Send an error code '404 Not Found' if the film was not found
  if (!film) return res.status(404).end();
  return res.json(film);
});

// PUT /films/{id} : update a film at id
router.put("/:id", function (req, res) {
  if (
    !req.body ||
    (req.body.hasOwnProperty("titre") && req.body.titre.length === 0) ||
    (req.body.hasOwnProperty("duration") && req.body.duration.length === 0) ||
    (req.body.hasOwnProperty("budget") && req.body.budget.length === 0) ||
    (req.body.hasOwnProperty("link") && req.body.link.length === 0)
  )
    return res.status(400).end();

  const film = filmModel.updateOne(req.params.id, req.body);
  // Send an error code 'Not Found' if the pizza was not found :
  if (!film) return res.status(404).end();
  return res.json(film);
});

module.exports = router;

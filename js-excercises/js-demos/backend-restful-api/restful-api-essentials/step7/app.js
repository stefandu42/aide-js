var express = require("express");
var logger = require("morgan");

var cors = require("cors");
let corsOptions = {
  origin: "http://localhost:8080",
};

var pizzaRouter = require("./routes/pizzas");
var authsRouter = require("./routes/auths");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable CORS for all routes in the given router
app.use("/pizzas", cors(corsOptions), pizzaRouter);
app.use("/auths", authsRouter);

module.exports = app;

// Create an Express app
var express = require("express");
var app = express();
// Express Middleware to serve static files from ./public directory
app.use(express.static("public"));

const PORT = 7777;

// Start an HTTP server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

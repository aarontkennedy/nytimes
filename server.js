// Dependencies
// =========================================================
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Require all models
const db = require("./models");
// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(MONGODB_URI);
//mongoose.set('debug', true);

// Sets up the Express App
// =========================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express will handle the static files
app.use(express.static('./client/build/'));

require('./routing/apiRoutes.js')(app);
//require('./routing/oauthRoutes.js')(app, "/search/");

// this picks up any other routes and sends them to the react app to handle
app.get('*', function(req, res) {
  res.sendfile('./client/build/index.html');
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

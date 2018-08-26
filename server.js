//Require the data that we need
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes that we are requiring
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start of the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
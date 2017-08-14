var express = require("express");
var bodyParser = require("body-parser"); //require npm body-parser
var mysql = require("mysql");
var methodOverride = require('method-override');

var app = express();

var PORT = process.env.PORT || 3000; //setting port to 3000 (using process.env for heroku)

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes); //serve controller to default directory (in this case root /)

app.listen(PORT); //add event listener for port
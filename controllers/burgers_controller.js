var express = require("express"); //require express package

var router = express.Router(); //create router variable that handles route handlers

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) { //use get router to gather all burger entries from the burgers table
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject); //render to home page
  });
});

router.post("/", function(req, res) { //use post method to post data from controller (columns burger_name, devoured, and description);
  burger.insertOne([
    "burger_name", "devoured", "description"
  ], [
    req.body.burger_name, req.body.devoured, req.body.description //use these arguments to pass to insertOne function
  ], function() {
    res.redirect("/"); //when done, redirect to home page
  });
});

router.put("/:id", function(req, res) { //use put method to route ID number (generated from form element in index.handlebars) and change devoured state to true
  var condition = "id = " + req.params.id; //set condition variable that will target ID number to pass to updateOne function

  console.log("condition", condition);

  burger.updateOne({ 
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/"); //when done, redirect to home page
  });
});

// Export routes for server.js to use.
module.exports = router;
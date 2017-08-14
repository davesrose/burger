// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) { //selectAll function that passes a callback from the selectAll function from the orm
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) { //insertOne function that passes a callback from the insertOne function from the orm, as well as arguments from the controller
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) { //updateOne function that passes a callback from the updateOne function from the orm, as well as arguments from the controller
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_ontroller.js).
module.exports = burger;
var connection = require("./connection.js"); //require connection.js which connects to mysql server

// Helper function for SQL syntax.  Takes number of value arguments and pushes that number is question marks
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.  Passes arguments for SET values
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = { //creating orm object
	selectAll: function(tableInput, cb) { //creating selectAll functions that takes the table arguement and queries that table: will eventually be used for displaying all burger entries
		var queryString = "SELECT * FROM " + tableInput + ";";
	    connection.query(queryString, function(err, result) {
	      if (err)throw err;
	      cb(result); //using callback perameter for MVC
	    });		
	},
	insertOne: function(table, cols, vals, cb) { //insertOne function that inserts new burger row.  It takes table name, columns (burger_name, description, devoured), and values
	    var queryString = "INSERT INTO " + table;

	    queryString += " (";
	    queryString += cols.toString();
	    queryString += ") ";
	    queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length);
	    queryString += ") ";

	    console.log(queryString);

	    connection.query(queryString, vals, function(err, result) {
	      if (err)throw err;
	      cb(result); //using callback perameter for MVC
	    });
	},
	updateOne: function(table, objColVals, condition, cb) { //create updateOne function for passing a condition boolean to update burger entry (in this case, devoured)
	    var queryString = "UPDATE " + table;

	    queryString += " SET ";
	    queryString += objToSql(objColVals);
	    queryString += " WHERE ";
	    queryString += condition;

	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err)throw err;
	      cb(result); //using callback perameter for MVC
	    });		
	}
}


module.exports = orm; //export orm for use with models/burger.js

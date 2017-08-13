var mysql = require("mysql"); //require mysql package

var connection; //create connection variable

if (process.env.JAWSDB_URL) { //if using JAWSDB on heroku, 
  connection = mysql.createConnection(process.env.JAWSDB_URL); //create connection with JAWSDB
  connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) { //query the connection
    if(err)throw err;
    console.log("The solution is: ", rows[0].solution);
  })
} else { //else connection is local, set localhost connection
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "dsravi12",
    database: "burgers_db"
  });  
}

connection.connect(function(err) { //
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

module.exports = connection;
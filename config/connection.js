var mysql = require("mysql");

var connection;
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   port: 3306,
//   password: "dsravi12",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
    if(err)throw err;
    console.log("The solution is: ", rows[0].solution);
  })
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "dsravi12",
    database: "burgers_db"
  });  
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

module.exports = connection;
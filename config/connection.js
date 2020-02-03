const mysql = require("mysql");
require('dotenv').config();


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "burger_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
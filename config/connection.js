const mysql = require("mysql");

const connInfo = process.env.JAWSDB_URL || {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "ucsd0417",
  database: "burgers_db"
}

const connection = mysql.createConnection(connInfo);

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
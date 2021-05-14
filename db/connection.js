const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "employee_trackerDB",
});
// Test that I can get data from database
const afterConnection = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.log(res);
    insertData();
    connection.end();
  });
};
const insertData = () => {
  connection.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tom", "Ford", 1, 2);`
  );
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
});

module.exports = connection;

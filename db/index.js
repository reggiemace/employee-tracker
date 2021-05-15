//const { allowedNodeEnvironmentFlags } = require("node:process");
const connection = require("./connection");
var inquirer = require("inquirer");

console.log("The connection file is connected");

// add a department
function createDepartment() {
  console.log("Adding a new Department.....");
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "What is the Name of the Department",
    })
    .then(function ({ name }) {
      connection.query(`INSERT INTO department (name) VALUES (?)`, name)
        function (err, res) {
          if (err) throw err;
        };
      connection.end;
      //index.start();
    });
}

// delete a department
function deleteDepartment() {
  console.log("Deleting Department.....");
}
// add a role
function addNewRole() {
  console.log("Adding a new role.....");
}
// delete a role
function deleteRole() {
  console.log("Deleting role.....");
}
// add employee
function addEmployee() {
  console.log("Adding a new employee role.....");
}
// delete employee
function deleteEmployee() {
  console.log("Deleting employee.....");
}
// view department
function viewDepartment() {
  console.log("Viewing Department....");
}
// view roles
function viewRoles() {
  console.log("Viewing roles.....");
}
// update employee roles
function upDateEmployeeRole() {
  console.log("Updating Employee Role.....");
}
// update employee managers
function upDateEmployeeByManager() {
  console.log("Updating Employee By Manager.....");
}
// view employees by manager
function viewEmployeeByManager() {
  console.log("Viewing budget for ....");
}
// view budget by getting total salaries in a department

function viewBudgetByDepartment() {}
createDepartment();

module.exports = {
  createDepartment,
  deleteDepartment,
  addNewRole,
  deleteRole,
  addEmployee,
  deleteEmployee,
  viewDepartment,
  viewRoles,
  upDateEmployeeRole,
  upDateEmployeeByManager,
  viewEmployeeByManager,
  viewBudgetByDepartment,
};

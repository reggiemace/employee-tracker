console.log("This is where you will add your prompts");
//const start = require('./start');

var inquirer = require("inquirer");
var managerFunctions = require("./db/index");

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do",
      choices: [
        "View all departments",
        "Add a department",
        "Delete a department",
        "View all roles",
        "Add a role",
        "Delete a role",
        "Add an employee",
        "Delete an employee",
        "Update employee role",
        "Update employee manager",
        "View employee by manager",
        "View budget by department",
      ],
    })
    .then(function (answer) {
      if (answer.action === "View all departments") {
        managerFunctions.viewDepartment();
      } else if (answer.action === "Add a department") {
        managerFunctions.createDepartment();
      } else if (answer.action === "Delete a department") {
        managerFunctions.deleteDepartment();
      } else if (answer.action === "View all roles") {
        managerFunctions.viewRoles();
      }
      if (answer.action === "Add a role") {
        managerFunctions.addNewRole();
      } else if (answer.action === "Delete a role") {
        managerFunctions.deleteRole();
      } else if (answer.action === "Add an employee") {
        managerFunctions.addEmployee();
      } else if (answer.action === "Delete an employee") {
        managerFunctions.deleteEmployee();
      } else if (answer.action === "Update employee role") {
        managerFunctions.upDateEmployeeRole();
      } else if (answer.action === "Update employee manager") {
        managerFunctions.upDateEmployeeByManager();
      } else if (answer.action === "View budget by department") {
        managerFunctions.viewBudgetByDepartment();
      }
    });
}
start();

module.exports = start;

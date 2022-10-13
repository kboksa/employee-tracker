// Import modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTables = require("console.table");
const logo = require("asciiart-logo");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "emptrack_db",
    multipleStatements: true,
  },
  console.log(`Connected to the emptrack_db database.`)
);

// connects to sql server and sql database
db.connect(function (err) {
  if (err) throw err;
  console.log(
    logo({
      name: "Employee Management System",
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: "grey",
      logoColor: "skyblue",
      textColor: "skyblue",
    }).render()
  );
  console.log("Welcome to our employee database! ");
  initPrompt();
});

// prompts user with list of options to choose from
function startPage() {
  inquirer.prompt({
    type: "list",
    choices: [
      "View all employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "add Role",
      "view all departments",
      "Add Department",
    ],
    message: "What would you like to do?",
    name: "startOptions",
  });

  switch (result.option) {
    case "View all employees":
      viewAllEmployees();
      break;

    case "Add Employee":
      addEmployee();
      break;

    case "Update Employee Role":
      updateEmployeeRole();
      break;

    case "View All Roles":
      viewAllRoles();
      break;

    case "add Role":
      addRole();
      break;

    case "view all departments":
      viewAllDepartments();
      break;

    case "Add Department":
      addDepartment();
      break;

    default:
      exit();
  }
}

function addEmployee() {
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the name of the employee?",
      name: "employeeName",
    })
    .then(function (answer) {
      createConnection.query;
    });
}

startPage();

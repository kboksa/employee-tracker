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
function initPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a department.",
        "Add a role.",
        "Add an employee.",
        "View departments.",
        "View roles.",
        "View employees.",
        "View total budget utilization by department.",
        "View employees with the same manager.",
        "View employees by department.",
        "Update an employee's role.",
        "Update an employee's manager.",
        "Delete a department.",
        "Delete a role.",
        "Delete an employee.",
        "Exit.",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add a department.":
          addDepartment();
          break;

        case "Add a role.":
          addRole();
          break;

        case "Add an employee.":
          addEmployee();
          break;

        case "View departments.":
          viewDepartment();
          break;

        case "View roles.":
          viewRole();
          break;

        case "View employees.":
          viewEmployee();
          break;

        case "View total budget utilization by department.":
          budgetUtilized();
          break;

        case "View employees with the same manager.":
          viewEmpByManager();
          break;

        case "View employees by department.":
          viewEmpByDepartment();
          break;

        case "Update an employee's role.":
          updateRole();
          break;

        case "Update an employee's manager.":
          updateEmpManager();
          break;

        case "Delete a department.":
          deleteDepartment();
          break;

        case "Delete a role.":
          deleteRole();
          break;

        case "Delete an employee.":
          deleteEmployee();
          break;

        case "Exit.":
          db.end();
          console.log("Thanks for using Employee Management System. ");
          console.log(
            logo({
              name: "Have a nice day! Bye! ",
              lineChars: 10,
              padding: 2,
              margin: 3,
              borderColor: "grey",
              logoColor: "skyblue",
              textColor: "skyblue",
            }).render()
          );
          break;
      }
    });
}

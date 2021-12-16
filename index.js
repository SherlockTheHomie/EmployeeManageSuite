const inquirer = require("inquirer");
const mysql = require("mysql2/promises");

const priya = require('./utils/dbHandler')

const allDepartments = priya.allDepartments;
const allRoles =  priya.allRoles;


initManager()

async function initManager() {
    const {mainSelect} = await inquirer.prompt([{
        type: 'list',
        name: 'mainSelect',
        message: "What are you in the mood to manage today?",
        choices: ["View All Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
    }])
    console.log(mainSelect)

    switch (menuSelect) {
        case "View all Departments":
                allDepartments()
            break;
        case "View all Roles":
                allRoles()
            break;
        case "View all Employeee":
                allEmployees()
            break;
        case "Add a Department":
                addDepartment()
            break;
        case "Add a Role":
                addRole()
            break;
        case "Add an Employee":
                addEmployee()
            break;
        case "Adjust Employee":
                adjustEmployee()
            break;
        case "End Overlord Session":
                process.exit();
            break;
        default:
            console.log("Can we assist you further?")
            break;
    }
}

async function addDepart() {
    const {mainSelect} = await inquirer.prompt([{
        type: 'list',
        name: 'mainSelect',
        message: "What are you in the mood to manage today?",
        choices: ["View All Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
    }])
    console.log(mainSelect)

    switch (menuSelect) {
        case "View all Departments":
                allDepartments()
            break;
        case "View all Roles":
                allRoles()
            break;
        case "View all Employeee":
                allEmployees()
            break;
        case "Add a Department":
                addDepartment()
            break;
        case "Add a Role":
                addRole()
            break;
        case "Add an Employee":
                addEmployee()
            break;
        case "Adjust Employee":
                adjustEmployee()
            break;
        case "End Overlord Session":
                process.exit();
            break;
        default:
            console.log("Can we assist you further?")
            break;
    }
}



async function createDepartment() {
    inquirer.prompt(departmentname)
        
    const {mainSelect} = await inquirer.prompt([{
        type: 'list',
        name: 'mainSelect',
        message: "Please enter the name of the department you would like to add?",
        choices: ["View All Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
    }])
    console.log(mainSelect)

    switch (menuSelect) {
        case "View all Departments":
                allDepartments()
            break;
        case "View all Roles":
                allRoles()
            break;
        case "View all Employeee":
                allEmployees()
            break;
        case "Add a Department":
                addDepartment()
            break;
        case "Add a Role":
                addRole()
            break;
        case "Add an Employee":
                addEmployee()
            break;
        case "Adjust Employee":
                adjustEmployee()
            break;
        case "End Overlord Session":
                process.exit();
            break;
        default:
            console.log("Can we assist you further?")
            break;
    }
}
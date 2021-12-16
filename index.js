const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const ctabl = require("console.table");

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'managetheworldb',
    },
    console.log(`Priya, you are connected to your empire`)
);


initManager();

async function initManager() {
    const { mainSelect } = await inquirer.prompt([
        {
        type: 'list',
        name: 'mainSelect',
        message: "Please make a selection?",
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Edit Employee Role", "Quit"],
    }
]);
    
        if (mainSelect === "View all Departments") {
            allDepartments();
        } else if (mainSelect === "View all Roles") {
            allRoles();
        } else if (mainSelect === "View all Employees") {
            allEmployees();
        } else if (mainSelect === "Add a Department") {
            addDepartment();
        } else if (mainSelect === "Add a Role") {
            addRole();
        } else if (mainSelect === "Add an Employee") {
            addEmployee();
        } else if (mainSelect === "Edit Employee Role") {
            adjustEmployee();
        } else if (mainSelect === "Quit") {
            process.exit();
        }
    };


    

// async function addDepart() {
//     const {mainSelect} = await inquirer.prompt([{
//         type: 'list',
//         name: 'mainSelect',
//         message: "What are you in the mood to manage today?",
//         choices: ["View All Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
//     }])
//     console.log(mainSelect)

//     switch (menuSelect) {
//         case "View all Departments":
//                 allDepartments()
//             break;
//         case "View all Roles":
//                 allRoles()
//             break;
//         case "View all Employeee":
//                 allEmployees()
//             break;
//         case "Add a Department":
//                 addDepartment()
//             break;
//         case "Add a Role":
//                 addRole()
//             break;
//         case "Add an Employee":
//                 addEmployee()
//             break;
//         case "Adjust Employee":
//                 adjustEmployee()
//             break;
//         case "End Overlord Session":
//                 process.exit();
//             break;
//         default:
//             console.log("Can we assist you further?")
//             break;
//     }
// }



// async function createDepartment() {
//     inquirer.prompt(departmentname)

//     const {mainSelect} = await inquirer.prompt([{
//         type: 'list',
//         name: 'mainSelect',
//         message: "Please enter the name of the department you would like to add?",
//         choices: ["View All Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
//     }])
//     console.log(mainSelect)

//     switch (menuSelect) {
//         case "View all Departments":
//                 allDepartments()
//             break;
//         case "View all Roles":
//                 allRoles()
//             break;
//         case "View all Employeee":
//                 allEmployees()
//             break;
//         case "Add a Department":
//                 addDepartment()
//             break;
//         case "Add a Role":
//                 addRole()
//             break;
//         case "Add an Employee":
//                 addEmployee()
//             break;
//         case "Adjust Employee":
//                 adjustEmployee()
//             break;
//         case "End Overlord Session":
//                 process.exit();
//             break;
//         default:
//             console.log("Can we assist you further?")
//             break;
//     }
// }


async function allDepartments() {
    const allDeparts = await connection;
    const [rows, fields] = await allDeparts.execute("select * from department");
    console.table(rows);
    await initManager();
};

async function allRoles() {
    const allRole = await connection;
    const [rows, fields] = await allRole.execute("select * from role");
    console.table(rows);
};

async function allEmployees() {
    const allEmployee = await connection;
    const [rows, fields] = await allEmployee.execute("select * from employee");
    console.table(rows);
    await initManager();
};

async function addDepartment() {
    const {deptname} = await inquirer.prompt([
        {
        type: 'input',
        message: 'Please enter the name of the new department...',
        name: 'deptname', 
        }
]); 
    const [rows, fields] = await (
    await connection
    ).execute (`INSERT INTO department (name) VALUES (?)`, deptname);
    
    console.log(`${deptname} has been added!`)
    await initManager();
}

async function addRole() {
    const {newrole} = await inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name of the new role...',
            name: 'rolename', 
        },
        {
            type: 'input',
            message: 'Please enter the name of the new role...',
            name: 'rolesalary', 
        },
        {
            type: 'input',
            message: 'Please enter the name of the new role...',
            name: 'roledepartment', 
        },
]); 
    const [rows, fields] = await (
    await connection
    ).execute (`INSERT INTO roles (title, salary, department) VALUES (?)`, newrole);
    
    console.log(`${rolename} has been added!`)
    await initManager();  
}

async function addEmployee() {
    const addEmp = await mysql.query({ host: 'local', user: 'root', database: 'managetheworldb' })
    const data = await addEmp.execute("select * from role");
    console.table(rows);
}

let adjustEmployee = async () => {
    const editEmp = await mysql.query({ host: 'local', user: 'root', database: 'managetheworldb' })
    const data = await editEmp.execute("select * from role");
    console.table(rows);
}
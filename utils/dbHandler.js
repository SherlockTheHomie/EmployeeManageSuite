const inquirer = require("inquirer");
const mysql = require("mysql2/promises");



let allDepartments = () => {

    const allDepartment = await.mysql.createConnection({host:'localhost', user: 'root', database: 'managetheworldb'})

    const data = await allDepartment.execute("select * from departments");

    console.table(rows);
    
};

let allRoles = () => {

    const allRole = await.mysql.query({host:'local', user:'root', database: 'managetheworldb'})

    const data = await allRole.execute("select * from role");

    console.table(rows);

}

let allEmployees = () => {

    const allEmployee = await.mysql.query({host:'local', user:'root', database: 'managetheworldb'})

    const data = await allEmployee.execute("select * from employee");

    console.table(rows);

}

let addDepartment = () => {

    const addDepart = await.mysql.query({host:'local', user:'root', database: 'managetheworldb'})

    const data = await addDepart.execute("select * from role");

    console.table(rows);

    async inquirer.prompt([{
        type: 'input',
        message: 'Please enter the name of the new department...',
        name: 'newdepartment',
    }])
}

let addRole = () => {

    const addRoll = await.mysql.query({host:'local', user:'root', database: 'managetheworldb'})

    const data = await addRoll.execute("select * from role");

    console.table(rows);

}

let addEmployee = () => {

    const addEmp = await.mysql.query({host:'local', user:'root', database: 'managetheworldb'})

    const data = await addEmp.execute("select * from role");

    console.table(rows);

}

let adjustEmployee = () => {

    const editEmp = await.mysql.query({host:'local', user:'root', database: 'managetheworldb'})

    const data = await editEmp.execute("select * from role");

    console.table(rows);

}

const priya = { allDepartments: allDepartments, allRoles: allRoles, allEmployees: allEmployees, addDepartment: addDepartment, addRole: addRole, addEmployee: addEmployee, adjustEmployee: adjustEmployee };

module.exports = priya;
const inquirer = require("inquirer");
const mysql = require("mysql2/promises");



initManager()

async function initManager() {
    const {mainSelect} = await inquirer.prompt([{
        type: 'list',
        name: 'mainSelect',
        message: "What are you in the mood to manage today?",
        choices: ["Do stuff", "do other stuff"],
    }])
    console.log(mainSelect)

    switch (menuSelect) {
        case "show departments":
                showDepartments()
            break;

        default:
            break;
    }


}



function showDepartments(){

    const connection = await.mysql.createConnection({host:'localhost', user: 'root', database: 'managetheworldb'})

    const data = await connection.execute("select * from employee");

    console.table(rows);
}
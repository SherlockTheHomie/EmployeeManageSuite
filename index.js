const 



startprogram()



function showDepartments(){

    const connection = await.mysql.createConnection({host:'localhost', user: 'root', database})

    const data = await connection.execute("select * from employee");
}
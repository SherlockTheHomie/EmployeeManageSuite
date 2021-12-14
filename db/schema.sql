create database employeedb;

create table employee(

    id int primary key auto_increment,
    name varchar(30),
    role_id int
)

insert into employee (id, name, role_id) valuies (1, "Jason, Face", 6)
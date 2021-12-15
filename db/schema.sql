drop database if exists managetheworldb;
create database managetheworldb;
use managetheworldb;

create table department (
id int primary key auto_increment,
name varchar(30) not null
);

create table role (
id int primary key auto_increment,
title varchar(30) not null,
salary DECIMAL not null,
department_id INT,
foreign key (department_id)
references department(id)
on delete cascade
);

create table employee (
id int primary key auto_increment,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
foreign key (role_id)
references role(id)
on delete cascade
manager_id int,
foreign key (manager_id)
references employee(id)
on delete set null
);
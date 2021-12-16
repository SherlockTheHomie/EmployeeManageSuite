drop database if exists managetheworldb;
create database managetheworldb;
use managetheworldb;

create table department (
id int auto_increment, 
name varchar(30) NOT NULL,

PRIMARY KEY (department_id)
);

create table roles (
role_id int auto_increment NOT NULL,
title varchar(30) NOT NULL,
salary DECIMAL NOT NULL,

PRIMARY KEY (role_id)

department_id INT,
foreign key (department_id)
references department(department_id)
);

create table employees (
employee_id int auto_increment,
first_name varchar(30) NOT NULL,
last_name varchar(30) NOT NULL,

PRIMARY KEY (employee_id),

role_id int,
foreign key (role_id)
references roles(role_id) ON DELETE CASCADE,

manager_id int,
foreign key (manager_id)
references employees(employee_id) ON DELETE CASCADE
);
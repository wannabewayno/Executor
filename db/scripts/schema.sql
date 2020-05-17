DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
id INT AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE employee_role (
id INT AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary INT NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE manager (
id INT AUTO_INCREMENT, 
manager_name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY(role_id) REFERENCES employee_role(id),
FOREIGN KEY(manager_id) REFERENCES manager(id)
);

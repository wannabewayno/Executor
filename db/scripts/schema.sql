DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
department_id INT AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY(department_id)
);

CREATE TABLE employee_role (
role_id INT AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary VARCHAR(30) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(role_id),
FOREIGN KEY(department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY(role_id) REFERENCES employee_role(role_id)
);

CREATE TABLE manager (
id INT NOT NULL, 
manager_name VARCHAR(30),
PRIMARY KEY(id)
);
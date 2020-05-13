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
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY(id),
FOREIGN KEY(role_id) REFERENCES employee_role(role_id)
);

CREATE TABLE manager (
id INT NOT NULL, 
manager_name VARCHAR(30),
PRIMARY KEY(id)
);

INSERT INTO department (department_name)
VALUES  ('Sales'),
        ('QC'),
        ('Engineering'),
        ('Admin'),
        ('R&D'),
        ('IT'),
        ('UX');

INSERT INTO employee_role (title, salary, department_id)
VALUES  ('Sales Manager',           105000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('QC Manager',              115000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Engineering Manager',     120000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Admin Manager',           75000,  (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('R&D Manager',             90000,  (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('IT Manager',              90000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('UX Manager',              107000, (SELECT department_id FROM department WHERE department_name = 'UX'          )),
        ('Sales Rep',               130000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Associate',               50000,  (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Account Executive',       170000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Buisiness Developer',     130000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Sales Consultant',        130000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Market Researcher',       130000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Electrical Engineer',     130000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Mechanical Engineer',     110000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Draftsman',               85000,  (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Chief Engineer',          170000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Engineering Consultant',  130000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('QC Engineer',             125000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Product tester',          130000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Client Consultant',       130000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Researcher',              130000, (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('Research Assistant',      130000, (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('R&D Engineer',            130000, (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('Secretary',               65000,  (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Payrole Officer',         130000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Specialist',              130000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Bookkeeper',              130000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Director',                130000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Front-End Developer',     75000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('Back-End Developer',      85000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('DataBase Developer',      80000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('Full-Stack Developer',    97000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('Designer',                90000,  (SELECT department_id FROM department WHERE department_name = 'UX'          )),
        ('Director',                140000, (SELECT department_id FROM department WHERE department_name = 'UX'          )),
        ('Evangelist',              210000, (SELECT department_id FROM department WHERE department_name = 'UX'          ));


INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('Louis','Corban',      (SELECT role_id FROM employee_role WHERE title = 'Cheif Engineer'       )),
        ('Marie','Toussaint',   (SELECT role_id FROM employee_role WHERE title = 'IT Manager'           )),
        ('Martin','Glover',     (SELECT role_id FROM employee_role WHERE title = 'R&D Engineer'         )),
        ('Bernard','Kretzmann', (SELECT role_id FROM employee_role WHERE title = 'Electrical Engineer'  )),
        ('Karl','Anschutz',     (SELECT role_id FROM employee_role WHERE title = 'Designer'             )),
        ('Isaac','Logique',     (SELECT role_id FROM employee_role WHERE title = 'UX Manager'           )),
        ('Ivan','Gutavistk',    (SELECT role_id FROM employee_role WHERE title = 'Evangelist'           )),
        ('Romanov','Teluve',    (SELECT role_id FROM employee_role WHERE title = 'DataBase Developer'   )),
        ('Emma','Borger',       (SELECT role_id FROM employee_role WHERE title = 'Engineering Manager'  )),
        ('Wayne','Griffiths',   (SELECT role_id FROM employee_role WHERE title = 'Full-Stack Developer' )),
        ('Helen','Laurent',     (SELECT role_id FROM employee_role WHERE title = 'Payrole Officer'      )),
        ('Lucas','poppesdelle', (SELECT role_id FROM employee_role WHERE title = 'Secretary'            )),
        ('Mike','House',        (SELECT role_id FROM employee_role WHERE title = 'Secretary'            )),
        ('Diedre','Evans',      (SELECT role_id FROM employee_role WHERE title = 'Bookkeeper'           )),
        ('Cameron','Marshall',  (SELECT role_id FROM employee_role WHERE title = 'Specialist'           )),
        ('Frank','Moody',       (SELECT role_id FROM employee_role WHERE title = 'Assocaite'            )),
        ('Rick','Peters',       (SELECT role_id FROM employee_role WHERE title = 'Associate'            )),
        ('Rodriguez','Corban',  (SELECT role_id FROM employee_role WHERE title = 'Back-End Developer'  	)),
        ('Gabriella','Corban',  (SELECT role_id FROM employee_role WHERE title = 'Mechanical Engineer'  )),
        ('Antonio','Carmen',    (SELECT role_id FROM employee_role WHERE title = 'QC Engineer'          )),
        ('Jesse','Smith',       (SELECT role_id FROM employee_role WHERE title = 'Sales Consultant'     )),
        ('Ibrahim','Fernandez', (SELECT role_id FROM employee_role WHERE title = 'Draftsman'            )),
        ('Marc','Lopez',        (SELECT role_id FROM employee_role WHERE title = 'Researcher'           )),
        ('Ray','Perez',         (SELECT role_id FROM employee_role WHERE title = 'Makret Researcher'    )),
        ('Lena','Niklasson',    (SELECT role_id FROM employee_role WHERE title = 'Account Executive'    )),
        ('Caleb','Hondoreus',   (SELECT role_id FROM employee_role WHERE title = 'QC Manger'            )),
        ('David','Welp',        (SELECT role_id FROM employee_role WHERE title = 'Sales Manger'         )),
        ('Boris','Ivanovka',    (SELECT role_id FROM employee_role WHERE title = 'Admin Manger'         )),
        ('Happius','Daeus',     (SELECT role_id FROM employee_role WHERE title = 'IT Manger'            )),
        ('Coldest','Bruuski',   (SELECT role_id FROM employee_role WHERE title = 'Sales Rep'            ));
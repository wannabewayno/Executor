

/* seeds data to mySQL */

USE employee_db;

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
        ('Sales Rep',               87000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Associate',               50000,  (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Account Executive',       170000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Buisiness Developer',     127000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Sales Consultant',        95000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Market Researcher',       87000, (SELECT department_id FROM department WHERE department_name = 'Sales'       )),
        ('Electrical Engineer',     118000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Mechanical Engineer',     110000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Draftsman',               85000,  (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Chief Engineer',          170000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('Engineering Consultant',  125000, (SELECT department_id FROM department WHERE department_name = 'Engineering' )),
        ('QC Engineer',             125000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Product tester',          67000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Client Consultant',       117000, (SELECT department_id FROM department WHERE department_name = 'QC'          )),
        ('Researcher',              122000, (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('Research Assistant',      85000, (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('R&D Engineer',            130000, (SELECT department_id FROM department WHERE department_name = 'R&D'         )),
        ('Secretary',               65000,  (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Payrole Officer',         85000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Specialist',              75000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Bookkeeper',              103000, (SELECT department_id FROM department WHERE department_name = 'Admin'       )),
        ('Front-End Developer',     75000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('Back-End Developer',      85000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('DataBase Developer',      80000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('Full-Stack Developer',    97000,  (SELECT department_id FROM department WHERE department_name = 'IT'          )),
        ('Designer',                90000,  (SELECT department_id FROM department WHERE department_name = 'UX'          )),
        ('Director',                140000, (SELECT department_id FROM department WHERE department_name = 'UX'          )),
        ('Evangelist',              210000, (SELECT department_id FROM department WHERE department_name = 'UX'          ));
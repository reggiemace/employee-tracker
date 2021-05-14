use  employee_trackerDB, 

INSERT INTO department (name) VALUES ('Cyber'), ('Devolopment'), ('Testing'),('Contracts');

INSERT INTO role (title, salary, department_id) 
VALUES 
('Securty Analyst', 100000, 1),
('Security Specialist', 75000, 1),
('Senior Software Developer', 100000, 2),
('Junior Software Developer', 650000, 2),
('Software Test Analyst', 75000, 3),
('Test Engineer', 139000,  3),
('Contracts Lead', 85000, 3),
('Contracts Specialist', 79000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Brown', 1, 10), 
('Lisa', 'Raye', 2, 10), 
('Amanda', 'Avant', 3, 20), 
('Billy', 'Blankenship', 4, 20), 
('Cristy', 'Carol', 5, 30),
('Danny', 'Devito', 6, 30);

SELECT * FROM employee;
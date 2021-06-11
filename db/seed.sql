use  employee_trackerDB;

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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Brown', 1, 100), 
('Lisa', 'Raye', 2, 1), 
('Amanda', 'Avant', 3, 300), 
('Billy', 'Blankenship', 4, 3), 
('Cristy', 'Carol', 5, 500),
('Danny', 'Devito', 6, 5);

SELECT * FROM employee;
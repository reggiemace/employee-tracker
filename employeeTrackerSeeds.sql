DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name  VARCHAR(30) 
  
);
CREATE TABLE role (
id  INT PRIMARY KEY,
title  VARCHAR(30),
salary  DECIMAL(5, 2),
department_id  INT
);

CREATE TABLE employee (
id  INT PRIMARY KEY,
first_name  VARCHAR(30) NOT NULL,
last_name  VARCHAR(30) NOT NULL,
role_id INT,
-- manager_id  INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
manager_id INT
);



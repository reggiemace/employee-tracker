DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  department_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(30) NOT NULL
  
);
CREATE TABLE role (
role_id  INT PRIMARY KEY AUTO_INCREMENT,
title  VARCHAR(30) NOT NULL,
salary  DECIMAL NOT NULL,
department_id  INT NOT NULL
);

CREATE TABLE employee (
employee_id  INT PRIMARY KEY AUTO_INCREMENT,
first_name  VARCHAR(30) NOT NULL,
last_name  VARCHAR(30) NOT NULL,
role_id INT UNSIGNED NOT NULL,
manager_id INT 
);


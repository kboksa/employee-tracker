-- Active: 1664832326234@@127.0.0.1@3306@user_db
-- As the image illustrates, your schema should contain the following three tables:
DROP DATABASE IF EXISTS emptrack_db;
CREATE DATABASE emptrack_db;

USE emptrack_db;

--department

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

--role
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(20),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);
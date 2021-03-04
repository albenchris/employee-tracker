DROP DATABASE IF EXISTS companyDB;

CREATE DATABASE companyDB;

USE companyDB;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    department_name VARCHAR(20) NOT NULL
)
CREATE DATABASE IF NOT EXISTS example;

USE example;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name_first VARCHAR (100) NULL,
    name_last VARCHAR (100) NULL,
    email VARCHAR(40) NULL,
    password VARCHAR(128) NULL,
    PRIMARY KEY (id)
);

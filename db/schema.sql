DROP DATABASE IF EXISTS heroku_c33592b168423f4;

CREATE DATABASE heroku_c33592b168423f4;

USE heroku_c33592b168423f4;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

create table burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;


USE ecommerce_db;

CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    category_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

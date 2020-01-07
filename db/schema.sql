DROP DATABASE IF EXISTS detsy_db;
CREATE DATABASE detsy_db;

USE detsy_db;

CREATE TABLE users (
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products (
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_info TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(100),
    PRIMARY KEY (id)
);


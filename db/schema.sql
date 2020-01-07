CREATE DATABASE user_db;

USE user_db;

CREATE TABLE user (
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE DATABASE product_db;

USE product_db;

CREATE TABLE product (
    id INTEGER(100) AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_info TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(100),
    PRIMARY KEY (id)
);


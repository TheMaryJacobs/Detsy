USE detsy_db;

INSERT INTO users (name, email, phone, userName, password, profileImage, location, createdAt, updatedAt) 
VALUES ("Det Sorthepharack", "detvisiths@gmail.com", "9498574135", "det store", "detstore", "", "Minneapolis, MN", "2020-01-10 03:55:48", "2020-01-10 03:55:48"),
("Amira Chikhaoui", "queenamirahermajesty@gmail.com", "6265249478", "Amira Store", "jalalo", "", "Minneapolis, MN", "2020-01-10 03:55:48", "2020-01-10 03:55:48"),
("Mary Jacobs", "TheMaryJacobs@gmail.com", "6265843125", " Mary Store", "maryy", "", "Minneapolis, MN", "2020-01-10 03:55:48", "2020-01-10 03:55:48"),
("Sam Sengsouvanh", "samantha.sengsouvahn@gmail.com", "9192543185", " Sam store", "samyy", "", "Minneapolis, MN", "2020-01-10 03:55:48", "2020-01-10 03:55:48"),
("Paul Hendrickson", "paulrhendrickson@icloud.com", "9095243161", "Paul store", "paulstore", "", "Minneapolis, MN", "2020-01-10 03:55:48", "2020-01-10 03:55:48");


INSERT INTO products (productName, category, description, price, imageURL, createdAt, updatedAt, UserId) 
VALUES
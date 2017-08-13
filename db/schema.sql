-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) DEFAULT "Cheeseburger",
    devoured BOOLEAN DEFAULT false,
    description varchar(255) DEFAULT "No Description", 
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

-- truncate table burgers;

-- SELECT * FROM burgers
### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Old Fashioned Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hickory Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Mushroom Burger', true);

SELECT * FROM burgers;

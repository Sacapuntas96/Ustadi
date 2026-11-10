PRAGMA defer_foreign_keys=TRUE;
DROP TABLE listings;
DROP TABLE users;
DROP TABLE reviews;
CREATE TABLE listings (listing_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY, publish_date DATE NOT NULL, author_id INT NOT NULL, type varchar(255) NOT NULL, subject varchar(255) NOT NULL, location varchar(255) NOT NULL, grade varchar(255) NOT NULL, hourly_price FLOAT NOT NULL);
CREATE TABLE users (user_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY, first_name varchar(255) NOT NULL, last_name varchar(255) NOT NULL, age INT NOT NULL, email varchar(255) NOT NULL, bio varchar(255) NOT NULL, main_subject varchar(255) NOT NULL, main_grade varchar(255) NOT NULL, birth_date varchar(255) NOT NULL, account_creation_date DATE NOT NULL, number_of_listings INT NOT NULL, number_of_reviews INT NOT NULL);
CREATE TABLE reviews (   review_id INTEGER PRIMARY KEY AUTOINCREMENT,   content VARCHAR(500) NOT NULL,   user_id INTEGER NOT NULL,   publish_date DATE NOT NULL);
DELETE FROM sqlite_sequence;

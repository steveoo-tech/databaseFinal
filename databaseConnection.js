const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "bd33f94462c5f6",
	password: "ea69da30",
	database: "heroku_0ce7824f11d48c9",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Damion99!",
	database: "restaurant_reviews",
	multipleStatements: false
};

if (is_heroku == 1) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigHeroku);
}

module.exports = database;
		

var Sequelize = require('sequelize'),
	sequelize = new Sequelize('aes_db', 'postgres', 'PASSWORD', {
		host: 'localhost',
		dialect: 'postgres'
	});

exports.config = {
	db: sequelize 
};
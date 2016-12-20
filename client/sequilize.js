var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://postgres:PASSWORD@localhost:5432/mcg')

module.exports = sequelize

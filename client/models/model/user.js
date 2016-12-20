var Sequelize = require('sequelize')

var attributes = {
  _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  username: Sequelize.STRING,
  password: Sequelize.STRING
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options



var fs = require('fs');
var path = require('path');
var config = require('../config/config');
const filebasename = path.basename(__filename);
const { Sequelize, DataTypes } = require('sequelize');
var db = {};

var configInstance = new config();
var sequelize = configInstance.connectpostgresSql();

fs
  .readdirSync(__dirname)
  .filter((file) => {
    const returnFile = (file.indexOf('.') !== 0)
      && (file !== filebasename)
      && (file.slice(-3) === '.js');
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model;
  });


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
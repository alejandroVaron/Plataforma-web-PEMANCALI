const { Sequelize } = require('sequelize')
const { development } = require('../config/config.json')
require('dotenv').config();
var database = 0;   // 0 = Localhost database  ||  1 = Heroku database
var sequelize

if(database == 0){
  sequelize = new Sequelize(
    development.database,
    development.username,
    development.password, {
        host: development.host,
        dialect: "postgres"
    }
  );
}else{
  sequelize = new Sequelize(
    process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: 'postgres',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
    } 
  );
}

module.exports = sequelize;

const { Sequelize } = require('sequelize')
const { development, production } = require('../config/config.js')
var database = 1;   // 0 = Localhost database  ||  1 = Heroku database
var heroku = 0;
var sequelize;
if(!process.env.DATABASE_URL){
  require('dotenv').config();
  heroku = 1;
}

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

  if(heroku == 1){ 
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
  }else{
    sequelize = new  Sequelize ( process . env . DATABASE_URL ,  { 
      dialect :   'postgres' , 
      protocol : 'postgres' , 
      logging :   false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, 
        }  
      } 
    });
  }
}

module.exports = sequelize;

const { Sequelize } = require('sequelize')
const { development, production } = require('../config/config.js')
var database = 1;   // 0 = Localhost database  ||  1 = Heroku database
var sequelize
if(!process.env.DATABASE_URL){
  require('dotenv').config();
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
  /*
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

    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      
    });
    */
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

module.exports = sequelize;

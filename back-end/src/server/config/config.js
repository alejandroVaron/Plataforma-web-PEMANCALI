
module.exports = {
  development: {
    username: "postgres",
    password: "66844125",
    database: "postgres",
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: 0
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION 
      },
    },
  }
}

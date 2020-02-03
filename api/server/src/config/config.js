require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "new_store_development",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": 0
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "new_store_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": 0
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": 0,
    "dialectOptions": {
      "ssl": true
    }
  }
}
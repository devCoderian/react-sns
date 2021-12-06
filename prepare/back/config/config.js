// {
//   "development": {
//     "username": "root",
//     "password": "root1234!",
//     "database": "reat-sns",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password":"root1234!",
//     "database": "reat-sns",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": "root1234!",
//     "database": "reat-sns",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-sns",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-sns",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-sns",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

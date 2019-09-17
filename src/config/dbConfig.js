import dotenv from 'dotenv';

dotenv.config();

module.exports = { // dont change to export default
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: process.env.DB_LOGGING === 'true',
  dialectOptions: {
    decimalNumbers: true,
  },
};

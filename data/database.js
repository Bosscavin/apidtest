const mysql = require('mysql2/promise');

let database;

const initDB = async () => {
  //@desc Create Connection
  database = await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'apidb',
  });

  // await database.connect();

  //@desc Create Database

  await database.query('CREATE DATABASE IF NOT EXISTS apidb');

  const query = `
  CREATE TABLE IF NOT EXISTS apidb.users (id INT AUTO_INCREMENT, 
    first_name VARCHAR(255) NOT NULL, 
  last_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  postcode INT NOT NULL,
  phone_number INT NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id) )
  `;

  //@desc Create Table
  await database.query(query);
};

const getDB = () => {
  if (!database) {
    throw new Error('No database connected');
  }

  return database;
};

module.exports = {
  initDB,
  getDB,
};

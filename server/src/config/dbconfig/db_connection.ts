var mysql = require('mysql');

const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

export const conn = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD
});


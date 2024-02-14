var mysql = require('mysql');

const DB_NAME = process.env.DB_NAME
const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

const con = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD
});

export async function connect() {
  await con.connect(async () =>{
      console.log("Connected!");
      await con.query(`CREATE DATABASE ${DB_NAME}`, () => {
        console.log("Database created")
      })
      await con.query(`USE ${DB_NAME}`, () => {
        console.log("Database change")
      })
      const customers = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
      await con.query(customers, function () {
        console.log("Table customers created")
      })
    })
}
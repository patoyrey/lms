import { conn } from "../config/dbconfig/db_connection";
import { User } from "../models/User";
import { dummyUser } from "../models/dummyData/User";

type FieldType = {
  string: string
  number: string
}
const fieldType: FieldType = {
  string: "VARCHAR(255)",
  number: "DOUBLE(10, 2)"
}

const DB_NAME = process.env.DB_NAME

export async function connect() {
    await conn.connect(async () =>{
        console.log("Connected!");
        await conn.query(`CREATE DATABASE ${DB_NAME}`, () => {
          console.log("Database created")
        })
        await conn.query(`USE ${DB_NAME}`, () => {
          console.log("Database change")
        })

        const fields = Object.keys(new User({} as User))
        let dropIfExist = `DROP TABLE IF EXISTS user`
        await conn.query(dropIfExist, function () {
          console.log("Table user drop")
        })
        let user = `CREATE TABLE user (`
        fields.forEach((field: string, index: number) => {
          const hasComma = index < (fields.length - 1) ? ',' : ''
          const closingParenthesis = index === (fields.length - 1) ? ')' : ''
          user += `${field} ${fieldType[typeof dummyUser[field as unknown as keyof(User)] as unknown as keyof FieldType]}${hasComma} ${closingParenthesis}`
         
        })
        console.log(user)
        await conn.query(user, function () {
          console.log("Table user created")
        })
        
      })
  }
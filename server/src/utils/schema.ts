import { conn } from "../config/dbconfig/db_connection";
import { Admin } from "../models/Admin";
import { User } from "../models/User";
import { Nurse } from "../models/Nurse";
import { Field } from "../models/Field";
import { dummyAdmin } from "../models/dummyData/Admin";
import { dummyUser } from "../models/dummyData/User";
import { dummyNurse} from "../models/dummyData/Nurse"
import { dummyField} from "../models/dummyData/Field"


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

        let fields = Object.keys(new User({} as User))
        

        //creates user table on DB 
        let dropIfExist = `DROP TABLE IF EXISTS user`
        await conn.query(dropIfExist, function () {
          console.log("Table user drop")
        })
        let query = `CREATE TABLE user (`
        fields.forEach((field: string, index: number) => {
          console.log("fields: ", fieldType[typeof dummyUser[field as unknown as keyof(User)] as unknown as keyof FieldType])
          const hasComma = index < (fields.length - 1) ? ',' : ''
          const closingParenthesis = index === (fields.length - 1) ? ')' : ''
          query += `${field} ${fieldType[typeof dummyUser[field as unknown as keyof(User)] as unknown as keyof FieldType]}${hasComma} ${closingParenthesis}`
         
        })
        console.log(query)
        await conn.query(query, function () {
          console.log("Table user created")
        })

        //creates admin table on DB
        dropIfExist = `DROP TABLE IF EXISTS admin`
        await conn.query(dropIfExist, function () {
          console.log("Table admin drop")
        })

        fields = Object.keys(new Admin({} as Admin))
        query = `CREATE TABLE admin (`
        fields.forEach((field: string, index: number) => {
          console.log("fields: ", fieldType[typeof dummyAdmin[field as unknown as keyof(Admin)] as unknown as keyof FieldType])
          const hasComma = index < (fields.length - 1) ? ',' : ''
          const closingParenthesis = index === (fields.length - 1) ? ')' : ''
          query += `${field} ${fieldType[typeof dummyAdmin[field as unknown as keyof(Admin)] as unknown as keyof FieldType]}${hasComma} ${closingParenthesis}`
         
        })
        await conn.query(query, function () {
          console.log("Table admin created")
        })


        //creates field table
        dropIfExist = `DROP TABLE IF EXISTS field`
        await conn.query(dropIfExist, function () {
          console.log("Table field drop")
        })

        fields = Object.keys(new Field({} as Field))
        query = `CREATE TABLE field (`
        fields.forEach((field: string, index: number) => {
          console.log("fields: ", fieldType[typeof dummyField[field as unknown as keyof(Field)] as unknown as keyof FieldType])
          const hasComma = index < (fields.length - 1) ? ',' : ''
          const closingParenthesis = index === (fields.length - 1) ? ')' : ''
          query += `${field} ${fieldType[typeof dummyField[field as unknown as keyof(Field)] as unknown as keyof FieldType]}${hasComma} ${closingParenthesis}`
         
        })
        await conn.query(query, function () {
          console.log("Table admin created")
        })

        //creates nurse table on DB
        dropIfExist = `DROP TABLE IF EXISTS nurse`
        await conn.query(dropIfExist, function () {
          console.log("Table nurse drop")
        })

        fields = Object.keys(new Nurse({} as Nurse))
        query = `CREATE TABLE nurse (`
        fields.forEach((field: string, index: number) => {
          console.log("fields: ", fieldType[typeof dummyNurse[field as unknown as keyof(Nurse)] as unknown as keyof FieldType])
          const hasComma = index < (fields.length - 1) ? ',' : ''
          const closingParenthesis = index === (fields.length - 1) ? ')' : ''
          query += `${field} ${fieldType[typeof dummyNurse[field as unknown as keyof(Nurse)] as unknown as keyof FieldType]}${hasComma} ${closingParenthesis}`
         
        })
        await conn.query(query, function () {
          console.log("Table admin created")
        })


      })
  }
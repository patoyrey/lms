import { conn } from "../config/dbconfig/db_connection";
import { Patient } from "../models/Patient";
import { Test } from "../models/Test";
import { TestFields } from "../models/TestFields";
import { User } from "../models/User";
import { dummyPatient } from "../models/dummyData/Patient";
import { dummyTest } from "../models/dummyData/Test";
import { dummyTestFields } from "../models/dummyData/TestFields";
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
  await conn.connect(async () => {
    console.log("Connected!");
    await conn.query(`CREATE DATABASE ${DB_NAME}`, () => {
      console.log("Database created")
    })
    await conn.query(`USE ${DB_NAME}`, () => {
      console.log("Database change")
    })

    let fields = Object.keys(new User({} as User))
    let dropIfExist = `DROP TABLE IF EXISTS user`
    await conn.query(dropIfExist, function () {
      console.log("Table user drop")
    })
    let user = `CREATE TABLE user (`
    fields.forEach((field: string, index: number) => {
      const hasComma = index < (fields.length - 1) ? ',' : ''
      const closingParenthesis = index === (fields.length - 1) ? ')' : ''
      user += `${field} ${fieldType[typeof dummyUser[field as unknown as keyof (User)] as unknown as keyof FieldType]}${hasComma} ${closingParenthesis}`

    })
    console.log(user)
    await conn.query(user, function () {
      console.log("Table user created")
    })


    // Create Test table
    fields = Object.keys(new Test({} as Test))
    dropIfExist = `DROP TABLE IF EXISTS test`
    await conn.query(dropIfExist, function () {
      console.log("Table test dropped")
    })
    let test = `CREATE TABLE test (`
    fields.forEach((field: string, index: number) => {
      const hasComma = index < (fields.length - 1) ? ',' : ''
      const closingParenthesis = index === (fields.length - 1) ? ')' : ''
      test += `${field} ${fieldType[typeof dummyTest[field as keyof Test] as keyof FieldType]}${hasComma} ${closingParenthesis}`

    })
    console.log(test)
    await conn.query(test, function () {
      console.log("Table test created")
    })

    // Create TestFields table
    fields = Object.keys(new TestFields({} as TestFields))
    dropIfExist = `DROP TABLE IF EXISTS testfields`
    await conn.query(dropIfExist, function () {
      console.log("Table testfields dropped")
    })
    let testfields = `CREATE TABLE testfields (`
    fields.forEach((field: string, index: number) => {
      const hasComma = index < (fields.length - 1) ? ',' : ''
      const closingParenthesis = index === (fields.length - 1) ? ')' : ''
      testfields += `${field} ${fieldType[typeof dummyTestFields[field as keyof TestFields] as keyof FieldType]}${hasComma} ${closingParenthesis}`

    })
    console.log(testfields)
    await conn.query(testfields, function () {
      console.log("Table testfields created")
    })


    // Create Patient table
    fields = Object.keys(new Patient({} as Patient))
    dropIfExist = `DROP TABLE IF EXISTS patient`
    await conn.query(dropIfExist, function () {
      console.log("Table patient dropped")
    })
    let patient = `CREATE TABLE patient (`
    fields.forEach((field: string, index: number) => {
      const hasComma = index < (fields.length - 1) ? ',' : ''
      const closingParenthesis = index === (fields.length - 1) ? ')' : ''
      patient += `${field} ${fieldType[typeof dummyPatient[field as keyof Patient] as keyof FieldType]}${hasComma} ${closingParenthesis}`

    })
    console.log(patient)
    await conn.query(patient, function () {
      console.log("Table patient created")
    })

  })
}
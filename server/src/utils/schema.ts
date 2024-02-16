import { conn } from "../config/dbconfig/db_connection";
import { Doctor } from "../models/Doctor";
import { PatientsTest } from "../models/PatientsTest";
import { User } from "../models/User";
import { dummuyDoctor } from "../models/dummyData/Doctor";
import { dummyPatientsTest } from "../models/dummyData/PatientsTest";
import { dummyUser } from "../models/dummyData/User";

type FieldType = {
  string: string;
  number: string;
};
const fieldType: FieldType = {
  string: "VARCHAR(255)",
  number: "DOUBLE(10, 2)",
};

const DB_NAME = process.env.DB_NAME;

export async function connect() {
  await conn.connect(async () => {
    console.log("Connected!");
    await conn.query(`CREATE DATABASE ${DB_NAME}`, () => {
      console.log("Database created");
    });
    await conn.query(`USE ${DB_NAME}`, () => {
      console.log("Database change");
    });

    let fields = Object.keys(new User({} as User));
    let dropIfExist = `DROP TABLE IF EXISTS user`;
    await conn.query(dropIfExist, function () {
      console.log("Table user drop");
    });
    let query = `CREATE TABLE user (`;
    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyUser[
            field as unknown as keyof User
          ] as unknown as keyof FieldType
        ]
      }${hasComma} ${closingParenthesis}`;
    });
    console.log(query);
    await conn.query(query, function () {
      console.log("Table user created");
    });

    //* Field for Doctor Table
    fields = Object.keys(new Doctor({} as Doctor));

    //*Drop table if it exists
    dropIfExist = "DROP TABLE IF EXISTS DOCTOR";

    await conn.query(dropIfExist, function () {
      console.log("Table doctor drop");
    });
    query = `CREATE TABLE doctor(`;

    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummuyDoctor[
            field as unknown as keyof Doctor
          ] as unknown as keyof FieldType
        ]
      } ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table doctor created");
    });

    //* Field for Patients Test

    fields = Object.keys(new PatientsTest({} as PatientsTest));

    //* Drop table if the Patients test Exists
    dropIfExist = "DROP TABLE IF EXISTS patientsTest";
    await conn.query(dropIfExist, function () {
      console.log("Table patientsTest drop");
    });

    query = `CREATE TABLE patientstest(`;

    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyPatientsTest[
            field as unknown as keyof PatientsTest
          ] as unknown as keyof FieldType
        ]
      } ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table patientstest created");
    });
  });
}

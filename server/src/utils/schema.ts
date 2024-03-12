import { conn } from "../config/dbconfig/db_connection";
import { Patient } from "../models/Patient";
import { Test } from "../models/Test";
import { TestFields } from "../models/TestFields";
import { dummyPatient } from "../models/dummyData/Patient";
import { dummyTest } from "../models/dummyData/Test";
import { dummyTestFields } from "../models/dummyData/TestFields";
import { Admin } from "../models/Admin";
import { User } from "../models/User";
import { Nurse } from "../models/Nurse";
import { Field } from "../models/Field";
import { dummyAdmin } from "../models/dummyData/Admin";
import { dummyUser } from "../models/dummyData/User";
import { dummyNurse } from "../models/dummyData/Nurse";
import { dummyField } from "../models/dummyData/Field";
import { Doctor } from "../models/Doctor";
import { dummuyDoctor } from "../models/dummyData/Doctor";
import { insertDefaultUser } from "./insertDefaultUser";
import { PatientLabTestFields } from "../models/PatientLabTestFields";
import { dummyPatientLabTestField } from "../models/dummyData/PatientLabTestFields";
import { PatientLabTest } from "../models/PatientLabTest";
import { dummyPatientLabTest } from "../models/dummyData/PatientLabTest";

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

    let user = `CREATE TABLE user (`;
    fields.forEach((field: string, index: number) => {
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      user += `${field} ${
        fieldType[
          typeof dummyUser[
            field as unknown as keyof User
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });

    await conn.query(user, function () {
      insertDefaultUser();
      console.log("Table user created");
    });

    // Create Test table
    fields = Object.keys(new Test({} as Test));
    dropIfExist = `DROP TABLE IF EXISTS test`;
    await conn.query(dropIfExist, function () {
      console.log("Table test dropped");
    });
    let test = `CREATE TABLE test (`;
    fields.forEach((field: string, index: number) => {
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      test += `${field} ${
        fieldType[typeof dummyTest[field as keyof Test] as keyof FieldType]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });

    await conn.query(test, function () {
      console.log("Table test created");
    });

    // Create TestFields table
    fields = Object.keys(new TestFields({} as TestFields));
    dropIfExist = `DROP TABLE IF EXISTS labtest`;
    await conn.query(dropIfExist, function () {
      console.log("Table testfields dropped");
    });
    let testfields = `CREATE TABLE labtest (`;
    fields.forEach((field: string, index: number) => {
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      testfields += `${field} ${
        fieldType[
          typeof dummyTestFields[field as keyof TestFields] as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });

    await conn.query(testfields, function () {
      console.log("Table testfields created");
    });

    // Create Patient table
    // fields = Object.keys(new Patient({} as Patient));
    // dropIfExist = `DROP TABLE IF EXISTS patient`;
    // await conn.query(dropIfExist, function () {
    //   console.log("Table patient dropped");
    // });
    let patient = `CREATE TABLE patient (`;
    fields.forEach((field: string, index: number) => {
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const hasComma = index < fields.length - 1 ? "," : "";

      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      patient += `${field} ${
        fieldType[
          typeof dummyPatient[field as keyof Patient] as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });

    await conn.query(patient, function () {
      console.log("Table patient created");
    });

    fields = Object.keys(new User({} as User));

    //creates admin table on DB
    dropIfExist = `DROP TABLE IF EXISTS admin`;
    await conn.query(dropIfExist, function () {
      console.log("Table admin drop");
    });

    fields = Object.keys(new Admin({} as Admin));
    let query = `CREATE TABLE admin (`;
    fields.forEach((field: string, index: number) => {
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyAdmin[
            field as unknown as keyof Admin
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table admin created");
    });

    // creates field table
    dropIfExist = `DROP TABLE IF EXISTS field`;
    await conn.query(dropIfExist, function () {
      console.log("Table field drop");
    });
    // creates field table
    dropIfExist = `DROP TABLE IF EXISTS field`;
    await conn.query(dropIfExist, function () {
      console.log("Table field drop");
    });

    fields = Object.keys(new Field({} as Field));
    query = `CREATE TABLE field (`;
    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyField[
            field as unknown as keyof Field
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table field created");
    });

    //creates nurse table on DB
    dropIfExist = `DROP TABLE IF EXISTS nurse`;
    await conn.query(dropIfExist, function () {
      console.log("Table nurse drop");
    });

    fields = Object.keys(new Nurse({} as Nurse));
    query = `CREATE TABLE nurse (`;
    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyNurse[
            field as unknown as keyof Nurse
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table nurse created");
    });

    fields = Object.keys(new Doctor({} as Doctor));

    //*Drop table if it exists
    dropIfExist = "DROP TABLE IF EXISTS DOCTOR";

    await conn.query(dropIfExist, function () {
      console.log("Table doctor drop");
    });
    query = `CREATE TABLE doctor(`;

    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummuyDoctor[
            field as unknown as keyof Doctor
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table doctor created");
    });

    //* Field for Patients Test

    fields = Object.keys(new PatientLabTest({} as PatientLabTest));

    //* Drop table if the Patients test Exists
    dropIfExist = "DROP TABLE IF EXISTS patient_labtest";
    await conn.query(dropIfExist, function () {
      console.log("Table patient_labtest drop");
    });

    query = `CREATE TABLE patient_labtest(`;

    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyPatientLabTest[
            field as unknown as keyof PatientLabTest
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table patient_labtest created");
    });

    //* Field for Patients Lab  Test

    fields = Object.keys(new PatientLabTestFields({} as PatientLabTestFields));

    //* Drop table if the Patients test Exists
    dropIfExist = "DROP TABLE IF EXISTS patient_labtest_fields";
    await conn.query(dropIfExist, function () {
      console.log("Table patient_labtest_fields drop");
    });

    query = `CREATE TABLE patient_labtest_fields(`;

    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const primarykey = index === 0 ? "PRIMARY KEY" : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      query += `${field} ${
        fieldType[
          typeof dummyPatientLabTestField[
            field as unknown as keyof PatientLabTestFields
          ] as unknown as keyof FieldType
        ]
      } ${primarykey} ${hasComma} ${closingParenthesis}`;
    });
    await conn.query(query, function () {
      console.log("Table patient_labtest_fields created");
    });
  });
}

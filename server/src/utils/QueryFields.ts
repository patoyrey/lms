import { conn } from "../config/dbconfig/db_connection";

export async function queryFields(query: string, data: object) {
  return new Promise(async (resolve, reject) => {
    await conn.query(query, [data], (err: any, result: any) => {
      console.log("Error : ", err);
      if (err) {
        reject(err);
      } else {
        console.log("Result  : ", result);
        resolve(result);
      }
    });
  });
}

export async function loginQuery(query: string, data: object) {
  return new Promise(async (resolve, reject) => {
    await conn.query(query, data, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export async function retrieveData(query: any) {
  return new Promise(async (resolve, reject) => {
    await conn.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export async function updateQuery(query: string, data: object) {
  return new Promise(async (resolve, reject) => {
    await conn.query(query, data, (err: any, result: any) => {
      console.log("Error : ", err);
      if (err) {
        reject(err);
      } else {
        console.log("Result  : ", result);
        resolve(result);
      }
    });
  });
}
export async function DeleteQuery(query: string, data: object) {
  return new Promise(async (resolve, reject) => {
    await conn.query(query, data, (err: any, result: any) => {
      console.log("Error : ", err);
      if (err) {
        reject(err);
      } else {
        console.log("Result  : ", result);
        resolve(result);
      }
    });
  });
}

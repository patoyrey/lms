import { conn } from "../config/dbconfig/db_connection";

export async function queryFields(query: string, data: object) {
  return new Promise(async (resolve, reject) => {
    await conn.query(query, [data], (err: any, result: any) => {
      console.log("Error : ", err);
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

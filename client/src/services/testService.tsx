import axios from "axios";
import { Test } from "../interface/test";
import { Test_Entity } from "../entity/testEntity";

const baseUrl = "http://localhost:5000/api/";

export class TestService {
  public static add = (props: Test, pathName: string) => {
    return new Promise(async (res, rej) => {
      await axios
        .post(`${baseUrl}${pathName}`, props)
        .then((response: any) => {
          res(response.data.succeeded);
        })
        .catch((error) => {
          rej(error);
        });
    });

    //if mag update
  };
  public static select = (pathName: string) => {
    return new Promise<Test_Entity[]>(async (res, rej) => {
      await axios
        .get(`${baseUrl}${pathName}`)
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  public static update = (props: any, pathname: string) => {
    return new Promise<Test_Entity>(async (res, rej) => {
      await axios
        .post(`${baseUrl}${pathname}`, props)
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  public static delete = (props: any, pathName: string) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .delete(`${baseUrl}${pathName}/${props}`)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

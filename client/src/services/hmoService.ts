import axios from "axios";
import { HmoInterface } from "../interface/hmoInterface";
import { Hmo_Entity } from "../entity/hmoEntity";

const baseUrl = "http://localhost:5000/api/";
export class HmoService {
  public static add = (props: HmoInterface, pathName: string) => {
    return new Promise(async (res, rej) => {
      axios.defaults.withCredentials = true;
      await axios
        .post(`${baseUrl}${pathName}`, props)
        .then((response: any) => {
          res(response.data.succeeded);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };
  public static select = (pathName: string) => {
    return new Promise<Hmo_Entity[]>(async (res, rej) => {
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
  public static update = (pathName: string, hmo: Hmo_Entity) => {
    return new Promise(async (res, rej) => {
      await axios
        .put(`${baseUrl}${pathName}`, hmo)
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };
  public static delete = (pathname: string) => {
    return new Promise(async (resolve, rej) => {
      await axios
        .delete(`${baseUrl}${pathname}`)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error) => {
          rej(error);
          console.log(error);
        });
    });
  };
}

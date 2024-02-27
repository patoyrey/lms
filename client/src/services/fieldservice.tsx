import axios from "axios";
import { Field } from "../interface/field";
import { Field_Entity } from "../entity/fieldEntity";

const baseUrl = "http://localhost:5000/api/";

export class FieldService {
  public static add = (props: Field, pathName: string) => {
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
    return new Promise<Field_Entity[]>(async (res, rej) => {
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

  public static get = (pathName: string) => {
    return new Promise(async (res, rej) => {
      axios.defaults.withCredentials = true;
      await axios
        .get(`${baseUrl}${pathName}`)
        .then((response: any) => {
          res(response.data.succeeded);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };
}

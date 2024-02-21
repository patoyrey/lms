import axios from "axios";
import { Field } from "../interface/field";

const baseUrl = "http://localhost:5000/api/";

export class FieldService {
  public static add = (props: Field, pathName: string) => {
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
}

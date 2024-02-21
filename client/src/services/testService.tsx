import axios from "axios";
import { Test } from "../interface/test";

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
}

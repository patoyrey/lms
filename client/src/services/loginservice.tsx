import axios from "axios";
import { Login } from "../interface/login";

const baseUrl = "http://localhost:5000/api/";

export class LoginService {
  public static post = (props: Login, pathName: string) => {
    return new Promise(async (res, rej) => {
      axios.defaults.withCredentials = true;
      await axios
        .post(`${baseUrl}${pathName}`, props)
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };
}

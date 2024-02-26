import axios from "axios";
import { Patients } from "../interface/patients";
const baseUrl = "http://localhost:5000/api/";
export class PatientService {
  public static add = (props: Patients, pathName: string) => {
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
}

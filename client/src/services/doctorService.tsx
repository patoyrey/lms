import axios from "axios";
import { Doctor } from "../interface/doctor";
import { Doctor_Entity } from "../entity/doctorEntity";

const baseUrl = "http://localhost:5000/api/";

export class DoctorService {
  public static add = (props: any, pathName: string) => {
    return new Promise(async (res, rej) => {
      //   axios.defaults.withCredentials = true;

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
    return new Promise<Doctor_Entity>(async (res, rej) => {
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

  public static update = (pathName: string, doctor: Doctor_Entity) => {
    return new Promise(async (res, rej) => {
      await axios
        .put(`${baseUrl}${pathName}`, doctor)
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  public static delete = (pathName: string) => {
    return new Promise(async (res, rej) => {
      await axios
        .delete(`${baseUrl}${pathName}`)
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };
}

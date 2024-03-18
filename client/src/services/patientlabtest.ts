import axios from "axios";

const baseUrl = "http://localhost:5000/api/";
export class PatientLabTestService {
  public static add = (props: any, pathName: string) => {
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
  public static select = (pathName: string) => {
    return new Promise(async (res, rej) => {
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
  //   public static update = (pathname: string, patient: Patient_Entity) => {
  //     return new Promise(async (res, rej) => {
  //       await axios
  //         .put(`${baseUrl}${pathname}`, patient)
  //         .then((response: any) => {
  //           res(response.data);
  //         })
  //         .catch((error) => {
  //           rej(error);
  //         });
  //     });
  //   };
  //   public static delete = (pathName: string) => {
  //     return new Promise(async (resolve, reject) => {
  //       await axios
  //         .delete(`${baseUrl}${pathName}`)
  //         .then((res: any) => {
  //           resolve(res.data);
  //         })
  //         .catch((error) => {
  //           reject(error);
  //           console.log(error);
  //         });
  //     });
  //   };
}

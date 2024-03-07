import axios from "axios";

const baseUrl = "http://localhost:5000/api/";

export class TestFields {
  public static add = (props: any, pathName: any) => {
    return new Promise(async (res: any, rej: any) => {
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

  public static select = (props: any, pathName: any) => {
    return new Promise(async (res: any, rej: any) => {
      await axios
        .post(`${baseUrl}${pathName}`, { props })
        .then((response: any) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  public static update = (props: any, pathName: string) => {
    return new Promise(async (res: any, rej: any) => {
      await axios
        .put(`${baseUrl}${pathName}`, { props })
        .then((response: any) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };
}

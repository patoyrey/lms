import axios from "axios";

const baseUrl = "http://localhost:5000/api/";

export class CheckAuth {
  public static get = (pathName: string) => {
    return new Promise(async (res, rej) => {
      try {
        axios.defaults.withCredentials = true;
        await axios
          .get(`${baseUrl}${pathName}`)
          .then((response: any) => {
            res(response.data.succeeded);
          })
          .catch((error) => {
            rej(error);
          });
      } catch (error) {
        rej(error);
      }
    });

    //if mag update
  };
}

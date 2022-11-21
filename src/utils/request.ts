import axios, { AxiosRequestConfig } from "axios";

const localUrl = "http://localhost:8080/api/v1";
const remoteUrl = "http://124.223.76.46:8080/api/v1";
const proxy = "/api/v1";

export function request(config: AxiosRequestConfig): Promise<any> {
  const instance = axios.create({
    baseURL: localUrl,
    timeout: 5000,
  });

  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      console.log(res.data);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}

import axios, { Axios, AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance: Axios = axios.create(axiosConfig);

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;

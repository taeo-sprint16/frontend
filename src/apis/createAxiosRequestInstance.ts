import axios, { Axios, AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: Axios = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  async (config) => {
    const healthChecker = await axios.get(API_BASE_URL);
    if (healthChecker.data === 'OK') {
      console.log('✅서버 상태 OK');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

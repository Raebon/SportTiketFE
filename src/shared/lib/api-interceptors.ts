import axios, { InternalAxiosRequestConfig } from 'axios';
import { service } from '../service/service';

const BASE_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = service.token.getLocalAccessToken();
    if (token && config.headers) {
      (config.headers as { [key: string]: string })['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== `/auth/login` && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        service.token.removeTokens();
        window.location.reload();
      }
    }
    return Promise.reject(err);
  }
);

export default instance;

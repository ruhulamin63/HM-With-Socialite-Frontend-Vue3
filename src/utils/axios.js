import axios from 'axios';
import { useAuthStore } from '../stores/auth';
import { getActivePinia } from 'pinia';

const api = axios.create({ baseURL: process.env.API_BASE_URL});

api.interceptors.request.use((config) => {
  const pinia = getActivePinia();
  if (!pinia) {
    throw new Error('Pinia is not initialized!');
  }

  const auth = useAuthStore(); 
  config.headers.Authorization = `Bearer ${auth.accessToken}`;
  return config;
});

api.interceptors.response.use(null, async (error) => {
  const pinia = getActivePinia();
  if (!pinia) {
    throw new Error('Pinia is not initialized!');
  }

  const auth = useAuthStore();
  if (error.response.status === 401) {
    await auth.refreshToken();
    return api.request(error.config);
  }
  return Promise.reject(error);
});

export default api;

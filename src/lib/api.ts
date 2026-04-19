import axios from 'axios';

const backendUrl = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080').replace(/\/$/, '');
const API_URL = `${backendUrl}/api/admin`;

export function api(token: string) {
  const instance = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
      }
      return Promise.reject(err);
    }
  );

  return instance;
}

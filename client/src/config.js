export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';
export const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const config = {
  apiUrl: API_URL,
  socketUrl: SOCKET_URL,
  baseUrl: BASE_URL,
  uploadsUrl: `${BASE_URL}/uploads`
};

export default config; 
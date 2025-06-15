export const API_URL = import.meta.env.VITE_API_URL;
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// Helper function to get full URL for uploads
export const getUploadUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

const config = {
  apiUrl: API_URL,
  socketUrl: SOCKET_URL,
  baseUrl: BASE_URL,
  uploadsUrl: `${BASE_URL}/uploads`
};

export default config; 
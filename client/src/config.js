// Get the current environment
const isDevelopment = import.meta.env.DEV;

// Set base URLs based on environment
const API_URL = isDevelopment 
  ? 'http://localhost:5000/api'
  : 'https://paws-hearts.onrender.com/api';

const BASE_URL = isDevelopment
  ? 'http://localhost:5000'
  : 'https://paws-hearts.onrender.com';

export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

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
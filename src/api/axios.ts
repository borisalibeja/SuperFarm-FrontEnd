import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5035/', // change to your backend URL
  withCredentials: true,
  headers: {
  'Content-Type': 'application/json',
}, // if you're using cookies/session-based auth
});


export default api;

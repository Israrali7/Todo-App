// apiInstance.js
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: "http://localhost:5000",  // Ensure this is pointing to your backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;

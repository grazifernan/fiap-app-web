import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_VEICULO,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'},
    responseType: 'json',
    withCredentials: false,
   
  });
 
  export default api;
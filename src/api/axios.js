import axios from "axios";

const instace = axios.create({
  //baseURL: import.meta.env.VITE_API_URL_VPS,
  baseURL: import.meta.env.VITE_API_URL_LOCAL,
  withCredentials: true,
});

export default instace;
import axios from "axios";

export const BASE_URL = "http://localhost:8000/";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false  // setting for cors
});

export default axiosApi;
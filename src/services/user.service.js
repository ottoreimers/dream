import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:5050/api/test/";


const getUserContent = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export default getUserContent;

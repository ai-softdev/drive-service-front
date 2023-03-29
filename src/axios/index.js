import axios from "axios";

const query = axios.create({
  baseURL: "https://api.drive-service.uz/api/v1/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
export default query;

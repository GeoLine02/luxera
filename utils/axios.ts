import axios from "axios";

const api = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL
  }`,
  withCredentials: true,
});

export default api;

axios.defaults.withCredentials = true;

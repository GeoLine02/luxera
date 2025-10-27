import axios from "axios";

const isServer = typeof window === "undefined";
const isProduction = process.env.NODE_ENV === "production";

const baseURL = isServer
  ? isProduction
    ? process.env.PROD_API_URL // absolute for production SSR
    : "http://localhost:4000" // absolute for dev SSR (Next proxy)
  : "/api"; // browser will handle relative URL

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;

axios.defaults.withCredentials = true;

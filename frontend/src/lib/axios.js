import axios from "axios";

// Allow overriding the backend URL at build/deploy time with VITE_BACKEND_URL
// If VITE_BACKEND_URL is set (e.g. https://api.example.com) we'll use that + /api
// Otherwise fall back to current behaviour: localhost in dev, relative `/api` in prod
const VITE_BACKEND = import.meta.env.VITE_BACKEND_URL;
const isDev = import.meta.env.MODE === "development";

const baseURL = isDev
  ? "http://localhost:5001/api"
  : VITE_BACKEND
  ? `${VITE_BACKEND.replace(/\/$/, "")}/api`
  : "/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

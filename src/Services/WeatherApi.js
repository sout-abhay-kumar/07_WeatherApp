// src/services/weatherApi.jsx
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 

const api = axios.create({
  baseURL: "https://dataservice.accuweather.com",
  timeout: 10000,
});

// Attach apikey automatically to every request
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.apikey = API_KEY;
  return config;
});

/**
 * Search location by city name -> returns the first location Key
 */
export async function getLocationKey(city) {
  if (!city) throw new Error("City is required");
  const res = await api.get("/locations/v1/cities/search", {
    params: { q: city },
  });
  if (!Array.isArray(res.data) || res.data.length === 0) {
    throw new Error("Location not found");
  }
  return res.data[0].Key; 
}

export async function getCurrentConditions(locationKey) {
  const res = await api.get(`/currentconditions/v1/${locationKey}`);
  if (!Array.isArray(res.data) || res.data.length === 0) {
    throw new Error("No current conditions returned");
  }
  return res.data[0]; // returns current weather object
}

export async function getFiveDayForecast(locationKey) {
  const res = await api.get(`/forecasts/v1/daily/5day/${locationKey}`);
  return res.data; // includes headline + daily forecasts
}

export default api;

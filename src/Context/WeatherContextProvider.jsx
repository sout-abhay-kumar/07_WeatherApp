import WeatherContext from './WeatherContext'
import { useState } from 'react';
import { getLocationKey, getCurrentConditions } from "../Services/WeatherApi";

const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // prevent page reload on form submit
    setLoading(true)
    try {
      const locationKey = await getLocationKey(city);
      const currentWeather = await getCurrentConditions(locationKey);
      console.log("Weather data:", currentWeather);
      setWeather(currentWeather);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ city, setCity, handleSearch, weather, loading}}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider
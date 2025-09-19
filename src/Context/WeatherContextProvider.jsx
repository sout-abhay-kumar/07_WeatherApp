import WeatherContext from './WeatherContext'
import { useState } from 'react';
import { getLocationKey, getCurrentConditions, getFiveDayForecast } from "../Services/WeatherApi";


const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // prevent page reload on form submit
    setLoading(true)
    setHasError(false);
    try {
      const locationKey = await getLocationKey(city);
      const currentWeather = await getCurrentConditions(locationKey);
      const fiveDayWeather = await getFiveDayForecast(locationKey);
      console.log(fiveDayWeather)
      console.log("Weather data:", currentWeather);
      setForecast(fiveDayWeather);
      setWeather(currentWeather);
    } catch (err) {
      console.error(err);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ city, setCity, handleSearch, weather, loading, hasError, forecast}}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider
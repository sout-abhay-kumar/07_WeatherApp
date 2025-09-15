import WeatherContext from './WeatherContext'
import { useState } from 'react';
import { getLocationKey } from "../Services/WeatherApi";

const WeatherContextProvider = ({children}) => {
   const [city, setCity] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // stop page refresh
    const data = await getLocationKey(city);
    console.log("Location data:", data);
  };
  return (
      <WeatherContext.Provider value={{city, setCity, handleSearch}}>
        {children}
      </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
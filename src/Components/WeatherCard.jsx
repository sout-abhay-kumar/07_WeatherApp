import { useContext, useState, useEffect } from "react";
import sunny from "../assets/sunny.jpg";
import rainy from "../assets/rainy.jpg";
import WeatherContext from "../Context/WeatherContext";
import Spinner from "./Spinner";
import InfoDiv from "./InfoDiv";

function WeatherCard() {
  const { weather, city, loading } = useContext(WeatherContext);
  const [text, setText] = useState("");

  // Update text when city changes
  useEffect(() => {
    if (city) {
      // Capitalize first letter
      const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
      setText(formattedCity);
    }
  }, [city]);

if (loading) {
  return <Spinner />;
} else if (!weather) {
  return <InfoDiv />;
}

  const weatherCondition = weather.WeatherText.toLowerCase();
  const weatherImage =
    weatherCondition.includes("clear") || weatherCondition.includes("sunny")
      ? sunny
      : rainy;
  return (
    <>
      <div className="flex justify-center display-none my-8">
        <div className="max-w-md rounded overflow-hidden shadow-lg ">
          <img
            className="w-full"
            src={weatherImage}
            alt={weather.WeatherText}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {text} : {weather.WeatherText}
            </div>
            <p className="text-gray-700 text-base">
              Temprature in Celcius: {weather.Temperature.Metric.Value}{" "}
              {weather.Temperature.Metric.Unit}
            </p>
            <p className="text-gray-700 text-base">
              Temprature in Fahrenheit: {weather.Temperature.Imperial.Value}{" "}
              {weather.Temperature.Imperial.Unit}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #weather
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #accuweatherapi
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #api
            </span>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-10 text-center">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #cloudy
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #rainy
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #sunny
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;

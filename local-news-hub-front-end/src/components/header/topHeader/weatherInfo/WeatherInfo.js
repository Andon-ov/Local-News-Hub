import React, { useEffect, useState } from "react";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState();
  const apiKey = "33928f1df10245e4b22150011232407";
  const baseUrl = "https://api.weatherapi.com/v1/current.json";
  const location = "Jambol";
  const apiUrl = `${baseUrl}?key=${apiKey}&q=${location}&aqi=no`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Initial fetch
    fetchWeatherData();

    // Fetch every 30 minutes
    const interval = setInterval(() => {
      fetchWeatherData();
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [apiUrl]);

  if (!weatherData) {
    return <div>Зареждане...</div>;
  }

  const formattedDateAndTime = new Date(
    weatherData.location.localtime
  ).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  function formatWeatherDate(dateStr) {
    const monthsOfYear = [
      "Януари",
      "Февруари",
      "Март",
      "Април",
      "Май",
      "Юни",
      "Юли",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ];

    const dateObj = new Date(dateStr);

    let month = monthsOfYear[dateObj.getMonth()];
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <ul className="weather">
      <li className="topHeader__location">Ямбол</li>
      <li className="topHeader__conditionAndTemp">
        <img src={weatherData.current.condition.icon} alt="" />
        {weatherData.current.temp_c}°C
      </li>
      <li className="topHeader__humidity">
        <WiHumidity />
        &nbsp;<span>{weatherData.current.humidity}%</span>
      </li>
      <li className="topHeader__wind">
        <FaWind />
        &nbsp;<span>{weatherData.current.wind_kph}</span>
      </li>
      <li className="topHeader__time">
        {formatWeatherDate(formattedDateAndTime)}
      </li>
    </ul>
  );
}

export default WeatherInfo;

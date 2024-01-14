import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=98d3b784cbcd6dcc6cf74e134585a280&units=metric'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather">
      <h2>Current Temperature and Weather in Sydney:</h2>
      {weatherData ? (
        <>
          <p>Temperature: {weatherData.main.temp}F</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
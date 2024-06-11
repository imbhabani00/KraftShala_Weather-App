import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo, sys } = weather;
  const date = new Date().toLocaleString();

  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded my-4">
      <h2 className="text-2xl font-bold mb-2 dark:text-white">{name}, {sys.country}</h2>
      <p className="text-xl dark:text-gray-300">{weatherInfo[0].description}</p>
      <p className="text-3xl font-bold mb-2 dark:text-white">{main.temp}°C</p>
      <p className="text-lg dark:text-gray-300">Humidity: {main.humidity}%</p>
      <p className="text-lg dark:text-gray-300">Wind Speed: {weather.wind.speed} m/s</p>
      <p className="text-sm mt-4 dark:text-gray-400">{date}</p>
    </div>
  );
};

export default WeatherCard;

import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from 'react-icons/fa';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo, sys, wind } = weather;
  const date = new Date().toLocaleString();

  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
      case 'few clouds':
        return <FaSun className="text-yellow-500 text-6xl" />;
      case 'scattered clouds':
      case 'broken clouds':
        return <FaCloud className="text-black text-6xl" />;
      case 'shower rain':
      case 'rain':
        return <FaCloudRain className="text-blue-500 text-6xl" />;
      case 'snow':
        return <FaSnowflake className="text-blue-300 text-6xl" />;
      default:
        return <FaCloud className="text-gray-500 text-6xl" />;
    }
  };

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded my-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
    >
      <motion.h2
        className="text-3xl font-bold mb-2 dark:text-white"
        whileHover={{ scale: 1.1, color: '#FFD700' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {name}, {sys.country}
      </motion.h2>
      <motion.div
        className="flex justify-center my-4"
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {getWeatherIcon(weatherInfo[0].description)}
      </motion.div>
      <motion.div
        className="text-3xl font-bold mb-4 dark:text-white"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {main.temp}°C
      </motion.div>
      <motion.div
        className="flex justify-between items-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.p
          className="text-lg dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          Humidity: {main.humidity}%
        </motion.p>
        <motion.p
          className="text-lg dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          Wind Speed: {wind.speed} m/s
        </motion.p>
      </motion.div>
      <motion.p
        className="text-sm mt-4 dark:text-gray-400 text-right"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        {date}
      </motion.p>
    </motion.div>
  );
};

export default WeatherCard;

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ToggleButton from '../components/ToggleButton';
import { fetchWeather } from '../services/weatherService';
import useDarkMode from '../hooks/usedarkMode';
import icon from "../images/weather-icon.svg";
import { motion } from 'framer-motion';
import './Home.css'; // Import CSS file for footer animation

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    const fetchCurrentLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const data = await fetchWeather(`${latitude},${longitude}`);
              setWeather(data);
              setError(null);
            } catch (err) {
              setError('Could not fetch weather data');
              setWeather(null);
            }
          },
          (error) => {
            console.error('Error getting geolocation', error);
            setError('Could not fetch location data');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
      }
    };

    fetchCurrentLocationWeather();
  }, []);

  const handleSearch = async (query) => {
    try {
      const data = await fetchWeather(query);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError('Could not fetch weather data');
      setWeather(null);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-end">
          <ToggleButton darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
        <img src={icon} alt="Weather Icon" className="h-32 w-32" />
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
      <motion.footer 
        className={`text-center py-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="blink">@ i m bhabanishankar...</p>
      </motion.footer>
    </div>
  );
};

export default Home;

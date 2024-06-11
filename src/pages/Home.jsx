import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ToggleButton from '../components/ToggleButton';
import { fetchWeather } from '../services/weatherService';
import useDarkMode from '../hooks/usedarkMode';

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
        <ToggleButton onToggle={() => setDarkMode(!darkMode)} />
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default Home;

import axios from 'axios';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
  try {
    const params = {
      units: 'metric',
      APPID: API_KEY,
    };

    if (query.includes(',')) {
      const [lat, lon] = query.split(',');
      params.lat = lat;
      params.lon = lon;
    } else {
      params.q = query;
    }

    const { data } = await axios.get(BASE_URL, { params });
    return data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

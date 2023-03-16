const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const api = {
  // TODO: set the type of response
  getWeather: async (city: string) => {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    return await response.json();
  },
};

export default api;

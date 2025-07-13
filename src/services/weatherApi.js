import axios from 'axios';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'


export const GetWeather = async (city) => {
    try {
        const res = await axios.get(baseUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric',
            },
        });
        return res.data;
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
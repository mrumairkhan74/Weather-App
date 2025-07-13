import React, { useState } from 'react'
import { GetWeather } from '../services/weatherApi';
import WeatherCard from './WeatherCard';

const SearchBar = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        try {
            const data = await GetWeather(city);
            setWeather(data);
            setError('')
        } catch (err) {
            setWeather(null);
            setError(err.message)
        }
    }
    return (
        <>
            <div className='bg-transparent shadow-lg shadow-blue-200  flex items-center justify-center rounded-lg'>
                <input
                    type="text"
                    className='bg-white p-2 m-2 w-full outline-none border-b-4 border-blue-500 focus:border-blue-800 text-2xl font-[Times_New_Roman]'
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            fetchWeather();
                        }
                    }}
                />
                <button onClick={fetchWeather} className='border-b-4 p-2 w-50  border-blue-500 text-blue-500 hover:bg-blue-500 cursor-pointer hover:text-white font-[Times_New_Roman] text-2xl'>Search</button>
            </div>
            <div className="m-5 p-10">
                {weather && <WeatherCard weather={weather} />}
            </div>
        </>
    );
};


export default SearchBar
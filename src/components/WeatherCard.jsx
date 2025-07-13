import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WeatherCard = ({ weather }) => {
    useEffect(() => {
        AOS.init();
    })
    const { name, main, weather: details } = weather;

    return (
        <div data-aos="zoom-in" data-aos-easing="linear"
            data-aos-duration="1000" className='bg-transparent p-6 rounded-xl shadow-lg shadow-blue-200 max-w-sm mx-auto mt-5 text-center'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${details[0].icon}@2x.png`}
                alt={details[0].description}
                className='mx-auto'
            />
            <p className='capitalize text-gray-700'>{details[0].description}</p>
            <div className="flex items-center justify-between mt-4">
                <span className='text-lg text-gray-600'>Today Temprature </span>
                <span className='text-4xl font-semibold'>{Math.round(main.temp)}°C</span>
            </div>
            <div className="flex  items-center justify-between mt-4">
                <span className='text-lg text-gray-600'>Feels like </span>
                <span className='text-2xl font-semibold'>{Math.round(main.feels_like)}°C</span>
            </div>

            <div className="flex  items-center justify-between mt-4">
                <span className='text-lg text-gray-600'>Minimum Temprature </span>
                <span className='text-2xl font-semibold'>{Math.round(main.temp_min)}°C</span>
            </div>
            <div className="flex  items-center justify-between mt-4">
                <span className='text-lg text-gray-600'>Maximum Temprature </span>
                <span className='text-2xl font-semibold'>{Math.round(main.temp_max)}°C</span>
            </div>
            <div className="flex  items-center justify-between mt-4">
                <span className='text-lg text-gray-600'>Humidity </span>
                <span className='text-2xl font-semibold'>{Math.round(main.humidity)}°C</span>
            </div>
        </div>
    );
};

export default WeatherCard;

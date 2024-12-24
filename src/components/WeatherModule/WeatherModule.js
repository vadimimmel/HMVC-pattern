import React, { useState } from 'react';
import classes from './WeatherModule.module.css';

export const WeatherModule = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        if (city.trim()) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
                const data = await response.json();
                if (data.cod === 200) {
                    setWeather(data);
                } else {
                    setWeather(null);
                    alert(data.message);
                }
            } catch (error) {
                alert('Failed to fetch weather data');
            }
        }
    };

    return (
        <div>
            <h2>Weather</h2>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name"
								className={classes.input}
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h3>{weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

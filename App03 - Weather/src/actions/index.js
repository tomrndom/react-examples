import axios from 'axios';

import WEATHER_KEY from '../keys';

const API_KEY = WEATHER_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ar&units=metric`;
    const request = axios.get(url);    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
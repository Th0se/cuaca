/** @format */
import { useState } from 'react';

const InputForm = ({ setter }) => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [city, setCity] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const getCoordinate = async (city, countryCode) => {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=` +
                `${city}` +
                `${countryCode}` +
                `&limit=1&appid=973258e074924eb7be8763f1801a28b5`
        );
        const json = await response.json();
        const result = await json[0];
        setLongitude(result.lon);
        setLatitude(result.lat);
    };
    const getWeatherPrediction = async (latitude, longitude) => {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=` +
                `${latitude}` +
                `&lon=` +
                `${longitude}` +
                `&appid=973258e074924eb7be8763f1801a28b5`
        );
        const json = await response.json();
        let result = [];
        for (let i in json.list) {
            result.push({
                time: json.list[i].dt_txt,
                mainInfo: json.list[i].main,
                weatherInfo: json.list[i].weather[0],
                cloudsInfo: json.list[i].clouds,
                windInfo: json.list[i].wind,
                visibilityInfo: json.list[i].visibility,
                precipitationInfo: json.list[i].pop,
                partOfTheDay: json.list[i].sys.pod,
            });
        }
        console.log(result);
        setter(result);
    };
    const handle = (() => {
        const handleClick = async (e) => {
            e.preventDefault();
            await getCoordinate(city, countryCode);
            await getWeatherPrediction(latitude, longitude);
        };

        const handleCity = (e) => {
            setCity(e.target.value);
        };

        const handleCountry = (e) => {
            setCountryCode(e.target.value);
        };
        return { handleClick, handleCity, handleCountry };
    })();
    return (
        <form className='grid grid-rows-2 grid-cols-2 gap-2 p-3 text-center items-center'>
            <label htmlFor='city'>City</label>
            <input
                type='text'
                id='city'
                required
                placeholder='Purwokerto'
                onChange={handle.handleCity}
            ></input>
            <label htmlFor='country'>Country code</label>
            <input
                type='text'
                id='country'
                required
                placeholder='ID'
                onChange={handle.handle}
            ></input>
            <button
                className='col-span-2 bg-gray-200 border-2 border-black focus:border-white focus:bg-black focus:text-gray-200'
                onClick={handle.handleClick}
            >
                Get forecast
            </button>
        </form>
    );
};

export default InputForm;

/** @format */

const Prediction = ({ object }) => {
    const time = object.time;
    const maxTemperature = (object.mainInfo.temp_max - 273.15).toFixed(3);
    const minTemperature = (object.mainInfo.temp_min - 273.15).toFixed(3);
    const pressure = object.mainInfo.pressure;
    const humidity = object.mainInfo.humidity;
    const WeatherInfo = object.weatherInfo.description;
    const windSpeed = object.windInfo.speed;
    const gustSpeed = object.windInfo.gust;
    const windDirection = object.windInfo.deg;
    const visibility = object.visibilityInfo;
    const precipitation = object.precipitationInfo;
    return (
        <div className='w-80 bg-fuchsia-600 grid grid-cols-2 grid-rows-9 gap-4 p-2 text-center border-2'>
            <div className='bg-fuchsia-800 col-span-2 border-2 border-black'>
                <b>{time}</b>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black'>
                <b>Main report</b>
                <p>{WeatherInfo}</p>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black col-start-2 col-end-3 row-start-2 row-end-5 p-2 grid gap-2'>
                <b>Temperature</b>
                <div className='border-1 border-black'>
                    <b>Max</b>
                    <p>{maxTemperature}°C</p>
                </div>
                <div className='border-1 border-black'>
                    <b>min</b>
                    <p>{minTemperature}°C</p>
                </div>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black'>
                <b>Air pressure</b>
                <p>{pressure} hPa</p>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black'>
                <b>Air humidity</b>
                <p>{humidity}%</p>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black row-start-5 row-end-7 p-2 grid gap-2'>
                <b>Wind</b>
                <div className='border-1 border-black'>
                    <b>Normal</b>
                    <p>{windSpeed} m/s</p>
                </div>
                <div className='border-1 border-black'>
                    <b>Gust</b>
                    <p>{gustSpeed} m/s</p>
                </div>
                <div className='border-1 border-black'>
                    <b>Direction</b>
                    <p>{windDirection}°</p>
                </div>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black col-start-2 col-end-3 row-start-5 row-end-6'>
                <b>Visibility</b>
                <p>{visibility} m</p>
            </div>
            <div className='bg-fuchsia-800 border-2 border-black col-start-2 col-end-3 row-start-6 row-end-7'>
                <b>precipitation</b>
                <p>{precipitation}%</p>
            </div>
        </div>
    );
};

export default Prediction;

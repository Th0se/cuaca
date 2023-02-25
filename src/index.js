import './styles.css';
import {
    UI
} from './UI.js';
document.body.appendChild(UI());



const obtain = async () => {
    try {
        const take = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#locationField').value}&APPID=${document.querySelector('#APIKeyField').value}&units=Metric`, {
            mode: `cors`
        });

        const data = await take.json();

        return data;
    } catch (error) {
        console.log(error);
    };
};

const initiator = document.querySelector(`#processButton`);
initiator.addEventListener(`click`, () => {
    obtain().then((data) => {
        console.log(data);

        const minimumTemperature = document.querySelector(`#minimumTemperature`);
        minimumTemperature.textContent = `${data.main.temp_min}°C`;

        const maximumTemperature = document.querySelector(`#maximumTemperature`);
        maximumTemperature.textContent = `${data.main.temp_max}°C`;

        const airPressure = document.querySelector(`#airPressure`);
        airPressure.textContent = `${data.main.pressure}hPa`;

        const airHumidity = document.querySelector(`#airHumidity`);
        airHumidity.textContent = `${data.main.humidity}%`;

        const visibility = document.querySelector(`#visibility`);
        visibility.textContent = `${data.visibility} metres`;

        const clouds = document.querySelector(`#clouds`);
        clouds.textContent = `${data.clouds.all}%`;

        const windSpeed = document.querySelector(`#windSpeed`);
        windSpeed.textContent = `${data.wind.speed} metre/second`;

        const windDirection = document.querySelector(`#windDirection`);
        windDirection.textContent = `${data.wind.deg}°`;

        const gust = document.querySelector(`#gust`);
        gust.textContent = `${data.wind.gust} metre/second`;

        const weatherGroup = document.querySelector(`#weatherGroup`);
        weatherGroup.textContent = `${data.weather[0].main}`;

        const weatherDetail = document.querySelector(`#weatherCondition`);
        weatherDetail.textContent = `${data.weather[0].description}`;

        const sunrise = document.querySelector(`#sunrise`);
        const dawn = new Date(data.sys.sunrise * 1000);
        sunrise.textContent = `${dawn}`;

        const sundown = document.querySelector(`#sundown`);
        const dusk = new Date(data.sys.sunset * 1000);
        sundown.textContent = `${dusk}`;
    });
});

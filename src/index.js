import './styles.css';
import {
    UI
} from './UI.js';
document.body.appendChild(UI());



const obtain = async () => {
    try {
        const take = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#locationField').value}&APPID=${document.querySelector('#APIKeyField').value}`, {
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
    })
})

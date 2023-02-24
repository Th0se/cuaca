import './styles.css';
import {
    UI
} from './UI.js';
document.body.appendChild(UI());

let target = `Purworejo`;

const obtain = async () => {
    try {
        const take = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${target}&APPID=ec59ecd5331cbd0c02d07bfa40c4117f`, {
            mode: `cors`
        });

        const data = await take.json();

        return data;
    } catch (error) {
        console.log(error);
    };
};
/* This is just a placeholder
obtain().then(data => {
    console.log(data);
    body.textContent = `${data.main.temp}`;
});

*/

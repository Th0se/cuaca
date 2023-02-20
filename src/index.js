const body = document.body;
body.style.backgroundColor = `green`;

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

obtain().then(data => {
    console.log(data);
    body.textContent = `${data.main.temp}`;
});
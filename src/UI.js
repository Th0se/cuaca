const minTemp = () => {
    const label = document.createElement(`div`);
    label.textContent = `Minimum temperature`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `minimumTemperature`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const maxTemp = () => {
    const label = document.createElement(`div`);
    label.textContent = `Maximum Temperature`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `MaximumTemperature`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const pressure = () => {
    const label = document.createElement(`div`);
    label.textContent = `Air pressure`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `airPressure`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const humidity = () => {
    const label = document.createElement(`div`);
    label.classList.add(`infoLabel`);
    label.textcontent = `Air Humidity`;

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `airHumidity`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const air = () => {
    const container = document.createElement(`div`);
    container.classList.add(`infoContainer`);
    container.setAttribute(`id`, `air`);
    container.appendChild(minTemp());
    container.appendChild(maxTemp());
    container.appendChild(pressure());
    container.appendChild(humidity());

    return container;
    // To be appended into motherContainer();
};

const visibility = () => {
    const label = document.createElement(`div`);
    label.textContent = `Visibility`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoContainer`);
    container.setAttribute(`id`, `visibility`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into motherContainer();
}

const clouds = () => {
    const label = document.createElement(`div`);
    label.classList.add(`infoLabel`);
    label.textContent = `Cloudiness`;

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoContainer`);
    container.setAttribute(`id`, `clouds`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into motherContainer();
};

const windSpeed = () => {
    const label = document.createElement(`div`);
    label.textContent = `Wind speed`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `windSpeed`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into wind();
};

const windDirection = () => {
    const label = document.createElement(`div`);
    label.textContent = `Wind direction`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `windDiredtion`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into wind();
};

const gust = () => {
    const label = document.createElement(`div`);
    label.textContent = `Gust`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `gust`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into wind();
};

const wind = () => {
    const container = document.createElement(`div`);
    container.classList.add(`infoContainer`);
    container.setAttribute(`id`, `wind`);
    container.appendChild(windSpeed());
    container.appendChild(windDirection());
    container.appendChild(gust());

    return container;
    // To be appended into motherContainer();
};

const weatherGroup = () => {
    const label = document.createElement(`label`);
    label.textcontent = `Weather group`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `weatherGroup`);
    container.classList.add(`infoSubContainer`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into weather();
};

const weatherCondition = () => {
    const label = document.createElement(`div`);
    label.textcontent = `Weather Condition`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `weatherCondition`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into weather();
};

const weather = () => {
    const container = document.createElement(`div`);
    container.classList.add(`infoContainer`);
    container.setAttribute(`id`, `weather`);
    container.appendChild(weatherGroup());
    container.appendChild(weatherCondition());


    return container;
    // To be appended into mothercontainer();
};

const sunrise = () => {
    const label = document.createElement(`div`);
    label.textContent = `Sunrise`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `sunrise`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into sun();
};

const sundown = () => {
    const label = document.createElement(`div`);
    label.textContent = `Sundown`;
    label.classList.add(`infoLabel`);

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.classList.add(`infoSubContainer`);
    container.setAttribute(`id`, `sundown`);
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into sun();
};

const sun = () => {
    const container = document.createElement(`div`);
    container.classList.add(`infoContainer`);
    container.setAttribute(`id`, `sun`);
    container.appendChild(sunrise());
    container.appendChild(sundown());

    return container;
    // To be appended into motherContainer();
};

const motherContainer = () => {
    const a = air();
    const b = visibility();
    const c = clouds()
    const d = wind();
    const e = weather();
    const f = sun();

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `motherContainer`);
    container.appendChild(a);
    container.appendChild(b);
    container.appendChild(c);
    container.appendChild(d);
    container.appendChild(e);
    container.appendChild(f);

    return container;
    // to be appended into body;
};

export {
    motherContainer,
};
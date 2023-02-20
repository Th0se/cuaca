const air = () => {
    const minTemp = document.createElement(`div`);
    minTemp.classList.add(`infoDisplay`);
    minTemp.addAttribute(`id`, `minTemp`);

    const maxTemp = document.createElement(`div`);
    maxTemp.classList.add(`infoDisplay`);
    maxTemp.addAttribute(`id`, `maxTemp`);

    const pressure = document.createElement(`div`);
    pressure.classList.add(`infoDisplay`);
    pressure.addAttribute(`id`, `pressure`);
    
    const humidity = document.createElement(`div`);
    humidity.classList.add(`infoDisplay`);
    humidity.addAttribute(`id`, `humidity`);

    const container = document.createElementNS(`div`);
    container.appendChild(minTemp);
    container.appendChild(maxTemp);
    container.appendChild(pressure);
    container.appendChild(humidity);

    return container;
    // to be appended to motherContainer.
};

const visibility = () => {
    const vis = document.createElement(`div`);
    vis.classList.add(`infoDisplay`);
    vis.addAttribute(`id`, `visibility`);

    const container = document.createElement(`div`);
    container.appendChild(vis);

    return container;
    // to be appended to motherContainer.
};

const clouds = () => {
    const cloudiness = document.createElement(`div`);
    cloudiness.classList.add(`infoDisplay`);
    cloudiness.addAttribute(`id`, `cloudiness`);

    const container = document.createElement(`div`);
    container.appendChild(cloudiness);

    return container;
    // to be appended to motherContainer.
}

const wind = () => {
    const speed = document.createElement(`div`);
    speed.classList.add(`infoDisplay`);
    speed.addAttribute(`id`, `windSpeed`);

    const degrees = document.createElement(`div`);
    degrees.classList.add(`infoDisplay`);
    degrees.addAttribute(`id`, `degrees`);

    const gust = document.createElement(`div`);
    gust.classList.add(`infoDisplay`);
    gust.addAttribute(`id`, `gust`);

    const container = document.createElement(`div`);
    container.appendChild(speed);
    container.appendChild(degrees);
    container.appendChild(gust);
    
    return container;
    // to be appended to motherContainer.
};

const weather = () => {
    const main = document.createElement(`div`);
    main.classList.add(`infoDisplay`);
    main.addAttribute(`id`, `weatherMain`);

    const description = document.createElement(`div`);
    description.classList.add(`infoDisplay`);
    description.addAttribute(`id`, `weatherDescription`);

    const container = document.createElement(`div`);
    container.appendChild(main);
    container.appendChild(description);

    return container;
    // to be appended to motherContainer;
};

const sun = () => {
    const rise = document.createElement(`div`);
    rise.classList.add(`infoDisplay`);
    rise.addAttribute(`id`, `sunrise`);

    const down = document.createElement(`div`);
    down.classList.add(`infoDisplay`);
    down.addAttribute(`id`, `sundown`);

    const container = document.createElement(`div`);
    container.appendChild(rise);
    container.appendChild(down);

    return container;
    // to be appended to motherContainer
};

const mothercontainer = () => {
    const a = air();
    const b = visibility();
    const c = clouds()
    const d = wind();
    const e = weather();
    const f = sun();

    const container = document.createElement(`div`);
    container.addAttribute(`id`, `motherContainer`);
    container.appendChild(a);
    container.appendChild(b);
    container.appendChild(c);
    container.appendChild(d);
    container.appendChild(e);
    container.appendChild(f);

    return container;
    // to be appende to body;
};
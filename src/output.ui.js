const minTemp = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Minimum temperature`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `minimumTemperature`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const maxTemp = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Maximum Temperature`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `MaximumTemperature`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const pressure = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Air pressure`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `airPressure`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const humidity = () => {
    //Info sub container;
    const label = document.createElement(`div`);
    label.classList.add(
        `text-xl`,
        `text-center`,
    );
    label.textContent = `Air Humidity`;

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `airHumidity`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into air();
};

const air = () => {
    // Info container;
    const container = document.createElement(`div`);
    container.classList.add(
        `grid`,
        `grid-cols-4`,
        `col-span-3`,
        `gap-1`,
        `border-solid`,
        `border-neutral-900`,
        `p-2`,
        `border-4`,
    );
    container.setAttribute(`id`, `air`);
    container.appendChild(minTemp());
    container.appendChild(maxTemp());
    container.appendChild(pressure());
    container.appendChild(humidity());

    return container;
    // To be appended into motherContainer();
};

const visibility = () => {
    // Info contaier;
    const label = document.createElement(`div`);
    label.textContent = `Visibility`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `visibility`);
    container.classList.add(
        `border-solid`,
        `border-neutral-900`,
        `p-2`,
        `border-4`,
        `grid`,
        `grid-rows-2`
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into motherContainer();
}

const clouds = () => {
    // Info container;
    const label = document.createElement(`div`);
    label.classList.add(
        `text-xl`,
        `text-center`,
    );
    label.textContent = `Cloudiness`;

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `clouds`);
    container.classList.add(
        `border-solid`,
        `border-neutral-900`,
        `p-2`,
        `border-4`,
        `grid`,
        `grid-rows-2`
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into motherContainer();
};

const windSpeed = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Wind speed`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `windSpeed`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into wind();
};

const windDirection = () => {
    // Info sub container
    const label = document.createElement(`div`);
    label.textContent = `Wind direction`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );
    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `windDiredtion`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into wind();
};

const gust = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Gust`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `gust`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into wind();
};

const wind = () => {
    // Info container;
    const container = document.createElement(`div`);
    container.classList.add(
        `row-span-3`,
        `grid-row-3`,
        `grid`,
        `gap-1`,
        `border-solid`,
        `border-neutral-900`,
        `p-2`,
        `border-4`,
    );
    container.setAttribute(`id`, `wind`);
    container.appendChild(windSpeed());
    container.appendChild(windDirection());
    container.appendChild(gust());

    return container;
    // To be appended into motherContainer();
};

const weatherGroup = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Weather group`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );
    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `weatherGroup`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into weather();
};

const weatherCondition = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Weather Condition`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `weatherCondition`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into weather();
};

const weather = () => {
    // Info container;
    const container = document.createElement(`div`);
    container.classList.add(
        `grid`,
        `grid-row-2`,
        `row-span-2`,
        `gap-1`,
        `border-solid`,
        `border-neutral-900`,
        `p-2`,
        `border-4`,
    );
    container.setAttribute(`id`, `weather`);
    container.appendChild(weatherGroup());
    container.appendChild(weatherCondition());


    return container;
    // To be appended into mothercontainer();
};

const sunrise = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Sunrise`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `sunrise`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into sun();
};

const sundown = () => {
    // Info sub container;
    const label = document.createElement(`div`);
    label.textContent = `Sundown`;
    label.classList.add(
        `text-xl`,
        `text-center`,
    );

    const info = document.createElement(`div`);
    info.classList.add(`infoDisplay`);

    const container = document.createElement(`div`);
    container.setAttribute(`id`, `sundown`);
    container.classList.add(
        `border-solid`,
        `border-amber-500`,
        `border-4`,
    );
    container.appendChild(label);
    container.appendChild(info);

    return container;
    // To be appended into sun();
};

const sun = () => {
    // Info container;
    const container = document.createElement(`div`);
    container.classList.add(
        `grid`,
        `grid-row-2`,
        `row-span-2`,
        `gap-1`,
        `border-solid`,
        `border-neutral-900`,
        `p-2`,
        `border-4`,
    );
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
    container.classList.add(
        `grid-rows-4`,
        `grid`,
        `grid-cols-3`,
        `bg-teal-800`,
        `h-screen`,
        `gap-2`,
        `p-1`,
    );
    container.setAttribute(`id`, `outputUI`);
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
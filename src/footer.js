const back = () => {
    const link = document.createElement(`a`);
    link.href = `https://openweathermap.org`;
    link.textContent = `Openweather Map`;
    link.classList.add(
        `underline`,
    );

    const banner = document.createElement(`p`);
    banner.textContent = `Back end provided by `
    banner.appendChild(link);
    banner.classList.add(
        `text-center`,
    );

    return banner;
    // To be appended into footer.
};

const front = () => {
    const banner = document.createElement(`p`);
    banner.textContent = `Front end was made and is maintained by Thomas Praselino`;
    banner.classList.add(
        `text-center`,
    );

    return banner;
    // To be appended into footer.
};

const visit = () => {
    const link = document.createElement(`a`);
    link.href = `https://github.com/Th0se/cuaca`;
    link.textContent = `here`;
    link.classList.add(
        `underline`,
    );

    const repository = document.createElement(`p`);
    repository.textContent = `The project is available to inspect `
    repository.appendChild(link);
    repository.classList.add(
        `text-center`,
    );
    return repository;
}

const footer = () => {
    const container = document.createElement(`div`);
    container.appendChild(back());
    container.appendChild(front());
    container.appendChild(visit());

    return container;
};


export {
    footer,
}
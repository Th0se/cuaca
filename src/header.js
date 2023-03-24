const header = () => {
    const banner = document.createElement(`div`);
    banner.textContent = `Weather Monitor`;
    banner.classList.add(
        `text-6xl`,
        `text-center`,

    );
    
    return banner;
};

export {
    header,
}
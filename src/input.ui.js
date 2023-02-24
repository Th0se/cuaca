const key = () => {
    const label = document.createElement(`div`);
    label.textContent = `Enter your API key`;
    
    const input = document.createElement(`input`);
    input.setAttribute(`type`, `text`);
    input.setAttribute(`id`, `APIKeyField`);
    input.classList.add(
        `bg-teal-500`,
    );

    const container = document.createElement(`div`);
    container.appendChild(label);
    container.appendChild(input);
    container.classList.add(
        `col-start-1`,
        `col-end-3`,
        `row-span-1`,
    );

    return container;
    // To be appended into motherContainer.
};

const location = () => {
    const label = document.createElement(`div`);
    label.textContent = `Enter your location`;

    const input = document.createElement(`input`);
    input.setAttribute(`type`, `text`);
    input.setAttribute(`id`, `locationField`);
    input.setAttribute(`placeholder`, `London,UK`);
    input.classList.add(
        `bg-teal-500`,
    );

    const container = document.createElement(`div`);
    container.appendChild(label);
    container.appendChild(input);
    container.classList.add(
        `col-start-3`,
        `col-end-5`,
        `row-span-1`,
    );

    return container;
    // To be appended into motherContainer.
};

const processButton = () => {
    const button = document.createElement(`div`);
    button.setAttribute(`id`, `processButton`);
    button.textContent = `Process`;
    button.classList.add(
        `border-solid`,
        `border-4`,
        `border-neutral-900`,
        `col-start-2`,
        `col-end-4`,
        `row-span-2`,
        `bg-slate-400`,
        `hover:bg-slate-200`,
    )

    return button;
    // To be appended into motherContainer.
};

const motherContainer = () => {
    const container = document.createElement(`div`);
    container.setAttribute(`id`, `inputUI`);
    container.classList.add(
        `bg-teal-800`,
        `text-xl`,
        `text-center`,
        `grid`,
        `grid-row-2`,
        `grid-cols-4`,
        `gap-y-2`,
    );
    container.appendChild(key());
    container.appendChild(location());
    container.appendChild(processButton());

    return container;
};

export {
    motherContainer,
}
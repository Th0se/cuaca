import {
    motherContainer as outputUI
} from './output.ui.js';
import {
    motherContainer as inputUI
} from './input.ui.js';

const UI = () => {
    const container = document.createElement(`div`);
    container.appendChild(inputUI());
    container.appendChild(outputUI());
    container.classList.add(
        `bg-teal-900`,
    );

    return container;
};

export {
    UI,
};
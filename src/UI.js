import {
    motherContainer as outputUI
} from './output.ui.js';
import {
    motherContainer as inputUI
} from './input.ui.js';
import {
    header
} from './header.js';
import {
    footer
} from './footer.js';

const UI = () => {
    const container = document.createElement(`div`);
    container.appendChild(header());
    container.appendChild(inputUI());
    container.appendChild(outputUI());
    container.appendChild(footer());
    container.classList.add(
        `bg-teal-900`,
    );

    return container;
};

export {
    UI,
};
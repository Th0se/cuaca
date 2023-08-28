/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: { 40: 'repeat(40, minmax(0, 1fr))' },
            screens: {
                sm: { min: '300px', max: '767px' },
                md: { min: '768px', max: '1200px' },
                lg: { min: '1201px', max: '1600px' },
                xl: { min: '1601px' },
            },
            borderWidth: { 1: '1px' },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

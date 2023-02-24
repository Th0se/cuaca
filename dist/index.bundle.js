/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _output_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.ui.js */ "./src/output.ui.js");
/* harmony import */ var _input_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.ui.js */ "./src/input.ui.js");


const UI = () => {
  const container = document.createElement(`div`);
  container.appendChild((0,_input_ui_js__WEBPACK_IMPORTED_MODULE_1__.motherContainer)());
  container.appendChild((0,_output_ui_js__WEBPACK_IMPORTED_MODULE_0__.motherContainer)());
  container.classList.add(`bg-teal-900`);
  return container;
};


/***/ }),

/***/ "./src/input.ui.js":
/*!*************************!*\
  !*** ./src/input.ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "motherContainer": () => (/* binding */ motherContainer)
/* harmony export */ });
const key = () => {
  const label = document.createElement(`div`);
  label.textContent = `Enter your API key`;
  const input = document.createElement(`input`);
  input.setAttribute(`type`, `text`);
  input.setAttribute(`id`, `APIkeyField`);
  input.classList.add(`bg-teal-500`);
  const container = document.createElement(`div`);
  container.appendChild(label);
  container.appendChild(input);
  container.classList.add(`col-start-1`, `col-end-3`, `row-span-1`);
  return container;
  // To be appended into motherContainer.
};

const location = () => {
  const label = document.createElement(`div`);
  label.textContent = `Enter your location`;
  const input = document.createElement(`input`);
  input.setAttribute(`type`, `text`);
  input.setAttribute(`id`, `locationField`);
  input.classList.add(`bg-teal-500`);
  const container = document.createElement(`div`);
  container.appendChild(label);
  container.appendChild(input);
  container.classList.add(`col-start-3`, `col-end-5`, `row-span-1`);
  return container;
  // To be appended into motherContainer.
};

const processButton = () => {
  const button = document.createElement(`div`);
  button.setAttribute(`id`, `processButton`);
  button.textContent = `Process`;
  button.classList.add(`border-solid`, `border-4`, `border-neutral-900`, `col-start-2`, `col-end-4`, `row-span-2`);
  return button;
  // To be appended into motherContainer.
};

const motherContainer = () => {
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `inputUI`);
  container.classList.add(`bg-teal-800`, `text-xl`, `text-center`, `grid`, `grid-row-2`, `grid-cols-4`, `gap-y-2`);
  container.appendChild(key());
  container.appendChild(location());
  container.appendChild(processButton());
  return container;
};


/***/ }),

/***/ "./src/output.ui.js":
/*!**************************!*\
  !*** ./src/output.ui.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "motherContainer": () => (/* binding */ motherContainer)
/* harmony export */ });
const minTemp = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Minimum temperature`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `minimumTemperature`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const maxTemp = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Maximum Temperature`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `MaximumTemperature`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const pressure = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Air pressure`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `airPressure`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const humidity = () => {
  //Info sub container;
  const label = document.createElement(`div`);
  label.classList.add(`text-xl`, `text-center`);
  label.textContent = `Air Humidity`;
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `airHumidity`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const air = () => {
  // Info container;
  const container = document.createElement(`div`);
  container.classList.add(`grid`, `grid-cols-4`, `col-span-3`, `gap-1`, `border-solid`, `border-neutral-900`, `p-2`, `border-4`);
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
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `visibility`);
  container.classList.add(`border-solid`, `border-neutral-900`, `p-2`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into motherContainer();
};

const clouds = () => {
  // Info container;
  const label = document.createElement(`div`);
  label.classList.add(`text-xl`, `text-center`);
  label.textContent = `Cloudiness`;
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `clouds`);
  container.classList.add(`border-solid`, `border-neutral-900`, `p-2`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into motherContainer();
};

const windSpeed = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Wind speed`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `windSpeed`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into wind();
};

const windDirection = () => {
  // Info sub container
  const label = document.createElement(`div`);
  label.textContent = `Wind direction`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `windDiredtion`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into wind();
};

const gust = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Gust`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `gust`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into wind();
};

const wind = () => {
  // Info container;
  const container = document.createElement(`div`);
  container.classList.add(`row-span-3`, `grid-row-3`, `grid`, `gap-1`, `border-solid`, `border-neutral-900`, `p-2`, `border-4`);
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
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `weatherGroup`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into weather();
};

const weatherCondition = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Weather Condition`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `weatherCondition`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into weather();
};

const weather = () => {
  // Info container;
  const container = document.createElement(`div`);
  container.classList.add(`grid`, `grid-row-2`, `row-span-2`, `gap-1`, `border-solid`, `border-neutral-900`, `p-2`, `border-4`);
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
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `sunrise`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into sun();
};

const sundown = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Sundown`;
  label.classList.add(`text-xl`, `text-center`);
  const info = document.createElement(`div`);
  info.classList.add(`infoDisplay`);
  const container = document.createElement(`div`);
  container.setAttribute(`id`, `sundown`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into sun();
};

const sun = () => {
  // Info container;
  const container = document.createElement(`div`);
  container.classList.add(`grid`, `grid-row-2`, `row-span-2`, `gap-1`, `border-solid`, `border-neutral-900`, `p-2`, `border-4`);
  container.setAttribute(`id`, `sun`);
  container.appendChild(sunrise());
  container.appendChild(sundown());
  return container;
  // To be appended into motherContainer();
};

const motherContainer = () => {
  const a = air();
  const b = visibility();
  const c = clouds();
  const d = wind();
  const e = weather();
  const f = sun();
  const container = document.createElement(`div`);
  container.classList.add(`grid-rows-4`, `grid`, `grid-cols-3`, `bg-teal-800`, `h-screen`, `gap-2`, `p-1`);
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



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n          print-color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n[type='radio']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\n\n[type='file']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.col-start-3 {\n  grid-column-start: 3;\n}\n.col-end-3 {\n  grid-column-end: 3;\n}\n.col-end-4 {\n  grid-column-end: 4;\n}\n.col-end-5 {\n  grid-column-end: 5;\n}\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.grid {\n  display: grid;\n}\n.h-screen {\n  height: 100vh;\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n.border-4 {\n  border-width: 4px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-amber-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 158 11 / var(--tw-border-opacity));\n}\n.border-neutral-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(23 23 23 / var(--tw-border-opacity));\n}\n.bg-teal-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\n.bg-teal-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 94 89 / var(--tw-bg-opacity));\n}\n.bg-teal-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 78 74 / var(--tw-bg-opacity));\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");


document.body.appendChild((0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.UI)());
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
  }
  ;
};
/* This is just a placeholder
obtain().then(data => {
    console.log(data);
    body.textContent = `${data.main.temp}`;
});

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0seUNBQXlDLHVCQUF1QixzQkFBc0IsbUJBQW1CO0FBQ3IzckI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQStJO0FBQy9JO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0hBQU87Ozs7QUFJeUY7QUFDakgsT0FBTyxpRUFBZSwrSEFBTyxJQUFJLHNJQUFjLEdBQUcsc0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBR0w7QUFDakJDLFFBQVEsQ0FBQ3FDLElBQUksQ0FBQ25DLFdBQVcsQ0FBQ0osMENBQUUsRUFBRSxDQUFDO0FBRS9CLElBQUl3QyxNQUFNLEdBQUksV0FBVTtBQUV4QixNQUFNQyxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0VBQ3ZCLElBQUk7SUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFFLHFEQUFvREgsTUFBTyx5Q0FBd0MsRUFBRTtNQUMzSEksSUFBSSxFQUFHO0lBQ1gsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsSUFBSSxHQUFHLE1BQU1ILElBQUksQ0FBQ0ksSUFBSSxFQUFFO0lBRTlCLE9BQU9ELElBQUk7RUFDZixDQUFDLENBQUMsT0FBT0UsS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDdEI7RUFBQztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvaW5wdXQudWkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvb3V0cHV0LnVpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL3N0eWxlcy5jc3M/YThkMCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyIGFzIG91dHB1dFVJXG59IGZyb20gJy4vb3V0cHV0LnVpLmpzJztcbmltcG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyIGFzIGlucHV0VUlcbn0gZnJvbSAnLi9pbnB1dC51aS5qcyc7XG5cbmNvbnN0IFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFVJKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRwdXRVSSgpKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtOTAwYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gICAgVUksXG59OyIsImNvbnN0IGtleSA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgQVBJIGtleWA7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBBUElrZXlGaWVsZGApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTUwMGAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGNvbC1zdGFydC0xYCxcbiAgICAgICAgYGNvbC1lbmQtM2AsXG4gICAgICAgIGByb3ctc3Bhbi0xYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lci5cbn07XG5cbmNvbnN0IGxvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgRW50ZXIgeW91ciBsb2NhdGlvbmA7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGB0eXBlYCwgYHRleHRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgYGxvY2F0aW9uRmllbGRgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtM2AsXG4gICAgICAgIGBjb2wtZW5kLTVgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBwcm9jZXNzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHByb2Nlc3NCdXR0b25gKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgUHJvY2Vzc2A7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYGNvbC1zdGFydC0yYCxcbiAgICAgICAgYGNvbC1lbmQtNGAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICApXG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyLlxufTtcblxuY29uc3QgbW90aGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGlucHV0VUlgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYGdyaWQtY29scy00YCxcbiAgICAgICAgYGdhcC15LTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtleSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2Nlc3NCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHtcbiAgICBtb3RoZXJDb250YWluZXIsXG59IiwiY29uc3QgbWluVGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNaW5pbXVtIHRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBtaW5pbXVtVGVtcGVyYXR1cmVgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgbWF4VGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBNYXhpbXVtVGVtcGVyYXR1cmVgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgcHJlc3N1cmUgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgQWlyIHByZXNzdXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJQcmVzc3VyZWApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gYWlyKCk7XG59O1xuXG5jb25zdCBodW1pZGl0eSA9ICgpID0+IHtcbiAgICAvL0luZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEFpciBIdW1pZGl0eWA7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgYWlySHVtaWRpdHlgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgYWlyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLWNvbHMtNGAsXG4gICAgICAgIGBjb2wtc3Bhbi0zYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGFpcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGB2aXNpYmlsaXR5YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGNsb3VkcyA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYENsb3VkaW5lc3NgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGNsb3Vkc2ApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2luZFNwZWVkID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdpbmRTcGVlZGApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3Qgd2luZERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgZGlyZWN0aW9uYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZERpcmVkdGlvbmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3QgZ3VzdCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBHdXN0YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBndXN0YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgcm93LXNwYW4tM2AsXG4gICAgICAgIGBncmlkLXJvdy0zYCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZGApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGd1c3QoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyR3JvdXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBncm91cGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJHcm91cGApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXZWF0aGVyIENvbmRpdGlvbmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2VhdGhlckNvbmRpdGlvbmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3ctMmAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckdyb3VwKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29uZGl0aW9uKCkpO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyY29udGFpbmVyKCk7XG59O1xuXG5jb25zdCBzdW5yaXNlID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFN1bnJpc2VgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bnJpc2VgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHN1bigpO1xufTtcblxuY29uc3Qgc3VuZG93biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBTdW5kb3duYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5kb3duYCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBzdW4oKTtcbn07XG5cbmNvbnN0IHN1biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3ctMmAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW5yaXNlKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW5kb3duKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3QgbW90aGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGEgPSBhaXIoKTtcbiAgICBjb25zdCBiID0gdmlzaWJpbGl0eSgpO1xuICAgIGNvbnN0IGMgPSBjbG91ZHMoKVxuICAgIGNvbnN0IGQgPSB3aW5kKCk7XG4gICAgY29uc3QgZSA9IHdlYXRoZXIoKTtcbiAgICBjb25zdCBmID0gc3VuKCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWQtcm93cy00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1jb2xzLTNgLFxuICAgICAgICBgYmctdGVhbC04MDBgLFxuICAgICAgICBgaC1zY3JlZW5gLFxuICAgICAgICBgZ2FwLTJgLFxuICAgICAgICBgcC0xYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYG91dHB1dFVJYCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIHRvIGJlIGFwcGVuZGVkIGludG8gYm9keTtcbn07XG5cbmV4cG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyLFxufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMjAgMjAlMjclM2UlM2NwYXRoIHN0cm9rZT0lMjclMjM2YjcyODAlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3IHN0cm9rZS13aWR0aD0lMjcxLjUlMjcgZD0lMjdNNiA4bDQgNCA0LTQlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjcgZmlsbD0lMjd3aGl0ZSUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzZSUzY3BhdGggZD0lMjdNMTIuMjA3IDQuNzkzYTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDBsLTItMmExIDEgMCAwMTEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JTI3MCAwIDE2IDE2JTI3IGZpbGw9JTI3d2hpdGUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjclM2UlM2NjaXJjbGUgY3g9JTI3OCUyNyBjeT0lMjc4JTI3IHI9JTI3MyUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIHN0cm9rZT0lMjd3aGl0ZSUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgZD0lMjdNNCA4aDglMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuW3R5cGU9J3RleHQnXSxbdHlwZT0nZW1haWwnXSxbdHlwZT0ndXJsJ10sW3R5cGU9J3Bhc3N3b3JkJ10sW3R5cGU9J251bWJlciddLFt0eXBlPSdkYXRlJ10sW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ10sW3R5cGU9J21vbnRoJ10sW3R5cGU9J3NlYXJjaCddLFt0eXBlPSd0ZWwnXSxbdHlwZT0ndGltZSddLFt0eXBlPSd3ZWVrJ10sW211bHRpcGxlXSx0ZXh0YXJlYSxzZWxlY3Qge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzZiNzI4MDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxufVxcblxcblt0eXBlPSd0ZXh0J106Zm9jdXMsIFt0eXBlPSdlbWFpbCddOmZvY3VzLCBbdHlwZT0ndXJsJ106Zm9jdXMsIFt0eXBlPSdwYXNzd29yZCddOmZvY3VzLCBbdHlwZT0nbnVtYmVyJ106Zm9jdXMsIFt0eXBlPSdkYXRlJ106Zm9jdXMsIFt0eXBlPSdkYXRldGltZS1sb2NhbCddOmZvY3VzLCBbdHlwZT0nbW9udGgnXTpmb2N1cywgW3R5cGU9J3NlYXJjaCddOmZvY3VzLCBbdHlwZT0ndGVsJ106Zm9jdXMsIFt0eXBlPSd0aW1lJ106Zm9jdXMsIFt0eXBlPSd3ZWVrJ106Zm9jdXMsIFttdWx0aXBsZV06Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG4gIC0tdHctcmluZy1pbnNldDogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogIzI1NjNlYjtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2YjcyODA7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOjotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xcbiAgbWluLWhlaWdodDogMS41ZW07XFxufVxcblxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWhvdXItZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWludXRlLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXNlY29uZC1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1taWxsaXNlY29uZC1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tZXJpZGllbS1maWVsZCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuNXJlbSBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVlbSAxLjVlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG4gIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgICAgICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG59XFxuXFxuW211bHRpcGxlXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiB1bnNldDtcXG4gIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogdW5zZXQ7XFxuICAgICAgICAgIHByaW50LWNvbG9yLWFkanVzdDogdW5zZXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddLFt0eXBlPSdyYWRpbyddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICAgICAgICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgY29sb3I6ICMyNTYzZWI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjNmI3MjgwO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSB7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcblxcblt0eXBlPSdyYWRpbyddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmZvY3VzLFt0eXBlPSdyYWRpbyddOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDJweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCxbdHlwZT0ncmFkaW8nXTpjaGVja2VkIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmhvdmVyLFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6Zm9jdXMsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZDpob3ZlcixbdHlwZT0ncmFkaW8nXTpjaGVja2VkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6aG92ZXIsW3R5cGU9J2NoZWNrYm94J106aW5kZXRlcm1pbmF0ZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddIHtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IHVuc2V0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcblt0eXBlPSdmaWxlJ106Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIEJ1dHRvblRleHQ7XFxuICBvdXRsaW5lOiAxcHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIH1cXG59XFxuLmNvbC1zcGFuLTMge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMyAvIHNwYW4gMztcXG59XFxuLmNvbC1zdGFydC0xIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG4uY29sLXN0YXJ0LTIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxufVxcbi5jb2wtc3RhcnQtMyB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMztcXG59XFxuLmNvbC1lbmQtMyB7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcbi5jb2wtZW5kLTQge1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbn1cXG4uY29sLWVuZC01IHtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG59XFxuLnJvdy1zcGFuLTEge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMSAvIHNwYW4gMTtcXG59XFxuLnJvdy1zcGFuLTIge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMiAvIHNwYW4gMjtcXG59XFxuLnJvdy1zcGFuLTMge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMyAvIHNwYW4gMztcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmgtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5ncmlkLWNvbHMtMyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLWNvbHMtNCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtMiB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtNCB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5nYXAtMSB7XFxuICBnYXA6IDAuMjVyZW07XFxufVxcbi5nYXAtMiB7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmdhcC15LTIge1xcbiAgcm93LWdhcDogMC41cmVtO1xcbn1cXG4uYm9yZGVyLTQge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcbi5ib3JkZXItc29saWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLmJvcmRlci1hbWJlci01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI0NSAxNTggMTEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLW5ldXRyYWwtOTAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyMyAyMyAyMyAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy10ZWFsLTUwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAgMTg0IDE2NiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRlYWwtODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyA5NCA4OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRlYWwtOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSA3OCA3NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnAtMSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFk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c0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7XG4gICAgVUlcbn0gZnJvbSAnLi9VSS5qcyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFVJKCkpO1xuXG5sZXQgdGFyZ2V0ID0gYFB1cndvcmVqb2A7XG5cbmNvbnN0IG9idGFpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWtlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0YXJnZXR9JkFQUElEPWVjNTllY2Q1MzMxY2JkMGMwMmQwN2JmYTQwYzQxMTdmYCwge1xuICAgICAgICAgICAgbW9kZTogYGNvcnNgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0YWtlLmpzb24oKTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfTtcbn07XG4vKiBUaGlzIGlzIGp1c3QgYSBwbGFjZWhvbGRlclxub2J0YWluKCkudGhlbihkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBib2R5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLnRlbXB9YDtcbn0pO1xuXG4qL1xuIl0sIm5hbWVzIjpbIm1vdGhlckNvbnRhaW5lciIsIm91dHB1dFVJIiwiaW5wdXRVSSIsIlVJIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJsYWJlbCIsInRleHRDb250ZW50IiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsInByb2Nlc3NCdXR0b24iLCJidXR0b24iLCJtaW5UZW1wIiwiaW5mbyIsIm1heFRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5IiwiYWlyIiwidmlzaWJpbGl0eSIsImNsb3VkcyIsIndpbmRTcGVlZCIsIndpbmREaXJlY3Rpb24iLCJndXN0Iiwid2luZCIsIndlYXRoZXJHcm91cCIsIndlYXRoZXJDb25kaXRpb24iLCJ3ZWF0aGVyIiwic3VucmlzZSIsInN1bmRvd24iLCJzdW4iLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJib2R5IiwidGFyZ2V0Iiwib2J0YWluIiwidGFrZSIsImZldGNoIiwibW9kZSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==
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
  input.setAttribute(`id`, `APIKeyField`);
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
  input.setAttribute(`placeholder`, `London,UK`);
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
  button.classList.add(`border-solid`, `border-4`, `border-neutral-900`, `col-start-2`, `col-end-4`, `row-span-2`, `bg-slate-400`, `hover:bg-slate-200`);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n          print-color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n[type='radio']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\n\n[type='file']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.col-start-3 {\n  grid-column-start: 3;\n}\n.col-end-3 {\n  grid-column-end: 3;\n}\n.col-end-4 {\n  grid-column-end: 4;\n}\n.col-end-5 {\n  grid-column-end: 5;\n}\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.grid {\n  display: grid;\n}\n.h-screen {\n  height: 100vh;\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n.border-4 {\n  border-width: 4px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-amber-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 158 11 / var(--tw-border-opacity));\n}\n.border-neutral-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(23 23 23 / var(--tw-border-opacity));\n}\n.bg-slate-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n.bg-teal-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\n.bg-teal-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 94 89 / var(--tw-bg-opacity));\n}\n.bg-teal-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 78 74 / var(--tw-bg-opacity));\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.hover\\:bg-slate-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/styles.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
const obtain = async () => {
  try {
    const take = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#locationField').value}&APPID=${document.querySelector('#APIKeyField').value}`, {
      mode: `cors`
    });
    const data = await take.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  ;
};
const initiator = document.querySelector(`#processButton`);
initiator.addEventListener(`click`, () => {
  obtain().then(data => {
    console.log(data);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FB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N0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUdMO0FBQ2pCQyxRQUFRLENBQUNxQyxJQUFJLENBQUNuQyxXQUFXLENBQUNKLDBDQUFFLEVBQUUsQ0FBQztBQUkvQixNQUFNd0MsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBWTtFQUN2QixJQUFJO0lBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxxREFBb0R4QyxRQUFRLENBQUN5QyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsS0FBTSxVQUFTMUMsUUFBUSxDQUFDeUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxLQUFNLEVBQUMsRUFBRTtNQUNsTEMsSUFBSSxFQUFHO0lBQ1gsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsSUFBSSxHQUFHLE1BQU1MLElBQUksQ0FBQ00sSUFBSSxFQUFFO0lBRTlCLE9BQU9ELElBQUk7RUFDZixDQUFDLENBQUMsT0FBT0UsS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDdEI7RUFBQztBQUNMLENBQUM7QUFFRCxNQUFNRyxTQUFTLEdBQUdqRCxRQUFRLENBQUN5QyxhQUFhLENBQUUsZ0JBQWUsQ0FBQztBQUMxRFEsU0FBUyxDQUFDQyxnQkFBZ0IsQ0FBRSxPQUFNLEVBQUUsTUFBTTtFQUN0Q1osTUFBTSxFQUFFLENBQUNhLElBQUksQ0FBRVAsSUFBSSxJQUFLO0lBQ3BCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDO0VBQ3JCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvaW5wdXQudWkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvb3V0cHV0LnVpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL3N0eWxlcy5jc3M/YThkMCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyIGFzIG91dHB1dFVJXG59IGZyb20gJy4vb3V0cHV0LnVpLmpzJztcbmltcG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyIGFzIGlucHV0VUlcbn0gZnJvbSAnLi9pbnB1dC51aS5qcyc7XG5cbmNvbnN0IFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFVJKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRwdXRVSSgpKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtOTAwYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gICAgVUksXG59OyIsImNvbnN0IGtleSA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgQVBJIGtleWA7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBBUElLZXlGaWVsZGApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTUwMGAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGNvbC1zdGFydC0xYCxcbiAgICAgICAgYGNvbC1lbmQtM2AsXG4gICAgICAgIGByb3ctc3Bhbi0xYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lci5cbn07XG5cbmNvbnN0IGxvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgRW50ZXIgeW91ciBsb2NhdGlvbmA7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGB0eXBlYCwgYHRleHRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgYGxvY2F0aW9uRmllbGRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYHBsYWNlaG9sZGVyYCwgYExvbmRvbixVS2ApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTUwMGAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGNvbC1zdGFydC0zYCxcbiAgICAgICAgYGNvbC1lbmQtNWAsXG4gICAgICAgIGByb3ctc3Bhbi0xYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lci5cbn07XG5cbmNvbnN0IHByb2Nlc3NCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShgaWRgLCBgcHJvY2Vzc0J1dHRvbmApO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGBQcm9jZXNzYDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgY29sLXN0YXJ0LTJgLFxuICAgICAgICBgY29sLWVuZC00YCxcbiAgICAgICAgYHJvdy1zcGFuLTJgLFxuICAgICAgICBgYmctc2xhdGUtNDAwYCxcbiAgICAgICAgYGhvdmVyOmJnLXNsYXRlLTIwMGAsXG4gICAgKVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lci5cbn07XG5cbmNvbnN0IG1vdGhlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBpbnB1dFVJYCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTgwMGAsXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3ctMmAsXG4gICAgICAgIGBncmlkLWNvbHMtNGAsXG4gICAgICAgIGBnYXAteS0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChrZXkoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9jZXNzQnV0dG9uKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyLFxufSIsImNvbnN0IG1pblRlbXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgTWluaW11bSB0ZW1wZXJhdHVyZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgbWluaW11bVRlbXBlcmF0dXJlYCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBhaXIoKTtcbn07XG5cbmNvbnN0IG1heFRlbXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgTWF4aW11bSBUZW1wZXJhdHVyZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgTWF4aW11bVRlbXBlcmF0dXJlYCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBhaXIoKTtcbn07XG5cbmNvbnN0IHByZXNzdXJlID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEFpciBwcmVzc3VyZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgYWlyUHJlc3N1cmVgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgaHVtaWRpdHkgPSAoKSA9PiB7XG4gICAgLy9JbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgSHVtaWRpdHlgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGFpckh1bWlkaXR5YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBhaXIoKTtcbn07XG5cbmNvbnN0IGFpciA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1jb2xzLTRgLFxuICAgICAgICBgY29sLXNwYW4tM2AsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWluVGVtcCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF4VGVtcCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmUoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3QgdmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaWVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgVmlzaWJpbGl0eWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgdmlzaWJpbGl0eWApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufVxuXG5jb25zdCBjbG91ZHMgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBDbG91ZGluZXNzYDtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBjbG91ZHNgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRTcGVlZCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kU3BlZWRgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHdpbmQoKTtcbn07XG5cbmNvbnN0IHdpbmREaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXaW5kIGRpcmVjdGlvbmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdpbmREaXJlZHRpb25gKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHdpbmQoKTtcbn07XG5cbmNvbnN0IGd1c3QgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgR3VzdGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgZ3VzdGApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3Qgd2luZCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHJvdy1zcGFuLTNgLFxuICAgICAgICBgZ3JpZC1yb3ctM2AsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdpbmRgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kRGlyZWN0aW9uKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChndXN0KCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckdyb3VwID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdlYXRoZXIgZ3JvdXBgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGB3ZWF0aGVyR3JvdXBgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHdlYXRoZXIoKTtcbn07XG5cbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBDb25kaXRpb25gO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJDb25kaXRpb25gKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHdlYXRoZXIoKTtcbn07XG5cbmNvbnN0IHdlYXRoZXIgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgcm93LXNwYW4tMmAsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGB3ZWF0aGVyYCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJHcm91cCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbmRpdGlvbigpKTtcblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlcmNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgc3VucmlzZSA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBTdW5yaXNlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5yaXNlYCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBzdW4oKTtcbn07XG5cbmNvbnN0IHN1bmRvd24gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgU3VuZG93bmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgc3VuZG93bmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gc3VuKCk7XG59O1xuXG5jb25zdCBzdW4gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgcm93LXNwYW4tMmAsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VucmlzZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VuZG93bigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIoKTtcbn07XG5cbmNvbnN0IG1vdGhlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhID0gYWlyKCk7XG4gICAgY29uc3QgYiA9IHZpc2liaWxpdHkoKTtcbiAgICBjb25zdCBjID0gY2xvdWRzKClcbiAgICBjb25zdCBkID0gd2luZCgpO1xuICAgIGNvbnN0IGUgPSB3ZWF0aGVyKCk7XG4gICAgY29uc3QgZiA9IHN1bigpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkLXJvd3MtNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtY29scy0zYCxcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYGgtc2NyZWVuYCxcbiAgICAgICAgYGdhcC0yYCxcbiAgICAgICAgYHAtMWAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBvdXRwdXRVSWApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGYpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyB0byBiZSBhcHBlbmRlZCBpbnRvIGJvZHk7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgZmlsbD0lMjdub25lJTI3IHZpZXdCb3g9JTI3MCAwIDIwIDIwJTI3JTNlJTNjcGF0aCBzdHJva2U9JTI3JTIzNmI3MjgwJTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyBzdHJva2Utd2lkdGg9JTI3MS41JTI3IGQ9JTI3TTYgOGw0IDQgNC00JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JTI3MCAwIDE2IDE2JTI3IGZpbGw9JTI3d2hpdGUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjclM2UlM2NwYXRoIGQ9JTI3TTEyLjIwNyA0Ljc5M2ExIDEgMCAwMTAgMS40MTRsLTUgNWExIDEgMCAwMS0xLjQxNCAwbC0yLTJhMSAxIDAgMDExLjQxNC0xLjQxNEw2LjUgOS4wODZsNC4yOTMtNC4yOTNhMSAxIDAgMDExLjQxNCAweiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyBmaWxsPSUyN3doaXRlJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3JTNlJTNjY2lyY2xlIGN4PSUyNzglMjcgY3k9JTI3OCUyNyByPSUyNzMlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgZmlsbD0lMjdub25lJTI3IHZpZXdCb3g9JTI3MCAwIDE2IDE2JTI3JTNlJTNjcGF0aCBzdHJva2U9JTI3d2hpdGUlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3IHN0cm9rZS13aWR0aD0lMjcyJTI3IGQ9JTI3TTQgOGg4JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMi43IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblt0eXBlPSd0ZXh0J10sW3R5cGU9J2VtYWlsJ10sW3R5cGU9J3VybCddLFt0eXBlPSdwYXNzd29yZCddLFt0eXBlPSdudW1iZXInXSxbdHlwZT0nZGF0ZSddLFt0eXBlPSdkYXRldGltZS1sb2NhbCddLFt0eXBlPSdtb250aCddLFt0eXBlPSdzZWFyY2gnXSxbdHlwZT0ndGVsJ10sW3R5cGU9J3RpbWUnXSxbdHlwZT0nd2VlayddLFttdWx0aXBsZV0sdGV4dGFyZWEsc2VsZWN0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM2YjcyODA7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXG5cXG5bdHlwZT0ndGV4dCddOmZvY3VzLCBbdHlwZT0nZW1haWwnXTpmb2N1cywgW3R5cGU9J3VybCddOmZvY3VzLCBbdHlwZT0ncGFzc3dvcmQnXTpmb2N1cywgW3R5cGU9J251bWJlciddOmZvY3VzLCBbdHlwZT0nZGF0ZSddOmZvY3VzLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXTpmb2N1cywgW3R5cGU9J21vbnRoJ106Zm9jdXMsIFt0eXBlPSdzZWFyY2gnXTpmb2N1cywgW3R5cGU9J3RlbCddOmZvY3VzLCBbdHlwZT0ndGltZSddOmZvY3VzLCBbdHlwZT0nd2VlayddOmZvY3VzLCBbbXVsdGlwbGVdOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcXG59XFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzZiNzI4MDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcXG4gIG1pbi1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1ob3VyLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZS1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1zZWNvbmQtZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWlsbGlzZWNvbmQtZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWVyaWRpZW0tZmllbGQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjVyZW0gY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS41ZW0gMS41ZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxuICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICAgICAgICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxufVxcblxcblttdWx0aXBsZV0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogdW5zZXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IHVuc2V0O1xcbiAgICAgICAgICBwcmludC1jb2xvci1hZGp1c3Q6IHVuc2V0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxbdHlwZT0ncmFkaW8nXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICAgICAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGNvbG9yOiAjMjU2M2ViO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzZiNzI4MDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG5cXG5bdHlwZT0ncmFkaW8nXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpmb2N1cyxbdHlwZT0ncmFkaW8nXTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgLS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAycHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiAjMjU2M2ViO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDJweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcblt0eXBlPSdyYWRpbyddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDpob3ZlcixbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmZvY3VzLFt0eXBlPSdyYWRpbyddOmNoZWNrZWQ6aG92ZXIsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlOmhvdmVyLFt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuW3R5cGU9J2ZpbGUnXSB7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiB1bnNldDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBCdXR0b25UZXh0O1xcbiAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI4MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICB9XFxufVxcbi5jb2wtc3Bhbi0zIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDMgLyBzcGFuIDM7XFxufVxcbi5jb2wtc3RhcnQtMSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuLmNvbC1zdGFydC0yIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG4uY29sLXN0YXJ0LTMge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxufVxcbi5jb2wtZW5kLTMge1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG4uY29sLWVuZC00IHtcXG4gIGdyaWQtY29sdW1uLWVuZDogNDtcXG59XFxuLmNvbC1lbmQtNSB7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxufVxcbi5yb3ctc3Bhbi0xIHtcXG4gIGdyaWQtcm93OiBzcGFuIDEgLyBzcGFuIDE7XFxufVxcbi5yb3ctc3Bhbi0yIHtcXG4gIGdyaWQtcm93OiBzcGFuIDIgLyBzcGFuIDI7XFxufVxcbi5yb3ctc3Bhbi0zIHtcXG4gIGdyaWQtcm93OiBzcGFuIDMgLyBzcGFuIDM7XFxufVxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uZ3JpZC1jb2xzLTMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1yb3dzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1yb3dzLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ2FwLTEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4uZ2FwLTIge1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5nYXAteS0yIHtcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuLmJvcmRlci00IHtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4uYm9yZGVyLXNvbGlkIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbi5ib3JkZXItYW1iZXItNTAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyNDUgMTU4IDExIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1uZXV0cmFsLTkwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjMgMjMgMjMgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtNDAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRlYWwtNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCAxODQgMTY2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctdGVhbC04MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDk0IDg5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctdGVhbC05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5IDc4IDc0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC0xIHtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbi5wLTIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLmhvdmVyXFxcXDpiZy1zbGF0ZS0yMDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQsd0VBQWM7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtFQUFBLHdCQUFjO0tBQWQscUJBQWM7VUFBZCxnQkFBYztFQUFkLHNCQUFjO0VBQWQscUJBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsbUJBQWM7RUFBZCxzQkFBYztFQUFkLHNCQUFjO0VBQWQscUJBQWM7RUFBZCxlQUFjO0VBQWQsbUJBQWM7RUFBZCxzQkFBYztBQUFBOztBQUFkO0VBQUEsOEJBQWM7RUFBZCxtQkFBYztFQUFkLDRDQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHdCQUFjO0VBQWQsMkdBQWM7RUFBZCx5R0FBYztFQUFkLGlGQUFjO0VBQWQ7QUFBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQTtBQUFjOztBQUFkO0VBQUE7QUFBYzs7QUFBZDtFQUFBLGNBQWM7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RUFBZDtBQUFjO0FBQ2Q7RUFBQTtBQUFvQjtBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBO0FBQXBCOztFQUFBO0lBQUE7RUFBb0I7QUFBQTtBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBO0FBQ3BCO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBRm5CO0VBQUEsbUJDQUE7RURBQTtDQ0FBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICAgIFVJXG59IGZyb20gJy4vVUkuanMnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChVSSgpKTtcblxuXG5cbmNvbnN0IG9idGFpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWtlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb25GaWVsZCcpLnZhbHVlfSZBUFBJRD0ke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNBUElLZXlGaWVsZCcpLnZhbHVlfWAsIHtcbiAgICAgICAgICAgIG1vZGU6IGBjb3JzYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGFrZS5qc29uKCk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH07XG59O1xuXG5jb25zdCBpbml0aWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvY2Vzc0J1dHRvbmApO1xuaW5pdGlhdG9yLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIG9idGFpbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSlcbn0pXG4iXSwibmFtZXMiOlsibW90aGVyQ29udGFpbmVyIiwib3V0cHV0VUkiLCJpbnB1dFVJIiwiVUkiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImtleSIsImxhYmVsIiwidGV4dENvbnRlbnQiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImxvY2F0aW9uIiwicHJvY2Vzc0J1dHRvbiIsImJ1dHRvbiIsIm1pblRlbXAiLCJpbmZvIiwibWF4VGVtcCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJhaXIiLCJ2aXNpYmlsaXR5IiwiY2xvdWRzIiwid2luZFNwZWVkIiwid2luZERpcmVjdGlvbiIsImd1c3QiLCJ3aW5kIiwid2VhdGhlckdyb3VwIiwid2VhdGhlckNvbmRpdGlvbiIsIndlYXRoZXIiLCJzdW5yaXNlIiwic3VuZG93biIsInN1biIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImJvZHkiLCJvYnRhaW4iLCJ0YWtlIiwiZmV0Y2giLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJtb2RlIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWF0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=
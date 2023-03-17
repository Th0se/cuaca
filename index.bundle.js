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
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  info.setAttribute(`id`, `minimumTemperature`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const maxTemp = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Maximum Temperature`;
  label.classList.add(`text-xl`, `text-center`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `maximumTemperature`);
  info.classList.add(`flex`, `text-5xl`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const pressure = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Air pressure`;
  label.classList.add(`text-xl`, `text-center`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `airPressure`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into air();
};

const humidity = () => {
  //Info sub container;
  const label = document.createElement(`div`);
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  label.textContent = `Air Humidity`;
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `airHumidity`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
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
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `visibility`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-neutral-900`, `p-2`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into motherContainer();
};

const clouds = () => {
  // Info container;
  const label = document.createElement(`div`);
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  label.textContent = `Cloudiness`;
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `clouds`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
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
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `windSpeed`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into wind();
};

const windDirection = () => {
  // Info sub container
  const label = document.createElement(`div`);
  label.textContent = `Wind direction`;
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `windDirection`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into wind();
};

const gust = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Gust`;
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  ;
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `gust`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
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
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `weatherGroup`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into weather();
};

const weatherCondition = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Weather Condition`;
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `weatherCondition`);
  info.classList.add(`text-center`, `text-5xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
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
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `sunrise`);
  info.classList.add(`text-center`, `text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
  container.appendChild(label);
  container.appendChild(info);
  return container;
  // To be appended into sun();
};

const sundown = () => {
  // Info sub container;
  const label = document.createElement(`div`);
  label.textContent = `Sundown`;
  label.classList.add(`text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const info = document.createElement(`div`);
  info.setAttribute(`id`, `sundown`);
  info.classList.add(`text-center`, `text-xl`, `flex`, `flex-row`, `justify-center`, `items-center`);
  const container = document.createElement(`div`);
  container.classList.add(`border-solid`, `border-amber-500`, `border-4`, `grid`, `grid-rows-2`);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n          print-color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n[type='radio']:checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\n\n[type='file']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.col-start-3 {\n  grid-column-start: 3;\n}\n.col-end-3 {\n  grid-column-end: 3;\n}\n.col-end-4 {\n  grid-column-end: 4;\n}\n.col-end-5 {\n  grid-column-end: 5;\n}\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.h-screen {\n  height: 100vh;\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n.border-4 {\n  border-width: 4px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-amber-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 158 11 / var(--tw-border-opacity));\n}\n.border-neutral-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(23 23 23 / var(--tw-border-opacity));\n}\n.bg-slate-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n.bg-teal-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\n.bg-teal-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 94 89 / var(--tw-bg-opacity));\n}\n.bg-teal-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 78 74 / var(--tw-bg-opacity));\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.hover\\:bg-slate-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/styles.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
    const take = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#locationField').value}&APPID=${document.querySelector('#APIKeyField').value}&units=Metric`, {
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
    const minimumTemperature = document.querySelector(`#minimumTemperature`);
    minimumTemperature.textContent = `${data.main.temp_min}°C`;
    const maximumTemperature = document.querySelector(`#maximumTemperature`);
    maximumTemperature.textContent = `${data.main.temp_max}°C`;
    const airPressure = document.querySelector(`#airPressure`);
    airPressure.textContent = `${data.main.pressure}hPa`;
    const airHumidity = document.querySelector(`#airHumidity`);
    airHumidity.textContent = `${data.main.humidity}%`;
    const visibility = document.querySelector(`#visibility`);
    visibility.textContent = `${data.visibility} metres`;
    const clouds = document.querySelector(`#clouds`);
    clouds.textContent = `${data.clouds.all}%`;
    const windSpeed = document.querySelector(`#windSpeed`);
    windSpeed.textContent = `${data.wind.speed} metre/second`;
    const windDirection = document.querySelector(`#windDirection`);
    windDirection.textContent = `${data.wind.deg}°`;
    const gust = document.querySelector(`#gust`);
    gust.textContent = `${data.wind.gust} metre/second`;
    const weatherGroup = document.querySelector(`#weatherGroup`);
    weatherGroup.textContent = `${data.weather[0].main}`;
    const weatherDetail = document.querySelector(`#weatherCondition`);
    weatherDetail.textContent = `${data.weather[0].description}`;
    const sunrise = document.querySelector(`#sunrise`);
    const dawn = new Date(data.sys.sunrise * 1000);
    sunrise.textContent = `${dawn}`;
    const sundown = document.querySelector(`#sundown`);
    const dusk = new Date(data.sys.sunset * 1000);
    sundown.textContent = `${dusk}`;
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFN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SSxHQUFFcUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDb0MsV0FBWSxFQUFDO0lBRTVELE1BQU1uQyxPQUFPLEdBQUc1QixRQUFRLENBQUN5QyxhQUFhLENBQUUsVUFBUyxDQUFDO0lBQ2xELE1BQU11QixJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsR0FBRyxDQUFDdEMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUM5Q0EsT0FBTyxDQUFDckIsV0FBVyxHQUFJLEdBQUV5RCxJQUFLLEVBQUM7SUFFL0IsTUFBTW5DLE9BQU8sR0FBRzdCLFFBQVEsQ0FBQ3lDLGFBQWEsQ0FBRSxVQUFTLENBQUM7SUFDbEQsTUFBTTBCLElBQUksR0FBRyxJQUFJRixJQUFJLENBQUNyQixJQUFJLENBQUNzQixHQUFHLENBQUNFLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDN0N2QyxPQUFPLENBQUN0QixXQUFXLEdBQUksR0FBRTRELElBQUssRUFBQztFQUNuQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL1VJLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2lucHV0LnVpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL291dHB1dC51aS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9zdHlsZXMuY3NzP2E4ZDAiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lciBhcyBvdXRwdXRVSVxufSBmcm9tICcuL291dHB1dC51aS5qcyc7XG5pbXBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lciBhcyBpbnB1dFVJXG59IGZyb20gJy4vaW5wdXQudWkuanMnO1xuXG5jb25zdCBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRVSSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3V0cHV0VUkoKSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTkwMGAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICAgIFVJLFxufTsiLCJjb25zdCBrZXkgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBFbnRlciB5b3VyIEFQSSBrZXlgO1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgdGV4dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgaWRgLCBgQVBJS2V5RmllbGRgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtMWAsXG4gICAgICAgIGBjb2wtZW5kLTNgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBsb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgbG9jYXRpb25gO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBsb2NhdGlvbkZpZWxkYCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBwbGFjZWhvbGRlcmAsIGBMb25kb24sVUtgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtM2AsXG4gICAgICAgIGBjb2wtZW5kLTVgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBwcm9jZXNzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHByb2Nlc3NCdXR0b25gKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgUHJvY2Vzc2A7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYGNvbC1zdGFydC0yYCxcbiAgICAgICAgYGNvbC1lbmQtNGAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGJnLXNsYXRlLTQwMGAsXG4gICAgICAgIGBob3ZlcjpiZy1zbGF0ZS0yMDBgLFxuICAgIClcblxuICAgIHJldHVybiBidXR0b247XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBtb3RoZXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgaW5wdXRVSWApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC04MDBgLFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgZ3JpZC1jb2xzLTRgLFxuICAgICAgICBgZ2FwLXktMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoa2V5KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvY2Vzc0J1dHRvbigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn0iLCJjb25zdCBtaW5UZW1wID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYE1pbmltdW0gdGVtcGVyYXR1cmVgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBtaW5pbXVtVGVtcGVyYXR1cmVgKVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgbWF4VGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgbWF4aW11bVRlbXBlcmF0dXJlYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gYWlyKCk7XG59O1xuXG5jb25zdCBwcmVzc3VyZSA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgcHJlc3N1cmVgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJQcmVzc3VyZWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgaHVtaWRpdHkgPSAoKSA9PiB7XG4gICAgLy9JbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgSHVtaWRpdHlgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJIdW1pZGl0eWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgYWlyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLWNvbHMtNGAsXG4gICAgICAgIGBjb2wtc3Bhbi0zYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGFpcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgdmlzaWJpbGl0eWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGNsb3VkcyA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYENsb3VkaW5lc3NgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBjbG91ZHNgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2luZFNwZWVkID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kU3BlZWRgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2luZCBkaXJlY3Rpb25gO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kRGlyZWN0aW9uYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3QgZ3VzdCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBHdXN0YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTs7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYGd1c3RgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgcm93LXNwYW4tM2AsXG4gICAgICAgIGBncmlkLXJvdy0zYCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZGApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGd1c3QoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyR3JvdXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBncm91cGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJHcm91cGApXG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXZWF0aGVyIENvbmRpdGlvbmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJDb25kaXRpb25gKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3ZWF0aGVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYHJvdy1zcGFuLTJgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2VhdGhlcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyR3JvdXAoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb25kaXRpb24oKSk7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJjb250YWluZXIoKTtcbn07XG5cbmNvbnN0IHN1bnJpc2UgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgU3VucmlzZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bnJpc2VgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHN1bigpO1xufTtcblxuY29uc3Qgc3VuZG93biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBTdW5kb3duYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgc3VuZG93bmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gc3VuKCk7XG59O1xuXG5jb25zdCBzdW4gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgcm93LXNwYW4tMmAsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VucmlzZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VuZG93bigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIoKTtcbn07XG5cbmNvbnN0IG1vdGhlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhID0gYWlyKCk7XG4gICAgY29uc3QgYiA9IHZpc2liaWxpdHkoKTtcbiAgICBjb25zdCBjID0gY2xvdWRzKClcbiAgICBjb25zdCBkID0gd2luZCgpO1xuICAgIGNvbnN0IGUgPSB3ZWF0aGVyKCk7XG4gICAgY29uc3QgZiA9IHN1bigpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkLXJvd3MtNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtY29scy0zYCxcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYGgtc2NyZWVuYCxcbiAgICAgICAgYGdhcC0yYCxcbiAgICAgICAgYHAtMWAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBvdXRwdXRVSWApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGYpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyB0byBiZSBhcHBlbmRlZCBpbnRvIGJvZHk7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgZmlsbD0lMjdub25lJTI3IHZpZXdCb3g9JTI3MCAwIDIwIDIwJTI3JTNlJTNjcGF0aCBzdHJva2U9JTI3JTIzNmI3MjgwJTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyBzdHJva2Utd2lkdGg9JTI3MS41JTI3IGQ9JTI3TTYgOGw0IDQgNC00JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JTI3MCAwIDE2IDE2JTI3IGZpbGw9JTI3d2hpdGUlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjclM2UlM2NwYXRoIGQ9JTI3TTEyLjIwNyA0Ljc5M2ExIDEgMCAwMTAgMS40MTRsLTUgNWExIDEgMCAwMS0xLjQxNCAwbC0yLTJhMSAxIDAgMDExLjQxNC0xLjQxNEw2LjUgOS4wODZsNC4yOTMtNC4yOTNhMSAxIDAgMDExLjQxNCAweiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyBmaWxsPSUyN3doaXRlJTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3JTNlJTNjY2lyY2xlIGN4PSUyNzglMjcgY3k9JTI3OCUyNyByPSUyNzMlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgZmlsbD0lMjdub25lJTI3IHZpZXdCb3g9JTI3MCAwIDE2IDE2JTI3JTNlJTNjcGF0aCBzdHJva2U9JTI3d2hpdGUlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3IHN0cm9rZS13aWR0aD0lMjcyJTI3IGQ9JTI3TTQgOGg4JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMi43IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblt0eXBlPSd0ZXh0J10sW3R5cGU9J2VtYWlsJ10sW3R5cGU9J3VybCddLFt0eXBlPSdwYXNzd29yZCddLFt0eXBlPSdudW1iZXInXSxbdHlwZT0nZGF0ZSddLFt0eXBlPSdkYXRldGltZS1sb2NhbCddLFt0eXBlPSdtb250aCddLFt0eXBlPSdzZWFyY2gnXSxbdHlwZT0ndGVsJ10sW3R5cGU9J3RpbWUnXSxbdHlwZT0nd2VlayddLFttdWx0aXBsZV0sdGV4dGFyZWEsc2VsZWN0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM2YjcyODA7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXG5cXG5bdHlwZT0ndGV4dCddOmZvY3VzLCBbdHlwZT0nZW1haWwnXTpmb2N1cywgW3R5cGU9J3VybCddOmZvY3VzLCBbdHlwZT0ncGFzc3dvcmQnXTpmb2N1cywgW3R5cGU9J251bWJlciddOmZvY3VzLCBbdHlwZT0nZGF0ZSddOmZvY3VzLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXTpmb2N1cywgW3R5cGU9J21vbnRoJ106Zm9jdXMsIFt0eXBlPSdzZWFyY2gnXTpmb2N1cywgW3R5cGU9J3RlbCddOmZvY3VzLCBbdHlwZT0ndGltZSddOmZvY3VzLCBbdHlwZT0nd2VlayddOmZvY3VzLCBbbXVsdGlwbGVdOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcXG59XFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzZiNzI4MDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcXG4gIG1pbi1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1ob3VyLWZpZWxkLDo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZS1maWVsZCw6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1zZWNvbmQtZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWlsbGlzZWNvbmQtZmllbGQsOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbWVyaWRpZW0tZmllbGQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjVyZW0gY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS41ZW0gMS41ZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxuICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICAgICAgICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxufVxcblxcblttdWx0aXBsZV0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogdW5zZXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IHVuc2V0O1xcbiAgICAgICAgICBwcmludC1jb2xvci1hZGp1c3Q6IHVuc2V0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxbdHlwZT0ncmFkaW8nXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICAgICAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGNvbG9yOiAjMjU2M2ViO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzZiNzI4MDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG5cXG5bdHlwZT0ncmFkaW8nXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpmb2N1cyxbdHlwZT0ncmFkaW8nXTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgLS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAycHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiAjMjU2M2ViO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDJweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcblt0eXBlPSdyYWRpbyddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDpob3ZlcixbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmZvY3VzLFt0eXBlPSdyYWRpbyddOmNoZWNrZWQ6aG92ZXIsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlOmhvdmVyLFt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuW3R5cGU9J2ZpbGUnXSB7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiB1bnNldDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBCdXR0b25UZXh0O1xcbiAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI4MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICB9XFxufVxcbi5jb2wtc3Bhbi0zIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDMgLyBzcGFuIDM7XFxufVxcbi5jb2wtc3RhcnQtMSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuLmNvbC1zdGFydC0yIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG4uY29sLXN0YXJ0LTMge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxufVxcbi5jb2wtZW5kLTMge1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG4uY29sLWVuZC00IHtcXG4gIGdyaWQtY29sdW1uLWVuZDogNDtcXG59XFxuLmNvbC1lbmQtNSB7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxufVxcbi5yb3ctc3Bhbi0xIHtcXG4gIGdyaWQtcm93OiBzcGFuIDEgLyBzcGFuIDE7XFxufVxcbi5yb3ctc3Bhbi0yIHtcXG4gIGdyaWQtcm93OiBzcGFuIDIgLyBzcGFuIDI7XFxufVxcbi5yb3ctc3Bhbi0zIHtcXG4gIGdyaWQtcm93OiBzcGFuIDMgLyBzcGFuIDM7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uZ3JpZC1jb2xzLTMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1yb3dzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1yb3dzLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5nYXAtMSB7XFxuICBnYXA6IDAuMjVyZW07XFxufVxcbi5nYXAtMiB7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmdhcC15LTIge1xcbiAgcm93LWdhcDogMC41cmVtO1xcbn1cXG4uYm9yZGVyLTQge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcbi5ib3JkZXItc29saWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLmJvcmRlci1hbWJlci01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI0NSAxNTggMTEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLW5ldXRyYWwtOTAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyMyAyMyAyMyAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy1zbGF0ZS00MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctdGVhbC01MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwIDE4NCAxNjYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy10ZWFsLTgwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgOTQgODkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy10ZWFsLTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkgNzggNzQgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5wLTEge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMjAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFB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O0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFGbkI7RUFBQSxtQkNBQTtFREFBO0NDQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7XG4gICAgVUlcbn0gZnJvbSAnLi9VSS5qcyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFVJKCkpO1xuXG5cblxuY29uc3Qgb2J0YWluID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRha2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbkZpZWxkJykudmFsdWV9JkFQUElEPSR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FQSUtleUZpZWxkJykudmFsdWV9JnVuaXRzPU1ldHJpY2AsIHtcbiAgICAgICAgICAgIG1vZGU6IGBjb3JzYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGFrZS5qc29uKCk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH07XG59O1xuXG5jb25zdCBpbml0aWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvY2Vzc0J1dHRvbmApO1xuaW5pdGlhdG9yLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIG9idGFpbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbWluaW11bVRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21pbmltdW1UZW1wZXJhdHVyZWApO1xuICAgICAgICBtaW5pbXVtVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4udGVtcF9taW59wrBDYDtcblxuICAgICAgICBjb25zdCBtYXhpbXVtVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbWF4aW11bVRlbXBlcmF0dXJlYCk7XG4gICAgICAgIG1heGltdW1UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi50ZW1wX21heH3CsENgO1xuXG4gICAgICAgIGNvbnN0IGFpclByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FpclByZXNzdXJlYCk7XG4gICAgICAgIGFpclByZXNzdXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLnByZXNzdXJlfWhQYWA7XG5cbiAgICAgICAgY29uc3QgYWlySHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWlySHVtaWRpdHlgKTtcbiAgICAgICAgYWlySHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XG5cbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN2aXNpYmlsaXR5YCk7XG4gICAgICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLnZpc2liaWxpdHl9IG1ldHJlc2A7XG5cbiAgICAgICAgY29uc3QgY2xvdWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Nsb3Vkc2ApO1xuICAgICAgICBjbG91ZHMudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNsb3Vkcy5hbGx9JWA7XG5cbiAgICAgICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dpbmRTcGVlZGApO1xuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmQuc3BlZWR9IG1ldHJlL3NlY29uZGA7XG5cbiAgICAgICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3aW5kRGlyZWN0aW9uYCk7XG4gICAgICAgIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmQuZGVnfcKwYDtcblxuICAgICAgICBjb25zdCBndXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2d1c3RgKTtcbiAgICAgICAgZ3VzdC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZC5ndXN0fSBtZXRyZS9zZWNvbmRgO1xuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3ZWF0aGVyR3JvdXBgKTtcbiAgICAgICAgd2VhdGhlckdyb3VwLnRleHRDb250ZW50ID0gYCR7ZGF0YS53ZWF0aGVyWzBdLm1haW59YDtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyRGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dlYXRoZXJDb25kaXRpb25gKTtcbiAgICAgICAgd2VhdGhlckRldGFpbC50ZXh0Q29udGVudCA9IGAke2RhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3VucmlzZWApO1xuICAgICAgICBjb25zdCBkYXduID0gbmV3IERhdGUoZGF0YS5zeXMuc3VucmlzZSAqIDEwMDApO1xuICAgICAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gYCR7ZGF3bn1gO1xuXG4gICAgICAgIGNvbnN0IHN1bmRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3VuZG93bmApO1xuICAgICAgICBjb25zdCBkdXNrID0gbmV3IERhdGUoZGF0YS5zeXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgICAgIHN1bmRvd24udGV4dENvbnRlbnQgPSBgJHtkdXNrfWA7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJtb3RoZXJDb250YWluZXIiLCJvdXRwdXRVSSIsImlucHV0VUkiLCJVSSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwia2V5IiwibGFiZWwiLCJ0ZXh0Q29udGVudCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwibG9jYXRpb24iLCJwcm9jZXNzQnV0dG9uIiwiYnV0dG9uIiwibWluVGVtcCIsImluZm8iLCJtYXhUZW1wIiwicHJlc3N1cmUiLCJodW1pZGl0eSIsImFpciIsInZpc2liaWxpdHkiLCJjbG91ZHMiLCJ3aW5kU3BlZWQiLCJ3aW5kRGlyZWN0aW9uIiwiZ3VzdCIsIndpbmQiLCJ3ZWF0aGVyR3JvdXAiLCJ3ZWF0aGVyQ29uZGl0aW9uIiwid2VhdGhlciIsInN1bnJpc2UiLCJzdW5kb3duIiwic3VuIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiYm9keSIsIm9idGFpbiIsInRha2UiLCJmZXRjaCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsIm1vZGUiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImluaXRpYXRvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGVuIiwibWluaW11bVRlbXBlcmF0dXJlIiwibWFpbiIsInRlbXBfbWluIiwibWF4aW11bVRlbXBlcmF0dXJlIiwidGVtcF9tYXgiLCJhaXJQcmVzc3VyZSIsImFpckh1bWlkaXR5IiwiYWxsIiwic3BlZWQiLCJkZWciLCJ3ZWF0aGVyRGV0YWlsIiwiZGVzY3JpcHRpb24iLCJkYXduIiwiRGF0ZSIsInN5cyIsImR1c2siLCJzdW5zZXQiXSwic291cmNlUm9vdCI6IiJ9
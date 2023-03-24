/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
const back = () => {
  const link = document.createElement(`a`);
  link.href = `https://openweathermap.org`;
  link.textContent = `Openweather Map`;
  link.classList.add(`underline`);
  const banner = document.createElement(`p`);
  banner.textContent = `Back end provided by `;
  banner.appendChild(link);
  banner.classList.add(`text-center`);
  return banner;
  // To be appended into footer.
};

const front = () => {
  const banner = document.createElement(`p`);
  banner.textContent = `Front end was made and is maintained by Thomas Praselino`;
  banner.classList.add(`text-center`);
  return banner;
  // To be appended into footer.
};

const visit = () => {
  const link = document.createElement(`a`);
  link.href = `https://github.com/Th0se/cuaca`;
  link.textContent = `here`;
  link.classList.add(`underline`);
  const repository = document.createElement(`p`);
  repository.textContent = `The project is available to inspect `;
  repository.appendChild(link);
  repository.classList.add(`text-center`);
  return repository;
};
const footer = () => {
  const container = document.createElement(`div`);
  container.appendChild(back());
  container.appendChild(front());
  container.appendChild(visit());
  return container;
};


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
const header = () => {
  const banner = document.createElement(`div`);
  banner.textContent = `Weather Monitor`;
  banner.classList.add(`text-6xl`, `text-center`);
  return banner;
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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _output_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.ui.js */ "./src/output.ui.js");
/* harmony import */ var _input_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.ui.js */ "./src/input.ui.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");




const UI = () => {
  const container = document.createElement(`div`);
  container.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_2__.header)());
  container.appendChild((0,_input_ui_js__WEBPACK_IMPORTED_MODULE_1__.motherContainer)());
  container.appendChild((0,_output_ui_js__WEBPACK_IMPORTED_MODULE_0__.motherContainer)());
  container.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.footer)());
  container.classList.add(`bg-teal-900`);
  return container;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQ2pDbEMsU0FBUyxDQUFDTCxXQUFXLENBQUNJLGtEQUFNLEVBQUUsQ0FBQztFQUMvQkMsU0FBUyxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FDbEIsYUFBWSxDQUNoQjtFQUVELE9BQU9PLFNBQVM7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvaW5wdXQudWkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvb3V0cHV0LnVpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFjayA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYWApO1xuICAgIGxpbmsuaHJlZiA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZ2A7XG4gICAgbGluay50ZXh0Q29udGVudCA9IGBPcGVud2VhdGhlciBNYXBgO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHVuZGVybGluZWAsXG4gICAgKTtcblxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKTtcbiAgICBiYW5uZXIudGV4dENvbnRlbnQgPSBgQmFjayBlbmQgcHJvdmlkZWQgYnkgYFxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGJhbm5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGZvb3Rlci5cbn07XG5cbmNvbnN0IGZyb250ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKTtcbiAgICBiYW5uZXIudGV4dENvbnRlbnQgPSBgRnJvbnQgZW5kIHdhcyBtYWRlIGFuZCBpcyBtYWludGFpbmVkIGJ5IFRob21hcyBQcmFzZWxpbm9gO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICByZXR1cm4gYmFubmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gZm9vdGVyLlxufTtcblxuY29uc3QgdmlzaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGFgKTtcbiAgICBsaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL1RoMHNlL2N1YWNhYDtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gYGhlcmVgO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHVuZGVybGluZWAsXG4gICAgKTtcblxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG4gICAgcmVwb3NpdG9yeS50ZXh0Q29udGVudCA9IGBUaGUgcHJvamVjdCBpcyBhdmFpbGFibGUgdG8gaW5zcGVjdCBgXG4gICAgcmVwb3NpdG9yeS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICByZXBvc2l0b3J5LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcbiAgICByZXR1cm4gcmVwb3NpdG9yeTtcbn1cblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcm9udCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlzaXQoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuXG5leHBvcnQge1xuICAgIGZvb3Rlcixcbn0iLCJjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgYmFubmVyLnRleHRDb250ZW50ID0gYFdlYXRoZXIgTW9uaXRvcmA7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LTZ4bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG5cbiAgICApO1xuICAgIFxuICAgIHJldHVybiBiYW5uZXI7XG59O1xuXG5leHBvcnQge1xuICAgIGhlYWRlcixcbn0iLCJjb25zdCBrZXkgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBFbnRlciB5b3VyIEFQSSBrZXlgO1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgdGV4dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgaWRgLCBgQVBJS2V5RmllbGRgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtMWAsXG4gICAgICAgIGBjb2wtZW5kLTNgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBsb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgbG9jYXRpb25gO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBsb2NhdGlvbkZpZWxkYCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBwbGFjZWhvbGRlcmAsIGBMb25kb24sVUtgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtM2AsXG4gICAgICAgIGBjb2wtZW5kLTVgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBwcm9jZXNzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHByb2Nlc3NCdXR0b25gKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgUHJvY2Vzc2A7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYGNvbC1zdGFydC0yYCxcbiAgICAgICAgYGNvbC1lbmQtNGAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGJnLXNsYXRlLTQwMGAsXG4gICAgICAgIGBob3ZlcjpiZy1zbGF0ZS0yMDBgLFxuICAgIClcblxuICAgIHJldHVybiBidXR0b247XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBtb3RoZXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgaW5wdXRVSWApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC04MDBgLFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgZ3JpZC1jb2xzLTRgLFxuICAgICAgICBgZ2FwLXktMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoa2V5KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvY2Vzc0J1dHRvbigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn0iLCJjb25zdCBtaW5UZW1wID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYE1pbmltdW0gdGVtcGVyYXR1cmVgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBtaW5pbXVtVGVtcGVyYXR1cmVgKVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgbWF4VGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgbWF4aW11bVRlbXBlcmF0dXJlYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gYWlyKCk7XG59O1xuXG5jb25zdCBwcmVzc3VyZSA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgcHJlc3N1cmVgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJQcmVzc3VyZWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgaHVtaWRpdHkgPSAoKSA9PiB7XG4gICAgLy9JbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgSHVtaWRpdHlgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJIdW1pZGl0eWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgYWlyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLWNvbHMtNGAsXG4gICAgICAgIGBjb2wtc3Bhbi0zYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGFpcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgdmlzaWJpbGl0eWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGNsb3VkcyA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYENsb3VkaW5lc3NgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBjbG91ZHNgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2luZFNwZWVkID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kU3BlZWRgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2luZCBkaXJlY3Rpb25gO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kRGlyZWN0aW9uYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3QgZ3VzdCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBHdXN0YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTs7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYGd1c3RgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgcm93LXNwYW4tM2AsXG4gICAgICAgIGBncmlkLXJvdy0zYCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZGApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGd1c3QoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyR3JvdXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBncm91cGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJHcm91cGApXG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXZWF0aGVyIENvbmRpdGlvbmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJDb25kaXRpb25gKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3ZWF0aGVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYHJvdy1zcGFuLTJgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2VhdGhlcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyR3JvdXAoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb25kaXRpb24oKSk7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJjb250YWluZXIoKTtcbn07XG5cbmNvbnN0IHN1bnJpc2UgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgU3VucmlzZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bnJpc2VgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHN1bigpO1xufTtcblxuY29uc3Qgc3VuZG93biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBTdW5kb3duYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgc3VuZG93bmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gc3VuKCk7XG59O1xuXG5jb25zdCBzdW4gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgcm93LXNwYW4tMmAsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VucmlzZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VuZG93bigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIoKTtcbn07XG5cbmNvbnN0IG1vdGhlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhID0gYWlyKCk7XG4gICAgY29uc3QgYiA9IHZpc2liaWxpdHkoKTtcbiAgICBjb25zdCBjID0gY2xvdWRzKClcbiAgICBjb25zdCBkID0gd2luZCgpO1xuICAgIGNvbnN0IGUgPSB3ZWF0aGVyKCk7XG4gICAgY29uc3QgZiA9IHN1bigpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkLXJvd3MtNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtY29scy0zYCxcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYGgtc2NyZWVuYCxcbiAgICAgICAgYGdhcC0yYCxcbiAgICAgICAgYHAtMWAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBvdXRwdXRVSWApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGYpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyB0byBiZSBhcHBlbmRlZCBpbnRvIGJvZHk7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lciBhcyBvdXRwdXRVSVxufSBmcm9tICcuL291dHB1dC51aS5qcyc7XG5pbXBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lciBhcyBpbnB1dFVJXG59IGZyb20gJy4vaW5wdXQudWkuanMnO1xuaW1wb3J0IHtcbiAgICBoZWFkZXJcbn0gZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IHtcbiAgICBmb290ZXJcbn0gZnJvbSAnLi9mb290ZXIuanMnO1xuXG5jb25zdCBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFVJKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRwdXRVSSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC05MDBgLFxuICAgICk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHtcbiAgICBVSSxcbn07Il0sIm5hbWVzIjpbImJhY2siLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYmFubmVyIiwiYXBwZW5kQ2hpbGQiLCJmcm9udCIsInZpc2l0IiwicmVwb3NpdG9yeSIsImZvb3RlciIsImNvbnRhaW5lciIsImhlYWRlciIsImtleSIsImxhYmVsIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsInByb2Nlc3NCdXR0b24iLCJidXR0b24iLCJtb3RoZXJDb250YWluZXIiLCJtaW5UZW1wIiwiaW5mbyIsIm1heFRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5IiwiYWlyIiwidmlzaWJpbGl0eSIsImNsb3VkcyIsIndpbmRTcGVlZCIsIndpbmREaXJlY3Rpb24iLCJndXN0Iiwid2luZCIsIndlYXRoZXJHcm91cCIsIndlYXRoZXJDb25kaXRpb24iLCJ3ZWF0aGVyIiwic3VucmlzZSIsInN1bmRvd24iLCJzdW4iLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJvdXRwdXRVSSIsImlucHV0VUkiLCJVSSJdLCJzb3VyY2VSb290IjoiIn0=
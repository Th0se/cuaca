/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const UI = () => {
  const container = document.createElement(`div`);
  container.appendChild((0,_input_ui_js__WEBPACK_IMPORTED_MODULE_1__.motherContainer)());
  container.appendChild((0,_output_ui_js__WEBPACK_IMPORTED_MODULE_0__.motherContainer)());
  container.classList.add(`bg-teal-900`);
  return container;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0VBQ3hCM0IsU0FBUyxDQUFDQyxXQUFXLENBQUMyQixDQUFDLENBQUM7RUFDeEI1QixTQUFTLENBQUNDLFdBQVcsQ0FBQzRCLENBQUMsQ0FBQztFQUV4QixPQUFPN0IsU0FBUztFQUNoQjtBQUNKLENBQUM7Ozs7Ozs7O1VDMWNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndCO0FBR0Q7QUFFdkIsTUFBTWdDLEVBQUUsR0FBR0EsQ0FBQSxLQUFNO0VBQ2IsTUFBTWhDLFNBQVMsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUUsS0FBSSxDQUFDO0VBQy9DTSxTQUFTLENBQUNDLFdBQVcsQ0FBQzhCLDZEQUFPLEVBQUUsQ0FBQztFQUNoQy9CLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDNkIsOERBQVEsRUFBRSxDQUFDO0VBQ2pDOUIsU0FBUyxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FDbEIsYUFBWSxDQUNoQjtFQUVELE9BQU9DLFNBQVM7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2lucHV0LnVpLmpzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL291dHB1dC51aS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgQVBJIGtleWA7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBBUElrZXlGaWVsZGApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTUwMGAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGNvbC1zdGFydC0xYCxcbiAgICAgICAgYGNvbC1lbmQtM2AsXG4gICAgICAgIGByb3ctc3Bhbi0xYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lci5cbn07XG5cbmNvbnN0IGxvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgRW50ZXIgeW91ciBsb2NhdGlvbmA7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGB0eXBlYCwgYHRleHRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgYGxvY2F0aW9uRmllbGRgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtM2AsXG4gICAgICAgIGBjb2wtZW5kLTVgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBwcm9jZXNzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHByb2Nlc3NCdXR0b25gKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgUHJvY2Vzc2A7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYGNvbC1zdGFydC0yYCxcbiAgICAgICAgYGNvbC1lbmQtNGAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICApXG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyLlxufTtcblxuY29uc3QgbW90aGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGlucHV0VUlgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYGdyaWQtY29scy00YCxcbiAgICAgICAgYGdhcC15LTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtleSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2Nlc3NCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHtcbiAgICBtb3RoZXJDb250YWluZXIsXG59IiwiY29uc3QgbWluVGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNaW5pbXVtIHRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBtaW5pbXVtVGVtcGVyYXR1cmVgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgbWF4VGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBNYXhpbXVtVGVtcGVyYXR1cmVgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgcHJlc3N1cmUgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgQWlyIHByZXNzdXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJQcmVzc3VyZWApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gYWlyKCk7XG59O1xuXG5jb25zdCBodW1pZGl0eSA9ICgpID0+IHtcbiAgICAvL0luZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEFpciBIdW1pZGl0eWA7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgYWlySHVtaWRpdHlgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgYWlyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLWNvbHMtNGAsXG4gICAgICAgIGBjb2wtc3Bhbi0zYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGFpcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGB2aXNpYmlsaXR5YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGNsb3VkcyA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYENsb3VkaW5lc3NgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGNsb3Vkc2ApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2luZFNwZWVkID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdpbmRTcGVlZGApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3Qgd2luZERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgZGlyZWN0aW9uYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZERpcmVkdGlvbmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3QgZ3VzdCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBHdXN0YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBndXN0YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgcm93LXNwYW4tM2AsXG4gICAgICAgIGBncmlkLXJvdy0zYCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZGApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGd1c3QoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyR3JvdXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBncm91cGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJHcm91cGApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXZWF0aGVyIENvbmRpdGlvbmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKGBpbmZvRGlzcGxheWApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2VhdGhlckNvbmRpdGlvbmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3ctMmAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckdyb3VwKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29uZGl0aW9uKCkpO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyY29udGFpbmVyKCk7XG59O1xuXG5jb25zdCBzdW5yaXNlID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFN1bnJpc2VgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChgaW5mb0Rpc3BsYXlgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bnJpc2VgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHN1bigpO1xufTtcblxuY29uc3Qgc3VuZG93biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBTdW5kb3duYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoYGluZm9EaXNwbGF5YCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5kb3duYCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBzdW4oKTtcbn07XG5cbmNvbnN0IHN1biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3ctMmAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW5yaXNlKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW5kb3duKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3QgbW90aGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGEgPSBhaXIoKTtcbiAgICBjb25zdCBiID0gdmlzaWJpbGl0eSgpO1xuICAgIGNvbnN0IGMgPSBjbG91ZHMoKVxuICAgIGNvbnN0IGQgPSB3aW5kKCk7XG4gICAgY29uc3QgZSA9IHdlYXRoZXIoKTtcbiAgICBjb25zdCBmID0gc3VuKCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWQtcm93cy00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1jb2xzLTNgLFxuICAgICAgICBgYmctdGVhbC04MDBgLFxuICAgICAgICBgaC1zY3JlZW5gLFxuICAgICAgICBgZ2FwLTJgLFxuICAgICAgICBgcC0xYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYG91dHB1dFVJYCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIHRvIGJlIGFwcGVuZGVkIGludG8gYm9keTtcbn07XG5cbmV4cG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyIGFzIG91dHB1dFVJXG59IGZyb20gJy4vb3V0cHV0LnVpLmpzJztcbmltcG9ydCB7XG4gICAgbW90aGVyQ29udGFpbmVyIGFzIGlucHV0VUlcbn0gZnJvbSAnLi9pbnB1dC51aS5qcyc7XG5cbmNvbnN0IFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFVJKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRwdXRVSSgpKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtOTAwYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gICAgVUksXG59OyJdLCJuYW1lcyI6WyJrZXkiLCJsYWJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImxvY2F0aW9uIiwicHJvY2Vzc0J1dHRvbiIsImJ1dHRvbiIsIm1vdGhlckNvbnRhaW5lciIsIm1pblRlbXAiLCJpbmZvIiwibWF4VGVtcCIsInByZXNzdXJlIiwiaHVtaWRpdHkiLCJhaXIiLCJ2aXNpYmlsaXR5IiwiY2xvdWRzIiwid2luZFNwZWVkIiwid2luZERpcmVjdGlvbiIsImd1c3QiLCJ3aW5kIiwid2VhdGhlckdyb3VwIiwid2VhdGhlckNvbmRpdGlvbiIsIndlYXRoZXIiLCJzdW5yaXNlIiwic3VuZG93biIsInN1biIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsIm91dHB1dFVJIiwiaW5wdXRVSSIsIlVJIl0sInNvdXJjZVJvb3QiOiIifQ==
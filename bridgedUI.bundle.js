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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBLENBQUEsS0FBTTtFQUNiLE1BQU1oQyxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLEtBQUksQ0FBQztFQUMvQ00sU0FBUyxDQUFDQyxXQUFXLENBQUM4Qiw2REFBTyxFQUFFLENBQUM7RUFDaEMvQixTQUFTLENBQUNDLFdBQVcsQ0FBQzZCLDhEQUFRLEVBQUUsQ0FBQztFQUNqQzlCLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQ2xCLGFBQVksQ0FDaEI7RUFFRCxPQUFPQyxTQUFTO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9pbnB1dC51aS5qcyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9vdXRwdXQudWkuanMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBFbnRlciB5b3VyIEFQSSBrZXlgO1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgdGV4dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgaWRgLCBgQVBJS2V5RmllbGRgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtMWAsXG4gICAgICAgIGBjb2wtZW5kLTNgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBsb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgbG9jYXRpb25gO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBsb2NhdGlvbkZpZWxkYCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBwbGFjZWhvbGRlcmAsIGBMb25kb24sVUtgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtM2AsXG4gICAgICAgIGBjb2wtZW5kLTVgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBwcm9jZXNzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHByb2Nlc3NCdXR0b25gKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgUHJvY2Vzc2A7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYGNvbC1zdGFydC0yYCxcbiAgICAgICAgYGNvbC1lbmQtNGAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGJnLXNsYXRlLTQwMGAsXG4gICAgICAgIGBob3ZlcjpiZy1zbGF0ZS0yMDBgLFxuICAgIClcblxuICAgIHJldHVybiBidXR0b247XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBtb3RoZXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgaW5wdXRVSWApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC04MDBgLFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgZ3JpZC1jb2xzLTRgLFxuICAgICAgICBgZ2FwLXktMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoa2V5KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvY2Vzc0J1dHRvbigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn0iLCJjb25zdCBtaW5UZW1wID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYE1pbmltdW0gdGVtcGVyYXR1cmVgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBtaW5pbXVtVGVtcGVyYXR1cmVgKVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgbWF4VGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgbWF4aW11bVRlbXBlcmF0dXJlYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gYWlyKCk7XG59O1xuXG5jb25zdCBwcmVzc3VyZSA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgcHJlc3N1cmVgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJQcmVzc3VyZWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgaHVtaWRpdHkgPSAoKSA9PiB7XG4gICAgLy9JbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBBaXIgSHVtaWRpdHlgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJIdW1pZGl0eWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgYWlyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLWNvbHMtNGAsXG4gICAgICAgIGBjb2wtc3Bhbi0zYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGFpcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgdmlzaWJpbGl0eWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGNsb3VkcyA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYENsb3VkaW5lc3NgO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBjbG91ZHNgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2luZFNwZWVkID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kU3BlZWRgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2luZCBkaXJlY3Rpb25gO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3aW5kRGlyZWN0aW9uYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3QgZ3VzdCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBHdXN0YDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTs7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYGd1c3RgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3aW5kKCk7XG59O1xuXG5jb25zdCB3aW5kID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgcm93LXNwYW4tM2AsXG4gICAgICAgIGBncmlkLXJvdy0zYCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZGApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kU3BlZWQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGd1c3QoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyR3JvdXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBncm91cGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJHcm91cGApXG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXZWF0aGVyIENvbmRpdGlvbmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJDb25kaXRpb25gKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byB3ZWF0aGVyKCk7XG59O1xuXG5jb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYHJvdy1zcGFuLTJgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgd2VhdGhlcmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyR3JvdXAoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb25kaXRpb24oKSk7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJjb250YWluZXIoKTtcbn07XG5cbmNvbnN0IHN1bnJpc2UgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgU3VucmlzZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bnJpc2VgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHN1bigpO1xufTtcblxuY29uc3Qgc3VuZG93biA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBTdW5kb3duYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgc3VuZG93bmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gc3VuKCk7XG59O1xuXG5jb25zdCBzdW4gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93LTJgLFxuICAgICAgICBgcm93LXNwYW4tMmAsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VucmlzZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VuZG93bigpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIoKTtcbn07XG5cbmNvbnN0IG1vdGhlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhID0gYWlyKCk7XG4gICAgY29uc3QgYiA9IHZpc2liaWxpdHkoKTtcbiAgICBjb25zdCBjID0gY2xvdWRzKClcbiAgICBjb25zdCBkID0gd2luZCgpO1xuICAgIGNvbnN0IGUgPSB3ZWF0aGVyKCk7XG4gICAgY29uc3QgZiA9IHN1bigpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBncmlkLXJvd3MtNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtY29scy0zYCxcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYGgtc2NyZWVuYCxcbiAgICAgICAgYGdhcC0yYCxcbiAgICAgICAgYHAtMWAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBvdXRwdXRVSWApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGYpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyB0byBiZSBhcHBlbmRlZCBpbnRvIGJvZHk7XG59O1xuXG5leHBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lcixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lciBhcyBvdXRwdXRVSVxufSBmcm9tICcuL291dHB1dC51aS5qcyc7XG5pbXBvcnQge1xuICAgIG1vdGhlckNvbnRhaW5lciBhcyBpbnB1dFVJXG59IGZyb20gJy4vaW5wdXQudWkuanMnO1xuXG5jb25zdCBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRVSSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3V0cHV0VUkoKSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTkwMGAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICAgIFVJLFxufTsiXSwibmFtZXMiOlsia2V5IiwibGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJsb2NhdGlvbiIsInByb2Nlc3NCdXR0b24iLCJidXR0b24iLCJtb3RoZXJDb250YWluZXIiLCJtaW5UZW1wIiwiaW5mbyIsIm1heFRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5IiwiYWlyIiwidmlzaWJpbGl0eSIsImNsb3VkcyIsIndpbmRTcGVlZCIsIndpbmREaXJlY3Rpb24iLCJndXN0Iiwid2luZCIsIndlYXRoZXJHcm91cCIsIndlYXRoZXJDb25kaXRpb24iLCJ3ZWF0aGVyIiwic3VucmlzZSIsInN1bmRvd24iLCJzdW4iLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJvdXRwdXRVSSIsImlucHV0VUkiLCJVSSJdLCJzb3VyY2VSb290IjoiIn0=
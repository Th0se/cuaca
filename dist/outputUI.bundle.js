/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/output.ui.js ***!
  \**************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxFQUFFO0VBQ3RCLE1BQU1lLENBQUMsR0FBR2QsTUFBTSxFQUFFO0VBQ2xCLE1BQU1lLENBQUMsR0FBR1gsSUFBSSxFQUFFO0VBQ2hCLE1BQU1ZLENBQUMsR0FBR1QsT0FBTyxFQUFFO0VBQ25CLE1BQU1VLENBQUMsR0FBR1AsR0FBRyxFQUFFO0VBRWYsTUFBTWpCLFNBQVMsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUUsS0FBSSxDQUFDO0VBQy9DTSxTQUFTLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUNsQixhQUFZLEVBQ1osTUFBSyxFQUNMLGFBQVksRUFDWixhQUFZLEVBQ1osVUFBUyxFQUNULE9BQU0sRUFDTixLQUFJLENBQ1I7RUFDREcsU0FBUyxDQUFDRCxZQUFZLENBQUUsSUFBRyxFQUFHLFVBQVMsQ0FBQztFQUN4Q0MsU0FBUyxDQUFDQyxXQUFXLENBQUNrQixDQUFDLENBQUM7RUFDeEJuQixTQUFTLENBQUNDLFdBQVcsQ0FBQ21CLENBQUMsQ0FBQztFQUN4QnBCLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDb0IsQ0FBQyxDQUFDO0VBQ3hCckIsU0FBUyxDQUFDQyxXQUFXLENBQUNxQixDQUFDLENBQUM7RUFDeEJ0QixTQUFTLENBQUNDLFdBQVcsQ0FBQ3NCLENBQUMsQ0FBQztFQUN4QnZCLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDdUIsQ0FBQyxDQUFDO0VBRXhCLE9BQU94QixTQUFTO0VBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2EvLi9zcmMvb3V0cHV0LnVpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbWluVGVtcCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBNaW5pbXVtIHRlbXBlcmF0dXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgbWluaW11bVRlbXBlcmF0dXJlYClcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBhaXIoKTtcbn07XG5cbmNvbnN0IG1heFRlbXAgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgTWF4aW11bSBUZW1wZXJhdHVyZWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYG1heGltdW1UZW1wZXJhdHVyZWApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGFpcigpO1xufTtcblxuY29uc3QgcHJlc3N1cmUgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgQWlyIHByZXNzdXJlYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgYWlyUHJlc3N1cmVgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBhaXIoKTtcbn07XG5cbmNvbnN0IGh1bWlkaXR5ID0gKCkgPT4ge1xuICAgIC8vSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgQWlyIEh1bWlkaXR5YDtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgYWlySHVtaWRpdHlgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBhaXIoKTtcbn07XG5cbmNvbnN0IGFpciA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1jb2xzLTRgLFxuICAgICAgICBgY29sLXNwYW4tM2AsXG4gICAgICAgIGBnYXAtMWAsXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYHAtMmAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGBpZGAsIGBhaXJgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWluVGVtcCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF4VGVtcCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmUoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3QgdmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaWVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgVmlzaWJpbGl0eWA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHZpc2liaWxpdHlgKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LTV4bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmBcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufVxuXG5jb25zdCBjbG91ZHMgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBDbG91ZGluZXNzYDtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgY2xvdWRzYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRTcGVlZCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXI7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZFNwZWVkYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3Qgd2luZERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAvLyBJbmZvIHN1YiBjb250YWluZXJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdpbmQgZGlyZWN0aW9uYDtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShgaWRgLCBgd2luZERpcmVjdGlvbmApO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHdpbmQoKTtcbn07XG5cbmNvbnN0IGd1c3QgPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgR3VzdGA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7O1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBndXN0YCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2luZCgpO1xufTtcblxuY29uc3Qgd2luZCA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHJvdy1zcGFuLTNgLFxuICAgICAgICBgZ3JpZC1yb3ctM2AsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdpbmRgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFNwZWVkKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kRGlyZWN0aW9uKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChndXN0KCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lcigpO1xufTtcblxuY29uc3Qgd2VhdGhlckdyb3VwID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFdlYXRoZXIgZ3JvdXBgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3ZWF0aGVyR3JvdXBgKVxuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICAgICAgYHRleHQtNXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHdlYXRoZXIoKTtcbn07XG5cbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgV2VhdGhlciBDb25kaXRpb25gO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGB3ZWF0aGVyQ29uZGl0aW9uYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC01eGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItYW1iZXItNTAwYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3dzLTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gd2VhdGhlcigpO1xufTtcblxuY29uc3Qgd2VhdGhlciA9ICgpID0+IHtcbiAgICAvLyBJbmZvIGNvbnRhaW5lcjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGdyaWRgLFxuICAgICAgICBgZ3JpZC1yb3ctMmAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICAgICAgYGdhcC0xYCxcbiAgICAgICAgYGJvcmRlci1zb2xpZGAsXG4gICAgICAgIGBib3JkZXItbmV1dHJhbC05MDBgLFxuICAgICAgICBgcC0yYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYHdlYXRoZXJgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckdyb3VwKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29uZGl0aW9uKCkpO1xuXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyY29udGFpbmVyKCk7XG59O1xuXG5jb25zdCBzdW5yaXNlID0gKCkgPT4ge1xuICAgIC8vIEluZm8gc3ViIGNvbnRhaW5lcjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYFN1bnJpc2VgO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKGBpZGAsIGBzdW5yaXNlYCk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgdGV4dC14bGAsXG4gICAgICAgIGBmbGV4YCxcbiAgICAgICAgYGZsZXgtcm93YCxcbiAgICAgICAgYGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgYGl0ZW1zLWNlbnRlcmAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1hbWJlci01MDBgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvd3MtMmAsXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBzdW4oKTtcbn07XG5cbmNvbnN0IHN1bmRvd24gPSAoKSA9PiB7XG4gICAgLy8gSW5mbyBzdWIgY29udGFpbmVyO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgU3VuZG93bmA7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgZmxleGAsXG4gICAgICAgIGBmbGV4LXJvd2AsXG4gICAgICAgIGBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgIGBpdGVtcy1jZW50ZXJgLFxuICAgICk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN1bmRvd25gKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgICAgIGB0ZXh0LXhsYCxcbiAgICAgICAgYGZsZXhgLFxuICAgICAgICBgZmxleC1yb3dgLFxuICAgICAgICBganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBgaXRlbXMtY2VudGVyYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLWFtYmVyLTUwMGAsXG4gICAgICAgIGBib3JkZXItNGAsXG4gICAgICAgIGBncmlkYCxcbiAgICAgICAgYGdyaWQtcm93cy0yYCxcbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIHN1bigpO1xufTtcblxuY29uc3Qgc3VuID0gKCkgPT4ge1xuICAgIC8vIEluZm8gY29udGFpbmVyO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYHJvdy1zcGFuLTJgLFxuICAgICAgICBgZ2FwLTFgLFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBwLTJgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgc3VuYCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1bnJpc2UoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1bmRvd24oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyKCk7XG59O1xuXG5jb25zdCBtb3RoZXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYSA9IGFpcigpO1xuICAgIGNvbnN0IGIgPSB2aXNpYmlsaXR5KCk7XG4gICAgY29uc3QgYyA9IGNsb3VkcygpXG4gICAgY29uc3QgZCA9IHdpbmQoKTtcbiAgICBjb25zdCBlID0gd2VhdGhlcigpO1xuICAgIGNvbnN0IGYgPSBzdW4oKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgZ3JpZC1yb3dzLTRgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLWNvbHMtM2AsXG4gICAgICAgIGBiZy10ZWFsLTgwMGAsXG4gICAgICAgIGBoLXNjcmVlbmAsXG4gICAgICAgIGBnYXAtMmAsXG4gICAgICAgIGBwLTFgLFxuICAgICk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShgaWRgLCBgb3V0cHV0VUlgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gdG8gYmUgYXBwZW5kZWQgaW50byBib2R5O1xufTtcblxuZXhwb3J0IHtcbiAgICBtb3RoZXJDb250YWluZXIsXG59OyJdLCJuYW1lcyI6WyJtaW5UZW1wIiwibGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImluZm8iLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsIm1heFRlbXAiLCJwcmVzc3VyZSIsImh1bWlkaXR5IiwiYWlyIiwidmlzaWJpbGl0eSIsImNsb3VkcyIsIndpbmRTcGVlZCIsIndpbmREaXJlY3Rpb24iLCJndXN0Iiwid2luZCIsIndlYXRoZXJHcm91cCIsIndlYXRoZXJDb25kaXRpb24iLCJ3ZWF0aGVyIiwic3VucmlzZSIsInN1bmRvd24iLCJzdW4iLCJtb3RoZXJDb250YWluZXIiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiXSwic291cmNlUm9vdCI6IiJ9
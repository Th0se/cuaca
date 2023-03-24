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
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLE1BQU1BLElBQUksR0FBR0EsQ0FBQSxLQUFNO0VBQ2YsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxHQUFFLENBQUM7RUFDeENGLElBQUksQ0FBQ0csSUFBSSxHQUFJLDRCQUEyQjtFQUN4Q0gsSUFBSSxDQUFDSSxXQUFXLEdBQUksaUJBQWdCO0VBQ3BDSixJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUNiLFdBQVUsQ0FDZDtFQUVELE1BQU1DLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUUsR0FBRSxDQUFDO0VBQzFDSyxNQUFNLENBQUNILFdBQVcsR0FBSSx1QkFBc0I7RUFDNUNHLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDUixJQUFJLENBQUM7RUFDeEJPLE1BQU0sQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQ2YsYUFBWSxDQUNoQjtFQUVELE9BQU9DLE1BQU07RUFDYjtBQUNKLENBQUM7O0FBRUQsTUFBTUUsS0FBSyxHQUFHQSxDQUFBLEtBQU07RUFDaEIsTUFBTUYsTUFBTSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBRSxHQUFFLENBQUM7RUFDMUNLLE1BQU0sQ0FBQ0gsV0FBVyxHQUFJLDBEQUF5RDtFQUMvRUcsTUFBTSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FDZixhQUFZLENBQ2hCO0VBRUQsT0FBT0MsTUFBTTtFQUNiO0FBQ0osQ0FBQzs7QUFFRCxNQUFNRyxLQUFLLEdBQUdBLENBQUEsS0FBTTtFQUNoQixNQUFNVixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLEdBQUUsQ0FBQztFQUN4Q0YsSUFBSSxDQUFDRyxJQUFJLEdBQUksZ0NBQStCO0VBQzVDSCxJQUFJLENBQUNJLFdBQVcsR0FBSSxNQUFLO0VBQ3pCSixJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUNiLFdBQVUsQ0FDZDtFQUVELE1BQU1LLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUUsR0FBRSxDQUFDO0VBQzlDUyxVQUFVLENBQUNQLFdBQVcsR0FBSSxzQ0FBcUM7RUFDL0RPLFVBQVUsQ0FBQ0gsV0FBVyxDQUFDUixJQUFJLENBQUM7RUFDNUJXLFVBQVUsQ0FBQ04sU0FBUyxDQUFDQyxHQUFHLENBQ25CLGFBQVksQ0FDaEI7RUFDRCxPQUFPSyxVQUFVO0FBQ3JCLENBQUM7QUFFRCxNQUFNQyxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUNqQixNQUFNQyxTQUFTLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLEtBQUksQ0FBQztFQUMvQ1csU0FBUyxDQUFDTCxXQUFXLENBQUNULElBQUksRUFBRSxDQUFDO0VBQzdCYyxTQUFTLENBQUNMLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7RUFDOUJJLFNBQVMsQ0FBQ0wsV0FBVyxDQUFDRSxLQUFLLEVBQUUsQ0FBQztFQUU5QixPQUFPRyxTQUFTO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2Zvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGFgKTtcbiAgICBsaW5rLmhyZWYgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmdgO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBgT3BlbndlYXRoZXIgTWFwYDtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB1bmRlcmxpbmVgLFxuICAgICk7XG5cbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG4gICAgYmFubmVyLnRleHRDb250ZW50ID0gYEJhY2sgZW5kIHByb3ZpZGVkIGJ5IGBcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB0ZXh0LWNlbnRlcmAsXG4gICAgKTtcblxuICAgIHJldHVybiBiYW5uZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBmb290ZXIuXG59O1xuXG5jb25zdCBmcm9udCA9ICgpID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG4gICAgYmFubmVyLnRleHRDb250ZW50ID0gYEZyb250IGVuZCB3YXMgbWFkZSBhbmQgaXMgbWFpbnRhaW5lZCBieSBUaG9tYXMgUHJhc2VsaW5vYDtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYHRleHQtY2VudGVyYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGJhbm5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIGZvb3Rlci5cbn07XG5cbmNvbnN0IHZpc2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBhYCk7XG4gICAgbGluay5ocmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9UaDBzZS9jdWFjYWA7XG4gICAgbGluay50ZXh0Q29udGVudCA9IGBoZXJlYDtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGB1bmRlcmxpbmVgLFxuICAgICk7XG5cbiAgICBjb25zdCByZXBvc2l0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xuICAgIHJlcG9zaXRvcnkudGV4dENvbnRlbnQgPSBgVGhlIHByb2plY3QgaXMgYXZhaWxhYmxlIHRvIGluc3BlY3QgYFxuICAgIHJlcG9zaXRvcnkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgcmVwb3NpdG9yeS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICk7XG4gICAgcmV0dXJuIHJlcG9zaXRvcnk7XG59XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFjaygpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJvbnQoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpc2l0KCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cblxuZXhwb3J0IHtcbiAgICBmb290ZXIsXG59Il0sIm5hbWVzIjpbImJhY2siLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYmFubmVyIiwiYXBwZW5kQ2hpbGQiLCJmcm9udCIsInZpc2l0IiwicmVwb3NpdG9yeSIsImZvb3RlciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=
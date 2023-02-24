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
/*!*************************!*\
  !*** ./src/input.ui.js ***!
  \*************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaLFNBQVEsRUFDUixhQUFZLEVBQ1osTUFBSyxFQUNMLFlBQVcsRUFDWCxhQUFZLEVBQ1osU0FBUSxDQUNaO0VBQ0RDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDVixHQUFHLEVBQUUsQ0FBQztFQUM1QlMsU0FBUyxDQUFDQyxXQUFXLENBQUNDLFFBQVEsRUFBRSxDQUFDO0VBQ2pDRixTQUFTLENBQUNDLFdBQVcsQ0FBQ0UsYUFBYSxFQUFFLENBQUM7RUFFdEMsT0FBT0gsU0FBUztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS8uL3NyYy9pbnB1dC51aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGtleSA9ICgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYEVudGVyIHlvdXIgQVBJIGtleWA7XG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgdHlwZWAsIGB0ZXh0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGBpZGAsIGBBUElrZXlGaWVsZGApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBiZy10ZWFsLTUwMGAsXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGNvbC1zdGFydC0xYCxcbiAgICAgICAgYGNvbC1lbmQtM2AsXG4gICAgICAgIGByb3ctc3Bhbi0xYCxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAvLyBUbyBiZSBhcHBlbmRlZCBpbnRvIG1vdGhlckNvbnRhaW5lci5cbn07XG5cbmNvbnN0IGxvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgRW50ZXIgeW91ciBsb2NhdGlvbmA7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGB0eXBlYCwgYHRleHRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgYGxvY2F0aW9uRmllbGRgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYmctdGVhbC01MDBgLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBjb2wtc3RhcnQtM2AsXG4gICAgICAgIGBjb2wtZW5kLTVgLFxuICAgICAgICBgcm93LXNwYW4tMWAsXG4gICAgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gICAgLy8gVG8gYmUgYXBwZW5kZWQgaW50byBtb3RoZXJDb250YWluZXIuXG59O1xuXG5jb25zdCBwcm9jZXNzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHByb2Nlc3NCdXR0b25gKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgUHJvY2Vzc2A7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGBib3JkZXItc29saWRgLFxuICAgICAgICBgYm9yZGVyLTRgLFxuICAgICAgICBgYm9yZGVyLW5ldXRyYWwtOTAwYCxcbiAgICAgICAgYGNvbC1zdGFydC0yYCxcbiAgICAgICAgYGNvbC1lbmQtNGAsXG4gICAgICAgIGByb3ctc3Bhbi0yYCxcbiAgICApXG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyLlxufTtcblxuY29uc3QgbW90aGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGlucHV0VUlgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYGdyaWQtY29scy00YCxcbiAgICAgICAgYGdhcC15LTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtleSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2Nlc3NCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHtcbiAgICBtb3RoZXJDb250YWluZXIsXG59Il0sIm5hbWVzIjpbImtleSIsImxhYmVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwibG9jYXRpb24iLCJwcm9jZXNzQnV0dG9uIiwiYnV0dG9uIiwibW90aGVyQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
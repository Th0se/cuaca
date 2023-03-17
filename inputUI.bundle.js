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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRSxJQUFHLEVBQUcsU0FBUSxDQUFDO0VBQ3ZDRyxTQUFTLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUNsQixhQUFZLEVBQ1osU0FBUSxFQUNSLGFBQVksRUFDWixNQUFLLEVBQ0wsWUFBVyxFQUNYLGFBQVksRUFDWixTQUFRLENBQ1o7RUFDREMsU0FBUyxDQUFDQyxXQUFXLENBQUNWLEdBQUcsRUFBRSxDQUFDO0VBQzVCUyxTQUFTLENBQUNDLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7RUFDakNGLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDRSxhQUFhLEVBQUUsQ0FBQztFQUV0QyxPQUFPSCxTQUFTO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBsaWthc2lfY3VhY2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcGxpa2FzaV9jdWFjYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwbGlrYXNpX2N1YWNhLy4vc3JjL2lucHV0LnVpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qga2V5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgRW50ZXIgeW91ciBBUEkga2V5YDtcbiAgICBcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGB0eXBlYCwgYHRleHRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYGlkYCwgYEFQSUtleUZpZWxkYCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtNTAwYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgY29sLXN0YXJ0LTFgLFxuICAgICAgICBgY29sLWVuZC0zYCxcbiAgICAgICAgYHJvdy1zcGFuLTFgLFxuICAgICk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyLlxufTtcblxuY29uc3QgbG9jYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBFbnRlciB5b3VyIGxvY2F0aW9uYDtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgdGV4dGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgaWRgLCBgbG9jYXRpb25GaWVsZGApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShgcGxhY2Vob2xkZXJgLCBgTG9uZG9uLFVLYCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtNTAwYCxcbiAgICApO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgY29sLXN0YXJ0LTNgLFxuICAgICAgICBgY29sLWVuZC01YCxcbiAgICAgICAgYHJvdy1zcGFuLTFgLFxuICAgICk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyLlxufTtcblxuY29uc3QgcHJvY2Vzc0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKGBpZGAsIGBwcm9jZXNzQnV0dG9uYCk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYFByb2Nlc3NgO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBgYm9yZGVyLXNvbGlkYCxcbiAgICAgICAgYGJvcmRlci00YCxcbiAgICAgICAgYGJvcmRlci1uZXV0cmFsLTkwMGAsXG4gICAgICAgIGBjb2wtc3RhcnQtMmAsXG4gICAgICAgIGBjb2wtZW5kLTRgLFxuICAgICAgICBgcm93LXNwYW4tMmAsXG4gICAgICAgIGBiZy1zbGF0ZS00MDBgLFxuICAgICAgICBgaG92ZXI6Ymctc2xhdGUtMjAwYCxcbiAgICApXG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICAgIC8vIFRvIGJlIGFwcGVuZGVkIGludG8gbW90aGVyQ29udGFpbmVyLlxufTtcblxuY29uc3QgbW90aGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYGlkYCwgYGlucHV0VUlgKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYGJnLXRlYWwtODAwYCxcbiAgICAgICAgYHRleHQteGxgLFxuICAgICAgICBgdGV4dC1jZW50ZXJgLFxuICAgICAgICBgZ3JpZGAsXG4gICAgICAgIGBncmlkLXJvdy0yYCxcbiAgICAgICAgYGdyaWQtY29scy00YCxcbiAgICAgICAgYGdhcC15LTJgLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtleSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2Nlc3NCdXR0b24oKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHtcbiAgICBtb3RoZXJDb250YWluZXIsXG59Il0sIm5hbWVzIjpbImtleSIsImxhYmVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwibG9jYXRpb24iLCJwcm9jZXNzQnV0dG9uIiwiYnV0dG9uIiwibW90aGVyQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
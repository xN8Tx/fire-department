/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);


const burgerHandler = () => {
  const burger = document.querySelector(".header__fixed_burger");
  const menu = document.querySelector(".header__menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
};

const fixedHeaderHandler = () => {
  const fixedHeader = document.querySelector(".header__fixed");

  window.addEventListener("scroll", (event) => {
    if (window.scrollY) {
      if (scrollY > 550) {
        fixedHeader.classList.add("active");
      }
      if (scrollY < 550) {
        fixedHeader.classList.remove("active");
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // HEADER
  burgerHandler();
  fixedHeaderHandler();
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cocktail.js":
/*!*************************!*\
  !*** ./src/cocktail.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Cocktail {
    constructor() {
        this.ingredients = [
           {
               name: "tequila",
               img: "some path"
           },
           {
               name: "vodka",
               img: "some path"
           },
           {
               name: "rum",
               img: "some path"
           },
           {
               name: "whiskey",
               img: "some path"
           },
           {
               name: "lime",
               img: "some path"
           },
           {
               name: "salt",
               img: "some path"
           },
           {
               name: "olive",
               img: "some path"
           },
           {
               name: "ice",
               img: "some path"
           },
           {
               name: "mint",
               img: "some path"
           },
           {
               name: "cherry",
               img: "some path"
           },
           {
               name: "orange",
               img: "some path"
           },
           {
               name: "lemon",
               img: "some path"
           },

        ];
        this.emptyArr = ["none", "none", "none"];
        this.dataIdArr = [];
        this.generateIngredients();
        this.generateEmptylists();
        this.clearShakerList();
        this.removeShakerList();
    }

    generateIngredients() {
        this.ingredients.forEach((ingredient, i) => {
            const ul = document.getElementById("cocktail-ingredients");
            const li = document.createElement("li");
            li.textContent = ingredient.name;
            li.classList.add("ingredient-box");
            li.setAttribute("id", i);
            li.addEventListener("click", () => {
                const shaker = document.querySelectorAll("#shaker-lists > li");
                this.dataIdArr.push(li.id)
                let dataIdArr = this.dataIdArr;
                let length = this.dataIdArr.length
                const lastId = dataIdArr[length - 1];
                shaker.forEach((shakerList) => {
                    if (shakerList.textContent === "none") {
                        const newName = this.ingredients[lastId].name
                        shakerList.textContent = newName;
                        throw new Error("This is not an error, I did it to stop code execution =)")
                    } 
                })
            });
            ul.appendChild(li);
        })
    };

    generateEmptylists() {
        this.emptyArr.forEach((emp) => {
            const ul = document.getElementById("shaker-lists");
            const li = document.createElement("li");
            li.classList.add("ingredient-box-2")
            li.textContent = emp
            ul.appendChild(li);
        })
    }

    clearShakerList() {
        const remove = document.getElementById("remove");
        remove.addEventListener("click", () => {
            const lists = document.querySelectorAll("#shaker-lists > li");
            lists.forEach((list) => {
                list.textContent = "none"
            })
        })
    }

    removeShakerList() {
       const lists = document.querySelectorAll("#shaker-lists > li");
       lists.forEach((list) => {
           list.addEventListener("click", () => {
               list.textContent = "none"
           })
       })
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cocktail);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _cocktail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cocktail */ "./src/cocktail.js");

class Game {
    constructor() {
        new _cocktail__WEBPACK_IMPORTED_MODULE_0__.default();
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
console.log("Webpack is working!")


document.addEventListener("DOMContentLoaded", () => {
    new _game__WEBPACK_IMPORTED_MODULE_0__.default();
    // new sound("./audio/Allume-Cockney.mp3").play();
    // const audio = document.querySelector("audio");
    // audio.play();
})


const sayHi = (name) => {
    return (
        // console.log('i am bar')
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("R2D2");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map
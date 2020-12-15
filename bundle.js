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

/***/ "./src/customer.js":
/*!*************************!*\
  !*** ./src/customer.js ***!
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
class Customer {
    constructor() {

        this.customerArr = [
            {
                name: "man",
                url: "../images/customer/boy.png"
            },
            {
                name: "woman",
                url: "../images/customer/girl.png"
            }
        ]
    }

    generateCustomer() {
        let randIdx = Math.floor(Math.random() * this.customerArr.length)
        const h1 = document.getElementById("customer");
        const img = document.createElement("img");
        img.setAttribute("src", this.customerArr[randIdx].url);
        img.classList.add("customer")
        h1.appendChild(img);
    }

    removeCustomer() {
        const h1 = document.getElementById("customer");
        const img = document.querySelector("#customer > img");
        h1.removeChild(img);
    }

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);

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
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer */ "./src/customer.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/timer.js");




class Game {
    constructor() {
        this.start();
        this.nextOrder();
    }

    start() {
        new _cocktail__WEBPACK_IMPORTED_MODULE_0__.default();
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().generateOrder();
        new _customer__WEBPACK_IMPORTED_MODULE_1__.default().generateCustomer();
        new _timer__WEBPACK_IMPORTED_MODULE_3__.default().generateTimer();
    }

    nextOrder() {
        // let timeStart = new Date().getTime();
        // let diff = 7000 * 10;
        // let timeNext = (timeStart + diff);

        // setTimeout(() => {
        //     new Customer().removeCustomer();
        //     new Timer().stopTimer();
        //     new Order().removeOrder();
        //     new Customer().generateCustomer();
        //     new Timer().generateTimer();
        //     new Order().generateOrder();
        // }, 8000);
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
    const modal = document.getElementById("mymodal");
    const start = document.getElementById("button");

    start.addEventListener("click", () => {
        modal.style.display = "none";
        new _game__WEBPACK_IMPORTED_MODULE_0__.default();
        
    })
    
    // new Game();
    // new sound("./audio/Allume-Cockney.mp3").play();
    // const audio = document.querySelector("audio");
    // audio.play();
})

const sayHi = (name) => {
    return (
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("R2D2");


/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Order {
    constructor() {

        this.orderArr = [
            {
                cocktail: "margarita",
                recipe: ["tequila", "lime", "salt"]
            },
            {
                cocktail: "martini",
                recipe: ["vodka", "olive", "ice"]
            },
            {
                cocktail: "mojito",
                recipe: ["rum", "mint", "lime"]
            },
            {
                cocktail: "old fashion",
                recipe: ["whiskey", "cherry", "orange"]
            }
        ]
    }

    generateOrder() {
        let randomIdx = Math.floor( Math.random() * this.orderArr.length );
        let randomOrder = this.orderArr[randomIdx].cocktail
        let randomRecipe = this.orderArr[randomIdx].recipe
        const order = document.getElementById("order");
        const h2 = document.createElement("h2");
        h2.classList.add("order")
        h2.textContent = `...${randomOrder}`;
        order.appendChild(h2)
    }

    removeOrder() {
        const h2 = document.querySelector("#order > h2");
        const h1 = document.getElementById("order");
        h1.removeChild(h2);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Timer {
    constructor() {
        this.timer = null;
    }
    
    generateTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(this.countdown, 1000);
    }
    
    countdown() {
        let timeleft = 7;
        const timer = document.getElementById("timer");

        // debugger
        if (timeleft === 0) {
            timer.textContent = "0"
        } else {
            timer.textContent = timeleft;
            console.log(timer.textContent);
        }
        timeleft -= 1;
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);

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
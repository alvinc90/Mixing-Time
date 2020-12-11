/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

const showContent = (contentIdx) => {
    const tabContents = document.getElementsByClassName("tabcontent-outer-container");
    
    for(let j = 0; j < tabContents.length; j++) {
        tabContents[j].style.display = "none";
    }
    
    return tabContents[contentIdx].style.display = "block";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContent);

/***/ }),

/***/ "./src/bar_menu.js":
/*!*************************!*\
  !*** ./src/bar_menu.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _menu_items_garnish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_items/garnish */ "./src/menu_items/garnish.js");
/* harmony import */ var _menu_items_mixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_items/mixer */ "./src/menu_items/mixer.js");
/* harmony import */ var _menu_items_beer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_items/beer */ "./src/menu_items/beer.js");
/* harmony import */ var _menu_items_wine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu_items/wine */ "./src/menu_items/wine.js");
/* harmony import */ var _menu_items_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu_items/base */ "./src/menu_items/base.js");
/* harmony import */ var _menu_items_flavor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu_items/flavor */ "./src/menu_items/flavor.js");






class BarMenu {
    generateAllMenu() {
        new _menu_items_garnish__WEBPACK_IMPORTED_MODULE_0__.default;
        let mixer = new _menu_items_mixer__WEBPACK_IMPORTED_MODULE_1__.default;
        let beer = new _menu_items_beer__WEBPACK_IMPORTED_MODULE_2__.default;
        let wine = new _menu_items_wine__WEBPACK_IMPORTED_MODULE_3__.default;
        let base = new _menu_items_base__WEBPACK_IMPORTED_MODULE_4__.default;
        let flavor = new _menu_items_flavor__WEBPACK_IMPORTED_MODULE_5__.default;
        mixer.generateMixer();
        beer.generateBeer()
        wine.generateWine();
        // wine.addTrayItem();
        wine.removeTrayItem();
        base.generateBase();
        base.removeTrayItem();
        flavor.generateFlavor();
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarMenu); 

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
class Customer{

    constructor() {
        this.generateCustomer();
    }

    generateCustomer() {
        const customers = [
            {
                name: "guy",
                img: "../images/customer/man.jpeg"
            },
            {
                name: "girl",
                img: "../images/customer/woman.jpg"
            }
        ]
        let randIdx = Math.floor(Math.random() * customers.length)
        const img = document.createElement("img")
        img.setAttribute("src", `${customers[randIdx].img}`)
        img.setAttribute("height", "350px");
        img.setAttribute("width", "310px")
        const div = document.querySelector(".left")
        div.appendChild(img)
    }
}
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
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar */ "./src/bar.js");
console.log("i am a cunt")


class Game {

    switching() {
        const tabButtons = document.getElementsByClassName("tabButton");

        tabButtons[0].addEventListener("click", () => (0,_bar__WEBPACK_IMPORTED_MODULE_0__.default)(0))
        tabButtons[1].addEventListener("click", () => (0,_bar__WEBPACK_IMPORTED_MODULE_0__.default)(1))

        ;(0,_bar__WEBPACK_IMPORTED_MODULE_0__.default)(0);
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
/* harmony import */ var _bar_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar_menu */ "./src/bar_menu.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer */ "./src/customer.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
console.log("Webpack is working!")





// import sound from "./sound";


document.addEventListener("DOMContentLoaded", () => {
    let game = new _game__WEBPACK_IMPORTED_MODULE_0__.default();
    game.switching();
    let barMenu = new _bar_menu__WEBPACK_IMPORTED_MODULE_1__.default();
    barMenu.generateAllMenu();
    new _customer__WEBPACK_IMPORTED_MODULE_2__.default();
    new _order__WEBPACK_IMPORTED_MODULE_3__.default();
    new _timer__WEBPACK_IMPORTED_MODULE_4__.default();
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
sayHi("Alvin");


/***/ }),

/***/ "./src/menu_items/base.js":
/*!********************************!*\
  !*** ./src/menu_items/base.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Base {
    generateBase() {
          const baseArr = [
            {
                name: "Vodka",
                color: "white"
            },
            {
                name: "Tequila",
                color: "orange"
            },
            {
                name: "Scotch",
                color: "brown"
            },
            {
                name: "Gin",
                color: "skyblue"
            },
            {
                name: "Bourbon",
                color: "red"
            },
            {
                name: "Rum",
                color: "yellow"
            }
        ]

         for(let i = 0; i < baseArr.length; i++) {
            const ul = document.getElementById("base")
            const li = document.createElement("li")
            li.textContent = baseArr[i].name
            li.style.color = `${baseArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const shaker = document.getElementById("shaker")
                const li = document.createElement("li")
                li.textContent = baseArr[i].name
                li.style.color = `${baseArr[i].color}`
                shaker.appendChild(li);
            })
        }
    }

    removeTrayItem() {
        const remove = document.getElementById("remove2");
            remove.addEventListener("click", () => {
                const lists = document.querySelectorAll("#shaker li");
                const shaker = document.getElementById("shaker")
                shaker.removeChild(lists[lists.length - 1])

            })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base); 

/***/ }),

/***/ "./src/menu_items/beer.js":
/*!********************************!*\
  !*** ./src/menu_items/beer.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Beer {

    generateBeer() {
        const beerArr = [
            {
                name: "White Claw",
                img: "../../images/beer/white_claw.jpeg",
                color: "white"
            },
            {
                name: "Guinness",
                img: "../../images/beer/guinness.jpg",
                color: "orange"
            },
            {
                name: "Sierra Nevada",
                img: "../../images/beer/SierraNevadaPaleAle.jpg",
                color: "yellow"
            },
            {
                name: "Pabst Blue Ribbon",
                img: "../../images/beer/pbr.jpg",
                color: "red"
            },
            {
                name: "Blue Moon",
                img: "../../images/beer/blue_moon_logo.jpg",
                color: "skyblue"
            },
            {
                name: "Anchor Steam",
                img: "../../images/beer/anchor_steam.jpg",
                color: "rgb(160,82,45)"
            }
        ]

         for(let i = 0; i < beerArr.length; i++) {
            const ul = document.getElementById("beer")
            const li = document.createElement("li")
            li.textContent = beerArr[i].name
            li.style.color = `${beerArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const glass = document.querySelector("#beer-wine-glass")
                const li = document.createElement("li")
                li.textContent = beerArr[i].name
                li.style.color = `${beerArr[i].color}`
                glass.appendChild(li);
            })
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Beer); 

/***/ }),

/***/ "./src/menu_items/flavor.js":
/*!**********************************!*\
  !*** ./src/menu_items/flavor.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Flavor {
    generateFlavor() {
        const flavorArr = [
            {
                name: "Grand Marnier",
                color: "orange"
            },
            {
                name: "Midori",
                color: "green"
            },
            {
                name: "Vermouth",
                color: "brown"
            },
            {
                name: "Peach Schnapps",
                color: "peach"
            },
            {
                name: "Amaretto",
                color: "purple"
            },
            {
                name: "Malibu",
                color: "yelow"
            }
        ]

        for(let i = 0; i < flavorArr.length; i++) {
            const ul = document.getElementById("flavor")
            const li = document.createElement("li")
            li.textContent = flavorArr[i].name
            li.style.color = `${flavorArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const shaker = document.getElementById("shaker")
                const li = document.createElement("li")
                li.textContent = flavorArr[i].name
                li.style.color = `${flavorArr[i].color}`
                shaker.appendChild(li);
            })
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flavor);

/***/ }),

/***/ "./src/menu_items/garnish.js":
/*!***********************************!*\
  !*** ./src/menu_items/garnish.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Garnish {

    constructor() {
        this.generateGarnish();
    }
   
    generateGarnish() {
        const garnishArr = [
            {
                name: "Lime",
                img: "../../images/garnish/lime.jpg",
                color: "limegreen"
            },
            {
                name: "Olive",
                img: "../../images/garnish/olive.jpg",
                color: 'olive'
            },
            {
                name: "Mint",
                img: "../../images/garnish/mint.jpg",
                color: "darkgreen"
            },
            {
                name: "Lemon twist",
                img: "../../images/garnish/lemon_twist.jpg",
                color: "yellow"
            },
            {
                name: "Cherry",
                img: "../../images/garnish/cherry.jpeg",
                color: "red"
            },
            {
                name: "Pineapple",
                img: "../../images/garnish/pineapple.jpg",
                color: "yellow"
            }

        ]

        for(let i = 0; i < garnishArr.length; i++) {
            const li = document.createElement("li")
            const ul = document.getElementById("garnish")
            li.textContent = garnishArr[i].name
            li.style.color = `${garnishArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const shaker = document.getElementById("shaker")
                const li = document.createElement("li")
                li.textContent = garnishArr[i].name
                li.style.color = `${garnishArr[i].color}`
                shaker.appendChild(li);
            })
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Garnish);

/***/ }),

/***/ "./src/menu_items/mixer.js":
/*!*********************************!*\
  !*** ./src/menu_items/mixer.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Mixer {
    generateMixer() {
        const mixerArr = [
            {
                name: "Coke", 
                img: "../../images/mixer/coke.jpg",
                color: "red"
            },
            {
                name: "Soda",
                img: "../../images/mixer/soda.jpg",
                color: "white"
            },
            {
                name: "Tonic",
                img: "../../images/mixer/tonic.jpg",
                color: "purple"
            },
            {
                name: "Ginger Ale",
                img: "../../images/mixer/ginger.jpeg",
                color: "green"
            },
            {
                name: "Cranberry J",
                img: "../../images/mixer/cranberry.jpg",
                color: "red"
            },
            {
                name: "Orange J",
                img: "../../images/mixer/orange.jpg",
                color: "orange"
            },
            {
                name: "Sour Mix",
                img: "../../images/mixer/sourmix.jpg"
            }
        ]

        for(let i = 0; i < mixerArr.length; i++) {
            const li = document.createElement("li")
            const ul = document.getElementById("mixer")
            li.textContent = mixerArr[i].name
            li.style.color = `${mixerArr[i].color}`
            ul.appendChild(li)
            li.addEventListener("click", () => {
                const shaker = document.getElementById("shaker")
                const li = document.createElement("li")
                li.textContent = mixerArr[i].name
                li.style.color = `${mixerArr[i].color}`
                shaker.appendChild(li);
            })
        }

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mixer);

/***/ }),

/***/ "./src/menu_items/wine.js":
/*!********************************!*\
  !*** ./src/menu_items/wine.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Wine {
    generateWine() {
        const wineArr = [
            {
                name: "Cabernet Sauvignon",
                color: "orange"
            },
            {
                name: "Pinot Noir",
                color: "yellow"
            },
            {
                name: "Sauvignon Blanc",
                color: "limegreen"
            },
            {
                name: "Chardonnay",
                color: "skyblue"
            },
            {
                name: "Champagne",
                color: "purple"
            },
            {
                name: "Rose",
                color: "red"
            }
        ]

        for(let i = 0; i < wineArr.length; i++) {
            const ul = document.getElementById("wine")
            const li = document.createElement("li")
            li.textContent = wineArr[i].name
            li.style.color = `${wineArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const glass = document.getElementById("beer-wine-glass")
                const li = document.createElement("li")
                li.textContent = wineArr[i].name
                li.style.color = `${wineArr[i].color}`
                glass.appendChild(li);
            })
        }
    }
    //NOT WORKING YET, NEED TO REWORK
    // addTrayItem() {
    //     const li = document.createElement("li")
    //     li.addEventListener("click", () => {
    //             const glass = document.getElementById("beer-wine-glass")
    //             const li2 = document.createElement("li")
    //             li2.textContent = wineArr[i].name
    //             li2.style.color = `${wineArr[i].color}`
    //             glass.appendChild(li2);
    //         })
    // }

    removeTrayItem() {
        const remove = document.getElementById("remove");
            remove.addEventListener("click", () => {
                const lists = document.querySelectorAll("#beer-wine-glass li");
                const glass = document.getElementById("beer-wine-glass")
                glass.removeChild(lists[lists.length - 1])

            })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wine);

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
        this.generateOrder();
    }

    generateOrder() {
        const beers = [
            {
                name: "White Claw"
            },
            {
                name: "Guiness"
            },
            {
                name: "Sierra Nevada"
            },
            {
                name: "Pabst Blue Ribbon"
            },
            {
                name: "Blue Moon"
            },
            {
                name: "Anchor Steam"
            }
        ]

        const wines = [
            {
                name: "Cabernet Sauvignon"
            },
            {
                name: "Pinot Noir"
            },
            {
                name: "Sauvignon Blanc"
            },
            {
                name: "Chardonnay"
            },
            {
                name: "Champange"
            },
            {
                name: "Rose"
            }
        ]

        const cocktails = [
            {
                name: "Mojito"
            },
            {
                name: "Cosmopolitan"
            },
            {
                name: "Margarita"
            },
            {
                name: "Old Fashion"
            },
            {
                name: "Moscow Mule"
            },
            {
                name: "Martini"
            }
        ]

        const allOrders = []
        beers.forEach((beer) => allOrders.push(beer));
        wines.forEach((wine) => allOrders.push(wine));
        cocktails.forEach((cocktail) => allOrders.push(cocktail));
        const randIdx = Math.floor(Math.random() * allOrders.length)
        const randOrder = allOrders[randIdx];

        const right = document.querySelector(".right");
        const h1 = document.createElement("h1")
        h1.classList.add("order")
        h1.textContent = `${randOrder.name} please..`
        right.appendChild(h1);
      
    }
}

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
        this.generateTimer();
    }
    
    generateTimer() {
        let timeleft = 5;
        const downloadTimer = setInterval(() => {
            if (timeleft <= 0) {
                clearInterval(downloadTimer); 
            } else {
                const timer = document.getElementById("timer")
                timer.textContent = timeleft;
            }
        timeleft -= 1;
        }, 1000)
        console.log(timeleft)
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
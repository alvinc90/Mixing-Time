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
               img: "images/bar_ingredients/tequila.png"
           },
           {
               name: "vodka",
               img: "images/bar_ingredients/vodka.png"
           },
           {
               name: "rum",
               img: "images/bar_ingredients/rum.png"
           },
           {
               name: "whiskey",
               img: "images/bar_ingredients/whiskey.png"
           },
           {
               name: "lime",
               img: "images/bar_ingredients/lime3.png"
           },
           {
               name: "salt",
               img: "images/bar_ingredients/salt.png"
           },
           {
               name: "olive",
               img: "images/bar_ingredients/olive.png"
           },
           {
               name: "ice",
               img: "images/bar_ingredients/ice2.png"
           },
           {
               name: "mint",
               img: "images/bar_ingredients/mint.png"
           },
           {
               name: "cherry",
               img: "images/bar_ingredients/cherry2.png"
           },
           {
               name: "orange",
               img: "images/bar_ingredients/orange.png"
           },
           {
               name: "lemon",
               img: "images/bar_ingredients/lemon.png"
           },

        ];
        this.emptyArr = ["none", "none", "none"];
        this.dataIdArr = [];
        // this.generateIngredients();
        // this.generateEmptylists();
        // this.clearShakerList();
        // this.removeShakerList();
    }

    generateIngredients() {
        this.ingredients.forEach((ingredient, i) => {
            const ul = document.getElementById("cocktail-ingredients");
            const li = document.createElement("li");
            const img = document.createElement("img")
            img.setAttribute("src", ingredient.img)
            img.classList.add("ingredient-box-image3")

            li.textContent = ingredient.name;
            li.classList.add("ingredient-box");
            li.setAttribute("id", i);
            img.setAttribute("id", i);
            img.addEventListener("click", () => {
                const shaker = document.querySelectorAll("#shaker-lists img");
                this.dataIdArr.push(img.id)
                let dataIdArr = this.dataIdArr;
                let length = this.dataIdArr.length
                const lastId = dataIdArr[length - 1];
                shaker.forEach((shakerImg) => {
                    if (shakerImg.textContent === "none") {
                        const newName = this.ingredients[lastId].name
                        const newImg = this.ingredients[lastId].img
                        shakerImg.setAttribute("src", newImg);
                        shakerImg.textContent = newName;
                        throw new Error("This is not an error, I did it to stop code execution =)")
                    } 
                })
            });
            ul.appendChild(li);
            li.appendChild(img);
        })
    };
    
    removeIngredients() {
        const ul = document.getElementById("cocktail-ingredients");
        const list = document.querySelectorAll("#cocktail-ingredients li");
        list.forEach((li) => {
            ul.removeChild(li)
        })
    }

    generateEmptylists() {
        this.emptyArr.forEach((emp) => {
            const ul = document.getElementById("shaker-lists");
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.setAttribute("src", "images/bar_ingredients/blank.jpg")
            img.textContent = "none";
            img.classList.add("ingredient-box-image")
            li.textContent = emp
            li.classList.add("ingredient-box-2")
            ul.appendChild(li);
            li.appendChild(img);
        })
    }

    removeShakerLists() {
        const ul = document.getElementById("shaker-lists");
        const lists = document.querySelectorAll("#shaker-lists li");
        lists.forEach((li) => {
            ul.removeChild(li);
        })
    }

    clearShakerListButton() {
        const clear = document.getElementById("clear");
        clear.addEventListener("click", () => {
            const imgs = document.querySelectorAll("#shaker-lists img");
            imgs.forEach((img) => {
                img.textContent = "none"
                img.setAttribute("src", "images/bar_ingredients/blank.jpg")
            })
        })
    }

    removeShakerIngredientButton() {
       const imgs = document.querySelectorAll("#shaker-lists img");
       imgs.forEach((img) => {
           img.addEventListener("click", () => {
               img.textContent = "none";
               img.setAttribute("src", "images/bar_ingredients/blank.jpg")
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
                name: "male_1",
                url: "images/customer/male_1.png"
            },
            {
                name: "male_2",
                url: "images/customer/male_2.png"
            },
            {
                name: "female_1",
                url: "images/customer/female_1.png"
            },
            {
                name: "female_2",
                url: "images/customer/female_2.png"
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
        if (img) {
            h1.removeChild(img);
        }
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
        this.cocktail = new _cocktail__WEBPACK_IMPORTED_MODULE_0__.default();
        this.order = new _order__WEBPACK_IMPORTED_MODULE_2__.default();
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__.default();
        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_3__.default();
        // this.reset();
        // this.start();
        this.checkForMatch();
        this.openInstructionModal();
        this.closeInstructionModal();
    }

    reset() {
        this.cocktail.removeIngredients();
        this.cocktail.removeShakerLists();
        this.order.resetTips();
        this.order.removeOrder();
        this.customer.removeCustomer();
        this.order.removeStrikes();
    }

    start() {
        this.cocktail.generateIngredients();
        this.cocktail.generateEmptylists();
        this.cocktail.removeShakerIngredientButton();
        this.cocktail.clearShakerListButton();
        this.order.generateOrder();
        this.customer.generateCustomer();
        this.timer.generateTimer();
        this.order.generateStrikes();
    }

    checkForMatch() {
        const check = document.getElementById("check");
        check.addEventListener("click", () => this.timer.checkRecipeMatch());
    }

    openInstructionModal() {
        const button = document.getElementById("button6");
        button.addEventListener("click", () => {
            const instructionModal = document.getElementById("instruction-modal");
            const banana = document.getElementsByClassName("left-inner-container")[0];
            instructionModal.style.display = "block";
            banana.style.display = "none";
            this.timer.stopTimer();
        })
    }

    closeInstructionModal() {
        const button = document.getElementById("button5");
        button.addEventListener("click", () => {
            const instructionModal = document.getElementById("instruction-modal");
            const banana = document.getElementsByClassName("left-inner-container")[0];
            instructionModal.style.display = "none";
            banana.style.display = "block";
            this.timer.generateTimer();
        })
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
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
console.log("Webpack is working!")



document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("opening-modal");
    const closingModal = document.getElementById("closing-modal");
    const start = document.getElementById("button");
    const banana = document.getElementsByClassName("left-inner-container")[0];
    const restart = document.getElementById("button2");
    const start2 = document.getElementById("button3");
    const restart2 = document.getElementById("button4");
    const audio = document.querySelector("audio");
    banana.style.display = "none";
    let game1 = new _game__WEBPACK_IMPORTED_MODULE_0__.default();
    // let game2 = new Game();

    // start with music
    start.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        game1.reset();
        game1.start();
        audio.play();
    })

    // start with no music
    start2.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        game1.reset();
        game1.start();
    })

    // restart with music
    restart.addEventListener("click", () => {        
        modal.style.display = "none";
        banana.style.display = "block";
        closingModal.style.display = "none";
        game1.reset();
        game1.start();
        audio.play();
    })

    //restart with no music
    restart2.addEventListener("click", () => {        
        modal.style.display = "none";
        banana.style.display = "block";
        closingModal.style.display = "none";
        game1.reset();
        game1.start();
    })

    // start.addEventListener("mouseenter", () => {
    //     const audio = document.querySelector("audio");
    //     audio.play();
    // })

    // start.addEventListener("mouseleave", () => {
    //     const audio = document.querySelector("audio");
    //     audio.pause();
    //     audio.currentTime = 0;
    // })
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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/customer.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/timer.js");


class Order {
    constructor() {
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_0__.default();
        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_1__.default();

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
        h2.textContent = `${randomOrder}`;
        order.appendChild(h2)
    }

    generateStrikes() {
        const strikeArr = ["/", "/", "/"]
        strikeArr.forEach((strike) => {
            const div = document.getElementById("strike-container");
            const span = document.createElement("span");
            span.textContent = strike;
            span.classList.add("strikes");
            div.appendChild(span)
        })
    }

    removeStrikes() {
        const strikes = document.querySelectorAll("#strike-container span");
        strikes.forEach((strike) => {
            strike.remove();
        })
    }

    // checkRecipeMatch() {
    //     let cocktailId;
 
    //     const findOrder = document.getElementsByClassName("order")[0].textContent;
    //     this.orderArr.forEach((item, i) => {
    //         if (item.cocktail === findOrder) cocktailId = i
    //     })
        
    //     const recipeArr = this.orderArr[cocktailId].recipe;

    //     const shakerList1 = document.querySelectorAll("#shaker-lists img")[0].textContent;
    //     const shakerList2 = document.querySelectorAll("#shaker-lists img")[1].textContent;
    //     const shakerList3 = document.querySelectorAll("#shaker-lists img")[2].textContent;

    //     const noDupList1 = (shakerList1 !== shakerList2) && (shakerList1 !== shakerList3);
    //     const noDupList2 = (shakerList2 !== shakerList1) && (shakerList2 !== shakerList3);
    //     const noDupList3 = (shakerList3 !== shakerList1) && (shakerList3 !== shakerList2) 

    //    if ( ( recipeArr.includes(shakerList1) && ( noDupList1 ) ) && 
    //         ( recipeArr.includes(shakerList2) && ( noDupList2 ) ) && 
    //         ( recipeArr.includes(shakerList3) && ( noDupList3 ) )  ) {

    //         alert("Good Job!");
    //         this.correctDrinkRecipe();
    //         return true;
    //     } else {
    //        alert("Wrong Drink!")
    //        this.strike();
    //        return false;
    //    }
    // }

    // correctDrinkRecipe() {
    //     this.clearList();
    //     this.tips();
    //     this.removeOrder();
    //     this.generateOrder();
    //     this.customer.removeCustomer();
    //     this.customer.generateCustomer();
    //     this.timer.resetTimer();
    // }

    removeOrder() {
        const h2 = document.querySelector("#order > h2");
        if(h2) {
            const h1 = document.getElementById("order");
            h1.removeChild(h2);
        }
    }

    clearList() {
        const imgs = document.querySelectorAll("#shaker-lists img");
        imgs.forEach((img) => {
            img.textContent = "none"
            img.setAttribute("src", "images/bar_ingredients/blank.jpg")
        })
    }

    // tips() {
    //     const tips = document.getElementById("tips");
    //     let tipsInt = parseInt(tips.textContent);
    //     if (tipsInt >= 500) {

    //     } else {
    //         tipsInt += 50;
    //     }
    //     tips.textContent = tipsInt;
    // }

    resetTips() {
        const tips = document.getElementById("tips");
        tips.textContent = "0";
    }

    // strike() {
    //     const strikes = document.getElementsByClassName("strikes");
    //     const lastStrike = strikes.length - 1;
    //     if (strikes.length === 1) {
    //         this.gameOver();
    //     } else {
    //         strikes[lastStrike].remove();
    //     }
    // }

    // gameOver() {
    //     const tips = document.getElementById("tips");
    //     const highscore = document.getElementById("highscore");
    //     const closingModal = document.getElementById("closing-modal");
    //     const banana = document.getElementsByClassName("left-inner-container")[0];
    //     const audio = document.querySelector("audio");
        
    //     this.timer.stopTimer();
    //     this.timer.resetInitialTimer();
    //     closingModal.style.display = "block";
    //     banana.style.display = "none";
    //     highscore.textContent = tips.textContent
    //     audio.pause();
    //     audio.currentTime = 0;
    //     this.removeOrder();
    //     this.customer.removeCustomer();
    // }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
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
class Sound {
  constructor() {
  }

  play() {
    const audio = document.querySelector("audio");
    const source = document.createElement("source");
    source.setAttribute("src", "./audio/Allume-Cockney.mp3");
    source.setAttribute("type", "audio/mp3");
    audio.appendChild(source);
    audio.play();
  }

  stop() {
    const audio = document.querySelector("audio");
    const source = document.createElement("source");
    source.setAttribute("src", "./audio/Allume-Cockney.mp3");
    source.setAttribute("type", "audio/mp3");
    audio.appendChild(source);
    audio.pause();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/customer.js");
/* harmony import */ var _cocktail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cocktail */ "./src/cocktail.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ "./src/order.js");
// import Order from './order';




class Timer {
    constructor() {
        // this.order = new Order();
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_0__.default();
        this.cocktail = new _cocktail__WEBPACK_IMPORTED_MODULE_1__.default();
        this.time = null;
        this.countdown = this.countdown.bind(this);
    }
    
    generateTimer() {
        if (this.time) {
            clearInterval(this.time);
        }
        this.time = setInterval(this.countdown, 1000);
    }
    
    countdown() {
        const timer = document.getElementById("timer");
        let timeleft = timer.textContent;
        timeleft -= 1;
        if (timeleft <= 0) {
            this.strike();
            // this.afterTimerReachesZero();
        } else {
            timer.textContent = timeleft;
            console.log(timer.textContent);
        }
    } 

    afterTimerReachesZero() {
        const tips = document.getElementById("tips");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const audio = document.querySelector("audio");


        this.resetInitialTimer();
        closingModal.style.display = "block";
        banana.style.display = "none";
        highscore.textContent = tips.textContent
        audio.pause();
        audio.currentTime = 0;
        this.resetGame();
    }

    resetGame() {
        new _cocktail__WEBPACK_IMPORTED_MODULE_1__.default().removeIngredients();
        new _cocktail__WEBPACK_IMPORTED_MODULE_1__.default().removeShakerLists();
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().resetTips();
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().removeOrder();
        new _customer__WEBPACK_IMPORTED_MODULE_0__.default().removeCustomer();
        this.stopTimer();
    }

    resetInitialTimer() {
        const timer = document.getElementById("timer");
        timer.textContent = "12";
    }

    resetTimer() {
        this.stopTimer();
        this.resetSeconds();
        this.generateTimer();
    }

    stopTimer() {
        clearInterval(this.time);
    }

    resetSeconds() {
        const timer = document.getElementById("timer");
        timer.textContent = "10";
    }

    gameOver() {
        const tips = document.getElementById("tips");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const audio = document.querySelector("audio");
        this.stopTimer();
        this.resetInitialTimer();
        closingModal.style.display = "block";
        banana.style.display = "none";
        let intHighscore = parseInt(tips.textContent);
        if (intHighscore >= 450) {
            highscore.textContent = 500
        } else {
            highscore.textContent = tips.textContent
        }
        audio.pause();
        audio.currentTime = 0;
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().removeOrder();
        this.customer.removeCustomer();
    }

    strike() {
        const strikes = document.getElementsByClassName("strikes");
        const lastStrike = strikes.length - 1;
        if (strikes.length === 1) {
            this.gameOver();
        } else {
            strikes[lastStrike].remove();
            this.resetTimer();
        }
    }

    checkRecipeMatch() {

        const orderArr = [
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

        let cocktailId;
 
        const findOrder = document.getElementsByClassName("order")[0].textContent;
        orderArr.forEach((item, i) => {
            if (item.cocktail === findOrder) cocktailId = i
        })
        
        const recipeArr = orderArr[cocktailId].recipe;

        const shakerList1 = document.querySelectorAll("#shaker-lists img")[0].textContent;
        const shakerList2 = document.querySelectorAll("#shaker-lists img")[1].textContent;
        const shakerList3 = document.querySelectorAll("#shaker-lists img")[2].textContent;

        const noDupList1 = (shakerList1 !== shakerList2) && (shakerList1 !== shakerList3);
        const noDupList2 = (shakerList2 !== shakerList1) && (shakerList2 !== shakerList3);
        const noDupList3 = (shakerList3 !== shakerList1) && (shakerList3 !== shakerList2) 

       if ( ( recipeArr.includes(shakerList1) && ( noDupList1 ) ) && 
            ( recipeArr.includes(shakerList2) && ( noDupList2 ) ) && 
            ( recipeArr.includes(shakerList3) && ( noDupList3 ) )  ) {

            alert("Good Job!");
            this.correctDrinkRecipe();
            return true;
        } else {
            alert("Wrong Drink!")
            this.strike();
            return false;
       }
    }

    tips() {
        const tips = document.getElementById("tips");
        let tipsInt = parseInt(tips.textContent);
        if (tipsInt >= 449) {
            this.gameOver();
        } else {
            tipsInt += 50;
        }
        tips.textContent = tipsInt;
    }

    correctDrinkRecipe() {
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().clearList();
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().removeOrder();
        new _order__WEBPACK_IMPORTED_MODULE_2__.default().generateOrder();
        this.customer.removeCustomer();
        this.customer.generateCustomer();
        this.tips();
        this.resetTimer();
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
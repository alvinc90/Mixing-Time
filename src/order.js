import Customer from "./customer";
import Timer from './timer';
class Order {
    constructor() {
        this.customer = new Customer();
        this.timer = new Timer();

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

export default Order;
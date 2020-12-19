// import Order from './order';
import Customer from './customer';
import Cocktail from './cocktail';
import Order from './order';

class Timer {
    constructor() {
        // this.order = new Order();
        this.customer = new Customer();
        this.cocktail = new Cocktail();
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
        new Cocktail().removeIngredients();
        new Cocktail().removeShakerLists();
        new Order().resetTips();
        new Order().removeOrder();
        new Customer().removeCustomer();
        this.stopTimer();
    }

    resetInitialTimer() {
        const timer = document.getElementById("timer");
        timer.textContent = "10";
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
        highscore.textContent = tips.textContent
        audio.pause();
        audio.currentTime = 0;
        new Order().removeOrder();
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

    correctDrinkRecipe() {
        new Order().clearList();
        new Order().tips();
        new Order().removeOrder();
        new Order().generateOrder();
        this.customer.removeCustomer();
        this.customer.generateCustomer();
        this.resetTimer();
    }
}

export default Timer;
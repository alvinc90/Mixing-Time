import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
import Sound from './sound';
class Game {
    constructor() {
        this.cocktail = new Cocktail();
        this.order = new Order();
        this.customer = new Customer();
        this.timer = new Timer();
        this.sound = new Sound();
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
        this.resetInstructionButton();
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
        check.addEventListener("click", () => this.checkRecipeMatch());
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
            this.disabledInstructionButton();
        })
    }

    disabledInstructionButton() {
        const openButton = document.getElementById("button6");
        openButton.setAttribute("disabled", true);
        openButton.classList.remove("button6");
        openButton.classList.add("disabled-instruction");

    }

    resetInstructionButton() {
        const openButton = document.getElementById("button6");
        openButton.removeAttribute("disabled");
        openButton.classList.remove("disabled-instruction");
        openButton.classList.add("button6");
    }

    removeYouWin() {
        const gameOver = document.getElementById("game-over");
        const youWin = document.querySelectorAll("#game-over h2")[0];
        gameOver.removeChild(youWin);
    }

    gameOver() {
        const tips = document.getElementById("tips");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const audio = document.querySelector("audio");
        const youWin = document.createElement("h2");
        const gameOver = document.getElementById("game-over");
        youWin.textContent = "YOU WIN!"
        this.timer.stopTimer();
        this.timer.resetInitialTimer();
        closingModal.style.display = "block";
        banana.style.display = "none";
        let intHighscore = parseInt(tips.textContent);
        if (intHighscore >= 450) {
            gameOver.appendChild(youWin)
            highscore.textContent = 500
        } else {
            highscore.textContent = tips.textContent
        }
        audio.pause();
        audio.currentTime = 0;
        this.order.removeOrder();
        this.customer.removeCustomer();
    }

    strike() {
        const strikes = document.getElementsByClassName("strikes");
        const lastStrike = strikes.length - 1;
        if (strikes.length === 1) {
            this.gameOver();
        } else {
            strikes[lastStrike].remove();
            this.timer.resetTimer();
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
            this.correctDrinkRecipe();
            this.sound.right();
            return true;
        } else {
            this.sound.wrong();
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
        this.order.clearList();
        this.order.removeOrder();
        this.order.generateOrder();
        this.customer.removeCustomer();
        this.customer.generateCustomer();
        this.timer.resetTimer();
        this.tips();
    }
    
}

export default Game;
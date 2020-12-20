import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
class Game {
    constructor() {
        this.cocktail = new Cocktail();
        this.order = new Order();
        this.customer = new Customer();
        this.timer = new Timer();
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

export default Game;
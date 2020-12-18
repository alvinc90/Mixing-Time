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
    }

    reset() {
        this.cocktail.removeIngredients();
        this.cocktail.removeShakerLists();
        this.order.resetTips();
        this.order.removeOrder();
        this.customer.removeCustomer();
    }

    start() {
        this.cocktail.generateIngredients();
        this.cocktail.generateEmptylists();
        this.cocktail.removeShakerIngredientButton();
        this.cocktail.clearShakerListButton();
        this.order.generateOrder();
        this.customer.generateCustomer();
        this.timer.generateTimer();
    }


    checkForMatch() {
        const check = document.getElementById("check");
        check.addEventListener("click", () => this.order.checkRecipeMatch());
    }


}

export default Game;
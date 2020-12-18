import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
class Game {
    constructor() {
        this.reset();
        this.start();
        this.checkForMatch();
    }

    reset() {
        new Cocktail().removeIngredients();
        new Cocktail().removeShakerLists();
        new Order().resetResult();
        new Order().removeOrder();
        new Customer().removeCustomer();
    }

    start() {
        new Cocktail().generateIngredients();
        new Cocktail().generateEmptylists();
        new Cocktail().removeShakerIngredientButton();
        new Cocktail().clearShakerListButton();
        new Order().generateOrder();
        new Customer().generateCustomer();
        new Timer().generateTimer();
    }


    checkForMatch() {
        const check = document.getElementById("check");
        check.addEventListener("click", () => new Order().checkRecipeMatch());
    }


}

export default Game;
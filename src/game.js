import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
import Sound from './sound';
class Game {
    constructor() {
        this.reset();
        this.start();
        this.checkForMatch();
    }

    start() {
        new Cocktail().generateIngredients();
        new Cocktail().generateEmptylists();
        new Cocktail().clearShakerList();
        new Cocktail().removeShakerList();
        new Order().generateOrder();
        new Customer().generateCustomer();
        new Timer().generateTimer();
    }

    checkForMatch() {
        const check = document.getElementById("check");
        check.addEventListener("click", () => new Order().checkRecipeMatch());
    }

    reset() {
         new Cocktail().removeIngredients();
         new Cocktail().removeShakerLists();
         new Order().resetResult();
    }

}

export default Game;
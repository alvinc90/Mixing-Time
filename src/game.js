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
        debugger
    }

    start() {
        debugger
        new Cocktail().generateIngredients();
        new Cocktail().generateEmptylists();
        new Cocktail().clearShakerList();
        new Cocktail().removeShakerList();
        new Order().generateOrder();
        new Customer().generateCustomer();
        new Timer().generateTimer();
    }

    checkForMatch() {
        debugger
        const check = document.getElementById("check");
        check.addEventListener("click", () => new Order().checkRecipeMatch());
    }

    reset() {
        debugger
         new Cocktail().removeIngredients();
         new Cocktail().removeShakerLists();
         new Order().resetResult();
    }

}

export default Game;
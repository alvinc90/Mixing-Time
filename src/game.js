import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
class Game {
    constructor() {
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
        
    }

}

export default Game;
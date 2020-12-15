import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
class Game {
    constructor() {
        new Cocktail();
        new Customer();
        new Order();
        new Timer();
    }

}

export default Game;
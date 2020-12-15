import Cocktail from './cocktail';
import Customer from './customer';
import Order from './order';
import Timer from './timer';
class Game {
    constructor() {
        this.start();
        this.nextOrder();
    }

    start() {
        new Cocktail();
        new Order().generateOrder();
        new Customer().generateCustomer();
        new Timer().generateTimer();
    }

    nextOrder() {
        // let timeStart = new Date().getTime();
        // let diff = 7000 * 10;
        // let timeNext = (timeStart + diff);

        // setTimeout(() => {
        //     new Customer().removeCustomer();
        //     new Timer().stopTimer();
        //     new Order().removeOrder();
        //     new Customer().generateCustomer();
        //     new Timer().generateTimer();
        //     new Order().generateOrder();
        // }, 8000);
    }



}

export default Game;
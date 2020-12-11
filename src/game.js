import Cocktail from './cocktail';
class Game {
    constructor() {
        let c = new Cocktail();
        c.generateIngredients();
    }

}

export default Game;
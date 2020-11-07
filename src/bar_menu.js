import Garnish from "./menu_items/garnish";
import Mixer from "./menu_items/mixer";
import Beer from "./menu_items/beer";

class BarMenu {
    generateAllMenu() {
        let garnish = new Garnish;
        let mixer = new Mixer;
        let beer = new Beer;
        garnish.generateGarnish();
        mixer.generateMixer();
        beer.generateBeer()
    }

}

export default BarMenu; 
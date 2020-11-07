import Garnish from "./menu_items/garnish";
import Mixer from "./menu_items/mixer";
import Beer from "./menu_items/beer";
import Wine from "./menu_items/wine";
import Base from "./menu_items/base";
import Flavor from "./menu_items/flavor";

class BarMenu {
    generateAllMenu() {
        let garnish = new Garnish;
        let mixer = new Mixer;
        let beer = new Beer;
        let wine = new Wine;
        let base = new Base;
        let flavor = new Flavor;
        garnish.generateGarnish();
        mixer.generateMixer();
        beer.generateBeer()
        wine.generateWine();
        base.generateBase();
        flavor.generateFlavor();
    }

}

export default BarMenu; 
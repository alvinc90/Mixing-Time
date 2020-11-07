console.log("Webpack is working!")
import Game from './game';
import BarMenu from './bar_menu';
import Customer from "./customer";



document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    game.switching();
    let barMenu = new BarMenu();
    barMenu.generateAllMenu();
    let customer = new Customer();
    customer.generateCustomer();
})


const sayHi = (name) => {
    return (
        // console.log('i am bar')
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("Alvin");

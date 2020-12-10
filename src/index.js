console.log("Webpack is working!")
import Game from './game';
import BarMenu from './bar_menu';
import Customer from "./customer";
import Order from "./order";
import Timer from "./timer";
// import sound from "./sound";


document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    game.switching();
    let barMenu = new BarMenu();
    barMenu.generateAllMenu();
    new Customer();
    new Order();
    new Timer();
    // new sound("./audio/Allume-Cockney.mp3").play();
    // const audio = document.querySelector("audio");
    // audio.play();
})
//a

const sayHi = (name) => {
    return (
        // console.log('i am bar')
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("Alvin");

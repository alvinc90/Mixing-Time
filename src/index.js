console.log("Webpack is working!")
import Game from './game';
// import Timer from "./timer";
// import sound from "./sound";


document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
   
    // new sound("./audio/Allume-Cockney.mp3").play();
    // const audio = document.querySelector("audio");
    // audio.play();
})


const sayHi = (name) => {
    return (
        // console.log('i am bar')
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("Alvin");

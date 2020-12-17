console.log("Webpack is working!")
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("opening-modal");
    const closingModal = document.getElementById("closing-modal");
    const start = document.getElementById("button");
    const banana = document.getElementsByClassName("left-inner-container")[0];
    const restart = document.getElementById("button2");
    banana.style.display = "none";

    start.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        new Game();
    })

    restart.addEventListener("click", () => {
        banana.style.display = "block";
        modal.style.display = "none";
        closingModal.style.display = "none";
        new Game();
    })
    
    // new Game();
    // new sound("./audio/Allume-Cockney.mp3").play();
    // const audio = document.querySelector("audio");
    // audio.play();
})

const sayHi = (name) => {
    return (
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("R2D2");

console.log("Webpack is working!")
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("mymodal");
    const start = document.getElementById("button");
    const banana = document.getElementsByClassName("left-inner-container")[0];
    banana.style.display = "none";

    start.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
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

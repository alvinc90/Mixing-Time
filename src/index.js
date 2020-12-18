console.log("Webpack is working!")
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("opening-modal");
    const closingModal = document.getElementById("closing-modal");
    const start = document.getElementById("button");
    const banana = document.getElementsByClassName("left-inner-container")[0];
    const restart = document.getElementById("button2");
    const start2 = document.getElementById("button3");
    const audio = document.querySelector("audio");
    banana.style.display = "none";

    // start.addEventListener("mouseenter", () => {
    //     const audio = document.querySelector("audio");
    //     audio.play();
    // })

    // start.addEventListener("mouseleave", () => {
    //     const audio = document.querySelector("audio");
    //     audio.pause();
    //     audio.currentTime = 0; aa
    // })

    start.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        new Game();
        // audio.play();
    })

    start2.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        new Game();
    })

    restart.addEventListener("click", () => {
        debugger
        modal.style.display = "none";
        banana.style.display = "block";
        closingModal.style.display = "none";
        new Game();
        // audio.play();
    })
})

const sayHi = (name) => {
    return (
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("R2D2");

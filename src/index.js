console.log("Webpack is working!")
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("opening-modal");
    const closingModal = document.getElementById("closing-modal");
    const start = document.getElementById("button");
    const banana = document.getElementsByClassName("left-inner-container")[0];
    const restart = document.getElementById("button2");
    const start2 = document.getElementById("button3");
    banana.style.display = "none";

    // start.addEventListener("mouseenter", () => {
    //     const audio = document.querySelector("audio");
    //     audio.play();
    // })

    // start.addEventListener("mouseleave", () => {
    //     const audio = document.querySelector("audio");
    //     audio.pause();
    //     audio.currentTime = 0;
    // })

    start.addEventListener("click", () => {
        const audio = document.querySelector("audio");
        modal.style.display = "none";
        banana.style.display = "block";
        new Game();
        audio.play();
    })

    start2.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        new Game();
    })

    restart.addEventListener("click", () => {
        banana.style.display = "block";
        modal.style.display = "none";
        closingModal.style.display = "none";
        new Game();
        const audio = document.querySelector("audio");
        // audio.play();
    })
})

const sayHi = (name) => {
    return (
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("R2D2");

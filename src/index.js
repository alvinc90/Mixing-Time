console.log("Webpack is working!")
import Game from './game';
import Sound from './sound';

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("opening-modal");
    const closingModal = document.getElementById("closing-modal");
    const start = document.getElementById("button");
    const banana = document.getElementsByClassName("left-inner-container")[0];
    const restart = document.getElementById("button2");
    const start2 = document.getElementById("button3");
    const restart2 = document.getElementById("button4");
    const audio = document.querySelector("audio");
    banana.style.display = "none";
    let game1 = new Game();

    // start with music
    start.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        game1.reset();
        game1.start();
        audio.play();
    })

    // start with no music
    start2.addEventListener("click", () => {
        modal.style.display = "none";
        banana.style.display = "block";
        game1.reset();
        game1.start();
    })

    // restart with music
    restart.addEventListener("click", () => {        
        modal.style.display = "none";
        banana.style.display = "block";
        closingModal.style.display = "none";
        game1.reset();
        game1.start();
        audio.play();
        game1.removeYouWin();
    })

    //restart with no music
    restart2.addEventListener("click", () => {        
        modal.style.display = "none";
        banana.style.display = "block";
        closingModal.style.display = "none";
        game1.reset();
        game1.start();
        game1.removeYouWin();
    })

    // start.addEventListener("mouseenter", () => {
    //     const audio = document.querySelector("audio");
    //     audio.play();
    // })

    // start.addEventListener("mouseleave", () => {
    //     const audio = document.querySelector("audio");
    //     audio.pause();
    //     audio.currentTime = 0;
    // })
})

const sayHi = (name) => {
    return (
        console.log(`Hi, My name is ${name}`)
    )
    
};
sayHi("R2D2");

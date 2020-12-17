import Order from './order';
import Customer from './customer';

class Timer {
    constructor() {
        this.time = null;
        this.countdown = this.countdown.bind(this);
    }
    
    generateTimer() {
        this.time = setInterval(this.countdown, 1000);
    }
    
    countdown() {
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const timer = document.getElementById("timer");
        const result = document.getElementById("result");
        const highscore = document.getElementById("highscore");
        let timeleft = timer.textContent;
        timeleft -= 1;
        if (timeleft <= 0) {
            timer.textContent = "45";
            this.stopTimer();
            closingModal.style.display = "block";
            banana.style.display = "none";
            highscore.textContent = result.textContent
            const audio = document.querySelector("audio");
            audio.pause();
            audio.currentTime = 0;
            new Order().removeOrder();
            new Customer().removeCustomer();
        } else {
            timer.textContent = timeleft;
            console.log(timer.textContent);
        }
    }

    stopTimer() {
        clearInterval(this.time);
    }

    removeTimer() {
        const timer = document.getElementById("timer");
        timer.textContent = "n/a";

    }
}

export default Timer;
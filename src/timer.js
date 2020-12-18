import Order from './order';
import Customer from './customer';

class Timer {
    constructor() {
        this.time = null;
        this.countdown = this.countdown.bind(this);
    }
    
    generateTimer() {
        if (this.time) {
            clearInterval(this.time);
        }
        this.time = setInterval(this.countdown, 1000);
    }
    
    countdown() {
        const timer = document.getElementById("timer");
        let timeleft = timer.textContent;
        timeleft -= 1;
        if (timeleft <= 0) {
            this.afterTimerReachesZero();
        } else {
            timer.textContent = timeleft;
            console.log(timer.textContent);
        }
    }

    afterTimerReachesZero() {
        const result = document.getElementById("result");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const timer = document.getElementById("timer");
        
        timer.textContent = "60";
        this.stopTimer();
        closingModal.style.display = "block";
        banana.style.display = "none";
        highscore.textContent = result.textContent
        const audio = document.querySelector("audio");
        // audio.pause();
        // audio.currentTime = 0;
        new Order().removeOrder();
        new Customer().removeCustomer();
        debugger
    }

    resetTimer() {
        this.stopTimer();
        this.removeTimer();
        this.generateTimer();
    }

    stopTimer() {
        clearInterval(this.time);
    }

    removeTimer() {
        const timer = document.getElementById("timer");
        timer.textContent = "10";
    }

}

export default Timer;
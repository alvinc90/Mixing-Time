import Order from './order';
import Customer from './customer';
import Sound from './sound';

class Timer {
    constructor() {
        //maximum call stack error if i uncomment the line of code below
        // this.order = new Order();
        this.sound = new Sound();
        this.customer = new Customer();
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
            this.sound.wrong();
            this.afterTimerReachesZero();
        } else {
            timer.textContent = timeleft;
            console.log(timer.textContent);
        }
    } 

    resetInitialTimer() {
        const timer = document.getElementById("timer");
        timer.textContent = "12";
    }

    resetTimer() {
        this.stopTimer();
        this.resetSeconds();
        this.generateTimer();
    }

    stopTimer() {
        clearInterval(this.time);
    }

    resetSeconds() {
        const timer = document.getElementById("timer");
        timer.textContent = "10";
    }

    gameOver2() {
        const tips = document.getElementById("tips");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const audio = document.querySelector("audio");
        const youWin = document.createElement("h2");
        const gameOver = document.getElementById("game-over");
        youWin.textContent = "YOU WIN!"
        this.stopTimer();
        this.resetInitialTimer();
        closingModal.style.display = "block";
        banana.style.display = "none";
        let intHighscore = parseInt(tips.textContent);
        if (intHighscore >= 450) {
            gameOver.appendChild(youWin)
            highscore.textContent = 500
        } else {
            highscore.textContent = tips.textContent
        }
        audio.pause();
        audio.currentTime = 0;
        new Order().removeOrder();
        this.customer.removeCustomer();
    }

    afterTimerReachesZero() {
        const strikes = document.getElementsByClassName("strikes");
        const lastStrike = strikes.length - 1;
        if (strikes.length === 1) {
            this.gameOver2();
        } else {
            strikes[lastStrike].remove();
            this.resetTimer();
        }
    }

}

export default Timer;
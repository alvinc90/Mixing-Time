// import Order from './order';
import Customer from './customer';
import Cocktail from './cocktail';
import Order from './order';

class Timer {
    constructor() {
        // this.order = new Order();
        this.customer = new Customer();
        this.cocktail = new Cocktail();
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
        const tips = document.getElementById("tips");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const audio = document.querySelector("audio");


        this.resetInitialTimer();
        closingModal.style.display = "block";
        banana.style.display = "none";
        highscore.textContent = tips.textContent
        audio.pause();
        audio.currentTime = 0;
        this.resetGame();
    }

    resetGame() {
        new Cocktail().removeIngredients();
        new Cocktail().removeShakerLists();
        new Order().resetTips();
        new Order().removeOrder();
        new Customer().removeCustomer();
        this.stopTimer();
    }

    resetInitialTimer() {
        const timer = document.getElementById("timer");
        timer.textContent = "10";
    }

    resetTimer() {
        // this.stopTimer();
        this.resetSeconds();
        // this.generateTimer();
    }

    stopTimer() {
        clearInterval(this.time);
    }

    resetSeconds() {
        const timer = document.getElementById("timer");
        timer.textContent = "11";
    
    
    }


}

export default Timer;
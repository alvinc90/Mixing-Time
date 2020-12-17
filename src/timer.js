class Timer {
    constructor() {
        this.time = null;
        this.countdown = this.countdown.bind(this);
    }
    
    generateTimer() {
        this.time = setInterval(this.countdown, 1000);
    }
    
    countdown() {
        const timer = document.getElementById("timer");
        let timeleft = timer.textContent;
        timeleft -= 1;
        if (timeleft <= 0) {
            timer.textContent = "game over"
            this.stopTimer();
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
class Timer {
    constructor() {
        this.timer = null;
    }
    
    generateTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(this.countdown, 1000);
    }
    
    countdown() {
        let timeleft = 7;
        const timer = document.getElementById("timer");

        // debugger
        if (timeleft === 0) {
            timer.textContent = "0"
        } else {
            timer.textContent = timeleft;
            console.log(timer.textContent);
        }
        timeleft -= 1;
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}

export default Timer;
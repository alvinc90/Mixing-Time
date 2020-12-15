class Timer {
    constructor() {
        this.generateTimer();
    }
    
    generateTimer() {
        let timeleft = 10;
        const downloadTimer = setInterval(() => {
            if (timeleft <= 0) {
                clearInterval(downloadTimer); 
            } else {
                const timer = document.getElementById("timer")
                timer.textContent = timeleft;
            }
        timeleft -= 1;
        }, 1000)
    }

    stopTimer() {
        clearInterval(downloadTimer)
    }
}

export default Timer;
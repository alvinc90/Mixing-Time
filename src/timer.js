class Timer {
    constructor() {
        this.generateTimer();
    }
    
    generateTimer() {
        let timeleft = 5;
        const downloadTimer = setInterval(() => {
            if (timeleft <= 0) {
                clearInterval(downloadTimer); 
            } else {
                const timer = document.getElementById("timer")
                timer.textContent = timeleft;
            }
        console.log(timeleft)
        timeleft -= 1;
        }, 1000)
    }
}

export default Timer;
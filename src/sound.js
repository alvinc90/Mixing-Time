class Sound {
  constructor() {
    this.play();
    this.pause();
    this.turnUp();
    this.turnDown();
  }

  play() {
    const audio = document.querySelector("audio");
    const playButton = document.getElementById("audio-play");
    playButton.addEventListener("click", () => {
      audio.play();
    })
  }

  pause() {
    const audio = document.querySelector("audio");
    const pauseButton = document.getElementById("audio-pause");
    pauseButton.addEventListener("click", () => {
      audio.pause();
    })
  }

  turnUp() {
    const audio = document.querySelector("audio");
    const plusButton = document.getElementById("audio-plus");
    plusButton.addEventListener("click", () => {
      audio.volume += 0.1;
    })
  }

  turnDown() {
    const audio = document.querySelector("audio");
    const minusButton = document.getElementById("audio-minus");
    minusButton.addEventListener("click", () => {
      audio.volume -= 0.1;
    })
  }

  right() {
    const rightSound = document.getElementById("right");
    rightSound.play();
  }

  wrong() {
    const wrongSound = document.getElementById("wrong");
    wrongSound.play();
  }
  

}

export default Sound;
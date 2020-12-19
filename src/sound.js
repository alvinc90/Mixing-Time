class Sound {
  constructor() {
  }

  play() {
    const audio = document.querySelector("audio");
    const source = document.createElement("source");
    source.setAttribute("src", "./audio/Allume-Cockney.mp3");
    source.setAttribute("type", "audio/mp3");
    audio.appendChild(source);
    audio.play();
  }

  stop() {
    const audio = document.querySelector("audio");
    const source = document.createElement("source");
    source.setAttribute("src", "./audio/Allume-Cockney.mp3");
    source.setAttribute("type", "audio/mp3");
    audio.appendChild(source);
    audio.pause();
  }
}

export default Sound;
const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const preBtn = document.querySelector("#pre");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

function playSong() {
  musicContainer.classList.add("play")
  playBtn.querySelector(img).classList.remove(img)
}

function pauseSong() {}

// event listeners 
playBtn.addEventListener("click", () => {
  const playing = musicContainer.classList.contains("play")

  if(playing) {
    pauseSong()
  }
  else {
    playSong()
  }
})
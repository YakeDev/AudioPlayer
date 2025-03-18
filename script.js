const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const seekSlider = document.getElementById("seekSlider");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Mute functionality
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "Unmute" : "Mute";
});

// Volume control
volumeSlider.addEventListener("input", (event) => {
  audio.volume = event.target.value;
});

// Update the seek slider and current time
audio.addEventListener("loadedmetadata", () => {
  durationLabel.textContent = formatTime(audio.duration);
  seekSlider.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  seekSlider.value = audio.currentTime;
  currentTimeLabel.textContent = formatTime(audio.currentTime);
});

// Seek functionality
seekSlider.addEventListener("input", (event) => {
  audio.currentTime = event.target.value;
});

// Format time from seconds to MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

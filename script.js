const video = document.getElementById("video-center");
const btnPlayPause = document.getElementById("btn-play-pause");
const btnMuteToggle = document.getElementById("btn-mute-toggle");

if (video) {
  video.addEventListener("canplay", () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  });

  if (btnPlayPause) {
    btnPlayPause.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        btnPlayPause.textContent = "Pause";
      } else {
        video.pause();
        btnPlayPause.textContent = "Play";
      }
    });
  }

  if (btnMuteToggle) {
    btnMuteToggle.addEventListener("click", () => {
      video.muted = !video.muted;
      btnMuteToggle.textContent = video.muted ? "Con sonido" : "Silenciar";
    });
  }
}

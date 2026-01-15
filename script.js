const video = document.getElementById("video-center");

if (video) {
  video.addEventListener("canplay", () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  });
}

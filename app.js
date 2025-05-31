function initHeroVideo() {
  const video = document.querySelector(".bg-video");

  if (!video) return;

  video.muted = true;
  video.autoplay = true;

  video.addEventListener("canplay", () => {
    setTimeout(() => {
      if (video.duration > 23) {
        video.currentTime = 23;
      }

      video.play().catch(err => {
        console.warn("Video kunne ikke afspilles:", err);
      });
    }, 50);
  });
}

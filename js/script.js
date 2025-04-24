document.getElementById('toggleVideoBtn').addEventListener('click', function () {
    const video = document.getElementById('heroVideo');
    if (video.paused) {
      video.play();
      this.textContent = '❚❚'; // Pause icon
    } else {
      video.pause();
      this.textContent = '▶'; // Play icon
    }
  });
  
const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  const aud = document.querySelector("." + this.dataset.audio);
  aud.pause();
  aud.currentTime = 0;
  aud.play();
});

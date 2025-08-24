let count = 0;
let lap = 1;
const maxCount = 10;

const hyeButton = document.getElementById("hyeButton");
const whatTimeButton = document.getElementById("whatTimeButton");
const counterDisplay = document.getElementById("counter");
const lapDisplay = document.getElementById("lapDisplay");
const lapHistory = document.getElementById("lapHistory");
const lapButton = document.getElementById("lapButton");
const hyeSound = document.getElementById("hyeSound");
const whatTimeSound = document.getElementById("whatTimeSound");

hyeButton.addEventListener("click", () => {
  if (count < maxCount) {
    count++;
    counterDisplay.textContent = `${count} / ${maxCount} ひぇ～`;
    hyeSound.currentTime = 0;
    hyeSound.play();
  }
  if (count >= maxCount) {
    hyeButton.disabled = true;
  }
});

whatTimeButton.addEventListener("click", () => {
  whatTimeSound.currentTime = 0;
  whatTimeSound.play();
});

lapButton.addEventListener("click", () => {
  lapHistory.innerHTML += `ラップ ${lap}: ${count} ひぇ～<br>`;
  lap++;
  count = 0;
  counterDisplay.textContent = `${count} / ${maxCount} ひぇ～`;
  lapDisplay.textContent = `ラップ ${lap}`;
  hyeButton.disabled = false;
});
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progressWidth = 0;
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  progressWidth += 33.33;

  checkDisabled();
  progress.style.width = `${progressWidth}%`;

  drawCircle();
});

prev.addEventListener("click", () => {
  currentActive--;
  progressWidth -= 33.33;
  checkDisabled();
  progress.style.width = `${progressWidth}%`;
  drawCircle();
});

function checkDisabled() {
  if (currentActive > 4) {
    currentActive = 4;
  }
  if (progressWidth > 100) {
    progressWidth = 99.99;
  }
  progressWidth > 0 ? (prev.disabled = false) : (prev.disabled = true);
}

function drawCircle() {
  circles.forEach((circle, index) => {
    if (currentActive > index) {
      setTimeout(() => {
        circles[index].classList.add("active");
      }, 250);
    } else {
      circles[index].classList.remove("active");
    }
  });
}

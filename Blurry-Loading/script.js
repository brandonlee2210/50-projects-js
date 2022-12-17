const text = document.querySelector(".text");
const bg = document.querySelector(".bg");

let blur = 0;

const int = setInterval(() => {
  blurring();
}, 30);

function blurring() {
  blur++;

  if (blur > 99) {
    clearInterval(int);
  }

  text.textContent = `${blur}%`;
  text.style.opacity = scale(blur, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(blur, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

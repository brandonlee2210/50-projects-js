const container = document.querySelector(".container");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

leftBox.addEventListener("mouseenter", () => {
  container.className = "container hover-left";
});

rightBox.addEventListener("mouseenter", () => {
  container.className = "container hover-right";
});

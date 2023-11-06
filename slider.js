//slider

let offset = 0; //  смещение от левого края
const slider = document.querySelector(".image");
const arrowsLeft = document.querySelector(".arrows__left");
const arrowsRight = document.querySelector(".arrows__right");

arrowsRight.addEventListener("click", function () {
  offset = offset + 350;
  if (offset > 350) {
    offset = 0;
  }
  slider.style.left = -offset + "px";
});

arrowsLeft.addEventListener("click", function () {
  offset = offset - 350;
  if (offset < 0) {
    offset = 350;
  }
  slider.style.left = -offset + "px";
});
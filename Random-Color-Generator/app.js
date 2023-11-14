let btn = document.querySelector("button");
let heading = document.querySelector(".heading");
let div = document.querySelector(".div");

// event on click
btn.addEventListener("click", function () {
  let color = getRandomColor();
  heading.innerText = color;
  div.style.backgroundColor = color;
});

// function gives random color
function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

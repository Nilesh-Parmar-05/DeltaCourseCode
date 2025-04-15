let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", getRandomColor);

function getRandomColor() {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  let color = `rgb(${R}, ${B}, ${B})`;

  // btn.style.backgroundColor = color; 
  div.style.backgroundColor = color;
  h3.innerText = color;
}

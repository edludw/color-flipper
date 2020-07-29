const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("#btn");
const myColorSpan = document.querySelector(".color");
const body = document.body;

// Event Listener
button.addEventListener("click", flipColor);

// Function to Flip Color
function flipColor(e) {
  let colorSet = "";
  for (var i = 0; i < 6; i++) {
    const randomiser = Math.floor(Math.random() * hex.length);
    colorSet += `${hex[randomiser]}`;
  }
  body.style.backgroundColor = `#${colorSet}`;
  myColorSpan.textContent = `#${colorSet}`;
}

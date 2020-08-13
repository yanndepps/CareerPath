const myButt = document.getElementById("btn");
const myTitle = document.getElementById("title");
const counter = 0;

myButt.addEventListener("click", function () {
  // code to be run when the button is clicked
  myTitle.textContent = "and learning JavaScript too!";
  // make the button text equal the counter variable
  myButt.textContent = String(counter);
});

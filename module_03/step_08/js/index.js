const myButt = document.getElementById("btn");
// const myTitle = document.getElementById('title')
let counter = 0;

myButt.addEventListener("click", function () {
  console.log("counter at line 6 : ", counter);
  // counter++;
  counter += 2;
  console.log("counter at line 8 : ", counter);
  myButt.textContent = String(counter);
});

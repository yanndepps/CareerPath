// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         });
//     }
// });

const button = document.getElementById("button");

// using anonymous function
// button.addEventListener('click', function() {
//   console.log('button is clicked!');
// })

// defining a function first
function handleButtonClick() {
  console.log("button clicked!");
  document.body.style.backgroundColor = "#BE03FD";
  this.removeEventListener("click", handleButtonClick);
}

button.addEventListener("click", handleButtonClick);

// note : adding parenthesis to a function is telling the function to happen right now -> handleButtonClick()

// look up some common HTML/JS events and set up your page to listen for that event.

document.getElementById("header").addEventListener("dblclick", function () {
  console.log("header has been double clicked now!");
  document.body.style.backgroundColor = "#C1C6FC";
});

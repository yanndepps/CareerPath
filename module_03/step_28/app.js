// innerHTML vs textContent
// textContent essentially gets the 'pure' text
// innerHTML returns the the stringified version of our HTML elements
// we can use innerHTML to add elements
const myList = document.getElementById("my-list");
console.log(myList.textContent);
myList.innerHTML += "<li>yo</li>";
console.log(myList.innerHTML);
document.body.innerHTML += '<p id="para">accumulation and its discontents</p>';
document.getElementById("para").style.textAlign = "center";
document.getElementById("para").style.fontSize = "36px";

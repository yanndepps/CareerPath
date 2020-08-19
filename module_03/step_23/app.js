/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

// const textGrab = document.querySelector('h1');
// const textChanged = document.querySelector('p');
// textChanged.textContent = textGrab.textContent;
// console.log(textChange);

const text = document.querySelector("#header").textContent;
document.querySelector("#paragraph").textContent = text;
console.log(text);

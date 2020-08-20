// create elements
// creating an element doesn't put it on the page !
const newLi = document.createElement('li');
// append to the parent element and label it
newLi.textContent = '3';
const myList = document.getElementById('my-list');
// myList.append(newLi);
// or append as the first child in the list
myList.prepend(newLi);

/**
 * Challenge:
 *
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

const newPara = document.createElement('p');
newPara.textContent = 'tendinous fuchsia';
newPara.style.fontSize = 48 + 'px';
newPara.style.textAlign = 'center';
document.body.append(newPara);

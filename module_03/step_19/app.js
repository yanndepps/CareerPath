// color controls

const purpleBtn = document.getElementById('purple');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');
const redBtn = document.getElementById('red');
const whiteBtn = document.getElementById('white');

purpleBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'rebeccapurple';
});

greenBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'green';
});

blueBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

redBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'firebrick';
});

whiteBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'whitesmoke';
});

// count controls
let count = 0;
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');

subtractBtn.addEventListener('click', function() {
  count--;
  document.getElementById('counter').innerText = count;
});

addBtn.addEventListener('click', function() {
  count++;
  document.getElementById('counter').innerText = count;
});

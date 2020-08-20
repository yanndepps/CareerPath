/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm = document.getElementById('entryform');

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/

// entryForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   console.log('you clicked me!');
// });

// or with function definition
function addEntryToDom(e) {
  e.preventDefault();
  console.log('clicked no submit!');
}

entryForm.addEventListener('submit', addEntryToDom);

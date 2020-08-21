const entryForm = document.getElementById("entryform");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox");

function addEntryToDom(e) {
  e.preventDefault();
  console.log(entryTextbox[0].value);
}

entryForm.addEventListener("submit", addEntryToDom);

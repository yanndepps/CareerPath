const entryForm = document.getElementById("entryform");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");

function addEntryToDom(e) {
  e.preventDefault();
  // console.log(entryTextbox[0].value);
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("single-entry");
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);
  entryTextbox.value = "";

  const displayEntryBtn = document.createElement("button");
  displayEntryBtn.classList.add("display-entry-btn");
  displayEntryBtn.innerText = 1;
  entriesNav.append(displayEntryBtn);
}

entryForm.addEventListener("submit", addEntryToDom);

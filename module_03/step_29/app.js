const powerRangers = [
  {
    name: "Jason Lee Scott",
    color: "red",
  },
  {
    name: "Kimberly Hart",
    color: "pink",
  },
  {
    name: "Zack Taylor",
    color: "black",
  },
  {
    name: "Trini Kwan",
    color: "blue",
  },
  {
    name: "Billy Cranston",
    color: "green",
  },
];

/**
 * to place one element only :
 *
 * const rangerList = document.getElementById('rangers');
 * const newName = document.createElement('li');
 * newName.textContent = powerRangers[0];
 * rangerList.append(newName);
 *
 */

const rangerList = document.getElementById("rangers");

for (let i = 0; i < powerRangers.length; i++) {
  const newName = document.createElement("li");
  newName.textContent = powerRangers[i].name + " : " + powerRangers[i].color;
  rangerList.append(newName);
}

/*
  for (var i = 0; i < powerRangers.length; i++) {
  rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
  }
*/

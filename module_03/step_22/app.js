// querySelector -> select a single element from the page ( returns the first element found that matches the query )
// querySelectorAll -> select all elements from the page that match the query

const result = document.querySelector("#favorite-things");
// console.log(result.innerText);

const arrayResult = document.querySelectorAll("ol#favorite-things > li");
console.log(Array.from(arrayResult));

for (let i = 0; i < arrayResult.length; i++) {
  arrayResult[i].textContent = "** REDACTED **";
}

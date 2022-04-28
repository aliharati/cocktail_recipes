//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let index = 0;
let length = 0;
document.querySelector("#search").addEventListener("click", resetindex);
document.querySelector("#search").addEventListener("click", getCocktail);
document.querySelector("#nextDrink").addEventListener("click", nextDrink);
document.querySelector("#lastDrink").addEventListener("click", lastDrink);

function resetindex() {
  index = 0;
}

function getCocktail() {
  let cocktail = document.querySelector("input").value.split(" ").join("_");
  console.log(cocktail);
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then((res) => res.json())
    .then((data) => {
      length = data.drinks.length;
      document.querySelector("h2").innerText = data.drinks[index].strDrink;
      document.querySelector("img").src = data.drinks[index].strDrinkThumb;
      document.querySelector("h3").innerText =
        data.drinks[index].strInstructions;
    });
}

function nextDrink() {
  let cocktail = document.querySelector("input").value.split(" ").join("_");
  console.log(1);
  if (index < length) {
    index += 1;
  } else {
    index = 0;
  }
  getCocktail();
}
function lastDrink() {
  if (index > 0) {
    index -= 1;
  } else {
    index = length - 1;
  }
  getCocktail();
}

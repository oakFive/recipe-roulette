'use strict';

// Global Variables 

const mealNameElem = document.getElementById('mealName');
const mealImageElem = document.getElementById('result-img');
const nutritionElem = document.getElementById('nutrition');
const ingredientsElem = document.getElementById('ingredients');
const instructionsElem = document.getElementById('instructions');
const asianCategoryElem = document.getElementById('asianCategory');
const mexicanCategoryElem = document.getElementById('mexicanCategory');
const americanCategoryElem = document.getElementById('americanCategory');
const vegetarianCategoryElem = document.getElementById('vegetarianCategory');

// Constructor Functions

function AsianMeal(name, imgUrl, nutrition, ingredients, instructions) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.nutrition = nutrition;
  this.ingredients = ingredients;
  this.instructions = instructions;
}

function MexicanMeal(name, imgUrl, nutrition, ingredients, instructions) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.nutrition = nutrition;
  this.ingredients = ingredients;
  this.instructions = instructions;
}

function AmericanMeal(name, imgUrl, nutrition, ingredients, instructions) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.nutrition = nutrition;
  this.ingredients = ingredients;
  this.instructions = instructions;
}

function VegetarianMeal(name, imgUrl, nutrition, ingredients, instructions) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.nutrition = nutrition;
  this.ingredients = ingredients;
  this.instructions = instructions;
}


// Shuffle function

/* fisher yates style shuffle
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
*/

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * i)
//     const temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }


function asianMeal() {
  const mealData = asianMealData[0];
  const meal = new AsianMeal(
    mealData.name,
    mealData.imgUrl,
    mealData.nutrition,
    mealData.ingredients,
    mealData.instructions,
  )
  mealNameElem.textContent = meal.name;
  const imgItem = document.createElement('img');
  imgItem.src = meal.imgUrl;
  mealImageElem.appendChild(imgItem);
  for(let i = 0; i < meal.nutrition.length; i++) {
    const liNutItem = document.createElement('li');
    liNutItem.textContent = meal.nutrition[i];
    nutritionElem.appendChild(liNutItem);
  }
  for(let i = 0; i < meal.ingredients.length; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = meal.ingredients[i];
    ingredientsElem.appendChild(liItem);
  }
  for(let i = 0; i < meal.instructions.length; i++) {
    const liInstructionItem = document.createElement('li');
    liInstructionItem.textContent = meal.instructions[i];
    instructionsElem.appendChild(liInstructionItem);
  }
};

function mexicanMeal() {
  const mealData = mexicanMealData[0];
  const meal = new MexicanMeal(
    mealData.name,
    mealData.imgUrl,
    mealData.nutrition,
    mealData.ingredients,
    mealData.instructions,
  )
  mealNameElem.textContent = meal.name;
  const imgItem = document.createElement('img');
  imgItem.src = meal.imgUrl;
  mealImageElem.appendChild(imgItem);
  for(let i = 0; i < meal.nutrition.length; i++) {
    const liNutItem = document.createElement('li');
    liNutItem.textContent = meal.nutrition[i];
    nutritionElem.appendChild(liNutItem);
  }
  for(let i = 0; i < meal.ingredients.length; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = meal.ingredients[i];
    ingredientsElem.appendChild(liItem);
  }
  for(let i = 0; i < meal.instructions.length; i++) {
    const liInstructionItem = document.createElement('li');
    liInstructionItem.textContent = meal.instructions[i];
    instructionsElem.appendChild(liInstructionItem);
  }
};

function americanMeal() {
  const mealData = americanMealData[0];
  const meal = new AmericanMeal(
    mealData.name,
    mealData.imgUrl,
    mealData.nutrition,
    mealData.ingredients,
    mealData.instructions,
  )
  mealNameElem.textContent = meal.name;
  const imgItem = document.createElement('img');
  imgItem.src = meal.imgUrl;
  mealImageElem.appendChild(imgItem);
  for(let i = 0; i < meal.nutrition.length; i++) {
    const liNutItem = document.createElement('li');
    liNutItem.textContent = meal.nutrition[i];
    nutritionElem.appendChild(liNutItem);
  }
  for(let i = 0; i < meal.ingredients.length; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = meal.ingredients[i];
    ingredientsElem.appendChild(liItem);
  }
  for(let i = 0; i < meal.instructions.length; i++) {
    const liInstructionItem = document.createElement('li');
    liInstructionItem.textContent = meal.instructions[i];
    instructionsElem.appendChild(liInstructionItem);
  }
};

function vegetarianMeal() {
  const mealData = vegetarianMealData[0];
  const meal = new VegetarianMeal(
    mealData.name,
    mealData.imgUrl,
    mealData.nutrition,
    mealData.ingredients,
    mealData.instructions,
  )
  mealNameElem.textContent = meal.name;
  const imgItem = document.createElement('img');
  imgItem.src = meal.imgUrl;
  mealImageElem.appendChild(imgItem);
  for(let i = 0; i < meal.nutrition.length; i++) {
    const liNutItem = document.createElement('li');
    liNutItem.textContent = meal.nutrition[i];
    nutritionElem.appendChild(liNutItem);
  }
  for(let i = 0; i < meal.ingredients.length; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = meal.ingredients[i];
    ingredientsElem.appendChild(liItem);
  }
  for(let i = 0; i < meal.instructions.length; i++) {
    const liInstructionItem = document.createElement('li');
    liInstructionItem.textContent = meal.instructions[i];
    instructionsElem.appendChild(liInstructionItem);
  }
};

asianCategoryElem.addEventListener('click', asianMeal);
mexicanCategoryElem.addEventListener('click', mexicanMeal);
americanCategoryElem.addEventListener('click', americanMeal);
vegetarianCategoryElem.addEventListener('click', vegetarianMeal);
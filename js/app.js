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
const resultsSectionElem = document.getElementById('resultsSection');

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

function asianMeal() {
  const arrayItem = Math.floor(Math.random()*asianMealData.length)
  const mealData = asianMealData[arrayItem];
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
  const mealData = mexicanMealData[Math.floor(Math.random()*mexicanMealData.length)];
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
  const mealData = americanMealData[Math.floor(Math.random()*americanMealData.length)];
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
  const mealData = vegetarianMealData[Math.floor(Math.random()*vegetarianMealData.length)];
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

function removePreviousMeal() {
  mealImageElem.innerHTML = "";
  nutritionElem.innerHTML = "";
  ingredientsElem.innerHTML = "";
  instructionsElem.innerHTML = "";
}

function clickHandlerAsian() {
  resultsSectionElem.style.display = 'block';
  removePreviousMeal();
  asianMeal();
}

function clickHandlerMexican() {
  resultsSectionElem.style.display = 'block';
  removePreviousMeal();
  mexicanMeal();
}

function clickHandlerAmerican() {
  resultsSectionElem.style.display = 'block';
  removePreviousMeal();
  americanMeal();
}

function clickHandlerVegetarian() {
  resultsSectionElem.style.display = 'block';
  removePreviousMeal();
  vegetarianMeal();
}

asianCategoryElem.addEventListener('click', clickHandlerAsian);
mexicanCategoryElem.addEventListener('click', clickHandlerMexican);
americanCategoryElem.addEventListener('click', clickHandlerAmerican);
vegetarianCategoryElem.addEventListener('click', clickHandlerVegetarian);


resultsSectionElem.style.display = 'none';
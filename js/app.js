'use strict';

// Global Variables 

const mealName = document.getElementById('mealName');
const mealImageElem = document.getElementById('result-img');
const nutritionElem = document.getElementById('nutrition');
const ingredientsElem = document.getElementById('ingredients');
const instructionsElem = document.getElementById('instructions');
const asianCategory = document.getElementById('asianCategory');
const mexicanCategory = document.getElementById('mexicanCategory');
const americanCategory = document.getElementById('americanCategory');
const vegetarianCategory = document.getElementById('vegetarianCategory');


const currentMeal = [];   

// Shuffle function
/* fisher yates style shuffle
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
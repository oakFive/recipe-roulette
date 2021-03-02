'use strict'
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

// Arrays
const asianMealData = [
    {
        name:'General Tsos Chicken',
        imgUrl:'../img/general.jpg',
        nutrition: [
            'Calories: ', 
            'Total Fat: ',
            'Cholesterol: ',
            'Sodium: ',
            'Total Carbs: ',
            'Protein: ',
        ],
        ingredients: [
            '2 tsp vegetable oil',
            '2 tsp minced fresh garlic',
            '1/2 tsp crushed red pepper flakes',
        ],
        instructions: [
            '2 tsp vegetable oil',
            '2 tsp minced fresh garlic',
            '1/2 tsp crushed red pepper flakes',
        ],
    },
    {
        name:'Asian Red Bean Bun',
        imgUrl:'../img/red_bean_bun.jpg',
        nutrition: [
            'Calories: 100', 
            'Total Fat: 10g ',
            'Cholesterol: 0mg ',
            'Sodium: 50mg',
            'Total Carbs: 20g ',
            'Protein: 5g ',
        ],
        ingredients: [
            '1 1/2 cups All-Purpose Flour',
            '1 1/2 Tbsp Granulated Sugar',
            '1 1/4 tsp Instant Dry Yeast',
            '1/3 cup Milk',
            '3/4 cup Red Bean Paste',
        ],
        instructions: [
            'Step 1: Divide the Red Bean Paste (3/4 cup) into 8 pieces, roll into balls.',
            'Step 2: Mix Instant Dry Yeast (1 1/4 tsp), Granulated Sugar (1 1/2 Tbsp), and milk (1/3 Cup) together, let it rest for 10 minutes.',
            'Step 3 Add the yeast mixture into the  All-Purpose Flour (1 1/2 cups) , mix and form a dough.',
            'Step 4: Knead the dough for about 8 minutes until the surface is smooth. Cover with cling film or kitchen towel, let it rest for 30 minutes.',
            'Step 5: Divide the dough into 8 pieces, press it to form a dish. Add in red bean paste filling, seal it and roll a ball.',
            'Step 6:Place the dough on the parchment paper and put in a steamer. Cover the lid and let it rest for 30 minutes. The dough will grow bigger.',
            'Step 7: Steam at high heat for about 12 minutes, turn off the heat and wait for 3 minutes to take the buns out. Serve and enjoy!',
        ],
    }
]

const mexicanMealData = [
    {
        name:'How To Make Menudo',
        imgUrl:'../img/menudo.jpg',
        nutrition: [
            'Calories: 100', 
            'Total Fat: 10g ',
            'Cholesterol: 0mg ',
            'Sodium: 50mg',
            'Total Carbs: 20g ',
            'Protein: 5g ',
        ],
        ingredients: [],
        instructions: [],
    }
]

const americanMealData = [
    {
        name:'',
        imgUrl:'',
        nutrition: [
            'Calories: ', 
            'Total Fat: ',
            'Cholesterol: ',
            'Sodium: ',
            'Total Carbs: ',
            'Protein: ',
        ],
        ingredients: [],
        instructions: [],
    }
]

const vegetarianMealData = [
    {
        name:'',
        imgUrl:'',
        nutrition: [
            'Calories: ', 
            'Total Fat: ',
            'Cholesterol: ',
            'Sodium: ',
            'Total Carbs: ',
            'Protein: ',
        ],
        ingredients: [],
        instructions: [],
    }
]

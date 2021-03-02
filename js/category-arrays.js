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
    }
]


const mexicanMealData = [
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

const americanMealData = [
    {
    name:'TriTip',
    imgUrl:'tritip.jpg',
    nutrition: [
        'Calories: 400', 
        'Total Fat: 20g',
        'Cholesterol: 60g',
        'Sodium: 9g',
        'Total Carbs: 2g',
        'Protein: 33g',
    ],
    ingredients: [
        '2 tsp salt',
        '2 tsp frechly ground black pepper',
        '2 tsp garlic powder',
        '1 1/2 tea paprika',
        '1 tsp onion powder',
        '1 tsp dried rosemary ',
        '1/4 tsp cayenee pepper',
        '1 (2 1/2pound) beef tri-tip',
        '1/3 cup red ine vinegar',
        '1/3 cup crushed garlic',
        '1/2 tsp dijon mustard',
    ],
    instructions: [
        'Stir salt, black pepper, garlic powder, paprika, onion powder, rosemary, and cayenne pepper together in a bowl. Place beef in a glass baking dish and coat beef on all sides with spice mixture. Cover the dish with plastic wrap and refrigerate for 4 hours.',
        'Combine vinegar, vegetable oil, crushed garlic, and Dijon mustard together in a sealable container. Cover the container and shake to blend ingredients',
        'Remove beef from refrigerator, uncover, and let sit at room temperature for 30 minutes',
        'Preheat an outdoor grill for high heat, and lightly oil the grate.',
        'Place meat on preheated grill and brush with garlic-vinegar mixture. Cook meat for 4 minutes, flip, and baste. Repeat the flip and baste process every 4 minutes until beef starts to firm and is reddish-pink and juicy in the center, 25 to 30 minutes total. An instant-read thermometer inserted into the center should read 130 degrees F (54 degrees C). Let rest for at least 10 minutes before slicing.',
        
        ],
    },
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

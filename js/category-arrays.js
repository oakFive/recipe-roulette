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
        name:'Egg Drop Soup',
        imgUrl:'../img/eggdropsoup.jpg',
        nutrition: [
            'Calories: 120', 
            'Total Fat: 10g',
            'Cholesterol: 0mg',
            'Sodium: 20mg',
            'Total Carbs: 10g',
            'Protein: 20',
        ],
        ingredients: [
            '3 large eggs, lightly beaten',
            '4 cups chicken stock, homemade preferred',
            '1 tbsp cornstarch',
            'Scant 1/2 tsp grated ginger',
            '1 tbsp soy sauce (use gluten-free soy sauce if cooking gluten-free)',
            '3 green onions, chopped',
            '1/4 tsp white pepper',
            '3/4 cup enoki mushrooms or sliced shiitake mushrooms',
        ],
        instructions: [
            'Make the cornstarch slurry: Measure out 1/2 cup of the stock and mix with the cornstarch until dissolved.',
            'Put stock, ginger, soy sauce, onions, mushrooms, white pepper in pot and bring to boil:',
            'Place the remaining chicken stock, ginger, soy sauce, green onions, mushrooms and white pepper in a pot and bring to a boil.',
            'Stir in the corn starch slurry and reduce heat to a simmer.',
            'Stir in beaten eggs: Slowly pour in the beaten eggs while stirring the soup while stirring slowly. The egg will spread out into ribbons.',
            'Turn off the heat and garnish with a few more chopped green onions. Serve immediately.',
        ],
    }, 
]

const mexicanMealData = [
    {
        name:'',
        imgUrl:'',
        nutrition: [],
        ingredients: [],
        instructions: [],
    }
    {
        name:'Chicken Fajitas',
        imgUrl:'../img/fajitas.jpg',
        nutrition: [
            'Calories: 200', 
            'Total Fat: 30g',
            'Cholesterol: 0mg',
            'Sodium: 25mg',
            'Total Carbs: 30g',
            'Protein: 40g',
        ],
        ingredients: [
            '2 pounds boneless skinless chicken breast, sliced into thin strips',
            '1/4 cup chopped cilantro',
            '2 tablespoons lime juice (juice of 1 lime)',
            '1 tablespoon cooking oil',
            '1 tablespoon minced garlic (about 3 cloves)',
            '1 tablespoon chili powder',
            '1 teaspoon ground cumin',
            '1 teaspoon dried oregano',
            '1/2 teaspoon coarse kosher salt',
            '1/2 teaspoon paprika',
            '1/2 teaspoon ancho chili powder',
            '2 tablespoons cooking oil, divided',
            '2 bell peppers, sliced into strips',
            '1 large poblano pepper sliced into strips (or substitute with another bell pepper if you cant find poblanos)',
            '1/2 large onion, sliced',
            '1 pinch salt',
            'Optional: guacamole, sour cream, chopped cilantro, flour or corn tortillas',
        ],
        instructions: [
            'Add all the ingredients for the quick marinade in a large mixing bowl. Toss together until chicken is evenly coated with spices. Cover and set aside.',
            'In a large skillet over medium-high heat, add 1 tablespoon of cooking oil. Add the peppers, onions and a pinch of salt. Cook, stirring occasionally, for about 8 minutes, until the veggies are soft.',
            'emove from the skillet, place in a large bowl, cover and set aside.',
            'Add the remaining tablespoon of cooking oil to the same skillet. Add the marinated chicken and cook for 8 to 10 minutes, until chicken is fully cooked.',
            'Add the peppers and onions back to the skillet, toss together with the chicken and remove from heat.',
            'Serve in warm flour or corn tortillas and top with sour cream, guacamole and chopped cilantro.',
        ],
    },
]

const americanMealData = [
    {
        name:'',
        imgUrl:'',
        nutrition: [],
        ingredients: [],
        instructions: [],
    }
    {
        name:'Lobster Roll',
        imgUrl:'../img/lobsterroll.jpg',
        nutrition: [
            'Calories: 300', 
            'Total Fat: 25g',
            'Cholesterol: 0mg',
            'Sodium: 10mg',
            'Total Carbs: 40g',
            'Protein: 20g',
        ],
        ingredients: [
            '1 pound cooked lobster meat cut into bite sized chunks',
            '1/3 cup mayonnaise',
            '2 teaspoons fresh lemon juice',
            '¼ cup finely chopped celery (use tender inner stalks)',
            '1 teaspoon chopped fresh parsley',
            '2 teaspoons green tops from a scallion, minced fine',
            '1 dash hot sauce (we like Cholula)',
            'Pinch is salt',
            'Few grinds freshly ground black pepper',
            'Split-top hot dog rolls',
            '2 tablespoons melted butter',
            'Optional – lettuce for serving.',
        ],
        instructions: [
            'Place the cooked lobster meat in large bowl.',
            'In a separate, smaller bowl combine the mayonnaise, lemon juice, celery, parsley, scallion, hot sauce, and salt and pepper. Mix and taste for seasoning. Once you have the seasoning to your liking, add to the cooked lobster meat and mix.',
            'Brush both sides of rolls with butter and toast both sides in a medium fry pan over medium heat until nicely browned.',
            'Divide the lobster salad between each roll per your preference. Some serve lettuce under the lobster salad but we like it without, your choice.',
        ],
    },
]

const vegetarianMealData = [
    {
        name:'',
        imgUrl:'',
        nutrition: [],
        ingredients: [],
        instructions: [],
    }
    {
        name:'Mushroom Pasta',
        imgUrl:'../img/mushroompasta.jpg',
        nutrition: [
            'Calories: 600', 
            'Total Fat: 100g',
            'Cholesterol: 0mg',
            'Sodium: 30mg',
            'Total Carbs: 120g',
            'Protein: 20g',
        ],
        ingredients: [
            '1 pound dried spaghetti',
            '3 tablespoons unsalted butter, divided',
            '1 tablespoon olive oil',
            '1 pound cremini mushrooms, sliced',
            'Kosher salt',
            'Freshly ground black pepper',
            '6 cloves garlic, minced',
            '1/4 teaspoon red pepper flakes (optional)',
            '1/2 cup grated Pecorino Romano cheese, plus more for serving',
            '2 tablespoons coarsely chopped fresh parsley leaves',
        ],
        instructions: [
            'Bring a large pot of salted water to a boil. Add the pasta and cook until al dente, 7 to 9 minutes or according to package instructions. Meanwhile, cook the mushrooms.',
            'Heat 1 tablespoon of the butter and the oil in a large skillet over medium heat until shimmering. Add the mushrooms, season with salt and pepper, and sauté until browned and tender, about 5 minutes. Add the garlic, red pepper flakes if using, and remaining 2 tablespoons butter and sauté for 1 minute more.',
            'When the pasta is ready, reserve 3/4 cup of the cooking water, then drain the pasta. Add the pasta, reserved cooking water, and cheese to the skillet. Toss over medium heat until the cheese is melted and the sauce thickens and coats the pasta, about 2 minutes. Add the parsley and toss to combine. Serve in shallow bowls with more cheese for serving.',
        ],
    },
]

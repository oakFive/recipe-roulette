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
        name:'General Tsos Chicken',                                                    ////// 1
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
    },
    {
        name:'Egg Drop Soup',                                                            /////2
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
    {
        name: 'Chinese Chicken Wings',                                                      /////3
        imgUrl: '../img/chinesechickenwings.jpeg',
        nutrition: [
            'Calories: 256',
            'Total Fat: 9.2g',
            'Cholesterol: 39.7mg',
            'Sodium: 2451mg',
            'Total Carbs: 28g',
            'Protein: 15.6g',
        ],
        ingredients: [
            '2 cups soy sauce',
            '2 cups brown sugar',
            '2 tbsp garlic powder',
            '5 pounds chicken wings, split and tips discarded'
        ],
        instructions: [
            'Stir the soy sauce, brown sugar, and garlic powder together in a saucepan over medium heat; cook and stir until the sugar melts completely. Remove from heat and allow to cool.',
            'Place the chicken wings in a large bowl. Pour the soy sauce mixture over the wings and toss to coat evenly. Cover the bowl with plastic wrap. Allow chicken to marinate in refrigerator overnight or 8 hours.',
            'Preheat an oven to 350 degrees F (175 degrees C).',
            'Pour the chicken wings and marinade into a 9x13-inch baking dish. Cover the baking dish with aluminum foil.',
            'Bake in the preheated oven until thoroughly hot, about 45 minutes. Remove the aluminum foil from the baking dish and continue baking uncovered another 15 minutes. Serve hot.',
        ],
    },
    {
    name:'Pork Dumplings',                                                                  ////////4
    imgUrl:'../img/dumplings.jpg',
    nutrition: [
        'Calories: 750', 
        'Total Fat: 18g',
        'Cholesterol: 6g',
        'Sodium: 500mg',
        'Total Carbs: 22g',
        'Protein: 11g',
    ],
    ingredients: [
        '1/2 medium head Napa cabbage (about 1 pound) vegetable oil',
        '1 tbsp kosher salt',
        '1 pound ground pork',
        '1 bunch scallions, thinly sliced (about 1 cup)',
        '1 bunch cilantro, minced (about 3/4 cup)',
        '3 tbsp soy sauce',
        '2-inch piece fresh ginger, grated on a microplane or finely minced (about 3 tablespoons)',
        '2 tablespoons sesame oil',
        '2 large eggs, whisked',
        '1 (12-ounce) package round dumpling, wonton, or gyoza wrappers',
    ],
    instructions: [
        'Slice the cabbage and mix with salt: Slice the half-head of cabbage down its length, through the root, to make 2 quarters. Then slice each quarter into very thin strips, cutting cross-wise. Toss the slices with the salt in a large mixing bowl and set aside for 5 to 10 minutes.',
        'Squeeze the liquid from the cabbage: While it rests with the salt, the cabbage will start to release liquid. When ready, grab handfuls of the cabbage and squeeze out the water. Transfer the squeezed cabbage to another mixing bowl.',
        '1Combine the cabbage with the rest of the filling ingredients: To the bowl with the squeezed cabbage, add the ground pork, sliced scallions, cilantro, soy sauce, ginger, sesame oil, and eggs. Work the mixture together with your hands until fully combined.',
        'Arrange your dumpling-making station: Clear a large space on the counter. Set a small bowl of water, the bowl of filling, and a parchment-lined baking sheet nearby. Open the package of dumpling wrappers and arrange a few on the work space in front of you.',
        'Place 1 scant tablespoon of filling on each dumpling wrapper: It does not look like much filling, but using any more gets messy and makes the dumplings hard to pleat closed! Once you get the hang of pleating the dumplings, you can try adding a bit more.',
        'Dampen the edge of the wrapper with water: Dip your finger in the bowl of water and run it around the edge of the dumpling. This will help it to seal closed.',
        'Fold the dumpling in half: Lift the dumpling from the work surface and fold it in half. Press the top closed.',
        'Make a pleat in either side: Use your opposite thumbs to fold a tiny pleat on either side of the dumpling, then press firmly to seal the dumpling closed. You may need to dab a little water under the pleat to make it stick closed.',
        'Repeat with all the wrappers and filling: Continue filling and pleating the rest of the wrappers using the remaining filling — this is where having a few extra hands comes in handy! As you finish each dumpling, line it up on the parchment-lined baking sheet.',
        'Cook or freeze the dumplings: You can cook the dumplings immediately, or freeze them on the baking sheet. Once frozen solid, gather them into a freezer container and keep frozen for up to 3 months.',
        'Sear the dumplings in a skillet: Film a skillet with about a tablespoon of oil and warm over high heat. When the oil is shimmering, arrange the dumplings in the pan as close as they will fit without actually touching. Cook until the bottoms have turned brown and golden.',
        'Add 3 tablespoons of water to the pan: Pour 3 tablespoons of water in the pan — the water will immediately sizzle and begin to steam.',
        'Cover the pan and lower the heat: Cover the pan immediately and reduce the heat to low. (If your skillet does not have a lid, cover with a baking sheet.)',
        'Cook the dumplings for 3 to 5 minutes if fresh, or 6 to 8 minutes if frozen: When done, the wrappers will appear translucent and noodle-like; the filling will be opaque and warmed through (you can cut one open to check).',
        'Transfer to a plate and serve: Transfer the cooked dumplings to a plate and serve with soy sauce or other dipping sauce.',
    ],
};
    

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

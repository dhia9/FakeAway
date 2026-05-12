// ========================================
// DONNÉES DES RECETTES
// ========================================
// "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
//             "https://images.unsplash.com/photo-1550547990-25967503ec9f?w=400&h=400&fit=crop",
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop"
const recipesData = [
    {
    id: 1,
    name: "Classic Homemade Burger",
    description: "A simple homemade burger inspired by iconic fast-food recipes with juicy beef, melted cheddar, fresh vegetables and caramelised onions.",
    image: "./src/burger/burg6.jpeg",
    
    images: ["./src/burger/burg5.jpeg"  ,
            "./src/burger/burg3.jpeg",
            "./src/burger/burg2.jpeg",
            "./src/burger/burg4.jpeg",
            "./src/burger/burg7.jpeg",
    ],

    time: "30 min",
    difficulty: "Easy",
    servings: "4 burgers",

    description_long: "Discover how to recreate a classic fast-food style burger at home using simple ingredients and easy techniques. This homemade burger combines juicy beef patties, melted cheddar cheese, fresh vegetables and delicious caramelised onions for a comforting and satisfying meal. The recipe is highly customizable, allowing everyone to add their favourite toppings such as avocado or extra patties for a bigger burger experience.",

    ingredients: [
        "4 burger buns",
        "4 beef patties",
        "200g cheddar cheese",
        "4 lettuce leaves",
        "1 tomato, sliced",
        "1 onion, sliced",
        "3 tablespoons mayonnaise",
        "2 tablespoons ketchup",
        "1 tablespoon mustard",
        "1 teaspoon mixed spices",
        "2 tablespoons sugar",
        "2 tablespoons water",
        "Salt and pepper to taste",
        "Avocado slices (optional)",
        "Extra beef patties for double or triple burgers (optional)"
    ],

    steps: [
        "Prepare all the ingredients by washing the lettuce and tomato, slicing the onions and cutting the cheddar cheese into slices.",
        "Heat a frying pan over medium-high heat and cook the beef patties until they are well browned on both sides.",
        "While the meat cooks, prepare the burger sauce by mixing mayonnaise, ketchup, mustard and spices in a small bowl.",
        "In another pan, cook the sliced onions with water and sugar until they become soft and caramelised.",
        "Remove the cooked beef patties from the pan and lightly toast the burger buns to give them extra flavour and texture.",
        "Place the cheddar slices on top of the hot beef patties and allow the cheese to melt gently.",
        "Spread the burger sauce on the bottom bun.",
        "Add lettuce and tomato slices on top of the sauce.",
        "Place the beef patty with melted cheddar cheese onto the vegetables.",
        "Top with caramelised onions and any additional toppings such as avocado.",
        "Close the burger with the top bun and serve immediately while hot."
    ],

    tips: [
        "Toast the buns for a better texture and richer flavour.",
        "Use freshly cooked beef patties for the juiciest burgers.",
        "Let the cheddar melt naturally on the hot meat for the best result.",
        "Caramelised onions add sweetness and depth to the burger.",
        "Add avocado for a creamier and more flavorful burger.",
        "Double or triple patties are perfect for very hungry people.",
        "You can customize the burger with extra toppings like pickles or bacon.",
        "Serve with fries or homemade potatoes for a complete fast-food experience."
    ],

    comparison: {
        smashBurger: {
            calories: "580 kcal",
            proteins: "30g",
            fats: "27g",
            cost: "~3.50€"
        },

        fastFood: {
            calories: "720 kcal",
            proteins: "26g",
            fats: "38g",
            cost: "~9.50€"
        }
        
        
    },final: ["Enjoy like us. This homemade burger became one of our favorite fake-away moments. We prepared everything together, from caramelising the onions to assembling the burgers, and the kitchen quickly turned into a fun and relaxed atmosphere. While cooking and eating, we shared stories, laughed a lot and got to know each other better. Everyone customized their own burger with different toppings, which made the experience even more personal and memorable. We even saved one burger for our beloved teacher, but sadly she refused our invitation."]
}

    ,
// "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1548365328-9f547f7c1f9c?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
   {
    id: 2,

    name: "Tuna Pizza Maison",

    description: "A crispy homemade tuna pizza with melted mozzarella, emmental cheese and a secret family layering technique for maximum flavor.",

    image: "./src/pizza/princip.png",

    images: [
        "./src/pizza/Image1.jpg",
        "./src/pizza/Image2.jpg",
        "./src/pizza/Image3.jpg",
        "./src/pizza/Image4.jpg",
        "./src/pizza/image5.jpeg",
        "./src/pizza/photo.jpeg"
    ],

    time: "1h 30 min",

    difficulty: "Easy",

    servings: "2 large pizzas (4-5 people)",

    description_long: "This homemade tuna pizza is the perfect budget-friendly fake-away recipe inspired by a family cooking tradition. Designed to be cheaper than takeout pizzas but even more satisfying, this recipe combines a crispy homemade dough, rich tomato sauce, melted mozzarella, creamy emmental cheese and flavorful tuna. The secret technique passed down from family is placing sliced emmental directly under the tomato sauce to create an ultra-gooey cheesy layer while preventing the crust from becoming soggy. Easy to customize and simple to prepare, this pizza is perfect for student meals, shared dinners, picnics or late-night cooking sessions with friends. Making it together also turns cooking into a fun and memorable social moment.",

    ingredients: [
        "7g baker’s yeast",
        "750g flour",
        "10g salt",
        "40g olive oil",
        "500ml warm water",
        "2 cans tomato concentrate",
        "2 red onions, thinly sliced",
        "2 packs mozzarella cheese",
        "150g emmental cheese",
        "1 can tuna in water or oil, drained",
        "Optional oregano",
        "Optional olives",
        "Optional chili flakes",
        "Optional black pepper",
        "Extra olive oil for crispiness"
    ],

    steps: [
        "Dissolve the baker’s yeast in warm water and let it sit for 5 minutes until frothy.",
        "In a large bowl, mix the flour, salt, olive oil and yeast mixture until a dough forms.",
        "Knead the dough for 5 to 10 minutes until smooth and elastic.",
        "Cover the dough with a damp towel and let it rise for around 1 hour in a warm place.",
        "Slice the red onions thinly and optionally cook them for a few minutes in a pan to soften them.",
        "Drain the tuna completely to avoid excess moisture on the pizza.",
        "Slice the mozzarella and emmental cheese.",
        "Preheat the oven to 220°C with the baking tray already inside for a crispier crust.",
        "Divide the dough into 2 balls and roll them into pizza shapes on a floured surface.",
        "Place the dough on parchment paper before assembling.",
        "Add the sliced emmental directly onto the dough as the secret cheesy base layer.",
        "Spread the tomato concentrate over the cheese layer.",
        "Add the onions and mozzarella on top.",
        "Drizzle a little olive oil for extra crispiness.",
        "Transfer the pizzas onto the hot baking tray and bake for 15 to 20 minutes.",
        "Add the tuna near the end of baking so it stays juicy and flavorful.",
        "Let the pizzas cool for 2 minutes before slicing and serving."
    ],

    tips: [
        "A slightly sticky dough creates a softer and better pizza texture.",
        "Preheating the baking tray helps create an extra crispy crust.",
        "Place emmental cheese under the tomato sauce for the famous family secret effect.",
        "Drain the tuna really well to prevent a watery pizza.",
        "Use both mozzarella and emmental for the perfect cheesy stretch.",
        "You can customize the pizza with leftover vegetables or sauces from your fridge.",
        "Add tuna at the end of cooking so it does not dry out.",
        "A vegetable peeler is a quick and easy way to create thin cheese slices.",
        "This pizza is perfect for sharing moments with friends or family."
    ],

    comparison: {
        smashBurger: {
            calories: "650 kcal",
            proteins: "26g",
            fats: "24g",
            cost: "~4.00€"
        },

        fastFood: {
            calories: "950 kcal",
            proteins: "22g",
            fats: "38g",
            cost: "~12.00€"
        }
    },
    final:["Enjoy like us This fake away was the first on our list, and it was a super shared moment, both in the baking and afterward while eating. We talked about our lives and took the time to get to know each other a bit because we didn’t."]
    
},
// "https://images.unsplash.com/photo-1604908176997-431221e2b47f?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1604908176997-431221e2b47f?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
    {
    id: 3,

    name: "Tasty Crousty Maison",

    description: "A trendy homemade French fast-food bowl made with crispy chicken, Thai rice, creamy sauce and crunchy toppings.",

    image: "./src/crousty/image.jpeg",

    images: [

    ],

    time: "20 min",

    difficulty: "Easy",

    servings: "2 bowls",

    description_long: "The Tasty Crousty is one of the most viral and trendy dishes in France right now. Originally created in Paris in 2024, it quickly became extremely popular thanks to social media and fast-food culture. The recipe is loved because it combines simple ingredients that everyone already enjoys: crispy chicken, fluffy Thai rice and a creamy flavorful sauce. This homemade version is quick, affordable and very easy to prepare, making it perfect for students, quick dinners or comfort food evenings. The combination of crunchy fried onions, warm rice and crispy chicken creates a comforting and satisfying bowl inspired by modern French street food.",

    ingredients: [
        "120g Thai rice",
        "23cl water",
        "2 breaded chicken fillets",
        "3 tablespoons fresh cream",
        "2 tablespoons mayonnaise",
        "2 tablespoons sweet and sour sauce",
        "1 teaspoon soy sauce",
        "1 pinch smoked paprika",
        "Fried onions",
        "Fresh chives",
        "Fresh parsley",
        "Salt and pepper",
        "Optional spicy sauce",
        "Optional extra chicken",
        "Optional sesame seeds"
    ],

    steps: [
        "Rinse the Thai rice under cold water before cooking.",
        "Pour the rice and water into a saucepan.",
        "Cook over medium heat for around 10 minutes until the rice becomes soft and the water is absorbed.",
        "Meanwhile, heat the breaded chicken fillets in the oven, air fryer or pan for about 8 minutes.",
        "Turn the chicken halfway through cooking to keep it crispy on both sides.",
        "Prepare the creamy sauce by mixing fresh cream, mayonnaise, sweet and sour sauce, soy sauce and smoked paprika.",
        "Cut the cooked crispy chicken into small bite-sized pieces.",
        "Place the hot rice into serving bowls.",
        "Add a generous layer of sauce over the rice.",
        "Top with the crispy chicken pieces.",
        "Finish with fried onions and freshly chopped chives or parsley for extra flavour and crunch.",
        "Serve immediately while everything is still warm and crispy."
    ],

    tips: [
        "Use an air fryer for extra crispy chicken with less oil.",
        "Thai rice works perfectly because it stays fluffy and slightly sticky.",
        "Fried onions are essential for the crunchy texture.",
        "You can add spicy sauce for a stronger flavour.",
        "Fresh herbs like chives or parsley make the bowl taste fresher.",
        "Add extra chicken pieces if you want a more filling meal.",
        "The sauce can be prepared in advance and stored in the fridge.",
        "This recipe is best enjoyed immediately while the chicken is still crispy."
    ],

    comparison: {
        smashBurger: {
            calories: "610 kcal",
            proteins: "27g",
            fats: "24g",
            cost: "~3.20€"
        },

        fastFood: {
            calories: "1000 kcal",
            proteins: "21g",
            fats: "42g",
            cost: "~11.50€"
        },
        
    },final: ["Enjoy like us. This Tasty Crousty was one of our most trendy homemade fake-away moments. Inspired by the viral French street-food wave, we all prepared our bowls together and discovered how simple ingredients like crispy chicken, Thai rice and creamy sauce can become something really addictive. The kitchen was full of energy while we cooked, plated and mixed our own bowls with different toppings."]
},
// "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop"
    {
    id: 4,

    name: "French Tacos Maison",

    description: "A cheesy homemade French tacos packed with crispy chicken, fries and creamy sauce, perfect for a comforting fake-away night.",

    image: "./src/tacos/imagepr.jpg",

    images: [
        "./src/tacos/im.jpg",
        "./src/tacos/im2.jpg",
        "./src/tacos/im3.jpg",
        "./src/tacos/im4.jpg",
        "./src/tacos/im5.jpg",
        "./src/tacos/imag1.jpg"
    ],

    time: "35 min",

    difficulty: "Easy",

    servings: "2 tacos",

    description_long: "The French tacos is one of the most iconic modern fast-food dishes in France. Unlike Mexican tacos, this version is made with a large tortilla filled with meat, fries, creamy cheese sauce and different toppings before being folded and grilled. This homemade recipe keeps all the comforting flavors of the original while allowing you to control the ingredients, reduce oil, and customize everything to your taste. Crispy outside, melting inside, and incredibly satisfying.",

    ingredients: [
        "2 large tortilla wraps",
        "2 breaded chicken fillets",
        "250g frozen fries",
        "150ml liquid cream",
        "100g grated cheddar cheese",
        "2 tablespoons mayonnaise",
        "1 tablespoon ketchup",
        "1 teaspoon smoked paprika",
        "1 teaspoon garlic powder",
        "1 tablespoon butter",
        "Salt and pepper",
        "Optional spicy sauce",
        "Optional caramelized onions",
        "Optional lettuce"
    ],

    steps: [
        "Preheat the oven or air fryer for the fries and chicken.",
        "Cook the fries until golden and crispy.",
        "Cook the breaded chicken fillets for about 8 to 10 minutes and cut them into strips.",
        "Prepare the cheese sauce by heating the cream in a saucepan.",
        "Add the grated cheddar and stir continuously until melted.",
        "Season the sauce with paprika, garlic powder, salt and pepper.",
        "Lay the tortilla wraps flat on a clean surface.",
        "Spread mayonnaise and ketchup in the center of each tortilla.",
        "Add fries, chicken strips and a generous amount of cheese sauce.",
        "Add optional toppings like onions or spicy sauce.",
        "Fold the tortilla tightly into a rectangular tacos shape.",
        "Melt butter in a pan and grill the tacos for 2 to 3 minutes on each side.",
        "Cook until the outside becomes crispy and golden.",
        "Slice in half and serve immediately while hot."
    ],

    tips: [
        "Do not overfill the tortilla or it will tear while folding.",
        "Warm the tortilla slightly before folding for more flexibility.",
        "Air fryer fries make the tacos lighter and crispier.",
        "The cheese sauce should stay creamy, not too thick.",
        "Adding spicy sauce gives a real fast-food style flavor.",
        "Press the tacos slightly while grilling for a crispy exterior.",
        "You can swap chicken for steak, tenders or vegetarian alternatives.",
        "Serve immediately because the fries soften over time."
    ],

    comparison: {
        smashBurger: {
            calories: "780 kcal",
            proteins: "32g",
            fats: "34g",
            cost: "~3.80€"
        },

        fastFood: {
            calories: "1250 kcal",
            proteins: "28g",
            fats: "58g",
            cost: "~12.90€"
        }
    },
    final: ["Enjoy like us. This French tacos became one of our ultimate fake-away nights, where we all built our own versions loaded with crispy chicken, fries and creamy cheese sauce. It was messy, fun and super social, with everyone customizing their tacos and sharing a real moment together in the kitchen. In the end, it turned into a comforting group memory we won’t forget ."]

},
// "https://images.unsplash.com/photo-1568571780765-9276ac8b75a5?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1568571780765-9276ac8b75a5?w=400&h=400&fit=crop",
//             "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop",
//             "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400&h=400&fit=crop"
    {
    id: 5,

    name: "Apple Flan",

    description: "A super cheap homemade apple flan inspired by a family recipe, easy to prepare and perfect as a comforting dessert or filling snack.",

    image: "./src/flan/princip.png",

    images: [
        "./src/flan/Image2.jpg",
        "./src/flan/Image3.jpg",
    ],

    time: "65 min",

    difficulty: "Super Easy",

    servings: "6 servings",

    description_long: "This homemade apple flan is the perfect alternative to expensive industrial snacks and vending machine desserts. Inspired by a traditional family recipe, it combines simple ingredients to create a soft, creamy and comforting dessert packed with tender apple pieces. Cheap, filling and incredibly easy to make, this flan is ideal for students, busy people or anyone looking for a homemade dessert without spending much money. It can be enjoyed warm, cold, alone or even with ice cream for a more indulgent version. The recipe also helps reduce food waste by using slightly soft apples or leftover milk. Despite its simplicity, this dessert creates comforting memories and shared moments around homemade cooking.",

    ingredients: [
        "3 eggs",
        "3 tablespoons sugar",
        "5 tablespoons flour",
        "500ml milk",
        "1 tablespoon rum (optional)",
        "5 apples",
        "Butter or oil for greasing the dish",
        "Optional cinnamon",
        "Optional lemon juice",
        "Optional vanilla extract",
        "Optional ice cream for serving"
    ],

    steps: [
        "Preheat the oven to 180°C.",
        "Peel the apples, remove the cores and cut them into small 1 to 2 cm cubes.",
        "Set the apple cubes aside while preparing the batter.",
        "In a large bowl, whisk the eggs and sugar together until the mixture becomes lighter and slightly frothy.",
        "Gradually add the flour while whisking continuously to avoid lumps.",
        "Slowly pour in the milk while mixing to create a smooth and liquid batter.",
        "Add the rum if desired and mix again.",
        "Grease a large flat baking dish to prevent sticking.",
        "Spread the apple cubes evenly across the bottom of the dish.",
        "Pour the batter carefully over the apples.",
        "Bake for 40 to 45 minutes until the flan becomes golden brown and set.",
        "Check the cooking by inserting a knife into the center — it should come out clean.",
        "Allow the flan to cool slightly before slicing.",
        "Serve warm or cold depending on your preference."
    ],

    tips: [
        "Use a flat baking dish so the flan cooks evenly and faster.",
        "Do not make the flan thicker than 2 cm or the center may stay uncooked.",
        "Sift the flour if you want an extra smooth texture.",
        "Slightly soft apples work perfectly and help reduce food waste.",
        "If you do not use rum, cinnamon or lemon juice can add extra flavour.",
        "The knife test is the easiest way to check if the flan is fully cooked.",
        "This dessert tastes delicious both warm and cold.",
        "Serve with ice cream for a more indulgent version.",
        "Avoid deep dishes — the batter may collapse or cook unevenly."
    ],

    comparison: {
        smashBurger: {
            calories: "210 kcal",
            proteins: "6g",
            fats: "5g",
            cost: "~0.50€"
        },

        fastFood: {
            calories: "420 kcal",
            proteins: "3g",
            fats: "18g",
            cost: "~2.50€"
        }
    }
    ,final: ["Enjoy like us. This apple flan became one of our simplest but most comforting fake-away moments, made with cheap ingredients and lots of homemade care. We prepared it together, slicing apples and mixing the batter while talking and sharing a relaxed time in the kitchen. It showed us how something so easy can still bring real warmth and satisfaction when shared. We enjoyed it warm and cold, each of us tasting it in our own way, turning a basic dessert into a small but memorable group experience. "]},
//     "https://images.unsplash.com/photo-1568571780765-9276ac8b75a5?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1568571780765-9276ac8b75a5?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400&h=400&fit=crop"
    {
    id: 6,

    name: "Apple Flan",

    description: "An attempted homemade apple flan inspired by a family recipe. The result shows a rustic, slightly over-baked but flavorful dessert that highlights the learning process behind baking.",

    image: "./src/flan/cram.png",

    images: [
        
    ],

    time: "65 min",

    difficulty: "Super Easy",

    servings: "6 servings",

    description_long: "This Apple Flan was an attempted homemade version of a traditional family recipe. The result shows a rustic texture with slightly over-browned edges, highlighting common challenges in baking such as uneven heat distribution and timing control. Despite its imperfections, the flan remains edible, comforting, and full of homemade character. The key learning point from this attempt is the importance of controlling baking thickness and ensuring even apple distribution for consistent cooking.",

    ingredients: [
        "3 eggs",
        "3 tablespoons sugar",
        "5 tablespoons flour",
        "500ml milk",
        "1 tablespoon rum (optional)",
        "5 apples",
        "Butter or oil for greasing the dish",
        "Optional cinnamon",
        "Optional lemon juice",
        "Optional vanilla extract"
    ],

    steps: [
        "Preheat the oven to 180°C and ensure even heat distribution before starting.",
        "Peel and cut apples into small, uniform cubes to ensure even cooking.",
        "Whisk eggs and sugar until light and slightly foamy for better texture.",
        "Add flour gradually to avoid lumps and maintain a smooth base.",
        "Slowly incorporate milk while mixing continuously.",
        "Grease the baking dish properly to prevent sticking and burning edges.",
        "Distribute apple pieces evenly across the dish to avoid uneven baking zones.",
        "Pour the batter gently over the apples, ensuring full coverage.",
        "Focus on keeping the batter layer not too thick (maximum 2 cm) for proper cooking.",
        "Bake while monitoring color: avoid letting edges burn before center is cooked.",
        "Check doneness with a knife in the center; it should come out clean.",
        "Let the flan rest after baking to stabilize texture before cutting.",
        "Observe that uneven heat or thick layering can cause overcooked edges and undercooked center.",
        "Serve warm or cold depending on preference."
    ],

    tips: [
        "The most important focus is baking thickness: keep it thin for even cooking.",
        "Apple distribution must be uniform to avoid raw or overly wet zones.",
        "Monitor oven heat closely to prevent burnt edges like in this attempt.",
        "Use a wide, flat dish to improve cooking consistency.",
        "Do not rush baking time—center must fully set before removing.",
        "Whisk batter thoroughly to avoid flour lumps affecting texture.",
        "Letting the flan rest improves structure and taste.",
        "This recipe improves significantly with controlled heat and even layering."
    ],

    comparison: {
        smashBurger: {
            calories: "210 kcal",
            proteins: "6g",
            fats: "5g",
            cost: "~0.50€"
        },

        fastFood: {
            calories: "420 kcal",
            proteins: "3g",
            fats: "18g",
            cost: "~2.50€"
        }
    },
    final: ["Enjoy like us. This apple flan was an attempted homemade fake-away where things didn’t go perfectly, but that was part of the experience. We cooked it together, learning how small mistakes like uneven baking and timing can change the result completely.  ."]
}
];

// ========================================
// INITIALISATION
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    renderDishes();
    setupModalClose();
});

// ========================================
// FONCTION : AFFICHER LES PLATS
// ========================================

function renderDishes() {
    const dishesGrid = document.getElementById('dishesGrid');

    recipesData.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="dish-image">
            <div class="dish-content">
                <h3 class="dish-name">${recipe.name}</h3>
                <p class="dish-description">${recipe.description}</p>
                <div class="dish-tags">
                    <span class="dish-tag">⏱️ ${recipe.time}</span>
                    <span class="dish-tag">👨‍🍳 ${recipe.difficulty}</span>
                </div>
            </div>
            
        `;

        card.addEventListener('click', () => openRecipeModal(recipe.id));
        dishesGrid.appendChild(card);
    });
}

// ========================================
// FONCTION : OUVRIR LA MODAL
// ========================================

function openRecipeModal(recipeId) {
    const recipe = recipesData.find(r => r.id === recipeId);

    if (!recipe) return;

    // Remplir les infos principales
    document.getElementById('modalTitle').textContent = recipe.name;
    document.getElementById('modalDescription').textContent = recipe.description_long;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalServings').textContent = recipe.servings;
    document.getElementById('modalDescriptionn').textContent = recipe.final;

    // Galerie
    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = '';
    recipe.images.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = `${recipe.name} - Photo ${index + 1}`;
        imgElement.className = 'gallery-thumb';
        imgElement.addEventListener('click', () => {
            document.getElementById('modalImage').src = img;
        });
        galleryContainer.appendChild(imgElement);
    });

    // Ingrédients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Étapes
    const stepsList = document.getElementById('modalSteps');
    stepsList.innerHTML = '';
    recipe.steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step;
        li.setAttribute('data-step', index + 1);
        stepsList.appendChild(li);
    });

    // Tips
    const tipsList = document.getElementById('modalTips');
    tipsList.innerHTML = '';
    recipe.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Comparaison
    const comparisonGrid = document.getElementById('comparisonGrid');
    const comp = recipe.comparison;

    comparisonGrid.innerHTML = `
    
        <div class="comparison-item">
            <h4>🏠 Fait Maison</h4>
            <div class="comparison-stat">
                <span class="comparison-label">Calories</span>
                <span class="comparison-value">${comp.smashBurger.calories}</span>
            </div>
            <div class="comparison-stat">
                <span class="comparison-label">Proteins</span>
                <span class="comparison-value">${comp.smashBurger.proteins}</span>
            </div>
            <div class="comparison-stat">
                <span class="comparison-label">Fats</span>
                <span class="comparison-value">${comp.smashBurger.fats}</span>
            </div>
            <div class="comparison-stat">
                <span class="comparison-label">Cost</span>
                <span class="comparison-value">${comp.smashBurger.cost}</span>
            </div>
        </div>
        
        <div class="comparison-item">
            <h4>🍟 Fast Food</h4>
            <div class="comparison-stat">
                <span class="comparison-label">Calories</span>
                <span class="comparison-value">${comp.fastFood.calories}</span>
            </div>
            <div class="comparison-stat">
                <span class="comparison-label">Proteins</span>
                <span class="comparison-value">${comp.fastFood.proteins}</span>
            </div>
            <div class="comparison-stat">
                <span class="comparison-label">Fats</span>
                <span class="comparison-value">${comp.fastFood.fats}</span>
            </div>
            <div class="comparison-stat">
                <span class="comparison-label">Cost</span>
                <span class="comparison-value">${comp.fastFood.cost}</span>
            </div>
        </div>
        
    `;

    // Afficher la modal
    const modal = document.getElementById('recipeModal');
    modal.classList.add('active');

    // Scroll en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// FONCTION : FERMER LA MODAL
// ========================================

function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('active');
}

// ========================================
// FONCTION : SETUP FERMETURE MODAL
// ========================================

function setupModalClose() {
    const modal = document.getElementById('recipeModal');

    // Fermer en cliquant en dehors
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeRecipeModal();
        }
    });

    // Fermer avec la touche Échap
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeRecipeModal();
        }
    });
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe tous les éléments avec la classe reveal si elle existe
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.info-card, .rule').forEach(el => {
        observer.observe(el);
    });
});

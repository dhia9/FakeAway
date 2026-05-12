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
            "./src/burger/burg6.jpeg",
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
    }
}
    ,
// "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1548365328-9f547f7c1f9c?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
   {
    id: 2,

    name: "Tuna Pizza Maison",

    description: "A crispy homemade tuna pizza with melted cheese, tomato base and a secret family technique for extra flavor.",

    image: "./src/pizza/princip.png",

    images: [
        "./src/pizza/Image1.jpg",
        "./src/pizza/Image2.jpg",
        "./src/pizza/Image3.jpg",
        "./src/pizza/Image4.jpg",
        "./src/pizza/image5.jpeg",
        "./src/pizza/photo.jpeg"
        
    ],

    time: "1h 40 min",

    difficulty: "Easy",

    servings: "2 large pizzas (4-5 people)",

    description_long: "This homemade tuna pizza is a budget-friendly fake-away inspired by a family recipe. It features a soft homemade dough, a rich tomato base, melted cheese layered for extra creaminess, and well-drained tuna added at the end for maximum flavor. The secret trick is placing cheese under the sauce to create a gooey layer and prevent a soggy crust. It’s crispy, cheesy, customizable, and perfect for sharing with friends or family.",

    ingredients: [
        "7g baker’s yeast",
        "750g flour",
        "10g salt",
        "40g olive oil",
        "500ml warm water",
        "2 cans tomato concentrate",
        "2 red onions",
        "2 packs mozzarella",
        "150g emmental cheese",
        "1 can tuna (drained)",
        "Optional oregano",
        "Optional olives",
        "Optional chili flakes",
        "Optional black pepper"
    ],

    steps: [
        "Activate yeast in warm water for 5 minutes.",
        "Mix flour, salt, olive oil and yeast mixture.",
        "Knead the dough until smooth and elastic.",
        "Let it rest for 1 hour covered.",
        "Slice onions and prepare toppings.",
        "Drain tuna completely.",
        "Slice mozzarella and emmental.",
        "Preheat oven to 220°C with tray inside.",
        "Roll dough into 2 pizza bases.",
        "Add emmental first, then tomato sauce (secret layer).",
        "Add onions and mozzarella.",
        "Bake for 15-20 minutes until golden.",
        "Add tuna near the end of baking.",
        "Let rest before slicing."
    ],

    tips: [
        "Preheat the baking tray for a crispy crust.",
        "Place cheese under sauce for better melt and texture.",
        "Drain tuna well to avoid sogginess.",
        "Mix mozzarella and emmental for better stretch.",
        "Sticky dough = better texture.",
        "Add tuna at the end so it stays juicy.",
        "Customize toppings based on what you have.",
        "Let pizza rest before cutting."
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
    }
},
// "https://images.unsplash.com/photo-1604908176997-431221e2b47f?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1604908176997-431221e2b47f?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
    {
    id: 3,

    name: "Tasty Crousty Maison",

    description: "A trendy homemade French street-food bowl with crispy chicken, Thai rice, creamy sauce and crunchy toppings.",

    image:"./src/crousty/image.jpeg",

    images: ["./src/crousty/image.jpeg"
    ],

    time: "25 min",

    difficulty: "Easy",

    servings: "2 bowls",

    description_long: "The Tasty Crousty is one of the trendiest fast-food inspired dishes in France right now. Originally popularized in Paris in 2024, it quickly became viral thanks to its comforting mix of crispy chicken, creamy sauce, fluffy rice, and crunchy toppings. This homemade version keeps the spirit of the original while being cheaper, customizable, and fun to cook. Even if nothing replaces the late-night outdoor experience with friends, making it yourself is part of the fun and reconnects you with cooking simple meals at home.",

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
        "Fresh chives or parsley",
        "Salt and pepper",
        "Optional extra chicken pieces",
        "Optional spicy sauce",
        "Optional sesame seeds"
    ],

    steps: [
        "Rinse the Thai rice under cold water.",
        "Pour the rice and water into a saucepan.",
        "Cook over medium heat for around 10 minutes until the water is absorbed.",
        "Meanwhile, heat the breaded chicken in an oven, air fryer, or pan for about 8 minutes.",
        "Turn the chicken halfway through cooking for an even crispy texture.",
        "Prepare the sauce by mixing fresh cream, mayonnaise, sweet and sour sauce, soy sauce, and smoked paprika.",
        "Cut the crispy chicken into bite-sized pieces.",
        "Place the cooked rice into serving bowls.",
        "Add a generous amount of sauce over the rice.",
        "Top with the chicken pieces.",
        "Finish with fried onions and freshly chopped chives or parsley.",
        "Serve immediately while the chicken is still crispy."
    ],

    tips: [
        "Add more chicken than rice for an even better balance.",
        "Use an air fryer for extra crispy chicken with less oil.",
        "Fresh herbs make the dish taste fresher and less heavy.",
        "You can replace sweet and sour sauce with spicy mayo for a stronger flavor.",
        "Fried onions add the essential crunchy texture.",
        "Thai rice works best because it stays fluffy and slightly sticky.",
        "This dish is best enjoyed hot right after preparation.",
        "You can meal-prep the sauce in advance and keep it refrigerated."
    ],

    comparison: {
        smashBurger: {
            calories: "610 kcal",
            proteins: "27g",
            fats: "24g",
            cost: "~3.20€"
        },

        fastFood: {
            calories: "890 kcal",
            proteins: "21g",
            fats: "42g",
            cost: "~11.50€"
        }
    }
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
    }
},
// "https://images.unsplash.com/photo-1568571780765-9276ac8b75a5?w=500&h=500&fit=crop"
// "https://images.unsplash.com/photo-1568571780765-9276ac8b75a5?w=400&h=400&fit=crop",
//             "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop",
//             "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400&h=400&fit=crop"
    {
        id: 5,

        name: "Apple Flan",

        description: "A super cheap homemade apple flan inspired by a family recipe, simple to make and perfect as a comforting dessert or snack.",

        image: "./src/flan/princip.png",

        images: [
             "./src/flan/Image2.jpg",
              "./src/flan/Image3.jpg"
        ],

        time: "65 min",

        difficulty: "Super Easy",

        servings: "6 servings",

        description_long: "This homemade apple flan is the perfect anti-junk-food recipe: cheap, comforting, natural, and incredibly easy to prepare. Inspired by a traditional family recipe, it only needs a few basic ingredients and delivers a soft, creamy texture packed with tender apple cubes. Perfect for students, busy people, or anyone who wants a satisfying homemade dessert without spending much money.",

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
            "Preheat the oven to 180°C.",
            "Peel the apples, remove the core, and cut them into 1-2 cm cubes.",
            "Set the apple cubes aside while preparing the batter.",
            "In a large bowl, whisk the eggs and sugar together until the mixture becomes lighter in color.",
            "Gradually add the flour while whisking continuously to avoid lumps.",
            "Slowly pour the milk into the bowl while mixing to create a smooth batter.",
            "Add the rum if desired and mix again.",
            "Grease a large flat baking dish.",
            "Spread the apple cubes evenly across the bottom of the dish.",
            "Pour the batter carefully over the apples.",
            "Bake for 40 to 45 minutes until golden brown.",
            "Check doneness using a knife inserted in the center — it should come out clean.",
            "Let the flan cool slightly before serving.",
            "Enjoy warm, cold, plain, or with ice cream."
        ],

        tips: [
            "Use a flat baking dish so the flan cooks evenly and faster.",
            "Do not make the batter thicker than 2 cm.",
            "Sift the flour for an extra smooth texture.",
            "Slightly soft apples work perfectly and help reduce food waste.",
            "If you do not use rum, add cinnamon or lemon juice for more flavor.",
            "The knife test is the best way to check if the flan is fully cooked.",
            "This dessert tastes amazing both warm and cold.",
            "Store leftovers in the fridge for up to 3 days."
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
    },
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
    }
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

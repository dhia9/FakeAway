// ============================================
// TEMPLATE DE RECETTE POUR FAKEAWAY
// ============================================
// Copiez cette structure et complétez-la
// pour ajouter une nouvelle recette à votre site.
// Insérez-la dans le tableau recipesData dans script.js

{
    // Identifiant unique (incrémentez le dernier ID)
    id: 5,
    
    // Nom du plat (affiché sur la card)
    name: "VOTRE_PLAT_ICI",
    
    // Description courte (50-80 caractères, pour la card)
    description: "Une courte description qui donne envie",
    
    // Image principale (URL Unsplash ou chemin local)
    // Format Unsplash : https://images.unsplash.com/photo-ID?w=500&h=500&fit=crop
    image: "https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop",
    
    // Galerie de photos (3+ images pour meilleur rendu)
    images: [
        "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-YYYYY?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-ZZZZZ?w=400&h=400&fit=crop"
    ],
    
    // Temps de préparation (ex: "30 min", "1h30")
    time: "XX min",
    
    // Niveau de difficulté (Facile / Intermédiaire / Difficile)
    difficulty: "Facile",
    
    // Nombre de portions (ex: "4 portions", "2 personnes")
    servings: "X portions",
    
    // Description longue (affichée dans la modal)
    description_long: "Une description détaillée et engageante du plat. Explicitez pourquoi c'est mieux que la version du fast food. " +
                      "Utilisez un ton enthousiaste pour encourager les gens à essayer. " +
                      "Mentionnez les points clés : plus sain, moins cher, meilleur goût.",
    
    // ========================================
    // INGRÉDIENTS
    // ========================================
    ingredients: [
        "Ingrédient 1 avec quantité",
        "Ingrédient 2 avec quantité",
        "Ingrédient 3 avec quantité",
        "Ingrédient 4 avec quantité",
        "Ingrédient 5 avec quantité",
        "Ingrédient 6 avec quantité",
        "Ingrédient 7 avec quantité",
        "Ingrédient 8 avec quantité"
    ],
    
    // ========================================
    // ÉTAPES DE PRÉPARATION
    // ========================================
    // Chaque étape doit être détaillée et pédagogique
    steps: [
        "Étape 1 : Description détaillée de ce qu'il faut faire et pourquoi.",
        "Étape 2 : Incluez les astuces et les pièges à éviter.",
        "Étape 3 : Soyez précis : températures, durées, techniques.",
        "Étape 4 : Guidez l'utilisateur comme un coach culinaire.",
        "Étape 5 : Description détaillée de ce qu'il faut faire et pourquoi.",
        "Étape 6 : Soyez progressif, une étape à la fois.",
        "Étape 7 : Description détaillée de ce qu'il faut faire et pourquoi.",
        "Étape 8 : Terminez avec la présentation et le service."
    ],
    
    // ========================================
    // CONSEILS & ASTUCES
    // ========================================
    // Des tips pour réussir et améliorer la recette
    tips: [
        "Conseil 1 : Un conseil pratique et utile",
        "Conseil 2 : Une astuce de cuisinier professionnel",
        "Conseil 3 : Comment varier la recette",
        "Conseil 4 : Un dépannage courant et sa solution",
        "Conseil 5 : Comment conserver ou préparer à l'avance",
        "Conseil 6 : Un secret pour encore mieux réussir"
    ],
    
    // ========================================
    // COMPARAISON MAISON vs FAST FOOD
    // ========================================
    // Cette comparaison montre les avantages de la version maison
    comparison: {
        // "smashBurger" = votre version maison
        smashBurger: {
            calories: "XXX kcal",
            proteines: "XXg",
            matieres_grasses: "XXg",
            cout: "~X.XX€"
        },
        // "fastFood" = version restaurant/chaîne
        fastFood: {
            calories: "XXX kcal",
            proteines: "XXg",
            matieres_grasses: "XXg",
            cout: "~X.XX€"
        }
    }
}

// ============================================
// GUIDE DE REMPLISSAGE DÉTAILLÉ
// ============================================

/*
📝 CONSEILS POUR CHAQUE CHAMP :

📷 IMAGES (image & images)
   - Utilisez Unsplash.com pour des images libres
   - Recherchez votre plat
   - Copiez l'URL
   - Format correct : ...photo-XXXXX?w=500&h=500&fit=crop

⏱️ TIME (Temps)
   - 30 min
   - 1h
   - 1h30
   - 45 min
   - Soyez réaliste, incluez la préparation et la cuisson

👨‍🍳 DIFFICULTY (Difficulté)
   - Facile : pour les débutants, peu d'étapes
   - Intermédiaire : technique, demande attention
   - Difficile : requiert expérience, timing précis

🍴 SERVINGS (Portions)
   - 4 portions
   - 2-3 personnes
   - 6 nuggets
   - 1 gâteau

📝 DESCRIPTION_LONG
   - Commencez par pourquoi cette recette
   - Mentionnez les avantages (santé, prix, goût)
   - Finissez sur l'enthousiasme
   - 150-200 caractères idéal

✅ INGRÉDIENTS
   - Incluez les quantités précises
   - Unités claires (g, ml, cuillère, etc)
   - Ordre d'utilisation logique
   - 7-12 ingrédients idéal

👨‍🍳 STEPS (Étapes)
   - Commencez par "Préparez..."
   - Une action par étape
   - Soyez très précis
   - Incluez les températures (°C)
   - Mentionnez les durées (min/heures)
   - Expliquez le "pourquoi" si important
   - 8-12 étapes idéal

💡 TIPS (Conseils)
   - Astuces de pro
   - Comment varier
   - Dépannages communs
   - Conservation
   - Préparation à l'avance
   - Substitutions possibles
   - 5-7 tips idéal

📊 COMPARISON
   - Recherchez des données réelles
   - Les valeurs maison doivent être cohérentes
   - Les coûts fast food sont environ 3-4x plus chers
   - Calories maison : 10-20% moins élevé généralement
   - Lipides maison : 20-30% moins

*/

// ============================================
// EXEMPLES DE PLATS À AJOUTER
// ============================================

/*
🍕 Pizza Margarita Maison
🌮 Tacos Al Pastor
🥤 Milkshake Vanille
🍟 Frites Maison
🌭 Hot Dogs Gourmands
🥙 Kebab Poulet
🍗 Poulet Rôti
🥪 Sandwich Club
🥟 Dim Sum Maison
🍕 Calzone Ricotta
*/

// ============================================
// COMMENT COPIER CETTE TEMPLATE
// ============================================

/*
1. Ouvrez script.js
2. Trouvez : const recipesData = [
3. Allez à la fin du dernier objet recette
4. Ajoutez une virgule :   },
5. Copiez-collez cette template
6. Complétez tous les champs
7. Sauvegardez
8. Rafraîchissez le navigateur
9. Votre recette apparaît ! 🎉
*/

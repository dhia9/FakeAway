# 🍔 FakeAway - 7 Day Challenge
## Site Web Moderne et Responsive

---

## 📋 Structure des Fichiers

```
fakeaway/
├── index.html          # Page HTML principale
├── styles.css          # Feuille de styles CSS
├── script.js           # Logique JavaScript
└── README.md           # Cette documentation
```

### Architecture Simple et Extensible
Tous les fichiers sont dans un seul dossier pour faciliter le déploiement et la maintenance.

---

## 🚀 Fonctionnalités

### ✅ Page d'Accueil
- **Hero Section** : Image/emoji flottante avec titre accrocheur
- **Infos Section** : 4 cartes expliquant les avantages (Maison, Sain, Économique, Fun)
- **Galerie Interactive** : Cards cliquables pour découvrir les recettes
- **Challenge Section** : Présentation du 7 Day Challenge avec étapes
- **Navigation Sticky** : Menu qui reste visible en scrollant

### ✅ Modal de Recette
Clic sur une recette ouvre une modal élégante contenant :
- **Image principale** + galerie d'images cliquables
- **Infos rapides** : Temps, Difficulté, Portions
- **Ingrédients** : Liste complète avec checkboxes visuelles
- **Étapes de préparation** : Numérotées et détaillées
- **Conseils & astuces** : Tips importants pour réussir
- **Comparaison** : Maison vs Fast Food (calories, protéines, coût)

### ✅ Design Responsive
- Optimisé pour mobile, tablette, desktop
- Grille fluide qui s'adapte à tous les écrans
- Animations fluides et micro-interactions élégantes

### ✅ Interactions
- Hover effects élégants sur les cards
- Animations au chargement des sections
- Fermeture modal avec X, clic externe, ou touche Échap
- Scroll révélations fluides

---

## 🎨 Personnalisation

### 1️⃣ Modifier les Couleurs

Ouvrez `styles.css` et modifiez les variables CSS en haut du fichier :

```css
:root {
    --primary: #ff4757;           /* Rouge principal */
    --secondary: #ffa502;         /* Orange */
    --dark: #2f3542;              /* Gris foncé */
    --light: #f5f6fa;             /* Gris clair */
    /* ... autres couleurs ... */
}
```

### 2️⃣ Ajouter une Nouvelle Recette

Ouvrez `script.js` et trouvez le tableau `recipesData`. Ajoutez un nouvel objet à la fin :

```javascript
{
    id: 5,
    name: "Nom de votre plat",
    description: "Description courte (50 caractères)",
    image: "URL_IMAGE_PRINCIPALE",
    images: ["URL1", "URL2", "URL3"],  // Galerie
    time: "30 min",
    difficulty: "Facile",
    servings: "4 portions",
    description_long: "Description détaillée du plat...",
    
    ingredients: [
        "Ingrédient 1",
        "Ingrédient 2",
        // ...
    ],
    
    steps: [
        "Étape 1 : description détaillée...",
        "Étape 2 : ...",
        // ...
    ],
    
    tips: [
        "Conseil 1",
        "Conseil 2",
        // ...
    ],
    
    comparison: {
        smashBurger: {
            calories: "XXX kcal",
            proteines: "XXg",
            matieres_grasses: "XXg",
            cout: "~X.XX€"
        },
        fastFood: {
            calories: "XXX kcal",
            proteines: "XXg",
            matieres_grasses: "XXg",
            cout: "~X.XX€"
        }
    }
}
```

### 3️⃣ Modifier la Section Hero

Dans `index.html`, trouvez la section `.hero-content` :

```html
<h1 class="hero-title">FakeAway</h1>
<p class="hero-subtitle">Recréez vos plats favoris à la maison</p>
<p class="hero-description">
    Votre texte personnalisé ici...
</p>
```

### 4️⃣ Changer les Icônes Emoji

Les emojis sont faciles à remplacer partout :
- `🍔` → Burger
- `🍕` → Pizza
- `🌮` → Taco
- `🍟` → Frites
- etc.

---

## 📊 Données des Recettes Incluses

### 1. Smash Burger Maison
- ⏱️ 45 minutes | 👨‍🍳 Facile
- 4 burgers croustillants et juteux
- Comparaison : 520 kcal maison vs 640 kcal fast food

### 2. Crispy Chicken Wrap
- ⏱️ 50 minutes | 👨‍🍳 Intermédiaire
- Poulet croustillant dans des wraps moelleux
- Comparaison : 480 kcal maison vs 620 kcal fast food

### 3. Homemade Chicken Nuggets
- ⏱️ 35 minutes | 👨‍🍳 Facile
- 20-24 nuggets croustillants
- Comparaison : 280 kcal (6) maison vs 320 kcal fast food

### 4. Crème Glacée Artisanale
- ⏱️ 20 min + 4h congélation | 👨‍🍳 Facile
- Onctueuse et savoureuse, sans additifs
- Comparaison : 220 kcal maison vs 240 kcal fast food

---

## 🌐 URLs d'Images (Unsplash)

Pour ajouter vos propres images, utilisez :
- **Unsplash** : https://unsplash.com
- Format URL : `https://images.unsplash.com/photo-[ID]?w=500&h=500&fit=crop`

Exemples fournis dans le code :
- Burgers : photo-1568901346375
- Wraps : photo-1626082927389
- Nuggets : photo-1562547256
- Glace : photo-1563805042

---

## 💻 Déploiement

### Localement
1. Téléchargez les 3 fichiers dans un dossier
2. Ouvrez `index.html` dans votre navigateur

### En ligne (Gratuit)

#### Option 1 : GitHub Pages
1. Créez un repo GitHub
2. Poussez les fichiers
3. Allez dans Settings → Pages → Main branch
4. Votre site sera live à `https://username.github.io/fakeaway`

#### Option 2 : Netlify (Drag & Drop)
1. Allez sur https://netlify.com
2. Drag & drop le dossier
3. Site live instantanément

#### Option 3 : Vercel
1. Allez sur https://vercel.com
2. Connectez votre repo GitHub
3. Déploiement automatique

---

## 🎯 Optimisations Possibles

### Pour Aller Plus Loin

1. **Ajouter un Formulaire**
   - Partager vos recettes / résultats
   - S'inscrire au challenge

2. **Filtrage des Recettes**
   - Par difficulté
   - Par temps de préparation
   - Par type de cuisine

3. **Mode Sombre**
   - Ajouter toggle dans la navbar
   - Utiliser CSS variables pour switcher

4. **Service Worker**
   - Fonctionnement hors ligne
   - Cache des images

5. **Base de Données**
   - Stocker les recettes en base
   - Système de commentaires

6. **Système de Notation**
   - ⭐⭐⭐⭐⭐ pour chaque recette
   - Avis utilisateurs

---

## 🔧 Technologies Utilisées

- **HTML5** : Sémantique moderne
- **CSS3** : Variables, Grid, Flexbox, Animations
- **JavaScript Vanilla** : Zéro dépendance externe
- **Images** : Unsplash API (gratuit)
- **Fonts** : Segoe UI (système, ultra-rapide)

**Avantages**
- ✅ Pas de build process
- ✅ Zéro dépendances NPM
- ✅ Chargement ultra-rapide
- ✅ Compatible avec tous les navigateurs modernes
- ✅ Facilement hébergeable n'importe où

---

## 📱 Responsive Design

### Points de Rupture
- **Desktop** : 1200px+
- **Tablette** : 768px - 1199px
- **Mobile** : 480px - 767px
- **Petit mobile** : < 480px

Tous les layouts s'adaptent automatiquement ! 📱

---

## 🎨 Palette de Couleurs

| Variable | Couleur | Utilisation |
|----------|---------|------------|
| --primary | #ff4757 (Rouge) | CTA, titres, accents |
| --secondary | #ffa502 (Orange) | Accents secondaires |
| --success | #2ed573 (Vert) | Check marks |
| --dark | #2f3542 (Gris) | Texte principal |
| --light | #f5f6fa (Blanc) | Backgrounds clairs |

---

## 🚨 Dépannage

### La modal ne s'ouvre pas ?
- Vérifiez que `script.js` est bien chargé
- Consultez la console (F12) pour les erreurs

### Les images ne s'affichent pas ?
- Les URLs Unsplash nécessitent une connexion internet
- Téléchargez les images localement et utilisez des chemins relatifs

### Le site ne s'affiche pas bien sur mobile ?
- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Vérifiez le viewport meta tag dans l'HTML

---

## 📞 Support & Améliorations

### Si vous voulez ajouter :
1. **Autres recettes** : Suivez le format dans `script.js`
2. **Nouvelles sections** : Modifiez `index.html` et `styles.css`
3. **Nouvelles couleurs** : Changez les variables CSS
4. **Fonctionnalités JS** : Ajoutez du code à `script.js`

Tout est commenté et organisé pour votre compréhension !

---

## 📄 License

Ce projet est gratuit d'utilisation pour tous. ✨

---

## 🎉 Prêt à cuisiner ?

Lancez le site, découvrez les recettes, rejoignez le **7 Day Challenge** et recréez vos plats préférés à la maison !

**FakeAway** : Parce que le meilleur fast food, c'est celui que vous faites vous-même. 🍔👨‍🍳

# FakeAway
# 🚀 Guide Rapide - FakeAway

## Installation (2 minutes)

### 1️⃣ Télécharger les fichiers
```
fakeaway/
├── index.html          (Page HTML)
├── styles.css          (Styles)
├── script.js           (Logique)
└── README.md           (Documentation complète)
```

### 2️⃣ Ouvrir dans le navigateur
- Double-cliquez sur `index.html`
- Ou faites `clic droit → Ouvrir avec → Navigateur`

### 3️⃣ C'est prêt ! 🎉
Vous avez un site web moderne et responsive prêt à l'emploi.

---

## 📝 Ajouter une Recette (5 minutes)

1. Ouvrez `script.js` avec un éditeur de texte
2. Trouvez la liste `const recipesData = [`
3. Avant la dernière accolade `]`, ajoutez :

```javascript
,
{
    id: 5,
    name: "Pizza Maison",
    description: "La meilleure pizza que vous ayez jamais goûtée",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1589190882765-02e8944e0e33?w=400&h=400&fit=crop"
    ],
    time: "45 min",
    difficulty: "Intermédiaire",
    servings: "2 pizzas",
    description_long: "Préparez vos pizzas maison avec pâte croustillante et garnitures fraîches.",
    
    ingredients: [
        "500g de farine",
        "250ml d'eau",
        "10g de sel",
        "5g de levure instantanée",
        "300g de sauce tomate",
        "250g de mozzarella",
        "Toppings au choix"
    ],
    
    steps: [
        "Mélanger farine, eau, sel et levure",
        "Pétrir 10 minutes",
        "Laisser reposer 1h",
        "Diviser en 2, étaler",
        "Ajouter sauce et fromage",
        "Cuire 12 min à 250°C"
    ],
    
    tips: [
        "Utilisez de la mozzarella fraîche pour le meilleur résultat",
        "Laissez la pâte fermenter au moins 1h pour un goût meilleur",
        "Un four très chaud (250°C+) est essential"
    ],
    
    comparison: {
        smashBurger: {
            calories: "350 kcal (100g)",
            proteines: "12g",
            matieres_grasses: "8g",
            cout: "~2.00€"
        },
        fastFood: {
            calories: "400 kcal (100g)",
            proteines: "14g",
            matieres_grasses: "14g",
            cout: "~12.00€"
        }
    }
}
```

4. Sauvegardez le fichier
5. Rafraîchissez le navigateur (F5)
6. Votre nouvelle recette apparaît ! 🍕

---

## 🎨 Personnaliser les Couleurs

Ouvrez `styles.css`, trouvez les 5 premières lignes :

```css
:root {
    --primary: #ff4757;      /* ← Changez ici (rouge → bleu, etc) */
    --secondary: #ffa502;    /* ← Couleur secondaire */
}
```

**Couleurs faciles à utiliser** :
- Bleu : `#3498db`
- Vert : `#27ae60`
- Violet : `#8e44ad`
- Rose : `#e91e63`
- Turquoise : `#1abc9c`

---

## 📱 Tester sur Mobile

### Dans Chrome / Edge :
1. Appuyez sur `F12` (ou Clic droit → Inspecter)
2. Cliquez sur l'icône mobile en haut à gauche
3. Choisissez un téléphone (iPhone, Samsung, etc)
4. Vous voyez comment votre site s'affiche sur mobile !

---

## 🌐 Mettre en ligne (Gratuit)

### Option 1 : GitHub Pages (Recommandé)

```bash
# 1. Créez un compte https://github.com
# 2. Créez un nouveau repo nommé "fakeaway"
# 3. Uploadez vos 3 fichiers
# 4. Settings → Pages → Main branch
# Voilà ! Votre site est live à:
# https://yourname.github.io/fakeaway
```

### Option 2 : Netlify (Super facile)

```
1. Allez sur https://netlify.com
2. Cliquez "Drag and drop your folder"
3. Glissez-déposez votre dossier fakeaway
4. Votre site est en ligne en 10 secondes !
```

### Option 3 : Vercel (Automatique)

```
1. Allez sur https://vercel.com
2. Connectez votre compte GitHub
3. Sélectionnez le repo fakeaway
4. Cliquez "Deploy"
5. Terminé !
```

---

## 🎯 Checklist Avant de Partager

- [ ] Vérifier que toutes les images s'affichent
- [ ] Tester sur mobile (F12)
- [ ] Vérifier les liens de navigation
- [ ] Tester l'ouverture des modals
- [ ] Vérifier l'orthographe des recettes
- [ ] Tester sur 2-3 navigateurs différents

---

## 💡 Idées pour Améliorer

### Facile
- [ ] Ajouter plus de recettes
- [ ] Changer les couleurs
- [ ] Modifier les emojis
- [ ] Ajouter des images personnelles

### Moyen
- [ ] Ajouter un filtre par difficulté
- [ ] Ajouter une section "Mes favoris"
- [ ] Créer un mode sombre
- [ ] Ajouter des animations plus complexes

### Avancé
- [ ] Ajouter un système de notation ⭐
- [ ] Intégrer une base de données
- [ ] Créer un formulaire de contact
- [ ] Ajouter des commentaires utilisateurs

---

## 🆘 FAQ

**Q : Comment changer le titre du site ?**
R : Ouvrez `index.html`, cherchez `<title>` et modifiez le texte.

**Q : Puis-je utiliser mes propres images ?**
R : Oui ! Mettez les images dans le dossier et remplacez l'URL par :
```
image: "pizza.jpg"  (au lieu de l'URL complète)
```

**Q : Puis-je monétiser ce site ?**
R : Oui, c'est gratuit d'utilisation. Vous pouvez ajouter des annonces, des liens affiliés, vendre des e-books de recettes, etc.

**Q : Comment ajouter un formulaire ?**
R : Vous pouvez utiliser un service gratuit comme Formspree ou Netlify Forms.

**Q : Puis-je le transformer en app mobile ?**
R : Oui ! Avec des outils comme Capacitor ou React Native, mais c'est plus avancé.

---

## 📞 Besoin d'Aide ?

- **Erreurs JS** : F12 → Onglet Console (vérifie les erreurs rouges)
- **Images qui ne s'affichent pas** : Vérifiez l'URL complète
- **Modal qui s'ouvre pas** : Vérifiez la structure HTML
- **Design cassé** : Rafraîchissez le navigateur (Ctrl+Maj+R)

---

## 🎉 Vous êtes Prêt !

Vous avez maintenant un site web professionnel et moderne.
Amusez-vous à le personnaliser et à ajouter vos recettes ! 👨‍🍳

### Prochaines étapes :
1. Testez le site en version mobile
2. Ajoutez 2-3 de vos recettes préférées
3. Mettez-le en ligne (GitHub Pages / Netlify)
4. Partagez le lien avec vos amis !

**FakeAway : Où le fast food devient maison.** 🍔✨

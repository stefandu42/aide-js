# Création d’un frontend pour une pizzeria : Step -2 - Option B : frontend classique HTML / Bootstrap / JS
## How to ?
- Simple développement d'une page HTML (`index.html`) reprenant des images et du son. 
- La gestion du démarrage ou de la pause du son, lors d'un clic sur le header, est gérée dans un script externe au sein de `index.js`
- La mise en forme de la page est gérée ici via l'utilisation de la librairie Bootstrap et de ses dépendances. 
- Comment démarrer l'application Web ?
    - Installation de l'extension `Live Server` au sein de VS Code.
    - Exécution de  `index.hmtl` en faisant un clic droit sur ce fichier dans l'explorer de VS Code, puis `Open with Live Server`

## Bootstrap
- Ici, la librairie Bootstrap n'est pas inclue localement au projet mais est chargée via des CDN.
- Installation de l’extension `Bootstrap 5 & Font Awesome Snippets` dans VS Code
- Pour générer le corps de la page HTML Au sein de la page HTML (`index.hmtl`), on va utiliser l'extension `Bootstrap 5 & Font Awesome Snippets` en tappant le snippet `!b5-$`.
- On ajoute ensuite les classe Bootstrap désirées dans `index.hmtl`, comme par exemple `h-100` ou `text-center`
- Il est intéressant de noter comment le layout de la page fait toujour, au minimum, la hauteur complète du navigateur : utilisation des classes `vh-100 d-flex flex-column` au sein du `body`. Pour ensuite, dans le `main` utilisation de `h-100 flex-grow-1` pour permettre au `main` de remplir l'espace disponible. Ainsi, le footer donne l'effet d'être "sticky" en bas de la page.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
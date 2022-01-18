# Création d’un frontend pour une pizzeria : Step 1 : frontend à partir d’un boilerplate et ajout moderne d’une librairie pour afficher une horloge

## Introduction
- Le Step -2, Step -1 et Step 0 de ce tutoriel "Création d’un frontend pour une pizzeria" expliquent donc comment le boilerplate du cours a été créé. Celui-ci est donné ici : https://github.com/e-vinci/js-basic-boilerplate.git

## Démarrer votre application à partir du boilerplate du cours
- Clone du repo associé au boilerplate : `git clone https://github.com/e-vinci/js-basic-boilerplate.git` ou `git clone https://github.com/e-vinci/js-basic-boilerplate.git nom-de-votre-projet` pour créer votre projet nommé `nom-de-votre-projet`.
- Installation des dépendances : 
```shell
cd js-basic-boilerplate # (ou le nom donné au répertoire de votre projet)
npm i # (equivalent de npm install)
npm start
```
## How to ? Ajout d'un package
- Installation d'un package permettant d'avoir une horloge : `npm i customizable-analog-clock`
Pour plus d'info sur ce package : https://www.npmjs.com/package/customizable-analog-clock
- Modification du code pour l'utiliser, au sein de `/src/index.js` (ou tout autre module .js) : chargement de la librairie soit via import ou require du package (voir le code).
- Si quelqu'un souhaite installer et exécuter ce projet, la gestion des dépendances est très simple : copie du répertoire du projet (sans `node_modules`), `npm instal`, `npm start`. Il n'y a donc pas de librairies à gérer manuellement pour reprendre le projet d'un tiers.
## Conclusion
- La mise en place d'une configuration webpack n'est pas quelque chose d'évident et d'agréable. Dès lors, il est très commun d'utiliser un boilerplate, un template de projet permettant d'excécuter Webpack. Beaucoup de frameworks modernes utilisent Webpack, avec des configurations bien spécifiques. Par exemple, React utilise Webpack. Phaser fournit aussi une configuration de Webpack pour écrire du code moderne...
- L'utilisation de Webpack permet d'avoir un serveur de développement hyper performant, de développer avec beaucoup de confort, de faciliter la structure d'un projet, de gérer les dépendances, de transformer les assets de manière centralisée, ...

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
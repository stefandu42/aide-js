# Création d’une RESTful API pour une pizzeria : Step 2 – Gestion de la persistance des données dans un fichier .json

## How to ? Rendre persistant les pizzas
- Pour rendre persistant les pizzas ajoutées au menu, celles-ci sont écrites au sein d'un fichier JSON : `/data/pizzas.json`.
- L'opération de sérialisation des données est faite via la fonction `serialize` de `/routes/pizzas.js`
- L'opération de désérialisation des données (ou le parsing des données) est faite via la fonction `parse ` de `/routes/pizzas.js`
- Actuellement, le code n'est pas très bien structuré. Au prochain step, nous créerons des modules pour séparer la couche de présentation (le router) de la logique et des données.
## How to ? Redémarrer automatiquement votre application à chaque changement de fichier
- installer `nodemon` de manière globale : `npm i -g nodemon`
- lancer `nodemon` (au lieu du simple node) quand on tape `npm run debug` : ajout de la ligne `"debug": "nodemon /bin/www"`
dans `package.json` :
```json
"scripts": {
    "debug": "nodemon ./bin/www",
    "start": "node ./bin/www"
  },
```
- NB : Si l'installation globale n'est pas permise car vous n'avez pas les privilèges de le faire :   
    - soit installation au niveau du répertoire du projet : `npm i nodemon`
    - soit utilisation de `npx` au lieu de `npm` :
    dans `package.json` :
    ```json
    "scripts": {
    "debug": "npx nodemon ./bin/www",
    "start": "node ./bin/www"
    },
    ```

## How to ? Ne pas redémarrer quand un fichier de votre projet est mis à jour
- Il est possible d'indiquer les fichiers qui doivent être ignorés par nodemon via l'ajout dans `package.json` :
```json
"nodemonConfig": {
    "ignore": [
      "data/*"
    ]
  },
```
- Dans la configuration ajoutée ci-dessous, tous les fichiers qui seraient mis à jour dans le répertoire `/data` ne provoqueront pas de redémarrage du serveur nodemon lorsqu'il est lancé en mode debug (`npm run debug`)





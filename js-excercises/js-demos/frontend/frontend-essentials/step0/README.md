# Création d’un frontend pour une pizzeria : Step 0 : migration complète du frontend classique vers un frontend moderne utilisant Webpack

## Introduction
- Pour rappel, généralement, quand vous allez créer un frontend tournant sous Webpack, vous allez utiliser un boilerplate fournissant déjà un fichier `package.json` contenant tous les packages à installer, ainsi qu'une configuration de Webpack (`webpack.config.js`). 
- Ici, nous vous expliquons tout ce qui a été fait pour créer ces démos, afin de vous permettre de comprendre les mécanismes de Webpack.
## How to ? Configuration de Webpack

- Mise à jour du fichier `package.json` pour ajouter "start" : 
```json
 "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack serve"
  },
```
- Nous souhaitons utiliser Webpack afin de bénéficier de toutes ces fonctionnalités :
  - Installation & configuration d’un serveur de développement (devServer) :
    - proxy sous Webpack
    Servir `index.html` quand route n’amène à aucun fichier
    - Rendre le serveur accessible de l’extérieur (via son ou ses adresse(s) IP)
    - Ouvrir le browser par défaut à l’URL « localhost »  
- `/dist` enlevé de git, on veut que l'application générée lors du déploiement soit faite entièrement pour chaque génération sur base de tout ce qui se trouve dans `/src`
  - Création automatique d’un fichier `index.html` dans `/dist` sur base du template `/src/index.html`
  - Charger les images à l’aide de Webpack de `/src/img` vers `/dist` (éventuellement les transformer)
- Installation et configuration de la gestion du CSS : utilisation du `style loader` et du `css loader`
- Transpiler du JS
- Mapper le JS du bundle au JS des sources (eval-source-map) afin de pouvoir débugger facilement
- Créer le bundle dans `/dist/bundle.js` (au lieu de `/dist/main.js` par défaut)

- Installation des packages pour bénéficier de toutes ces fonctionnalités : `npm i webpack webpack-cli webpack-dev-server css-loader style-loader html-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin -D`

- Création du fichier de configuration de Webpack `/webpack.config.js` permettant de configurer les fonctionnalités de Webpack décrites ci-dessus (gérer le développement serveur, ...).
Il est à noter que grâce à la génération automatique de `dist/index.html` sur base de `/src/index.html`,  `/src/index.html` ne doit plus contenir la balise 
```html
<script src="./main.js"></script> ou  <script src="./bundle.js"></script> comme c'est configuré ici .
```


## Refactoring de l'application
- En changeant la configuration de Webpack, le fichier `/dist/index.html` a été déplacé vers `/src/index.html`. et la balise `<script src="./main.js"></script>` a été retirée de `/src/index.html`. L'idée est de mieux structurer nos répertoires et contenus afin que tout ce qui se trouve dans `/dist` soit généré par webpack sur base de tout ce qui se trouve dans `/src`.
- Mettre tous les assets dans `/dist` => pour ce step 0, `/img`, `/sound` et `/stylesheets` sont donc mis dans `/src`
- Chargement du css (grâce aux modules css-loader et style-loader) dans `/src/index.js` (ou tout autre module .js) : 
```js
import "./stylesheets/style.css";
```
- Chargement d'une image dans un fichier JS (grâce aux types de Asset Modules : `asset/resource` ou autre) dans `/src/index.js` (ou tout autre module.js) : 
```js
import logo from "./img/js-logo.png";
```
- `asset/resource` va transformer le chemin de la photo vers le chemin de la photo qui se trouvera dans le répertoire de sortie (`/dist`) => utilisation de logo comme src d'une image : 
```js
footerPhoto.src = logo;
```
- En savoir plus sur la gestion des assets par Webpack et les types de Asset Modules : https://webpack.js.org/guides/asset-modules/ 

- Chargement d'une photo via le CSS : il n'y a rien de plus à faire, du moment que la photo est dans `/src`, le Asset Module reconnaît la photo localement et va remplacer le chemin final de la photo lorsque le projet a été "build" (ou "bundlé" ; ). 
Par exemple, dans style.css : 
```css
background-image : url(../img/pizza.jpg);
```
- Chargement d'un fichier (image ou autre) directement dans un fichier .html : cela est possible grâce à l'installation et configuration du module `html-loader` : Webpack émet le fichier dans le "output directory" (`/dist`) et remplace `src` avec le chemin final vers le fichier
- Chargement d'un fichier son : idem que pour une photo, voir le code !

## Démarrage de l'application
- Démarrer l' application : `npm start`
- Le bundle a été généré (`bundle.js`) ainsi que `index.html`, mais tout est géré par le serveur de développement, il n'y a rien de mis dans `/dist` !

- 
## Migration de Bootstrap en CDN vers Bootstrap géré de façon moderne par Webpack
- Nous ne souhaitons plus charger de librairie à l'aide de `<script src="...">` mais directement via Webpack. 
- Installation de Bootstrap et dépendances :  `npm i bootstrap @popperjs/core`
- Chargement du CSS de Bootstrap (généralement au sein de `/src/index.js`) : 
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
- Chargement du JS d'un composant Bootstrap au sein d'un script (par exemple, afin que la barre de navigation puisse s'étendre lors d'un clic) :
```js
import { Navbar as BootstrapNavbar} from "bootstrap";
```
## Conclusion : pourquoi avoir fait tout ça ? 
- A l'étape suivante, nous allons pouvoir intégrer n'importe quel package du monde node.js ! C'est une gestion incroyable et simple des dépendances et des assets !
- Sachez que quand vous faites un build pour la production (`npm run build`), le bundle est optimisé pour la production ! Cela signifie que tous vos commentaires peuvent être enlevés de vos scripts, tous les espaces sont enlevés, toutes les dépendances non utilisées sont retirées, certains fichiers sont convertis en base64... Dès lors, vous avez un bundle des plus compacts !
# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
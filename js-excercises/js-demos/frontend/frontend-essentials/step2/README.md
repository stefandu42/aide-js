# Création d’un frontend pour une pizzeria : Step 2 : Structuration du code en modules, création d'une version statique de l'application via l'ajout de formulaires et la gestion de la navigation
## How to ? Création de composants JS
- Une version statique de notre frontend va être créé afin de reprendre, pour chaque page, un composant JS : la Homepage (`/src/Pages/HomePage.js`), la page de login (`/src/Pages/LoginPage.js`) et la page d'enregistrement (`/src/Page/RegisterPage.js`). 
Nous allons restructurer le layout de l'application pour avoir un container, la balise `<div id="page"></div>` (au sein de `/src/index.html`) dont la tâche sera d'afficher les différentes pages.
- Nous souhaitons aussi que le layout de l'application soit découpé en composants JS : un pour le Header (`/src/Components/Header/Header.js`), un pour le footer (`/src/Components/Footer/Footer.js`), un pour la barre de navigation (`/src/Components/Navbar/Navbar.js`)
- Chaque composant JS, une page, ou un autre élément du layout (Header, Footer...) est en fait une fonction qui permet de faire un render de ce composant au sein d'un container. Le container est en fait la `div #page` lorsqu'il s'agit de rendre une page (HomePage, LoginPage...). 
- Pour structurer le code :
    - chaque fonction, chaque composant JS, sera reprise dans un module. Par exemple, création d'un module `HomePage` pour la Homepage.
    - comme nous souhaitons que l'horloge reste quelque soit la page, nous allons l'intégrer dans le composant `Header` ; le module `Footer` sera lui aussi créé.
    - il n'est pas utile d'ajouter dynamiquement `#page div` via du JS.

## Gestion des événements sur la barre de navigation
- Il faut rajouter la gestion des clics sur la barre de navigation au sein du composant `/src/Components/Navbar/Navbar.js`
- Lors d'un clic, il suffit d'appeler la fonction associée à chaque Page : pour ce faire, d'abord la fonction du module JS associé est importée;
par exemple, pour rendre la page de login, il suffit d'appeler `LoginPage()` du module `/src/Pages/LoginPage.js`
# Conclusion
- Nous avons un frontend fonctionnel. Mais qu'est-ce qui nous manque ?
- Actuellement, il est impossible d'ajouter des opérations de lecture & écriture sur des ressources externes à notre frontend. Pourtant, nous souhaiterions qu'un admin du site puisse ajouter des pizzas, en effacer... Pour ce faire, il est important d'apprendre à développer une Web API. Puis finalement, d'intégrer les opérations offertes par une Web API au sein du frontend.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
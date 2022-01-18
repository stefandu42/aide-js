# Création d’une SPA pour une pizzeria : Step 2 : Gestion du routage des pages et composants

## Démarrage de la RESTful API
- Pour rappel, les steps 1 à 6 du tutorial restful-api-essentials doivent avoir été faits (`/demo/backend-restful-api/restful-api-essentials`) et la Restful API du step 6 doit avoir été démarré : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/step6/.
## Mise à jour de la Navbar
- Mise à jour de la Navbar afin que celle-ci puisse "s'auto-render" sur base du statut d'authentification de l'utilisateur : `/Components/Navbar/Navbar.js`; comme nous ne traitons pas encore des token à cette étape, le composant fonctionnel `Navbar` pourra recevoir en argument si l'utilisateur est authentifié ou pas, en considérant que par défaut, si rien n'est passé à `Navbar`, l'utilisateur n'est pas authentifié.

## Création d'un router
- Le rôle du nouveau routeur `/Components/Router/Router.js` sera d'implémenter ces fonctions :
    - Routage lors d’un clic sur un élément de la barre de navigation via `navbarWrapper.addEventListener("click",...)` :
        - Appel du composant associé à l’élément cliqué (et auto-render du composant)
        - Affichage dans le browser de l’URL associée à l’élément cliqué
        - Garder l’URL dans l’historique
    - Routage lors du chargement du frontend (ou lors d'un refresh) via `navbarWrapper.addEventListener("load",...)` :
    appel du composant associé à l’URL en cours
    - Routage lors de l’utilisation de l’historique du browser via `navbarWrapper.addEventListener("popstate",...)` : appel du composant associé à l’URL se trouvant dans la pile gérant le "state" du browser (l'historique)
    - Routage lors de redirection via la méthode `Redirect(uri)` :
        - Appel du composant associé à la redirection (et auto-render du composant)
        - Affichage dans le browser de l’URL associée à l’élément redirigé
        - Garder l’URL dans l’historique
- La configuration des routes est actuellement à faire au sein de `/Components/Router/Router.js`
```js
const routes = {
  "/": HomePage,
  "/login": LoginPage,
  "/register": RegisterPage,
  "/logout": Logout,
};
```
- NB : Cette configuration pourrait être externalisée dans un fichier de configuration afin de rendre le code plus générique.

## Mise à jour de l'index.js
- `HomePage` n'est plus chargé dans `index.js.` C'est le rôle du Router de charger la bonne page en se focalisant sur l'URL.
- De plus, il faut appeler le `Router` au sein de `index.js`

## Mise à jour des Pages qui faisaient des redirections
- Le composant `LoginPage` et `RegisterPage` doivent faire appel à la fonction `Redirect` du `Router` pour rediriger vers la `HomePage`. 

## Création du composant Logout
- Le composant `Logout` doit permettre de demander un "rerender" de la `Navbar` et rediriger vers la `LoginPage`. Ceci est implémenté dans `/Components/Logout/Logout.js`.

# Conclusion
- Nous avons une SPA fonctionnelle, néanmoins, il reste à répondre à ces deux questions : 
    - Comment gérer les données de session : username, token… ?
    - Comment appeler des opération d’une RESTful API qui sont protégées ?

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
# Création d’une SPA : Step 1 : Consommation d’opérations non protégées de la RESTful API grâce à un proxy
## Démarrage de la RESTful API
- Les steps 1 à 6 du tutorial restful-api-essentials doivent avoir été faits (`/demo/backend-restful-api/restful-api-essentials`) et la Restful API du step 6 doit avoir été démarré : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/step6/.

## How to ? Utilisation du proxy de Webpack 
- Utilisation du proxy de Webpack : 
    - Voir la configuration du proxy offerte au sein de `/webpack.config.js` :
    ```js
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {'^/api' : ''}
      },
    },

    ```
    - Changer l'URI lors de l'appel de la méthode `fetch` pour que celle-ci commence par `/api`. Toute URI commençant par `/api` sera prise en charge par le proxy de Webpack (serveur de développement ici) : par exemple, un `fetch` de type `GET /api/pizzas` (voir `/Components/Page/HomePage.js` sera transformé en `GET http://localhost:3000/pizzas` par le proxy

## How to ? Gestion dynamique des formulaires de login et de register
- Mise à jour des formulaires de Login (`/Components/Page/LoginPage.js`) et de Register (`/Components/Page/HomePage.js`) pour consommer les APIs associées : `POST /api/auths/login` et `POST/auths/register`.
- Voir `LoginPage` et `RegisterPage` pour la gestion de l'affichage  : lors d'une authentification : 
    - la barre de navigation doit être réaffichée (rerender) pour cacher les boutons `Login` & `Register`
    - l'utilisateur doit être redirigé vers une page spécifique ; ici c'est la `HomePage`
- La gestion des données de session côté client, ainsi que la gestion des autorisations aux opérations via des tokens JWT, ne sont pas prises en charge à cette étape-ci. Cela serait fait plus tard.
# Conclusion
- Nous avons une SPA qui fonctionne dans pas mal de cas. Néanmoins, si nous faisons un refresh de la page, nous perdons l'historique. De plus, nous n'avons pas d'URI spécifiques pour chacune des pages.
Il est aussi étrange que la barre de navigation ne s'auto-render pas par elle-même mais que ça soit la `LoginPage` et la `RegisterPage` qui cachent des boutons (duplication de code).

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
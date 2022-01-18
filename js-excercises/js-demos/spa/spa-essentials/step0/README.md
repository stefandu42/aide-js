# Création d’une SPA pour une pizzeria : Step 0 : Intégration de la RESTful API de la pizzeria et problème de CORS
## How to ? Tentative de consommation d'une opération d'une RESTFul API ne demandant pas d'autorisation
- Les steps 1 à 6 du tutorial restful-api-essentials doivent avoir été faits (`/demo/backend-restful-api/restful-api-essentials`) et la Restful API du step 6 doit avoir été démarré : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/step6/.
- Maintenant que nous avons une API qui permet d'authentifier des utilisateurs et d'autoriser des opérations sur des ressources via JWT, nous allons les utiliser pour afficher la liste des pizzas (opération non protégée) sur la page d'acceuil.
- Pour le frontend, nous repartons du step 2 de la démo frontend-essentials.
- Nous allong maintenant gérer l'intégration de notre frontend et du backend, via l'affichage de la liste des pizzas, le menu.
- Création d'un tableau reprenant le menu de pizza au sein de la HomePage : voir le code dans `/src/Components/Pages/HomePage`.js => appel de la méthode `fetch` pour recevoir un Array d'Object. Puis génération dynamique d'HTML sur base des données reçues par l'API. 
- On voit que ça ne fonctionne pas, problème de CORS, la réponse de l'API est bloquée... Que faire ?

## Résolution du problème de CORS
- Soit où contourne le problème :
    - via l'utilisation d'un proxy qui fait en sorte que pour le frontend, l'API se trouve à la même origine que celui-ci ; cela sera vu au Step 1 ;
    - soit on relâche la sécurité de l'API en autorisant l'origine associée au frontend ; cela est fait au step 7 du tutorial `/demo/backend-restful-api/restful-api-essentials`. Dans ce cas-ci, rien n'est à faire au niveau du frontend.
## How to ? Consommation d'une opération d'une RESTFul API ne demandant pas d'autorisation
- Le Step 7 du tutorial restful-api-essentials a été réalisé afin d'autoriser l'origine du frontend (http://localhost:8080) et l'API a été démarrée. Veillez donc à stoper la RESTful API du Step 6 et démarrer la RESTful API du Step 7.
- Voila, il n'y a rien d'autre à faire au niveau du client, le menu des pizzas devrait s'afficher.
# Conclusion
- Nous avons une SPA fonctionnelle consommant une opération non protégée de lecture de ressources (de type pizza).
- L'intégration de ce frontend avec la RESTful API a été possible car nous avions les moyens de configurer la RESTful API pour ajouter une origine. Ca n'est pas toujours possible, très souvent nous consommons des RESTful APIs qui ne nous appartiennent pas. L'étape suivante nous montre comment régler les problèmes de CORS dans ce cas-là.
# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
# Création d’une RESTful API pour une pizzeria : Step 5 – Refactor : création d’un middleware d’autorisation JWT

## Introduction
- A l'étape précédente, le code d'autorisation des accès aux opérations sur les ressources se répète dans plusieurs méthodes du router. On va donc ici créer un middleware d'autorisation pour rendre le code plus concis et donc plus facilement lisible et maintenable.
## How to ? création d'un middleware d'autorisation
- Dans `/utils/authorize.js`, création du middleware `authorize` : ce middleware sera appelé pour chaque opération qui nécessite une autorisation JWT.
- Le middleware `authorize` vérifie que l'utilisateur est authentifié. Cela est donc valable pour n'importe quel utilisateur authentifié : si son token est valide, le prochain middleware est appelé (appel de `next() `dans le code), signifiant que l'opération sur les ressources sera exécutée.
- Actuellement, au sein de `/routes/pizzas.js`, après la vérification que l'utilisateur est authentifié (via `authorize`), il doit être vérifié s'il s'agit de l'utilisateur `admin`.
Afin d'éviter des répétitions de code, et de rendre les autorisations plus pratiques à gérer, nous pourrions créer un nouveau middleware qui s'occuperait d'autoriser que les utilisateur ayant un rôle d'admin...

## Exécution de l'API et tests
- N'oubliez pas de démarrer l'API : `npm run debug`.
- Pour rappel, n'hésitez pas à explorer les requêtes pour voir comment l'API réagit => clic sur `Send Request` au sein de `/tests/auths.http` ou `/tests/pizzas.http`.
# Conclusion
- Cette RESTful API commence à être robuste. Néanmoins, il y a quelques soucis de sécurité à régler à la prochaine étape :
    - Les passwords sont visibles en clair dans `/data/users.json`.
    - Un hackeur pourrait introduire du JavaScript malveillant au sein des ressources de type pizza. Si c'était le cas, les utilisateurs qui liraient le menu des pizzas viendraient à exécuter ce JS malveillant, amenant potentiellement à la fourniture de leur session au hackeur...

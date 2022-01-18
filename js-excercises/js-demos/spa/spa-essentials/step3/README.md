# Création d’une SPA pour une pizzeria : Step 3 : Sauvegarde du token et du username dans le localStorage, affichage du username pour tout utilisateur authentifié & logout
## Démarrage de la RESTful API
- Pour rappel, les steps 1 à 6 du tutorial restful-api-essentials doivent avoir été faits (`/demo/backend-restful-api/restful-api-essentials`) et la Restful API du step 6 doit avoir été démarré : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/step6/.
## How to ? Sauvegarde du token & username dans le localStorage
- Lors d'une opération de login ou d'enregistrement, l'API renvoie le username et un token. Ces données de session sont à sauver côté client dans le `localStorage`.
- La méthode `setSessionObject` de `/utils/session.js` permet d'enregistrer les données dans le browser. Ainsi, même si l'utilisateur ferme son browser, celles-ci sont disponibles à sa prochaine ouverture.
- Cette méthode est donc appelée dans LoginPage et RegisterPage.

# Gestion de la barre de navigation
- Mise à jour de la `Navbar` (`/Components/Navbar/Navbar.js`) sur base des données de session se trouvant dans le `localStorage` :
    - suite à l'appel de la méthode `getSessionObject` de `/utils/session.js` permettant de désérialiser (ou parser) les données de session se trouvant (ou pas) dans le browser, nous récupérons le username et le token de l'utilisateur s'il existe.
    - Si le username existe, affichage de la Navbar pour un utilisateur authentifié (pas de Login, Register...), sinon, autre affichage (Login, Register...)
    - Affichage du username sur la `Navbar`

# Gérer les demandes de logout
- Le composant `Logout` permet déjà de demander un "rerender" de la `Navbar` et rediriger vers la `LoginPage`. 
- Avant d'appeler `Logout`, il faut supprimer les données de session. Ceci est implémenté dans `/Components/Logout/Logout.js` en faisant appel à la méthode `removeSessionObject` de `/utils/session.js`
# Conclusion
- Nous avons une SPA fonctionnelle, néanmoins, il reste à appeler des opération d’une RESTful API qui sont protégées (par exemple, pour la création de pizza par l'admin du site).

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza
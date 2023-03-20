# Projet Pourboires

Ce projet permet de gérer les pourboires des employés d'un restaurant.

## Prérequis

- Node.js v12.x ou supérieur
- npm v6.x ou supérieur

## Installation

Clonez le dépôt et installez les dépendances :

git clone https://github.com/KillianBoucher/projet-pourboires.git
cd projet-pourboires
npm install


Créez un fichier `.env` à la racine du projet et configurez-le en suivant l'exemple ci-dessous :

DB_HOST=localhost
DB_USER=username
DB_PASSWORD=password
DB_NAME=database_name
PORT=3000
JWT_SECRET=your_jwt_secret


## Utilisation

Pour lancer le serveur en mode développement :

npm run dev


Pour lancer le serveur en mode production :

npm start


## API

L'API permet de gérer les pourboires, les services et les utilisateurs.

### Endpoints

- CRUD pour les pourboires : `/api/tips`
- CRUD pour les services : `/api/services`
- CRUD pour les utilisateurs (sans perte de données) : `/api/users`
- Authentification JWT pour les administrateurs : `/api/auth`

## Tests

Des scénarios et des routes Postman sont disponibles pour tester les différentes fonctionnalités de l'API.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.





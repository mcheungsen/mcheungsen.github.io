# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______

# Le modèle client - serveur
Le client demande l'exécution d'un service

Le serveur réalise le service

Client et serveur sont souvent localisés sur deux machines distinctes

- Communication par messages

**Requête** : Paramètres d'appel spécification du service

**Réponse** : Résultats, indicateur d'exécution ou d'erreur

Communication **synchrone** ou **asynchrone**

## Application web
Application dont l'interface est visible dans un **navigateur web**

- programmes côté serveur
- partie client
- communication via le **protocole HTTP**

### Différents types d'applications web

#### Site Web dynamique
Ensemble de pages dynamiques simples
- sans inclusion
- inter-reliées

#### Application web "localisée"
Programmation sur le serveur.

Modèles de structuration de l'application (couches, modules, composants)

Principes de structuration :
- Affectation de responsabilités à chaque ressource
- Inclusion/appel des ressources les unes dans les autres
- Utilisation de patterns de conception (MVC, DAO...)

#### Application web répartie
Application localisée + déport d'une partie côté client

Appel à d'autres ressources / composants
- sur des machines distantes
- non propriétaire

Nécessite des mécanismes (middleware) de communication : *RPC, CORBA, Services WEB, REST...*

*Exemples langages utilisés : php, java, python, js, .net, ruby, ...*



_______

[2](projet-dev-2.md)

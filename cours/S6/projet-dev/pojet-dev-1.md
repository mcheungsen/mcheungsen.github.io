# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)
______

# Le modèle client - serveur
Le client demande l'exécution d'un servie

Le serveur réalise le service

Client et serveur sont souvent localisés sur deux machines distinctes

- Communication par messages

**Requête** : Paramètres d'appel spécification du service

**Réponse** : Résultats, indicateur d'exécution ou d'erreur

Communication **synchrone** ou **asynchrone**

## Application web
Application dont l'interfzce est visible dans un **navigateur web**

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
- Affectation de responsabilités à chaque essource
- Inclusion/appel des ressources les unes dans les autres
- Utilisation de patterns de conception (MVC, DAO...)

#### Application web répartie
Application localisée + déport d'une partie côté client

Appel à d'autres ressources / composants
- sur des machines distantes
- non propriétaire

Nécessite des mécanismes (middleware) de communication : *RPC, CORBA, Services WEB, REST...*

*Exemples langages utilisés : php, java, python, js, .net, ruby, ...*

# Protocole HTTP

HTTP : Hyper Text Transfer Protocol

Dédié au web (CERN 1990)

Fonctionne en mode client / serveur

Protocole **sans état**
- Gestion légère des transactions
- Nécessite un mécanisme de gestion des sessions

## Format des requêtes
- Commands HTTP
`GET`, `POST`, `HEAD`, `PUT`, `DELETE`, ...
- En-têtes (ensemble de lignes) nom : valeur
- ligne vide
- contenu / corps (éventuel) passage de paramètres à traiter par le serveur

### Méthode GET
Méthode standard de requête d'un document

Corps de la requête toujours vide. paramètres après le nom de la ressource

`GET /cgi-bin/pog.cgi?email=toto@site.fr&pass=toto&s=login HHTTP/1.1`

URL limitée à 4Ko. Données transmises en clair et visibles dans l'URL

//TODO

# Programmation côté serveur en java

## Principe général
- Réception de la requête HTTP du client : serveur web
- Encapsulation de la requête client dans un objet Java `HTTPServletRequest` : **Moteur de servlets**
- Traitement de la requête et génération de la réponse sous forme d'un objet Java `HTTPServletResponse` : **Composants java**
- Désencapsulation de la réponse : **Moteur de servlets**
- Envoi de la réponse au client **Serveur web**

## Serveurs de référence
**Tomcat** (Apache)
- Référence en matière de moteurs de servlets
- Contenu

Serveur web : Apache

Connecteur : `mod_jk` (Jakarta)

Moteur de servlets : Catalina

**Jetty** (Eclipse Foundation)
- Serveur web + conteneur de servlets "léger" : Implémentent la **Java Servlet API**

## Servlets
**Implémentation Jav d'un mécanisme de requête/réponse**

Initialement : indépendant d'un protocle avec encapsulation des données dans des objets
- génériques
- Spécifiques à HTTP : méthode, type MIME de la réponse, heders, session cookies

**Objet** Java
- Composant d'application
- Derrière un serveur
- Mappée à une URL sur le serveur

dans un "**Container**"
- pas d'accès direct au serveur
- accès protégé aux autres objets métier de l'application
- Gestion avancée par le container

### Bilan Servlets
(+)

Composants simples : classes jva

Codage minimum (cycle de vie, traitement de la requête)

(-)

Nombreux `sout`

Difficile de comporendre le code HTML généré

## JAVA SERVER PAGES - JSP
Page web dynamique codée comme si elle était statique
- code HTML-like compilé en code Java
- Programmation impérative

Mêmes fonctionnalités que `HttpServlet`
- Accéder aux mêmes données / objets qu'un servlet
- Inclure ou rediriger la requête vers une autre servlet/JSP

## JAVABEANS
Composants logiciels réutilisables (classes Java)

Constructeur sans paramètre, propriétés privés accessibles par des méthodes publiques, méthodes privées

Composants possédant une forme standardisée

## PATTERN WEB MVC
### Modèle
Contient le domaine de l'application

peut utiliser d'autres pattern

implémenté sous forme de classes / interfaces simples

### Contrôleur
Gère les paramètres des requêtes

lie modèle et vue

Implémenté par une (ou plusieurs) servlet

### Vue
Encapsule la création des pages web de réponses

Données préparées par le contrôleur ou u modèle

Implémenté par des JSP

## Outils d'aide au développement
**Objectif** : Utiliser des bibliothèques ou un framework


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

## Format des réponses
- Type de la réponse
- En-têtes
- ligne vide
- Contenu / corps : ressource encodée en fonction du type MIME spécifié

### Codes de réponse
`100-199` : Information

`200-299` : Succès

`300-399` : Redirection

`400-499` : échec dû au client

`500-599` : échec dû au serveur

### Méthode GET
Méthode standard de requête d'un document

Corps de la requête toujours vide. paramètres après le nom de la ressource

```
GET /cgi-bin/pog.cgi?email=toto@site.fr&pass=toto&s=login HHTTP/1.1
```

URL limitée à 4Ko. Données transmises en clair et visibles dans l'URL

### Méthode POST
Transmission des données dans le corps de la requête

```
POST /cgi-bin/prog.cgi HTTP/1.1
User-Agent: Mozilla/5.0 (compatible;MSIE 6.0;Windows NT 5.1) Host: localhost
Accept: */*
Content-type: application/x-www-form-urlencoded Content-length: 36

email=toto@site.fr&pass=toto&s=login
```

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

## Serveurs de référence
**Tomcat** Apache

Référence en matière de moteurs de servlets

Contenu : 
- Serveur web : Apache
- Connecteur : `mod_jk` Jakarta
- Moteur de servlets : Catalina

**Jetty** Eclipse Foundation

Serveur web + donteneurs de servlets

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

## Frameworks côté serveur
Couche d'abstraction supplémentaire par rapport au serveur

- Pattern MVC
- services annexes *sécurité, interface avec la BD*

### Différents types de frameworks
**Push-based**

Contrôleur utilisant des actions pour calculer les contenus, poussés à la couche Vue

*Struts, Spring*

**Pull-based**

La Vue tire les contenus de plusieurs contrôleurs dédiés à des tâches spécifiques.

Plusieurs contrôleurs participents à la création d'une seule vue

*Structs2, Tapestry, Seam*

## Spring
Architecture autour d'un conteneur léger

composants : POJO Plain Old Java Objects (simplfication EJB)

Intégration de fonctionnalités fournies par d'autres projets Open Source : Struts, Hibernate, JUnit, AspectJ, JSF...

La configuration tient une part centrale de la conception.

## Spring Core Container
Implémente le **pattern Ioc**
- Prend en charge la création, la gestion du cycle de vie et les dépendances des composants beans qu'il gère.

Applique la configuration
- via des fichiers XML
- par annotations
- par programmation

Fournit des services annexes

## Composants
beans Spring : POJO instanciés par le conteneur avec injection de dépendances
- par constructeur
- par propriétés (setters)

## Configuration par annotations
`@Component` : Composant générique

`@Repository` : Dérive de `@Component`, dédié à la persistance

`@Service` : Dérive de `@Component`, dédié aux services (objets du modèle)

`@Controller` dérivé de `@Component`, voir Spring Web MVC

```java
import org.springframework.stereotype.Repository;

@Repository
public class UserDao implements Dao {

}
```


`@Required` utilisable sur un setter

`@autowired` sur setter, constructeur ou propriété. Injection automatique de dépendances basée sur le types

```java
public class UserService {
  @Autowired  
  private UserDao userDao;

  @Required
  public void setUserDao(UserDao userDao) { 
    this.userDao = userDao;
  }
} 
```

`@Scope` Singleton par défaut. 

*prototype* : une instance par dépendance d'un autre bean

*request, session, application, websocket* : spécifiques au conteneur web

## Composants MVC

```java
@Controller 
@RequestMapping("/appointments") 
public class AppointmentsController {
  private final AppointmentBook appointmentBook;

  @Autowired
  public AppointmentsController(AppointmentBook appointmentBook) {
    this.appointmentBook = appointmentBook; 
  }

  @RequestMapping(method = RequestMethod.GET)
  public String get() {
    return "appointments/today";
  } 
}
```

Récupérer les paramètres de la requête

Faire du *data binding* entre les paramètres et le modèle

Envoyer des informations à la vue pour générer une réponse

## Spring Boot
Créer facilement une application Java
- peu de config, tourne une appli Spring
- pas de génération de code, ni config XML

https://spring.io/projects/spring-boot

# REST - Representational State Transfer

- Analyse des bonnes propriétés du web
- Recherche des raisons de leur conception
- Généralisation sous forme d'un style architectural applicable au Web des machines
- Définition de contraintes

## Contraintes
`Uniform interface` : Conception orientée-ressources

`Client/Server` : Séparation des responsabilités

`Stateless` : Chaque requête est indépendante des autres

`Cache` : Mise en cache

`Layered System` : Couches étanches entre elles

`Code on demand` : Code fourni par le serveur à exécuter par le client

## LEVEL 0 : PLAIN OLD XML (SOAP)
Un seul point d'entrée

Une seule méthode HTTP 

## LEVEL 1 : RESSOURCES
Gérer et exposer des ressources

- posséder un id
- avoir une représentation (structure de la réponse)
- être auto-décrite (`Content-type` de l'en-tête)

## LEVEL 2 : HTTP VERBS

Create `POST /users`

Read `GET /users/{id}`

Update `PUT /users/{id}`

Delete `DELETE /users/{id}`

Utiliser les codes de réponse HTTP en réponse

Renvoi d'un contenu

`200 OK` / `206 Partial Content`

`404 Not found`

Création

`201 Created`

Modification

`200 OK` / `304 Not Modified`

`204 No content`

URL incorrecte

`405 Method not allowed`

## LEVEL 3 : HYPERMEDIA CONTROLS

Rendre l'API auto-découvrable en imitant les liens hypertextes
- dans l'en-tête
- dans le corps de la réponse

**Hypermedia As The Engine Of Application State (HATEOAS)**

## Transactions sans état
Gérer le contexte de l'interaction avec le serveur.

Le serveur ne conserve aucune trace des interactions passées

**Gain en perf et scalabilité**
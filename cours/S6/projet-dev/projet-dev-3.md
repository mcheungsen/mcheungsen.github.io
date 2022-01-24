_# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______
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
**Implémentation Java d'un mécanisme de requête/réponse**

Initialement : indépendant d'un protocle avec encapsulation des données dans des objets
- génériques
- Spécifiques à HTTP : méthode, type MIME de la réponse, headers, session cookies

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


______

[2](projet-dev-2.md) - [4](projet-dev-4.md)
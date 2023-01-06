_# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______
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

## Travailler en "STATELESS"

1 . **Passer le contexte dans la requête**
- En paramètres : en fonction de la méthode HTTP -W dans l'URL, dans le corps de la requête, dans les headers HTTP
- Dans les headers HTTP :authorisation, cookies

2 . **Récupérer le contexte côté serveur**
- Authentification, autorisation
- Informations nécessaires au traitement de la requête

3 . **Traiter la requête en interrogeant la bonne instance du modèle**

## WEB API
REST fournit des principers pour :
- alléger les serveurs
- permettre l'évolution des clients

On peut donc réaliser des applications :
- en exposant des ressources sur un serveur
- en documentant l'API du serveur : **Web API**
- En réalisant le client séparément -> en JS dans un navigateur web / sous forme d'appli bureau ou mobile / sur un autre serveur

**Inconvénients de REST** : 
- Augmentation de la bande passante
- Toute l'information nécessaire au traitement de la requête doit "voyager" dans la requête
- Nécessite des clients "intelligents"

______

[3](projet-dev-3.md) - [5](projet-dev-5.md)
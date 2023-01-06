# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______

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

_______

[1](projet-dev-1.md) - [3](projet-dev-3.md)

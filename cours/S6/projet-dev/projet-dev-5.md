# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______
# Programmation côté serveur en Javascript

## RIA - Rich Internet Applications

Web-based
- Paradigme client-serveur
- Protocole HTTP

Expérience utilisateur proche des applications natives
- Traitement de l'interface côté client (js, css, DOM)
- Échanges client-serveur asynchrones (AJAX)

Logique métier complexe
- Outils "évolués" de modélisation, conception, développement

## Offre côté client

### Navigateur web
**Moteur de rendu** : HTML -> DOM tree -> affichage

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/428px-DOM-model.svg.png)

**Moteur de scripting** : 
- Manipulation de la page html, css
- Échanges de données async
- Logique applicative côté client

https://en.wikipedia.org/wiki/ECMAScript

## Caractéristiques des moteurs actuels

Interprétés : Compilation JIT en bytecode, implémentent un sous-ensemble de ES6.

Nouvelles versions : 
- permettre la programmation d'applications structurées côté clint
- Nouveaux éléments syntaxiques
- Transpilables en ES5

## Bases du Langage

**Typage dynamique**
- Variables typées
- Conversions de types iplicites

```javascript
var a;
var b;
a = 5;
b = '5';
var c = (a===b);
b = 10; //b devient un entier
c = a + b; // c devient un entier
```

**Flexible et permissif**
- pas/peu d'erreurs à l'exécution
- Utilisation de variable hors scope

**Recommandations**

- Déclarer les variables avec `const` et `let` que `var`
- gérer les erreurs en `try catch`
- Utiliser les fonctionnalités des versions récentes
- Utiliser le mode [`strict`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)

**Langage fonctionnel**
- Fonctions
- les fonctions peuvent modifier des variables externes

**Langage objet orienté prototype** (-> ES5)
- types associés aux instances et non aux classes

**Langage événementiel**
- Mécanisme de *callback*
- pattern observer *eventListener*

**Objet**
- ensemble de propriétés et de méthodes
- couples `nom : valeur`
- `this` pour référencer l'objet courant

```js
let jonSnow = {
  first : 'Jon',
  last : 'Snow',
  isAlive : undefined, 
  resurrect : function() { 
    this.isAlive = true; 
  }
}

jonSnow.isAlive = false; 
jonSnow.resurrect();
```

**Programmation orientée prototype**
```js
function Person(first, last) { 
  this.first = first, 
  this.last = last, 
  this.isAlive = undefined, 
  this.resurrect = function() {
    this.isAlive = true; 
  }
}

let jonSnow = new Person('Jon','Snow'); 
jonSnow.resurrect();
```

**Programmation de l'orienté object** ES6
- `class, constructor, static, extends, super`
- propriétés publiques
- pas de classes abstraites / interfaces
```js
class Person {
  constructor(first, last) { 
    this.first = first;
    this.last = last;
    this.isAlive = undefined;
  }

  resurrect() {
    this.isAlive = true; 
  }
}

let jonSnow = new Person('Jon','Snow'); 
jonSnow.resurrect();
```
## JavaScript Object Notation (JSON)
```js
let jonSnowJSON = '{ "first" : "Jon", "last" : "Snow", "isAlive" : true }';
let jonSnow = JSON.parse(jonSnowJSON); 
jonSnowJSON = JSON.stringify(jonSnow);
```

## TypeScript
JavaScript + typage strict
- typage static
- généricité
- interfaces
- paramètres optionnels
- unions

```typescript
interface Person<T> {
  first?: T;
  last: T;
  isAlive: boolean | undefined; 
  resurrect() : void;
}

let jonSnow: Person<string> = {
  last : 'Snow',
  isAlive : undefined,
  resurrect : function() { this.isAlive = true; }
}
```

## Programmation asynchrone
Deux alternatives
- Programmation événementielle `event handlers, callbacks`
- Promesses `Promise`

### Programmation événementielle
Objet `DOM Event`

Émis lorsqu'un élément DOM subit des interactions
- Clique sur la souris `click`
- Page web / image chargée `load`
- souris passe sur un élément `mouseover`
- Champ de saisie modifié `change`
- formulaire HTML soumis `submit`

Peut être intercepté à l'aide de code JS

**Deux processus en parallèle**
- `Principal` - Déroulement des traitements et association des événements à des fonctions de callback
- `Callbacks` - Récupèrent et traitent les événements

**Deux syntaxes**
- Attributs HTML/Propriétés JS spcifiques `onclick` `onload`
- Ajout d'`eventListeners` en JS

```js
monElementDOM.addEventListener("click", maFonctionCallback);
```

### Fonctions de rappel (callback)
Fonction passée en paramètre à une autre fonction

Exécuter du code au sein d'une fonction sans savoir ce qu'il va faire, en suivant une interface de prog

```js
setTimeout(callbackFunction); 
// syntaxe sans paramètre

setTimeout(function() { callbackFunction("toto"); });
// Avec paramètre, encapsulation fonction anonyme
```

### Promesses
Lancer du code asynchrone ou différé

Réagir spécifiquement
- succès `fullfilled`
- erreur `rejected`
- fin de l'exécution `settled`

Conserver des performances acceptables

**Création**
```js
function maFonctionAsynchrone(nbDecimales) {
  return new Promise((resolve, reject) => {
      try {
          const pi = computePiIn30seconds(nbDecimales); 
          resolve(pi);
      } catch(e) {
          reject("machine too slow!");
      } 
  });
}
```
**Appel**
```js
maFonctionAsynchrone(150).then( 
    function(result) { console.log(result); }
).catch(
    function(error) { console.error(error); }
).finally(
    function() { alert("Résultat disponible dans la console"); }
);
```
**Chaînage : `then` retourne une nouvelle promesse**
```js
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { 
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 2

});
```
## Promesses : `async` / `await`

Simplifier l'écriture de promesses

`async` fait retourner une promesse
```js
async function f() {
  return 1;
}

f().then(alert); // 1
```
`await` fait attendre le résultat d'une promesse dans une fonction `async`
```js
async function maFonctionSynchrone() { 
    try {
        const result = await maFonctionAsynchrone(150);
        console.log(result); 
    } catch(error) {
        console.error(error); 
    }
    alert("Résultat disponible dans la console"); 
}
```
## Requête asynchrone au serveur
Deux solutions :
- **Asynchronous JavaScript And XML (AJAX)** : Mécanisme d'`events` et `callbacks` / transfet de donnée en XML via 
    - un objet `XMLHttpRequest` Mozilla
    - un contrôle ActiveX `XMLHTTP` Internet Explorer
    
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- **Fetch API** : 
    - Primitives de plus haut niveau que `XmlHttpRequest`
    - Récuperer du texte ou du JSON
    - Encapsulation dans des promesses

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

### FETCH API
Un seul paramètre obligatoire : URL

Options dans un objet JSON
```js
fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
}
```

Renvoie une réponse

Erreur levée en cas de 
- problème réseau
- réponse non conforme au résultat attendu (parsing JSON)

Pas d'erreur HTTP -> Vérifier `Responsestatus` à la main

```js
async function fetchData(url) {
  let response = await fetch(url);

  if (response.ok) { // if HTTP-status is 200-299
    let json = await response.json();
  } else {
    console.error("HTTP-Error: " + response.status);
  }
}
```
______

[4](projet-dev-4.md) - [6](projet-dev-6.md)
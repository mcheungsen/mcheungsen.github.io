# Projet de développement logiciel Client - serveur

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______
# Frameworks côté client

## Objectif global
Faciliter le développement d'**Applications single-page (SPA)**

- Gérer la logique métier
- S'adapter aux terminaux mobiles
- Interagir avec le(s) serveur(s)
- Optimiser les performances

## Single-Page Application - SPA
Toute l'application côté client estdans une unique page Web
- Une seule page à charger - fluidité
- Contient toutes les vues de l'application
- Routage fondé sur le hash # de l'URL pour sélectionner la vue à montrer

Permet d'implémenter un pattern **MV\* complet côté client** 
- *Model* : JS exécutés localement + échanges asynchrones de données avec le serveur
- *View* : Ensemble de `<section>` dans la page HTML + *mécanisme de templating*
- *Controller / Presenter / View-Model* : Routage + gestion événements + ...

## Routage par HASH
**Principe** : 
- Intercepter le changement de *hash* dans l'URL
```html
<a href="#/page1">Page 1</a>
<a href="#/page2">Page 2</a>
```
- Récupérer les éventuels paramètres
- Déclencher un callback

Événement `hashchange` et `window.location.hash`

Alternative `window.history`

## Liens entre modèle et vue
**One-way data binding**
- Toute modification d'une propriété du modèle provoque une mise à jour de la vue

**Two-way data binding**
- Toute modification d'une propriété du modèle provoque une mise à jour de la vue
- Une action sur la vue provoque la mise à jour du modèle
## Templating côté client
Principe : Produire une vue à partir de données

Interpolations (texte, variables, expressions JS)
```js
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}
```
Directives (if, for, on)
```js
<p v-if="seen">Now you see me</p>

<a v-on:click="doSomething"> ... </a>
```

## Composants
Créer soi-même ses éléments HTML en fonction des besoins métiers de l'application

Leur attribuer :
- Un nom
- une vue (template, css)
- comportement (animations, event handlers...)

[Web components](https://www.webcomponents.org/)
## Introduction à VUE.JS
Framework initialement "Complètement côté client"

Objectif : déporter une partie de la logique métier d'une application localisée côté client

écosystème de plugins :
- routeur
- gestion d'états
- Server-Side Rendering
### Fonctionnement
Chaque élément d'interface est un **composant Vue** (HTML, JS, CSS)

Lien modèle/vue
- *One-way data binding* : la vue réagit aux changements du modèle
- *Two-way data binding* : à faire explicitement depuis la vue

La structure de l'applciation est définie dans la configuration du framework
### Création de l'application
Instanciation d'un objet `Vue`

Propriétés :
- `el` (root element) : id du composant de base
- `data` : données du modèles
- ... méthodes de gestion du cycle de vie

https://v3.vuejs.org/guide/instance.html

### Création d'un composant
Instanciation d'un objet `Vue.component()`

Propriétés :
- `props` : Description des propriétés d'un composant
- `methods` : getters et mutateurs
- `computed` : Propriétés qui proviennent d'autres élément -> actualisées dynamiquement par les événements extérieurs

https://v3.vuejs.org/guide/introduction.html

### Templating
**Directives** : préfixées par `v-`
- `v-for` : dans l'item et non dans la liste
- `v-on` : listeners d'événements de l'IU
- *Two-way data binding*
    - `v-model` : pour lier l'événement change d'un input à une propriété du modèle
    - `@click` @événement : Pour capturer le clic sur un élément d'interface

https://v3.vuejs.org/guide/template-syntax.html

### Routing

`vue-router` : plugin recommandé

`hash` utilisé par défaut, `History` possible

```js
// 1. Define route components (can be imported from other files)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
const routes = [ { path: '/foo', component: Foo },
                 { path: '/bar', component: Bar } ]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
const app = new Vue({
  router
}).$mount('#app')
```

https://router.vuejs.org/

## Outils JS compatibles
[NPM](https://www.npmjs.com/) : Gestionnaire de paquets JS

[Webpack](https://webpack.js.org/) : Packaging / optimisation

[ESlint](https://eslint.org/) : analyse statique du code

...

______
[5](projet-dev-5.md) - [7](projet-dev-7.md)
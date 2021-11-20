# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Preuves en logique du premier ordre

A quoi ressemblent les règles d'introduction des quantificateurs ? les règles d'élimination des quantificateurs ?

$$\forall x: T, P$$

$$\exists x: T, P$$

## Introduction du $$\forall$$

Prouver "Tout objet de type T à la propriété P" :
- On prend un T quelconque, qu'on nomme au moyen d'une variable
- Prouver que x a la propriété P

$$\frac{\Gamma, x: T \vdash P}{\Gamma \vdash \forall x : T, P}{\forall_i}$$

Le caractère **quelconque** est capturé par la condition d'utilisation: aucune des hypothèses de $$\Gamma$$ ne doit avoir x comme variable libre.

Le plus souvent P a x comme variable libre.

## Elimination du $$\forall$$

Si on sait que **tout T a la propriété P**, alors on peut prendre n'importe quel individu du type T, et affirmer qu'il a la propriété P.

"On sait que tout T a la propriété P" : $$\forall x: T, P$$.

"individu du type T" : n'importe quel terme t : T.

"il a la propriété P" P[x/t]

$$\frac{\Gamma \vdash \forall x : T, P; \Gamma \vdash t : T}{\Gamma \vdash P [ x/t ] }{\forall_{ei}t}$$

P[x/t] désigne la proposition P, dans laquelle chaque occurrence libre de x est remplacée par le terme t.

### Quantificateur en Coq
`forall x:P, R x -> R (p x)`

Introduction : `intro`

Elimination : `apply`, `destruct`, `specialize`

## Introduction du $$\exists$$

"Il existe au moins un T qui a la propriété P" : exhiber un terme t de type T.

$$\frac{\Gamma \vdash t : T; \Gamma \vdash P [ x/t ]}{\Gamma \vdash \exists x : T, P}{\exists_it}$$

La difficulté est de trouver "un bon t".

## Elimination du $$\exists$$

"Il existe au moins un T qui a la propriété P" : On peut s'en fournir un et le nommer.

Il faut lui donner une variable qui n'est pas déjà utilisé.

$$\frac{\Gamma \vdash \exists x : T,P; \Gamma;y:T ; P[ x/y ] \vdash A}{\Gamma \vdash A}{\exists_e}$$

**Condition d'utilisation** : La variable y utilisée ne doit pas apparaître comme variable libre dans le contexte $$\Gamma$$. Sinon on est en train d'ajouter l'hypothèse qu'un individu sur lequel on avait supposé des choses, satisfait en plus le propriété P.

### Quantificateur existenciel en Coq

`exists x:T, R x /\ R (p(p x))`

**tactique d'introduction** : `exists`

**Tactique d'élimination** : `destruct` (Coq introduuit une variable du bon type, et ajoute l'hypothèse pour cette variable).

## L'égalité
Souvent besoin d'exprimer le fait que deux termes désignent le même individu.

Introduction : *t est égal à t*

$$\frac{}{\Gamma \vdash t = t}{=_i}$$

### L'égalité en coq

=

**Introduction** : `reflexivity` (prouve une égalité t=t)

**Elimination** : `rewrite` utiliser une hypothèses sous la forme d'une égalité

### Calcul des prédicats en Coq

Coq se charge de vérifier les conditions d'application.

**Introduction de l'universel** : `intro`

**Elimination de l'universel** : `specialize H with t` remplacer une hypothèse universelle H par son application à un terme t

**Introduction de l'existenciel** : `exists t` On fournit le témoin, il faudra prouver la propriété

**Elimination de l'existenciel** : `destruct H`

### Séquents valides

En logique propositionnelle, on a la notion de **séquent valide**, via la notation de **valuation**.

En calcul des prédicats, on passe par la notion de **modèle** qui remplace celle de valuation.

Un séquent valide, c'est un séquent dont la conclusion "est vraie" dans tout modèle.

-----

On parle de **calcul des prédicats** ou de **logique du premier ordre**.

"Premier ordre" fait référence au fait qu'on ne fait porter les quantificateurs que sur des objets des types de base.

La logique de coq est d'ordre supérieur. au-delà du premier ordre.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
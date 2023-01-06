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

------

Un séquent $$\Gamma \vdash A$$ est valide si **tout modèle de $$\Gamma$$ est également un modèle de** $$\Gamma \cup$$ {A}

Si un environnement $$\Gamma$$ n'a **aucun modèle**

### Modèle pour un environnement

Dans la description d'un univers (des types de base, des symboles de fonctions, de prédicats et de relatioons), on n'impose pas une interprétatioon de ce que représente chaque type et chaque symbole.

Un **modèle** pour un univers et des hypothèses, c'est la description de :

- Pour chaque type de base $$T$$, un ensemble $$[[T]]$$

- Pour chaque symbole de fonction $$f : T \rightarrow T'$$, une fonction totale $$[[f]]$$ de $$[[T]]$$ dans $$[[T']]$$

- Pour chaque symbole de prédicat $$P$$ sur un type de base $$T$$, une fonction $$[[P]]$$ de $$[[T]]$$ vers {`true`, `false`}

- Pour chaque variable $$x : T$$ qui est libre dans une hypothèse, un élément $$[[x]] \in [[T]]$$

- Pour chaque symbole de relation binaire $$R$$ sur deux types de base $$T$$ et $$T'$$, une fonction $$[[R]]$$ de $$[[T]] \times [[T']]$$ vers {`true`, `false`}

- Chaque connecteur s'interprète de manière "naturelle" (table de vérité, sens des quantificateurs)

- De telle sorte que **chaque hypothèse** s'évalue en `true` à travers cette "interprétation".

## Traduction de formules

**Modélisation** : Traduction d'une affirmation du langage naturel vers une formulation en calcul de prédicats

**Interprétation** : face à une formule de calcul des prédicats, il faut "comprendre" ce qu'elle dit.

On attribut un sens aux types, relation de base, et on doit être capable de faire la traduction depuis et vers le langage naturel.

### Exemple: Asterix

Un seul type de base: `P` personnes

Quelques prédicats: `G` Gaulois, `R` Romain, `B` Barde, `L` Légionnaire

Une relation binaire : `A` "est ami de"

"Tout personnage est romain ou gaulois" : $$\forall x : P, R(x) \vee G(x)$$

"Aucun personnage n'est à la fois romain et Gaulois" : $$\forall x : P, \sim (T(x) \wedge G(x))$$

"Tous les bardes sont gaulois" : $$\forall x : P, B(x) \rightarrow G(x)$$

"Tous les Gaulois ne sont pas bardes" : $$\sim (\forall x : P, G(x) \rightarrow B(x))$$

"Aucun Gaulois n'est barde" : $$\forall x : P, G(x) \rightarrow \sim B(x)$$ ou $$\forall x : P, \sim (G(x) \wedge B(x))$$

"Il existe un Gaulois qui n'est que des amis Gaulois" : $$\exists x : P, G(x) \wedge (\forall y: P, A(x,y) \rightarrow G(y))$$

## Existence et unicité

En Mathématiques on utilise parfois un quantificateur $$\exists!$$ : "Il existe un et un seul"

En calcul des prédicats **on n'a pas de tel quantificateur**, mais on peut le simuler si on a un symbole d'égalité :

"Il existe un x qui a la propriété P et tel que tout y qui a la propriété P est égal à x".
$$\exists x : T, (P(x) \wedge \forall y : T, P(y) \rightarrow y = x)$$

"Il existe **au plus un** x qui a la propriété p"
$$\forall x : P, \forall y : P, P(x) \rightarrow P(y) \rightarrow x = y$$

### Vers le langage naturel

Souvent, pour interpréter une formule complexe en langage naturel, il est bon de travailler sous-formule par sous-formule.

$$\forall x : P, G(x) \rightarrow \sim(\forall y : P, G(y) \rightarrow A(x,y))$$

"S'il est gaulois, alors y est un ami de x" : $$G(y) \rightarrow A(x,y)$$

"Tout gaulois est un ami de x" : $$\forall y : P, G(y) \rightarrow A(x,y))$$

"Il n'estpas vrai que tout Gaulois est un ami de x" : 
$$\sim(\forall y : P, G(y) \rightarrow A(x,y))$$

"Si x est Gaulois, alors il n'est pas vrai que tout Gaulois est un ami de x" : 
$$G(x) \rightarrow \sim(\forall y : P, G(y) \rightarrow A(x,y))$$

"Pour tout Gaulois, il n'est pas vrai que tous Gaulois est son ami" (aucun Gaulois n'a tous les Gaulois pour amis).

## Une difficulté: Quantification et prédicat

On a souent besoin de dire quelque chose comme "tous les X sont des Y", ou "il existe un X qui est un Y"..

Mais parfois X et Y ne sont pas des types de base mais définis par des prédicats sur le même type de base.

Après un quantificateur **universel** la condition devient la prémisse d'une implication ($$\rightarrow$$). Pour un quantificateur **existenciel**, c'est une branche d'une conjonction ($$\wedge$$)

"Tous les bardes sont gaulois" : $$\forall x : P, B(x) \rightarrow G(x)$$

"Il existe un légionnaire Gaulois" : $$\exists x : P, L(x) \wedge G(x)$$

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
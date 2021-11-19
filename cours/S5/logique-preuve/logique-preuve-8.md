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



<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
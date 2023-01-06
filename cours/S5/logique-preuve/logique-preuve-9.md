# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

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

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
# Techniques Algorithmiques et Programmation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Techniques algo prog](index.md)

# Partition d'un entier

## 1. Le problème

On s'intéresse à toutes les façons de partitionner un ensemble d'éléments indistinguables.

Par exempls, il a 5 façons de partager un ensemble de 4 billes :
4

3+1

2+2

2+1+1

1+1+1+1

||||||||||||||
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|$$n$$|1|2|3|4|5|6|7|8|9|10|...|100|
|$$p(n)$$|1|2|3|5|7|11|15|22|30|42|...|190 569 292|`

**Partition d'un entier**
> **Instance** : Un entier n > 0.
> **Question** : Calculer $$p(n)$$, le nombre de partitions de $$n$$, soit le nombre de façons de partitionner un ensemble de $$n$$ éléments indistinguables en sous-ensembles non vides.

## 2. Formule asymptotique

Il n'y a pas de formule close pour la partition d'un entier. Il existe seulement des formules asymptotiques.

$$p(n) \sim \frac{1}{4n\sqrt{3}}.exp(\pi\sqrt{2n/3})\approx 13^{\sqrt{n}}\approx 2^{3.7\sqrt{n}}$$

## 3. Approche exhaustive

> Générer toutes les partitions puis de les compter.

Pour partitionner un ensemble de billes, on peut découper cet alignement en intervalles.

3+2+1+1

001011

0 : non séparation
1 : séparation

Cette approche reste **inefficace**. On va examiner $$2^{n-1}$$ découpages.

## 4. Récurrence

_____

[1 - Introdution](algo-prog-1.md)

--

[2 - Voyageur de commerce](#)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
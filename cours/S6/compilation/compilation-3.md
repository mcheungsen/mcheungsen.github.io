# Compilation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Compilation](index.md)

# Analyse syntaxique (*parsing*)

## 1. Les limites de l'analyse lexicale

Il est difficile de réaliser un analyseur pour des expressions enchâssées à l'aide de `JFlex`.

`JFlex` ne fait que traduire des expressions régulières en automates à nombre fini d'états et y associe du code `Java`. Il n'est pas conçu pour réaliser un analyseur syntaxique qui reconnait un langage qui ne serait pas rationnel.

### Quelques propriétés des langages rationnels

Propriétés de cloture des langages rationnels :
- Intersection
- Union
- Complémentation
- Concaténation

Les langages rationnels ne sont pas clos par inclusion.

## 2. Les sytèmes de réécriture

Un système de réécriture est définit par le quadruplet ($$\sum, N, R, S$$) où :
- **Symboles terminaux** : $$\sum$$ alphabet fini
- **Symboles non terminaux** : $$N$$ ensemble fini de symboles
- **Le termine initial de la grammaire** : $$S$$ élément distingué de $$N$$
- **Relation de réécriture** : $$\R$$ $$\{(\alpha,\beta)\}$$, où $$\alpha \in (\sum \cup N)^* - \{\epsilon\}$$, et $$\{\epsilon\} \in (\sum \cup N)^*$$. On écrit $$\alpha \rightarrow \beta$$

> **Grammaire formelle** : permet de définir un langage sur le monoïde libre $$(\sum)^*$$.

> **Systtème de réécriture** : permet de définir les éléments du langage par une opération qui fait intervenir une succession de réécriture depuis le terme initial jusqu'aux chaînes de lettres. Il s'agit donc d'une **grammaire**.

### Dérivation

> **Loi de compositions internes** : Étant donné un ensemble $$M$$ : LCI sur $$M$$ est une application $$M$$ x $$$M$$ dans $$M$$.

>**Monoïde** : Un monoïde est un couple ($$M,a$$) où $$a$$ est une lci sur $$M$$ qui est **associative** et qui possède un **élément neutre**.

On définit une relation $$\Rightarrow$$ entre deux éléments du monoïde libre $$(\sum \cup N)^*$$.

$$\forall µ_1, \alpha, µ_2, \beta \in (\sum \cup N)^*, µ_1\alpha µ_2\Rightarrow µ_1\beta µ_2$$

Vérifiée s'il existe une règle $$\alpha \rightarrow \beta$$ de $$R$$.

On définit une **dérivation** par la fermeture réfléxive-transitive $$\Rightarrow^*$$

**Fermeture réflexive-transitive d'une relation R, noté $$R^*$$** se définit : $$\forall x,y \in E, xR^*y$$ si :
- 1- $$\forall x \in E, xR^*x$$
- 2- $$\forall x,y,z \in E, xRy, yrz \Rightarrow xR^*z$$

Tout élément se dérive vers lui-même (*réflexivité*) et un élément $$x$$ se dérive vers un élément $$z$$ s'il dérive vers un élément $$y$$ qui se dérive vers $$z$$ (*transitivité*).

### Langage engendré par une grammaire

> **Langage engendré par la grammaire G, noté $$\mathcal{L}_G$$** : ensemble de tous les mots qui se dérivent de l'élément initial.

$$\mathcal{L}_G = \{\alpha \in (\sum)^* : S \Rightarrow^* \alpha\}$$

### Types de grammaires

**Grammaires rationnelles** : 

$$A \rightarrow a$$

$$A \rightarrow aB$$

avec $$A,B \in N$$ et $$a \in \sum$$

**Grammaires indépendantes du contexte** : Grammaires qui n'ont qu'un élément de $$N$$. La dérivation $$µ_1\alpha µ_2 \Rightarrow µ_1\beta µ_2$$ est vérifiée si la règle $$\alpha \rightarrow \beta$$ appartient à $$R$$; ceci indépendamment du contexte de $$\alpha$$ (indépendamment de $$µ_1$$ ou de $$µ_2$$).

**Grammaires contextuelles** : $$x\alpha y \rightarrow x\beta y$$ et pour lesquelles la séquence $$\alpha$$ n'est pas plus longue que la séquence $$\beta$$. Une dérivation $$µ_1\alpha µ_2 \Rightarrow µ_1\beta µ_2$$ est vérifiée étant connus $$µ_1$$ ou $$µ_2$$.

**Grammaires non contraintes / récursivement énumérables** : seule contrainte = avoir une séquence non vide en partie gauche

## 3.
## 4.
## 5.
## 6.
## 7.
____

[2 - Analyse lexicale (*tokenization*)](compilation-2.md)

--

[4 - Types, vérification de type)](compilation-4.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

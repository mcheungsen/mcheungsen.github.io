# Techniques Algorithmiques et Programmation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Techniques algo prog](index.md)

# Introduction

## 1. Tchisla
> But du jeu : Trouver une expression arithmétique égale à un entier $$n > 0$$, en utilisant uniquement un chiffre $$c \in [1,9]$$. L'expression ne comporte que : $$c + - * / \wedge  \sqrt ! ( )$$

> Trouver l'expression comportant le moins de fois le chiffre c. $$f_c(n)$$


|$$n$$| |1|2|3|4|5|6|7|8|9|
|-|-|-|-|-|-|-|-|-|-|-|
|$$f_1(n)$$| |1|2|3|4|4|3|4|5|4|3

|$$f_1(n)$$| |1|2|3|4|5|6|7|8|9|10|
|----------|-|-|-|-|-|-|-|-|-|-|-|
|$$n$$||1|2|3|4|8|15|28|41|95|173|

On ne voit ici aucun pattern qui puisse à aider à construire un algorithme.

Il y a de plus une infinité de valeurs de $$n$$ pous lesquelles $$f_(n)=2$$ à cause de "!". *11 11! 11!! 11!!!*

Il est de plus difficile de trouver une expression pour certains nombres. $$f_6(27)=4$$
Il peut ne pas y avoir de formules directes, de **formule close**.

> **Formule Close** : formule arithmétique comportant un nombre fini d'opérations (arithmétiques) liée aux paramètres. Une somme ou produit infini ne constitue pas une formule close.

> **Algorithme** : procédé automatique et systématique de calcul donnant un résultat, c'est-à-dire une sortie, à chaque entrée d'un problème donné.

> **Problème** : Description des instances et des sorties attendues, c'est-à-dire la relation entre entrées et sorties.

Le problème peut être formalisé ainsi, où $$\Sigma = {c,+,-,*,/,\sqrt,(,) }$$

**instance** : Un entier $$n>0$$ et un chiffre $$c \in [1,9]$$

**Question** : Trouver une expression arithmétique de valeur $$n$$ composée des symboles de $$\Sigma$$ comportant le moins de fois le chiffre $$c$$.

> On parle de problème indécidable (*incalculable*) lorsqu'il n'y a pas d'algorithme permettant de le résoudre.

## 2. Des problèmes indécidables
> Un système d'équations diophantiennes polynomiales avec au plus 11 variables est indécidable.

Problèmes indécidables $$\neq$$ problèmes sans solution

Une équation diophantienne est une instance, possèdant ou non une solution entière. Le problème est de trouver une procédure systématique qui détermine s'il existe ou non de solution entière.

### Prouver qu'un algorithme n'existe pas
**Instance** : Un programme $$f$$ avec une entrée $$x$$

**Question** : Est-ce que l'évaluation de $$f(x)$$ s'arrête ou boucle indéfiniment ?


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
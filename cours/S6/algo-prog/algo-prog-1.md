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

Chaque programme sur une entrée donnée s'arrête au bout d'un moment ou boucle indéfiniment.

Seulement, il n'existe pas d'algorithme qui à coup sûr peut déterminer pour tout programme $$f$$ et entrée $$x$$, si l'évaluation $$f(x)$$ s'arrête.

**Montrer qu'un problème n'a pas d'algorithme**

On suppose qu'on dispose d'une fonction `halte(f,x)` permettant de dire si une fonction `f` de type `void f(int x)` s'arrête ou boucle.

```C
bool halte(void (*f)(int), int);

void loop(int x){
    if(halte(loop, x)) for(;;);
}
```

> `for(;;)` permet de boucle indéfiniment comme `while(true)` ou `while(1)`

> en C, les fonctions sont vu comme des pointeurs représentant l'adresse mémoire où elles sont stockées et codées. Le passage en paramètre peut donc se faire avec ou sans `&`. `halte(loop,x)` ou `halte($loop,x)`

Ici, `loop(0)` se terminera si `halte(loop,0)` est faux, c'est-à-dire s'il boucle. Il y a donc une contradiction. `halte(f,x)` ne peut dont pas être correcte.

**Le problème de la Halte n'a pas d'algorithme. C'est donc un problème indécidable.**

## 3. Approche exhaustive
On n'a pas formellement montré que le calcul de $$f_c(n)$$ ne possède pas de formule close, ni que le problème Tchisla est indécidable.

Une des difficultés est que **la taille de l'expression arithmétique n'est pas forcément bornée** par une fonction de $$n$$ ou de $$f_c(n)$$. 

$$n = 3!!!!!$$

Il peut donc y avoir des nombres gigantesques dont les expressions pourraient comporter chacun un nombre d'opérateurs unaires bien plus grand que n.

**Problème de l'évaluation**. 
S'amener à produire des nombres intermédiaires de taille titanesques impossibles à calculer alors que $$n$$ n'est pas grand. Il n'est pas clair que l'arithmétique entière suffise

$$n=(\sqrt{}\sqrt{} \sqrt{}3)^{3!!/3!} = 14348907$$

**Tchisla 2**

**Instance** : Un entier $$n>0$$ et un chiffre $$c \in {1,...,9}$$

**Question** : Trouver une expression arithmétique de valeur $$n$$ composée des symboles de $$\sum$$ comportant le moins de symboles possibles.

Pour résoudre Tchisla2, on peut appliquer l'algorithme suivant :

> **Principe** : On liste toutes les expressions par taille croissante, et on s'arrête à la première expression valide dont la valeur est égale à $$n$$.

> **Recherche exhaustive / Algorithme Brute-force** : Consiste à essayer tous les résultats possibles, lister tous les résultats envisageables et vérifier à chaque fois si c'est une solution ou non.

On code une expression de taille k, par un tableau de k entiers avec le codage suivant :

c + - * / ^ $$\sqrt{}$$ ! ( )

0 1 2 3 4 5 6 7 8 9

|$$c$$|$$+$$|$$-$$|$$*$$|$$/$$|^|$$\sqrt{}$$|!|(|)|
|-----|-----|-----|-----|-----|-|-----------|-|-|-|
|0|1|2|3|4|5|6|7|8|9|

`(c+c)/c` sera codé `8, 0, 1, 0, 9, 4, 0`

**non valide mais existe** : `(c+c)/+` codé en `8, 0, 1, 0, 9, 4, 1`

> **Algorithme d'incrémentation** : Au départ on se positionne sur le dernier chiffre, celui des unités. On essaye d'incrémenter le chiffre sous la position courante. S'il 'y a pas de retenue on s'arrête. Sinon le chiffre courant passe à 0 et on recommence avec le chiffre précédent.

`bool Next(int T[], int k)` : Incrémente le compteur qui renvoie `true` si tout s'est bien passé ou `false` lorsque le compteur a dépassé sa capacité maximum. (s'il est revenu à 0......0.).

`int Eval(int T[], int k, int c)` : Renvoie la valeur n de l'expression T de taille k dans laquelle le code 0 correspond au chiffre.

```C
int tchisla2(int c,int n){
    int T[2*n+3]; // n=(c+...+c)/c, soit 2n+3 symboles
    for(int k=1;;k++){ // une condition vide est toujours vraie
        T[k-1]=0; // initialisation du dernier chiffre
        do if(Eval(T,k,c)==n) return k; // fin si T s’évalue à n
        while(Next(T,k)); // passe à l’expression suivante
    }
}
```

## 4. Rappels sur la complexité

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
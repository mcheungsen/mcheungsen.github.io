# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Logique Minimale
La logique minimale est assez pauvre : il n'y a que l'implication $$\rightarrow$$.

Tout séquent prouvable est nécessairement un séquent valide. 
Il est possible qu'un séquent valide n'admet pas de preuve.

## Les arbres de preuves
Les preuve squ'on considère sont systématiquement sous forme d'arbres. On n'utilise aucune règle dérivée.
Chaque noeud de l'arbre correspond à l'utilisation d'une règle de la logique formelle :
- Feuilles : règles **d'hypothèse**
- Noeuds unaires : **Introduction de l'implication**
- Noeuds binaire : **Modus Ponens**

Chaque noeud porte un séquent. Les sous-arbre est un arbres de preuve correct du même séquent.

## Règle de raisonnement
Ecrire avec un certain séquent en dessous d'une barre. Métavariable : $$A, B, \Gamma$$

$$\frac{Obligation de preuve}{Séquent à prouver}regle$$

$$\frac{\Gamma \vdash A \rightarrow B; \Gamma \vdash A}{\Gamma \vdash B}mp$$

**Interpretation** : Pour rouve le séquent, il faut prouve chaque obligation de preuve.

**Formules** : $$P \rightarrow Q \rightarrow R$$
$$((P \rightarrow Q) \rightarrow P) \rightarrow P$$

**Séquents** : $$\vdash P \rightarrow P$$
$$P, P\rightarrow Q \vdash Q$$
$$P \rightarrow Q, Q \rightarrow R \vdash P \rightarrow R$$

## Règle d'hypothèse
Si la conclusion fait partie des hypothèses, alors on peut prouver en invoquant cette règle.

$$\frac{}{\Gamma \vdash A}hyp$$

## Règle du Modus Ponens
Diminution de l'implication. Si dans un même jeu d'hypothèses, on peut prouver à la fois $$A$$ et $$A \rightarrow B$$, alors on peut prouver $$B$$ avec le **modus ponens**

$$\frac{\Gamma \vdash A \rightarrow B; \Gamma \vdash A}{\Gamma \vdash B}mp$$

## Règle d'introduction de l'implication

$$\frac{\Gamma, P \vdash Q}{\Gamma \vdash P \rightarrow Q}{init}$$

## Cohérence de la logique minimale
Si un séquent $$\Gamma \vdash A$$ admet une preuve en logique minimale, alors ce séquent est valide.

Si non valide : pas de preuve

**Question de compéltude** : Il existe des segmens valides, non prouvables.

### Vérification d'une preuve
Vérifier que chaque noeud est une invocation correcte, ne reste pas d'obligation de preuve non prouvées.

## Présentation linéaire d'une preuve
$$P\rightarrow Q, Q \rightarrow R, P \vdash Q$$


>1. Supposons $$P \rightarrow Q$$
>2. Supposons $$Q \rightarrow R$$
>3. Supposons P
>4. Q [mp, 1, 3]
>5. R [mp, 2, 4]


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
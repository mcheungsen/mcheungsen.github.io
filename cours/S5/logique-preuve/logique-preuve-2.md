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

## Notion de règle dérivée
Seulement 3 règles pour la logique minimale.

Pourtant il y a d'autres règles que l'on souhaiterai utiliser correspondant à des schémas de raisonnement.

**Règle Dérivée** :

$$\frac{\Gamma \vdash A \rightarrow B \rightarrow C; \Gamma \vdash A; \Gamma \vdash B}{\Gamma \vdash C}mp'$$

$$\frac{\Gamma \vdash A1 \rightarrow A2 \rightarrow ... \rightarrow An \rightarrow B; \Gamma \vdash A1 ... \Gamma \vdash An}{\Gamma \vdash B}mp'$$

Simplification de l'écriture des preuves. Règle qui n'apporte rien du point de vue de la prouvabilité, mais qui permet de remplacer plusieurs étapes d'application des règles de base. S'apparente à l'utilisation de fonctions en programmation.

## Règle dérivée : L'Affaiblissement
$$\dfrac{\Gamma \vdash A}{\Gamma, \Delta \vdash A}{aff}$$

Si l'on peut prouver un séquent $$\Gamma \vdash A$$, on peut prouver sa conclsion en ajoutantt un ensemble arbitraire d'hypothèses.

Si on a prouvé $$\Gamma \vdash A$$ dans une branche et qu'on se retrouve devant un séquent de la forme $$\Gamma, \Delta \vdash A$$ dans une autre branche, on peut affaiblir.

## Justification des règles dérivées
On peut se passer des règles dérivées durant la construction de la preuve.

Pas une règle dérivée : Exhiber un séquent non prouvable qu'on pourrait prouver en utilisant cette règle.

Extension de la logique minimale :
- Implication
- négation
- contradiction

Contradiction : bottom. Une proposition toujours fausse.

$$\bot \rightarrow P, P \rightarrow \bot \rightarrow Q ...$$

Pour toute valuation $$v, v(\bot) = f$$

Conséquences : Il existe maintenant des séquents dont aucune valuation ne satisfait toutes les hypothèses
. Le séquent est dit contradictoire, il est automatiquement valide.

$$P \rightarrow Q, P, Q \rightarrow \bot \vdash R $$ 
est valide

## Le principe d'explosion *sequiter*
*Du faux il découle du vrai*

Elimination de la contradiction
$$ \dfrac{\Gamma \vdash \bot}{\Gamma \vdash A}{e} $$

**Nouvelle façon de prouver un séquent** : Montrer que ses hypothèses entrainent une contradiction

Grâce à la règle d'explosion, nous pouvons implanter un premier raisonnement par l'absurde.



<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
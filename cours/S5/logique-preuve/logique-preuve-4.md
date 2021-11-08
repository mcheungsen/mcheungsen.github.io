# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---
# Règles dérivées, Extension de la logique minimale

### Cohérence de la logique minimale

Si un séquent $$\Gamma \vdash A$$ admet une preuve en logique minimale, alors ce séquent est **valide**.

Sa contraposée est fausse. Si un séquent n'est pas valie, il n'admet pas de preuve.

On n'a pas énoncé la réciproque qui affirmerait que tout séquent valide est prouvable. **Il existe des séquents valides qui ne sont pas prouvables.**

### Vérification d'une preuve

Vérifier que chaque noeud est une invocation correcte d'une des règles de raisonnement, et qu'il ne reste pas d'obligations de preuve non prouvées.

## Règles dérivées
### Notion de règle dérivée
3 Règles simples pour la logique minimale :
- Modus Ponens
- Introduction de l'implication
- Hypothèse

Il y a des règles que l'on aimerait pouvoir utiliser, simplifiant l'utilisation d'un séquent. Il existe donc les **règles dérivées**.

**Règle dérivée** : Règle de raisonnement telle que tout séquent prouvable en utilisant les règles dérivées, est également prouvable en utilisant seulement les règles de base.

### Modus Ponens Généralisé
On peut utiliser plusieurs Modus ponens en une seule et même ligne. 

$$\frac{\Gamma \vdash A \rightarrow B \rightarrow C  ;\Gamma \vdash A; \Gamma \vdash B}{\Gamma \vdash C}{mp'}$$

### L'affaiblissement
*Si on peut prouver quelque chose avec certaines hypothèses, on peut toujours prouver la même chose en ajoutant des hypothèses.*

$$\frac{\Gamma \vdash A}{\Gamma, \Delta \vdash A}{aff}$$


### Justification des règles dérivées
Construire la preuve sans la règle dérivée. On peut se passer de la règle dérivée.

**Justifier que ce n'est pas une règle dérivée :** Exhiber un séquent non prouvable qu'on aimerait prouver en utilisant cette règle. On trouve un séquent **non valide** qu'on pourrait prouver avec une telle règle.

## Contradiction $$\bot$$

Extension de la logique minimale.

**Valuation** : $$v(\bot) = f$$
 
 Ainsi, $$\bot$$ est une variable propositionnelle qui serait toujours fausse.

 Il existe maintenant des séquent dont aucune valuation ne satisfait toutes les hypothèses : Un séquent **contradictoire**, et il est automatiquement **valide**.
 $$P \rightarrow Q, P, Q \rightarrow \bot \vdash R $$ 
 est valide : aucune valuation ne peut rendre vraies simultanément les trois hypothèses.

 ### Ex falso quodlibet / Sequitur / Elimination de la contradiction
 *Du faux, il découle ce que l'on veut*

 $$\frac{\Gamma \vdash \bot}{\Gamma \vdash A}{\bot _e}$$

 Prouver un séquent : Montrer que ses hypothèses entrainent une contradiction.

 ## Négation
 Connecteur ~

$$\sim A$$ 
est considéré comme une abbrévation pour 
$$ A \rightarrow \bot$$
.

**Nouvelle logique** : Logique minimale avec contradiction.

## Règles dérivées $$\sim / \bot$$

### Expansion de la macro ~
$$\frac{\Gamma \vdash A\rightarrow \bot}{\Gamma \vdash \sim A}{\sim _{exp}}$$

### Introduction de la négation
$$\frac{\Gamma, A \vdash \bot}{\Gamma \vdash \sim A}{\sim _i}$$

### Contraposée
$$\frac{\Gamma \vdash A \rightarrow B}{\Gamma \vdash \sim B \rightarrow \sim A}{contraposée}$$

### Preuve par l'absurde
$$\frac{\Gamma \vdash A ; \Gamma \vdash \sim A}{\Gamma \vdash B}{abs}$$

## Preuves en logique minimale avec contradiction

L'apparation de la contradiction et du symbole de négation complique la recherche de preuve.

Il faut se poser la question : *Est-ce que les hypothèses sont contradictoires ?*

Si c'est le cas, On peut utiliser **l'élimination de la contradiction** et continuer. Si ce n'est pas le cas, cette règle conduira à un séquent non valide, donc non prouvable.

Quand on cherche une preuve en arbre, si on envisage d'utiliser une règle donnée, il faut se demander si le sobligations de preuve sont bien des séquents valides. Si ce n'est pas le cas, on est en train de faire fausse route.



 


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
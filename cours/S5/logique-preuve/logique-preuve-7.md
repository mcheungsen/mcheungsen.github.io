# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Logique classique
La logique propositionnelle intuitionniste ne permet pas de rouver tous les séquents.

**La logique classique s'obtient en ajoutant à la logique intuitionniste la règle du tiers exclu**

$$\frac{}{\Gamma \vdash A \vee \sim A}{exm}$$

### Logique classique vs intuitionniste
 
Les formules et les séquents sont les mêmes.
Le changement se fait au niveau de **ce qu'on peut prouver**. La logique classique a une règle d'inférence de plus.

La logique de `coq` est par défaut intuitionniste. (Bibliothèque `classical` pour passer en classique)

### Notations de jugements

"Le séquent $$\Gamma \vdash A$$ est valide" : $$\Gamma \models A $$

"Le séquent $$\Gamma \vdash A$$ est prouvable en logique intuitionniste" : $$\Gamma \vdash_J A$$

"Le séquent $$\Gamma \vdash A$$ est prouvable en logique classique" : $$\Gamma \vdash_K A$$

"A et B on la même table de vérité" : $$A \equiv B, A \equiv_J B, A \equiv_K B$$

#### Double négation en logique classique
En logique classique on peut supprimer la double négation.

#### Formule de Peirce
$$((P \rightarrow Q) \rightarrow P) \rightarrow P$$

On a prouvé (TD négation) $$\vdash \sim \sim F$$

On prouve $$\vdash F$$ en classique (tableau).

#### Règles de Morgan
Règle de Morgan non prouvable en logique intuitionniste : $$\sim (A \wedge B) \equiv \sim A \vee \sim B$$

L'implication $$(\sim A \vee \sim B) \rightarrow \sim(A \wedge B)$$ est facile (en intuitionniste).

### Théorèmes sur la logique classique

Les méta-théorèmes de cohérence, de substituion uniforme, de remplacement restent valables en logique classique.

On admet le théorème essentiel : La logique propositionnelle classique est **complète** (tout séquent valide est prouvable).

### Quelqus règles dérivées supplémentaires

(valables seulement en logique classique)

Elimination du tiers exclu :

$$\frac{\Gamma, A \vdash B; \Gamma, \sim A \vdash B}{\Gamma \vdash B}{exm_e}$$

Absurde classique :

$$\frac{\Gamma, \sim A \vdash \bot }{\Gamma \vdash A}{abs_k}$$

Elimination de la double négation :

$$\frac{}{\sim \sim A \vdash A}{dn_e}$$

## Complétude de la logique classique
Toute tautologie F est prouvable. ($$\vdash_K F$$)

On peut faire un tier exclu sur : $$\vdash (P \rightarrow Q) \vee (Q \rightarrow P)$$

Le tier exclu est nécesaire pour "briser une symétrie".

## Lien entre logiques intuitionniste et classique

Tout séquent prouvable en logique intuitionniste est prouvable en logique classique.

**Théorème de Glivenko** : Le séquent $$\vdash A$$ est prouvable si et seulement si $$\vdash \sim \sim A$$ est prouvable en logique intuitionniste. 

## Prouver des séquents en logique classique

Stratégie : Faire des tiers exclus sur toutes les variables. (pour k variables -> 2^k branches)

Penser au brisage de symétries.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
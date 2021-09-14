# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/licence3/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Vocabulaire de la logique

### Propositions
Une proposition est un énoncé susceptible d'être démontré ou réfuté, pour le quel il fait sens de parler de vérité.

*42 est un nombre premier*
*Le langage C comporte plusieurs failles de sécurité*

### Logique minimale
Formules atomiques et implication comme seul connecteur.

$(P \rightarrow Q \rightarrow R)\rightarrow(Q\rightarrow P \rightarrow R)$ 

### Logiques propositionnelles
On ajoute $\bot, \neg, \wedge, \vee, \iff $

$P \vee \bot \rightarrow P$

### Séquents
**Séquent** : Structure composée :
- d'un **contexte** formé d'un ensemble $\Gamma$ de propositions appelés **prémisses** ou **hypothèses**
- d'une proposition $A$ appelée **conclusion** du séquent

$H$<sub>1</sub>$, H$<sub>2</sub>$, ... , H$<sub>n</sub> $\vdash A$

### Validité d'un séquent
Un séquent est valide si, chaque fois que toutes les hypothèses sont vraies, alors la conclusion est vraie.
# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---
## Incomplétude de la logique minimale

### Logique Minimale (avec ou sans négation)
Assez pauvre en termes de ce qu'elle peut exprimer.

*Tout séquent prouvable est nécessairement un séquent valide.*

Regardons la réciproque. Est-ce qu'un séquent valide est forcément prouvable ? 
*Question de la complétude*

**La logique n'est pas complète.**

### La formule de Peirce
$$((P \rightarrow Q) \rightarrow P) \rightarrow P$$
Tautologie. Donc le séquent $$\vdash ((P \rightarrow Q) \rightarrow P) \rightarrow P$$ est valide.

**Théorème** : Le séquent valide $$\vdash ((P \rightarrow Q) \rightarrow P) \rightarrow P$$ n'admet pas de preuve en logique minimale.

Ce théorème assur donc que certains séquents "vrais" ne peuvent pas être prouvés.

### Etapes de la démonstration
La démonstration qu'on donne passe par plusieurs étapes où on s'intéresse aux propriétés des arbres de preuves.
- Lemme des hypothèses
- Elimination des coupures
- Lemme de la sous-formule
- Non-prouvabilité du séquent Peirce

## Lemme des hypothèses
Dans tout arbre de preuve de la logique minimale, l'ensemble des hypothèses est **croissant** le long des branches. Toute hypothèse présente dans le séquent d'un noeud, est présente dans chaque noeud du sous-arbre enraciné en ce noeud.

### Préservation locale des hypothèses

Dans tout arbre de preuve correct, dans le séquent de chaque noeud autre que la racine, on trouve au moins toutes les hypothèses du séquent parent de ce noeud.

*Preuve : par étude de cas*

### Propriété de récurrence

Dans tout arbre de preuve correct de taille au plus, dans le séquent de chaque noeud, on trouve au moins toutes les hypothèses du séquent de la racine de l'arbre.

*Preuve par récurrence*

## Notion de coupure
**Coupure** : Configuration de deux noeuds :
- Un noeud s : $$\Gamma \vdash B$$ utilisant la rège du modus ponens
- Un noeud t : $$\Gamma \vdash A \rightarrow B$$, fils gauche de s, utilisant la règle d'introduction de l'implication.

### Preuves sans coupures
**Théorème d'élimination des coupures** : Tout séquent qui admet une preuve, admet une preuve sans coupures. 


## Notion de sous-formule
Sous-formules de $$(P \rightarrow Q)\rightarrow R \rightarrow S$$ sont :
- $$P, Q, R, S$$
- $$P\rightarrow Q$$
- $$R \rightarrow S$$
- $$(P \rightarrow Q)\rightarrow R \rightarrow S$$

**Corollaire** : Dans une preuve sans coupures de la logique minimale, toutes les formules qui apparaissent sont des sous-formules du séquent à la racine de l'arbre.

*Preuve : réucurrence sur la taille de l'arbre*

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
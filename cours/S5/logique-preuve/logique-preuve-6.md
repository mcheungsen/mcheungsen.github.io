# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

# Logique propositionnelle (intuitionniste)

## Extension de la logique : Conjonction et disjonction

Chaque variable propositionnelle définit une formule atomique.

Le symbole $$\bot$$ définit une formule atomique

Si A et B sont deux formules,
 - $$A \rightarrow B$$ 
 est une formule ("A implique B")
 - $$A \wedge B$$ 
 est une formule ("A et B")
 - $$A \vee B $$ 
 est une formule ("A ou B")

$$\sim A$$ est un raccourci pour $$A \rightarrow \bot$$

 $$(A \leftrightarrow B)$$ est un raccourci pour $$(A \rightarrow B) \wedge (B \rightarrow A)$$ ("A est équivalent à B").

 ## Conjonction

 |A|B| |$$A \wedge B$$|
 |-|-|-|--------------|
 |v|v||v|
 |v|f||f|
 |f|v||f|
 |f|f||f|

 $$A \wedge B$$ est vraie seulement si A et B sont vraies.

 ### Règle D'introduction

 $$\frac{\Gamma \vdash A; \Gamma \vdash B}{\Gamma \vdash A \wedge B}{\wedge _i}$$

### Règle d'élimination

Il faut une règle pour exploiter une hypothèse de la forme 
$$A \wedge B$$

Tout ce qui peut être prouvé avec A et B comme hypothèse, peut être déduit de 
$$A \wedge B$$

$$\frac{\Gamma \vdash A \wedge B; \Gamma, A, B\vdash C}{\Gamma \vdash C}{\wedge _e}$$

*exemple $$P \rightarrow (Q \wedge R) \vdash (P \rightarrow Q) \wedge ( P \rightarrow R)$$*

### Règles dérivées

**Commutativité :**
$$\frac{\Gamma \vdash A \wedge B}{\Gamma \vdash B \wedge A}$$

**Elimination alternative :**
$$\frac{\Gamma, A, B \vdash C}{\Gamma, A \wedge B \vdash C}{\wedge '_e}$$

## Disjonction v

 |A|B| |$$A \vee B$$|
 |-|-|-|------------|
 |v|v||v|
 |v|f||v|
 |f|v||v|
 |f|f||f|

 $$A \vee B$$
 est fausse si A et B sont toutes les deux fausses.

 ### Règle d'introduction

 Deux façons pour prouver $$A \vee B$$ : 
 - En prouvant A
 - En prouvant B

 $$\frac{\Gamma \vdash A}{\Gamma \vdash A \vee B}{V _{i,1}}$$

 $$\frac{\Gamma \vdash B}{\Gamma \vdash A \vee B}{V _{i,2}}$$

 ### Règle d'élimination

 Etre capable de prouver un formule de la forme $$A \vee B$$ ou qu'on en ait comme hypothèse

 **Raisonnement par cas :** Deux cas possibles, A ou B. Si dans chaque cas on arrive à prouver C alors on peut en déduire C.

 $$\frac{\Gamma \vdash A \vee B; \Gamma, A \vdash C; \Gamma, B \vdash C}{\Gamma \vdash C}{V _e}$$

 *Exemple : $$P \rightarrow R, Q \rightarrow R \vdash (P \vee Q) \rightarrow R$$*

 ## Remarques sur la recherche de preuves

**Conjonction :** Pas trop de pièges à éviter

**Disjonction :** Lorsqu'on utilise une des deux règles d'introduction, on fait un choix. On s'engage à prouver l'une des sous-formules. Parfois ni l'un ni l'autre n'est possible sans ajouter d'hypothèses supplémentaires. **Il est alors obligatoire de commencer par travailler sur les hypothèses sous peine d'arriver à un séquent non prouvable.**

$$P \vee Q, Q \rightarrow R, P \rightarrow S \vdash R \vee S$$
Dans ce séquent, on aurait l'intuition de faire une introduction gauche ou droite.  On se retrouverait alors avec soit :
$$P \vee Q, Q \rightarrow R, P \rightarrow S \vdash R$$

$$P \vee Q, Q \rightarrow R, P \rightarrow S \vdash S$$

Ces deux séquents sont invalides, et ne peuvent pas être prouvés.

**La solution est de commencer par une élimination.**

## Logique propositionnelle intuitionniste

- Règle d'hypothèse, Elimination de la contradiction $$\bot_e$$
- Règle sur l'implication : Modus Ponens $$mp$$, introduction de l'implication $$\rightarrow_i$$
- Règle sur la conjonction : Elimination $$\wedge_e$$, introduction $$\wedge_i$$
- Règle sur la disjonction : élimination, deux règles d'introduction $$\vee_{i,1} \vee_{i,2}$$

## Notations de jugements

Le séquent $$\Gamma \vdash A$$ est valide
$$\Gamma \models A$$

Le séquent est prouvable en logique intuitionniste
$$\Gamma \vdash J A$$

Le séquent $$\vdash A \leftrightarrow A$$ est prouvable en logique intuitionniste
$$A \equiv j B$$

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
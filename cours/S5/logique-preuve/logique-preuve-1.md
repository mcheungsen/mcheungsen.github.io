# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Vocabulaire de la logique

### Propositions
Une proposition est un énoncé susceptible d'être démontré ou réfuté, pour le quel il fait sens de parler de vérité.

*42 est un nombre premier*
*Le langage C comporte plusieurs failles de sécurité*

### Logique minimale
Formules atomiques et implication comme seul connecteur.

$$(P \rightarrow Q \rightarrow R)\rightarrow(Q\rightarrow P \rightarrow R)$$

### Logiques propositionnelles
On ajoute $$\bot, \neg, \wedge, \vee, \iff $$

$$P \vee \bot \rightarrow P$$

### Séquents
**Séquent** : Structure composée :
- d'un **contexte** formé d'un ensemble $$\Gamma$$ de propositions appelés **prémisses** ou **hypothèses**
- d'une proposition $$A$$ appelée **conclusion** du séquent

$$H$$<sub>1</sub>$$, H$$<sub>2</sub>$$, ... , H$$<sub>n</sub> $$\vdash A$$

### Validité d'un séquent
Un séquent est valide si, chaque fois que toutes les hypothèses sont vraies, alors la conclusion est vraie.

### Notions de preuve
**preuve** : discours (plus ou moins symbolique, plus ou moins détaillé) dont l'objectif est de convaincre qu'une certaine **affirmation est vraie**.

Une preuve est adaptée selon le public.

*Une preuve sera écrite différemment si l'on s'adresse à des mathémathiciens ou des étudiants.*

**Preuve formelle** : On détaille suffisamment pour que la vérification de la preuve puisse être systématisée au point d'être confiée à une machine.

## Vérité et Preuve
Comment convaincre de la validité d'un séquent $$\Gamma \vdash A $$ ?

**Approche sémantique** : Définir la valeur de vérité de toute proposition, puis vérifier que chaque fois que toutes les hypothèses dans $$\Gamma$$ sont vraies, alors $$A$$ est vraie.

Vérification automatisable pour certaines logiques.
Les calculs cachent le contenu intuitif. Grande complexité

**Approche Syntaxique** : Définir ce qu'est une preuve de $$\Gamma \vdash A$$. On définit un langage pour les preuves, avec ses règles de correction, comme les langages de programmation. Une preuve devient un objet informatique, comme un programme.

Souvent incomplète. Permet de mieux comprendre le rôle des connecteurs et quentificateurs. Familiarité avec la programmation

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
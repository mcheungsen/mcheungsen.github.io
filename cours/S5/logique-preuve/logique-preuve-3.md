# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Utilisation de coq et coqide

### Preuves et automatisation
Il n'y a pas de méthode générale pour chercher la preuve.

Si on étend la logique considérée suffisamment pour pouvoir énoncer des propriétés comme celles dont on a besoin pour raisonner sur les programmes, on a des méta-théorèmes qui assurent qu'on ne peut pas écrire un programme qui réaliserait cette tâche seul.

Vérifier une preuve est plus facile et peut être automatisé si la preuve est dans un format approprié.

### Principe d'un assistant de preuve
Logiciel pour construire une preuve.

L'utilisateur énonce un futur théorème, un séquent.

Il entame une session interactive avec le logiciel, au cours de laquelle il choisit les arguments à utiliser, dans le but de construire une preuve de l'énoncé.

Une fois terminé, le logiciel vérifie que l'objet consturit est bien une preuve de l'énoncé proposé.

### Syntaxes coq
Les commandes se terminent par un point.

`Theorem` : énoncé d'un théorème, passe ensuite en mode "preuve"

`proof` : Optionnel, à mettre au début d'une preuve. Facilite la lecture

`Qed` : "CQFD". à la fin d'une preuve, vérifie le terme de preuve et le stocke sous le nom donné au théorème.

`Check` : affiche l'énoncé d'un théorème (le type d'un terme).

`Print` : Affiche e terme de preuve du théorème.

`Restart` : Relance la preuve à son début.

`Undo k` : revient k commandes en arrières

`Admitted` : Renonce à finir la preuve

______

`assumption` : Règle d'hypothèse, on cherche la conclusion du but parmis les hypothèses.

`intro` : Règle d'introduction, génère un nouveau but qui est la conclusion du but courant, avec la prémisse comme nouvelle hypothèse.

`apply` : Essaie d'appliquer une hypothèse; comme un modus ponens, mais il faut que l'implication utilisée soit dans les hypothèses.

`assert` : Règle de coupure, on fournit un nouveau but.

### Structuration des scripts de preuve

Structure les scripts en utilisant les puces ( - + * -- ++ **) quand une tactique engendre plus d'un sous-but. Indenter.

Quand on utilise assert pour engendre une nouvelle sous-preuve, il est également recommandé d'entourer la sous-preuve d'accolades, ou de l'indenter.

### Contradiction en coq

$$\bot$$ : `False`

`exfalso` remplace le but courant par `False` : Principe d'explosion

Si on se retrouve avec une hypothèse `h:False`, on peut prouver n'importe quel but avec `destruct h`.

`unfold not` : Remplace les négations par des implications dans le but.

`unfold not in h` : Remplace les négations par des implications dans les hypothèses.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
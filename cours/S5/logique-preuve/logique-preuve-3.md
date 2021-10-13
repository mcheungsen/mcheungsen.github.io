# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

## Cohérence de la logique minimale
**Théorème**: Si un séquent $$\Gamma \vdash A$$ admet une preuve en logique minimale, alors ce séquent est valide.

La réciproque n'est pas énoncée. Il existe des séquents valides qui ne sont pas prouvables.

## Vérification d'une preuve
Vérifier que chaque noeud est une invocation correcte d'une des règles de raisonnement, et qu'il ne reste pas d'obligations de preuve non prouvées.

## Notion de règle dérivée
3 règles simples pour la logique minimale, Facilitant les méta-raisonnements sur les preuves, qui sont très souvent par étude de cas sur la structure de l'arbre de preuve.

Pourtant il y a d'autres règles que l'on souhaiterai utiliser correspondant à des schémas de raisonnement.

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

## Négation

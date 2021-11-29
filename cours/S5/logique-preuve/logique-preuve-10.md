# Logique et Preuve


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Logique et Preuve](index.md)

---

# 29/11

## Quelques exemples

### Le théorèmes des 4 couleurs

Pour tout graphe qui peut etre dessiné dans le plan sans croisement d'arêtes, il est possible de "colorier" les sommets avec 4 couleurs de telle sorte que pour chaque arête, les deux extrémités recoivent des **couleurs différentes**.

### La conjecture de Kepler

On ne peut pas empiler des sphères (oranges) identiques, de manière plus dense que "ce que font les épiciers". Dans un plan hexagonal, laissant 26% de vide à cause des creux.

### Le projet `CompCert`

## Types inductifs en `Coq`

**Définition par induction / peuve par induction** : processus plus général que la "cimple" récurrence.

Des objets d'un certain type sont définis en fonction d'autres objets du même type mais **plus petits**.

Dans une preuve par induction, //TODO

### Le principe de récurrence

On considère une famille de propriétés $$P_0, P_1, ...$$, indexées par les entiers $$n \in \mathbf{N}$$

//...

`coq` propose un type `nat` pour les entiers naturels.

**Notations** : 
- `S n` désigne $$n+1$$
- `0` désigne 0

Le principe de récurrence s'exprime en `coq`

```
forall P: nat->Prop,
    P 0 -> (forall n:nat, P n -> P(s n))
    //...
```

`Coq` permet de définir de nouveaux types avec une syntace proche de `ocaml` : 

Liste d'entiers : 

```
inductive Nlist: Set :=
| nnil : NList
| ncons : nat -> Nlist -> Nlist
```

`nnil` est une liste vide.

A partir de n'importe quel entier $$n$$ et de n'importe quelle liste L on obtient une nouvelle liste avec le terme `ncons n L`

Toute liste est soit de la première forme (liste vide) soit de la deuxième forme.

### Principe d'induction

A chaque définition d'un tye inductif, `coq` associe automatiquement un principe d'induction : Un théorème qui permet de monrer qu'un prédicat est satisfait par chaque valeur du type défini, en se basant sur le fait que les valeurs "plus petites" satisfont aussi le prédicat.

### Écriture de programme en `Coq`

Le système n'accepte la définition d'une fonction que s'il peut vérifier que la fonction termine pour toutes valeurs des paramètres.

`Fixpoint` : Écriture de fonctions récursives. Possible que si les appels récursifs se font toujours sur des **sous-termes** du paramètre de départ.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
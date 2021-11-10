# Algorithmique des graphes


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Graphes](index.md)

---

## Graphes non orientés

Graphe **G** : *couple (V, E)*

`V` : ensemble non vide de sommets

`E` : ensemble d'arêtes.

*G = (V, E)  V = {a,b,c,d,e} E = {e1 = ab, e2 = ad, ...}*

**boucle** : Arête reliant un sommet à lui même.

**multi-arête** : Ensemble de plusieurs arêtes reliant deux mêmes sommets.

**Graphe simple** : Graphe sans boucle, ni arête multiple.

**Degré** $$deg_G(v)$$: Nombre de fois où le sommet est contenu dans une arête (boucle compte pour 2).

### Relations graphes non orientés

**Relation d'adjacence - Voisinage** $$\Gamma(v)$$ : voisinage de v. Voisins d'un sommet.

*$$\Gamma(S2)$$ = {S1, S2, S3, S4}*

**Relation d'incidence** : Arête e = uv est dite incidente aux sommets u et v. u et v sont incidents à e.

Deux arêtes e1 = uv et e2 = uw sont **voisines**, partagent un sommet.

**Ordre de G** $$n(G)$$ : nombre de sommets

**Taille de G** $$m(G)$$ : nombre d'arêtes

**degré maximum** $$\Delta(G)$$

**degré minimum** $$\delta(G)$$

-------

## Graphes orientés

**arc** : liaison orientée entre deux sommets.
L'arc uv est appelé arc **sortant** de u et **entrant** de v.

u est un **prédécesseur** de v.
v est un **successeur** de u.

**degré sortant** $$d^+(v)$$ : nombre d'arcs sortant d'un sommet v.

**degré entrant** $$d^-(v)$$ : nombre d'arcs entrants d'un sommet v.

ensemble des prédecesseurs de v $$\Gamma^-1$$

ensemble des successeurs $$\Gamma^+(v)$$

_____

## Étiquetahge

**Étiquette** : Nom d'un sommet.

**Étiquetage** : ensemble des étiquettes des sommets.

**Isomorphisme** : G1 et G2 sont égaux à un renommage des sommets près.

## Cheminement non orienté

### Chaine
**Chaine de G** : suite alternée de sommets et d'arêtes de G.

**Longueur** d'une chaine : nombre d'arêtes.

Chaine **élémentaire** : ne contient pas deux fois le même sommet.

### Cycle
**cycle** : Chaine dont les extrémités se confondent.

**Longueur** d'un cycle : nombre d'arêtes, et donc également de sommets.

cycle **élémentaire** : ne contient pas deux fois le même sommet à l'exeption de ses extrémites.

## Cheminement orienté
### Chemin
**Chemin** : suite alternée de sommets et d'arcs

**Longueur** d'un chemin : nombre d'arcs.

Chemin **simple** : ne contient pas deux fois le même arc.

Chemin **élémentaire** : ne contient pas deux fois le même sommet.

### Circuit
**circuit** : chemin dont les extrémités se confondent.

**longueur** d'un circuit : nombre d'arcs, et donc également de sommets.

circuit **élémentaire** : ne contient pas deux fois le même sommet à l'exception de ses ectrémités.

## Sous-graphes
Soit G un graphe de $$S \subseteq V(G).$$ Le sous-graphe de G induit par S noté $$G_S$$ est le graphe (S, E').

**Graphe partiel** : $$G' = (V(G),E') $$ avec $$E' \subseteq E$$. Il y a tous les sommets mais pas les arêtes.

## Connexité

**Graphe connexe** : Il existe une chaîne entre toute paire de sommets.

*Montrer qu'un graphe est Connexe : montrer qu'il existe un sommet v relié à tous les autres par au moins une chaîne.*

**Graphe fortement connexe** : il existe un chemin entre toute paire de sommets.

**Composante connexe** : sous-graphe induit maximal en nombre de sommets quii soit connexe.

**Composante fortement connexe** : sous-graphe induit macimel en nombre de sommets qui soit fortement connexe.

**Graphe k-connexe** : toute suppression d'au plus k-1 sommet ne déconnecte pas le graphe.

**Connectivité** d'un graphe G : plus grand entier k tel que G est k-connexe.

## Graphes classiques

**Graphe complet**  $$k_n$$ : graphe simple dans lequel tous les sommets sont reliés par une arête.

**Chaine** $$P_n$$: Graphe simple consituté d'une chaîne à n sommets.

**Cycle** $$C_n$$: graphe simple constitué d'un cycle à n sommets.

## Représentation des graphes
Matrice G : n sommets et m arêtes.

### Matrice d'adjacence
**Graphe non orienté** : Matrice de taille nxn représentant le **nombre d'arêtes** entre les sommets.

**Graphe orienté** : Matrice de taille nxn représentant le **nombre d'arcs du sommet i vers j**.

### Matrice d'incidence
**Graphe non orienté** : Matrice de taille nxm représentant le nombre d'incidences entre le sommet i et l'arête j.

1 : arête

2 : boucle

**Graphe orienté** : Matrice de taille nxm

-1 : le sommet i est l'origine de l'arc

1 : le sommet i est la destination de l'arc.

0 : aucune incidence. ou boucle.

**Liste d'adjacence** :

a : a,b

b : a,c,d

...


## Théorèmes

Nombre maximum d'arêtes dans un graphe simple : $$\frac{n \times (n-1)}{2}$$

La somme des degrés d'un graphe non orienté est paire et égale à deux fois le nombre d'arêtes.

Le nombre de sommets de degré impair dans un graphe non orienté est pair.

Dans un graphe orienté, la somme des degrés entrants est égale à la somme des degrés sortants et au nombre d'arcs.

Dans tout gtaphe simple ayant au moins deux sommets, il existe au moins deux sommets de même degré.


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
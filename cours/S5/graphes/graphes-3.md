# Algorithmique des graphes


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Graphes](index.md)

---

## Parcours en profondeur
On examine les sommets du graphe en partant d'un sommet s. Tant que c'est possible on "descend" dans le graphe de voisin en voisin. Sinon on remonte au sommet ayant un voisin non visité.

Complexité : O(n+m)

*Parcours chaque sommet le plus loin possible jusqu'à ce qu'il n'y a pas de sucesseurs puis remonter.*

### Type des arcs de l'arborescence

4 types :
- de **liaison** : arcs reliant un sommet à ses fils
- **avant** : arcs reliant un sommet à ses descendants différents de ses fils
- **Arrière ou de retour** : Arcs reliant un sommet à l'un de ses ancêtres.
- **transverse** : Arcs reliant un sommet aux sommets avec lesquels il n'a aucune relation dans l'arborescence.

### Couleurs
GRIS : sommet d'origine, arc retour

BLANC : arc de liaison

NOIR : arc avant ou transverse

### Théorème du chemin blanc
Dans une forêt obtenu par un parcours en profondeur d'un graphe F = (V, E), un sommet v est un descendant d'un sommet u si et seulement si lors du début de visite du sommet u, il existe une chaîne ou chemin reliant u à v composé exclusivement de sommets blancs.

### Applications

- Le tri topologique
- le calcul des somposantes fortement connexes
- la recherche de points d'articulation
- le test de planarité d'un graphe.

## Tri topologique
Le tri topologique d'un graph'e G orienté est un ordonnancement de ses sommets de telle sorte que si v1, v2, ..., vn est l'ordre obtenu, alors :

$$\forall v_i, v_j \in V(G), v_iv_j \in E(G) => i < j $$

Complexité : O(n+m)

*Pour atteindre un sommet s, il faut que tous les sommets prédecesseurs soient parcourus.*

## Composantes fortement connexes

même composante : chemin de u et vers v. et de v vers u.

Composante fortement connexe : tous les sommets sont accessibles pour tous les sommets de cette composante.

- Parcours en profondeur
- Inverser la liste (résultat du parcours)
- Inverser le graphe G^-1
- Parcours en profondeur G^-1 dans l'ordre de la liste
- Arborescences : CFC

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
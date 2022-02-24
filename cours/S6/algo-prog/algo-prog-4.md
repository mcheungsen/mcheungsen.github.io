# Techniques Algorithmiques et Programmation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Techniques algo prog](index.md)

# Navigation

## I. Introduction

### 1.1. *Pathfinding*
> **Recherche de chemin / *pathfinding*** : Art de trouver un chemin entre deux points : un point de départ $$s$$ (*start / source*) et une cible $$t$$ (*target*).

Nombreux algorithmes de *pathfinding* :
- Algorithme en faisceau : *explorer un nombre limité de voisins*
- algorithme *best-first* : explorer en premier le "meilleur" voisin déterminé par une heuristique
- ...

Chercher une solution optimale dans un espace abstrait de solutions. Utilisé principalement en robotique, système de navigation GPS, jeux vidéos.

*Jeux vidéos* : diriger les PNJ, *in-fine* animées par des algorithmes exécutés par une machine. calculer les trajets. Il n'est pas possible de coder en dur dans une table ou fichier, le déplacement de tous les PNJ.

### 1.2 *Navigation mesh*

Dans un jeu vidéo, il faut spécifier par une structure abstraite où peuvent se déplacer les personnages.

>*navigation mesh* : "graphe de navigation" : les sommets sont les points d'intérêts ou point de cheminement (*waypoints*) avec des coordonnées 2D ou 3D. Les arêtes interconnectent les points d'intérêts, en définissant un tuilage.

>*Tuilage* : à base de triangulations, de grilles ou d'autres types de maillage du plan, voir de l'espace, plus ou moins dense.

> A* : algorithme de *pathfinding* efficace. extension de l'algorithme de Dijkstra.

Nombreux algorithmes qui gèrent la navigation :
- algorithmes chargés de la planification de paires $$s_i \rightarrow t_i$$ en fonction de l'environnement et des événements
- algorithmes rendant plus réalistes certaines trajectoires. Adoucir les angles entre deux arêtes, aller au ligne droite au lieu de zig-zag, ...
- Algorithmes déterminant le déplacement du personnage à l'intérieur d'une tuile vers le point d'intérêt le plus proche.

### 1.3 Rappels

Soit $$G$$ un graphe, pas forcément symétrique, arête-valué pat une fonction de poid $$w$$ (pondération). $$w(e)$$ peut correspondre à la longueur de l'arête $$e$$, la distance euclidienne séparant ses extrémités.

Dans un graphe général, on parle plutôt de poids pour éviter la confusion avec la notion de longueur propre au graphes géométriques.

> Le coput d'un chemin $$C$$ allant de $$u$$ à $$v$$ dans $$G$$ est la somme des poids de ses arêtes : $$\sum_{e\in E(C)}w(e)$$.

On dit que C est un **chemin de coût minimum** si son coût est le plus petit parmi tous les chemins allant de $$u$$ à $$v$$ dans $$G$$.

La distance, notée dist$$_G(u,v)$$ est le coût d'un plus court chemin allant de $$u$$ à $$v$$
## 2. L'algorithme de Dijkstra
## 3. L'algorithme A*
## 4. Morale
_____


[3 - Voyageur du commerce](algo-prog-3.md)

--

[5 - Diviser pour régner](algo-prog-5.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
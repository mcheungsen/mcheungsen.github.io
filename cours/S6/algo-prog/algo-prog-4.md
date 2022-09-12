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

Dans un graphe général, on parle plutôt de poids pour éviter la confusion avec la notion de longueur propre aux graphes géométriques.

> Le coût d'un chemin $$C$$ allant de $$u$$ à $$v$$ dans $$G$$ est la somme des poids de ses arêtes : $$\sum_{e\in E(C)}w(e)$$.

On dit que C est un **chemin de coût minimum** si son coût est le plus petit parmi tous les chemins allant de $$u$$ à $$v$$ dans $$G$$.

La distance, notée dist$$_G(u,v)$$ est le coût d'un plus court chemin allant de $$u$$ à $$v$$
## 2. L'algorithme de Dijkstra

L'algorithme de Dijkstra calcule un plus court chemin entre un sommet source et tous les autres accessibles dans un graphe G.

L'algorithme suppose des poids positifs ou nuls, mais pas forcément symétrique.

> **Principe** : On fait croitre un sous-arbre du graphe depuis la source en ajoutant progressivement les feuilles. La prochaine feuille est choisie parmi le voisinage de l'arbre de sorte qu'elle minimise le cout du nouveau chemin.

L'algorithme peut être vu comme un algorithme **glouton**. On selectionne le sommet le plus proche, et on ne remet jamais en question ce choix.

P : ensemble des sommets de l'arbre

Q : frontière de P, ensemble des sommets en cours d'exploration qui sont aussi des voisins de P.

### 2.1 Propriétés
Deux choses différentes :
- Coût[$$u$$] : valeur d'une table pour le sommet $$u$$ calculée par l'algorithme.
- Coût d'un chemin C : somme des poids et de ses arêtes.

> **Propriété** : S'il existe un chemin de $$s$$ à $$t$$ dans $$G$$, alors l'algorithme le trouve.

> **Propriété** : Si $$u \in P \cup Q$$, le coût du chemin $$u \rightarrow$$ parent[$$u$$] $$\rightarrow$$ parent[parent[$$u$$]] ... $$\rightarrow s$$ vaut coût[$$u$$]. De plus tous les sommets du chemin, saut peut-être $$u$$ sont dans $$P$$.

### 2.2 Implémentation et complexité

#### File de priorité
On implémente l'ensemble $$Q$$ par une **file de priorité (*priority queue*)**.

>**file de priorité :**  Structure de données qui permet de gérer certaines opérations sur les ensembles

- Créer une file vide
- Ajouter à la file un élément et sa priorité
- Extraire de la file l'élément de plus haute priorité

Une *clé c* est associée à chaque élément $$v$$ permettant de déterminer la priorité de l'élément.

Dans `Dijkstra`, on :
- Parcourt chaque arc au plus une fois : $$O(m)$$
- Extrait de $$Q$$ au plus une fois chacun des sommets : $$O(n.t_{min})$$
- Ajoute au plus chacun des sommets à $$Q$$ : $$O(n.t_{add}(n))$$
- Modifie les coûts au plus autant de fois qu'il y a d'arcs : $$O(m.t_{des}(n))$$

Donc au total :
$$O(m+n.t_{min}(n)+n.t_{add}(n)+m.t_{dec}(n))$$

#### Mise à jour paresseuse
On peut se passer d'implémenter la décrémentation de clé. On peut faire une mise à jour de manière paresseuse : on ajoute à la file un nouveau couple $$(v, c')$$.

#### Implémentation par tas
Une façon simple d'implémenter un file de priorité : Utiliser un tas (*heap*).Implémenté par un arbre binaire quasi-complet (qui est lui-même un simple tableau).

## 3. L'algorithme A*
Extension de l'algorithme de Dijkstra. Plusieurs versions :
- A1
- A2
- A*

> **Principe** : Identique à celui de Dijkstra (croissance d'un arbre de racine $$s$$, la source, par ajout de feuilles) sinon que le choix du sommet $$u$$ se fait selon `score[u]`, une valeur qui tient compte de `cout[u]` (cout du chemain de $$s$$ à $$u$$) mais aussi d'une estimation de la distance entre $$u$$ et la cible $$t$$.

Algorithme paramétré par l'estimation de distance qui va guider la recherche du meilleur chemin : `h(x,t)` heuristique sur la distance entre un sommet quelconque $$x$$ et la cible $$t$$.

Une heuristique ne donne pas de garantie sur ce qu'elle est censée calculer.

#### **Entrée**
- Un graphe $$G$$, potentiellement asymétrique, arête-valué par une fonction de poids $$w$$ positive ou nulle, $$s$$, $$t \in V(G)$$
- une heuristique $$h(x,t)$$ estimant la distance entre les sommets $$x$$ et $$t$$ dans $$G$$

#### **Sortie**
Un chemin entre $$s$$ et $$t$$ dans $$G$$, une erreur s'il n'a pas été trouvé.

1. Poser $$P:=\empty, Q:=\{s\},$$cout[s]:=0, parent[s]:=$$\bot$$, score[s]:=cout[s]+h(s,t)
2. Tant que $$Q \neq \empty$$ :
    - Choisir $$u \in Q$$ tel que `score[u]` est minimum et le supprime de $$Q$$
    - Si $$u = t$$, alors renvoyer le chemin de $$s$$ à $$t$$ grâce à la relation `parent[u]` : $$t \rightarrow$$ `parent[t]` $$\rightarrow$$ `parent[parent[t]]` $$\rightarrow$$ ... $$\rightarrow$$ s
    - Ajouter $$u$$ à $$P$$
    -Pour tout voisin $$v \notin P$$ de $$u$$ :
        - Poser c := `cout[u] + w(u,v)`
        - Si $$v \notin Q$$, ajouter $$v$$ à $$Q$$
        - Sinon, si $$c \geq$$ `cout[v]` continuer la boucle
        - `cout[v] := c`, `parent[v] := u`, `score[v] := c + h(v,t)`
3. Renvoyer l'erreur : "le chemin n'a pas été trouvé" 

Dans A*, le choix du sommet $$u$$ est déterminé par son `score[u]`.

- Si un chemin de $$s$$ à $$t$$ existe, A* le trouvera
- le cout du chemin $$u \rightarrow$$ `parent[u]` $$\rightarrow$$ `parent[parent[u]]`$$\rightarrow$$ ... $$\rightarrow s$$ vaut `cout[u]` pour tout $$u \in P \cup Q$$.

### 3.1 Propriétés
> si $$h(x,t) = 0$$, alors *A\** est équivalent à l'algorithme Dijkstra, et donc calcule un plus court chemin entre *s* et *t*.

Si $h(x,t) = 0$, `score[u] = cout[u]`.

> Tout algorithme qui calcule un chemin de *s* à *t*, sur la base de la même heuristique monotone *h*, visite au moins autant de sommets que *A\**.

> Si h est monotone, alors le chemin trouvé par *A\** est un plus court chemin pour cette heuristique.

L'heuristique h est monotone si $h(x,t) \leq w(x,y)+h(y,t)$ pour tout sommet $x$ et voisin $y$ de $x$. Elle sous-estime la distance si $h(x,y) \leq dist_G(x,y)$ pour toutes les paires de sommets $x,y$ où $h$ est définie.
### 3.2 Implémentation et complexité

Complexité et implémentation d'A* similaires à celle de Dijkstra, sinon qu'on implémente $Q$ par un tas minimum pour la valeur $score[]$ au lieu de $cout[]$.

**Tenir compte du temps de calcul de h**. L'heuristique $h$ est considérée comme une opération élémentaire. Prend u ntemps constant par rapport à la taille du graphe.

**Complexoté de A*** : $O(m.log n)$

## 4. Morale
> Les navigation meshes sont des graphes issus de maillage de terrains 2D ou 3D
pour simplifier les déplacements possibles des personnages artificiels (et autres
bots) animés par des IA qui sont infine pilotée par des algorithmes exécutés par
une machine. La requête principale est celle de recherche du meilleur chemin ou
d’un chemin court entre deux points du navigation mesh.

> Les notions de « chemin court » ou de « meilleur chemin » sont relatives à la valuation des arêtes du graphe, ou plus généralement des arcs si le graphe est orienté.
On parle plutôt de « longueur » dans le cas de graphe géométrique (lié à une distance entre les extrémités de l’arête), de « poids » si la valeur est positive ou nulle,
ou de « coût » pour une valeur générale (positive ou négative donc). Pour les algorithmes Dijkstra ou A*, le terme approprié est celui de poids.

> On peut faire mieux que Dijkstra en pratique en tenant compte de la cible, car
les choix qu’il prend sont indépendants de la destination. Au contraire, A* profite
d’informations sur la destination encodée par une heuristique qui peut être plus
ou moins précise. C’est évidemment général : toute information supplémentaire
peut être exploitée par l’algorithme pour être plus performant.

> Il faut distinguer le problème que résout un algorithme, et l’implémentation de
l’algorithme. Il y a plusieurs implémentations possibles de Dijkstra, pas toutes
équivalentes en termes de complexité. L’implémentation de Dijkstra présentée
dans le cours, à l’aide d’un tas binaire, a une complexité de O(mlogn), et la complexité la plus faible possible atteint Θ(m+nlogn). Cette borne est suffisante grâce
aux tas de Fibonacci, et elle est nécessaire à cause du parcours des sommets par
ordre croissant de distance depuis la source. Cependant, ce n’est pas la meilleure
complexité pour le problème! Il existe un algorithme en O(m + n) qui calcule les
distances d’une source vers tous les autres, et c’est la meilleure possible.

> La ressource critique pour les algorithmes de recherche de chemin, comme beaucoup d’autres en fait, est la mémoire utilisée, ce qui correspond au nombre de
sommets visités. Pour chaque heuristique fixée, A* est l’algorithme de recherche
de chemin qui visite le moins de sommets possibles.

> On peut se servir de A* pour approximer la distance avec une garantie sur le facteur d’approximation avec un choix judicieux de l’heuristique h.
_____


[3 - Voyageur du commerce](algo-prog-3.md)

--

[5 - Diviser pour régner](algo-prog-5.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
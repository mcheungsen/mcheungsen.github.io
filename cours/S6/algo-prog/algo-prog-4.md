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
### 3.2 Implémentation et complexité
### 3.3 Plus sur A*




## 4. Morale
_____


[3 - Voyageur du commerce](algo-prog-3.md)

--

[5 - Diviser pour régner](algo-prog-5.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
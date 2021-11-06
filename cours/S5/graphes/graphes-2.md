# Algorithmique des graphes


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Graphes](index.md)

---

## Notations asymptotiques

### Grand "O" 

$$O(g(n) = f(n) | \exist c \in \mathbf{R}^+, \exist n_0 \in \mathbf{N}, \forall n \geq n_0, 0 \leq f(n) \leq c \times g(n)$$

*3n² + 2n + 3 = O(n²)*

### Notation $$\Omega$$

$$\Omega (g(n)) = f(n) | \exist c \in \mathbf{R}^+, \exist n_0 \in \mathbf{N}, \forall n \geq n_0, 0 \leq c \times g(n) \leq f(n)$$

### Notation $$\Theta$$

$$\Theta(g(n)) = f(n)|\exist c_1, c_2 \in \mathbf{R}^+, \exists n_0 \in \mathbf{N}, \forall n \geq n_0, 0 \leq c_1 \times g(n) \leq f(n) \leq c_2 \times g(n)$$

## Taille mémoire selon la représentation

### Matrice d'adjacence
La taille mémoire nécessaire pour représenter un graphe (orienté ou non) par sa matrice d'adjacence est en **O(n²)**.

### Matrice d'incidence
**O(n x m)**

Si le graphe est orienté et possède une boucle, il est impossible de savoir sur quel sommet est la boucle.

### Liste d'adjacences
**O(n+m)**

Il faut n listes et la somme des longueurs des listes est égal à 2 x le nombre d'arêtes si le graphe est non orienté ou au nombre d'arcs si le graphe est orienté.

## Complexité selon la représentation - Matrice d'adjacence

### Existence d'une arête ou d'un arc entre deux sommets
Vérification entre les deux sommets : Complexité O(1).

### Degré d'un sommet
Parcours de chaque sommet : Complexité O(n).

### Degré de tous les sommets
Double parcours des sommets : Complexité O(n²).

## Complexité selon la représentation - Matrice d'incidence

### Existence d'une arête
Parcours de chaque arête : Complexité O(m).

### Degré d'un sommet
Parcours de chaque arête : Complexité O(m).

### Degré de tous les sommets
Parcours de chaque Sommet ->  chaque arête : Complexité O(nxm).

------

## Parcours
Il existe principalement deux algorithmes permettant de parcourir un graphe (sommet et arêtes ou arcs) en temps linéaire : O(n+m) :
- Parcours en **largeur** : BFS *Breadth-First-Search*, basé sur l'utilisation d'une file.
- Parcours en **profondeur**, DFS *Depth-First-Search*, basé sur l'utilisation d'une pile.

### Parcours en largeur
On examine les sommets du graphe à partir d'un sommet. Tous les sommets accessibles depuis s sont parcourus. Les sommets sont examinés un par un. Quand on examine un sommet on ajoute tous ses voisins ou successeurs dans la file d'attente et l'on met à jour leur distance par rapport au sommet source.

Complexité O(n+m)

### Graphe biparti
**Graphe biparti** : il existe une partition de V(G) en deux sou-ensembles A et B tels que les sous-graphes induits Ga et Gb ne contiennent aucune arête.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
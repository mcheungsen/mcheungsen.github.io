# Techniques Algorithmiques et Programmation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Techniques algo prog](index.md)

# Voyageur de commerce

## 1. Le problème

> Un robot doit ramasser un ensemble d'objets en un minimum de temps et revenir au point de départ. Le temps doit être optimisé (ou distance parcouru).

> Un hélicoptère doit inspecter un ensemble de plateformes en utilisant le moins de carburant possible. *Autre formulation : il y a une quantité limité de carburant, est-il possible de parcourir toutes les plateformes ?*

La première formulation est un problème d'**optimisation**. La réponse est une valeur.

La deuxième est un problème de **décision**. La réponse est oui ou non. 

On parle du **problème du Voyageur de commerce**. *Traveler Salesman Problem*

> Un commercial doit effectuer une tournée comprenant *n* villes et il faut déterminer l'ordre de visite qui minimise la longueur de la tournée.

**Instance** : Un ensemble $$V$$ de $$n$$ points et une distance $$d$$ sur $$V$$.

**Question** : Trouver une tournée de longueur minimum passant par tous les points de $$V$$, c'est-à-dire un ordre $$p_0, ..., p_{n-1}$$ des points de $$V$$ tel que $$d(p_0,p_1) + d(p_1,p_2) + ... + d(p_{n-2},p_{n-1})+d(p_{n-1},p_n )= \sum^{n-1}_{i=0}d(p_i,p_{i+1 mod n})$$ est minimum.

> **Inégalité triangulaire :** Une fonction `d(-,-)` vérifie l'inégalité triangulaire si $$$$

On parle de **TSP métrique** lorsque $$d$$ vérifie l'inégalité triangulaire

Il existe aussi un **TSP asymétrique**, lorsque $$d(A,B) \neq d(B,A)$$

*Les temps de trajet entre gares du réseu ferré ne vérifient pas non plus l'inégalité triangulaire. Bordeaux - Lyon est plus long que Bordeaux - Paris - Lyon.*

*Variante* : Les points sont les sommets d'un graphe avec des arêtes valuée et la distance est la distance dans le graphe. La tournée qui doit visiter tous les sommets ne peut passer que par des arêtes du graphe. Elle peut être menée à passer plusieurs fois par le même sommet. on prle de **TSP "graphique"**.

## 2. Recherche exhaustive

Formule close ? le nombre de paramètres n'est pas borné, il n'y aura donc pas de formule de taille bornée.

- Quelle est la sortie attendue d'un algorithme qui résoudrait le problème ?

> c'est un ordre sur les $$n$$ points que l'on cherche.

- Comment faire pour savoir si la sortie est celle que l'ont veut ?

> C'est l'ordre qui minimise la longueur de la tournée.

**Complexité en temps** : Le nombre d'ordres possibles sur $$n$$ points est le nombre de permutations : $$n!$$.

Mettre à jour et retenir le minimum prend un temps constant. Au final, la complexité en temps de l'algorithme *brute-force* est : $$O(n-n!$$.

## 3. Programmation dynamique

> Algorithme de **Held-Karp** découvert par Bellman. résout le problème du *Voyageur du Commerce* avec la plus basse complexité en temps connue. Fonctionne même si $$d$$ ne vérifie pas **l'inégalité triangulaire** et/ou la symétrie. L'algorithme *Brute-force* fonctionne aussi sans symétrie ni inégalité triangulaire.

L'algorithme de *brute-force* teste inutilement de noubreux cas. 

Supposons que parmi toutes les tournées possibles, on s'intéresse à toutes celles qui passent pas $$v_1, S1,v_2, S_2, v_4, S_4, v_5$$ où les $$S_i$$ sont des ensembles de points. Elles doivent passer par $$v_1, v_2, v_3, v_4, v_5$$ mais sont libres de circuler dans chaque $$S_i$$ par le point du haut ou du bas. Comme chaque $$S_i$$ possède deux points, le nombre de chemins possibles est donc $$2.2.2.2 = 2^4 = 16$$. L'approche *brute-force* va donc tester ces 16 chemins.

Si on avait commencé par résoudre le problème du meilleur des deux chemins allant de $$v_i$$ à $$v_{i+1}$$ et passant par $$S_i$$, pour chacun des 4 ensembles, on aurait eut à tester $$2+2+2+2 = 2.4 = 8$$ chemins contre 16.

### La variable

> Soit $$V = {v_0,...,v_{n-1}}$$ l'ensemble des points. On supposera que la tournée commence et termine au point $$v_{n-1}$$. On note $$V^* = V$$\ $${v_{n-1}}$$

L'algorithme de programmation dynamique repose sur la variable $$D(t,S) = $$ la longueur minimum d'un chemin allant de $$v_{n-2}$$ à $$t$$ et qui visite tous les points de $$S$$.

$$_{OPT}(V,d) = min {D(t,V^*) + d(t,v_{n-1})}$$

### Calcul du min

Plus petite valeur possible de la fonction $$f(x)$$ lorsque x parcoure l'ensemble $$E$$.

$$min f(x) = min(f(x_1),f(x_2),...,f(x_k))$$

### Formule de récurrence

$$D(t,S) = \left\{
\begin{array}{rcr}
d(v_{n-1},t)\\
min_{x\in S \backslash \{t\}}\{ D(x,S \backslash \{t\} + d(x,t)\}
\end{array}
\right.$$

1 - si |S| = 1
2 - si |S| > 1

|S| représente la cardinalité de S (son nombre d'éléments). 
"|S| = 1 est équivalente à S = {t}"

### Implémentation récursive

```C
double D_rec(int t, set S) {
    if(set_card(S) == 1) return d(V[n-1], V[t]);
    double w = DBL_MAX; // w=+∞ pour calcul du min
    set T=set_minus(S,t); // crée T = S \ {t}
    for(int x = 0; x < n-1; x++) {
        if(set_in(x,T))
            w=fmin(w, D_rec(x,T) + d(V[x], V[t])); // minx∈T {D(x, T ) + d(x, t)}
    }
    set_free(T);
    return w;
}

double tsp_rec(){ // TSP récursif via D(t, S)
    double w=DBL_MAX; // w=+∞ pour calcul du min
    set S=set_create(n-1); // crée S = {0,...,n − 2} = V∗
    for(int t=0;t< n-1 ;t++) // opt(V , d) = mint∈V ∗ {D(t,V ∗) + d(t, vn−1)}
        w=fmin(w,D_rec(t,S)+d(V[t],V[n-1]));
    set_free(S);
    return w;
}

```

Cette implémentation est inefficace. Ce n'est pas parce qu'on a trouvé une formulation par récurrence que l'algorithme résultant est efficace.

Le nombre total de noeuds est au moins le nombre de feuilles de cet arbre qui vaut donc $$(n-1)(n-2)(n-3)...=(n-1)!$$

### Implémentation récursive
L'algorithme passe son temps à recalculer les mêmes sous-problèmes.

### Mémorisation
On utilise une table `D[t][S]` pour stocker les valeurs $$D(t,S)$$ et éviter de les recalculer.

S un sous-ensemble. Si S = {$$v_3, v_2, v_0$$} et $$n=5$$ :

| |$$v_4$$|$$v_3$$|$$v_2$$|$$v_1$$|$$v_0$$|
|-|-|-|-|-|-|
|S|0|1|1|0|1|

Les lignes de la table `D[t][S]` représentent les points `t` et les colonnes les sous-ensembles `S`.

|  |  | **{$$v_0$$}** | **{$$v_1$$}** | **{$$v_1,v_0$$}** | **{$$v_2$$}** | **{$$v_2,v_0$$}** | **{$$v_2,v_1$$}** | **{$$v_2,v_1,v_0$$}** | **{$$v_3$$}** | **{$$v_3,v_0$$}** | **{$$v_3,v_1$$}** | **{$$v_3, v_1, v_0$$}** | **{$$v_3, v_2$$}** | **{$$v_3,v_2,v_0$$}** | **{$$v_3,v_2,v_1$$}** | **$$V^*$$** |  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  | **`S`** | **0001** | **0010** | **0011** | **0100** | **0101** | **0110** | **0111** | **1000** | **1001** | **1010** | **1011** | **1100** | **1101** | **1110** | **1111** |  |
|  | **`t`** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **10** | **11** | **12** | **13** | **14** | **15** |  |
|  | $$v_0$$ |  | / |  | / |  | / |  | / |  | / |  | / |  | / |  |  |
|  | $$v_1$$ | / |  |  | / | / |  |  | / | / |  |  | / | / |  |  |  |
|  | $$v_2$$ | / | / | / |  |  |  |  | / | / | / | / |  |  |  |  |  |
|  | $$v_3$$ | / | / | / | / | / | / | / |  |  |  |  |  |  |  |  |  |

Il faut remplir d'abord les colonnes 1, 2, 4, 8 (taille 1), pour pouvoir remplir 3, 5, 6, 9, 10, 12 (taille 2).

## 4. Approximation

Le meilleur algorithme qui résout le *Le voyageur du commerce* prend un temps exponentielle en le nombre de points.

Une façon de calculer rapidement : **algorithme dit du "point le plus proche"** : On ajoute au chemin le point le plus proche. au dernier point, on revient au premier point.

Le résultt ne donne pas nécessairement la tournée de longueur minimale, mais l'algorithme est rapide avec une complexité de $$O(n²)$$.

### 4.1. Algorithme glouton : un principe général

> **algorithme glouton - *greedy*** : stratégie algorithmique qui consiste à former une solution en prenant à chaque étape le meilleur choix sans faire de *backtracking* : sans jamais remettre en cause les choix précédents.

**Problème de *bin packing*** : ranger des objets pour remplir le mieux possible une boite de capacité donnée.

*glouton : essayer de ranger en priorité les objets les plus gros.*

> **Algorithme de Kruskal** : même principe : essayer d'ajouter en priorité les arêtes de plus petit poids.

**Voyageur du commerce et Glouton** : construire la tournée à partir d'un chemin grandissant en ajoutant à chaque fois, parmi les points restant, celui le plus proche du dernier point sélectionné.

### 4.2. Problème d'optimisation

Les problèmes d'optimisation sont soit des minimisations soit des maximisations.

Un algorithme d'approximation a pour vocation de produire une solution de valeur "relativement proche" de l'optimal.

> **$$\alpha$$-approximation** : $$\alpha > 0$$ et problème d'optimisation $$\Pi$$ donnés : Algorithme polynomial A qui donne une solution pour toute instance $$I \in \Pi$$ telle que : 
- minimisation : $$A(I) \leq \alpha.OPT_\Pi(I)$$
- maximisation : $$A(I) \geq \alpha.OPT_\Pi(I)$$

La valeur $$\alpha$$ est le facteur d'approximation de l'algorithme A.

L'algorithme Glouton n'est pas une $$\alpha$$-approximation mais heuristique.

> **Heuristique** : tout algorithme supposé efficace en pratique qui conduit un résultat sans garantie de qualité par rapport à la solution optimale.

### 4.3. Autres heuristiques

Il existe de nombreuses autres heuristiques.

> famille des *optimisations locales* : on part d'une solution (un tournée), et on cherche dans son proche voiinage s'il n'y a pas une meilleure solution. On recommence tant qu'il y a un gain. **Base des méthodes de descente en gradient**

Le voyageur de Commerce correspond aux heuristiques **2-Opt** ou **3-Opt** : Flipper 2 ou 3 arêtes.

> Famille des "*économies / savings*" : Construire $$n-1$$ tournées qui partent de $$v_0$$ et qui sont $$v_0-v_i-v_0$$ pour tout $$v_i \in V^*$$. Puis, $$n-2$$ fois on fusionne deux tournées en une plus grande tournée. On fusionne en priorité la paire de tournées qui économisent le plus de distance.

> Famille des "*insertions aléatoires / random insertion*" : On considère une tournée avec un seul point choisi aléatoirement. Puis $$n-1$$ fois on étend la tournée courante en insérant un point $$w$$ choisi aléatoirement hors de la tournée à la place de l'arête $$u-v$$ qui minimise l'accroissement de distance $$d(u,w)+d(w,v)-d(u,v)$$.

> 2-approximation  alternative où on choisit $$w$$ comme celui qui minimise l'accroissement. On se ramène au calcul de l'arbre de poids minimum par l'algorithme de Prim suivi d'un parcours en profondeur.

### 4.4. Inapproximabilité

Le problème du Voyageur du Commerce est difficiler à résoudre et difficile à approximer.

Aucun algorithme polynomial ne peut approximer à un facteur constant le problème du Voyageur de commerce dans toute sa généralité.

### 4.5. Cas euclidien

Lorsque des points sont pris dans un espace euclidien de dimension $$\delta$$, ($$V \subset \mathbf{R}^\delta$$), et que $$d$$ correspond à la distance euclidienne, il existe un algorithme d'approximation réalisant le compris temps $$vs$$.

> **Théorème** : Pour tout $$\epsilon > 0$$, il existe une ($$1+\epsilon$$)-approximation pour le problème du *Voyageur de Commerce* qui a pour complexité en temps $$n.(log n)^{O(\frac{1}{\epsilon}\sqrt{\delta}^{\delta-1})}$$

On parle parfois de schéma d'approximation polynomial.

### 4.6. Une 2-approximation
> MST - *Minimum Spanning Tree* : Arbre couvrant de poids minimum.

**Entrée** : Une instance $$(V,d)$$ du Voyageur de Commerce (métrique)

**Sortie** : Une tournée, un ordre sur les points de V.

1. Calculer un algorithme couvrant de poids minimum T sur le graphe complet défini par V et les arêtes valuées par d.
2. La tournée est définie pr l'ordre de visite des sommets selon un parcours en profondeur d'abord de T.

### 4.7. *Union-Find*


## 5. Morale

> Le problème du Voyageur de commerce (TSP) est un problème difficile, c’està-dire qu’on ne sait pas le résoudre en temps polynomial. Il est aussi difficile à approximer dans sa version générale, mais pas lorsque la fonction de distance d vérifie l’inégalité triangulaire.

> Il peut-être résolu de manière exacte par programmation dynamique, mais cela
requière un temps exponentiel en le nombre de points.

> Lorsque la méthode exacte ne suffit pas (car par exemple n est trop grand) on cherche des heuristiques ou des algorithmes d’approximation censés être bien plus rapides, au moins en pratique.

> Il existe de nombreuses heuristiques qui tentent de résoudre le TSP. L’algorithme du « point le plus proche » (qui est un algorithme glouton) et l’algorithme 2-Opt (qui est un algorithme d’optimisation locale) en sont deux exemples. Il en existe beaucoup d’autres.

> Un algorithme glouton n’est pas un algorithme qui consome plus de ressources que nécessaire. Cette stratégie algorithmique consiste plutôt à progresser tant que possible sans remettre en question ses choix. En quelque sorte un algorithme glouton avance sans trop réfléchir.

> Les algorithmes d’approximation sont de complexité polynomiale et donnent des garanties sur la qualité de la solution grâce au facteur d’approximation, contrairement aux heuristiques qui ne garantissent ni la complexité polynomiale ni un facteur d’approximation constant. Le meilleur connu pour le TSP métrique, c’està-dire lorsque d vérifie l’inégalité triangulaire, a un facteur d’approximation de 1.5, à l’aide une variante astucieuse de l’algorithme basé sur le DFS d’un arbre couvrant de poids minimum (MST).

> Pour être efficace, les algorithmes doivent parfois mettre en œuvre des structures* de données efficaces, comme Union-Find qui permet de maintenir les composantes connexes d’un graphe en temps linéaire en pratique.

> On peut parfois optimiser les structures de données, et donc les algorithmes, en augmentant l’espace de travail, en utilisant des tables auxiliaires pour permettre, par exemple, l’optimisation du rang dans Union-Find. Le prix à payer est le coût du maintient de ces structures auxiliaires. De manière générale, il y a un compromis entre la taille, le temps de mise à jour de la structure de données et le temps de requête. Augmenter l’espace implique des mises à jour de cet espace, mais permet de réduire le temps de requêtes.
_____


[2 - Partition d'un entier](algo-prog-2.md)

--

[4 - Navigation](algo-prog-4.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
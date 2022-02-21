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




_____


[2 - Partition d'un entier](algo-prog-2.md)

--

[4 - Navigation](algo-prog-4.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
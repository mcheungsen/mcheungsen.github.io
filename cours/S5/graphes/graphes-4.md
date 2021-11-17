# Algorithmique des graphes


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Graphes](index.md)

---

## Composantes fortement connexes

#### Lemme 1
Si deux sommets $$u$$ et $$v$$ sont dans une même composante fortement connexe, alors aucun chemin entre eux n'utilise de sommet extérieur à la composante.

#### Lemme 2
Lors d'un parcours en profondeur, tous les sommets d'une même composante fortement connexe se trouveront dans la même arborescence.

**aïeul** d'un sommet u : sommet noté $$\phi(u)$$ qui est parmi les sommets v accessibles à partir de u celui qui a la plus grande valeur pour f.

On peut avoir $$\phi(u)=u$$.

#### Lemme 3
Si deux sommets $$u$$ et $$v$$ sont tels qu'il existe un chemin de $$u$$ à $$v$$, alors pour tout parcours en profondeur on aura $$f(\phi(u)) \geq f(\phi(v))$$

#### Lemme 4
Pour tout somme $$u$$, $$\phi(\phi(u)) = \phi(u)$$

#### Lemme 5
Pour tout sommet $$u$$, lors d'un parcours en profondeur, $$\phi(u)$$ est un ancêtre de u.

#### Lemme 6
Pour tout sommet $$u$$, $$u$$ et $$\phi(u)$$ appartiennent à la même composante fortement connexe.

#### Lemme 7
Deux sommets $$u$$ et $$v$$ appartiennent à une même composante fortement connexe si et seulement si ils ont le même aïeul.

#### Lemme 8
Soit $$T$$ une arborescence obtenue lors du parcours en profondeur de $$G^{-1}$$ de racine $$r$$. Pour tout sommet $$u$$, si $$\phi(u)$$ désigne l'aïeul de $$u$$ lors du parcours en profondeur de $$G$$ (étape 1), alors $$\phi(u)=r$$ si et seulement si $$u$$ appartient à $$T$$.

## Arbres
**arbre** : graphe (non orienté) connexe sans cycle. 

*Un arbre est forcément un graphe simple.*

### Caractérisations des arbres
Les propriétés suivantes sont équivalentes :
1. $$G$$ est un arbre
2. $$G$$ est sans cycle et possède $$m$$ arêtes avec $$m = n -1 $$
3. $$G$$ est connexe et possède $$m$$ arêtes avec $$m=n-1$$
4. $$G$$ est sans cycle, et en ajoutant une arête on obtient un graphe ayant un cycle (et un seul).
5. $$G$$ est connexe, et si on supprime une arête quelconque le graphe obtenu n'est plus connexe.
6. Tout couple de commets est relié par une chaîne élémentaire et une seule.

#### Lemme 1
Soit $$G$$ un graphe connexe à $$n$$ sommets et $$m=n-1$$ arêtes. Alors $$G$$ possède au moins un sommet de degré 1.

#### Lemme 2
Tout arbre ayant au moins deux sommets possèdes au moins deux sommets de degré 1.

### Arbre couvrant de poids minimum
#### Graphe partiel
Soit $$G = (V,E)$$ un graphe. **graphe partiel de $$G$$** : graphe $$G' = (V, E')$$ avec $$E' \subset E$$.

#### Cycle fondamental
**cycle fondamental** : Soit $$T$$ un arbre. Alors tout ajout d'une arête $$e = uv$$ crée un cycle unique passant pas $$e$$.
Ce cycle sera appelé le **cycle fondamental** de $$e$$ (par rapport à $$T$$).

*Si on rajoute $$e$$ à $$T$$*, il suffit d'enlever n'importe quelle arête de con cycle fondamental pour obtenir à nouveau un arbre.

#### Arbre couvrant de poids minimum
Soit $$(G, \omega)$$un graphe muni d'une fonction de poids sur ses arêtes $$\omega$$.

Un arbre couvrant de poids minimum de $$(G,\omega)$$ est un graphe partiel de $$G$$ qui est un arbre et dont le poids total des arêtes est minimum.

*Si $$\omega$$ est positive, alors un arbre couvrant de poids minimum est un graphe partiel connexe de poids minimum.*

**Deux algorithmes pour calculer un arbre couvrant de poids minimum : Kruskal et Prim**.

### Kruskal
L'algorithme de Kruskal considère les arêtes une à une dans l'ordre croissant de leur poids et ne les garde que si elles ne créent pas un cycle.

complexité : O(m x log(m))




<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
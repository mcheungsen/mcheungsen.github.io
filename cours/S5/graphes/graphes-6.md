# Algorithmique des graphes


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Graphes](index.md)

---

## Algorithme de Ford (Bellman-Ford)

*Calculer les plus courts chemins entre un sommet s et tous les autres.*

S'il existe un plus court chemin entre deux sommet u et v dans un graphe à n sommets, il existe un plus court chemin de longueue au plus n - 1.

Calculer les plus courts chemins depuis un sommet s ayant successivement des longueurs au moins de 1 à n-1.

Si la longueur des plus courts chemins de longueurs (au moins) n dimuinue par rapport à ceux de longueur (au moins) n-1, alors on déduit que le graphe possède un circuit négatif.

A chaque itération de 1 à n, on effectue un relâchement sur chaque arc uv pour voir s'il est opportun d'utiliser cet arc pour avoir un plus court chemin entre s et v.

## Algorithme de Floyd

L'algorithme s'appuie sur le fait que l'on ne va à chaque calcul de la nouvelle matrice considérer que les k premiets sommets comme sommets intermédiaires potentiels. Deux matrices : calcul de plus court chemin et prédécesseur

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
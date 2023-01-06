# Algorithmique des graphes


[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Graphes](index.md)

---

## Prim
L'algorithme de Prim construit un arbre $$T$$ enrajoutant à chaque étape le sommet qui n'est pas encore dans l'arbre et qui possède l'arête de poids minimum parmi celles reliant les sommets de $$T$$ aux sommets de $$G - T$$

## Plus courts chemins
**Théorème** : Il existe un plus court chemin de $$u$$ à $$v$$ dans ($$G, w$$) si et seulement si il existe un chemin de u à v et aucun chemin de u à v ne contient de circuit de longueur totale strictement négative.

**Arborescence** : L'ensemble des plus courts chemins à partir d'un sommet s forme une arborescence de rasine s.
On notera par $$d(v)$$ la distance trouvée de s à vpas $$\pi(v)$$ le prédécesseur de v sur le chemin de s à v de longueur d(v).

### Principe du relâchement
Soient
- $$d$$ la valeur du plus court chemin trouvé à l'instant $$t$$ entre un sommet $$s$$ et les sommets de $$G$$
- $$\pi$$ les prédécesseurs de chaque sommet sur les plus courts chemins trouvés à l'instant $$t$$ depuis le sommet $$s$$.

Relacher
```
si d(u) + w(uv) < d(v) Alors
    d(v) = d(u) + w(uv)
    pi(v) = u
```

**Utilisé dans Dijkstra, Bellman**



<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
# Techniques Algorithmiques et Programmation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Techniques algo prog](index.md)

# Partition d'un entier

## 1. Le problème

On s'intéresse à toutes les façons de partitionner un ensemble d'éléments indistinguables.

Par exempls, il a 5 façons de partager un ensemble de 4 billes :
4

3+1

2+2

2+1+1

1+1+1+1

||||||||||||||
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|$$n$$|1|2|3|4|5|6|7|8|9|10|...|100|
|$$p(n)$$|1|2|3|5|7|11|15|22|30|42|...|190 569 292|`

**Partition d'un entier**
> **Instance** : Un entier n > 0.
> **Question** : Calculer $$p(n)$$, le nombre de partitions de $$n$$, soit le nombre de façons de partitionner un ensemble de $$n$$ éléments indistinguables en sous-ensembles non vides.

## 2. Formule asymptotique

Il n'y a pas de formule close pour la partition d'un entier. Il existe seulement des formules asymptotiques.

$$p(n) \sim \frac{1}{4n\sqrt{3}}.exp(\pi\sqrt{2n/3})\approx 13^{\sqrt{n}}\approx 2^{3.7\sqrt{n}}$$

## 3. Approche exhaustive

> Générer toutes les partitions puis de les compter.

Pour partitionner un ensemble de billes, on peut découper cet alignement en intervalles.

3+2+1+1

001011

0 : non séparation
1 : séparation

Cette approche reste **inefficace**. On va examiner $$2^{n-1}$$ découpages.

## 4. Récurrence

> **Diagramme de Ferrers :** représenter graphiquement une partition de n en utilisant un tableau. A partir du coin inférieur guche, n petits carrés en colonne de hauteur décroissante.

![](../../../img/ferrers.png)

Chaque colonne représente une part de la partition.

Chaque partition est uniquement représentée par un diagramme (lié au fait que les colonnes sont triées par hauteur). Inversement, chaque diagramme comportant n carrés organisés en colonnes décroissantes représente une seule partition de n.

Les diagrammes se décomposent en éléments plus petits, facilitant leur comptage.

Par exemple si l'on coup un diagramme de Ferrers entre deux colonnes, on obtient deux diagrammes de Ferrers. De même si on le coupe entre deux lignes.

Le nombre de partitions de $$n$$ en $$k$$ parts.

$$p(n) = p(n,1) + ... + p(n,n) = \sum^n_{k=1}p(n,k)$$

*Parmi les 5 partitions de n = 4, on a déjà vu qu'il n'y en a exactement deux avec deux parts :
- 4 = 2 + 2
- 4 = 3 + 1

On peut vérifier qu'il y a 13 diagrammes de Ferrers avec 12 carrés et 5 colonnes, d'où p(12, 5) = 13.*

On peut classifier les partition de $$n$$ en $$k$$ parts, qu'on nommera **"diagrammes (n,k)"**, en deux types :
- la plus petite part est 1 (diagramme a)
- la plus petite part est au moins 2 (diagramme b)

$$p(n,k)=p_1(n,k) + p_2(n,k)$$

Supposons par récurrence qu'on a réussi à construire tous les diagrammes plus petit que (n,k). *L'un des deux paramètres est strictement plus petit.*

On obtient alors un diagramme (n-1, k-1) avec un carré et une colonne de moins.

Par conséquent, si à un diagramme quelconque (n-1, k-1) on ajoute une colonne de hauteur 1, on obtient un diagramme (n,k) de type 1. Il y a donc autant de diagramme (n,k) que (n-1, k-1)

$$p_1(n,k)=p(n-1,k-1)$$

On peut construire les diagrammes de type 2 à l'aide de diagrammes plus petits en les coupant au dessus de la première ligne.

$$p_2(n,k) = p(n-k,k)$$

On peut donc montrer la relation de récurrence :
$$p(n,k) = p(n-1, k-1)+p(n-k,k)$$

Pour que cette formule soir valable :
- à cause du premier terme :$$n-1 \geq k-1 \geq 1$$
- à cause du second terme :$$n-k \geq k \geq 1$$

Si $$k=1$$, $$p(n,k) = 1$$.

Si $$n<2k$$, $$p(n,k)=p(n-1,k-1)$$ car il n'y a pas de diagramme de type 2.

$$\left\{
\begin{array}{rcr}
1 \\
p(n-1, k-1) \\
p(n-1,k-1)+(p(n-k,k))
\end{array}
\right.$$

```C
long p(int n,int k){ // on suppose n > k > 1
if(k==1) return 1;
if(n<2*k) return p(n-1,k-1);
return p(n-1,k-1) + p(n-k,k);
}
long p_rec(int n){
long s=0;
for(int k=1;k<=n;k++) s += p(n,k); // calcule la somme
return s;
}
```

Pour analyser les peformances de la fonction `p_rec()` on utilise l'arbre des appels

> **arbre des appels** : Outil permettant de représenter l'exécution d'une fonction. Très pratique pour calculer sa complexité, notamment lorsque la fonction est récurive. Permet de repérer les calculs inutiles et d'améliorer éventuellement l'algorithme.

*L'arbre des appels d'une fonction est un arbre enraciné dont les noeuds représentent les paramètres d'appels et les fils les différents appels (éventuellement récursifs et/ou composés) lancés par la fonction. L'exécution de la fonction correspond à un parcours en profondeur de l'arbre depuis sa racine qui représente les paramètres du premier appel.*

![](../../../img/arbreappel.png)

![](../../../img/recarbreappel.png)

**Complexité en temps**

La complexité est proportionnelle aux nombres de noeuds dans l'arbre des appels. Lors de l'exécution, le programme passe un temps constant par noeud. Ce nombre d'appels vaut 1 (racine) plus la somme des noeuds des arbres d'appels pour $$p(n,1),p(n,2),...,p(n,n)$$.

Trois types de noeuds :
- 2 fils
- 1 fils
- pas de fils

$$2p(n)-1+(2p(n)-1).(n-2) \lt 2n.p(n) = 2^{\Theta(\sqrt{n})}$$

## 5. Programmation dynamique

> **Programmation dynamique :** implémentation améliorée de la version récursive d'un algorithme. Au lieu de faire des appels récursifs, on utilise la **mémorisation** qui économise ainsi des calcul au détriment de l'espace mémoire.

La programmation dynamique consiste donc à trouver un algorithme sur une récurrence puis de l'implémenter en utilisant la technique de mémorisation pour supprimer les calculs inutiles.

![](../../../img/tableau-memorisation-dynamique.png)


_____


[1 - Introdution](algo-prog-1.md)

--

[2 - Voyageur de commerce](#)


<script src="https://cdnjs.cloudflare.com/ajax/libs/viz.js/2.1.2/full.render.js"></script>
<script>var viz = new Viz();</script>


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
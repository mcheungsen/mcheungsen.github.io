# Compilation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Compilation](index.md)

# Analyse syntaxique (*parsing*)

## 1. Les limites de l'analyse lexicale

Il est difficile de réaliser un analyseur pour des expressions enchâssées à l'aide de `JFlex`.

`JFlex` ne fait que traduire des expressions régulières en automates à nombre fini d'états et y associe du code `Java`. Il n'est pas conçu pour réaliser un analyseur syntaxique qui reconnait un langage qui ne serait pas rationnel.

### Quelques propriétés des langages rationnels

Propriétés de cloture des langages rationnels :
- Intersection
- Union
- Complémentation
- Concaténation

Les langages rationnels ne sont pas clos par inclusion.

## 2. Les sytèmes de réécriture

Un système de réécriture est définit par le quadruplet ($$\sum, N, R, S$$) où :
- **Symboles terminaux** : $$\sum$$ alphabet fini
- **Symboles non terminaux** : $$N$$ ensemble fini de symboles
- **Le termine initial de la grammaire** : $$S$$ élément distingué de $$N$$
- **Relation de réécriture** : $$R$$ $$\{(\alpha,\beta)\}$$, où $$\alpha \in (\sum \cup N)^* - \{\epsilon\}$$, et $$\{\epsilon\} \in (\sum \cup N)^*$$. On écrit $$\alpha \rightarrow \beta$$

> **Grammaire formelle** : permet de définir un langage sur le monoïde libre $$(\sum)^*$$.

> **Systtème de réécriture** : permet de définir les éléments du langage par une opération qui fait intervenir une succession de réécriture depuis le terme initial jusqu'aux chaînes de lettres. Il s'agit donc d'une **grammaire**.

### Dérivation

> **Loi de compositions internes** : Étant donné un ensemble $$M$$ : LCI sur $$M$$ est une application $$M$$ x $$$M$$ dans $$M$$.

>**Monoïde** : Un monoïde est un couple ($$M,a$$) où $$a$$ est une lci sur $$M$$ qui est **associative** et qui possède un **élément neutre**.

On définit une relation $$\Rightarrow$$ entre deux éléments du monoïde libre $$(\sum \cup N)^*$$.

$$\forall µ_1, \alpha, µ_2, \beta \in (\sum \cup N)^*, µ_1\alpha µ_2\Rightarrow µ_1\beta µ_2$$

Vérifiée s'il existe une règle $$\alpha \rightarrow \beta$$ de $$R$$.

On définit une **dérivation** par la fermeture réfléxive-transitive $$\Rightarrow^*$$

**Fermeture réflexive-transitive d'une relation R, noté $$R^*$$** se définit : $$\forall x,y \in E, xR^*y$$ si :
- 1- $$\forall x \in E, xR^*x$$
- 2- $$\forall x,y,z \in E, xRy, yrz \Rightarrow xR^*z$$

Tout élément se dérive vers lui-même (*réflexivité*) et un élément $$x$$ se dérive vers un élément $$z$$ s'il dérive vers un élément $$y$$ qui se dérive vers $$z$$ (*transitivité*).

### Langage engendré par une grammaire

> **Langage engendré par la grammaire G, noté $$\mathcal{L}_G$$** : ensemble de tous les mots qui se dérivent de l'élément initial.

$$\mathcal{L}_G = \{\alpha \in (\sum)^* : S \Rightarrow^* \alpha\}$$

### Types de grammaires

**Grammaires rationnelles** : 

$$A \rightarrow a$$

$$A \rightarrow aB$$

avec $$A,B \in N$$ et $$a \in \sum$$

**Grammaires indépendantes du contexte** : Grammaires qui n'ont qu'un élément de $$N$$. La dérivation $$µ_1\alpha µ_2 \Rightarrow µ_1\beta µ_2$$ est vérifiée si la règle $$\alpha \rightarrow \beta$$ appartient à $$R$$; ceci indépendamment du contexte de $$\alpha$$ (indépendamment de $$µ_1$$ ou de $$µ_2$$).

**Grammaires contextuelles** : $$x\alpha y \rightarrow x\beta y$$ et pour lesquelles la séquence $$\alpha$$ n'est pas plus longue que la séquence $$\beta$$. Une dérivation $$µ_1\alpha µ_2 \Rightarrow µ_1\beta µ_2$$ est vérifiée étant connus $$µ_1$$ ou $$µ_2$$.

**Grammaires non contraintes / récursivement énumérables** : seule contrainte = avoir une séquence non vide en partie gauche

## 3. Analyse Cocke-Younger-Kasami

> **Algorithme CYK** : algorithme tabulaire, qui traite le non-déterminisme par une analyse parallèle des différentes alternatives. 

L"algorithme **original** s'applique à des **grammaires normales de Chomky** : grammaires indépendantes du contexte où la partie droite de chaque règle est composée d'au plus deux symboles.

> **Principe de l'algorithme :** remplacer les termes deux-à-deux à chaque fois qu'une règle de la grammaire le permet, jusqu'au symbole initial.

*On part des mots pour les remplacer progressivement par des termes en appliquant les règles de la grammaire.*

On utilise un tableau : 
- colonnes : nombre de lettres analysées de gauche à droite 
- lignes : nombre de lettres rassemblées

*Exemple :*

Soit la grammaire $$G = (\sum, N, R, S)$$ :

1- $$\sum$$ = {`PLUS`,`MINUS`, `TIMES`, `DIV`, `LPAR`, `RPAR`, `NUMBER`}

2- $$N =$$ {E, E', T, T', F}

3- $$R =$$ {

`E` $$\rightarrow$$ `EE'`

`E'` $$\rightarrow $$ `PLUS T`

`E'` $$\rightarrow $$ `MINUS T`

`E` $$\rightarrow$$ `T`

`T` $$\rightarrow$$ `TT'`

`T'` $$\rightarrow$$ `TIMES F`

`T'` $$\rightarrow$$ `DIV F`

`T` $$\rightarrow$$ `F`

`F` $$\rightarrow$$ `LPAR F'`

`F'` $$\rightarrow$$ `E RPAR`

`F` $$\rightarrow$$ `NUMBER`
}

4- $$S = E$$

Prenons $$3*(5+7)$$

| `NUMBER`  `F`  `T`  `E` | `TIMES` | `LPAR`      | `NUMBER`  `F`  `T`  `E` | `PLUS` | `NUMBER`  `F`  `T`  `E` | `RPAR` |
|-------------------------|---------|-------------|-------------------------|--------|-------------------------|--------|
|                         |         |             |                         | `E'`   | `F'`                    |        |
|                         |         |             | `E`                     |        |                         |        |
|                         |         |             | `F'`                    |        |                         |        |
|                         |         | `F` `T` `E` |                         |        |                         |        |
|                         | `T'`    |             |                         |        |                         |        |
| `T` `E`                 |         |             |                         |        |                         |        |


### Implémentation en C

`cyk.c`

```c
#include <s t d l i b . h>
#include <s t d i o . h>
#include <s t r i n g . h>
struct Regle {
    char ∗lhs ; /∗ partie gauche d’une regle ∗/
    char ∗rhs[2] ; /∗ partie droite d’une regle ∗/
};

struct Regle regles [] = {
    {"E" , {"E" , "E'" }},
    {"E'" , {"+" , "T" }},
    {"E'" , {"−" , "T" }},
    {"E" , {"T" }},
    {"T" , {"T" , "T'" }},
    {"T'" , {"∗" , "F" }},
    {"T'" , {"/" , "F" }},
    {"T" , {"F" }},
    {"F" , {"(" , "F'" }},
    {"F'" , {"E" , ")" }},
    {"F" , {"N" }},
    {NULL, NULL}
};
/∗ LG : longueur de la phrase ∗/
/∗ N: nombre de termes qu’on peut mettre au maximum dans une cellule ∗/
#define LG 7
#define N 5

char ∗phrase[LG]={"N" , "∗" , "(" , "N" , "+" , "N" , ")" };
char ∗tableau [LG][LG][N];
// Affiche une regle de la grammaire

void afficherRegle(struct Regle regle) {
    fprintf(stdout, "%s −> %s %s \n" , regle.lhs, regle.rhs[0] , regle.rhs[1]?regle.rhs[1]:"") ;
}

/∗ Affiche la table d’analyse ∗/
void afficherTableau()
{
    int ligne, colonne;
    for (ligne = 0; ligne < LG; ligne ++){
        for (colonne = 0; colonne < LG − ligne; colonne++){
            char ∗∗c = tableau[ligne][colonne];
            int tab = 10;
            char sep=' ';
            while (∗c) {
                printf("%c%s" ,sep ,∗c);
                sep = '|';
                tab −= strlen(∗c)+1;
                c++;
            }
            while (tab−−>0)
                putc(' ', stdout);
        }
        putc('\n', stdout);
    }
}

// Vrai si str se trouve dans la cellule[ligne, colonne]
int inCell(int ligne, int colonne, char ∗ str) {
    char ∗∗ c = tableau[ligne][colonn e];
    while (∗c)
        if(strcmp(∗ c++, str)==0)
            return 1 ;
    return 0 ;
}

// Ajoute str dans la cellule [ligne, colonne]
void addCell(int ligne, int colonne, char ∗ str) {
    char ∗∗ oldc;
    char ∗∗ c = oldc = tableau[ligne][colonne];
    while (∗ c++)
        oldc = c;
    ∗ oldc = str;
    ∗( oldc+1) = NULL;
}
/∗ La fonction principale du programme ∗/
int main ( int argn , char ∗∗ argv )
{
    int ligne, colonne ,k;

    /∗ Initialisation : on met NULL dans toutes les cases du tableau ∗/
    for ( ligne = 0; ligne < LG; ligne++)
    for ( colonne = 0; colonne < LG; colonne++) {
        tableau[ligne][colonne][0] = NULL;
    }

    /∗ Initialisation : on remplit la premiere ligne ∗/
    for ( colonne = 0; colonne < LG; colonne++ ) {
        tableau[0][colonne][0] = phrase[colonne];
        tableau[0][colonne][1] = NULL;
    }

    /∗ On parcourt tout le tableau ∗/
    for (ligne = 0; ligne < LG; ligne++){
        for ( colonne = 0; colonne < LG − ligne; colonne++){
            /∗ Tant qu’il y a de modifications, on poursuit ∗/
            int modif = 1;
            while (modif) {
                modif = 0;
                struct Regle ∗ regle = regles;
                while (( ∗ regle).lhs) {
                    /∗ Regle de type A −> B ∗/
                    /∗ On compare la partie droite de la regle avec[ligne, colonne] ∗/
                    if (regle->rhs[0]!= NULL
                        && regle−>rhs[1]== NULL
                        && inCell(ligne, colonne, regle−>rhs[0])) {
                        if (!inCell(ligne, colonne, regle−>lhs)) {
                            addCell (ligne, colonne, regle−>lhs);
                            modif = 1;
                        }
                    }
                    /∗ Regle de type A −> B C ∗/
                    if ( ligne > 0) {
                        for ( k=0; k < ligne; k++){
                            /∗ si il existe une regle A −> B C avec
                            B dans [ k , c olonne ] et
                            C dans [ ligne − k−1 , colonne +k+1] ∗/
                            if ( regle−>rhs[0] != NULL
                                && regle−>rhs[1] != NULL
                                && inCell(k, colonne, regle−>rhs[0])
                                && inCell(ligne−k−1, colonne+k+1, regle−>rhs[1])) {
                                if ( !inCell(ligne, colonne, regle−>lhs)) {
                                    addCell(ligne, colonne, regle−>lhs);
                                    modif = 1;
                                }
                            }
                        }
                    }
                    regle++;
                }
            }
        }
    }
    printf("\n");
    afficherTableau();
    if(inCell (LG−1, 0 , "E"))
        puts("reconnaissance de la sequence");
    else
        puts("sequence non reconnue") ;
    return 0;
}
```

### Complexité

Complexité de l'algorithme CYK par rapport à la longueur $$n$$ de la chaine d'entrée : $$O(n²)$$ cellules

Le remplissage de chaque cellule [i,j] avec $$A$$ se fait à l'aide de la règle $$A_{[i,j]} \rightarrow X_{1[i,k_1]} X_{2[k_1,k_2]} X_{3[k_2,k_3]} ... X_{k[k_n,j]}$$ qui met en jeu $$k-1$$ indices pour régler la taille de chaque intervalle $$[k_\alpha,k_\beta]$$.

Comme il y a $$n(n-1)/2$$ cellules, la complexité est $$O(n².n^{k-1})$$, c'est-à-dire $$O(n^{k+1})$$ où $$k$$ est la longueur maximum d'une partie droite des règles.

Coût en mémoire du tableau : $$O(n²)$$

## 4. Propriété du préfixe valide

L'item $$A \rightarrow \alpha \bullet \beta$$ est valide sur $$[i,j]$$ s'il existe $$\gamma \delta$$ tels que 

$$S \Rightarrow^* \gamma A \delta $$

$$\gamma \Rightarrow^* a_1 ... a_i$$

$$\alpha \Rightarrow^* a_{i+1}... a_j$$

## 5. Analyse Earley

Algorithme qui traite en parallèle les alternatives. Toutes les bonnes alternatives, celles qui mèneront à une analyse correcte, sont prédites dès que possible et non après un éventuel échec d'analyse. On parle d'analyse tabulaire plutôt que d'analyse déterministe.

### Algorithme

Le principe de l'algorithme consiste à regrouper tous les items valides dans des ensembles $$I_i$$ où $$i$$ est le niveau d'avancement de la lecture de gauche à droite de la chaîne $$a_1 ... a_i ... a_k $$.

- Init : $$\frac{}{(S \rightarrow \bullet \alpha,0)\in I_0}{\exists S \rightarrow \alpha \in R}$$

- Close : $$\frac{A \rightarrow \alpha \bullet B \beta, i) \in I_j}{(B \rightarrow\bullet\gamma,j)\in I_j)}{\exists B \rightarrow \gamma \in R}$$

- Shift : $$\frac{(A \rightarrow \alpha \bullet a\beta,i)\in I_j}{(A \rightarrow \alpha a \bullet \beta, i)\in I_{j+1}}{a = a_j}$$

- Reduce : $$\frac{A \rightarrow \alpha \bullet B \beta, i) \in I_j, (B \rightarrow \rightarrow \delta \bullet,j)\in I_k}{(A \rightarrow \alpha B \bullet \beta, i)\in I_k}$$


#### Algorithme de reconnaissance Early

Initialiser avec $$I_0 = \{S' \rightarrow \bullet S,0) \in I_0\}$$

Répéter pour $$i$$ allant de 1 à $$k$$ {
    Pour tout $$(A \rightarrow \alpha \bullet a_i\beta,n)$$ à $$I_{i-1}$$ {
        ajouter $$(A \rightarrow \alpha a_i \bullet \beta,n)$$ à $$I_i$$
    }

    Appliquer les règles 1 et 2 sur $$I_i$$ tant qu'elels ajoutent un item
}

Si $$I_k$$ contient l'item $$(S' \rightarrow S \bullet,0)$$ alors la chaîne $$a_1 ... a_k$$ est reconnue sinon non.

## 6.
## 7.
____

[2 - Analyse lexicale (*tokenization*)](compilation-2.md)

--

[4 - Types, vérification de type)](compilation-4.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

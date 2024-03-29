# [Compilation](index.md)

[Accueil](/index.html)

____
# Introduction

>**compilateur** : Logiciel de traduction d'un document depuis un langage **source** vers un langage **cible**.

*Langage source* : langage de programmation évolué (java, C, c++,...).

*Langage cible* : Code machine prévu pour programmer un ordinateur en particulier.

Un compilateur contient plusieurs modules :
- Analyseur lexical
- analiseur syntaxique
- analyseur sémantique
- Générateur de code intermédiaire
- Optimiseur de code
- Générateur de code

Il gère une ou plusieurs tables de symboles qui donnent au développeur la possibilité de déclarer des variables, des fonctions, des procédures, des types,... .

Détecte et signale un ensemble d'erreurs à chaque niveau d'analyse *(Variable non déclarée, incompatibilité de type, utilisation d'une procédure avec de mauvais paramètres, ...)*.

> Le compilateur fait partie d'un ensemble d'outils permettant l'implémentation de logiciels.

Produit le code final, en corrigeant les erreurs.


Préprocesseur $$\rightarrow$$ Compilateur $$\rightarrow$$ Assembleur $$\rightarrow$$ Lieur $$\rightarrow$$ Chargeur

Les phases et le résultat peuvent être différents d'un compilateur à un autre :
- Interpretation immédiate plutôt que compilation proprement dite : `Postscript`, `Shell`, `HTML`
- Production de code portable (*bytecode*) pour une machine virtuelle (`P-Code`, `Class Java`),code dédié à une machine en particulier (`Postscript`, code machine pour tel processeur)
- Langages sources plus ou moins structurés (Assembleur peu structuré vs Java structuré)
- Optimisation du code plus ou moins poussée
- Analyse et correction éventuelle des erreurs plus ou moins poussée.

*Exemple*

```C
int pgcd ( int a , int b ) {
    while ( b != a ) {
        if ( a > b )
            a = a − b ;
        else {
        /∗ Echanger a e t b ∗/
        int tmp ;
        tmp = a ;
        a = b ;
        b = tmp ;
        }
    return a ;
    }
}

```

1. Analyse lexicale :

`KEYWORD(int) IDENTIF(pgcd) LPAR KEYWORD(int) IDENTIF(a) COMMA KEYWORD(int) IDENTIF(b) RPAR LCURVE KEYWORD(while) LPAR IDENTIF(b) DIFF
IDENTIF(a) RPAR LCURVE KEYWORD(if) LPAR IDENTIF(a) GT IDENTIF(b) RPAR
IDENTIF(a) AFF IDENTIF(a) MINUS IDENTIF(b) SEMI KEYWORD(else) LCURVE
COMMENT KEYWORD(int) IDENTIF(tmp) SEMI IDENTIF(tmp) AFF IDENTIF(a)
SEMI IDENTIF(a) AFF IDENTIF(b) SEMI IDENTIF(b) AFF IDENTIF(tmp) SEMI
RCURVE KEYWORD(return) IDENTIF(a) SEMI RCURVE`

2. Analyse syntaxique :

La code est transformé en une représentation arborescente.

![](../../../img/compilation-arbre-syntaxe.png)

3. Analyse des types :

Chaque variable et la fonction sont associés aux types suivants :

**pgcd** : `int` x `int` $$\rightarrow$$ `int`

**a** : `int`

**b** : `int`

**tmp** : `int`

4. Production du code assembleur

```Assembly
WHILE1:
SET R1 DIFF a b
JUMP−IF R1 WHILE3
JUMP WHILE4
WHILE3:
JUMP−IF GT a b IF1
JUMP IF2
IF1 :
MINUS R2 A B
SET A R2
JUMP IF3
IF2 :
SET TMP A
SET A B
SET B TMP
IF3 :
JUMP WHILE1:
WHILE4:
RETURN A
```
____

[2 - Analyse lexicale (*tokenization*)](compilation-2.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
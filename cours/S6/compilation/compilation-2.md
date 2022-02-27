# Compilation

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Compilation](index.md)

# Analyse lexicale

L'analyse lexicale est traitée par un outil qui s'appelle un analyseur lexical (*scanner / tokenizer*).

## 1. Expression régulière et langage rationnel

### Quelques rappels
soit un alphabet $$\sum$$, une expression régulière est :
- élément neutre $$\epsilon$$ : chaîne vide
- lettre $$a$$ dans $$\sum$$, dénote de l'ensemble {$$a$$}

Avec deux expressions régulières : Union, Concaténation, étoile de Klenne (R*)

### Sucre syntaxique

$$R^+ = RR^*$$

$$R|S = R+S$$

$$R? = (R+\epsilon)$$

$$R\{i,j\}=R^i+R^{i+1}+...+R^j$$

$$R\{i\} = R^i$$

. caractère sauf `\n`

[^] caractère Unicode sauf les *new line*

[*liste*] caractère contenu dans la liste. La liste peut contenir des intervalles notés `a-z`

[^*liste*] caractère non contenu dans la liste

### Contexte d'une expression régulière

`^R` le mot reconnu par $$R$$ doit se trouver en début de ligne

`R$` le mot reconnu par R précède immédiatement `\n` ou la fin du fichier

`R/S` le mot reconnu par `R` précède immédiatement un mot reconnu par S.

### Commpléments utiles

`[:jletter:]` Caractère qui peut être la première lettre d'un identificateur Java

`[:jletterdigit:]` Caractère qui peut être une partie d'un identificateur Java

`[:letter:]` Lettre

`[:digit:]` Chiffre

`[:uppercase:]` Caractère capitale

`[:lowercase:]` Caractère bas de casse

`\d` chiffre

`\D` Tout caractère qui n'est pas un chiffre

`\s` espace / tabulation / ...

`\S` Tout caractère qui n'est pas un espace

`\w` Chiffre, lettre, symboles de ponctuation

`\W` Tout caractère sauf `\w`

### Négation

`!R` complémentaire

`~R` toute chaine qui se termine par la première occurence du texte dénoté par R.

`"/*"~"*/"` reconnait les commentaire du langage C

## 2. Grammaire régulière, Automate à nombre fini d'états

A toute expression régulière `R` correspond un automate à nombre fini d'états `A` qui reconnait le langage $$\sigma(R)$$.

Permet de construire un automatisme (algorithme) qui reconnait le langage dénoté par une expression régulière.

A tout automate à nombre fini d'états `A` correspond un utomate déterministe et minimal `A'` qui reconnait le même langage.

Permet de construire un automatisme déterministe pour reconnaitre un langage dénote par une expression régulière. Automatisme de complexité linéaire en fonction de la longueur de l'*input*.

## 3. JFlex

`JFlex` est un logiciel écrit en Jav qui contient principalement deux choses :
- Un programme qui permet de traduire des expressions régulières en automate à nombre fini d'états.
- Un programme qui permet de parcourir un automate à nombre fini d'états.

L'utilisateur peut choisir d'ajouter du code `Java` qui sera exécuté :
- Avant le parcours de l'automate
- Après
- Alors qu'un état final est reconnu pendant l'analyse de l'*input*.

## 4. Entités lexicales (token)

`JFlex` est conçu pour transformer des expressions régulières en automate, et pour associer du code `Java` aux états finaux de cet automate.

Cependant, les limites sont imposées par la programmation **impérative** et non celle des expressions régulières.

Il est techniquement possible de construire tout type de programmes dont des compilateurs entiers grâce à `JFlex` mais il n'est pas vraiment adapté à cet usage et d'autres logiciels seront utilisés en complément de `FLex`.

> **Token** : Mots reconnus par un *tokenizer* : mots d'un **langage rationnel**.

Nous savons que $$a^nb^n$$ n'est pas rationnel.

Les langages parenthésées (expressions logiques, arithmétiques, algébriques, ...)  ne seront pas des tokens et ne seront pas définis grâce à `JFlex`. Nous utiliserons un analyseur syntaxique en complément de l'analyseur lexical.

## 5. États de l'automate

`JFlex` permet de déclarer des états de l'automate en plus de l'état initial et de programmer des sauts d'un état à un autre.

*Exemples*

1. Commentaires

*réaliser un état `COMMENT` qui rend explicite le contexte d'analyse du commentaire.*

2. Chaînes de caractères

*Les chaînes de caractères contiennent des caractères dit échappés (saut de ligne, epace,...), ainsi que des variables non nommées permettant des substitutions (`%s`, `%d`, ...). Ces caractères doivent être analysés, alors que les autres éléments du langage (mots clefs, littéraux, ...) ignorés. état `STRING` pour distinguer ce contexte.*
____

[1 - Introduction](compilation-1.md)

--

[3 - Analyse syntaxique (*tokenization*)](compilation-3.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

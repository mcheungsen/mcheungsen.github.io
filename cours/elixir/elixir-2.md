# Elixir
[Retour Accueil Cours](https://mcheungsen.github.io/cours/ "Cours")

[Retour Elixir](index.md)

---

## Pattern Matching

Voici un code simple en utilisant Elixir Shell :
```Elixir shell
iex> a = 1
1
iex> a + 3
4
```
Nous pouvons penser que l'on assigne la valeur `1` à la variable `a`.
Or, ici le signe `=` n'est pas un assignement, mais plutôt une assertion. Il s'agit d'un **match operator**.

Dans le cas du code simple au dessus, la partie gauche est une variable, et la partie droite un integer. Elixir peut donc rendre ce matching vrai en liant la variable `a` à la valeur `1`.

```Elixir shell
iex> a = 1
1
iex> 1 = a
1
iex> 2 = a
** (MatchError) no match of right hand side value: 1
```

Ici, une erreur est survenue. On peut penser que l'on souhaite attribuer la valeur `2` à la variable `a`. Elixir change la valeur de la variable à gauche. A droite, la variable est remplacé par la valeur. Cela reviendrait dont à lire `2 = 1`.
# Programmation Système - Communication à travers les pipes

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Prog Sys](index.md)

---

## Communication entre les processus : Pipe `|`

`ls | grep pattern`

Le résultat de `ls` est redirigé vers `grep pattern`. On attend que `ls` soit terminé. Il n'y a donc pas de parrallélisme. Ordonné en FIFO *(First In First Out)*

```c
int pipe(int fildes[2]);
```
`fildes[0]` : reading
`fildes[1]` : writing

Pas de lseek
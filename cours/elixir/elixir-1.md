# Elixir

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Elixir](index.md)

---

## Introduction

La mémoire avait une ressource limitée auparavant. Cependant, l'allocation de la mémoire et son nettoyage était une tâche qui menait à l'erreur. certaines mémoires n'étaient même jamais libérées.

Le Garbage Collector était aussi une technique connue, mais nous avions besoin de CPUs plus rapides.

Muter l'état de la mémoire ralentissent les logiciels lorsque plusieurs coeurs sont utilisés, ce qui pouvait corrompre la mémoire à moins d'appliquer quelques synchronisations.

### Erlang Virtual Machine
En Erlang, tous les codes s'exécutent dans de minuscules processus concurrents, chacun ayant son propre état. Les processus communiquent entr eeux par messages. Echanger des messages dans différentes machines sur le même réseau, est géré de manière transparente par la VM.

### Elixir
Elixir est une approche pragmatique pour la programmation fonctionnelle. La transformation de données ne va pas simplement changer la donnée, mais créer une nouvelle version de la donnée. Ce qui va donc réduire le besoin de synchronisation de données.


### Installation Elixir
[Installation](https://elixir-lang.org/install.html)

### Running Elixir
```elixir
iex
```

fichiers `.iex .exs`

Quitter : Ctrl -C puis q

### Aides
```elixir
h
```
/Number : Nombre de paramètres

----

**Concurrente** : Plusieurs tâches sont exécutées. ces tâches sont en fait divisés, et vont donc se suivre. Par exemple ma tâche 1 est divisée en deux sous-tâches. donc si je fais un traitement. j'aurais 
tâche 1.1 -> tâche 2 -> tâche 1.2 -> tache 3.1 etc.... C'est une division des tâches sur un meme process.

**Asynchrone** : C'est lorsque je veux traiter quelque chose. je demande au process de l'executer. et il s'executera, dans un temps qu'il souhaite. Lorsque je fais ma demande de traitement. Il ne va pas forcément le faire juste après. d'où le fait que ce soit asynchrone.

**Parrallélisme** : Execution de plusieurs tâches sous plusieurs cores. Afin d'effectuer le plus de tâches en moins de temps.

[Cours suivant - Pattern Matching](elixir-2.md)
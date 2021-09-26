# Elixir

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Elixir](index.md)

---

## Introduction

La mémoire avait une ressource limitée auparavant. Cependant, l'allocation de la mémoire et son nettoyage était une tâche qui menait à l'erreur. certaines mémoires n'étaient même jamais libérées.

Le Garbage Collection était aussi une technique connue, mais nous avions besoin de CPUs plus rapides.

Muter l'état de la mémoire ralentissent les logiciels lorsque plusieurs coeurs sont utilisés, ce qui pouvait corromppre la mémoire à moins d'appliquer quelques synchronisations.

### Erlang Virtual Machine
En Erlang, tous les codes s'exécutent dans de minuscules processus concurrents, chacun ayant son propre état. Les processus communiquent entr eeux par messages. Echanger des messages dans différentes machines sur le même réseau, est géré de manière transparente par la VM.

### Elixir
Elixir est une approche pragmatique pour la programmation fonctionnelle. La transformation de données ne va pas simplement changer la donnée, mais créer une nouvelle version de la donnée. Ce qui va donc réduire le besoin de synchronisation de données.

https://codestool.coding-gnome.com/

### Installation Elixir
https://elixir-lang.org/install.html

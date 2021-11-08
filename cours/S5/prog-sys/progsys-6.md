# Programmation Système - Threads

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Prog Sys](index.md)

---
## Thread

Un Thread ou processus léger, permet la communication entre les processus.

On pouvait déjà communiquer entre les processus, mais ces méthodes ne sont pas optimisées :
- Signaux : les informations sont **pauvres**
- Pipe : Il s'agit d'un system call : **Lent**

Les processus peuvent faire une projection de fichier.

Projection du fichier : manipuler la mémoire et mettre à jour le fichier. : **file mapping**.

```c
void *mmap(void* adr, size_t len, int prot, int flags, int fd, off_t offset);

char *c = mmap(NULL, len, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
// NULL : demander n'importe quelle adresse
// len : taille du fichier - accessible avec lseek SEEK_END
// 0 : où ça commence
```

Ecriture : `strcopy(c, "texte");`Altérer le fichier, plus fort qu'un write

Partage de la même mémoire, mais les pointeurs sont différents.

La randomisation de l'adressage permet d'éviter les hacks. Lors de l'execution, l'adressage est toujours différent.

`mmap` : Pas de synchronisation, pas prévenu s'il y a modification ailleurs, ou si c'es terminé. Pas de notification

## Concept de thread
Processus léger : dessiné par des *traits tordus*.

Plusieurs threads peuvent partager le même espace d'adressage.

Processus : Thread + Espace d'adressage

Beaucoup d'applications se servent de processus. (Ouvrir plusieurs fois une appli : Ouvrir le code une fois avec plusieurs pointeurs).

**Thread indépendant** : réserver une pile pour le thread.

```c
#include <pthread.h>

pthread_create(&pid, NULL, function, "hello");
// Création de thread

pthread_join(pid, NULL);
// attendre que le thread soit terminé avant de poursuivre
```


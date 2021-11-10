# Programmation Système - Fichiers

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Prog Sys](index.md)

---

## Concept de fichier

> All is file philosophy (*tout est fichier*)

Série continue de bytes. La taille est connue et peut être aggrandie / rétrécie dynamiquement.

Droits d'accès : `r` read `w` write `x` execute

Un fichier peut être référencé par de multiples chemins.

## Ouverture de fichiers

Avant de pouvoir lire ou écrire dans un fichier, il faut pouvoir l'ouvrir. L'OS doit vérifier plusieurs choses : 
- l'utilisateur peut atteindre le fichier (droit d'accès aux repertoires précédents) : traverser les repertoires (`x`)
- l'utilisateur a l'autorisation de lire le fichier (`r`)

Si l'ouverture du fichier est un succès, l'ouverture retourne un **file descriptor**.

**file descriptor** : clé permettant de faire les opérations de lecture et écriture.

```c
int open(const char *path, int oflag, ...);
```

**oflag** :
- `O_RDONLY`, `O_WRONLY`, `O_RDWR`, `O_CREAT`
- `O_CREAT`, `O_TRUNC`, `O_SYNC` , ...

Lorsqu'un fichier est créé, le troisième paramètre donne les droits d'accès (notation octal)

![image](../../../img/rwx.png)

## Lecture de fichiers
```c
ssite_t read(int fildes, void *buf, size_t nbyte);
```

Retour :
- -1 : Erreur (mauvais file descriptor, dispositif en panne, ...)
- 0 : Fin du fichier

`fildes` : file descriptor

`buf` : buffer. Où stocké ce que l'on lit.

`nbytes` : Le nombre d'octet que l'on souhaite lire. un `\n` compte pour un octet. un caractère vaut aussi un octet.

## Ecriture de fichiers
```c
ssize_t write(int fildes, void *buf, size_t nbyte);
```

Retour :
- -1 : erreur
- nombre d'octets écrits

L'écriture à la fin du fichier va automatiquement étendre le fichier.

Si on ouvre un fichier et qu'on écrit directement dedans, alors l'écriture va écraser les premiers octets du fichier pour les remplacer par ce que l'on écrit. Dans ce cas, si on veut ajouter et non écraser, il faut aller d'abord à la fin du fichier.

## Copier des données structurées
Représentation **ASCII** : Convertir les integers en String, et penser à un séparateur.

Ce format ne convient pas si on veut manipuler des données.

Représentation **binaire** : Enregistre les nombres sous formes d'adresse binaire

`hesdump -C` : Nb d'octets avec la valeur de chaque caractère en ASCII.

## File Descriptor pré-ouverts

Standard input/output :

0 : STDIN_FILENO

1 : STDOUT_FILENO

2 : STDERR_FILENO

`read(STDIN_FILENO, ...);` : lire ce que l'utilisateur a écrit dans l'entrée standard (terminal)

Il est possible d'ouvrir un fichier plusieurs fois, et donc d'avoir plusieurs file descriptor. Les pointeurs sont indépendants. Il ne sont donc pas synchronisés aux autres pointeurs.

Une synchronisation est possible mais pas lors de l'ouverture du fichier.

## Changer la position du pointeur
Lors de l'ouverture du fichier, on arrive au tout début du fichier. Il est possible de vouloir atteindre directement la fin du fichier, voire même d'atteindre une position précise dans le fichier.

```c
off_t lseek(int fildes, off_t offset, int whence);
```

`offset` : Nombre de déplacement du pointeur

`whence` : 
- `SEEK_SET` : début du fichier
- `SEEK_CUR` : position courante
- `SEEK_END` : fin du fichier 

Le retour ne peut être négatif. Il s'agit de la position absolue du pointeur

*Exemple : `lseek(fd, 2, SEEK_CUR)` va avancer de 2 positions depuis la position actuelle.*

Taille du fichier : `lseek(fd, 0, SEEK_END)`

## Duplication de file descriptor
```c
int dup(init fildes);
int dup2(int src_fd, int dst_fd);
```

## API standrad de C
Les appels système d'API standard sont plus rapide :
Utilisation d'un tampon buffer qui anticipe et prépare les futures lectures.

`fwrite` : Accumule les écritures dans le buffer. L'écriture se fait lorsque le buffer est plein ou avec le dernier fwrite.
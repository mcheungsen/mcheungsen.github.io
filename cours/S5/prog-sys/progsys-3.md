# Programmation Système - Processus

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Prog Sys](index.md)

---

# Processus

Instances de programmes

De multiples processus peuvent exécuter le même programme indépendamment.

## Espace d'adressage
Un processus est composé d'espace d'adressage divisé en régions de mémoire non contiguës.

<img src="../../../img/process.jpg" alt="test" width="200">


Régions :
- Code
    - Instructions exécutables
    - Région en read only / execution
- Données
    - Allocation de variables statiques
    - segment de données initialisées
    - segment de données non initialisées
- Tas *heap*
    - Allocations dynamiques (malloc, free)
    - Géré par `libc` : expansion dynamique
- Pile *Stack*
    - Allocation des paramètres de fonctions et variables locales
    - Aggrandissement automtique avec une limite par défaut de 8 Mib sous Linux.
- Librairies partagées 
    - `libc, libm, libGl`

`Segmentation fault` : Accés à la mémoire vers une adresse invalide.

## Contexte d'exécution
En addition de l'espace d'adressage, le noyau stocke pour chaque processus :
- Process ID : see `getpid()`
- Priorité du process
- User ID (read, effective) : propriétaire du processus (peut en avoir 2)
- File Descriptor table
- Espace pour backup enregistrés

## Création de processus

```c
pid_t fork();
```

Clone l'appel du processus. Il y a 2 processus au lieu d'un.
L'espace d'adressage est dupliqué, et est indépendant.

Retours :
- Côté père : PID du fils
- Côté fils : 0
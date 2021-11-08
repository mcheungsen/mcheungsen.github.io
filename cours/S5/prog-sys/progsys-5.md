# Programmation Système - Signaux

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Prog Sys](index.md)

---

## Concept d'un signal

Les signaux sont des notifications envoyés aux processus. Ce sont simplement des nombres.

1. SIGHUP
2. SIGINT
3. SIGQUIT
4. SIGILL
5. SIGTRAP
6. ...
29. SIGINFO
30. SIGUSR1
31. SIGUSR2
32. ...
64. SIGRTMAX

*Obtenu en utilisant `kill -l`*

Les signaux sont souvent utilisés pour notifier des évènements : 
- Depuis l'OS

`SIGALRM` : Timer expiration

`SIGCHLD` : Child Termination

`SIGINT` : Interruption du programme : ctrl c

`SIGPIPE` : Broken Pipe
- Depuis les applications

`SIGTERM` : "please terminate"

`SIGKILL` : "Sorry I have to kill u"

`SIGUSR1 SIGUSR2`

`SIGSTOP SIGCONT` : Job control

- Depuis le processeur (exceptions)

`SIGSEGV` : Segmentation fault

`SIGILL` : Illegal instruction

`SIGBUS` : Deferencing misaligned pointer

`SIGFPE` : Erreur arithmétique

------

Les signaux sont **asynchrones**.

Un signal à destination d'un processus peut être : 
- Envoyé
- Ignoré
- Bloqué (reporté)

Certains signaux ne peuvent pas être ignorés ou reportés : `SIGKILL`, `SIGSTOP`

**Chaque signal a son propre comportement.**

Beaucoup de signaux mènent vers la terminaison d'un processus : `SIGTERM, SIGINT, SIGALRM, SIGKILL, ...`

Certains vont mener à la terminaison et la génération de core dump dans un fichier (copie de la mémoire - registres) : `SIGSEGV, SIGFPE, SIGBUS, SIGQUIT, SIGABRT, ...`

D'autres sont ignorés : `SIGCHLD`

## Envoyer des signaux explicitement

**Commande shell** : `kill -SIG pid`

`kill -INT 62354`, `kill -9 37463` / `kill -KILL 37463`

**system calls** : 
```c
int raise(int sig);
// send signal to ourself (current process)

int kill(pid_t pid, int sig);
// send signal sig to process pid
```
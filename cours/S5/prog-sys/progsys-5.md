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

## Manipulation de signal

Le Noyau maintiens une table de manipulation de signal par processus.

`SIG_DFL` : Comportement par défault

`SIG_IGN` : ignore

`void(*func)(int)` : user-level handler

### Changer le comportement associé à un signal :

`sigaction` syscall.

```c
struct sigaction sa, old;

sa.sa_flags = 0;
sigemptyset(&sa.sa_mask);

sa.sa_handler = my_func;

sigaction(SIGINT, &sa, &old);
```

Prise temporaire de signaux :
```c
catch(SIGINT);
sleep(5);
uncatch(SIGINT);
sleep(5);
```

## Signaux en attente

La distribution des signaux est **asynchrone**.

*Le kernel envoie un bit "en attente" dans la table. Le signal est délivré dès que possible.*

Si deux signaux sont envoyés presque en même temps, un signal peut être perdu.

## Bloquer les signaux

Parfois l'envoie d'un signal est indésirable. *update d'une structure de donnée complexe / processus pas prêt pour récuperer les signaux.*

On peut donc mettre "en attente" des signaux.

```c
int sigprocmask(int how, sigset_t *set, sigset_t *oset);
```

1. Construire un mask (set) dans l'espace user.
2.  `sigprocmask` :
    - `SIG_SETMASK` replace
    - `SIG_BLOCK` bloque les signaux marqués avec un 1.
    - `SIG_UNBLOCK` débloque le ssignaux marqués avec un 1.

```c
//Exemple : Bloquer SIGQUIT
sigset_t s;
sigenptyset(&s):
sigaddset(&s, SIGQUIT); // attribut 1. marqué.

sigprocmask(SIG_SETMASK, &s, NULL); // remplace toute la table

sigprocmask(SIG_BLOCK, &s, NULL); // remplace uniquement SIGQUIT
```

## Manipuler les exceptions
Lorsqu'il y a des exceptions, le kernel envoie un signal au processus courant :
`SIGSEGV`, `SIGILL`, `SIGFPE`

Si on souhaite manipuler ces signaux et que l'erreur n'est pas géré, il y aura une boucle infini.

```c
int *ptr = NULL;

void my_sig_handler(int sig) {
	printf("I receive a signal %d\n", sig);
}

int main(int argc, char const *argv[]) {
	struct sigaction sa;

	sigaction(SIGSEGV, my_sig_handler);
	*ptr = 12;
	return 0;
}

```

## Saut non-local
*Sauvegarder l'état du processeursur certains points.*

*Retourner à ce point plus tard en restaurant l'état du processeur.*

```c
typedef struct {
    // space to save registers, etc...
} jmp_buf [1];

jmp_buf my_buf;
```

```c
jmp_buf my_buf;
int r = setjmp(my_buf);
```
Premier appel : sauvegarde registers dans `my_buf`.

Retours suivants : téléportation

```c
longjmp (my_buf, val);
```

Restaure tous les registres stockés dans `my_buf`


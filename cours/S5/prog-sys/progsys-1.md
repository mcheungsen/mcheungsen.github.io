# Programmation Système - Introduction

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Prog Sys](index.md)

---

## Système d'exploitation
Il n'est pas nécessaire d'avoir un OS pour que le PC puisse fonctionner.

L'utilisateur utilise un OC principalement pour faire abstraction des Hardware et la factorisation du code.
La manipulation des fichiers est plus simple, et une interface graphique est fournie pour simplifier l'utilisateur.

Un OS est composé de :
- drivers
- programmes (background ou exécuté à la demande)
- librairies
- autorité qui gère le système

**Daemons** : Programmes exécutés en arrière plan. *inetd, cupsd, sshd, syslogd*

## BIOS
ROM BIOS / System BIOS

Le BIOS contient la toute première instructions, exécutée par le processeur.

Sans BIOS = pas de démarrage

Responsable de l'initialisation des harware, de leur configuration, et du démarrage de l'OS

**UEFI** : Unified Extensible Firmware Interface. Il a remplacé le BIOS en 2005, que l'on appelle aujourd'hui le BIOS.

## Interruption
**Interruption** : Signal envoyé au programme. Tous les périphériques envoient des interruptions presque tout le temps. Cette interruption peut aussi être créée par le CPU lui-même.

*Clavier (touche = interruption), souris (Déplacement, clic), timers*

## Time Sharing
**Le time sharing** permet d'éviter que les processus s'exécutent à l'infini. Le kernel/noyau met donc en place un timer ($$\approx$$ 10ms) déclenchant les interruptions.

Le noyau empile et dépile les données du processus. Il peut faire alterner des programmes en cours d'exécution.

S'il y a plus d'applications que de coeurs, le noyau alterne entre les programmes pour faire "comme si" ils s'exécutent en même temps.

## Privilèges
Des instructions sont interdites par les processus mais autorisées au noyau.
Le noyau est sage. Les processus ne peuvent pas directement avoir accès à l'hardware.

Le processeur va donc vérifier avec chaque instruction s'il y a le droit d'exécution.

- mode protégé : mode utilisateur
- mode réel : mode noyau

S'il n'y a pas le droit : exception levée. Le noyau récupère la main et va gérer ce problème. (kill le processus)

Lorsqu'une interruption se produit, le processeur change son mode utilisateur en mode noyau.

### Requête de privilèges
Les processus n'ont pas d'accès direct à l'hardware. Cependant, on souhaite avoir accès à celui-ci dans plusieurs cas.

*Afficher une chaine de caractère dans un terminal, lire un caractère depuis le clavier, créer un nouveau processus*

Un requête de privilèges est faites pour demander la permission au kernel d'exécuter temporairement des instructions.

Un processus enregistre le numéro de la fonction à utiliser dans un registre et lance une interruption. `syscal` Le noyau va check ce numéro, et exécuter la fonction correspondante s'il n'y a pas de problème.

Il existe des centaines de "system call".

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
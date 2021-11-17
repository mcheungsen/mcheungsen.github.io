# Programmation Orientée Objet

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour POO](index.md)

## Les Fichiers
`java.nio.file` > java 7

Support des exceptions

Gestion des liens

Notification API : WatchService

Méthodes utilitaires

_____

Dans NIO il y a un certain nombres de classes : `Path`, `Files`, ...

### Gestion des entrées / sorties

Flux de données entre une source et une destination.

Types de flux :
- Flux de byte

`InputStream` abstraite :

`int read()` 0 -> 255 -> -1

`int read(byte[]b)`

`skip`

`close()` : libérer les ressources.




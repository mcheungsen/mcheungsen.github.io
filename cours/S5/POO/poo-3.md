# Programmation Orientée Objet

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour POO](index.md)

## Exceptions
Parfois, les tests ne suffisent pas. On souhaite récupérer des erreurs et retourner une exception. L'utilisateur peut faire des erreurs par lui-même.

*Ouvrir un fichier qui n'existe pas, effectuer une division par 0*

Il est possible de créer une exception qui décrit l'erreur afin de la lever.

```java
try{
    //corps du code
} catch(NullPointerException e){
    //traitement de l'exception
} catch(ClassException e){
    //traitement de l'exception
} catch(MyException1 | MyException2 e){
    // Traitement de l'exception
    e.getMessage(); // renvoie string message.
    e.stackTrace(); // Chaine qui décrit les frames immédiates de la pile des appels.
} finally {
    // Code executé dans tous les cas avec ou sans exception
}

g() throws MonException{
    // ...

    throw new MonException("erreur");
}
```

**Unchecked exceptions** : Pas besoin de vérifier si elles sont levées, pas besoin de les écrire. L'exception est levée automatiquement (*Nullpointer / out of bounds / ...*).

Si on définit une classe avec des unchecked exceptions, la classe aura un comportement différent qu'avec une classe `Exception`.

### Création d'une exception

```java
Class MonException extends Exception{
    
}
```

## Hiérarchie des exceptions

`Trowable`
- `Error`
- `Exception`
    - `RunTimeException`

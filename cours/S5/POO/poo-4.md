# Programmation Orientée Objet

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour POO](index.md)

## Les interfaces

Une **interface** java est une liste de fonctionnalités communes qui sont implémentées par plusieurs classes.

L'nterface indique les **signatures de méthodes** que chaque classe va posséder.

```java
public Interface monInterface{
    String nom;

    void agir(Situation s);
}

public class class1 implements monInterface{

    public monInterface(){
        nom = "monNom";
    }

    @Override
    void agir(Situation s){
        // ...
    }
}
```

## Interfaces vs Classes abstraites

Les interfaces ne fournissent qu'une liste de méthodes abstraites.

Les classes abstraites possèdent des champs et des méthodes abstraites ou concrètes. Les classes abstraites peuvent avoir des méthodes et des attributs statiques.
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

## Classe Anonyme, Expressions Lambda

```java

public Interface Operation{
    int calculer(int x, int y);
}
```

```java
public class Somme implements Operation{
    @Override
    public int calculer(int x, int y){
        return x+y;
    }
}
```

```java
int calcul(int x, int y, Operation op){
    System.out.println(op.calculer(x,y));
}

calcul(2, 3, new Somme());

calcul(2, 3, new Operation(){
    @Override
    public int calculer(int x, int y){
        return x*y;
    }
}); // Classe anonyme

calcul(2, 3, (x,y)->x/y); // lambda

l.foreach(System.out::println);
```

```java
List<String> l = array.asList("aaa", "abb", "acc", "dd");

l.stream().filter(s -> s.startsWith("a"))
    .map(s->" "+s) // ajouter _ devant
    .limit(2) // 2 premiers éléments
    .map(String::toUpperCase) // Majuscule
    .forEach(System.out::println); //Affichage _AAA _ABB
```

Stream : approche fonctionnelle


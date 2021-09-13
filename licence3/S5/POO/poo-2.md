# Programmation Orientée Objet

[Retour Licence 3](https://mcheungsen.github.io/licence3/ "Licence 3")

[Retour POO](index.md)

## Accessibilité
**Packetage** : Espace de visibilité. Repertoire danslequel on place les différentes classes.

*public* : Lisible par toutes les classes

*private* : Accessible à la classe elle-même (instances de la classe)

*default* : Accessible par les classes se situant dans le même package

## Héritage
Exprimer des similitudes, pour éviter de "dupliquer" les attributs / méthodes...

Un rectangle et un cercle ont en commun, les coordonnées x et y, la couleur, la méthode `draw()`... Afin d'éviter cette duplication, on créé une **classe-mère** `Figure` qui comporte les similitudes.

```java
Class Figure{
    int x, y;
    Color couleur;

    Figure(int x, int y, Color c){
        this.x = x;
        this.y = y;
        this.couleur = c;
    }

    void draw(){
        // ...
    }
}
```
Enfin, on créé les classes `Rectangle` et `Cercle`.

```java
Class Rectangle extends Figure{
    int width, height;

    Rectangle(int x, int y,Color c, int width, int height){
        super(x, y, c);
        this.width = width;
        this.height = height;
    }
}
```

**Classe fille** : `Rectangle`

**Classe mère** : `Figure`

Un `Rectangle` est forcément une `Figure`. Mais une `Figure` n'est pas forcément un `Rectangle`.

Tous les classes héritent de la classe `Object`.

## Redéfinition et Surcharge

Parfois, on souhaiterai modifier une méthode pour chaque classe. Par exemple, la méthode `draw()` possède un code différent selon la figure (Rectangle, Cercle, ...). 

On peut donc effectuer une **redéfinition** du code. Ainsi, la classe-mère possède une méthode `draw())` et la classe-fille `Rectangle`veut redéfinir cette méthode.

```java
@Override
void draw(){}
```

La **Surcharge**, quant à elle, va permettre de créer une méthode plusieurs fois, avec une signature différente.

Surcharge $\neq$ Redéfinition

Surcharge : Signature différente, le type de retour peut différer, même nom

Redéfinition : Même signature, même type de retour (sauf si covalance), même nom

**Covalance** : Varie de la même manière.
Par exemple, une méthode ayant comme retour une `Figure`, pourra avoir en retour un `Cercle` ou un `Rectangle`. Il y a une covalance.

## Polymorphisme
**Late Binding** : Ligature Dynamique

Manipuler un objet sans connaitre son type.

*Manipuler une Figure sans savoir si c'est un Rectangle ou un Cercle*
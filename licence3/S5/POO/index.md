# Programmation Orientée Objet

http://www.reveillere.fr/

## Les Objets
Un objet est une instance d'une classe. Au lieu de traiter les données et les traitements séparément, on regroupe tout dans une même entité.

```java
Rectangle rect = new Rectangle(3.0, 4.0);
```

Ici, onb créé une variable `rect`, qui contient une référence vers l'objet de type `Rectangle`.

**JVM** : Java Virtual Machine gère la mémoire en Java. Il n'y a donc pas besoin de s'en occuper soi-même.
La JVM alloue et libère automatiquement la mémoire grâce au **Garbage Collector**.

Le Garbage Collector supprime automatiquement les objets de la mémoire. Pour qu'un objet soit supprimé, il faut que plus aucun objet n'ait de référence vers celui-ci.


## Langage Java
Langage compilé et interprété.
Code source `.java` passe dans un compilateur **javac** générant ainsi un **bytecode** fichier `.class`.

Les fichiers `.class` sont dont indép'ndants du système et de l'architecture matérielle.

**JRE** : Jave Runtime Environment : Execution de programme dans la JVM.

**JDK** : Java Development Kit : JRE + Compilateur

La JVM contient d'autres mini-programmes

## Les classes
Une classe est une définition de type d'objet. Une classe possède plusieurs instances d'objets différents.
Un fichier `.java` : Une classe.

```java
//fichier Rectangle.java
class Rectangle {

	/*
	Des propriétés/attributs
	*/
	double largeur;
	double hauteur;

	/*
	Constructeur de la classe. Pas de type de retour (en fait ça retourne une référence de l'objet en mémoire)
	*/
	Rectangle(double largeur, double hauteur){
		/*
		Du point de vu d'un objet, le mot clef this sert à pointer vers soi-même donc this.largeur est ma largeur. largeur sans this pointe vers le paramètre de la fonction.
		this permet de faire la différence entre les attributs de l'objet et les paramètres de la méthode/constructeur si ils ont les mêmes noms.
		*/
		this.largeur = largeur;
		this.hauteur = hauteur;
	}

	/*
	Surcharge du constructeur (même nom mais type différent)
	Cela permet de faire des choses différentes de l'autre constructeur
	*/
	Rectangle(double size){
		//this(<params>) référence un autre constructeur
		this(size, size);
	}

	/*
	Une méthode/fonction
	*/
	double surface(){
		return largeur*hauteur;
	}

	/*
	le type void : retourne rien
	*/
	void increment(){
		largeur++;// pareil que largeur=largeur+1; et pareil que largeur+=1;
		hauteur++;
	}

	String toText(){
		return "Rectangle("+largeur+", "+hauteur+")";//concaténation de string et double avec les +
	}

}
```

### Surcharge
Même nom mais signature différente. Le type de sortie n'est pas prise en compte.

### Types primitifs
`boolean`

`char` 8 bits

`byte` 16 bits

`void`

#### Nombres entiers
`short`16 bits

`int` 32 bits

`long` 64 bits

#### Nombres décimaux
`float` 32 bits

`double` 64 bits
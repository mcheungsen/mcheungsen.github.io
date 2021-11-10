# Programmation Orientée Objet

[Retour Licence 3](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour POO](index.md)

## Les collections

- Regrouper des objets / éléments
- Comportements différents selon le type de regroupement (Listes, Ensembles, ...)

Interface `Collection` se trouvant dans `java.util`

- Ajouter un élément
- Suppriemr un élément
- size
- Contains
- ...

**Generics** : Types génériques


### Listes

`List<E>` : 
Collection ordonnée d'éléments avec une taille non bornée.

Opération tête de liste et queue de liste

`ArrayList<E>` : Facilité pour récuperer via un indice

`LinkedList<E>` : Facilité pour ajouter élément en plein milieu

```java
List<String> l = new ArrayList<>();

```

`java.util.Iterator<E>` :
- `hasNext()`
- `next()`
- `remove()`

Failfaviterator : Modification conccurrente. 

Si on veut supprimer un élément, il faut créer un iterateur :
```java
List<Integer> numbers = new ArrayList<>();

// ...

Iterator<Integer> iterator = numbers.iterator();

while(iterator.hasNext()){
    if(iterator.next() == 30){
        iterator.remove();
    }
}
```

### Ensembles
`Set<E>` : Collection d'objets sans répétitions mais ne garantit pas l'ordre.

`HashSet<E>`, `TreeSet<E>`, `LinkedHashSet<E>`, ..

### Maps
`Map<K,V>` : Liste associative clé-valeur

**Les maps ne sont pas dans les Collections**, on ne peut donc pas itérer avec `Iterator`

`HashMap`, `TreeMap`, ...

`Set<K> keySet();` : Récupérer les clés

`Collection<V> values();` : Récupérer les valeurs

Table de Hashage : etant donnée une clé, on obtient une valeur. Ensemble de couples k,v.

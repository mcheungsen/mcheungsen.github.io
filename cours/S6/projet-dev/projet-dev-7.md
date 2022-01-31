# Projet de développement logiciel

[Retour Cours](https://mcheungsen.github.io/cours/ "Licence 3")

[Retour Projet Dev](index.md)

______
# Traitement d'images

## Traitement / Analyse d'image
![](../../../img/traitement-image-1.png)

**Traitement** (bas niveau) : Suppression du bruit, augmentation de contraste, lissage, réhaussement des contours

**Analyse** (haut niveau) : Extraction d'informations

## Traitement d'images dans le projet

Structures de données et algorithmes spécifiques

Utilisation de la bibliothèque de manipulation d'images `Boofcv`

http://boofcv.org

> sous-problème : Temps de calcul complexité des des algorithmes, parallélisation

applications de retouche d'images existantes : gimp, Pixlr, Polarr PhotoEditor

> Numérisation = échantillonnage (nombre fini de points) + quantification (nombre fini de nuances)

## Image numérique
**Image numérique :** Matrice de pixels (largeur w, hauteur h)

**pixel :**
- Coordonnées dans l'image
- Valeur (notation I) niveau de gris ou couleur

## Codage de valeurs des pixels

### En niveau de gris

- La valeur d'un pixel est son intensité lumineuse
- binaire : 0 noir / 1 blanc
- Codage 8 bits : 0,...,255 (du plus foncé au plus clair)

### En couleur
- Codage dans l'espace RGB : trois intensités lumineuses rouge, vert, bleu.
- Codage 24 bits :

R = 0,...,255

G = 0,...,255

B = 0,...,255

> Transparence canal alpha

## Image en niveau de gris dans Boofcv

classe `GrayU8`

> Image with a pixel type of unsigned 8-bit integer

```java
// accesseurs
int get(int x, int y);
void set(int x, int y, int value);

// dimension
int width;
int height;
```

Il existe d'autres classes utiles : `GrayImageOps`, `GThresholdOmageOps`, `EnhanceImageOps`, etc.

## Histogramme
A chaque valeur on associe le nombre de pixels de l'image ayant cette valeur

![](../../../img/image-histogramme-1.png)

## Luminance ou brillance d'une image

**Luminance ou brillance** : Moyenne de tous les pixels de l'image

> Pour augmenter la **luminance**, on peut ajouter une valeur constante à tous les pixels. L'histogramme est alors décalé.

![](../../../img/image-luminance.png)

## Constraste

Variance des niveaux de gris

$$\frac{1}{N} \sum \limits_{n=1}^N(I_n - Moy)²$$

$$I_n$$ 
valeur du nième pixel

$$N$$
nombre de pixels de l'image

## Améliorer le contraste

### Extension linéaire de dynamique
> On étire la dynamique en rééchelonnant les niveaux de gris entre 0 et 255.

$$I'=\frac{255}{max-min}(I - min)$$

![](../../../img/extension-lineaire_image.png)

```
// Initialisation de la LUT
Pour tout niveau de gris ng entre 0 et 255
    LUT[ng] = ( 255* (ng - min) / (max - min)
//Calcul de la transformation
Pour chaque pixel
    I' = LUT[I]

```

> **Limite** : Si la dynamique est déjà maximale, la transformation n'apporte aucun changement

### Égalisation de l'histogramme

![](../../../img/egalisation-image.png)

1. Calcul de l'histogramme h(k) avec $$k \in [0,255]$$
2. Histogramme cumulé $$C(k) = \sum \limits_{i=1}^N(h(i))$$
3. Transformation des niveaux de gris de l'image $$I'= \frac{C(I)*255}{N}$$ $$N$$ est le nombre total de pixels de l'image
______
[6](projet-dev-6.md) - [8](projet-dev-7.md)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
# Print-It WebSite v.1
https://github.com/ValKer-OPCS/OPCS-P5

Projet OpenClassRooms - Intégrateur Web - Projet 5

Premiers pas sur le langage JavaScript - dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it

Carrousel Dynamique

Ce projet a pour objectif de créer un carrousel d’images interactif avec navigation par flèches et bullet points, entièrement fonctionnel en HTML, CSS et JavaScript.

📌 Étapes de réalisation
1. Mise en place des flèches de navigation

Analysez le code HTML et CSS pour identifier les éléments existants.

Ajoutez les images des flèches :

arrow_left.png

arrow_right.png

Vérifiez leur intégration visuelle grâce au CSS fourni.

2. Ajout d’interactivité aux flèches

Ajoutez un event listener sur chaque flèche.

Testez le fonctionnement avec console.log() ou alert().

Vérifiez que le clic sur la flèche gauche et celui sur la flèche droite sont bien différenciés.

3. Ajout des bullet points

Ajoutez les bullet points sous le slider (un par image).

Indiquez la slide active avec une classe CSS spécifique (par défaut : la première).

Le nombre de points doit correspondre au nombre d’éléments du tableau slides dans script.js.

4. Navigation entre les slides

Au clic sur la flèche droite :

Changez le bullet point actif vers le suivant.

Affichez l’image suivante.

Modifiez le texte associé (tagLine).

Au clic sur la flèche gauche : même fonctionnement, mais en sens inverse.

5. Gestion des bords et boucle infinie

Par défaut, le carrousel plante si :

on clique à gauche sur la première image,

ou à droite sur la dernière image.

➡️ Ajoutez des conditions pour corriger ce comportement :

Si on est sur la dernière image et qu’on clique à droite : retour à la première image.

Si on est sur la première image et qu’on clique à gauche : retour à la dernière image.

Le texte et le bullet point doivent toujours être synchronisés avec l’image affichée.

✅ Résultat attendu

À la fin, le carrousel :

Affiche les flèches de navigation.

Réagit aux clics (droite/gauche).

Affiche des bullet points dynamiques.

Permet de parcourir toutes les slides avec boucle infinie.

Synchronise correctement image, bullet point et texte associé.
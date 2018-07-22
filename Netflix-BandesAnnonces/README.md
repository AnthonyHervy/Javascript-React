# Netflix de bandes annonces 

<img src="http://image.noelshack.com/fichiers/2018/29/7/1532272060-netflixbandesannonces.png" />

## Explication

Nous utilisons ici l'API de themoviedb.org. La page d'intro charge les 6 premiers films au box office : 
le premier est en place centrale avec trailer youtube (on récupère l'id de la video youtube grâce à l'API), 
titre et description. Lorsque l'utilisateur recherche un film, le projet recherche la bande annonce 
correspondante et liste 5 films recommandés en relation avec la recherche. 

# Utilisation 

Télécharger le projet, puis, dans un terminal après s'être déplacé dans le dossier du projet :
 
```
npm install
npm start
``` 

# Contenu

- Utilisation d'une API
- notion de callback : pour remonter les infos d'un composant enfant vers un parent 

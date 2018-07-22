
/*
* Consigne : créer une fonction qui test si un carré est un carré latin.
* Particularité : la taille du carré latin n'est pas précisée !
* Il faut donc prévoir une fonction qui test
* un carré de n lignes contenant chacune n éléments
*/

'use strict'

/*
* On commence par créer un carré n.
* ex : si on choisit 4, on aura un carré de 4 lignes contenant chacune 4 éléments
*/

function creerCarre(n) {
  var carre = new Array();

  for(var i = 0; i < n ; i++){
    carre[i] = new Array();
    for (var j = 0; j < n ; j++){
      carre[i].push(j);
    }
  }
return carre
}

/* Fonction de rotation : pour déplacer les éléments d'un tableau x fois
*  ex : rotate([1,2,3,4], 2) doit renvoyer [3,4,1,2] */

function rotate(array,n){
  for(var i = 0; i < n ; i++){
    array.push(array.shift())
  }
  return array
}

/* Pour rendre latin un carré, on applique la rotation en fonction
* de sa position : 1 rotation pour la première ligne, 2 pour la seconde, etc.
héhé :D */

function rendreLatin(carre){
  var i = 1;
  carre.forEach(function(array) {
    rotate(array,i);
    i++;
  })
    return carre
}

/* Pour verifier si un carre est latin, on va avoir besoin d'une fonction
* qui compte le nombre d'occurences d'un tableau. */

function countOccurences(tab){
	var result = {};
	tab.forEach(function(elem){
		if(elem in result){
			result[elem] = ++result[elem];
		}
		else{
			result[elem] = 1;
		}
	});
	return result;
}

/* et enfin la fonction pour tester si un carré est latin ou non :
  1. Pour chaque ligne, on compare les éléments, ils doivent tous être différents
  2. ensuite comparer les éléments par colonne */

function testCarreLatin(carre){
    let estLatin;
    let resultat = new Array();
    var i;
    var j;
    for (i = 0; i < carre.length; ++i) {
        // carre[i] contient la ligne
        var comptage_occurences_ligne = countOccurences(carre[i]);
        for (var k in comptage_occurences_ligne){
            if (comptage_occurences_ligne.hasOwnProperty(k)) {
                // On compte la présence de chaque occurence dans la ligne. 
                // Chaque chiffre doit être unique, si != 1 Alors le carré n'est pas latin
                if(comptage_occurences_ligne[k] != 1){
                    resultat.push(false);
                }
                // Sinon ce test est passé, on l'indique dans le resultat
                else{
                    resultat.push(true);
                }
            }
        }  
    }
    // Second test : compter le nombre d'occurences pour chaque colonne
    for (i = carre.length-1; i != -1; --i) {
        // console.log(carre[i]);
        for (j = carre.length-2; j != -1; --j){
            if(carre[i] != carre[j]){
            // console.log(carre[j]);
                // On ne compare pas quand i et j représentent le même tableau (debug)
                if (carre[i][j] != carre[j][j]){
                    // Les valeurs sont différentes, ça passe
                    resultat.push(true);
                    // *** console.log("TRUE : les valeurs " + carre[i][j] +" et " + carre[j][j] + " sont différentes");
                }
                else{
                    // sinon échec du test
                    resultat.push(false);
                    // *** console.log("FALSE : les valeurs " + carre[i][j] +" et " + carre[j][j] + " sont identiques");
                    } 
                }
            }
        }
    // Dernière étape : si des tests ont répondu FALSE, le carré n'est pas latin. Sinon ok
    if(resultat.includes(false) == true){
        estLatin = false;
      }
      else{
        estLatin = true;
      }
    return estLatin;
} 

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof creerCarre, 'function')
assert.strictEqual(creerCarre.length, 1)
assert.deepEqual(creerCarre(2), [[0,1],[0,1]])
assert.strictEqual(typeof rendreLatin, 'function')
assert.strictEqual(rendreLatin.length, 1)
assert.deepEqual(rendreLatin(creerCarre(2)), [[1,0],[0,1]])
assert.strictEqual(typeof testCarreLatin, 'function')
assert.strictEqual(testCarreLatin.length, 1)
assert.strictEqual(testCarreLatin(rendreLatin(creerCarre(5))), true)
assert.strictEqual(testCarreLatin(creerCarre(8)), false)
// End of tests */
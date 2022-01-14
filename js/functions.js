/* Déclaration de la fonction 'maFonction' */
function maFonction(toto)
{
  toto.marque = "Toyota";
  toto.pneus = "pneus Neige";
  console.log("j'ai changé la valeur de la clé marque de l'objet que vous m'avez passé en paramètre ");
}

let monh2Recupere = document.querySelector('.monh2');
monh2Recupere.innerHTML = "MON NOUVEAU TITRE";
monh2Recupere.addEventListener('click', changerCouleur);
function changerCouleur(){
  monh2Recupere.style.color = "red";
  monh2Recupere.style.backgroundColor = "#ddd";
  monh2Recupere.style.fontSize = "24px";

}
console.log(monh2Recupere);
/*
 * Déclaration de la variable 'mavoiture';
 * création et initialisation d'un nouvel objet;
 * assigner une référence à 'mavoiture'
 */
var mavoiture = {
  marque: "Honda",
  modele: "Accord",
  annee: 1998
};

/* Affiche 'Honda' */
console.log(mavoiture);

/* Passer la référence de l'objet à la fonction */
maFonction(mavoiture);

/*
 * Affiche 'Toyota' pour valeur de la propriété 'marque'
 * de l'objet. C'est ce que la fonction a changé.
 */
console.log(mavoiture.marque);

var result = (function () {
    var name = "Barry";
    console.log(name);
    return name;
})();
// Crée immédiatement la sortie:
//console.log(result); // "
var num = 255;
var txt = "dfdd";
var b = num + txt;
console.log("num + txt ="+b);
/***
*
* Créer une fonction immédiate qui crée un objet Voiture au rechargement de la page:
* Voiture( marque : "", modele : "", type : "", couleur:"" , poids : "")
*afficher les couples clé/valeur de l'objet dans une liste ul
*/
let immediately = document.querySelector('#immediately');
immediately.textContent = "Les caractéristiques de ma belle voiture sont : ";
var Voiture = { marque : "Mercedes", modele : "GLA AMG 45", type : "SUV", couleur:"Bleu" , poids : "2 tonnes"};

let creerVoiture = (function(){
  // immediately.innerHTML = "Ici les éléments clé/valeurs de mon objet Voiture";
  for (var key in Voiture) {
    immediately.innerHTML += "<li><i>"+key+" </i> <b>=></b><i>"+Voiture[key]+"</i></li>";
  }
})();

/*
* Fin de a fonction immédiate
*/

/*
* Fonctions Fléchées
*/

var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// Sans la syntaxe des fonctions fléchées
var a2 = a.map(function (s) {
  return s.length });
// [31, 30, 31, 31]

// Avec, on a quelque chose de plus concis
var a3 = a.map( s => s.length);
// [31, 30, 31, 31]
console.log(a2);
console.log(a3);
/*
* Fin fonction fléchée
*/

/*
* Début Closure
*/
function init() {
  var nom = "Mozilla"; // nom est une variable locale de init
  function afficheNom() { // afficheNom est une fonction interne de init
    let prenom = "Jean";
    console.log("Closure, vérifier portée variable : "+nom); // ici nom est une variable libre (définie dans la fonction parente)
    console.log(prenom);
  }
  afficheNom();
};
init();

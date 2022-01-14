window.onload = function(){
  console.log(window.innerWith);
}
const select = document.querySelector('select');
var text = document.querySelector('#balisep');

select.addEventListener('change', choisirSport);
bouton.addEventListener('click', alerter);

function alerter(){
alert("Vous avez clické sur bouton");
}
//   function choisirSport() {
//   const choix = select.value;
//
//   if (choix ==='foot') {
//     text.textContent = 'Vous adorez regarder le foot à la télévision';
//   } else if (choix === 'hand') {
//     text.textContent = 'Vous devez avoir de grandes mains vous.';
//   } else if (choix === 'boxe') {
//     text.textContent = "Moi j'adore mohamed Ali.";
//   } else if (choix === 'volley') {
//     text.textContent = "Moi j'aime aussi le volley à la plage.";
//     alert("Oh my god");
//   } else {
//     text.textContent = "Vous n'avez point fait de choix";
//   }
// }

var fruits = ["banane", "pomme", "mangue", "orange" ];
var legumes = "banane, pomme, mangue, orange" ;
let splitter = legumes.split(',');
console.log(splitter);
var balise_fruits = document.querySelector("#fruits");
console.log(fruits.length);
for (var i = 0; i < fruits.length; i++) {
// balise_fruits.innerHTML += "";
balise_fruits.innerHTML += "<li>"+fruits[i]+"</li>";
console.log(fruits[i]);
console.log(i);
}

var j = 0;
while(j > fruits.length ){
console.log(j);
// j++;
}
do {
console.log(j);
}while(j > fruits.length);



function choisirSport(){
  const choix = select.value;
  switch (choix) {
    case 'foot':
      text.innerHTML = '<p class="machin">Vous adorez regarder le foot à la télévision</p>';
      break;
    case 'hand':
      text.innerHTML = '<p id="blink">Vous devez avoir de grandes mains vous.</p>';
      break;
    case 'boxe':
      text.textContent = "Moi j'adore mohamed Ali.";
      setTimeout((text = document.querySelector('#balisep')) => {
        console.log(text);
        text.setAttribute("style","color:red; font-family:Fantasy");
        console.log("après 3 secondes");
        // text.style.color = "red";
        setTimeout((text = document.querySelector('#balisep')) =>{
          setTimeout((text = document.querySelector('#balisep')) => {
            text.setAttribute("class","blink");
            setTimeout((text = document.querySelector('#balisep'))=>{
              text.setAttribute("style","color:black; font-family:Times, sans-serif");
              text.setAttribute("class","");

            }, 3000);

          }, 3000);
          console.log("après 6 secondes");
          text.setAttribute("style","color:blue; font-family:Cambria; font-size: 24px");
        }, 3000);
      },3000);
      break;
    case 'volley':
      text.textContent = "Moi j'aime aussi le volley à la plage.";
      break;
    // incorporez autant de case que vous le souhaitez
    default:
      text.textContent = "Vous n'avez point fait de choix";
  }
}

/****************************************************/
// 1 - Dans une boucle for initialiser une variable à zéro, l'incrémenter et afficher ses valeur jusq'à 10 ;
// 2 - Afficher cette fois que les nombres paires
// Exemple continue
let inst_continu = document.getElementById('inst_continu');
for (var k = 1; k <= 10; k++) {
// affiche valeur i
if(k % 2 != 0){
  continue;
}
inst_continu.innerHTML += "<li>valeur de k :"+k+"</li>";
}
/***************************************************/
/*****************************test de le boucle for in **************/
let objet = {fruit:"banane", outil:"clé à molette", nombre:1, booleen: true, tableau: ["chaine", 0, true, 3]};
let tab = ["machin", 1, true, false, 34];
function afficherProps(obj, nomObj) {
var result = "";
for (var i in obj) {
  result += '<li>'+ nomObj + " dont la clé est " + i + " = " + obj[i] + "</li>";
}
result += "\n";
return result;
}
function afficherValues(obj){
var i = 0;
var result  ="";
for ( var j of obj){
  result += "<li> mon objet a pour valeur dans sa position "+i+": "+j+"</li>";
  i++;
}
return result;
}
var monresult = afficherProps(objet, "monobjet");
let forin = document.getElementById('forin');
forin.innerHTML = monresult ;

let forof = document.getElementById('forof');
var afficherValues = afficherValues(tab);
forof = document.querySelector('#forof');
forof.innerHTML = afficherValues ;

/*****************************test de le boucle for in **************/
let alpha = 12;
let beta = 9;
let gamma = 2;
let variable = 13;
if (variable > gamma) {
  console.log(" Variable est supérieur à gamma");
  text.textContent = "Variable est supérieur à gamma";
  if(variable > beta){
    console.log(" Valriable est supérieur à gamma et beta");
    text.textContent = "Valriable est supérieur à gamma et beta";

  }
  if(variable > alpha){
    console.log(" Variable est supérieur à gamma, beta et alpha");
    text.textContent = "Valriable est supérieur à gamma, beta et alpha";
  }
} else {
console.log("Valriable est inférieur à gamma, beta et alpha ");
text.textContent = "Variable est inférieur à gamma, beta et alpha ";
}
// Instruction
{
  var machin = "string"
  console.log(machin);
}

var camionDeGlaces= true;
var etatDeLaMaison  ="on fire";

// ( camionDeGlaces == true ) ? alert("camion glace est vrai") : alert("camion glace est faux");

if (!(camionDeGlaces || etatDeLaMaison === 'on fire')) {
console.log('Vous pouvez probablement rester dedans.');
text.textContent = "Vous pouvez probablement rester dedans.";
} else {
console.log('Vous devriez sortir de la maison rapidement.');
text.textContent = "Vous devriez sortir de la maison rapidement.";
}

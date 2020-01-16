let arrayMot;
let divJeu = document.getElementById('jeu');
let h2Tour = document.getElementById('tour');
let inputMot = document.getElementById("InputMot");
let boutonSend = document.getElementById("BoutonInput");
let restartBouton = document.getElementById("reload");
let letterUsed =  document.getElementById("LetterUsed");

let compteurBonneLettre = 0;
let letterUsedArray = [];
let tableauLettre;
let imageNbr = "0";

let tableauLettreAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];




  let mot;
  function setWord() {
    mot = inputMot.value;
    mot = mot.toUpperCase();
    tableauLettre = Array.from(mot);
    // console.log("tableLettre " + tableauLettre)
    let div;
    let i;

    for (i = 0; i < tableauLettre.length; i++) {
      div = document.createElement('div');
      div.setAttribute('class', `letter ${i}`);
      document.getElementById("word").appendChild(div)
    }

    inputMot.style.display = "none";
    boutonSend.style.display = "none";

    cpu();
  }


  function cpu() {

    let rngLettre = Math.floor((Math.random() * tableauLettreAlphabet.length-1));
    let cpuLettre;
    console.log("rng " + rngLettre)
    if (rngLettre === -1) {
      rngLettre = 0;
    }
    cpuLettre = tableauLettreAlphabet[rngLettre];
    letterUsed.innerHTML = letterUsedArray;

    console.log("cpuLettre "+ cpuLettre)

    if (tableauLettre.length == compteurBonneLettre) {
      h2Tour.innerHTML = "Vous avez perdu"
      restartBouton.style.display = "inline-flex";
    } else if (imageNbr === 6) {
    h2Tour.innerHTML = "L'ordinateur à perdu";
      restartBouton.style.display = "inline-flex";
  } else {
    if (!letterUsedArray.includes(cpuLettre)) {
      letterUsedArray.push(cpuLettre);
      console.log("bonne lettre " + compteurBonneLettre)

            if (mot.includes(cpuLettre)) {
          for (let j = 0; j < tableauLettre.length; j++) {

            let divNumber = document.getElementsByClassName(j)[0];
            // console.log(divNumber)
            if(tableauLettre[j] === cpuLettre) {
                divNumber.textContent = tableauLettre[j];
                compteurBonneLettre++;
              }
            }
            //    console.log("j " + j)
                } else {
              let image = document.getElementById('imagePendu');
              if(image.src.match(`img/pendu-${imageNbr}`)){
              imageNbr++;
              image.src = `img/pendu-${imageNbr}`;
            //  console.log("image" + imageNbr)
            }
        }
      }
      setTimeout(cpu, 1000);
  }
}

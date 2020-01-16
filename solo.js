let arrayMot;
let divJeu = document.getElementById('jeu');
let h2Tour = document.getElementById('tour');

    let compteurBonneLettre = 0;
    let letterUsedArray = [];


function readTextFile(file)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                let allText = rawFile.responseText;
                let textByLine = allText.split("\n") // On sépare les mots à chaque saut de ligne
                let motsListe = Array.from(textByLine); // On les transfrome en un tableau
                arrayMot = motsListe;
                // console.log(motsListe);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("./listeMots.txt");

// RNG Liste mot

  let rngMot = Math.floor((Math.random() * arrayMot.length-1) + 1);

  // console.log(rngMot);

  let mot = arrayMot[rngMot];
  let tableauLettre = Array.from(mot);

   console.log(tableauLettre)

  let div;
  let i;

  for (i = 0; i < tableauLettre.length; i++) {
    div = document.createElement('div');
    div.setAttribute('class', `letter ${i}`);
    document.getElementById("word").appendChild(div)
  }

  let imageNbr = "0";

  function setLetterInput() {


    let letterInput = document.getElementById("inputLetter");
    let boutonInput = document.getElementById("BoutonInput");
    let restartBouton = document.getElementById("reload");
    let letterUsed =  document.getElementById("LetterUsed");



    mot = mot.toUpperCase();
     let letterInputValue = letterInput.value.toUpperCase();
    console.log(letterUsedArray)
    if (!letterUsedArray.includes(letterInputValue)) {
      letterUsedArray.push(letterInputValue);
      console.log("bonne lettre " + compteurBonneLettre)

      if (mot.includes(letterInputValue)) {
    for (let j = 0; j < tableauLettre.length; j++) {

      let divNumber = document.getElementsByClassName(j)[0];
      // console.log(divNumber)
      if(tableauLettre[j] === letterInputValue) {
          divNumber.textContent = tableauLettre[j];
          compteurBonneLettre++;

      //    console.log("j " + j)
          }
        }
      } else {
      let image = document.getElementById('imagePendu');

      if(image.src.match(`img/pendu-${imageNbr}`)){
      imageNbr++;
      // console.log(imageNbr);
      image.src = `img/pendu-${imageNbr}`;
      console.log(imageNbr)
    } if (imageNbr === 6) {
        h2Tour.innerHTML = `Vous avez perdu, le mot était ${mot}`
        boutonInput.style.display = "none";
        letterInput.style.display = "none";
        restartBouton.style.display = "inline-flex";

    }
  }
}

    if (tableauLettre.length == compteurBonneLettre) {
      h2Tour.innerHTML = "Vous avez gagné"
      boutonInput.style.display = "none";
      letterInput.style.display = "none";
      restartBouton.style.display = "inline-flex";
    }

  letterUsed.innerHTML = letterUsedArray;




}

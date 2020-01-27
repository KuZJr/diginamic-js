let inputchoix = document.querySelector("#choix");
let inputbtn = document.querySelector("#btnchoix");
let chances = document.querySelector("#chances");

let toGuess = Math.floor(Math.random() * 10) + 1;
let nbchances = 5;

inputbtn.onclick = function () {
    if (isNaN(inputchoix.value)) {
        alert("Entrer un nombre uniquement !");
    }
    else if (inputchoix.value == toGuess) {
        alert("Bravo ! Vous avez gagné !");
        reset();
    }
    else if (nbchances == 0) {
        alert("Perdu ! Plus d'essais !");
        reset();
    }
    else if (inputchoix.value != toGuess) {
        alert("Raté ! Essayez encore !");
        loseChance();
    }
};

function loseChance() {
    nbchances -= 1;
    chances.textContent = "Nombre de chances restantes : " + nbchances;
}

function reset() {
    toGuess = Math.floor(Math.random() * 10) + 1;
    nbchances = 5;
    chances.textContent = "Nombre de chances restantes : 5";
}
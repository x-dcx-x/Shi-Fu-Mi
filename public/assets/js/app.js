let imgPc = document.getElementById("imgs_pc");
let pc_point = document.getElementById("pc_point");
let player_point = document.getElementById("player_point");
let result = document.getElementById("result")
pc_point.innerHTML;
player_point.innerHTML;
let score_player = 0;
let score_pc = 0;
let computerChoice;
let playerChoice;


let pierre = document.getElementById("pierre_player");
pierre.addEventListener('click', function () {
    playerChoice = "pierre";
    makegame();
});

let feuille = document.getElementById("feuille_player");
feuille.addEventListener("click", function () {
    playerChoice = "feuille";
    makegame();
});

let ciseaux = document.getElementById("ciseaux_player");
ciseaux.addEventListener("click", function () {
    playerChoice = "ciseaux";
    makegame();
});

function makegame() {
    let choice_pc = Math.floor(Math.random() * 3);
    pierre = 0;
    feuille = 1;
    ciseaux = 2;

    if (choice_pc === 0 && "pierre") {
        imgPc.style.backgroundImage = "url('public/images/Pierre.jpg')";
        computerChoice = "pierre";
        if (playerChoice === "feuille") {
            score_player++;
            result.innerHTML = "Vous gagnez";
        } else if (playerChoice === "ciseaux") {
            score_pc++;
            result.innerHTML = "L'ordi gagne";
        } else {
            result.innerHTML = "Egalité";
        }
    }
    if (choice_pc === 1 && "feuille") {
        imgPc.style.backgroundImage = "url('public/images/Feuille.jpg')";
        computerChoice = "feuille";
        if (playerChoice === "ciseaux") {
            score_player++;
            result.innerHTML = "Vous gagnez";
        } else if (playerChoice === "pierre") {
            score_pc++;
            result.innerHTML = "L'ordi gagne";
        } else {
            result.innerHTML = "Egalité";
        }
    }

    if (choice_pc === 2 && "ciseaux") {
        imgPc.style.backgroundImage = "url('public/images/Ciseaux.jpg')";
        computerChoice = "ciseaux";
        if (playerChoice === "pierre") {
            score_player++;
            result.innerHTML = "Vous gagnez";
        } else if (playerChoice === "feuille") {
            score_pc++;
            result.innerHTML = "L'ordi gagne";
        } else {
            result.innerHTML = "Egalité";
        }
    }
    player_point.innerHTML = score_player;
    pc_point.innerHTML = score_pc;
}
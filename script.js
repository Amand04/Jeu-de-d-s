let randomNumber;
let score1;
let score2;
let globalScore1;
let playerOn = "player1";
let scoreText;
let globalText;

/*INITIALISATION*/
let newGame = () => {
  document.getElementById("score1").textContent = 0;
  document.getElementById("globalScore1").textContent = 0;
  document.getElementById("score2").textContent = 0;
  document.getElementById("globalScore2").textContent = 0;
};
document.getElementById("buttonNewGame").addEventListener("click", newGame);
newGame();

/*ROLL BUTTON/AFFICHAGE SCORE AND DICE IMAGE*/
let Dice = () => {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  document
    .getElementById("diceNumber")
    .setAttribute("src", "images/face_dice--" + randomNumber + ".png");

  document.getElementById("score1").innerHTML = randomNumber;
  if (randomNumber === 1) {
    document.getElementById("score1").textContent = 0;
    alert("Vous avez fait 1! Passez votre tour!");
    switchPlayer();
  }
};

document.getElementById("rollTheDice").addEventListener("click", Dice);

/*SWITCH PLAYER*/
function switchPlayer() {
  if (playerOn === "player1") {
    playerOn = "player2";
    alert(" Place au player2!");
  } else {
    playerOn = "player1";
    alert(" Place au player1!");
  }

  switch (playerOn) {
    case "player1": {
      console.log("1");
      scoreText = document.getElementById("score1");
      globalText = document.getElementById("globalScore1");
      score = score1;
      global = globalScore1;
      break;
    }
    case "player2": {
      console.log("2");
      scoreText = document.getElementById("score2");
      globalText = document.getElementById("globalScore2");
      score = score2;
      global = globalScore2;
      break;
    }
    default: {
      console.log("erreur Player");
    }
  }
}
scoreText = document.getElementById("score1").textContent;
globalText = document.getElementById("globalScore1").textContent;
scoreText = document.getElementById("score2").textContent;
globalText = document.getElementById("globalScore2").textContent;
let score = document.getElementById("score1").textContent;
let global = document.getElementById("globalScore1");
/*HOLD BUTTON*/
let Hold = () => {
  {
    score.textContent = randomNumber;
    global.textContent += score;

    console.log("alert");
  }

  switchPlayer();
};
document.getElementById("hold").addEventListener("click", Hold);

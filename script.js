let randomNumber;
let score;
let score2;
let globalScore1;
let playerOn = "player1";
let scoreText1;
let globalText1;
let scoreText2;
let globalText2;
let border1 = document.getElementById("card1");
let border2 = document.getElementById("card2");
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
  if (playerOn === "player1") {
    document.getElementById("score1").textContent = randomNumber;
  }
  if (playerOn === "player2") {
    document.getElementById("score2").textContent = randomNumber;
  }
  if (randomNumber === 1) {
    document.getElementById("score1").textContent = 0;
    alert("Vous avez fait 1! Passez votre tour!");
    switchPlayer();
  }
};
document.getElementById("rollTheDice").addEventListener("click", Dice);
/*SWITCH PLAYER*/
let switchPlayer = () => {
  if (playerOn === "player1") {
    playerOn = "player2";
  } else {
    playerOn = "player1";
  }
  switch (playerOn) {
    case "player1": {
      console.log("1");
      border1.setAttribute("style", "border: solid 15px #D885A3");
      border2.setAttribute("style", "border: solid 15px #ffe4c0");
      scoreText1 = document.getElementById("score1");
      globalText1 = document.getElementById("globalScore1");
      document.getElementById("score2").textContent = 0;
      break;
    }
    case "player2": {
      console.log("2");
      border2.setAttribute("style", "border: solid 15px #D885A3");
      border1.setAttribute("style", "border: solid 15px #ffe4c0");
      scoreText2 = document.getElementById("score2");
      globalText2 = document.getElementById("globalScore2");
      global = globalScore2;
      document.getElementById("score1").textContent = 0;
      break;
    }
    default: {
      console.log("erreur Player");
    }
  }
};
let global1;
scoreText1 = document.getElementById("score1");
globalText1 = document.getElementById("globalScore1").textContent;
scoreText2 = document.getElementById("score2").textContent;
globalText2 = document.getElementById("globalScore2").textContent;
let global = document.getElementById("globalScore1");
/*HOLD BUTTON*/
let Hold = () => {
  if (playerOn === "player1") {
    globalText1 += scoreText1 = global1;
    document.getElementById("globalScore1").innerText = parseInt(global1);
  }
  if (playerOn === "player2") {
    document.getElementById("globalScore2").textContent +=
      document.getElementById("score2").textContent;
  }
  console.log("alert");
  switchPlayer();
};
document.getElementById("hold").addEventListener("click", Hold);

let finish = document.getElementById("rollTheDice");
let Winner = () => {
  if (globalText1 >= 5) {
    finish.setAttribute("disabled", "true");
    alert("Le joueur 1 a gagné");
  }
  if (globalText2) {
    finish.setAttribute("disabled", "true");
    alert("Le joueur 2 a gagné");
  }
};

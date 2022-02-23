let randomNumber;
let playerOn = "player1";
let scoreText1;
let scoreText2;
let globalText1;
let globalText2;
let border1 = document.getElementById("card1");
let border2 = document.getElementById("card2");

/*ROLL BUTTON/AFFICHAGE SCORE AND DICE IMAGE*/
let Dice = () => {
  disabledHoldBtn();
  desactivateAlertNumber1();
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
  enableBtn();
  if (randomNumber === 1) {
    alertNumber1();
    switchPlayer();
    disabledHoldBtn();
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
      border1.setAttribute("style", "border: solid 15px #FF7BA9");
      border2.setAttribute("style", "border: solid 15px #ffe4c0");
      document.getElementById("score2").textContent = 0;
      break;
    }
    case "player2": {
      console.log("2");
      border2.setAttribute("style", "border: solid 15px #FF7BA9");
      border1.setAttribute("style", "border: solid 15px #ffe4c0");
      document.getElementById("score1").textContent = 0;
      break;
    }
    default:
      {
        console.log("erreur Player");
      }
      disabledHoldBtn();
  }
};

let alertNumber1 = () => {
  document.getElementById("custom-alert-box-button").hidden = false;
};
let desactivateAlertNumber1 = () => {
  document.getElementById("custom-alert-box-button").hidden = true;
};
/*DISACTIVATE HOLD BUTTON*/
let disabledHoldBtn = () => {
  document.getElementById("hold").disabled = true;
};
let enableBtn = () => {
  document.getElementById("hold").disabled = false;
};
/*INITIALISATION*/
let newGame = () => {
  document.location.reload();
  document.getElementById("score1").textContent = 0;
  document.getElementById("globalScore1").textContent = 0;
  document.getElementById("score2").textContent = 0;
  document.getElementById("globalScore2").textContent = 0;
};
document.getElementById("buttonNewGame").addEventListener("click", newGame);
/*A FINI!!!*/
let points1 = "score1";
let total1 = "globalScore1";
let theScore1 =
  document.getElementById("score1") + document.getElementById("globalScore1");
let globalScore2 =
  document.getElementById("globalScore2") + document.getElementById("score2");
/*HOLD BUTTON*/
let Hold = () => {
  if (playerOn === "player1") {
    document.getElementById("globalScore1").textContent +=
      document.getElementById("score1").textContent;
  }
  if (playerOn === "player2") {
    document.getElementById("globalScore2").textContent +=
      document.getElementById("score2").textContent;
  }
  disabledHoldBtn();
  console.log("alert");
  switchPlayer();
};
document.getElementById("hold").addEventListener("click", Hold);

/*let finish = document.getElementById("rollTheDice");
let Winner = () => {
  if (globalText1 >= 5) {
    finish.setAttribute("disabled", "true");
    alert("Le joueur 1 a gagné");
  }
  if (globalText2) {
    finish.setAttribute("disabled", "true");
    alert("Le joueur 2 a gagné");
  }
};*/

//select the classes we require
let cube = document.getElementById("cube");
let rollBtn = document.getElementById("rollTheDice");
let currentClass = "";
let randomNumber = Math.floor(Math.random() * 6) + 1;

//our main roll dice function on click
function rollDice() {
  disabledHoldBtn();
  desactivateAlertNumber1();

  //genberate a random number between 1 and 6 with out getRandomInt function
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  //generate a class with the random number between 1 - 6 called showClass
  let showClass = "show-" + randomNumber;
  console.log(showClass);
  // if there is a class already selected remove it
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  // add the new showclass with the generated number
  cube.classList.add(showClass);
  //set the current class to the randomly generated number
  currentClass = showClass;

  if (playerOn === "player1") {
    score1 += randomNumber;
    document.getElementById("score1").textContent = score1;
  }
  if (playerOn === "player2") {
    score2 += randomNumber;
    document.getElementById("score2").textContent = score2;
  }
  enableBtn();
  if (randomNumber === 1) {
    alertNumber1();
    switchPlayer();
    disabledHoldBtn();
  }
}
document.getElementById("rollTheDice").addEventListener("click", rollDice);
/*SWITCH PLAYER FUNCTION*/
let switchPlayer = () => {
  if (playerOn === "player1") {
    playerOn = "player2";
    score2 = 0;
  } else {
    playerOn = "player1";
    score1 = 0;
  }
  switch (playerOn) {
    case "player1": {
      console.log("1");
      border1.setAttribute("style", "border: solid 15px #ffa1c9");
      border2.setAttribute("style", "border: solid 15px #ffe4c0");
      document.getElementById("score2").textContent = 0;
      break;
    }
    case "player2": {
      console.log("2");
      border2.setAttribute("style", "border: solid 15px #ffa1c9");
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
/*ACTIVATE ALERT IF RANDOMNUMBER = 1*/
let alertNumber1 = () => {
  document.getElementById("alert__number1").hidden = false;
};
/*DESACTIVATE ALERT IF RANDOMNUMBER = 1*/
let desactivateAlertNumber1 = () => {
  document.getElementById("alert__number1").hidden = true;
};
/*DISACTIVATE HOLD BUTTON*/
let disabledHoldBtn = () => {
  document.getElementById("hold").disabled = true;
};
/*ACTIVATE HOLD BUTTON*/
let enableBtn = () => {
  document.getElementById("hold").disabled = false;
};
/*DISACTIVATE ROLL THE DICE BUTTON*/
let disabledRollTheDice = () => {
  document.getElementById("rollTheDice").disabled = true;
};
/*ACTIVATE ROLL THE DICE BUTTON*/
let enableRollTheDice = () => {
  document.getElementById("rollTheDice").disabled = false;
};
/*INITIALISATION*/
const newGame = () => document.location.reload();
document.getElementById("buttonNewGame").addEventListener("click", newGame);
/*HOLD BUTTON FUNCTION*/
let Hold = () => {
  if (playerOn === "player1") {
    globalScore1 += score1;
    console.log(globalScore1);
    document.getElementById("globalScore1").textContent = globalScore1;
  }
  if (playerOn === "player2") {
    globalScore2 += score2;
    console.log(globalScore2);
    document.getElementById("globalScore2").textContent = globalScore2;
  }
  switchPlayer();
  disabledHoldBtn();
  Winner();
};
document.getElementById("hold").addEventListener("click", Hold);
/*WINNER FUNCTION*/
let Winner = () => {
  if (globalScore1 >= 100) {
    winnerWindowOn1();
    border1.setAttribute("style", "border: solid 15px #ff008e");
    border2.setAttribute("style", "border: solid 15px #ffe4c0");
    disabledRollTheDice();
  }
  if (globalScore2 >= 100) {
    winnerWindowOn2();
    border2.setAttribute("style", "border: solid 15px #ff008e");
    border1.setAttribute("style", "border: solid 15px #ffe4c0");
    disabledRollTheDice();
  }
};
/*WINNER WINDOW*/
let winnerWindowOn1 = () => {
  document.getElementById("alert__winner1").hidden = false;
};
let winnerWindowOn2 = () => {
  document.getElementById("alert__winner2").hidden = false;
};
document.getElementById("score1").textContent = 0;
document.getElementById("globalScore1").textContent = 0;
document.getElementById("score2").textContent = 0;
document.getElementById("globalScore2").textContent = 0;

let score1 = 0;
let score2 = randomNumber;
let playerOn = "player1";
const border1 = document.getElementById("card1");
const border2 = document.getElementById("card2");
let globalScore1 = 0;
let globalScore2 = 0;

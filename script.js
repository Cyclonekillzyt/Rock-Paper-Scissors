const rock = "R";
const paper = "P";
const scissors = "S";
let humanScore = 0;
let computerScore = 0;
const possibleMoves = [rock, paper, scissors];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[computerChoice];
}
function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: R, P or S").toUpperCase();
  if (humanChoice == "R" || humanChoice == "P" || humanChoice == "S") {
    return humanChoice;
  } else {
    alert("Invalid choice. Please enter R, P or S.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    alert("It's a draw");
    console.log("It's a draw");
  }else if (humanChoice == rock && computerChoice == scissors) {
    humanScore++;
    alert("You win! Rock beats Scissors");
    console.log("You win! Rock beats Scissors");
  }
}

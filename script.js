const rock = "R";
const paper = "P";
const scissors = "S";
let humanScore = 0;
let computerScore = 0;
const possibleMoves = [rock, paper, scissors];

const computerSelection = function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[computerChoice];
}
const humanSelection = function getHumanChoice() {
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
  }else if ((humanChoice == rock && computerChoice == scissors) || (humanChoice == paper && computerChoice == rock) || (humanChoice == scissors && computerChoice == paper)) {
    humanScore++;
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
    else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

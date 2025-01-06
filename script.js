const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
let humanScore = 0;
let computerScore = 0;
const possibleMoves = [rock, paper, scissors];

const computerSelection = function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[computerChoice];
}
const humanSelection = function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ROCK, PAPER or SCISSORS").toUpperCase();
  if (humanChoice == "ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS") {
    return humanChoice;
  } else {
    alert("Invalid choice. Please enter  ROCK, PAPER or SCISSORS");
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

playRound(humanSelection(), computerSelection());
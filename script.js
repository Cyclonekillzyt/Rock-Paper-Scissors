const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const possibleMoves = [rock, paper, scissors];

const computerSelection = function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[computerChoice];
};
const humanSelection = function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice: ROCK, PAPER or SCISSORS"
  ).toUpperCase();
  if (
    humanChoice == "ROCK" ||
    humanChoice == "PAPER" ||
    humanChoice == "SCISSORS"
  ) {
    return humanChoice;
  } else {
    alert("Invalid choice. Please enter  ROCK, PAPER or SCISSORS");
    return getHumanChoice();
  }
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      alert("It's a draw");
      console.log("It's a draw");
    } else if (
      (humanChoice == rock && computerChoice == scissors) ||
      (humanChoice == paper && computerChoice == rock) ||
      (humanChoice == scissors && computerChoice == paper)
    ) {
      humanScore++;
      alert(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      alert(`You lose! ${computerChoice} beats ${humanChoice}`);
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  for (let i = 0; i < 5; i++) {
    let humanChoice = humanSelection();
    let computerChoice = computerSelection();
    playRound(humanChoice, computerChoice);
  }
  (function finalScore() {
    if (humanScore > computerScore) {
      alert("Congratulations, you won!");
      console.log("Congratulations, you won!");
    } else if (humanScore < computerScore) {
      alert("Sorry, you lost!");
      console.log("Sorry, you lost!");
    } else {
      alert("It's a tie!");
      console.log("It's a tie!");
    }
    alert(`Final score: You - ${humanScore}, Computer - ${computerScore}`);
    console.log(`Final score: You - ${humanScore}, Computer - ${computerScore}`);
  })();
}

playGame();

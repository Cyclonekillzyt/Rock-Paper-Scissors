const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const computer = document.getElementById("computerScore");
const player = document.getElementById("playerScore");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const possibleMoves = [rock, paper, scissors];
let humanChoice = "";
rockBtn.onclick = () =>{
  humanChoice = rock;
  playGame();
}
paperBtn.onclick = () =>{
  humanChoice = paper;
  playGame();
}
scissorsBtn.onclick = () =>{
  humanChoice = scissors;
  playGame();
}


const computerSelection = function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[computerChoice];
};
const humanSelection = function getHumanChoice() {
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
  computer.innerHTML = computerScore;
  player.innerHTML = humanScore;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("It's a draw");
    } else if (
      (humanChoice == rock && computerChoice == scissors) ||
      (humanChoice == paper && computerChoice == rock) ||
      (humanChoice == scissors && computerChoice == paper)
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
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
      console.log("Congratulations, you won!");
    } else if (humanScore < computerScore) {
      console.log("Sorry, you lost!");
    } else {
      console.log("It's a tie!");
    }
    console.log(
      `Final score: You - ${humanScore}, Computer - ${computerScore}`
    );
  })();
}
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  playGame();
});

//playGame();

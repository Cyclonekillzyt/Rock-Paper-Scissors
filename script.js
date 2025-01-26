const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const computer = document.getElementById("computerScore");
const player = document.getElementById("playerScore");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rps = document.getElementById("rps");
const resultText = document.getElementById("resultText");
const resultComparison = document.getElementById("resultComparison");
const container = document.getElementById("container");
const round = document.getElementById("round");
const totalScore = document.getElementById("total")
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const possibleMoves = [rock, paper, scissors];


let currentRound = 0;
let humanScore = 0;
let computerScore = 0;
let total = 0;
let humanChoice = "";

rockBtn.onclick = () => {
  humanChoice = rock;
  playGame();
};
paperBtn.onclick = () => {
  humanChoice = paper;
  playGame();
};
scissorsBtn.onclick = () => {
  humanChoice = scissors;
  playGame();
};

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
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      resultText.textContent = " It's a draw";
      currentRound++;
      round.textContent = currentRound;
      total++;
      totalScore.textContent = total;
    } else if (
      (humanChoice == rock && computerChoice == scissors) ||
      (humanChoice == paper && computerChoice == rock) ||
      (humanChoice == scissors && computerChoice == paper)
    ) {
      humanScore++;
      resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      player.textContent = humanScore;
      currentRound++;
      round.textContent = currentRound;
      total = humanScore + computerScore;
      totalScore.textContent = total;
    } else {
      computerScore++;
      resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computer.textContent = computerScore;
      currentRound++;
      round.textContent = currentRound;
      total = humanScore + computerScore;
      totalScore.textContent = total;
    }
  }
  let humanChoice = humanSelection();
  let computerChoice = computerSelection();
  playRound(humanChoice, computerChoice);
  computer.innerText = computerScore;
  player.innerText = humanScore;
}

resetBtn.onclick = (function finalScore() {
  currentRound = 0;
  humanScore = 0;
  computerScore = 0;
})();

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  container.style.display = "block";
  currentRound = 1;
});

//playGame();

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
const totalScore = document.getElementById("total");
const firstImage = document.getElementById("first");
const secondImage = document.getElementById("second");
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const possibleMoves = [rock, paper, scissors];
secondImage.classList.add("reverse");

let currentRound = 0;
let humanScore = 0;
let computerScore = 0;
let total = 0;
let humanChoice = "";
let computerChoice = "";

rockBtn.addEventListener("click", () => {
  humanChoice = rock;
  resetImage();
  startingAnimation();
  setTimeout(playGame, 3000);
  setTimeout(changeImage, 3000);
});

paperBtn.onclick = () => {
  humanChoice = paper;
  resetImage();
  startingAnimation();
  setTimeout(playGame, 3000);
  setTimeout(changeImage, 3000);
};

scissorsBtn.onclick = () => {
  humanChoice = scissors;
  resetImage();
  startingAnimation();
  setTimeout(playGame, 3000);
  setTimeout(changeImage, 3000);
};

const computerSelection = function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * possibleMoves.length);
  let choice = possibleMoves[randomChoice];
  computerChoice = choice;
  return choice;
};

const humanSelection = function getHumanChoice() {
  if (
    humanChoice == "ROCK" ||
    humanChoice == "PAPER" ||
    humanChoice == "SCISSORS"
  ) {
    return humanChoice;
  }
};

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      resultText.textContent = "It's a draw";
      currentRound++;
      round.textContent = currentRound;
      total++;
      totalScore.textContent = total;
      rps.textContent = humanChoice;
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
      totalScore.textContent = total;
      rps.textContent = humanChoice;
    } else {
      computerScore++;
      resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computer.textContent = computerScore;
      currentRound++;
      round.textContent = currentRound;
      totalScore.textContent = total;
      rps.textContent = computerChoice;
    }
  }
  humanChoice = humanSelection();
  computerChoice = computerSelection();
  playRound(humanChoice, computerChoice);
  computer.innerText = computerScore;
  player.innerText = humanScore;
}

resetBtn.onclick = function finalScore() {
  currentRound = 0;
  humanScore = 0;
  computerScore = 0;
  computer.textContent = computerScore;
  player.textContent = humanScore;
  totalScore.textContent = 0;
};

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  container.style.display = "block";
  currentRound = 1;
});

startBtn.style.display = "none";
resetBtn.style.display = "block";
container.style.display = "block";

function startingAnimation() {
  firstImage.classList.add("left");
  secondImage.classList.add("right");
  setTimeout(() => {
    firstImage.classList.remove("left");
    secondImage.classList.remove("right");
  }, 3000);
}

function changeImage() {
  switch (humanChoice) {
    case "ROCK":
      firstImage.src = "pictures/rock.png";
      break;
    case "PAPER":
      firstImage.src = "pictures/paper.png";
      break;
    case "SCISSORS":
      firstImage.src = "pictures/scissors.png";
      break;
  }
  switch (computerChoice) {
    case "ROCK":
      secondImage.src = "pictures/rock.png";
      break;
    case "PAPER":
      secondImage.src = "pictures/paper.png";
      break;
    case "SCISSORS":
      secondImage.src = "pictures/scissors.png";
      break;
  }
}

function resetImage() {
  firstImage.src = "pictures/rock.png";
  secondImage.src = "pictures/rock.png";
}

console.log(computerChoice);

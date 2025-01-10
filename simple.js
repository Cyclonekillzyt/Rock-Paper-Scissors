const possibleInputs = [rock, paper, scissors];

let round = 0;

function checkComparison() {
  const computerMove =
    possibleInputs[Math.floor(Math.random() * possibleInputs.length)];
  const userInput = prompt(
    "Rock Paper Scissors go pick between(R,P,S)"
  ).toUpperCase();
  if (userInput === rock && computerMove === rock) {
    alert("It's a draw");
    console.log("It's a draw");
  } else if (userInput === rock && computerMove === paper) {
    alert("You lose");
    console.log("Player loses");
    computerScore++;
  } else if (userInput === rock && computerMove === scissors) {
    alert("You win");
    console.log("Player wins");
    humanScore++;
  } else if (userInput === paper && computerMove === rock) {
    alert("You win");
    console.log("Player wins");
    humanScore++;
  } else if (userInput === paper && computerMove === paper) {
    alert("It's a draw");
    console.log("It's a draw");
  } else if (userInput === paper && computerMove === scissors) {
    alert("You lose");
    console.log("Player loses");
    computerScore++;
  } else if (userInput === scissors && computerMove === rock) {
    alert("You lose");
    console.log("Player loses");
    computerScore++;
  } else if (userInput === scissors && computerMove === paper) {
    alert("You win");
    console.log("Player wins");
    humanScore++;
  } else if (userInput === scissors && computerMove === scissors) {
    alert("It's a draw");
    console.log("It's a draw");
  } else {
    alert("Invalid input. Please pick R, P, or S.");
    console.log("Invalid input");
  }
  round++;
  console.log(`round: ${round}`);
  console.log(`Computer: ${computerScore}`);
  console.log(`Player: ${humanScore}`);
  replay();
}

function replay() {
  let restart = prompt(
    "Do you want to play again (Options: Y or N) "
  ).toUpperCase();
  if (restart === "Y") {
    checkComparison();
  } else if (restart === "N") {
    console.log(
      `Final scores:\nplayer: ${humanScore}\ncomputer:${computerScore}`
    );
  } else {
    alert("Invalid option, please select Y or N");
    replay();
  }
}
checkComparison();
